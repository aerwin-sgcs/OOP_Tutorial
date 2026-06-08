"""
ironwall.py  —  YOUR GAME (text version)

Follow the Game Creation tutorial. You will:
  • PAGE 2 — build the enemy classes (Enemy parent + three rogues)
  • PAGE 3 — finish run_battle() so the defenders fight the wave

Run it any time with:   python3 ironwall.py

The defenders (Warrior, Archer, Thief) are reused from your Inheritance
tutorial — they live in game_characters.py and are imported below.
"""

from game_characters import GameCharacter, Warrior, Archer, Thief


# ============================================================
# PAGE 2 — BUILD THE ENEMIES
# ============================================================
# Build a NEW parent class called Enemy that inherits from GameCharacter.
# This is MULTI-LEVEL inheritance:
#       GameCharacter  ->  Enemy  ->  RogueArcher / RogueWarrior / RogueKing
#
# Each rogue should:
#   • call super().__init__(name, health)      (like Inheritance tutorial page 4)
#   • store its own attack_power
#   • OVERRIDE attack(self, target) to deal its own damage   (Inheritance page 5)
#
# >>> Write your Enemy class and the three rogue classes here <<<

# class Enemy(GameCharacter):
#     def __init__(self, name, health, attack_power):
#         super().__init__(name, health)
#         self.attack_power = attack_power
#
#     def attack(self, target):
#         target.take_damage(self.attack_power)


# class RogueArcher(Enemy):
#     def __init__(self):
#         super().__init__("Rogue Archer", health=45, attack_power=6)
#
#     def attack(self, target):
#         print(f"{self.name} looses an arrow at {target.name}!")
#         target.take_damage(self.attack_power)


# (now build RogueWarrior and RogueKing the same way — give the King the most health)


# ============================================================
# THE CASTLE  (already written for you)
# ============================================================
class Castle:
    def __init__(self, health):
        self.name = "Ironwall Castle"
        self.health = health

    def take_damage(self, amount):
        self.health = max(0, self.health - amount)
        print(f"  ** The castle is hit for {amount}! Castle health: {self.health} **")

    def is_alive(self):
        return self.health > 0


# ============================================================
# PAGE 3 — RUN A TEXT BATTLE
# ============================================================
def run_battle():
    # The defenders — reused from the Inheritance tutorial.
    defenders = [
        Warrior("Knight", 100, armor=40),
        Archer("Ranger", 80, arrows=20),
        Thief("Shadow", 70, stealth=90),
    ]

    castle = Castle(health=150)

    # >>> PAGE 3 TASK 1: build the wave <<<
    # Make a list called 'wave' containing your three rogue objects.
    # wave = [RogueArcher(), RogueWarrior(), RogueKing()]
    wave = []

    round_num = 1
    while wave and castle.is_alive():
        print(f"\n===== ROUND {round_num} =====")

        # >>> PAGE 3 TASK 2: defenders attack the front rogue <<<
        # The front rogue is wave[0]. Have each defender attack it.
        # Then, if the front rogue is no longer alive, remove it from the wave.

        # >>> PAGE 3 TASK 3: surviving rogues attack the castle <<<
        # Each rogue still in the wave attacks the castle.

        round_num += 1

    # ----- result -----
    print("\n========================")
    if castle.is_alive():
        print("VICTORY! The Ironwall holds. 🏰")
    else:
        print("DEFEAT! The castle has fallen. 💀")


if __name__ == "__main__":
    run_battle()
