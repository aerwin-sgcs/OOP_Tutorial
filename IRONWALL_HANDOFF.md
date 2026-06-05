# IRONWALL PROJECT — HANDOFF

**Date:** 2026-06-05
**Status:** ✅ BUILD COMPLETE — all 7 steps done. See "Build Complete" section below.

---

## BUILD COMPLETE — what was delivered

1. **Assets** — picked from Kenney (Tiny Dungeon characters + Medieval RTS castle/terrain),
   baked & renamed into `ironwall/assets/` and `game_creation/assets/`. Enemies red-tinted;
   Rogue King given a crown.
2. **Ironwall game** — `ironwall/ironwall.py` (~330 lines pygame). Auto-battler, 3 waves,
   multi-level inheritance (GameCharacter → Defender/Enemy → 6 characters), polymorphic
   attack(). Tuned to a close win (~38% castle HP). Medieval victory/defeat banner.
3. **Ironwall landing page** — `ironwall.html` (slate+bronze) with screenshots in
   `ironwall_media/`, requirements, download button → `ironwall.zip`.
4. **Game Creation tutorial** — `game_creation_index.html` + `game_creation.js`, 4 pages,
   slate+bronze theme, clickable cross-links into the Inheritance tutorial. Download →
   `game_creation.zip` (scaffolded `ironwall.py` text version, `ironwall_visual.py` pygame
   version, upgraded `game_characters.py` defenders, assets, README).
5. **Pygame Setup page** — `pygame_setup.html` (Mac-only, 4 steps + troubleshooting).
6. **Front menu** — `index.html` rebuilt: slate+bronze, 6 cards in the agreed 3×2 order
   (Inheritance / Encapsulation / Polymorphism · OOP / Game Creation / Ironwall) + a
   "Setup help: Installing pygame" utility link.
7. **Inheritance deep-links** — `inheritance_index.html` now honours `#page=N` so the
   Game Creation cross-links jump to the right page. (Only change to an existing tutorial;
   content untouched.)

**Theme:** Slate + Bronze (palette F) on the menu, Game Creation tutorial, Ironwall landing,
and Pygame Setup. The three original topic tutorials keep their own dark themes.

**Zips rebuilt** after the banner change. Both verified to run on Python 3.13 / pygame 2.6.1.

### Possible future tasks (not done)
- A fuller standalone "Pygame tutorial" (beyond the setup page).
- Deploy: commit/push everything to the GitHub repo so Pages serves it.
- `LearnOOP.html` is an older front page still in the repo — decide whether to delete it.

---

**(Original planning notes below, kept for reference.)**

---

## WHAT THIS PROJECT IS

Adding two new things to the existing OOP tutorial site:

1. **Ironwall** — a finished, playable game (Python + pygame) that I build. Students download and play it.
2. **Game Creation tutorial** — a structured 4-page guide that helps students build that same game themselves.

Plus supporting pieces: a redesigned front menu, an Ironwall landing page, a Pygame Setup page, and asset files.

The game is an **auto-battler with tower-defence aesthetics** (NOT true tower defence — no tower placement, money, or pathfinding). Defenders defend a castle against waves of rogues; combat plays itself out automatically.

---

## KEY DECISIONS (all locked in)

- **Game type:** auto-battler with tower-defence look. Auto-wave combat, no player clicking to attack.
- **Engine:** pygame (NOT tkinter). Visuals/images required.
- **Platform:** macOS only. pip is NOT blocked. No Windows instructions anywhere.
- **Defenders:** reuse Warrior, Archer, Thief from the Inheritance tutorial. No new defender classes.
- **Enemies:** Rogue Archer, Rogue Warrior, Rogue King. **NO goblins, trolls, or witchcraft.**
- **Inheritance structure:** multi-level. `GameCharacter` → `Defender`/`Enemy` mid-parents → specific subclasses. Multi-level inheritance is NEW ground, pitched as an advantage of doing the bonus tutorial.
- **Starter file:** scaffolded (Option B) — pygame boilerplate pre-written, OOP classes left blank with guiding comment markers.
- **Game filename:** `ironwall.py` (NOT `game_characters.py`, to avoid clashing with the student's existing Inheritance file).
- **README format:** `.md` (renders fine on Mac TextEdit and on GitHub).
- **Hosting:** same GitHub repo + GitHub Pages. Tutorials/landing/zips served by Pages; the pygame game runs locally on the student's Mac.
- **Folders:** zips are PRE-ORGANISED. Students never create folders manually — they unzip and open in PyCharm.
- **Cross-references:** CLICKABLE links from Game Creation back into specific Inheritance tutorial pages (Decision A).

---

## WHAT CHANGES vs WHAT STAYS UNTOUCHED

**Untouched completely:**
- Encapsulation tutorial
- Polymorphism tutorial
- OOP tutorial

**Inheritance tutorial:** content 100% unchanged. ONLY a behind-the-scenes deep-link tweak so `inheritance_index.html#page=4` opens directly on that page (needed for the clickable cross-references). No content edits.

---

## FRONT MENU REDESIGN (`index.html`)

- Change dark space backdrop → **pale blue backdrop** with subtle starfield.
- Keep fonts: Cinzel Decorative, Orbitron, Exo 2.
- Darken accents for light background: gold→bronze, cyan→teal, purple→deep violet. New: green (Game Creation), crimson (Ironwall).

**New 3×2 card layout:**

|        | Left          | Middle          | Right          |
|--------|---------------|-----------------|----------------|
| Top    | Inheritance   | Encapsulation   | Polymorphism   |
| Bottom | OOP Tutorial  | Game Creation   | Ironwall       |

- Below the grid: small utility link **"Setup help: Installing pygame"** → Pygame Setup page.

**What the bottom cards do:**
- OOP Tutorial → existing tutorial
- Game Creation → the 4-page build-it-yourself tutorial
- Ironwall → landing page (screenshots + download finished game)

---

## GAME CREATION TUTORIAL (new — `game_creation_index.html` + `game_creation.js`)

- Light pale-blue backdrop, **green** accent. Same page template/navigation as existing tutorials.
- **4 pages, NO final quiz.** Download button on page 1 → `game_creation.zip`.

- **Page 1 — Design the Game:** no code. What Ironwall is, class diagram, introduces multi-level inheritance, explains the folder/zip structure.
- **Page 2 — The Enemies:** build `Enemy(GameCharacter)` parent, then `RogueArcher`/`RogueWarrior`/`RogueKing` children. Each overrides `attack()` + unique traits. CLICKABLE links back to Inheritance pages (super() = p4, overriding = p5, etc.).
- **Page 3 — Run a Battle (text):** defenders attack the front enemy; survivors attack the castle; ends when castle health = 0 or all enemies defeated. Terminal text output, inside `ironwall.py`.
- **Page 4 — Convert to Images (pygame):** same OOP into a graphical window. Pygame boilerplate pre-scaffolded; students write only OOP bits (sprite assignment, `draw()` per class). Links to Pygame Setup page.

---

## IRONWALL LANDING PAGE (new — `ironwall.html`)

- Light pale-blue backdrop, **crimson** accent.
- NOT a tutorial — no steps, no teaching. It's a doorway to the download.
- Contents: 3–4 screenshots, one-paragraph description, system requirements (Python 3.10+, pygame, macOS), big **Download Ironwall (.zip)** button → `ironwall.zip`, "Need help installing pygame?" link.

---

## IRONWALL GAME (new — `ironwall.py` + assets)

- Python + pygame, ~300 lines.
- Auto-battler with tower-defence aesthetics: medieval path, castle on the right, rogues march from the left, defenders attack automatically. Health bars, wave counter, win/lose screens, 3 waves of increasing difficulty.
- OOP: `GameCharacter` → `Defender(GameCharacter)` and `Enemy(GameCharacter)` → `Warrior`/`Archer`/`Thief` and `RogueArcher`/`RogueWarrior`/`RogueKing`. Each overrides `attack()` and has a `draw()` method.
- Runs locally on Mac, not in the browser.

---

## PYGAME SETUP PAGE (new — e.g. `pygame_setup.html`)

- Light pale-blue backdrop. **Mac only**, pip not blocked.
- One page: what pygame is, how to install via terminal on macOS, how to verify it worked.
- Linked from: the front-menu utility link AND Game Creation page 4.
- (A fuller standalone Pygame tutorial is a possible FUTURE task — not in this scope.)

---

## THE TWO ZIP FILES (both pre-organised)

**`ironwall.zip`** (from Ironwall landing page — the finished game):
```
ironwall/
├── ironwall.py      ← complete playable game
├── README.md        ← install pygame, then run
└── assets/          ← ~10 PNG sprites
```

**`game_creation.zip`** (from Game Creation page 1 — the starter pack):
```
game_creation/
├── ironwall.py      ← SCAFFOLDED starter (pygame boilerplate written,
│                      OOP classes blank w/ comment markers; fresh copy
│                      of Warrior/Archer/Thief at top so it's self-contained)
├── README.md        ← open in PyCharm, follow the tutorial
└── assets/          ← identical sprites to ironwall.zip
```

---

## ASSETS

- From **Kenney.nl** (CC0, free, no attribution): **Tiny Dungeon** (characters) + **Medieval RTS** (castle, terrain).
- I select specific sprites, rename clearly (`warrior.png`, `rogue_king.png`, `castle.png`, etc.), same set in both zips.
- Same defender images in both finished game and starter, so the student's completed game looks identical to real Ironwall.
- NOTE: sprite names above are placeholders until art is picked. (rogue_king may map to a king sprite or recoloured warrior.)

---

## BUILD ORDER (resume here)

1. **Select + place Kenney assets** (preview the look before any code).
2. **Build Ironwall game** (`ironwall.py`) — the finished target first.
3. **Build Ironwall landing page** (`ironwall.html`) + `ironwall.zip`.
4. **Build Game Creation tutorial** (4 pages) + scaffolded `game_creation.zip`.
5. **Build Pygame Setup page.**
6. **Redesign front menu** (light theme, 6-card reorder, utility link) — LAST, so all link targets exist.
7. **Add deep-link support to Inheritance tutorial** (`#page=N`).

---

## EFFORT ESTIMATE

Roughly 4–6 working sessions. Best paced across multiple chats so context stays manageable. Asset selection is the one step needing your eyes before locking in.

---

## NOTE ON EARLIER WORK (already done, separate from Ironwall)

Concept-based "Check your understanding" checkpoints were already added to every page of the Inheritance, Polymorphism, and Encapsulation tutorials (MCQ / true-false / multi-select / fill-in formats). That work is complete and live in the repo. It is independent of the Ironwall project above.
