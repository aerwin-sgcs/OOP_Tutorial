# Ironwall

An OOP auto-battler built with Python and pygame. Defend the Ironwall castle
against three waves of rogues. The defenders hold the line and attack
automatically; the rogues march in and batter the castle.

## How to run (macOS)

1. Make sure you have Python 3.10 or newer:
   ```
   python3 --version
   ```

2. Install pygame (one time only):
   ```
   pip3 install pygame
   ```
   *(If you get stuck installing pygame, see the "Pygame Setup" tutorial on the
   Learning OOP site.)*

3. Open this `ironwall` folder in PyCharm (or a terminal), then run:
   ```
   python3 ironwall.py
   ```

A game window will open and the battle begins automatically.

## Controls

- **Watch** the auto-battle play out across 3 waves.
- **R** — play again after a win or loss.
- Close the window to quit.

## What's inside

```
ironwall/
├── ironwall.py     the complete game
├── README.md       this file
└── assets/         all the images (characters, castle, terrain)
```

## The OOP behind it

Ironwall is built from the same ideas you learned in the tutorials:

- **Inheritance** — every character descends from a shared `GameCharacter` class.
- **Multi-level inheritance** — `GameCharacter` → `Defender`/`Enemy` → the six
  specific characters (Warrior, Archer, Thief, Rogue Warrior, Rogue Archer,
  Rogue King).
- **Polymorphism** — every character has an `attack()` method, but each one
  does something different. The game loop just calls `attack()` and the right
  behaviour happens automatically.

Open `ironwall.py` and read it — you'll recognise all of it.
