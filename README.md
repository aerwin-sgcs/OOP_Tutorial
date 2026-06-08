# Game Creation — Ironwall starter pack

This folder is your starting point for the **Game Creation** tutorial, where you
build the Ironwall game yourself using the OOP you already know.

## Open this folder in PyCharm

Everything is already organised for you — you do **not** need to create any
folders. Just open this `game_creation` folder in PyCharm.

```
game_creation/
├── game_characters.py    your DEFENDERS (reused from the Inheritance tutorial)
├── ironwall.py           PAGES 2–3: build the enemies + a text battle
├── ironwall_visual.py    PAGE 4: the same game with images (pygame)
├── README.md             this file
└── assets/               all the images, ready to use
```

## How to run as you go

- **Text version** (pages 2–3):
  ```
  python3 ironwall.py
  ```
- **Visual version** (page 4 — needs pygame):
  ```
  python3 ironwall_visual.py
  ```
  Need pygame? See the **Pygame Setup** tutorial on the Learning OOP site.

## What you'll practise

- **Multi-level inheritance** — `GameCharacter` → `Enemy` → the three rogues.
- **Overriding** — each rogue gets its own `attack()`.
- **Polymorphism** — one battle loop, many kinds of character, each behaving
  in its own way.

Follow the tutorial pages and look for the `>>> YOUR TURN <<<` markers in the code.
