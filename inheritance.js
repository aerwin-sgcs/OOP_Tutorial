// ============================================================
// INHERITANCE TUTORIAL — DATA FILE
// Game Characters: Warrior, Archer, Thief
// ============================================================

const TUTORIAL = {
  id: "inheritance",
  title: "OOP Inheritance",
  subtitle: "Build a game character system using parent and child classes",
  pages: [

    // ============================================================
    // PAGE 1 — Introduction (no code)
    // ============================================================
    {
      pageNum: 1,
      title: "What Is Inheritance?",
      subtitle: "Concepts, analogies, and key terms before we write any code",
      sections: [
        {
          type: "intro",
          heading: "What Is This Tutorial About?",
          content: `<p>In this tutorial you are going to learn how to use <strong>Object-Oriented Programming (OOP)</strong> in Python to build characters for a game.</p>
<p>But before we write a single line of code, we need to understand one very important idea — <strong>inheritance</strong>. Let's start with something you already know: families.</p>`
        },
        {
          type: "analogy",
          heading: "Think About Your Family",
          content: `<p>Imagine your grandparents. They have certain traits — maybe brown eyes, dark hair, a talent for sport. When they had children, those children <strong>inherited</strong> some of those traits. They did not grow those traits from scratch — they received them.</p>
<p>Now those children grew up and had children of their own — your generation. You also inherited traits. But you are not a copy of your grandparents. You have your own unique qualities too.</p>`,
          callout: `A <strong>grandparent</strong> passes traits down to <strong>children</strong>, who pass them down to <strong>grandchildren</strong>. Each generation <em>inherits</em> the basics and then adds something new of their own. This is exactly how inheritance works in programming.`
        },
        {
          type: "analogy",
          heading: "Think About Animals",
          content: `<p>Every animal — no matter what kind — breathes, eats, and moves. Those are things <em>all</em> animals share. Now think about specific types:</p>`,
          highlight: `🐕 <strong>Dog</strong> — breathes, eats, moves... AND barks, fetches<br><br>
🐱 <strong>Cat</strong> — breathes, eats, moves... AND meows, climbs<br><br>
🦅 <strong>Eagle</strong> — breathes, eats, moves... AND flies, hunts from the sky`,
          callout: `<strong>Animal</strong> is the <strong>parent class</strong>. <strong>Dog, Cat, Eagle</strong> are the <strong>child classes</strong>. The child classes <em>inherit</em> everything from the parent, then add their own features.`
        },
        {
          type: "info",
          heading: "Now Let's Connect This To Our Game",
          content: `<p>We are going to build three types of game characters: a <strong>Warrior</strong>, an <strong>Archer</strong>, and a <strong>Thief</strong>.</p>
<p>Think about what they all have in common:</p>`,
          highlight: `✅ Every character has: a <strong>name</strong>, <strong>health points</strong>, and the ability to <strong>attack</strong>`,
          content2: `<p>Now think about what makes each one unique:</p>`,
          highlight2: `⚔️ <strong>Warrior</strong> — has armour, can block attacks<br><br>
🏹 <strong>Archer</strong> — has arrows, can reload<br><br>
🗡️ <strong>Thief</strong> — has stealth, can sneak and disarm traps`,
          content3: `<p>We will write the <strong>shared stuff once</strong> in a parent class called <code>GameCharacter</code>, and then create three child classes that <strong>inherit</strong> from it and add their own unique features.</p>`
        },
        {
          type: "warning",
          heading: "Why Not Just Write 3 Separate Classes?",
          content: `<p>You could write a Warrior class, an Archer class, and a Thief class that are completely separate from each other. But here is the problem:</p>`,
          warning: `You would be writing the same code — name, health, basic attack — <strong>three times</strong>. If you later wanted to change something (say, add a level to every character), you would have to find it and fix it in <strong>all three classes</strong>. That is messy, time-consuming, and easy to get wrong.`,
          content2: `<p>With inheritance, you write the shared code <strong>once</strong> in the parent class. If you need to change it, you change it in <strong>one place</strong> and all child classes automatically get the update. This is one of the most powerful ideas in programming.</p>`,
          callout: `<strong>Don't Repeat Yourself (DRY)</strong> — write code once, reuse it everywhere. Inheritance makes this possible.`
        },
        {
          type: "terms",
          heading: "Key Terms",
          terms: [
            { term: "Class", definition: "A blueprint or template for creating objects" },
            { term: "Object", definition: "A specific thing created from a class (e.g. one actual character)" },
            { term: "Parent class", definition: "The class being inherited FROM (e.g. GameCharacter)" },
            { term: "Child class", definition: "The class that inherits FROM the parent (e.g. Warrior)" },
            { term: "Inheritance", definition: "When a child class receives the features of a parent class" },
            { term: "Attribute", definition: "A variable that belongs to an object (e.g. name, health)" },
            { term: "Method", definition: "A function that belongs to a class (e.g. attack())" },
            { term: "Instance", definition: "One specific object created from a class (e.g. one particular Warrior called Thor)" },
            { term: "Instantiate", definition: "The act of creating an instance — turning a blueprint into a real, usable object" },
            { term: "Instance variable", definition: "A value stored inside a specific instance. Two different warriors can have different health values — each has its own instance variable for health" },
            { term: "__init__", definition: "A special method called a constructor. It runs automatically the moment you create a new object. It sets up the object's starting values." },
            { term: "self", definition: "Refers to the specific object being used right now. When you create a character called Thor, self IS Thor." },
            { term: "Override", definition: "When a child class replaces a parent's method with its own version" },
            { term: "super()", definition: "A way to call the parent class constructor from inside a child class" }
          ]
        },
        {
          type: "checkpoint",
          format: "mcq",
          heading: "Check 1 — What is inheritance?",
          question: "Which sentence best describes what <strong>inheritance</strong> means in Object-Oriented Programming?",
          options: [
            "Two unrelated classes are joined together so they can share variables.",
            "A class automatically receives the attributes and methods of another class, called its parent.",
            "A class is renamed so it matches the name of an existing class.",
            "A method inside a class is replaced with a brand new function written outside the class."
          ],
          answer: 1,
          explanation: "Inheritance lets a child class automatically receive the attributes and methods of a parent class — so shared code is written once in the parent and reused by every child. The other options describe things that are not inheritance."
        }
      ],
      snapshot: null
    },

    // ============================================================
    // PAGE 2 — GameCharacter parent class + Warrior child class
    // ============================================================
    {
      pageNum: 2,
      title: "The Parent Class",
      subtitle: "Build GameCharacter and add your first child class — Warrior",
      sections: [
        {
          type: "terms",
          heading: "New Terms Before The Code",
          terms: [
            { term: "class", definition: "The keyword that tells Python you are defining a new class" },
            { term: "__init__", definition: "The constructor — runs automatically when a new object is created. Sets up the object's starting values." },
            { term: "self", definition: "Refers to the specific object being created right now. self.name = name means: store name inside THIS object." },
            { term: "Instance variable", definition: "A value stored inside a specific instance using self. Each instance keeps its own separate copy." }
          ]
        },
        {
          type: "build",
          heading: "Step 1 — Create a new file called game_characters.py",
          instruction: `<p>Open PyCharm and create a new file called <strong>game_characters.py</strong>. This is the file you will build on throughout the entire tutorial.</p>
<p>Type or copy the code below. This is the <strong>parent class</strong> — the blueprint that all three characters will share. Every line is explained below the code block.</p>
<p><strong>When you run this code you will see no output. This is correct.</strong> You have defined the GameCharacter class but you have not yet created any characters from it. A class is a blueprint — nothing happens until you build something from it. You will do that in Step 3.</p>`,
          code: `class GameCharacter:

    def __init__(self, name, health):
        self.name = name        # stores this character's name
        self.health = health    # stores this character's health

    def introduce(self):
        print(f"I am {self.name} and I have {self.health} health points.")

    def take_damage(self, amount):
        self.health -= amount
        print(f"{self.name} took {amount} damage! Health: {self.health}")`,
          explain: [
            { line: "class GameCharacter:", explain: "Defines a new class called GameCharacter. This is the parent class — the shared blueprint." },
            { line: "def __init__(self, name, health):", explain: "The constructor. Python calls this automatically whenever a new GameCharacter is created. name and health are the values we pass in." },
            { line: "self.name = name", explain: "Creates an instance variable called name. self refers to the specific object being created. self.name = name means: store the name value inside this object." },
            { line: "self.health = health", explain: "Same idea — stores the health value inside this specific object. Each character gets their own separate health value." },
            { line: "def introduce(self):", explain: "A method. All child classes will automatically have this — they do not need to write it themselves." },
            { line: "def take_damage(self, amount):", explain: "Another inherited method. self.health -= amount subtracts from this character's health. No child class needs to rewrite this." }
          ]
        },
        {
          type: "build",
          heading: "Step 2 — Add the Warrior child class",
          instruction: `<p>Now add the <strong>Warrior</strong> class to your file. Type it below the GameCharacter class — do not delete anything you have already written.</p>
<p>The Warrior Class inherits from the GameCharacter Class. Notice the bracket after the word Warrior. Inside the bracket is the name of the class it inherits from — GameCharacter. This also shows that in Python the Warrior class is a child class.</p>
<p><strong>When you run this code you will still see no output. This is correct.</strong> You have now defined two classes but you have still not created any characters from them. You are still building the blueprints. Output comes in Step 3.</p>`,
          code: `class Warrior(GameCharacter):

    def __init__(self, name, health, armor):
        self.name = name        # same as parent — we will improve this on the next page
        self.health = health    # same as parent — we will improve this on the next page
        self.armor = armor      # unique to Warrior

    def block(self):
        print(f"{self.name} raises their shield! Armor: {self.armor}")`,
          explain: [
            { line: "class Warrior(GameCharacter):", explain: "The word Warrior is the name of the new class being defined. Inside the brackets after Warrior is the name GameCharacter — this tells Python that the Warrior class inherits from the GameCharacter class. Because of this, the Warrior class is a child class and GameCharacter is its parent class. Warrior automatically receives everything GameCharacter has." },
            { line: "def __init__(self, name, health, armor):", explain: "The Warrior constructor needs name and health (from the parent) AND armor which is unique to Warrior." },
            { line: "self.armor = armor", explain: "This is the unique instance variable that only Warrior has. GameCharacter does not have armor." },
            { line: "def block(self):", explain: "A unique method — only Warriors can block. Archer and Thief do not have this." }
          ],
          note: `Notice we are writing self.name and self.health again in the Warrior class — repeating code from the parent. This is not ideal. On the next page you will learn about super() which fixes this properly. For now, write it this way so you can see the difference later.`
        },
        {
          type: "build",
          heading: "Step 3 — Create instances and run your code",
          instruction: `<p>Add these lines to the <strong>bottom of your file</strong> — below both classes, with no indentation. Then run the file in PyCharm.</p>`,
          expectedOutput: `I am Zara and I have 100 health points.\nI am Thor and I have 100 health points.\nZara took 20 damage! Health: 80\nThor raises their shield! Armor: 50`,
          code: `# Create instances
hero = GameCharacter("Zara", 100)
warrior = Warrior("Thor", 100, 50)

# Call inherited methods on both
hero.introduce()        # I am Zara and I have 100 health points.
warrior.introduce()     # I am Thor and I have 100 health points.

# Call take_damage — inherited from GameCharacter
hero.take_damage(20)    # Zara took 20 damage! Health: 80

# Call the Warrior's unique method
warrior.block()         # Thor raises their shield! Armor: 50`,
          explain: [
            { line: "hero = GameCharacter(\"Zara\", 100)", explain: "Creates one instance of GameCharacter. Python calls __init__ automatically with name='Zara' and health=100." },
            { line: "warrior = Warrior(\"Thor\", 100, 50)", explain: "Creates one instance of Warrior. Thor inherits everything from GameCharacter and also has armor=50." },
            { line: "warrior.introduce()", explain: "Warrior does not have its own introduce() method — it inherits it from GameCharacter. This is inheritance in action." },
            { line: "warrior.block()", explain: "This only works on warrior — not on hero, because GameCharacter does not have a block() method." }
          ]
        },
        {
          type: "checkpoint",
          format: "truefalse",
          heading: "Check 2 — Instances",
          question: `True or False?\n---code---\nwarrior = Warrior("Thor", 100, 50)\n---code---\nAfter this line runs, <code>warrior</code> is an <strong>instance</strong> of the Warrior class — one specific object built from the Warrior blueprint, with its own name, health, and armor values.`,
          options: ["True", "False"],
          answer: 0,
          explanation: "True. A class is the blueprint and an instance is one specific object created from that blueprint. Each instance keeps its own copy of the instance variables (name, health, armor), so two different warriors can have different values."
        }
      ],
      snapshot: `# game_characters.py — page 2 complete

class GameCharacter:

    def __init__(self, name, health):
        self.name = name
        self.health = health

    def introduce(self):
        print(f"I am {self.name} and I have {self.health} health points.")

    def take_damage(self, amount):
        self.health -= amount
        print(f"{self.name} took {amount} damage! Health: {self.health}")


class Warrior(GameCharacter):

    def __init__(self, name, health, armor):
        self.name = name
        self.health = health
        self.armor = armor

    def block(self):
        print(f"{self.name} raises their shield! Armor: {self.armor}")


# --- Instances ---
hero = GameCharacter("Zara", 100)
warrior = Warrior("Thor", 100, 50)

hero.introduce()
warrior.introduce()
hero.take_damage(20)
warrior.block()`
    },

    // ============================================================
    // PAGE 3 — Inheritance in depth + Archer added
    // ============================================================
    {
      pageNum: 3,
      title: "Inheritance in Depth",
      subtitle: "What the child class really receives — and add the Archer",
      sections: [
        {
          type: "terms",
          heading: "New Terms Before The Code",
          terms: [
            { term: "Inherit", definition: "When a child class automatically receives all the methods and attributes of its parent class" },
            { term: "Child class", definition: "A class that inherits from a parent. It gets everything the parent has and can add its own features on top." },
            { term: "Parent class", definition: "The class being inherited from. Its code is shared by all child classes without being rewritten." },
            { term: "DRY principle", definition: "Don't Repeat Yourself — a core principle of good programming. Write code once and reuse it rather than copying it." }
          ]
        },
        {
          type: "info",
          heading: "What Does The Warrior Actually Inherit?",
          content: `<p>On the previous page you created a Warrior and called <code>warrior.introduce()</code>. But Warrior does not have an introduce() method written inside it. So where did it come from?</p>
<p>It came from <strong>GameCharacter</strong>. When Python cannot find a method on the child class, it automatically looks up to the parent class. That is inheritance working silently in the background.</p>`,
          highlight: `The Warrior class automatically receives from GameCharacter:<br><br>
✅ the <strong>introduce()</strong> method<br>
✅ the <strong>take_damage()</strong> method<br>
✅ the <strong>name</strong> instance variable logic from __init__<br>
✅ the <strong>health</strong> instance variable logic from __init__<br><br>
The Warrior adds on top:<br><br>
➕ the <strong>armor</strong> instance variable<br>
➕ the <strong>block()</strong> method`
        },
        {
          type: "build",
          heading: "Step 4 — Add the Archer child class",
          instruction: `<p>Now add the <strong>Archer</strong> class to your file. Type it below the Warrior class — do not delete anything you have already written.</p>
<p>The Archer inherits from GameCharacter just like Warrior does. Its unique feature is <code>arrows</code> — a count that goes down each time the Archer attacks.</p>
<p><strong>Run your file after adding this class. Your terminal should show the output below.</strong> The Archer class has been added but the test code does not use it yet — that is why the output has not changed from Step 3.</p>`,
          expectedOutput: `I am Zara and I have 100 health points.\nI am Thor and I have 100 health points.\nZara took 20 damage! Health: 80\nThor raises their shield! Armor: 50`,
          code: `class Archer(GameCharacter):

    def __init__(self, name, health, arrows):
        self.name = name        # same as parent — still improving this on the next page
        self.health = health    # same as parent — still improving this on the next page
        self.arrows = arrows    # unique to Archer

    def reload(self):
        self.arrows += 5
        print(f"{self.name} reloaded! Arrows: {self.arrows}")`,
          explain: [
            { line: "class Archer(GameCharacter):", explain: "The same pattern as Warrior. Inside the brackets after the word Archer is the name GameCharacter — this tells Python that the Archer class inherits from the GameCharacter class. This makes Archer a child class and GameCharacter its parent class." },
            { line: "self.arrows = arrows", explain: "The unique instance variable for Archer. Each Archer instance has its own separate arrow count." },
            { line: "def reload(self):", explain: "A unique method — only Archers can reload. self.arrows += 5 adds 5 to THIS archer's arrow count." }
          ]
        },
        {
          type: "build",
          heading: "Step 5 — Update your test code at the bottom",
          instruction: `<p>Replace the test code at the bottom of your file with this updated version. Run it in PyCharm.</p>`,
          expectedOutput: `I am Zara and I have 100 health points.\nI am Thor and I have 100 health points.\nI am Legolas and I have 80 health points.\nThor took 30 damage! Health: 70\nThor raises their shield! Armor: 50\nLegolas reloaded! Arrows: 15`,
          code: `# Create instances
hero    = GameCharacter("Zara", 100)
warrior = Warrior("Thor", 100, 50)
archer  = Archer("Legolas", 80, 10)

# All three can call introduce() — inherited from GameCharacter
hero.introduce()      # I am Zara and I have 100 health points.
warrior.introduce()   # I am Thor and I have 100 health points.
archer.introduce()    # I am Legolas and I have 80 health points.

# take_damage works on all three — inherited
warrior.take_damage(30)   # Thor took 30 damage! Health: 70

# Unique methods
warrior.block()    # Thor raises their shield! Armor: 50
archer.reload()    # Legolas reloaded! Arrows: 15`,
          explain: [
            { line: "archer.introduce()", explain: "Archer does not have introduce() written inside it. Python finds it on GameCharacter automatically. This is why inheritance is so powerful — the method is written once and works everywhere." },
            { line: "archer.reload()", explain: "Only Archer has reload(). If you tried warrior.reload() Python would raise an error — Warrior does not have that method." }
          ]
        },
        {
          type: "checkpoint",
          format: "multi",
          heading: "Check 3 — Parent and child class",
          question: `Look at this line:\n---code---\nclass Archer(GameCharacter):\n---code---\nTick BOTH correct statements — one about the parent and one about the child. You must select both correct answers (and nothing else) to be right.`,
          options: [
            "Parent class: Archer",
            "Parent class: GameCharacter",
            "Child class: Archer",
            "Child class: GameCharacter"
          ],
          answers: [1, 2],
          explanation: "The class in the brackets is the parent — GameCharacter. The class being defined is the child — Archer. So the parent class is GameCharacter and the child class is Archer."
        }
      ],
      snapshot: `# game_characters.py — page 3 complete

class GameCharacter:

    def __init__(self, name, health):
        self.name = name
        self.health = health

    def introduce(self):
        print(f"I am {self.name} and I have {self.health} health points.")

    def take_damage(self, amount):
        self.health -= amount
        print(f"{self.name} took {amount} damage! Health: {self.health}")


class Warrior(GameCharacter):

    def __init__(self, name, health, armor):
        self.name = name
        self.health = health
        self.armor = armor

    def block(self):
        print(f"{self.name} raises their shield! Armor: {self.armor}")


class Archer(GameCharacter):

    def __init__(self, name, health, arrows):
        self.name = name
        self.health = health
        self.arrows = arrows

    def reload(self):
        self.arrows += 5
        print(f"{self.name} reloaded! Arrows: {self.arrows}")


# --- Instances ---
hero    = GameCharacter("Zara", 100)
warrior = Warrior("Thor", 100, 50)
archer  = Archer("Legolas", 80, 10)

hero.introduce()
warrior.introduce()
archer.introduce()
warrior.take_damage(30)
warrior.block()
archer.reload()`
    },

    // ============================================================
    // PAGE 4 — super() dedicated page
    // ============================================================
    {
      pageNum: 4,
      title: "Understanding super()",
      subtitle: "Why super() matters — with and without it",
      sections: [
        {
          type: "terms",
          heading: "New Terms Before The Code",
          terms: [
            { term: "super()", definition: "A built-in Python function that gives you access to the parent class from inside a child class. Used in the child's __init__ to call the parent's __init__." },
            { term: "DRY principle", definition: "Don't Repeat Yourself. super() lets you reuse the parent's constructor code instead of copying it into every child class." }
          ]
        },
        {
          type: "info",
          heading: "The Problem With What We Have Now",
          content: `<p>Look at the Warrior class you wrote on page 2. Inside its <code>__init__</code> you wrote:</p>`,
          code: `self.name = name
self.health = health`,
          content2: `<p>Now look at the Archer class. Its <code>__init__</code> also has:</p>`,
          code2: `self.name = name
self.health = health`,
          content3: `<p>Both lines are identical copies of what GameCharacter's <code>__init__</code> already does. You have violated the DRY principle — you are writing the same code three times. If you ever wanted to change how name or health is set up, you would have to change it in GameCharacter, Warrior, and Archer separately.</p>
<p><strong>super()</strong> solves this. It lets the child class call the parent's <code>__init__</code> directly — so the shared setup code only ever lives in one place.</p>`
        },
        {
          type: "build",
          heading: "Step 6 — Update Warrior to use super()",
          instruction: `<p>Find the Warrior class in your file and <strong>replace the __init__ method</strong> with the version below. The block() method stays exactly the same — only __init__ changes.</p>`,
          code: `class Warrior(GameCharacter):

    def __init__(self, name, health, armor):
        super().__init__(name, health)  # calls GameCharacter's __init__
        self.armor = armor              # unique to Warrior`,
          explain: [
            { line: "super().__init__(name, health)", explain: "This calls GameCharacter's __init__ directly. Python runs self.name = name and self.health = health inside GameCharacter — we do not need to write those lines here at all." },
            { line: "self.armor = armor", explain: "After super() has handled the shared setup, we only need to write the unique part — armor — which belongs only to Warrior." }
          ],
          expectedOutput: `I am Zara and I have 100 health points.\nI am Thor and I have 100 health points.\nI am Legolas and I have 80 health points.\nThor took 30 damage! Health: 70\nThor raises their shield! Armor: 50\nLegolas reloaded! Arrows: 15`,
          note: `super() does not change what the code does — it just removes the repetition. Your terminal should show the output above. The program behaves identically, just written more cleanly.`
        },
        {
          type: "build",
          heading: "Step 7 — Update Archer to use super()",
          instruction: `<p>Now do the same for Archer. Replace its __init__ with the version below.</p>
<p>super() does not change what the code does — it just removes the repetition. Your terminal should show the output above. The program behaves identically, just written more cleanly.</p>`,
          expectedOutput: `I am Zara and I have 100 health points.\nI am Thor and I have 100 health points.\nI am Legolas and I have 80 health points.\nThor took 30 damage! Health: 70\nThor raises their shield! Armor: 50\nLegolas reloaded! Arrows: 15`,
          code: `class Archer(GameCharacter):

    def __init__(self, name, health, arrows):
        super().__init__(name, health)  # calls GameCharacter's __init__
        self.arrows = arrows            # unique to Archer`,
          explain: [
            { line: "super().__init__(name, health)", explain: "Same as Warrior. GameCharacter handles name and health — Archer only needs to handle what is unique to it." }
          ]
        },
        {
          type: "warning",
          heading: "What Happens If You Forget super()?",
          content: `<p>This is important. Try this experiment — temporarily change Warrior's __init__ to this and run the file:</p>`,
          code: `class Warrior(GameCharacter):

    def __init__(self, name, health, armor):
        self.armor = armor    # MISSING super() — do NOT leave it like this`,
          warning: `Without super(), the name and health instance variables are never set up. When you call warrior.introduce() Python will crash with an AttributeError: 'Warrior' object has no attribute 'name'. The parent's __init__ never ran, so the parent's setup never happened.`,
          content2: `<p>Change it back to using <code>super().__init__(name, health)</code> before continuing. This experiment shows you exactly why super() is not optional — it is the line that connects the child class to its parent's setup code.</p>`
        },
        {
          type: "checkpoint",
          format: "mcq",
          heading: "Check 4 — What does super() do?",
          question: `Look at this Thief class:\n---code---\nclass Thief(GameCharacter):\n    def __init__(self, name, health, stealth):\n        super().__init__(name, health)\n        self.stealth = stealth\n---code---\nWhat does the line <code>super().__init__(name, health)</code> actually do?`,
          options: [
            "It creates a brand new GameCharacter object that lives alongside the Thief.",
            "It calls the GameCharacter constructor so it runs self.name = name and self.health = health for this Thief.",
            "It renames the Thief class to GameCharacter for the rest of the program.",
            "It skips the GameCharacter constructor and stops it from running."
          ],
          answer: 1,
          explanation: "super().__init__(name, health) calls the parent class constructor. GameCharacter's __init__ then runs and sets self.name and self.health for THIS Thief object. The Thief doesn't need to rewrite those two lines — that's the DRY principle in action."
        }
      ],
      snapshot: `# game_characters.py — page 4 complete

class GameCharacter:

    def __init__(self, name, health):
        self.name = name
        self.health = health

    def introduce(self):
        print(f"I am {self.name} and I have {self.health} health points.")

    def take_damage(self, amount):
        self.health -= amount
        print(f"{self.name} took {amount} damage! Health: {self.health}")


class Warrior(GameCharacter):

    def __init__(self, name, health, armor):
        super().__init__(name, health)
        self.armor = armor

    def block(self):
        print(f"{self.name} raises their shield! Armor: {self.armor}")


class Archer(GameCharacter):

    def __init__(self, name, health, arrows):
        super().__init__(name, health)
        self.arrows = arrows

    def reload(self):
        self.arrows += 5
        print(f"{self.name} reloaded! Arrows: {self.arrows}")


# --- Instances ---
hero    = GameCharacter("Zara", 100)
warrior = Warrior("Thor", 100, 50)
archer  = Archer("Legolas", 80, 10)

hero.introduce()
warrior.introduce()
archer.introduce()
warrior.take_damage(30)
warrior.block()
archer.reload()`
    },

    // ============================================================
    // PAGE 5 — Overriding + Thief added + final file
    // ============================================================
    {
      pageNum: 5,
      title: "Overriding Methods",
      subtitle: "Give each character their own attack — and meet the Thief",
      sections: [
        {
          type: "terms",
          heading: "New Terms Before The Code",
          terms: [
            { term: "Override", definition: "When a child class writes its own version of a method that already exists in the parent class. Python always uses the child's version." },
            { term: "Method resolution", definition: "When you call a method, Python looks at the child class first. If it finds the method there, it uses it. If not, it looks at the parent." }
          ]
        },
        {
          type: "info",
          heading: "What Is Overriding?",
          content: `<p>Right now GameCharacter has an <code>attack()</code> method — but we have not added it yet. When we do, all three child classes will inherit it. But a Warrior attacks differently from an Archer, who attacks differently from a Thief.</p>
<p>We could leave them all using the same generic attack. Or we can <strong>override</strong> it — each child class writes its own version of attack(), and Python uses that version instead of the parent's.</p>`,
          callout: `Overriding does not delete the parent method. It just means Python uses the child class version when called on a child class object. If you called attack() on a plain GameCharacter object, it would use the parent version.`
        },
        {
          type: "build",
          heading: "Step 8 — Add attack() to GameCharacter",
          instruction: `<p>Find your GameCharacter class and add the attack() method below take_damage(). This is the default version — child classes will override it with their own.</p>
<p><strong>When you run this code your terminal will show exactly this — the attack() method has been added to the blueprint but the test code does not call it yet, so the output does not change until Step 11.</strong></p>`,
          expectedOutput: `I am Zara and I have 100 health points.\nI am Thor and I have 100 health points.\nI am Legolas and I have 80 health points.\nThor took 30 damage! Health: 70\nThor raises their shield! Armor: 50\nLegolas reloaded! Arrows: 15`,
          code: `    def attack(self):
        print(f"{self.name} attacks!")`,
          explain: [
            { line: "def attack(self):", explain: "A generic default attack. Child classes will replace this with their own specific version." }
          ]
        },
        {
          type: "build",
          heading: "Step 9 — Override attack() in Warrior and Archer",
          instruction: `<p>Add an attack() method to both Warrior and Archer. These replace the parent's generic version for those classes.</p>
<p><strong>Run your file after adding these methods. Your terminal should show the output below.</strong> The override methods have been added but the test code does not call attack() yet — that happens in Step 11.</p>`,
          expectedOutput: `I am Zara and I have 100 health points.\nI am Thor and I have 100 health points.\nI am Legolas and I have 80 health points.\nThor took 30 damage! Health: 70\nThor raises their shield! Armor: 50\nLegolas reloaded! Arrows: 15`,
          code: `# Add inside the Warrior class:
    def attack(self):
        print(f"{self.name} swings a sword for 25 damage! ⚔️")

# Add inside the Archer class:
    def attack(self):
        if self.arrows > 0:
            self.arrows -= 1
            print(f"{self.name} fires an arrow! Arrows left: {self.arrows} 🏹")
        else:
            print(f"{self.name} has no arrows left!")`,
          explain: [
            { line: "def attack(self): # Warrior", explain: "Warrior's own version of attack(). Python will always use this when attack() is called on a Warrior object." },
            { line: "if self.arrows > 0:", explain: "The Archer version checks the instance variable arrows before attacking. Each Archer instance has its own separate arrow count." }
          ]
        },
        {
          type: "build",
          heading: "Step 10 — Add the Thief class",
          instruction: `<p>Add the final character class to your file. The Thief inherits from GameCharacter, has a stealth attribute, overrides attack(), and has two unique methods.</p>
<p><strong>Run your file after adding the Thief class. Your terminal should show the output below.</strong> The Thief class has been defined but the test code does not use it yet — you will replace the test code completely in Step 11.</p>`,
          expectedOutput: `I am Zara and I have 100 health points.\nI am Thor and I have 100 health points.\nI am Legolas and I have 80 health points.\nThor took 30 damage! Health: 70\nThor raises their shield! Armor: 50\nLegolas reloaded! Arrows: 15`,
          code: `class Thief(GameCharacter):

    def __init__(self, name, health, stealth):
        super().__init__(name, health)
        self.stealth = stealth

    def attack(self):
        print(f"{self.name} strikes with precision for 20 damage! 🗡️")

    def sneak(self):
        print(f"{self.name} moves silently through the shadows! Stealth: {self.stealth} 🌑")

    def disarm_trap(self):
        print(f"{self.name} carefully disarms the trap! Precision: {self.stealth} 🔓")`,
          explain: [
            { line: "super().__init__(name, health)", explain: "The same pattern as Warrior and Archer. super().__init__(name, health) calls the GameCharacter class constructor directly. GameCharacter's __init__ runs and sets up self.name and self.health — the Thief class does not need to repeat those lines." },
            { line: "self.stealth = stealth", explain: "self.stealth = stealth stores the stealth value inside this specific Thief object. This is the unique instance variable that only the Thief class has — GameCharacter, Warrior, and Archer do not have stealth." },
            { line: "def attack(self):", explain: "The Thief class writes its own version of attack(). Because GameCharacter already has an attack() method, this is called overriding — the Thief class replaces the parent's version with its own. When thief.attack() is called, Python uses this version, not GameCharacter's." },
            { line: "def sneak(self):", explain: "sneak() is a unique method that exists only in the Thief class. It is not inherited from GameCharacter and it is not in Warrior or Archer. Only a Thief object can call this method." }
          ]
        },
        {
          type: "build",
          heading: "Step 11 — Update your test code and run the final file",
          instruction: `<p>Replace all the test code at the bottom of your file with this complete version. Run it in PyCharm.</p>`,
          expectedOutput: `\n--- Introductions ---\nI am Thor and I have 100 health points.\nI am Legolas and I have 80 health points.\nI am Elara and I have 70 health points.\n\n--- Attacks ---\nThor swings a sword for 25 damage! ⚔️\nLegolas fires an arrow! Arrows left: 9 🏹\nElara strikes with precision for 20 damage! 🗡️\n\n--- Taking Damage ---\nThor took 40 damage! Health: 60\n\n--- Unique Methods ---\nThor raises their shield! Armor: 50\nLegolas reloaded! Arrows: 14\nElara moves silently through the shadows! Stealth: 85 🌑\nElara carefully disarms the trap! Precision: 85 🔓`,
          code: `# --- All three characters ---
warrior = Warrior("Thor", 100, 50)
archer  = Archer("Legolas", 80, 10)
thief   = Thief("Elara", 70, 85)

print("\\n--- Introductions ---")
warrior.introduce()    # inherited from GameCharacter
archer.introduce()     # inherited from GameCharacter
thief.introduce()      # inherited from GameCharacter

print("\\n--- Attacks ---")
warrior.attack()       # Warrior's override
archer.attack()        # Archer's override
thief.attack()         # Thief's override

print("\\n--- Taking Damage ---")
warrior.take_damage(40)    # inherited — works on all three

print("\\n--- Unique Methods ---")
warrior.block()
archer.reload()
thief.sneak()
thief.disarm_trap()`,
          explain: [
            { line: "warrior.attack() / archer.attack() / thief.attack()", explain: "Same method name, three completely different results. Python looks at the actual class of each object and calls that class's version. This is overriding in action." }
          ]
        },
        {
          type: "checkpoint",
          format: "multi",
          heading: "Check 5 — Overriding",
          question: "Which of the following are <strong>true</strong> about overriding a method? Tick ALL that apply — you must select the three correct statements (and avoid the one that is wrong) to be right.",
          options: [
            "Overriding is when a child class writes its own version of a method that already exists in the parent class.",
            "When you call the method on a child class object, Python uses the child class version instead of the parent's.",
            "Overriding deletes the method from the parent class so no other child class can use it anymore.",
            "Overriding lets different child classes give different behaviour for the same method name (e.g. Warrior.attack vs Archer.attack)."
          ],
          answers: [0, 1, 3],
          explanation: "Overriding lets a child class replace a parent method with its own version (A), Python uses the child's version when called on a child object (B), and different children can give the same method name different behaviour (D). It does NOT delete the parent's method (C) — the parent and any other children that didn't override it still use the original."
        }
      ],
      snapshot: `# game_characters.py — COMPLETE FILE

class GameCharacter:

    def __init__(self, name, health):
        self.name = name
        self.health = health

    def introduce(self):
        print(f"I am {self.name} and I have {self.health} health points.")

    def attack(self):
        print(f"{self.name} attacks!")

    def take_damage(self, amount):
        self.health -= amount
        print(f"{self.name} took {amount} damage! Health: {self.health}")


class Warrior(GameCharacter):

    def __init__(self, name, health, armor):
        super().__init__(name, health)
        self.armor = armor

    def attack(self):
        print(f"{self.name} swings a sword for 25 damage! ⚔️")

    def block(self):
        print(f"{self.name} raises their shield! Armor: {self.armor}")


class Archer(GameCharacter):

    def __init__(self, name, health, arrows):
        super().__init__(name, health)
        self.arrows = arrows

    def attack(self):
        if self.arrows > 0:
            self.arrows -= 1
            print(f"{self.name} fires an arrow! Arrows left: {self.arrows} 🏹")
        else:
            print(f"{self.name} has no arrows left!")

    def reload(self):
        self.arrows += 5
        print(f"{self.name} reloaded! Arrows: {self.arrows}")


class Thief(GameCharacter):

    def __init__(self, name, health, stealth):
        super().__init__(name, health)
        self.stealth = stealth

    def attack(self):
        print(f"{self.name} strikes with precision for 20 damage! 🗡️")

    def sneak(self):
        print(f"{self.name} moves silently through the shadows! Stealth: {self.stealth} 🌑")

    def disarm_trap(self):
        print(f"{self.name} carefully disarms the trap! Precision: {self.stealth} 🔓")


# --- Run the complete game ---
warrior = Warrior("Thor", 100, 50)
archer  = Archer("Legolas", 80, 10)
thief   = Thief("Elara", 70, 85)

print("\\n--- Introductions ---")
warrior.introduce()
archer.introduce()
thief.introduce()

print("\\n--- Attacks ---")
warrior.attack()
archer.attack()
thief.attack()

print("\\n--- Taking Damage ---")
warrior.take_damage(40)

print("\\n--- Unique Methods ---")
warrior.block()
archer.reload()
thief.sneak()
thief.disarm_trap()`,
      download: {
        filename: "game_characters.py",
        challenges: [
          "CHALLENGE 1 — Add a Mage class that inherits from GameCharacter. Give it a spell_power attribute. Override attack() to print a magic spell message. Add a unique heal() method. Create a Mage instance and test all its methods.",
          "CHALLENGE 2 — Give the Archer only 2 arrows. Call attack() three times. What happens on the third call? Why?",
          "CHALLENGE 3 — Add a status() method to GameCharacter that prints the character's name and current health. Verify that Warrior, Archer, and Thief all automatically have it without any changes to those classes.",
          "CHALLENGE 4 — Create a Warrior and an Archer. Have the Warrior take 60 damage, then have the Archer attack twice. Print the Warrior's health after the damage."
        ]
      }
    },

    // ============================================================
    // PAGE 6 — Quiz and exit ticket
    // ============================================================
    {
      pageNum: 6,
      title: "Quiz — Prove Your Mastery",
      subtitle: "7 questions + broken code challenge. Screenshot your score for your teacher.",
      sections: [],
      quiz: {
        questions: [
          {
            id: "q1",
            type: "mcq",
            difficulty: "Easy — Reading Code",
            question: `Look at the following code:\n---code---\nclass GameCharacter:\n    def attack(self):\n        print("Generic attack!")\n\nclass Archer(GameCharacter):\n    def attack(self):\n        print("Fires an arrow!")\n---code---\na) What OOP concept is demonstrated by the attack() method in Archer?\nb) What will be displayed when this code runs:\n---code---\na = Archer()\na.attack()\n---code---`,
            options: [
              "a) Inheritance — b) Generic attack!",
              "a) Overriding — b) Generic attack!",
              "a) Overriding — b) Fires an arrow!",
              "a) Inheritance — b) Fires an arrow!"
            ],
            answer: 2,
            explanation: "Archer writes its own version of attack() which already exists in GameCharacter — this is overriding. When a.attack() is called, Python uses Archer's version because Archer is the actual class of the object, so it prints 'Fires an arrow!'"
          },
          {
            id: "q2",
            type: "mcq",
            difficulty: "Easy-Medium — Understanding",
            question: "Which of the following attributes does the Archer class have that GameCharacter does NOT?",
            options: ["name", "health", "attack", "arrows"],
            answer: 3,
            explanation: "arrows is the unique attribute the Archer class adds with self.arrows = arrows. name and health come from GameCharacter via super(). attack is a method, not an attribute."
          },
          {
            id: "q3",
            type: "mcq",
            difficulty: "Medium — Application",
            question: "The Warrior, Archer, and Thief each have their own version of attack(), which is different from the one in GameCharacter. What is the term for when a child class replaces a parent's method with its own version?",
            options: ["Inheriting", "Overriding", "Constructing", "Instantiating"],
            answer: 1,
            explanation: "Overriding is when a child class writes its own version of a method that already exists in the parent. Python always uses the child class version when calling the method on a child class object."
          },
          {
            id: "q4",
            type: "mcq",
            difficulty: "Medium — Understanding",
            question: "A student creates warrior = Warrior('Thor', 100, 50) then calls warrior.introduce(). The Warrior class does not have an introduce() method written inside it. What happens?",
            options: [
              "Python raises an error — introduce() does not exist on Warrior",
              "Python looks up to GameCharacter and uses its introduce() method",
              "Python creates a new introduce() method automatically",
              "Nothing happens — the call is ignored"
            ],
            answer: 1,
            explanation: "When Python cannot find a method on the child class, it automatically looks up to the parent class. This is inheritance working — introduce() is written once in GameCharacter and all child classes can use it."
          },
          {
            id: "q5",
            type: "fill",
            difficulty: "Medium — Recall",
            question: "Complete the line: In a child class constructor, we call _______________ to run the parent class constructor and set up inherited instance variables.",
            answers: ["super().__init__", "super().__init__()", "super().__init__(name, health)"],
            placeholder: "Type your answer here...",
            explanation: "super().__init__() calls the parent class constructor. This is how the child class reuses the parent's setup code instead of repeating it — following the DRY principle."
          },
          {
            id: "q6",
            type: "mcq",
            difficulty: "Medium — Reading Code",
            question: `Examine this code:\n---code---\nclass GameCharacter:\n    def __init__(self, name, health):\n        self.name = name\n        self.health = health\n    def introduce(self):\n        print(f"I am {self.name}")\n    def take_damage(self, amount):\n        self.health -= amount\n\nclass Warrior(GameCharacter):\n    def __init__(self, name, health, armor):\n        super().__init__(name, health)\n        self.armor = armor\n    def block(self):\n        print(f"{self.name} blocks!")\n---code---\nWhich of the following is correct?`,
            options: [
              "GameCharacter is the child class. Warrior is the parent class. Warrior inherits block() from GameCharacter.",
              "Warrior is the child class. GameCharacter is the parent class. Warrior inherits introduce() and take_damage() from GameCharacter.",
              "Warrior is the child class. GameCharacter is the parent class. Warrior inherits block() from GameCharacter.",
              "GameCharacter is the child class. Warrior is the parent class. GameCharacter inherits introduce() from Warrior."
            ],
            answer: 1,
            explanation: "Warrior is the child class — GameCharacter appears in its brackets. GameCharacter is the parent class. Warrior inherits introduce() and take_damage() from GameCharacter. block() belongs to Warrior only — it is not inherited, it is unique to Warrior."
          },
          {
            id: "q7",
            type: "mcq",
            difficulty: "Hard — Creation",
            question: "A student wants to add a Blacksmith class. Which of the following correctly creates a Blacksmith that inherits from GameCharacter, adds a skill_level attribute, and overrides attack()?",
            options: [
              `class Blacksmith:\n  def __init__(self, name, health, skill_level):\n    self.skill_level = skill_level\n  def attack(self):\n    print(f"Blacksmith strikes!")`,
              `class Blacksmith(GameCharacter):\n  def __init__(self, name, health, skill_level):\n    super().__init__(name, health)\n    self.skill_level = skill_level\n  def attack(self):\n    print(f"{self.name} strikes with a hammer!")`,
              `class Blacksmith(GameCharacter):\n  def __init__(self, skill_level):\n    self.skill_level = skill_level\n  def attack(self):\n    print(f"Strikes with a hammer!")`,
              `class Blacksmith = GameCharacter:\n  skill_level = 0\n  def attack():\n    print("Strikes")`
            ],
            answer: 1,
            explanation: "Option B is the only one that: (1) inherits from GameCharacter using brackets, (2) calls super().__init__(name, health) to set up inherited instance variables, (3) adds skill_level as its own unique attribute, and (4) overrides attack() with a specific Blacksmith message using self.name."
          }
        ],
        brokenCode: {
          heading: "Broken Code Challenge",
          instruction: `<p>The code below has <strong>four deliberate errors</strong>. Copy it into PyCharm, find all four errors, fix them, and run the file until it works correctly.</p>
<p>When it runs without errors, copy your corrected code and submit it to the school LMS as evidence of completion.</p>`,
          code: `class GameCharacter:

    def __init__(self, name, health)
        self.name = name
        self.health = health

    def introduce(self):
        print(f"I am {self.name} and I have {self.health} health points.")


class Warrior(GameCharacter):

    def __init__(self, name, health, armor):
        super().__init__(name)
        self.armor = armor

    def attack(self):
        print(f"{self.name} swings a sword for 25 damage!")

    def block(self):
        print(f"{self.name} raises their shield! Armor: {self.armor}")


warrior = Warrior("Thor", 100, 50)
warrior.introduce
warrior.attack()
warrior.block()`,
          errors: [
            "Line 3: missing colon at end of def __init__(self, name, health)",
            "Line 14: super().__init__(name) is missing health — should be super().__init__(name, health)",
            "Line 22: warrior.introduce is missing brackets — should be warrior.introduce()",
          ],
          hint: "Look carefully at: the end of the def __init__ line in GameCharacter, what super().__init__ is being passed, and how methods are called on instances."
        }
      }
    }

  ]
};

// touched 2026-06-05
