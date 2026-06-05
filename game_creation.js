// ============================================================
// GAME CREATION TUTORIAL — Build Ironwall
// Reuses the Warrior / Archer / Thief defenders from the Inheritance tutorial.
// ============================================================

const TUTORIAL = {
  id: "game_creation",
  title: "Game Creation",
  pages: [

    // ========================================================
    // PAGE 1 — DESIGN THE GAME
    // ========================================================
    {
      title: "Design the Game",
      tag: "Plan it first",
      subtitle: "Before any code — what are we building, and how does inheritance hold it together?",
      download: {
        title: "Get the starter pack 🛡️",
        desc: "Download and unzip this, then open the game_creation folder in PyCharm. Everything is organised for you — images included.",
        href: "game_creation.zip",
        label: "DOWNLOAD STARTER (.zip)"
      },
      sections: [
        {
          heading: "What You Are Building",
          content: `<p><strong>Ironwall</strong> is a simple auto-battler. Three defenders guard a castle while waves of rogues march in to attack it. The defenders fight back automatically. You win if the castle survives all the waves; you lose if it falls.</p>
<p>The clever part is that the <em>entire</em> game is built from one family of classes — exactly the inheritance you already learned. You will not start from scratch: your <strong>defenders are the Warrior, Archer and Thief</strong> you built in the <a href="inheritance_index.html#page=5">Inheritance tutorial (page 5)</a>.</p>`
        },
        {
          heading: "The Class Family",
          content: `<p>Every character — friend or foe — descends from one shared parent, <code>GameCharacter</code>. This is <strong>multi-level inheritance</strong>: a child class can itself become a parent.</p>`,
          diagram: `<div class="tree">
            <div class="row"><span class="node">GameCharacter</span></div>
            <div class="row connector">▲ inherits</div>
            <div class="row"><span class="node mid">Defender</span> &nbsp;&nbsp; <span class="node mid">Enemy</span></div>
            <div class="row connector">▲ inherits</div>
            <div class="row"><span class="node leaf">Warrior</span><span class="node leaf">Archer</span><span class="node leaf">Thief</span>
              &nbsp;&nbsp; <span class="node leaf">RogueArcher</span><span class="node leaf">RogueWarrior</span><span class="node leaf">RogueKing</span></div>
          </div>`,
          callout: `Read it top to bottom: <strong>GameCharacter</strong> is the grandparent. <strong>Defender</strong> and <strong>Enemy</strong> are its children — but they are also parents themselves. The six characters at the bottom are the grandchildren.`
        },
        {
          heading: "How a Battle Flows",
          highlight: `1. A wave of rogues marches toward the castle.<br>
2. The defenders attack the front rogue every round.<br>
3. Rogues that are still alive attack the castle.<br>
4. When the wave is cleared, the next wave begins.<br>
5. Castle survives all waves → <strong>VICTORY</strong>. Castle falls → <strong>DEFEAT</strong>.`,
          content2: `<p>Notice that step 2 and step 3 both just say "attack". The Warrior, the Archer and the Rogue King all attack in completely different ways — but the battle loop calls the same <code>attack()</code> method on each. That is <strong><a href="polymorphism_index.html#page=1">polymorphism</a></strong>, and it is what makes the whole game possible with so little code.</p>`
        },
        {
          heading: "Your Plan",
          content: `<p>Over the next three pages you will:</p>`,
          highlight: `<strong>Page 2</strong> — build the three rogues (the enemies).<br>
<strong>Page 3</strong> — run the battle as text in the terminal.<br>
<strong>Page 4</strong> — give everyone images with pygame and watch Ironwall come to life.`,
          callout: `Open <code>ironwall.py</code> from the starter pack now. Look for the <code>>>> YOUR TURN <<<</code> and <code>PAGE 2</code> / <code>PAGE 3</code> markers — that is where your code goes.`
        }
      ]
    },

    // ========================================================
    // PAGE 2 — THE ENEMIES
    // ========================================================
    {
      title: "The Enemies",
      tag: "Build the rogues",
      subtitle: "Multi-level inheritance: an Enemy parent, then three rogues that inherit from it.",
      sections: [
        {
          type: "terms",
          heading: "New Idea Before The Code",
          terms: [
            { term: "Multi-level inheritance", definition: "A child class that is itself a parent. <code>Enemy</code> inherits from <code>GameCharacter</code>, and the rogues inherit from <code>Enemy</code> — so the rogues inherit from <em>both</em>." },
            { term: "Boss", definition: "A tougher enemy. The Rogue King is our boss — much more health, and it hits harder." }
          ]
        },
        {
          type: "build",
          badge: "PAGE 2 — STEP 1",
          heading: "Build the Enemy parent class",
          instruction: `<p>In <code>ironwall.py</code>, under the <code>PAGE 2</code> marker, add an <strong>Enemy</strong> class that inherits from <code>GameCharacter</code>. It calls <code>super().__init__()</code> just like you did in the <a href="inheritance_index.html#page=4">Inheritance tutorial (page 4)</a>, and adds an <code>attack_power</code>.</p>`,
          code: `class Enemy(GameCharacter):

    def __init__(self, name, health, attack_power):
        super().__init__(name, health)   # GameCharacter sets up name + health
        self.attack_power = attack_power # unique to enemies

    def attack(self, target):
        target.take_damage(self.attack_power)`,
          explain: [
            { line: "class Enemy(GameCharacter):", explain: "Enemy is a child of GameCharacter — but it will also be a <strong>parent</strong> to the three rogues. That is multi-level inheritance." },
            { line: "super().__init__(name, health)", explain: "Reuses GameCharacter's constructor so we do not rewrite name and health. Same technique as the defenders." },
            { line: "def attack(self, target):", explain: "A default attack that damages the target. Each rogue will override this with its own version on the next step." }
          ]
        },
        {
          type: "build",
          badge: "PAGE 2 — STEP 2",
          heading: "Add RogueArcher (worked example)",
          instruction: `<p>Now add your first rogue. It inherits from <code>Enemy</code> and <strong>overrides</strong> <code>attack()</code> — exactly the overriding you learned in the <a href="inheritance_index.html#page=5">Inheritance tutorial (page 5)</a>.</p>`,
          code: `class RogueArcher(Enemy):

    def __init__(self):
        super().__init__("Rogue Archer", health=45, attack_power=6)

    def attack(self, target):                      # OVERRIDE
        print(f"{self.name} looses an arrow at {target.name}!")
        target.take_damage(self.attack_power)`,
          explain: [
            { line: "super().__init__(\"Rogue Archer\", 45, 6)", explain: "Passes fixed values up to Enemy. Every Rogue Archer starts with 45 health and 6 attack power." },
            { line: "def attack(self, target):", explain: "RogueArcher's own version of attack. The battle loop will call this automatically when the rogue is an archer." }
          ]
        },
        {
          type: "build",
          badge: "PAGE 2 — YOUR TURN",
          heading: "Build RogueWarrior and RogueKing",
          instruction: `<p>Follow the same pattern to build the other two rogues. Give them more health than the archer — the King is the boss, so it should be the toughest of all.</p>`,
          code: `class RogueWarrior(Enemy):

    def __init__(self):
        super().__init__("Rogue Warrior", health=90, attack_power=11)

    def attack(self, target):
        print(f"{self.name} hacks at {target.name} with a rusty blade!")
        target.take_damage(self.attack_power)


class RogueKing(Enemy):    # the boss

    def __init__(self):
        super().__init__("Rogue King", health=200, attack_power=20)

    def attack(self, target):
        print(f"{self.name} crushes {target.name} with a royal mace!")
        target.take_damage(self.attack_power)`,
          note: `Run <code>python3 ironwall.py</code> now. You will still see "VICTORY" instantly because the wave is empty — you will fill it on the next page. If you get a red error, check your indentation and that each class starts with <code>class RogueX(Enemy):</code>.`
        }
      ]
    },

    // ========================================================
    // PAGE 3 — RUN A BATTLE (TEXT)
    // ========================================================
    {
      title: "Run a Battle",
      tag: "Text version",
      subtitle: "Defenders attack the wave; the survivors attack the castle. Win or lose.",
      sections: [
        {
          heading: "One Small Upgrade — attack(target)",
          content: `<p>In the Inheritance tutorial your defenders' <code>attack()</code> only <em>printed</em> a message. To fight a real battle, an attack has to actually hurt something. So in <code>game_characters.py</code> the attack has been upgraded to take a target:</p>`,
          code: `def attack(self, target):
    print(f"{self.name} swings a sword at {target.name} for 25 damage! ⚔️")
    target.take_damage(25)`,
          callout: `The inheritance and overriding are <em>identical</em> to what you learned — the method just does something useful now: it calls <code>target.take_damage(...)</code>. You do not need to edit <code>game_characters.py</code>; it is done for you.`
        },
        {
          type: "build",
          badge: "PAGE 3 — STEP 1",
          heading: "Build the wave",
          instruction: `<p>Find <code>run_battle()</code> in <code>ironwall.py</code>. Replace the empty <code>wave = []</code> with a list of three rogue objects.</p>`,
          code: `wave = [RogueArcher(), RogueWarrior(), RogueKing()]`,
          explain: [
            { line: "wave = [RogueArcher(), ...]", explain: "A plain Python list holding three different rogue objects. The battle loop will work through them from front to back." }
          ]
        },
        {
          type: "build",
          badge: "PAGE 3 — STEP 2",
          heading: "Defenders attack the front rogue",
          instruction: `<p>Inside the <code>while</code> loop, the front rogue is <code>wave[0]</code>. Have each defender attack it, then remove it if it has been defeated.</p>`,
          code: `        front = wave[0]
        for defender in defenders:
            if front.is_alive():
                defender.attack(front)
        if not front.is_alive():
            print(f"  {front.name} is defeated!")
            wave.pop(0)`,
          explain: [
            { line: "defender.attack(front)", explain: "Here is the polymorphism: the same line calls the Warrior's, Archer's and Thief's <em>different</em> attacks. Python picks the right one for each defender automatically — exactly like the band loop in the <a href=\"polymorphism_index.html#page=4\">Polymorphism tutorial (page 4)</a>." },
            { line: "wave.pop(0)", explain: "Removes the front rogue once it is defeated so the next rogue moves up." }
          ]
        },
        {
          type: "build",
          badge: "PAGE 3 — STEP 3",
          heading: "Surviving rogues attack the castle",
          instruction: `<p>Still inside the loop, after the defenders have acted, every rogue left in the wave attacks the castle.</p>`,
          code: `        for rogue in wave:
            rogue.attack(castle)`,
          expectedOutput: `===== ROUND 1 =====
Knight swings a sword at Rogue Archer for 25 damage! ⚔️
Ranger fires an arrow at Rogue Archer for 15 damage! 🏹
  Rogue Archer is defeated!
Rogue Warrior hacks at Ironwall Castle with a rusty blade!
  ** The castle is hit for 11! Castle health: 139 **
...
========================
VICTORY! The Ironwall holds. 🏰`,
          explain: [
            { line: "rogue.attack(castle)", explain: "Polymorphism again — the castle is just another target with a take_damage() method, so the rogues can attack it exactly the way they attack defenders." }
          ],
          note: `Run <code>python3 ironwall.py</code>. You should now watch a full battle play out in the terminal and end in VICTORY with the castle on low health. Try changing the King's health or the castle's health and see how the result changes!`
        },
        {
          heading: "You Have a Working Game",
          content: `<p>That is a complete, playable game built almost entirely from inheritance and one polymorphic <code>attack()</code> method. The final step is to give it a face.</p>`
        }
      ]
    },

    // ========================================================
    // PAGE 4 — CONVERT TO IMAGES (PYGAME)
    // ========================================================
    {
      title: "Convert to Images",
      tag: "pygame version",
      subtitle: "Same classes, same OOP — now with sprites, a castle and a real game window.",
      sections: [
        {
          heading: "First — Install pygame",
          content: `<p>The visual version uses <strong>pygame</strong>, a library for making games in Python. Install it once from the terminal:</p>`,
          code: `pip3 install pygame`,
          callout: `Stuck installing it? Follow the short <a href="pygame_setup.html">Pygame Setup</a> guide, then come back here.`
        },
        {
          heading: "The OOP Is the Same — Only the Plumbing Is New",
          content: `<p>Open <code>ironwall_visual.py</code> from your starter pack. It looks longer, but almost all of it is pygame "plumbing" — opening a window, drawing, running the game loop. <strong>None of that is OOP and it is all written for you.</strong></p>
<p>Your characters are still ordinary classes in the same family tree. The only new thing each character needs is a <strong>sprite</strong> (its picture) and a <strong>position</strong>. The parent class handles drawing for everyone:</p>`,
          code: `def draw(self, screen):
    rect = self.sprite.get_rect(center=(self.x, self.y))
    screen.blit(self.sprite, rect)   # draw this character's image`,
          callout: `Because <code>draw()</code> lives in the <code>GameCharacter</code> parent, every defender and every rogue can be drawn the same way — inheritance doing the work again.`
        },
        {
          type: "build",
          badge: "PAGE 4 — YOUR TURN",
          heading: "Complete the two missing rogues",
          instruction: `<p>In <code>ironwall_visual.py</code>, the <code>Enemy</code> parent and a finished <code>RogueArcher</code> are your worked examples. Complete <strong>RogueWarrior</strong> and <strong>RogueKing</strong> just below them by following the same pattern — each one passes its stats and its image filename up to the parent.</p>`,
          code: `class RogueWarrior(Enemy):
    speed, attack_cooldown = 1.6, 50
    def __init__(self, x, y):
        super().__init__("Rogue Warrior", 170, 11, "rogue_warrior.png", x, y, size=80)


class RogueKing(Enemy):
    speed, attack_cooldown = 1.1, 45
    def __init__(self, x, y):
        super().__init__("Rogue King", 430, 20, "rogue_king.png", x, y, size=92)`,
          explain: [
            { line: "\"rogue_warrior.png\"", explain: "The image filename. The parent class loads it from the assets folder and stores it as self.sprite — so this rogue now has a face." },
            { line: "speed, attack_cooldown = 1.1, 45", explain: "The King is slow but relentless. These class attributes are inherited from Enemy and overridden here to make the boss feel different." }
          ]
        },
        {
          type: "build",
          badge: "PAGE 4 — STEP 2",
          heading: "Send the new rogues into battle",
          instruction: `<p>Find the <code>self.waves</code> list in the <code>Game</code> class and mix your new rogues into the waves. Put the <code>RogueKing</code> in the final wave as the boss.</p>`,
          code: `self.waves = [
    [RogueArcher, RogueWarrior, RogueArcher, RogueWarrior],
    [RogueWarrior, RogueArcher, RogueWarrior, RogueArcher, RogueWarrior, RogueArcher],
    [RogueWarrior, RogueArcher, RogueWarrior, RogueKing, RogueArcher, RogueWarrior, RogueArcher],
]`,
          note: `Run <code>python3 ironwall_visual.py</code>. A game window opens and the battle plays out with images — your rogues marching on the castle, your defenders firing back, health bars draining. You built that.`
        },
        {
          heading: "🏰 You Built Ironwall",
          content: `<p>Every character on screen is an object from your class family. Every attack is a polymorphic method call. Every shared behaviour — health, drawing, taking damage — was inherited from <code>GameCharacter</code> and written only once.</p>
<p>Want to see a fully polished version with three tuned waves and a boss finale? <a href="ironwall.html">Play the finished Ironwall</a> and compare it with yours.</p>`,
          callout: `<strong>Make it yours:</strong> change the wave sizes, invent a fourth rogue, give a defender more health, or speed up the King. The numbers are yours to balance — that is game design.`
        }
      ]
    }

  ]
};

// touched 2026-06-05
