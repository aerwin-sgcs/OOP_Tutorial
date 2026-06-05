"""
game_characters.py  —  YOUR DEFENDERS

These are the exact classes you built in the Inheritance tutorial
(Warrior, Archer, Thief, all inheriting from GameCharacter) with ONE upgrade:

    attack() now takes a target and deals real damage:  attack(self, target)

In the Inheritance tutorial, attack() only printed a message. To fight a real
battle, the attack has to actually hurt something — so each attack() now calls
target.take_damage(...). The inheritance and overriding ideas are identical;
the method just does something useful now.

You do NOT need to change this file. You will reuse these defenders in ironwall.py.
"""


class GameCharacter:

    def __init__(self, name, health):
        self.name = name
        self.health = health
        self.max_health = health          # remembered so we can draw health bars later

    def introduce(self):
        print(f"I am {self.name} and I have {self.health} health points.")

    def attack(self, target):
        # Default attack — child classes override this with their own version.
        target.take_damage(5)

    def take_damage(self, amount):
        self.health -= amount
        if self.health < 0:
            self.health = 0

    def is_alive(self):
        return self.health > 0


class Warrior(GameCharacter):

    def __init__(self, name, health, armor):
        super().__init__(name, health)
        self.armor = armor

    def attack(self, target):                       # OVERRIDE
        print(f"{self.name} swings a sword at {target.name} for 25 damage! ⚔️")
        target.take_damage(25)

    def block(self):
        print(f"{self.name} raises their shield! Armor: {self.armor}")


class Archer(GameCharacter):

    def __init__(self, name, health, arrows):
        super().__init__(name, health)
        self.arrows = arrows

    def attack(self, target):                       # OVERRIDE
        if self.arrows > 0:
            self.arrows -= 1
            print(f"{self.name} fires an arrow at {target.name} for 15 damage! \U0001f3f9")
            target.take_damage(15)
        else:
            print(f"{self.name} has no arrows left!")

    def reload(self):
        self.arrows += 5
        print(f"{self.name} reloaded! Arrows: {self.arrows}")


class Thief(GameCharacter):

    def __init__(self, name, health, stealth):
        super().__init__(name, health)
        self.stealth = stealth

    def attack(self, target):                       # OVERRIDE
        print(f"{self.name} strikes {target.name} for 20 damage! \U0001f5e1️")
        target.take_damage(20)

    def sneak(self):
        print(f"{self.name} moves silently through the shadows! Stealth: {self.stealth} \U0001f311")
