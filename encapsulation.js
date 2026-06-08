// ============================================================
// ENCAPSULATION TUTORIAL — DATA FILE
// Basketball Players: BasketballPlayer class
// ============================================================

const TUTORIAL = {
  id: "encapsulation",
  title: "OOP Encapsulation",
  subtitle: "Build a basketball player system using public, protected and private attributes",
  pages: [

    // ============================================================
    // PAGE 1 — Introduction (no code)
    // ============================================================
    {
      pageNum: 1,
      title: "What Is Encapsulation?",
      subtitle: "Concepts, analogies, and key terms before we write any code",
      sections: [
        {
          type: "intro",
          heading: "What Is This Tutorial About?",
          content: `<p>In this tutorial you are going to learn how to use <strong>Object-Oriented Programming (OOP)</strong> in Python to build a basketball player management system.</p>
<p>The key concept we are exploring is <strong>encapsulation</strong>. Before we write a single line of code, let's understand what it means and why it matters.</p>`
        },
        {
          type: "analogy",
          heading: "Think About A Player's Medical Records",
          content: `<p>Imagine a basketball team. Every player has information attached to them — their name, their team, their position, their fitness level, and whether they are injured.</p>
<p>Now think about who should be able to see and change each piece of information:</p>`,
          highlight: `✅ <strong>Name and team</strong> — anyone can see this. It is public information. The commentator announces it, the scoreboard shows it.<br><br>
⚠️ <strong>Position</strong> — the team knows this, but the coach might change tactics and not want it widely known. Handle carefully.<br><br>
🔒 <strong>Fitness level and injury status</strong> — this is private medical data. Only the team doctor and coach should access or change it. If anyone could change a player's fitness score directly, the data could become unreliable or dangerous.`,
          callout: `<strong>Encapsulation</strong> is the idea of controlling access to an object's data. Some data is public — anyone can see or change it. Some data is private — it can only be accessed or changed through specific, controlled methods. This protects the integrity of your data.`
        },
        {
          type: "analogy",
          heading: "The Locker Room Analogy",
          content: `<p>Think of a basketball player's locker room. There are three zones:</p>`,
          highlight: `🟢 <strong>Public zone</strong> — the court and the stands. Anyone can see what happens here. Name and team are like this — open and accessible to all.<br><br>
🟡 <strong>Protected zone</strong> — the team area. Only team members should be here. Position is like this — accessible, but with a convention that says "be careful with this."<br><br>
🔴 <strong>Private zone</strong> — the medical room. Only authorised staff. Fitness and injury data are like this — locked away, only accessible through the doctor (getter) or changed by the doctor (setter).`,
          callout: `In Python, we signal these three levels using underscores. No underscore = public. One underscore = protected. Two underscores = private. You will learn exactly how this works in the code.`
        },
        {
          type: "info",
          heading: "Why Does This Matter?",
          content: `<p>Without encapsulation, any part of your program could directly change a player's fitness to 999 or set their injury status to a string like "maybe". Your data becomes unreliable.</p>
<p>With encapsulation, you write <strong>setters</strong> — special methods that validate the new value before allowing the change. If someone tries to set fitness to 999, the setter rejects it and explains why.</p>`,
          callout: `<strong>Getters</strong> retrieve private data safely. <strong>Setters</strong> update private data with validation. Together they form a controlled interface between the outside world and your private data — this is the core of encapsulation.`
        },
        {
          type: "terms",
          heading: "Key Terms",
          terms: [
            { term: "Encapsulation", definition: "Controlling access to an object's data by marking some attributes as public, protected, or private" },
            { term: "Public attribute", definition: "An attribute with no underscore — anyone can access or change it directly (e.g. self.name)" },
            { term: "Protected attribute", definition: "An attribute with one underscore — a convention that says 'handle carefully, do not change from outside the class unless you have to' (e.g. self._position)" },
            { term: "Private attribute", definition: "An attribute with two underscores — Python hides it from direct outside access (e.g. self.__fitness)" },
            { term: "Getter", definition: "A method that retrieves a private attribute safely (e.g. get_fitness())" },
            { term: "Setter", definition: "A method that updates a private attribute with validation — it checks the new value is acceptable before allowing the change (e.g. set_fitness())" },
            { term: "Validation", definition: "Checking that a value meets certain conditions before accepting it. A setter for fitness might only accept values between 0 and 100." },
            { term: "Name mangling", definition: "What Python does to private attributes — it renames __fitness to _BasketballPlayer__fitness internally, making direct outside access very difficult" },
            { term: "Data integrity", definition: "Keeping your data accurate and reliable. Encapsulation protects data integrity by preventing invalid values being assigned directly." },
            { term: "Interface", definition: "The set of public methods that the outside world uses to interact with an object. Getters and setters form the interface to private data." }
          ]
        },
        {
          type: "checkpoint",
          format: "mcq",
          heading: "Check 1 — What is encapsulation?",
          question: "Which sentence best describes <strong>encapsulation</strong> in Object-Oriented Programming?",
          options: [
            "Hiding the names of every variable in a program so nobody can read them.",
            "Controlling access to an object's data so some parts are public and some are protected or private, with validated methods to change them.",
            "Combining two unrelated classes into one so they share the same data.",
            "Automatically copying every attribute of a parent class into a child class."
          ],
          answer: 1,
          explanation: "Encapsulation controls who can read or change an object's data. Some attributes are public, some are protected, and some are private — and private data is changed only through validated methods (setters). This protects data integrity. The other options describe things that are not encapsulation."
        }
      ],
      snapshot: null
    },

    // ============================================================
    // PAGE 2 — BasketballPlayer with public attributes
    // ============================================================
    {
      pageNum: 2,
      title: "Public Attributes",
      subtitle: "Build the BasketballPlayer class with public data first",
      sections: [
        {
          type: "terms",
          heading: "New Terms Before The Code",
          terms: [
            { term: "class", definition: "The keyword that tells Python you are defining a new class" },
            { term: "__init__", definition: "The constructor — runs automatically when a new object is created. Sets up the object's starting values." },
            { term: "self", definition: "Refers to the specific object being created right now. self.name = name means: store name inside THIS object." },
            { term: "Public attribute", definition: "An attribute with no underscore prefix — freely accessible from anywhere in your program." },
            { term: "Instance", definition: "One specific object created from a class — one actual player built from the BasketballPlayer blueprint." }
          ]
        },
        {
          type: "build",
          heading: "Step 1 — Create a new file called basketball_player.py",
          instruction: `<p>Open PyCharm and create a new file called <strong>basketball_player.py</strong>. This is the file you will build on throughout the entire tutorial.</p>
<p>Type or copy the code below. This is the beginning of our <strong>BasketballPlayer</strong> class. For now, every attribute is <strong>public</strong> — no underscores. Every line is explained below the code block.</p>
<p><strong>When you run this code you will see no output. This is correct.</strong> You have defined the class but not yet created any players from it. A class is a blueprint — nothing happens until you build something from it. You will do that in Step 2.</p>`,
          code: `class BasketballPlayer:

    def __init__(self, name, team):
        self.name = name    # PUBLIC — no underscore, freely accessible
        self.team = team    # PUBLIC — no underscore, freely accessible

    def introduce(self):
        print(f"{self.name} plays for {self.team}.")`,
          explain: [
            { line: "class BasketballPlayer:", explain: "Defines a new class called BasketballPlayer. This is the blueprint every player object will be created from." },
            { line: "def __init__(self, name, team):", explain: "The constructor. Python calls this automatically whenever a new BasketballPlayer is created. name and team are the values we pass in." },
            { line: "self.name = name", explain: "Creates a public instance variable called name. No underscore means public — any code anywhere in your program can read or change this directly." },
            { line: "self.team = team", explain: "Same idea — a public instance variable for the player's team. Each player object stores its own separate team value." },
            { line: "def introduce(self):", explain: "A public method. It uses public data — self.name and self.team — and prints a simple introduction." }
          ]
        },
        {
          type: "build",
          heading: "Step 2 — Create players and run your code",
          instruction: `<p>Add these lines to the <strong>bottom of your file</strong> — below the class, with no indentation. Then run the file in PyCharm.</p>`,
          expectedOutput: `Jamal plays for Sydney Kings.\nMia plays for Melbourne United.\nJamal\nSydney Kings`,
          code: `# Create two player instances
player1 = BasketballPlayer("Jamal", "Sydney Kings")
player2 = BasketballPlayer("Mia", "Melbourne United")

# Call the public method
player1.introduce()    # Jamal plays for Sydney Kings.
player2.introduce()    # Mia plays for Melbourne United.

# Access public attributes directly — this is fine for public data
print(player1.name)    # Jamal
print(player1.team)    # Sydney Kings`,
          explain: [
            { line: "player1 = BasketballPlayer(\"Jamal\", \"Sydney Kings\")", explain: "Creates one instance of BasketballPlayer. Python calls __init__ automatically with name='Jamal' and team='Sydney Kings'." },
            { line: "print(player1.name)", explain: "Because name is a public attribute — no underscore — we can access it directly from outside the class. This is perfectly acceptable for public data." }
          ]
        },
        {
          type: "checkpoint",
          format: "truefalse",
          heading: "Check 2 — Public attributes",
          question: `True or False?\n---code---\nclass Item:\n    def __init__(self, name):\n        self.name = name\n\nthing = Item("box")\nprint(thing.name)\n---code---\nBecause <code>name</code> has NO underscores in front of it, it is a <strong>public</strong> attribute — so code outside the class is allowed to read it directly with <code>thing.name</code>.`,
          options: ["True", "False"],
          answer: 0,
          explanation: "True. No underscore = public. Public attributes can be read and written directly from outside the class. The underscore prefixes (one for protected, two for private) are how Python signals that an attribute should NOT be touched directly from outside."
        }
      ],
      snapshot: `# basketball_player.py — page 2 complete

class BasketballPlayer:

    def __init__(self, name, team):
        self.name = name    # PUBLIC
        self.team = team    # PUBLIC

    def introduce(self):
        print(f"{self.name} plays for {self.team}.")


# --- Players ---
player1 = BasketballPlayer("Jamal", "Sydney Kings")
player2 = BasketballPlayer("Mia", "Melbourne United")

player1.introduce()
player2.introduce()
print(player1.name)
print(player1.team)`
    },

    // ============================================================
    // PAGE 3 — Protected and private attributes
    // ============================================================
    {
      pageNum: 3,
      title: "Protected and Private Attributes",
      subtitle: "Add the underscore system — and see what happens when you break it",
      sections: [
        {
          type: "terms",
          heading: "New Terms Before The Code",
          terms: [
            { term: "Protected attribute", definition: "One underscore prefix (e.g. self._position). A convention — Python does not enforce it, but it signals to other programmers: do not access this directly from outside the class unless necessary." },
            { term: "Private attribute", definition: "Two underscore prefix (e.g. self.__fitness). Python actively hides this using name mangling — trying to access it directly from outside the class will cause an error." },
            { term: "Name mangling", definition: "Python renames self.__fitness to self._BasketballPlayer__fitness internally. This makes accidental direct access from outside the class very difficult." },
            { term: "AttributeError", definition: "The error Python raises when you try to access an attribute that does not exist or is hidden." }
          ]
        },
        {
          type: "info",
          heading: "The Underscore System",
          content: `<p>Python uses underscores to signal how an attribute should be treated. It is important to understand that the single underscore is a <strong>convention</strong> — Python does not enforce it. The double underscore is different — Python actively hides the attribute.</p>`,
          highlight: `self.name = name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong># PUBLIC</strong> — no underscore. Access freely.<br><br>
self._position = position&nbsp;&nbsp;<strong># PROTECTED</strong> — one underscore. Convention: handle carefully.<br><br>
self.__fitness = fitness&nbsp;&nbsp;&nbsp;&nbsp;<strong># PRIVATE</strong> — two underscores. Python hides it.`,
          callout: `The single underscore is like a yellow warning sign — it says "you can access this if you really need to, but you should know what you are doing." The double underscore is like a locked door — Python makes it very hard to access from outside the class.`
        },
        {
          type: "build",
          heading: "Step 3 — Add protected and private attributes",
          instruction: `<p>Update your <strong>__init__</strong> method to add the position, fitness and injured attributes. Replace the existing __init__ with this version — do not delete the introduce() method.</p>`,
          code: `    def __init__(self, name, team, position, fitness, injured):
        self.name = name            # PUBLIC
        self.team = team            # PUBLIC
        self._position = position   # PROTECTED — one underscore
        self.__fitness = fitness    # PRIVATE — two underscores
        self.__injured = injured    # PRIVATE — two underscores`,
          explain: [
            { line: "self._position = position", explain: "One underscore marks this as protected. Python does not stop you accessing it from outside the class, but the underscore is a signal to other programmers: be careful with this, do not change it casually." },
            { line: "self.__fitness = fitness", explain: "Two underscores mark this as private. Python applies name mangling — it renames this to _BasketballPlayer__fitness internally. Trying to access player1.__fitness from outside the class will raise an AttributeError." },
            { line: "self.__injured = injured", explain: "Same as __fitness — private. The injury status of a player is sensitive data. It should only be read or changed through controlled methods — getters and setters — which you will add on the next page." }
          ]
        },
        {
          type: "build",
          heading: "Step 4 — Try accessing private data directly",
          instruction: `<p>Update the test code at the bottom of your file with this version. Run it and observe what happens. This step deliberately shows you what encapsulation prevents.</p>`,
          expectedOutput: `Jamal plays for Sydney Kings.\nMia plays for Melbourne United.\npoint guard\nError: 'BasketballPlayer' object has no attribute '__fitness'`,
          code: `player1 = BasketballPlayer("Jamal", "Sydney Kings", "point guard", 88, False)
player2 = BasketballPlayer("Mia", "Melbourne United", "centre", 55, True)

player1.introduce()
player2.introduce()

# Protected — accessible but handle carefully
print(player1._position)    # point guard — works, but convention says be careful

# Private — this will CRASH
try:
    print(player1.__fitness)
except AttributeError as e:
    print(f"Error: {e}")`,
          explain: [
            { line: "print(player1._position)", explain: "The single underscore is just a convention — Python still lets you access it. It works. But the underscore is a signal: you should not be doing this from outside the class in a well-designed program." },
            { line: "print(player1.__fitness)", explain: "This raises an AttributeError. Python has hidden __fitness using name mangling. The attribute exists but it has been renamed to _BasketballPlayer__fitness internally. Accessing it as __fitness from outside the class does not work — this is encapsulation in action." }
          ],
          note: `The try/except block is just so your code does not completely stop when the error occurs. In a real program you would not try to access private attributes directly at all — you would use getters and setters, which you will add on the next page.`
        },
        {
          type: "checkpoint",
          heading: "Fill in the blank — private attributes",
          question: `Private attributes are a new concept, so let&#39;s check it has stuck. In the constructor below, the blank should declare a <strong>private</strong> attribute called <code>injured</code>. Type the missing line exactly as it would appear in Python.\n---code---\nclass BasketballPlayer:\n    def __init__(self, name, injured):\n        self.name = name\n        ______________ = injured\n---code---`,
          answers: ["self.__injured", "self.__injured = injured"],
          placeholder: "e.g. self.something",
          explanation: "A private attribute uses TWO underscores before the name — self.__injured. Python then applies name mangling so it cannot be accessed directly from outside the class. One underscore would make it protected (convention only); no underscore would make it public."
        }
      ],
      snapshot: `# basketball_player.py — page 3 complete

class BasketballPlayer:

    def __init__(self, name, team, position, fitness, injured):
        self.name = name            # PUBLIC
        self.team = team            # PUBLIC
        self._position = position   # PROTECTED
        self.__fitness = fitness    # PRIVATE
        self.__injured = injured    # PRIVATE

    def introduce(self):
        print(f"{self.name} plays for {self.team}.")


# --- Players ---
player1 = BasketballPlayer("Jamal", "Sydney Kings", "point guard", 88, False)
player2 = BasketballPlayer("Mia", "Melbourne United", "centre", 55, True)

player1.introduce()
player2.introduce()
print(player1._position)

try:
    print(player1.__fitness)
except AttributeError as e:
    print(f"Error: {e}")`
    },

    // ============================================================
    // PAGE 4 — Getters and setters
    // ============================================================
    {
      pageNum: 4,
      title: "Getters and Setters",
      subtitle: "Add controlled access to private data — with validation",
      sections: [
        {
          type: "terms",
          heading: "New Terms Before The Code",
          terms: [
            { term: "Getter", definition: "A method that retrieves the value of a private attribute. It gives controlled read access to hidden data." },
            { term: "Setter", definition: "A method that updates the value of a private attribute after checking the new value is valid." },
            { term: "Validation", definition: "Checking that a value meets certain rules before accepting it. A fitness setter might only accept integers between 0 and 100." },
            { term: "isinstance()", definition: "A Python built-in function that checks whether a value is of a particular type. isinstance(True, bool) returns True." }
          ]
        },
        {
          type: "info",
          heading: "Why Getters and Setters?",
          content: `<p>On the previous page you saw that accessing <code>player1.__fitness</code> directly raises an error. So how do we read or update private data?</p>
<p>The answer is getters and setters. These are methods inside the class that have permission to access the private attributes. The outside world calls these methods instead of touching the private data directly.</p>`,
          callout: `A getter says: "here is a safe copy of the private data." A setter says: "I will check your new value first — if it passes, I will update the private data. If it fails, I will reject it and explain why." This is how encapsulation protects data integrity.`
        },
        {
          type: "build",
          heading: "Step 5 — Add getters and setters for fitness",
          instruction: `<p>Add these four methods to your <strong>BasketballPlayer</strong> class. Type them inside the class, below the introduce() method — make sure they are indented correctly.</p>`,
          code: `    # GETTER — retrieves private __fitness safely
    def get_fitness(self):
        return self.__fitness

    # SETTER — updates private __fitness with validation
    def set_fitness(self, value):
        if 0 <= value <= 100:
            self.__fitness = value
            print(f"Fitness updated to {value}.")
        else:
            print("Invalid. Fitness must be 0 to 100.")`,
          explain: [
            { line: "def get_fitness(self):", explain: "The getter. It is inside the class so it has permission to access self.__fitness directly. It returns the value so the caller can use it." },
            { line: "def set_fitness(self, value):", explain: "The setter. It receives a new value and checks it before applying the change." },
            { line: "if 0 <= value <= 100:", explain: "Validation. The setter only allows values between 0 and 100 inclusive. This is the protection encapsulation provides — invalid data cannot get through." },
            { line: "self.__fitness = value", explain: "Only reached if the validation passes. Inside the class, private attributes are accessed using self.__fitness — this works because we are inside the class." },
            { line: "print(\"Invalid. Fitness must be 0 to 100.\")", explain: "The else branch — runs if the value fails validation. The setter rejects the change and explains why. The private attribute is not updated." }
          ]
        },
        {
          type: "build",
          heading: "Step 6 — Add getters and setters for injury status",
          instruction: `<p>Add these two methods to your class as well, below the fitness getter and setter.</p>`,
          code: `    # GETTER — retrieves private __injured, returns readable string
    def get_injury_status(self):
        return "Injured" if self.__injured else "Fit"

    # SETTER — updates private __injured with validation
    def set_injury_status(self, status):
        if isinstance(status, bool):
            self.__injured = status
            print(f"Injury status updated to: {'Injured' if status else 'Fit'}")
        else:
            print("Invalid. Status must be True or False.")`,
          explain: [
            { line: "return \"Injured\" if self.__injured else \"Fit\"", explain: "The getter does not just return the raw True/False value — it converts it to a readable string. This is another benefit of encapsulation: you control what the outside world sees, not just whether they can see it." },
            { line: "if isinstance(status, bool):", explain: "isinstance() checks that status is actually a boolean — True or False. This prevents someone setting the injury status to a string like 'yes' or a number like 1." }
          ]
        },
        {
          type: "build",
          heading: "Step 7 — Test the getters and setters",
          instruction: `<p>Replace the test code at the bottom of your file with this version. Run it in PyCharm.</p>`,
          expectedOutput: `Jamal plays for Sydney Kings.\nMia plays for Melbourne United.\n\n--- Reading private data via getters ---\n88\nFit\n55\nInjured\n\n--- Updating via setters ---\nFitness updated to 80.\nInjury status updated to: Fit\n\n--- Validation blocking bad data ---\nInvalid. Fitness must be 0 to 100.\nInvalid. Status must be True or False.`,
          code: `player1 = BasketballPlayer("Jamal", "Sydney Kings", "point guard", 88, False)
player2 = BasketballPlayer("Mia", "Melbourne United", "centre", 55, True)

player1.introduce()
player2.introduce()

print("\\n--- Reading private data via getters ---")
print(player1.get_fitness())           # 88
print(player1.get_injury_status())     # Fit
print(player2.get_fitness())           # 55
print(player2.get_injury_status())     # Injured

print("\\n--- Updating via setters ---")
player2.set_fitness(80)                # Fitness updated to 80.
player2.set_injury_status(False)       # Injury status updated to: Fit

print("\\n--- Validation blocking bad data ---")
player1.set_fitness(999)               # Invalid. Fitness must be 0 to 100.
player1.set_injury_status("yes")       # Invalid. Status must be True or False.`,
          explain: [
            { line: "print(player1.get_fitness())", explain: "We call the getter method to read the private data. We do not access player1.__fitness directly — we go through the controlled interface." },
            { line: "player1.set_fitness(999)", explain: "The setter receives 999, checks if 0 <= 999 <= 100 — it is not — so it runs the else branch and prints the rejection message. The private __fitness value is not changed." }
          ]
        },
        {
          type: "checkpoint",
          format: "multi",
          heading: "Check 4 — Getters and setters",
          question: `Look at these two methods inside a class:\n---code---\ndef get_score(self):\n    return self.__score\n\ndef set_score(self, value):\n    if 0 <= value <= 100:\n        self.__score = value\n    else:\n        print("Invalid score.")\n---code---\nTick BOTH correct statements — one about the <strong>getter</strong> and one about the <strong>setter</strong>. You must select both to be right.`,
          options: [
            "get_score() is the setter — it changes the value of __score.",
            "get_score() is the getter — it returns the value of __score without changing it.",
            "set_score() is the setter — it validates the new value and updates __score only if the value is acceptable.",
            "set_score() is the getter — it reads __score and prints it to the screen."
          ],
          answers: [1, 2],
          explanation: "A GETTER (like get_score) reads a private attribute and returns it without changing it. A SETTER (like set_score) updates a private attribute, but only after validating the new value — if validation fails, the change is rejected. Together they form a controlled interface to private data."
        }
      ],
      snapshot: `# basketball_player.py — page 4 complete

class BasketballPlayer:

    def __init__(self, name, team, position, fitness, injured):
        self.name = name            # PUBLIC
        self.team = team            # PUBLIC
        self._position = position   # PROTECTED
        self.__fitness = fitness    # PRIVATE
        self.__injured = injured    # PRIVATE

    def introduce(self):
        print(f"{self.name} plays for {self.team}.")

    def get_fitness(self):
        return self.__fitness

    def set_fitness(self, value):
        if 0 <= value <= 100:
            self.__fitness = value
            print(f"Fitness updated to {value}.")
        else:
            print("Invalid. Fitness must be 0 to 100.")

    def get_injury_status(self):
        return "Injured" if self.__injured else "Fit"

    def set_injury_status(self, status):
        if isinstance(status, bool):
            self.__injured = status
            print(f"Injury status updated to: {'Injured' if status else 'Fit'}")
        else:
            print("Invalid. Status must be True or False.")


# --- Players ---
player1 = BasketballPlayer("Jamal", "Sydney Kings", "point guard", 88, False)
player2 = BasketballPlayer("Mia", "Melbourne United", "centre", 55, True)

player1.introduce()
player2.introduce()

print("\\n--- Reading private data via getters ---")
print(player1.get_fitness())
print(player1.get_injury_status())
print(player2.get_fitness())
print(player2.get_injury_status())

print("\\n--- Updating via setters ---")
player2.set_fitness(80)
player2.set_injury_status(False)

print("\\n--- Validation blocking bad data ---")
player1.set_fitness(999)
player1.set_injury_status("yes")`
    },

    // ============================================================
    // PAGE 5 — is_available() + complete file + download
    // ============================================================
    {
      pageNum: 5,
      title: "Putting It All Together",
      subtitle: "Add the final method and complete your working program",
      sections: [
        {
          type: "terms",
          heading: "New Terms Before The Code",
          terms: [
            { term: "Encapsulated logic", definition: "When a method uses private data internally to produce a result, without exposing the raw private values. The caller gets a useful answer without seeing the hidden data." },
            { term: "Data integrity", definition: "Keeping data accurate and reliable. The is_available() method cannot be fooled — it reads from the validated private attributes, so the answer is always trustworthy." }
          ]
        },
        {
          type: "info",
          heading: "Using Private Data Inside The Class",
          content: `<p>So far the getters and setters have been the only methods accessing the private attributes. But any method inside the class can access private data directly using <code>self.__fitness</code> and <code>self.__injured</code>.</p>
<p>The <code>is_available()</code> method is a good example. It needs to check both private attributes to decide whether a player can play — but it does not expose either value directly. The caller just gets a clear yes or no answer.</p>`,
          callout: `This is encapsulation working at its best. Private data stays hidden. The outside world gets a clean, reliable result. The logic for determining availability lives in one place — inside the class — and cannot be bypassed.`
        },
        {
          type: "build",
          heading: "Step 8 — Add the is_available() method",
          instruction: `<p>Add this method to your class below the setter for injury status. This is the final method to add.</p>`,
          code: `    def is_available(self):
        if not self.__injured and self.__fitness >= 70:
            print(f"{self.name} is available to play.")
        else:
            print(f"{self.name} is NOT available.")`,
          explain: [
            { line: "if not self.__injured and self.__fitness >= 70:", explain: "This method accesses both private attributes directly — self.__injured and self.__fitness. This is allowed because is_available() is inside the class. Outside code cannot replicate this logic without going through the getter methods." },
            { line: "print(f\"{self.name} is available to play.\")", explain: "The result is a clean printed message. The caller never sees the raw fitness number or the raw True/False injury status — only the conclusion. This is encapsulation protecting the data while still being useful." }
          ]
        },
        {
          type: "build",
          heading: "Step 9 — Run the complete program",
          instruction: `<p>Replace the test code at the bottom of your file with this final version. Run it in PyCharm.</p>`,
          expectedOutput: `Jamal plays for Sydney Kings.\nMia plays for Melbourne United.\n\n--- Public access ---\nJamal\nMelbourne United\n\n--- Protected access ---\npoint guard\n\n--- Private via getters ---\n88\nFit\n55\nInjured\n\n--- Availability check ---\nJamal is available to play.\nMia is NOT available.\n\n--- Updating with setters ---\nFitness updated to 80.\nInjury status updated to: Fit\nMia is available to play.\n\n--- Validation blocking bad data ---\nInvalid. Fitness must be 0 to 100.\nInvalid. Status must be True or False.`,
          code: `player1 = BasketballPlayer("Jamal", "Sydney Kings", "point guard", 88, False)
player2 = BasketballPlayer("Mia", "Melbourne United", "centre", 55, True)

player1.introduce()
player2.introduce()

print("\\n--- Public access ---")
print(player1.name)          # Jamal
print(player2.team)          # Melbourne United

print("\\n--- Protected access ---")
print(player1._position)     # point guard

print("\\n--- Private via getters ---")
print(player1.get_fitness())           # 88
print(player1.get_injury_status())     # Fit
print(player2.get_fitness())           # 55
print(player2.get_injury_status())     # Injured

print("\\n--- Availability check ---")
player1.is_available()       # Jamal is available to play.
player2.is_available()       # Mia is NOT available.

print("\\n--- Updating with setters ---")
player2.set_fitness(80)
player2.set_injury_status(False)
player2.is_available()       # Mia is available to play.

print("\\n--- Validation blocking bad data ---")
player1.set_fitness(999)
player1.set_injury_status("yes")`,
          explain: [
            { line: "player2.set_fitness(80)", explain: "The setter validates 80 — it is between 0 and 100 — so it updates the private attribute and prints confirmation." },
            { line: "player2.is_available()", explain: "Called again after updating Mia's fitness and injury status. Now both conditions pass — not injured and fitness >= 70 — so she is available. The same method gives a different result because the private data changed through the validated setter." }
          ]
        },
        {
          type: "checkpoint",
          format: "multi",
          heading: "Check 5 — Truths about encapsulation",
          question: "Which of the following are <strong>true</strong> about encapsulation? Tick ALL that apply — you must select the three correct statements (and avoid the one that is false) to be right.",
          options: [
            "Encapsulation protects data integrity by forcing changes to private attributes to go through validated setters.",
            "A method inside the class is allowed to access private attributes directly using self.__attribute.",
            "Encapsulation deletes private attributes whenever they are read from outside the class.",
            "Encapsulation lets you change how private data is stored later, without breaking code that uses the public getters and setters."
          ],
          answers: [0, 1, 3],
          explanation: "Setters validate before changing private data, protecting integrity (A). Methods INSIDE the class can read private attributes directly with self.__x (B). Encapsulation also makes refactoring safer — the internal storage can change without breaking outside code that uses the getters/setters (D). C is false: encapsulation never deletes attributes — it just controls who can change them and how."
        }
      ],
      snapshot: `# basketball_player.py — COMPLETE FILE

class BasketballPlayer:

    def __init__(self, name, team, position, fitness, injured):
        self.name = name            # PUBLIC
        self.team = team            # PUBLIC
        self._position = position   # PROTECTED
        self.__fitness = fitness    # PRIVATE
        self.__injured = injured    # PRIVATE

    def introduce(self):
        print(f"{self.name} plays for {self.team}.")

    def is_available(self):
        if not self.__injured and self.__fitness >= 70:
            print(f"{self.name} is available to play.")
        else:
            print(f"{self.name} is NOT available.")

    def get_fitness(self):
        return self.__fitness

    def set_fitness(self, value):
        if 0 <= value <= 100:
            self.__fitness = value
            print(f"Fitness updated to {value}.")
        else:
            print("Invalid. Fitness must be 0 to 100.")

    def get_injury_status(self):
        return "Injured" if self.__injured else "Fit"

    def set_injury_status(self, status):
        if isinstance(status, bool):
            self.__injured = status
            print(f"Injury status updated to: {'Injured' if status else 'Fit'}")
        else:
            print("Invalid. Status must be True or False.")


# --- Run the complete program ---
player1 = BasketballPlayer("Jamal", "Sydney Kings", "point guard", 88, False)
player2 = BasketballPlayer("Mia", "Melbourne United", "centre", 55, True)

player1.introduce()
player2.introduce()

print("\\n--- Public access ---")
print(player1.name)
print(player2.team)

print("\\n--- Protected access ---")
print(player1._position)

print("\\n--- Private via getters ---")
print(player1.get_fitness())
print(player1.get_injury_status())
print(player2.get_fitness())
print(player2.get_injury_status())

print("\\n--- Availability check ---")
player1.is_available()
player2.is_available()

print("\\n--- Updating with setters ---")
player2.set_fitness(80)
player2.set_injury_status(False)
player2.is_available()

print("\\n--- Validation blocking bad data ---")
player1.set_fitness(999)
player1.set_injury_status("yes")`,
      download: {
        filename: "basketball_player.py",
        challenges: [
          "CHALLENGE 1 — Add a private attribute called __jersey_number. Write a getter called get_jersey() that returns it. Write a setter called set_jersey() that only accepts integers between 0 and 99. Test it by creating a player, getting the number, and trying an invalid value.",
          "CHALLENGE 2 — Add a public method called scout_report() that prints a full summary of the player — name, team, position, fitness level, and availability. It must use getters to access the private data. Do not access __ attributes directly.",
          "CHALLENGE 3 — Create two players from different NBL teams (e.g. Brisbane Bullets, Perth Wildcats). Set one as injured with low fitness, one as fit with high fitness. Call is_available() on both. Then use setters to make the injured player available and check again.",
          "CHALLENGE 4 — Explore name mangling. Create a player called player_test. Try to print player_test.__fitness — what happens? Then try to print player_test._BasketballPlayer__fitness — what happens? Write comments in your code explaining what you found."
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
            question: `Look at the following code:\n---code---\nclass BasketballPlayer:\n    def __init__(self, name, team, fitness):\n        self.name = name\n        self.team = team\n        self.__fitness = fitness\n\n    def get_fitness(self):\n        return self.__fitness\n---code---\na) What type of attribute is __fitness?\nb) How would you correctly read the fitness of a player called p1?`,
            options: [
              "a) Public — b) print(p1.__fitness)",
              "a) Protected — b) print(p1._fitness)",
              "a) Private — b) print(p1.get_fitness())",
              "a) Private — b) print(p1.__fitness)"
            ],
            answer: 2,
            explanation: "__fitness has two underscores so it is a private attribute. Accessing p1.__fitness directly from outside the class will raise an AttributeError because of name mangling. The correct way is to call the getter method — p1.get_fitness()."
          },
          {
            id: "q2",
            type: "mcq",
            difficulty: "Easy-Medium — Understanding",
            question: "Which of the following correctly describes the purpose of a setter method?",
            options: [
              "A setter retrieves a private attribute and returns it to the caller",
              "A setter updates a private attribute after checking the new value is valid",
              "A setter deletes a private attribute when it is no longer needed",
              "A setter makes a private attribute public so it can be accessed directly"
            ],
            answer: 1,
            explanation: "A setter updates a private attribute — but only after validating the new value. If the value does not meet the rules, the setter rejects it. A getter retrieves the value. Setters do not delete attributes or make them public."
          },
          {
            id: "q3",
            type: "mcq",
            difficulty: "Medium — Application",
            question: "A player's fitness setter only accepts values between 0 and 100. A student calls:\n\nplayer1.set_fitness(150)\n\nWhat happens?",
            options: [
              "The private __fitness attribute is updated to 150",
              "Python raises an AttributeError because 150 is invalid",
              "The setter runs the else branch — prints a rejection message and does not update __fitness",
              "The setter automatically corrects 150 to 100"
            ],
            answer: 2,
            explanation: "The validation check 0 <= 150 <= 100 is False, so the else branch runs — it prints the rejection message. The private __fitness attribute is not updated. The setter does not crash, does not auto-correct, and does not silently accept the bad value."
          },
          {
            id: "q4",
            type: "mcq",
            difficulty: "Medium — Understanding",
            question: "A student writes print(player1._position) outside the class. _position has a single underscore. What happens?",
            options: [
              "Python raises an AttributeError — single underscore attributes cannot be accessed outside the class",
              "Python prints the position — single underscore is a convention, not enforced by Python",
              "Python prints a warning then shows the value",
              "Python automatically converts _position to a public attribute"
            ],
            answer: 1,
            explanation: "The single underscore is a convention — Python does not technically prevent access. The code works and prints the value. However the underscore is a signal to other programmers: handle carefully, do not change this from outside the class in a well-designed program."
          },
          {
            id: "q5",
            type: "fill",
            difficulty: "Medium — Recall",
            question: `Complete this line. The blank declares a private attribute called fitness inside a constructor:\n---code---\ndef __init__(self, name, fitness):\n    self.name = name\n    _______________ = fitness\n---code---`,
            answers: ["self.__fitness", "self.__fitness "],
            placeholder: "Type the private attribute declaration...",
            explanation: "self.__fitness = fitness declares a private instance variable. Two underscores before the name tells Python to apply name mangling — hiding the attribute from direct outside access."
          },
          {
            id: "q6",
            type: "mcq",
            difficulty: "Medium — Reading Code",
            question: `Examine this code:\n---code---\nclass BasketballPlayer:\n    def __init__(self, name, fitness, injured):\n        self.name = name\n        self.__fitness = fitness\n        self.__injured = injured\n\n    def is_available(self):\n        if not self.__injured and self.__fitness >= 70:\n            print(f"{self.name} is available.")\n        else:\n            print(f"{self.name} is NOT available.")\n---code---\nWhich of the following is correct?`,
            options: [
              "name is private. __fitness and __injured are public. is_available() accesses public data.",
              "name is public. __fitness and __injured are private. is_available() accesses private data from inside the class — this is allowed.",
              "name is public. __fitness and __injured are private. is_available() cannot access private data — it will raise an error.",
              "All three attributes are private because they are inside __init__."
            ],
            answer: 1,
            explanation: "name has no underscore so it is public. __fitness and __injured have two underscores so they are private. is_available() is a method inside the class — it has full permission to access the private attributes using self.__fitness and self.__injured. Only outside code is restricted."
          },
          {
            id: "q7",
            type: "mcq",
            difficulty: "Hard — Creation",
            question: "A student wants to add a private __jersey_number attribute to BasketballPlayer with a getter and a setter that only accepts values between 0 and 99. Which option is correct?",
            options: [
              `self.jersey_number = jersey_number\ndef get_jersey():\n    return jersey_number\ndef set_jersey(self, value):\n    if 0 <= value <= 99:\n        self.jersey_number = value`,
              `self.__jersey_number = jersey_number\ndef get_jersey(self):\n    return self.__jersey_number\ndef set_jersey(self, value):\n    if 0 <= value <= 99:\n        self.__jersey_number = value\n    else:\n        print("Invalid. Must be 0 to 99.")`,
              `self.__jersey_number = jersey_number\ndef get_jersey(self):\n    return self.jersey_number\ndef set_jersey(self, value):\n    self.__jersey_number = value`,
              `self._jersey_number = jersey_number\ndef get_jersey(self):\n    return self.__jersey_number\ndef set_jersey(self, value):\n    if 0 <= value <= 99:\n        self._jersey_number = value`
            ],
            answer: 1,
            explanation: "Option B is the only one that: (1) declares the attribute as private with two underscores, (2) includes self in both the getter and setter, (3) uses self.__jersey_number consistently in all three places, and (4) includes validation in the setter with an else branch that rejects invalid values."
          }
        ],
        brokenCode: {
          heading: "Broken Code Challenge",
          instruction: `<p>The code below has <strong>four deliberate errors</strong>. Copy it into PyCharm, find all four, fix them, and run the file until it works correctly.</p>
<p>Three of the errors stop the program from running at all. The fourth lets it run but breaks the rules of encapsulation. Fix all four.</p>`,
          code: `class BasketballPlayer:

    def __init__(self, name, team, fitness):
        self.name = name
        self.team = team
        self._fitness = fitness

    def get_fitness(self)
        return self.__fitness

    def set_fitness(self, value):
        if 0 <= value <= 100:
            self.__fitness = value
            print(f"Fitness updated to {value}.")
        else
            print("Invalid. Fitness must be 0 to 100.")


player1 = BasketballPlayer("Jamal", "Sydney Kings", 88)
print(player1.get_fitness())
player1.set_fitness(95)
player1.set_fitness(200)
print(player1.__fitness)`,
          errors: [
            "Line 6: self._fitness = fitness uses ONE underscore, but the getter and setter both use self.__fitness (two underscores). The names must match — change it to self.__fitness so the whole class agrees the attribute is private.",
            "Line 8: def get_fitness(self) is missing the colon at the end. Every method definition must end with a colon — change it to def get_fitness(self):",
            "Line 15: the else is missing its colon. Every else needs a colon, just like if — change it to else:",
            "Line 23: print(player1.__fitness) tries to read a private attribute directly from outside the class. That breaks encapsulation and raises an AttributeError. Use the getter instead: print(player1.get_fitness())"
          ],
          expectedOutput: `88\nFitness updated to 95.\nInvalid. Fitness must be 0 to 100.\n95`,
          hint: "There are two missing colons (one on a def line, one on an else line), one attribute whose underscores do not match between __init__ and the getter/setter, and one line that reaches past the class to read private data directly. Fix all four, then run the file and read the lines it prints."
        }
      }
    }

  ]
};

// touched 2026-06-07
