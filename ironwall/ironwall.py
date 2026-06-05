"""
IRONWALL  —  an OOP auto-battler built with pygame.

Defend the Ironwall castle against three waves of rogues.
The defenders (Warrior, Archer, Thief) hold the line and attack automatically;
the rogues (Rogue Warrior, Rogue Archer, Rogue King) march in and attack the castle.

This is the FINISHED game students work toward in the "Game Creation" tutorial.
It demonstrates multi-level inheritance and polymorphism:

    GameCharacter
        ├── Defender ──> Warrior, Archer, Thief
        └── Enemy    ──> RogueWarrior, RogueArcher, RogueKing

Run:   python ironwall.py
(Requires pygame:  pip install pygame)
"""

import os
import sys
import math
import random

# ----------------------------------------------------------------------
# Screenshot/demo mode (used for testing). Run:  python ironwall.py --shots
# Renders without a real window and saves a few PNG frames, then exits.
# ----------------------------------------------------------------------
SHOTS_MODE = "--shots" in sys.argv
if SHOTS_MODE:
    os.environ["SDL_VIDEODRIVER"] = "dummy"
    os.environ["SDL_AUDIODRIVER"] = "dummy"

import pygame

# ----------------------------------------------------------------------
# Constants
# ----------------------------------------------------------------------
WIDTH, HEIGHT = 960, 540
FPS = 60
ASSETS = os.path.join(os.path.dirname(os.path.abspath(__file__)), "assets")

PATH_Y = HEIGHT // 2            # vertical centre of the marching path
CASTLE_X = WIDTH - 210          # left edge of the castle
DEFENDER_LINE_X = CASTLE_X - 90 # where the defenders stand
ENEMY_GOAL_X = DEFENDER_LINE_X  # rogues stop here to attack the castle

WHITE = (255, 255, 255)
BLACK = (0, 0, 0)
DARK = (20, 30, 45)
RED = (200, 50, 50)
GREEN = (70, 200, 90)
GOLD = (245, 200, 60)
BRONZE = (208, 160, 92)
PARCHMENT = (235, 222, 196)
HERALD_GREEN = (84, 168, 96)     # deeper, more medieval green for VICTORY
HERALD_RED = (188, 64, 58)       # deep banner red for DEFEAT
PANEL = (38, 48, 62)             # slate banner panel


def load(name, size=None):
    """Load a sprite from the assets folder, optionally scaled."""
    img = pygame.image.load(os.path.join(ASSETS, name)).convert_alpha()
    if size:
        img = pygame.transform.smoothscale(img, size)
    return img


# ======================================================================
# TOP PARENT CLASS
# ======================================================================
class GameCharacter:
    """The shared blueprint for every character in the game."""

    def __init__(self, name, max_hp, attack_power, sprite, x, y):
        self.name = name
        self.max_hp = max_hp
        self.hp = max_hp
        self.attack_power = attack_power
        self.sprite = sprite
        self.x = x
        self.y = y
        self.cooldown = 0          # frames until this character can act again

    def is_alive(self):
        return self.hp > 0

    def take_damage(self, amount):
        self.hp = max(0, self.hp - amount)

    def attack(self, target):
        """Default attack — child classes override this with their own version."""
        target.take_damage(self.attack_power)

    def draw(self, screen):
        rect = self.sprite.get_rect(center=(int(self.x), int(self.y)))
        screen.blit(self.sprite, rect)
        self._draw_health_bar(screen, rect)

    def _draw_health_bar(self, screen, rect):
        bar_w, bar_h = 60, 7
        bx = int(self.x - bar_w / 2)
        by = rect.top - 12
        pygame.draw.rect(screen, (40, 0, 0), (bx, by, bar_w, bar_h))
        frac = self.hp / self.max_hp
        colour = GREEN if frac > 0.5 else (GOLD if frac > 0.25 else RED)
        pygame.draw.rect(screen, colour, (bx, by, int(bar_w * frac), bar_h))
        pygame.draw.rect(screen, BLACK, (bx, by, bar_w, bar_h), 1)


# ======================================================================
# MID-LEVEL PARENT — DEFENDERS  (multi-level inheritance)
# ======================================================================
class Defender(GameCharacter):
    """A stationary defender. Auto-attacks the nearest rogue in range."""

    attack_range = 200
    cooldown_max = 50
    projectile_colour = WHITE

    def update(self, enemies, projectiles):
        if self.cooldown > 0:
            self.cooldown -= 1
            return
        target = self._nearest_enemy(enemies)
        if target is not None:
            self.attack(target, projectiles)
            self.cooldown = self.cooldown_max

    def _nearest_enemy(self, enemies):
        in_range = [e for e in enemies if e.is_alive()
                    and abs(e.x - self.x) <= self.attack_range]
        if not in_range:
            return None
        return min(in_range, key=lambda e: abs(e.x - self.x))

    def attack(self, target, projectiles):
        """Override: fire one projectile carrying this defender's damage."""
        projectiles.append(
            Projectile(self.x, self.y, target, self.attack_power, self.projectile_colour)
        )


class Warrior(Defender):
    """Page 2 of the Inheritance tutorial — short range, heavy hits."""
    attack_range = 130
    cooldown_max = 55
    projectile_colour = (210, 210, 220)

    def __init__(self, x, y):
        super().__init__("Warrior", max_hp=100, attack_power=24,
                         sprite=load("warrior.png", (84, 84)), x=x, y=y)


class Archer(Defender):
    """Long range, rapid, lighter hits."""
    attack_range = 320
    cooldown_max = 32
    projectile_colour = (120, 230, 140)

    def __init__(self, x, y):
        super().__init__("Archer", max_hp=80, attack_power=14,
                         sprite=load("archer.png", (84, 84)), x=x, y=y)


class Thief(Defender):
    """Fast double-strike, medium range."""
    attack_range = 180
    cooldown_max = 24
    projectile_colour = (200, 160, 240)

    def attack(self, target, projectiles):
        # Override: the Thief throws TWO quick daggers.
        projectiles.append(Projectile(self.x, self.y, target, self.attack_power, self.projectile_colour))
        projectiles.append(Projectile(self.x, self.y - 10, target, self.attack_power, self.projectile_colour))

    def __init__(self, x, y):
        super().__init__("Thief", max_hp=70, attack_power=9,
                         sprite=load("thief.png", (84, 84)), x=x, y=y)


# ======================================================================
# MID-LEVEL PARENT — ENEMIES  (multi-level inheritance)
# ======================================================================
class Enemy(GameCharacter):
    """A rogue that marches toward the castle, then attacks it."""

    speed = 0.8
    attack_cooldown = 60

    def update(self, castle):
        if self.x < ENEMY_GOAL_X:
            self.x += self.speed            # march toward the castle
        else:
            if self.cooldown > 0:
                self.cooldown -= 1
            else:
                self.attack(castle)         # batter the castle
                self.cooldown = self.attack_cooldown

    def attack(self, castle):
        """Override per rogue type — each deals its own damage to the castle."""
        castle.take_damage(self.attack_power)


class RogueArcher(Enemy):
    speed = 2.2
    attack_cooldown = 40

    def __init__(self, x, y):
        super().__init__("Rogue Archer", max_hp=70, attack_power=6,
                         sprite=load("rogue_archer.png", (80, 80)), x=x, y=y)


class RogueWarrior(Enemy):
    speed = 1.6
    attack_cooldown = 50

    def __init__(self, x, y):
        super().__init__("Rogue Warrior", max_hp=170, attack_power=11,
                         sprite=load("rogue_warrior.png", (80, 80)), x=x, y=y)


class RogueKing(Enemy):
    """The boss. Tough, hits hard, and keeps coming."""
    speed = 1.1
    attack_cooldown = 45

    def __init__(self, x, y):
        super().__init__("Rogue King", max_hp=430, attack_power=20,
                         sprite=load("rogue_king.png", (92, 92)), x=x, y=y)


# ======================================================================
# SUPPORTING OBJECTS
# ======================================================================
class Projectile:
    """A shot travelling from a defender to a target rogue."""

    def __init__(self, x, y, target, damage, colour):
        self.x, self.y = x, y
        self.target = target
        self.damage = damage
        self.colour = colour
        self.speed = 9
        self.dead = False

    def update(self):
        if not self.target.is_alive():
            self.dead = True
            return
        dx = self.target.x - self.x
        dy = self.target.y - self.y
        dist = math.hypot(dx, dy)
        if dist < self.speed:
            self.target.take_damage(self.damage)
            self.dead = True
        else:
            self.x += self.speed * dx / dist
            self.y += self.speed * dy / dist

    def draw(self, screen):
        pygame.draw.circle(screen, self.colour, (int(self.x), int(self.y)), 5)
        pygame.draw.circle(screen, BLACK, (int(self.x), int(self.y)), 5, 1)


class Castle:
    def __init__(self):
        self.max_hp = 450
        self.hp = self.max_hp
        self.sprite = load("castle.png", (180, 180))
        self.x = CASTLE_X
        self.y = PATH_Y - 30

    def is_alive(self):
        return self.hp > 0

    def take_damage(self, amount):
        self.hp = max(0, self.hp - amount)

    def draw(self, screen):
        screen.blit(self.sprite, (self.x, self.y - 60))


# ======================================================================
# THE GAME
# ======================================================================
class Game:
    # Each wave is a list of enemy CLASSES that will march in.
    WAVES = [
        [RogueArcher, RogueWarrior, RogueArcher, RogueWarrior],
        [RogueWarrior, RogueArcher, RogueWarrior, RogueArcher, RogueWarrior, RogueArcher],
        [RogueWarrior, RogueArcher, RogueWarrior, RogueKing, RogueArcher, RogueWarrior, RogueArcher],
    ]

    def __init__(self):
        pygame.init()
        self.screen = pygame.display.set_mode((WIDTH, HEIGHT))
        pygame.display.set_caption("Ironwall")
        self.clock = pygame.time.Clock()
        self.font = pygame.font.SysFont("arialroundedmtbold,arial", 26, bold=True)
        # serif fonts give the end banner a more medieval feel
        self.title_font = pygame.font.SysFont("georgia,timesnewroman,serif", 76, bold=True)
        self.sub_font = pygame.font.SysFont("georgia,timesnewroman,serif", 30, bold=False)

        self.grass = load("grass.png", (64, 64))
        self.path = load("path.png", (64, 64))

        self.castle = Castle()
        self.defenders = [
            Archer(DEFENDER_LINE_X - 40, PATH_Y - 70),
            Warrior(DEFENDER_LINE_X, PATH_Y),
            Thief(DEFENDER_LINE_X - 40, PATH_Y + 70),
        ]
        self.enemies = []
        self.projectiles = []

        self.wave_index = 0
        self.spawn_queue = []
        self.spawn_timer = 0
        self.state = "PLAYING"          # PLAYING / WIN / LOSE
        self._start_wave(0)

    # ---- wave handling -------------------------------------------------
    def _start_wave(self, index):
        self.wave_index = index
        self.spawn_queue = list(self.WAVES[index])
        self.spawn_timer = 0

    def _spawn_logic(self):
        if self.spawn_queue:
            self.spawn_timer -= 1
            if self.spawn_timer <= 0:
                enemy_cls = self.spawn_queue.pop(0)
                y = PATH_Y + random.randint(-30, 30)
                self.enemies.append(enemy_cls(-40, y))
                self.spawn_timer = 55
        elif not self.enemies:
            # wave cleared
            if self.wave_index + 1 < len(self.WAVES):
                self._start_wave(self.wave_index + 1)
            else:
                self.state = "WIN"

    # ---- main update ---------------------------------------------------
    def update(self):
        if self.state != "PLAYING":
            return

        self._spawn_logic()

        for d in self.defenders:
            d.update(self.enemies, self.projectiles)

        for e in self.enemies:
            e.update(self.castle)

        for p in self.projectiles:
            p.update()

        self.enemies = [e for e in self.enemies if e.is_alive()]
        self.projectiles = [p for p in self.projectiles if not p.dead]

        if not self.castle.is_alive():
            self.state = "LOSE"

    # ---- drawing -------------------------------------------------------
    def draw(self):
        # terrain
        for y in range(0, HEIGHT, 64):
            for x in range(0, WIDTH, 64):
                self.screen.blit(self.grass, (x, y))
        for x in range(0, WIDTH, 64):
            self.screen.blit(self.path, (x, PATH_Y - 64))
            self.screen.blit(self.path, (x, PATH_Y))

        self.castle.draw(self.screen)
        for d in self.defenders:
            d.draw(self.screen)
        for e in self.enemies:
            e.draw(self.screen)
        for p in self.projectiles:
            p.draw(self.screen)

        self._draw_hud()
        if self.state == "WIN":
            self._draw_banner("VICTORY!", "The Ironwall holds.", HERALD_GREEN)
        elif self.state == "LOSE":
            self._draw_banner("DEFEATED!", "The castle has fallen.", HERALD_RED)

        pygame.display.flip()

    def _draw_hud(self):
        # wave counter
        tag = self.font.render(
            f"IRONWALL    Wave {self.wave_index + 1} / {len(self.WAVES)}", True, WHITE)
        box = pygame.Surface((tag.get_width() + 24, 40)); box.set_alpha(150); box.fill(BLACK)
        self.screen.blit(box, (16, 14)); self.screen.blit(tag, (28, 20))

        # castle health bar
        bw, bh = 240, 26
        bx, by = WIDTH - bw - 20, 16
        pygame.draw.rect(self.screen, (50, 0, 0), (bx, by, bw, bh))
        frac = self.castle.hp / self.castle.max_hp
        pygame.draw.rect(self.screen, RED, (bx, by, int(bw * frac), bh))
        pygame.draw.rect(self.screen, WHITE, (bx, by, bw, bh), 2)
        label = self.font.render(f"CASTLE  {self.castle.hp}", True, WHITE)
        self.screen.blit(label, (bx + 8, by + 1))

    def _draw_banner(self, title, subtitle, colour):
        # dim the battlefield
        overlay = pygame.Surface((WIDTH, HEIGHT)); overlay.set_alpha(170); overlay.fill(BLACK)
        self.screen.blit(overlay, (0, 0))

        # a bordered banner panel
        pw, ph = 620, 240
        px, py = (WIDTH - pw) // 2, (HEIGHT - ph) // 2
        pygame.draw.rect(self.screen, PANEL, (px, py, pw, ph), border_radius=14)
        pygame.draw.rect(self.screen, BRONZE, (px, py, pw, ph), width=4, border_radius=14)
        # thin inner bronze rule near the top, like a banner seam
        pygame.draw.line(self.screen, BRONZE, (px + 30, py + 118), (px + pw - 30, py + 118), 2)

        cx = WIDTH // 2
        # TITLE — its own line
        title_img = self.title_font.render(title, True, colour)
        self.screen.blit(title_img, title_img.get_rect(center=(cx, py + 66)))
        # SUBTITLE — the line underneath
        sub_img = self.sub_font.render(subtitle, True, PARCHMENT)
        self.screen.blit(sub_img, sub_img.get_rect(center=(cx, py + 158)))
        # hint
        hint = self.font.render("Press R to play again, or close the window.", True, BRONZE)
        self.screen.blit(hint, hint.get_rect(center=(cx, py + 202)))

    # ---- loop ----------------------------------------------------------
    def run(self):
        running = True
        while running:
            for event in pygame.event.get():
                if event.type == pygame.QUIT:
                    running = False
                elif event.type == pygame.KEYDOWN and event.key == pygame.K_r:
                    if self.state != "PLAYING":
                        self.__init__()
            self.update()
            self.draw()
            self.clock.tick(FPS)
        pygame.quit()


# ----------------------------------------------------------------------
def run_shots():
    """Headless test: simulate frames and save screenshots."""
    game = Game()
    shot_frames = {120: "shot1.png", 420: "shot2.png", 1500: "shot3.png"}
    saved = []
    for frame in range(1601):
        game.update()
        game.draw()
        if frame in shot_frames:
            path = os.path.join("/tmp", shot_frames[frame])
            pygame.image.save(game.screen, path)
            saved.append((frame, game.state, game.castle.hp, path))
    pygame.quit()
    for f, st, hp, p in saved:
        print(f"frame {f}: state={st} castleHP={hp} -> {p}")


if __name__ == "__main__":
    if SHOTS_MODE:
        run_shots()
    else:
        Game().run()
