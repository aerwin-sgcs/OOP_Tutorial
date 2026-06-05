"""
ironwall_visual.py  —  YOUR GAME (pygame version)   [PAGE 4]

This is the same battle as ironwall.py, but with images instead of text.

Almost everything here is written for you: the window, the game loop, drawing,
health bars and waves. None of that is OOP — it is just pygame "plumbing".

YOUR JOB (the OOP part):
  • Study the Enemy class and the finished RogueArcher (your worked examples).
  • Complete RogueWarrior and RogueKing by following the same pattern.
  • Then add them to the WAVES so they join the battle.

Look for  >>> YOUR TURN <<<  below.

Run with:   python3 ironwall_visual.py     (requires pygame)
"""

import os
import math
import random
import pygame

WIDTH, HEIGHT = 960, 540
FPS = 60
ASSETS = os.path.join(os.path.dirname(os.path.abspath(__file__)), "assets")
PATH_Y = HEIGHT // 2
CASTLE_X = WIDTH - 210
DEFENDER_LINE_X = CASTLE_X - 90
ENEMY_GOAL_X = DEFENDER_LINE_X
WHITE, BLACK = (255, 255, 255), (0, 0, 0)
RED, GREEN, GOLD = (200, 50, 50), (70, 200, 90), (245, 200, 60)
BRONZE, PARCHMENT, PANEL = (208, 160, 92), (235, 222, 196), (38, 48, 62)
HERALD_GREEN, HERALD_RED = (84, 168, 96), (188, 64, 58)


def load(name, size):
    img = pygame.image.load(os.path.join(ASSETS, name)).convert_alpha()
    return pygame.transform.smoothscale(img, size)


# ======================================================================
# GameCharacter — the shared parent (same idea as the Inheritance tutorial)
# ======================================================================
class GameCharacter:
    def __init__(self, name, max_hp, attack_power, sprite_file, x, y, size=84):
        self.name = name
        self.max_hp = max_hp
        self.hp = max_hp
        self.attack_power = attack_power
        self.sprite = load(sprite_file, (size, size))   # <-- the image!
        self.x, self.y = x, y
        self.cooldown = 0

    def is_alive(self):
        return self.hp > 0

    def take_damage(self, amount):
        self.hp = max(0, self.hp - amount)

    def attack(self, target):
        target.take_damage(self.attack_power)

    def draw(self, screen):
        rect = self.sprite.get_rect(center=(int(self.x), int(self.y)))
        screen.blit(self.sprite, rect)
        bw = 60
        bx, by = int(self.x - bw / 2), rect.top - 12
        pygame.draw.rect(screen, (40, 0, 0), (bx, by, bw, 6))
        pygame.draw.rect(screen, GREEN, (bx, by, int(bw * self.hp / self.max_hp), 6))


# ======================================================================
# DEFENDERS  (worked example — already complete)
# ======================================================================
class Defender(GameCharacter):
    attack_range = 200
    cooldown_max = 50
    shot_colour = WHITE

    def update(self, enemies, projectiles):
        if self.cooldown > 0:
            self.cooldown -= 1
            return
        targets = [e for e in enemies if e.is_alive() and abs(e.x - self.x) <= self.attack_range]
        if targets:
            target = min(targets, key=lambda e: abs(e.x - self.x))
            projectiles.append(Projectile(self.x, self.y, target, self.attack_power, self.shot_colour))
            self.cooldown = self.cooldown_max


class Warrior(Defender):
    attack_range, cooldown_max, shot_colour = 130, 55, (210, 210, 220)
    def __init__(self, x, y):
        super().__init__("Warrior", 100, 24, "warrior.png", x, y)

class Archer(Defender):
    attack_range, cooldown_max, shot_colour = 320, 32, (120, 230, 140)
    def __init__(self, x, y):
        super().__init__("Archer", 80, 14, "archer.png", x, y)

class Thief(Defender):
    attack_range, cooldown_max, shot_colour = 180, 24, (200, 160, 240)
    def __init__(self, x, y):
        super().__init__("Thief", 70, 11, "thief.png", x, y)


# ======================================================================
# ENEMIES
# ======================================================================
class Enemy(GameCharacter):
    speed = 1.0
    attack_cooldown = 50

    def update(self, castle):
        if self.x < ENEMY_GOAL_X:
            self.x += self.speed              # march toward the castle
        elif self.cooldown > 0:
            self.cooldown -= 1
        else:
            self.attack(castle)               # attack the castle
            self.cooldown = self.attack_cooldown


# ---- worked example: study this one ----
class RogueArcher(Enemy):
    speed, attack_cooldown = 2.2, 40
    def __init__(self, x, y):
        super().__init__("Rogue Archer", 70, 6, "rogue_archer.png", x, y, size=80)


# >>> YOUR TURN <<<  (PAGE 4)
# Complete RogueWarrior by following RogueArcher above.
#   • slower than the archer (try speed = 1.6)
#   • much tougher (try 170 health)
#   • sprite_file = "rogue_warrior.png"
#
# class RogueWarrior(Enemy):
#     speed, attack_cooldown = 1.6, 50
#     def __init__(self, x, y):
#         super().__init__("Rogue Warrior", 170, 11, "rogue_warrior.png", x, y, size=80)


# >>> YOUR TURN <<<  (PAGE 4)
# Complete RogueKing — the boss.
#   • slow (speed = 1.1) but very tough (try 430 health) and hits hard (20)
#   • sprite_file = "rogue_king.png",  size=92


# ======================================================================
# SUPPORTING OBJECTS (written for you)
# ======================================================================
class Projectile:
    def __init__(self, x, y, target, damage, colour):
        self.x, self.y, self.target = x, y, target
        self.damage, self.colour, self.speed, self.dead = damage, colour, 9, False

    def update(self):
        if not self.target.is_alive():
            self.dead = True; return
        dx, dy = self.target.x - self.x, self.target.y - self.y
        dist = math.hypot(dx, dy) or 1
        if dist < self.speed:
            self.target.take_damage(self.damage); self.dead = True
        else:
            self.x += self.speed * dx / dist; self.y += self.speed * dy / dist

    def draw(self, screen):
        pygame.draw.circle(screen, self.colour, (int(self.x), int(self.y)), 5)


class Castle:
    def __init__(self):
        self.max_hp = self.hp = 450
        self.sprite = load("castle.png", (180, 180))
    def is_alive(self): return self.hp > 0
    def take_damage(self, amt): self.hp = max(0, self.hp - amt)
    def draw(self, screen): screen.blit(self.sprite, (CASTLE_X, PATH_Y - 90))


# ======================================================================
# THE GAME ENGINE (written for you — this is pygame plumbing, not OOP)
# ======================================================================
class Game:
    def __init__(self):
        pygame.init()
        self.screen = pygame.display.set_mode((WIDTH, HEIGHT))
        pygame.display.set_caption("Ironwall")
        self.clock = pygame.time.Clock()
        self.font = pygame.font.SysFont("arial", 26, bold=True)
        self.title_font = pygame.font.SysFont("georgia,timesnewroman,serif", 70, bold=True)
        self.sub_font = pygame.font.SysFont("georgia,timesnewroman,serif", 28)
        self.grass, self.path = load("grass.png", (64, 64)), load("path.png", (64, 64))
        self.castle = Castle()
        self.defenders = [Archer(DEFENDER_LINE_X - 40, PATH_Y - 70),
                          Warrior(DEFENDER_LINE_X, PATH_Y),
                          Thief(DEFENDER_LINE_X - 40, PATH_Y + 70)]
        self.enemies, self.projectiles = [], []
        # >>> YOUR TURN <<<  add RogueWarrior and RogueKing here once you've built them:
        self.waves = [
            [RogueArcher, RogueArcher, RogueArcher],
            [RogueArcher, RogueArcher, RogueArcher, RogueArcher],
            [RogueArcher, RogueArcher, RogueArcher, RogueArcher, RogueArcher],
        ]
        self.wave_i, self.queue, self.timer, self.state = 0, list(self.waves[0]), 0, "PLAYING"

    def update(self):
        if self.state != "PLAYING": return
        if self.queue:
            self.timer -= 1
            if self.timer <= 0:
                self.enemies.append(self.queue.pop(0)(-40, PATH_Y + random.randint(-30, 30)))
                self.timer = 55
        elif not self.enemies:
            if self.wave_i + 1 < len(self.waves):
                self.wave_i += 1; self.queue = list(self.waves[self.wave_i])
            else:
                self.state = "WIN"
        for d in self.defenders: d.update(self.enemies, self.projectiles)
        for e in self.enemies: e.update(self.castle)
        for p in self.projectiles: p.update()
        self.enemies = [e for e in self.enemies if e.is_alive()]
        self.projectiles = [p for p in self.projectiles if not p.dead]
        if not self.castle.is_alive(): self.state = "LOSE"

    def draw(self):
        for y in range(0, HEIGHT, 64):
            for x in range(0, WIDTH, 64): self.screen.blit(self.grass, (x, y))
        for x in range(0, WIDTH, 64):
            self.screen.blit(self.path, (x, PATH_Y - 64)); self.screen.blit(self.path, (x, PATH_Y))
        self.castle.draw(self.screen)
        for d in self.defenders: d.draw(self.screen)
        for e in self.enemies: e.draw(self.screen)
        for p in self.projectiles: p.draw(self.screen)
        self.screen.blit(self.font.render(f"IRONWALL   Wave {self.wave_i+1}/{len(self.waves)}", True, WHITE), (20, 18))
        bw = 240; bx = WIDTH - bw - 20
        pygame.draw.rect(self.screen, (50, 0, 0), (bx, 18, bw, 24))
        pygame.draw.rect(self.screen, RED, (bx, 18, int(bw * self.castle.hp / self.castle.max_hp), 24))
        self.screen.blit(self.font.render(f"CASTLE {self.castle.hp}", True, WHITE), (bx + 8, 19))
        if self.state != "PLAYING":
            title = "VICTORY!" if self.state == "WIN" else "DEFEATED!"
            subtitle = "The Ironwall holds." if self.state == "WIN" else "The castle has fallen."
            colour = HERALD_GREEN if self.state == "WIN" else HERALD_RED
            overlay = pygame.Surface((WIDTH, HEIGHT)); overlay.set_alpha(170); overlay.fill(BLACK)
            self.screen.blit(overlay, (0, 0))
            pw, ph = 600, 220; px, py = (WIDTH - pw)//2, (HEIGHT - ph)//2
            pygame.draw.rect(self.screen, PANEL, (px, py, pw, ph), border_radius=14)
            pygame.draw.rect(self.screen, BRONZE, (px, py, pw, ph), width=4, border_radius=14)
            t = self.title_font.render(title, True, colour)
            self.screen.blit(t, t.get_rect(center=(WIDTH//2, py + 70)))
            s = self.sub_font.render(subtitle, True, PARCHMENT)
            self.screen.blit(s, s.get_rect(center=(WIDTH//2, py + 145)))
        pygame.display.flip()

    def run(self):
        running = True
        while running:
            for e in pygame.event.get():
                if e.type == pygame.QUIT: running = False
            self.update(); self.draw(); self.clock.tick(FPS)
        pygame.quit()


if __name__ == "__main__":
    Game().run()
