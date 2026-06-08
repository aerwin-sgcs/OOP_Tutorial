"""
IRONWALL  —  an OOP auto-battler built with pygame.

PLAYER CONTROLS
  SETUP PHASE
    Click a defender button  — select that type
    Click the green zone     — place selected defender
    Delete key               — remove the last placed defender
    Enter / Return           — start the battle (need at least 1 defender)

  BATTLE PHASE
    Spacebar  — fire a catapult bolt at the nearest rogue (3 shots per game)

  ANY TIME
    R  — restart (on WIN / LOSE screen)

Run:   python ironwall.py
(Requires pygame:  pip install pygame)
"""

import os, sys, math, random

SHOTS_MODE = "--shots" in sys.argv
if SHOTS_MODE:
    os.environ["SDL_VIDEODRIVER"] = "dummy"
    os.environ["SDL_AUDIODRIVER"] = "dummy"

import pygame

# ----------------------------------------------------------------------
# Constants
# ----------------------------------------------------------------------
WIDTH, HEIGHT = 960, 540
FPS           = 60
ASSETS        = os.path.join(os.path.dirname(os.path.abspath(__file__)), "assets")

PATH_Y          = HEIGHT // 2       # 270
CASTLE_X        = WIDTH - 200       # 760 — castle fully on screen
DEFENDER_LINE_X = CASTLE_X - 90
ENEMY_GOAL_X    = CASTLE_X          # enemies march to the castle wall

MAX_DEFENDERS = 4
PLACE_X_MIN   = 340                 # left of placement zone (right of sidebar)
PLACE_X_MAX   = CASTLE_X - 120     # well clear of castle
PLACE_Y_MIN   = 60
PLACE_Y_MAX   = HEIGHT - 60
MIN_SPACING   = 55

CATAPULT_SHOTS = 3

WHITE        = (255, 255, 255)
BLACK        = (0,   0,   0  )
RED          = (200, 50,  50 )
GREEN        = (70,  200, 90 )
GOLD         = (245, 200, 60 )
BRONZE       = (208, 160, 92 )
PARCHMENT    = (235, 222, 196)
HERALD_GREEN = (84,  168, 96 )
HERALD_RED   = (188, 64,  58 )
PANEL        = (38,  48,  62 )
ORANGE       = (255, 160, 40 )

# Number-key constants — top row AND numpad, defined as plain ints
# so they work before/after pygame.init() on any platform
TOP_ROW  = {49: 0, 50: 1, 51: 2}   # '1','2','3' → index
NUMPAD   = {256: 0, 257: 1, 258: 2} # KP0,KP1,KP2 — fallback, varies by platform


def load(name, size=None):
    img = pygame.image.load(os.path.join(ASSETS, name)).convert_alpha()
    return pygame.transform.smoothscale(img, size) if size else img


# ======================================================================
# GAME CHARACTERS
# ======================================================================
class GameCharacter:
    def __init__(self, name, max_hp, attack_power, sprite, x, y):
        self.name, self.max_hp, self.hp = name, max_hp, max_hp
        self.attack_power = attack_power
        self.sprite       = sprite
        self.x, self.y    = x, y
        self.cooldown     = 0

    def is_alive(self):       return self.hp > 0
    def take_damage(self, n): self.hp = max(0, self.hp - n)
    def attack(self, target): target.take_damage(self.attack_power)

    def draw(self, screen):
        rect = self.sprite.get_rect(center=(int(self.x), int(self.y)))
        screen.blit(self.sprite, rect)
        self._draw_health_bar(screen, rect)

    def _draw_health_bar(self, screen, rect):
        bw, bh = 60, 7
        bx, by = int(self.x - bw / 2), rect.top - 12
        pygame.draw.rect(screen, (40, 0, 0), (bx, by, bw, bh))
        frac   = self.hp / self.max_hp
        col    = GREEN if frac > 0.5 else (GOLD if frac > 0.25 else RED)
        pygame.draw.rect(screen, col,   (bx, by, int(bw * frac), bh))
        pygame.draw.rect(screen, BLACK, (bx, by, bw, bh), 1)


class Defender(GameCharacter):
    attack_range      = 200
    cooldown_max      = 50
    projectile_colour = WHITE

    def update(self, enemies, projectiles):
        if self.cooldown > 0:
            self.cooldown -= 1; return
        t = self._nearest(enemies)
        if t:
            self.attack(t, projectiles)
            self.cooldown = self.cooldown_max

    def _nearest(self, enemies):
        rng = [e for e in enemies if e.is_alive() and abs(e.x - self.x) <= self.attack_range]
        return min(rng, key=lambda e: abs(e.x - self.x)) if rng else None

    def attack(self, target, projectiles):
        projectiles.append(Projectile(self.x, self.y, target,
                                      self.attack_power, self.projectile_colour))


class Warrior(Defender):
    attack_range = 130; cooldown_max = 55; projectile_colour = (210, 210, 220)
    def __init__(self, x, y):
        super().__init__("Warrior", 100, 24, load("warrior.png", (84, 84)), x, y)


class Archer(Defender):
    attack_range = 320; cooldown_max = 32; projectile_colour = (120, 230, 140)
    def __init__(self, x, y):
        super().__init__("Archer", 80, 14, load("archer.png", (84, 84)), x, y)


class Thief(Defender):
    attack_range = 180; cooldown_max = 24; projectile_colour = (200, 160, 240)
    def attack(self, target, projectiles):
        projectiles.append(Projectile(self.x, self.y,      target, self.attack_power, self.projectile_colour))
        projectiles.append(Projectile(self.x, self.y - 10, target, self.attack_power, self.projectile_colour))
    def __init__(self, x, y):
        super().__init__("Thief", 70, 9, load("thief.png", (84, 84)), x, y)


class Enemy(GameCharacter):
    speed = 0.8; attack_cooldown = 60
    def update(self, castle):
        if self.x < ENEMY_GOAL_X:
            self.x += self.speed
        elif self.cooldown > 0:
            self.cooldown -= 1
        else:
            self.attack(castle); self.cooldown = self.attack_cooldown
    def attack(self, castle): castle.take_damage(self.attack_power)


class RogueArcher(Enemy):
    speed = 2.2; attack_cooldown = 40
    def __init__(self, x, y):
        super().__init__("Rogue Archer", 70, 6, load("rogue_archer.png", (80, 80)), x, y)


class RogueWarrior(Enemy):
    speed = 1.6; attack_cooldown = 50
    def __init__(self, x, y):
        super().__init__("Rogue Warrior", 170, 11, load("rogue_warrior.png", (80, 80)), x, y)


class RogueKing(Enemy):
    speed = 1.1; attack_cooldown = 45
    def __init__(self, x, y):
        super().__init__("Rogue King", 430, 20, load("rogue_king.png", (92, 92)), x, y)


# ======================================================================
# SUPPORTING OBJECTS
# ======================================================================
class Projectile:
    def __init__(self, x, y, target, damage, colour):
        self.x, self.y = x, y
        self.target, self.damage, self.colour = target, damage, colour
        self.speed = 9; self.dead = False

    def update(self):
        if not self.target.is_alive(): self.dead = True; return
        dx, dy = self.target.x - self.x, self.target.y - self.y
        dist   = math.hypot(dx, dy)
        if dist < self.speed:
            self.target.take_damage(self.damage); self.dead = True
        else:
            self.x += self.speed * dx / dist; self.y += self.speed * dy / dist

    def draw(self, screen):
        pygame.draw.circle(screen, self.colour, (int(self.x), int(self.y)), 5)
        pygame.draw.circle(screen, BLACK,        (int(self.x), int(self.y)), 5, 1)


class CatapultBolt:
    DAMAGE = 60; SPEED = 5
    def __init__(self, cx, cy, target):
        self.x, self.y = float(cx), float(cy)
        self.target = target; self.dead = False

    def update(self):
        if not self.target.is_alive():
            self.x -= self.SPEED
            if self.x < 0: self.dead = True
            return
        dx, dy = self.target.x - self.x, self.target.y - self.y
        dist   = math.hypot(dx, dy)
        if dist < self.SPEED:
            self.target.take_damage(self.DAMAGE); self.dead = True
        else:
            self.x += self.SPEED * dx / dist; self.y += self.SPEED * dy / dist

    def draw(self, screen):
        pygame.draw.circle(screen, ORANGE,       (int(self.x), int(self.y)), 10)
        pygame.draw.circle(screen, (255, 80, 0), (int(self.x), int(self.y)),  6)
        pygame.draw.circle(screen, BLACK,        (int(self.x), int(self.y)), 10, 2)


class Castle:
    def __init__(self):
        self.max_hp = 600; self.hp = self.max_hp
        self.sprite = load("castle.png", (180, 180))
        self.x, self.y = CASTLE_X, PATH_Y - 30
    def is_alive(self):       return self.hp > 0
    def take_damage(self, n): self.hp = max(0, self.hp - n)
    def draw(self, screen):   screen.blit(self.sprite, (self.x, self.y - 60))


# ======================================================================
# SIDEBAR LAYOUT
# Each defender option is a clickable button rect stored at setup time.
# ======================================================================
PANEL_X = 12
PANEL_Y = 10
PANEL_W = 310
PANEL_H = HEIGHT - 20   # 520

# Defender catalogue — list so order is fixed (index 0/1/2)
DEFENDER_CATALOGUE = [
    {"cls": Warrior, "label": "1  Warrior",
     "line1": "Heavy hits · Short range",
     "line2": "Tough — the front-line tank",
     "colour": (210, 210, 220)},
    {"cls": Archer,  "label": "2  Archer",
     "line1": "Long range · Fires fast",
     "line2": "Light damage — great coverage",
     "colour": (120, 230, 140)},
    {"cls": Thief,   "label": "3  Thief",
     "line1": "Double strike · Medium range",
     "line2": "Fast cooldown — rapid attacker",
     "colour": (200, 160, 240)},
]


# ======================================================================
# THE GAME
# ======================================================================
class Game:
    WAVES = [
        [RogueArcher, RogueWarrior, RogueArcher, RogueWarrior],
        [RogueWarrior, RogueArcher, RogueWarrior, RogueArcher, RogueWarrior, RogueArcher],
        [RogueWarrior, RogueArcher, RogueWarrior, RogueKing, RogueArcher, RogueWarrior, RogueArcher],
    ]

    def __init__(self):
        pygame.init()
        self.screen     = pygame.display.set_mode((WIDTH, HEIGHT))
        pygame.display.set_caption("Ironwall")
        self.clock      = pygame.time.Clock()
        self.font       = pygame.font.SysFont("arialroundedmtbold,arial", 24, bold=True)
        self.small_font = pygame.font.SysFont("arialroundedmtbold,arial", 17, bold=True)
        self.title_font = pygame.font.SysFont("georgia,timesnewroman,serif", 76, bold=True)
        self.sub_font   = pygame.font.SysFont("georgia,timesnewroman,serif", 30)
        self.ui_font    = pygame.font.SysFont("georgia,timesnewroman,serif", 17)

        self.grass = load("grass.png", (64, 64))
        self.path  = load("path.png",  (64, 64))

        # Pre-compute clickable button rects for the three defender options.
        # These are fixed positions — computed once here and reused every frame.
        BTN_TOP  = PANEL_Y + 80    # where first button starts
        BTN_H    = 68
        BTN_GAP  = 8
        self.btn_rects = []
        for i in range(3):
            y = BTN_TOP + i * (BTN_H + BTN_GAP)
            self.btn_rects.append(
                pygame.Rect(PANEL_X + 10, y, PANEL_W - 20, BTN_H)
            )

        self._reset_state()

    def _reset_state(self):
        self.castle      = Castle()
        self.defenders   = []
        self.enemies     = []
        self.projectiles = []
        self.bolts       = []
        self.wave_index  = 0
        self.spawn_queue = []
        self.spawn_timer = 0
        self.state       = "SETUP"

        self.catapult_left     = CATAPULT_SHOTS
        self.selected_idx      = 0      # index into DEFENDER_CATALOGUE
        self.ghost_pos         = None
        self.place_error       = ""
        self.place_error_timer = 0

    # ---- wave handling ------------------------------------------------
    def _start_wave(self, i):
        self.wave_index  = i
        self.spawn_queue = list(self.WAVES[i])
        self.spawn_timer = 0

    def _spawn_logic(self):
        if self.spawn_queue:
            self.spawn_timer -= 1
            if self.spawn_timer <= 0:
                cls = self.spawn_queue.pop(0)
                self.enemies.append(cls(-40, PATH_Y + random.randint(-30, 30)))
                self.spawn_timer = 55
        elif not self.enemies:
            if self.wave_index + 1 < len(self.WAVES):
                self._start_wave(self.wave_index + 1)
            else:
                self.state = "WIN"

    # ---- placement ----------------------------------------------------
    def _valid_placement(self, x, y):
        if not (PLACE_X_MIN <= x <= PLACE_X_MAX and PLACE_Y_MIN <= y <= PLACE_Y_MAX):
            return False, "Place in the green zone!"
        for d in self.defenders:
            if math.hypot(d.x - x, d.y - y) < MIN_SPACING:
                return False, "Too close to another defender!"
        return True, ""

    def _place_defender(self, x, y):
        if len(self.defenders) >= MAX_DEFENDERS:
            self.place_error = f"Max {MAX_DEFENDERS} defenders!"; self.place_error_timer = 120; return
        ok, msg = self._valid_placement(x, y)
        if not ok:
            self.place_error = msg; self.place_error_timer = 120; return
        cls = DEFENDER_CATALOGUE[self.selected_idx]["cls"]
        self.defenders.append(cls(float(x), float(y)))
        self.place_error = ""

    # ---- catapult -----------------------------------------------------
    def _fire_catapult(self):
        if self.catapult_left <= 0: return
        alive = [e for e in self.enemies if e.is_alive()]
        if not alive: return
        target = min(alive, key=lambda e: abs(e.x - CASTLE_X))
        self.bolts.append(CatapultBolt(self.castle.x + 30, self.castle.y - 20, target))
        self.catapult_left -= 1

    # ---- update -------------------------------------------------------
    def update(self):
        if self.state == "SETUP":
            if self.place_error_timer > 0: self.place_error_timer -= 1
            return
        if self.state != "PLAYING": return

        self._spawn_logic()
        for d in self.defenders:   d.update(self.enemies, self.projectiles)
        for e in self.enemies:     e.update(self.castle)
        for p in self.projectiles: p.update()
        for b in self.bolts:       b.update()

        self.enemies     = [e for e in self.enemies     if e.is_alive()]
        self.projectiles = [p for p in self.projectiles if not p.dead]
        self.bolts       = [b for b in self.bolts       if not b.dead]
        if not self.castle.is_alive(): self.state = "LOSE"

    # ---- drawing ------------------------------------------------------
    def draw(self):
        # terrain (always drawn)
        for ty in range(0, HEIGHT, 64):
            for tx in range(0, WIDTH, 64): self.screen.blit(self.grass, (tx, ty))
        for tx in range(0, WIDTH, 64):
            self.screen.blit(self.path, (tx, PATH_Y - 64))
            self.screen.blit(self.path, (tx, PATH_Y))
        self.castle.draw(self.screen)

        if self.state == "SETUP":
            self._draw_setup()
        else:
            self._draw_battle()

        pygame.display.flip()

    # ---- setup screen -------------------------------------------------
    def _draw_setup(self):
        cx = PANEL_X + PANEL_W // 2

        # green placement zone
        zr = pygame.Rect(PLACE_X_MIN, PLACE_Y_MIN,
                         PLACE_X_MAX - PLACE_X_MIN, PLACE_Y_MAX - PLACE_Y_MIN)
        zs = pygame.Surface((zr.w, zr.h), pygame.SRCALPHA)
        zs.fill((80, 180, 120, 40))
        self.screen.blit(zs, zr.topleft)
        pygame.draw.rect(self.screen, (80, 200, 130), zr, 2, border_radius=6)

        # placed defenders
        for d in self.defenders: d.draw(self.screen)

        # ghost preview (only in placement zone, not over sidebar)
        if self.ghost_pos:
            gx, gy = self.ghost_pos
            if gx >= PLACE_X_MIN:
                ok, _ = self._valid_placement(gx, gy)
                col   = (100, 220, 140) if ok else (220, 80, 80)
                gs    = pygame.Surface((60, 60), pygame.SRCALPHA)
                gs.fill((*col, 70)); self.screen.blit(gs, (gx - 30, gy - 30))
                pygame.draw.circle(self.screen, col, (gx, gy), 30, 2)

        # panel background
        ps = pygame.Surface((PANEL_W, PANEL_H), pygame.SRCALPHA)
        ps.fill((20, 30, 48, 220))
        self.screen.blit(ps, (PANEL_X, PANEL_Y))
        pygame.draw.rect(self.screen, BRONZE,
                         (PANEL_X, PANEL_Y, PANEL_W, PANEL_H), 2, border_radius=10)

        # --- title
        y = PANEL_Y + 12
        t = self.font.render("IRONWALL", True, GOLD)
        self.screen.blit(t, t.get_rect(centerx=cx, top=y)); y += 30
        s = self.small_font.render("Click a defender, then click the field", True, PARCHMENT)
        self.screen.blit(s, s.get_rect(centerx=cx, top=y)); y += 22
        pygame.draw.line(self.screen, BRONZE, (PANEL_X+14, y), (PANEL_X+PANEL_W-14, y), 1)

        # --- defender buttons (clickable)
        for i, info in enumerate(DEFENDER_CATALOGUE):
            r      = self.btn_rects[i]
            is_sel = i == self.selected_idx
            bs     = pygame.Surface((r.w, r.h), pygame.SRCALPHA)
            bs.fill((55, 95, 55, 210) if is_sel else (28, 40, 58, 190))
            self.screen.blit(bs, r.topleft)
            pygame.draw.rect(self.screen,
                             info["colour"] if is_sel else (60, 75, 95),
                             r, 2, border_radius=8)
            # label
            lbl = self.font.render(info["label"], True,
                                   info["colour"] if is_sel else WHITE)
            self.screen.blit(lbl, (r.x + 10, r.y + 6))
            # two description lines — short enough to fit
            d1 = self.ui_font.render(info["line1"], True, PARCHMENT)
            d2 = self.ui_font.render(info["line2"], True, (160, 175, 195))
            self.screen.blit(d1, (r.x + 12, r.y + 30))
            self.screen.blit(d2, (r.x + 12, r.y + 48))
            # selected indicator arrow
            if is_sel:
                pygame.draw.polygon(self.screen, info["colour"],
                    [(r.right - 14, r.centery - 7),
                     (r.right - 14, r.centery + 7),
                     (r.right -  4, r.centery)])

        # --- placed list (fixed zone, pinned below buttons)
        LIST_TOP = self.btn_rects[-1].bottom + 14
        pygame.draw.line(self.screen, BRONZE,
                         (PANEL_X+14, LIST_TOP - 4), (PANEL_X+PANEL_W-14, LIST_TOP - 4), 1)
        y = LIST_TOP
        pl = self.small_font.render(
            f"Placed: {len(self.defenders)} / {MAX_DEFENDERS}", True, GOLD)
        self.screen.blit(pl, pl.get_rect(centerx=cx, top=y)); y += 22

        BOTTOM_ZONE_TOP = PANEL_Y + PANEL_H - 108
        for d in self.defenders:
            if y + 20 > BOTTOM_ZONE_TOP: break
            e = self.ui_font.render(f"▸  {d.name}", True, PARCHMENT)
            self.screen.blit(e, (PANEL_X + 20, y)); y += 20

        if self.place_error_timer > 0 and self.place_error:
            if y + 18 <= BOTTOM_ZONE_TOP:
                er = self.small_font.render(self.place_error, True, RED)
                self.screen.blit(er, er.get_rect(centerx=cx, top=y))

        # --- bottom instructions (pinned to panel bottom)
        y = BOTTOM_ZONE_TOP
        pygame.draw.line(self.screen, BRONZE,
                         (PANEL_X+14, y), (PANEL_X+PANEL_W-14, y), 1)
        y += 10
        for k, v in [("Click a button", "select type"),
                     ("Delete",         "undo last"),
                     ("Return",         "start battle!")]:
            ks = self.small_font.render(k, True, BRONZE)
            vs = self.small_font.render(v, True, PARCHMENT)
            self.screen.blit(ks, (PANEL_X + 14, y))
            self.screen.blit(vs, (PANEL_X + PANEL_W - vs.get_width() - 12, y))
            y += 24

        needs_one = len(self.defenders) == 0
        sc  = (100, 100, 80) if needs_one else GOLD
        stx = "Need at least 1 defender" if needs_one else "Press Return to begin!"
        st  = self.small_font.render(stx, True, sc)
        self.screen.blit(st, st.get_rect(centerx=cx, top=y + 4))

    # ---- battle screen ------------------------------------------------
    def _draw_battle(self):
        for d in self.defenders:   d.draw(self.screen)
        for e in self.enemies:     e.draw(self.screen)
        for p in self.projectiles: p.draw(self.screen)
        for b in self.bolts:       b.draw(self.screen)
        self._draw_hud()
        if self.state == "WIN":
            self._draw_banner("VICTORY!", "The Ironwall holds.", HERALD_GREEN)
        elif self.state == "LOSE":
            self._draw_banner("DEFEATED!", "The castle has fallen.", HERALD_RED)

    def _draw_hud(self):
        tag = self.font.render(
            f"IRONWALL    Wave {self.wave_index + 1} / {len(self.WAVES)}", True, WHITE)
        box = pygame.Surface((tag.get_width() + 24, 40))
        box.set_alpha(150); box.fill(BLACK)
        self.screen.blit(box, (16, 14)); self.screen.blit(tag, (28, 20))

        bw, bh = 240, 26
        bx, by = WIDTH - bw - 20, 16
        pygame.draw.rect(self.screen, (50, 0, 0), (bx, by, bw, bh))
        pygame.draw.rect(self.screen, RED, (bx, by, int(bw * self.castle.hp / self.castle.max_hp), bh))
        pygame.draw.rect(self.screen, WHITE, (bx, by, bw, bh), 2)
        self.screen.blit(self.font.render(f"CASTLE  {self.castle.hp}", True, WHITE), (bx+8, by+1))

        cat_x, cat_y = 16, 58
        cl = self.small_font.render("Catapult  [SPACE]:", True, ORANGE)
        self.screen.blit(cl, (cat_x, cat_y))
        for i in range(CATAPULT_SHOTS):
            col = ORANGE if i < self.catapult_left else (60, 60, 60)
            ox  = cat_x + cl.get_width() + 10 + i * 26
            pygame.draw.circle(self.screen, col,   (ox, cat_y + 10), 9)
            pygame.draw.circle(self.screen, BLACK, (ox, cat_y + 10), 9, 1)

    def _draw_banner(self, title, subtitle, colour):
        ov = pygame.Surface((WIDTH, HEIGHT)); ov.set_alpha(170); ov.fill(BLACK)
        self.screen.blit(ov, (0, 0))
        pw, ph = 620, 240; px, py = (WIDTH-pw)//2, (HEIGHT-ph)//2
        pygame.draw.rect(self.screen, PANEL,  (px, py, pw, ph), border_radius=14)
        pygame.draw.rect(self.screen, BRONZE, (px, py, pw, ph), width=4, border_radius=14)
        pygame.draw.line(self.screen, BRONZE, (px+30, py+118), (px+pw-30, py+118), 2)
        cx = WIDTH // 2
        ti = self.title_font.render(title,    True, colour);   self.screen.blit(ti, ti.get_rect(center=(cx, py+66)))
        si = self.sub_font.render(subtitle,   True, PARCHMENT); self.screen.blit(si, si.get_rect(center=(cx, py+158)))
        hi = self.font.render("Press R to play again, or close the window.", True, BRONZE)
        self.screen.blit(hi, hi.get_rect(center=(cx, py+202)))

    # ---- events -------------------------------------------------------
    def handle_event(self, event):
        if event.type == pygame.KEYDOWN:
            k = event.key

            # Restart
            if k == pygame.K_r and self.state in ("WIN", "LOSE"):
                self._reset_state(); return

            if self.state == "SETUP":
                # Number keys — top row (49/50/51) AND numpad (varies by platform)
                idx = TOP_ROW.get(k, NUMPAD.get(k))
                if idx is not None and idx < len(DEFENDER_CATALOGUE):
                    self.selected_idx = idx
                elif k in (pygame.K_BACKSPACE, pygame.K_DELETE) and self.defenders:
                    self.defenders.pop()
                elif k in (pygame.K_RETURN, pygame.K_KP_ENTER) and self.defenders:
                    self._start_wave(0); self.state = "PLAYING"

            elif self.state == "PLAYING":
                if k == pygame.K_SPACE:
                    self._fire_catapult()

        elif event.type == pygame.MOUSEMOTION and self.state == "SETUP":
            self.ghost_pos = event.pos

        elif event.type == pygame.MOUSEBUTTONDOWN and event.button == 1 \
                and self.state == "SETUP":
            mx, my = event.pos

            # Check if click is on a defender button
            for i, r in enumerate(self.btn_rects):
                if r.collidepoint(mx, my):
                    self.selected_idx = i
                    return

            # Otherwise try to place on battlefield
            if mx >= PLACE_X_MIN:
                self._place_defender(mx, my)

    # ---- loop ---------------------------------------------------------
    def run(self):
        running = True
        while running:
            for event in pygame.event.get():
                if event.type == pygame.QUIT: running = False
                else: self.handle_event(event)
            self.update(); self.draw()
            self.clock.tick(FPS)
        pygame.quit()


# ----------------------------------------------------------------------
def run_shots():
    game = Game()
    game.defenders = [
        Archer(DEFENDER_LINE_X - 40, PATH_Y - 70),
        Warrior(DEFENDER_LINE_X,      PATH_Y),
        Thief(DEFENDER_LINE_X - 40,  PATH_Y + 70),
    ]
    game._start_wave(0); game.state = "PLAYING"
    shot_frames = {120: "shot1.png", 420: "shot2.png", 1500: "shot3.png"}
    saved = []
    for frame in range(1601):
        game.update(); game.draw()
        if frame in shot_frames:
            p = os.path.join("/tmp", shot_frames[frame])
            pygame.image.save(game.screen, p)
            saved.append((frame, game.state, game.castle.hp, p))
    pygame.quit()
    for f, st, hp, p in saved: print(f"frame {f}: state={st} castleHP={hp} -> {p}")


if __name__ == "__main__":
    if SHOTS_MODE: run_shots()
    else: Game().run()
