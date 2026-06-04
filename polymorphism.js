// ============================================================
// POLYMORPHISM TUTORIAL — DATA FILE
// Music Instruments: Instrument, Guitar, DrumKit, Piano
// ============================================================

const TUTORIAL = {
  id: "polymorphism",
  title: "OOP Polymorphism",
  subtitle: "Build a band of instruments using parent and child classes",
  pages: [

    // ============================================================
    // PAGE 1 — Introduction (no code)
    // ============================================================
    {
      pageNum: 1,
      title: "What Is Polymorphism?",
      subtitle: "Concepts, analogies, and key terms before we write any code",
      sections: [
        {
          type: "intro",
          heading: "What Is This Tutorial About?",
          content: `<p>In this tutorial you are going to build three musical instruments in Python — a <strong>Guitar</strong>, a <strong>Drum Kit</strong>, and a <strong>Piano</strong> — and use them to understand one of the most powerful ideas in OOP: <strong>polymorphism</strong>.</p>
<p>If you have completed the inheritance tutorial, you already know how child classes inherit from a parent class and can override its methods. Polymorphism builds directly on that idea.</p>`
        },
        {
          type: "analogy",
          heading: "What Does Polymorphism Mean?",
          content: `<p>The word comes from Greek:</p>`,
          highlight: `<strong>poly</strong> = many &nbsp;&nbsp;&nbsp; <strong>morphe</strong> = form &nbsp;&nbsp;&nbsp; → <strong>"many forms"</strong>`,
          content2: `<p>In programming, polymorphism means that <strong>different objects can respond to the same method call in their own way</strong>.</p>`,
          callout: `Think about the word <strong>"play"</strong>. You can play a guitar, play a drum kit, and play a piano. It is the same word — but each instrument does something completely different when you play it. A guitar strums strings. A drum kit is hit with sticks. A piano presses keys. In Python, this is exactly what polymorphism is.`
        },
        {
          type: "analogy",
          heading: "The Band on Stage",
          content: `<p>Imagine a band performing live. The conductor raises their baton and gives one signal: <strong>"Play!"</strong></p>
<p>What happens next?</p>`,
          highlight: `🎸 <strong>Guitarist</strong> — strums their guitar strings<br><br>
🥁 <strong>Drummer</strong> — hits the snare and bass drum<br><br>
🎹 <strong>Pianist</strong> — presses keys on the keyboard`,
          content2: `<p>Every musician received the same instruction — "Play!" — but each responded in a completely different way based on who they are and what instrument they play.</p>`,
          callout: `In Python, we have three objects — a Guitar, a DrumKit, and a Piano. We call <code>play()</code> on each one. Each object has its own version of <code>play()</code>. Python automatically calls the right version for each object. This is polymorphism.`
        },
        {
          type: "info",
          heading: "Why Is This Useful?",
          content: `<p>Here is the really powerful part. Imagine you have a list of instruments and you want to play all of them:</p>`,
          highlight: `band = [Guitar("Fender", 6), DrumKit("Pearl", 5), Piano("Steinway", 88)]\n\nfor instrument in band:\n    instrument.play()`,
          content2: `<p>One loop. One method call. Three completely different results. You do not need to know which instrument you are dealing with — Python finds the right version of <code>play()</code> automatically. Without polymorphism you would need a separate if-statement for every instrument type.</p>`,
          callout: `<strong>The key insight:</strong> polymorphism lets you write code that works on many different types of object at once, as long as they all share the same method name. The objects do the right thing automatically.`
        },
        {
          type: "info",
          heading: "How Polymorphism Connects To Inheritance",
          content: `<p>Polymorphism and inheritance work together. Here is the connection:</p>`,
          highlight: `<strong>Inheritance</strong> — a child class receives methods from its parent class.<br><br>
<strong>Override</strong> — a child class writes its own version of a parent method.<br><br>
<strong>Polymorphism</strong> — different child classes each override the same method in their own way. Calling that method on any object gives you the right result for that object automatically.`,
          callout: `In our tutorial, the parent class <strong>Instrument</strong> defines a <code>play()</code> method. Guitar, DrumKit, and Piano each override it with their own version. When we call <code>play()</code> on any instrument, Python uses polymorphism to find and run the right version automatically.`
        },
        {
          type: "terms",
          heading: "Key Terms",
          terms: [
            { term: "Polymorphism", definition: "The ability to call the same method on different objects, where each object responds in its own way" },
            { term: "Override", definition: "When a child class writes its own version of a method that already exists in the parent class. Python always uses the child's version." },
            { term: "Parent class", definition: "The class being inherited FROM — defines the shared interface (e.g. Instrument)" },
            { term: "Child class", definition: "The class that inherits from the parent and overrides methods with its own behaviour (e.g. Guitar)" },
            { term: "Method", definition: "A function that belongs to a class (e.g. play(), tune())" },
            { term: "Instance", definition: "One specific object created from a class (e.g. one Guitar called 'Fender')" },
            { term: "Interface", definition: "The set of method names that objects share. Polymorphism works because objects share the same method names like play(), even though the code inside each is different." },
            { term: "super()", definition: "Calls the parent class constructor from inside a child class constructor — sets up inherited instance variables without repeating code" }
          ]
        }
      ],
      snapshot: null
    },

    // ============================================================
    // PAGE 2 — Instrument parent class
    // ============================================================
    {
      pageNum: 2,
      title: "The Parent Class",
      subtitle: "Build the Instrument blueprint that all instruments will share",
      sections: [
        {
          type: "terms",
          heading: "New Terms Before The Code",
          terms: [
            { term: "__init__", definition: "The constructor — runs automatically when a new object is created. Sets up the object's starting values." },
            { term: "self", definition: "Refers to the specific object being created right now. self.brand = brand means: store brand inside THIS object." },
            { term: "Instance variable", definition: "A value stored inside a specific instance using self. Each instance keeps its own separate copy." },
            { term: "Default method", definition: "A method in the parent class that child classes can override. If a child does not override it, this version runs instead." }
          ]
        },
        {
          type: "build",
          heading: "Step 1 — Create a new file called band_instruments.py",
          instruction: `<p>Open PyCharm and create a new file called <strong>band_instruments.py</strong>. This is the file you will build on throughout the entire tutorial.</p>
<p>Type or copy the code below. This is the <strong>parent class</strong> — the shared blueprint that all three instruments will inherit from. Every line is explained below the code block.</p>
<p><strong>When you run this code you will see no output. This is correct.</strong> You have defined the Instrument class but not yet created any instruments from it. A class is a blueprint — nothing happens until you build something from it. You will do that in Step 2.</p>`,
          code: `class Instrument:

    def __init__(self, brand, num_parts):
        self.brand = brand          # INSTANCE VARIABLE — this instrument's brand name
        self.num_parts = num_parts  # INSTANCE VARIABLE — number of strings/drums/keys

    def describe(self):
        print(f"{self.brand} instrument with {self.num_parts} parts.")

    def play(self):
        print(f"{self.brand} plays a sound.")  # DEFAULT — child classes will override this

    def tune(self):
        print(f"{self.brand} is being tuned...")`,
          explain: [
            { line: "class Instrument:", explain: "Defines the parent class called Instrument. This is the shared blueprint. Guitar, DrumKit, and Piano will all inherit from this class." },
            { line: "def __init__(self, brand, num_parts):", explain: "The constructor. Python calls this automatically whenever a new Instrument is created. brand and num_parts are the values we pass in." },
            { line: "self.brand = brand", explain: "Creates an instance variable called brand. self refers to the specific object being created. Each instrument object stores its own brand value separately." },
            { line: "def play(self):", explain: "This is the default version of play(). It is a signal to all child classes: you should have a method called play(). Each child class will replace this with their own specific version — that replacement is called overriding, and it is what makes polymorphism work." },
            { line: "def tune(self):", explain: "An inherited method. No child class will override this — they all use this same version automatically." }
          ]
        },
        {
          type: "build",
          heading: "Step 2 — Create an instance and run your code",
          instruction: `<p>Add these lines to the <strong>bottom of your file</strong> — below the class, with no indentation. Then run the file in PyCharm.</p>`,
          expectedOutput: `Yamaha instrument with 4 parts.\nYamaha plays a sound.\nYamaha is being tuned...`,
          code: `# Create one instance of the parent class
generic = Instrument("Yamaha", 4)

generic.describe()  # Yamaha instrument with 4 parts.
generic.play()      # Yamaha plays a sound.
generic.tune()      # Yamaha is being tuned...`,
          explain: [
            { line: "generic = Instrument(\"Yamaha\", 4)", explain: "Creates one instance of Instrument. Python calls __init__ automatically with brand='Yamaha' and num_parts=4." },
            { line: "generic.play()", explain: "Calls the default play() from the parent class. When Guitar, DrumKit, and Piano are added, each will have their own version of play() — the parent version will no longer be used for those child class objects." }
          ]
        }
      ],
      snapshot: `# band_instruments.py — page 2 complete

class Instrument:

    def __init__(self, brand, num_parts):
        self.brand = brand
        self.num_parts = num_parts

    def describe(self):
        print(f"{self.brand} instrument with {self.num_parts} parts.")

    def play(self):
        print(f"{self.brand} plays a sound.")

    def tune(self):
        print(f"{self.brand} is being tuned...")


# --- Instance ---
generic = Instrument("Yamaha", 4)

generic.describe()
generic.play()
generic.tune()`
    },

    // ============================================================
    // PAGE 3 — Guitar child class
    // ============================================================
    {
      pageNum: 3,
      title: "The First Child Class",
      subtitle: "Add Guitar — inherit, override, and extend",
      sections: [
        {
          type: "terms",
          heading: "New Terms Before The Code",
          terms: [
            { term: "Inherit", definition: "When a child class automatically receives all the methods and attributes of its parent class" },
            { term: "Override", definition: "When a child class writes its own version of a method that already exists in the parent. Python uses the child's version." },
            { term: "super()", definition: "Calls the parent class constructor from inside the child constructor. Sets up inherited instance variables without repeating code." },
            { term: "Unique method", definition: "A method that exists only in the child class — not in the parent. Only instances of that child class can call it." }
          ]
        },
        {
          type: "build",
          heading: "Step 3 — Add the Guitar child class",
          instruction: `<p>Add the <strong>Guitar</strong> class to your file, below the Instrument class. Do not delete anything you have already written.</p>
<p>The Guitar Class inherits from the Instrument Class. Notice the bracket after the word Guitar. Inside the bracket is the name of the class it inherits from — Instrument. This also shows that in Python the Guitar class is a child class.</p>
<p><strong>When you run this code your terminal will show exactly this — the Guitar class has been added but the test code still only uses the Instrument instance.</strong></p>`,
          expectedOutput: `Yamaha instrument with 4 parts.\nYamaha plays a sound.\nYamaha is being tuned...`,
          code: `class Guitar(Instrument):    # Guitar is a child class of Instrument

    def __init__(self, brand, num_parts, guitar_type):
        super().__init__(brand, num_parts)  # calls Instrument's __init__
        self.guitar_type = guitar_type      # INSTANCE VARIABLE unique to Guitar

    def play(self):    # OVERRIDE — replaces the parent's play() with a Guitar version
        print(f"{self.brand} {self.guitar_type} guitar strums {self.num_parts} strings — twang! 🎸")

    def bend_string(self):    # UNIQUE METHOD — only Guitars have this
        print(f"{self.brand} bends a string for that blues sound! 🎵")`,
          explain: [
            { line: "class Guitar(Instrument):", explain: "The word Guitar is the name of the new class being defined. Inside the brackets after Guitar is the name Instrument — this tells Python that the Guitar class inherits from the Instrument class. This makes Guitar a child class and Instrument its parent class. Guitar automatically receives everything Instrument has." },
            { line: "super().__init__(brand, num_parts)", explain: "super().__init__(brand, num_parts) calls the Instrument class constructor directly. Instrument's __init__ runs and sets up self.brand and self.num_parts — the Guitar class does not need to repeat those lines." },
            { line: "self.guitar_type = guitar_type", explain: "The unique instance variable that only Guitar has. Instrument and the other child classes do not have guitar_type." },
            { line: "def play(self):", explain: "Guitar writes its own version of play(). Because Instrument already has a play() method, this is called overriding — Guitar replaces the parent's version with its own. When guitar.play() is called, Python uses this version, not Instrument's." },
            { line: "def bend_string(self):", explain: "bend_string() is a unique method that exists only in the Guitar class. It is not inherited from Instrument and it is not in DrumKit or Piano. Only a Guitar object can call this method." }
          ]
        },
        {
          type: "build",
          heading: "Step 4 — Test the Guitar instance",
          instruction: `<p>Replace the test code at the bottom of your file with this updated version. Run it in PyCharm.</p>`,
          expectedOutput: `Yamaha instrument with 4 parts.\nYamaha plays a sound.\n\n--- Guitar ---\nFender instrument with 6 parts.\nFender electric guitar strums 6 strings — twang! 🎸\nFender is being tuned...\nFender bends a string for that blues sound! 🎵`,
          code: `generic = Instrument("Yamaha", 4)
guitar  = Guitar("Fender", 6, "electric")

generic.describe()
generic.play()       # parent's default play()

print("\\n--- Guitar ---")
guitar.describe()    # INHERITED from Instrument — Guitar did not write this
guitar.play()        # OVERRIDE — Guitar's own version runs, not Instrument's
guitar.tune()        # INHERITED from Instrument
guitar.bend_string() # UNIQUE — only Guitar has this`,
          explain: [
            { line: "guitar.describe()", explain: "Guitar does not have its own describe() method — it inherits it from Instrument. Python finds it on the parent class automatically." },
            { line: "guitar.play()", explain: "Guitar DOES have its own play() method — it overrides the parent's version. Python finds Guitar's version first and uses it. This is polymorphism — same method name, different result depending on the object." },
            { line: "guitar.bend_string()", explain: "Only works on guitar. If you tried generic.bend_string() Python would raise an error — Instrument does not have that method." }
          ]
        }
      ],
      snapshot: `# band_instruments.py — page 3 complete

class Instrument:

    def __init__(self, brand, num_parts):
        self.brand = brand
        self.num_parts = num_parts

    def describe(self):
        print(f"{self.brand} instrument with {self.num_parts} parts.")

    def play(self):
        print(f"{self.brand} plays a sound.")

    def tune(self):
        print(f"{self.brand} is being tuned...")


class Guitar(Instrument):

    def __init__(self, brand, num_parts, guitar_type):
        super().__init__(brand, num_parts)
        self.guitar_type = guitar_type

    def play(self):
        print(f"{self.brand} {self.guitar_type} guitar strums {self.num_parts} strings — twang! 🎸")

    def bend_string(self):
        print(f"{self.brand} bends a string for that blues sound! 🎵")


# --- Instances ---
generic = Instrument("Yamaha", 4)
guitar  = Guitar("Fender", 6, "electric")

generic.describe()
generic.play()

print("\\n--- Guitar ---")
guitar.describe()
guitar.play()
guitar.tune()
guitar.bend_string()`
    },

    // ============================================================
    // PAGE 4 — DrumKit and Piano + polymorphism loop
    // ============================================================
    {
      pageNum: 4,
      title: "Polymorphism In Action",
      subtitle: "Add DrumKit and Piano — then see polymorphism work in a loop",
      sections: [
        {
          type: "terms",
          heading: "New Terms Before The Code",
          terms: [
            { term: "Polymorphism", definition: "When the same method call on different objects produces different behaviour. Python automatically calls the right version for each object." },
            { term: "Runtime dispatch", definition: "When Python decides which version of a method to call at the moment the code runs, based on the actual type of the object." }
          ]
        },
        {
          type: "build",
          heading: "Step 5 — Add the DrumKit child class",
          instruction: `<p>Add the <strong>DrumKit</strong> class to your file, below the Guitar class. Do not delete anything you have already written.</p>
<p><strong>When you run this code your terminal will show exactly this — the DrumKit class has been added but the test code does not use it yet.</strong></p>`,
          expectedOutput: `Yamaha instrument with 4 parts.\nYamaha plays a sound.\n\n--- Guitar ---\nFender instrument with 6 parts.\nFender electric guitar strums 6 strings — twang! 🎸\nFender is being tuned...\nFender bends a string for that blues sound! 🎵`,
          code: `class DrumKit(Instrument):    # DrumKit is a child class of Instrument

    def __init__(self, brand, num_parts):
        super().__init__(brand, num_parts)  # calls Instrument's __init__

    def play(self):    # OVERRIDE — replaces the parent's play() with a DrumKit version
        print(f"{self.brand} drum kit thunders with {self.num_parts} drums — boom! 🥁")

    def roll(self):    # UNIQUE METHOD — only DrumKits have this
        print(f"{self.brand} performs a drum roll — ratatat! 🥁🥁🥁")`,
          explain: [
            { line: "class DrumKit(Instrument):", explain: "The same pattern as Guitar. Inside the brackets after DrumKit is the name Instrument — this tells Python that the DrumKit class inherits from the Instrument class. This makes DrumKit a child class and Instrument its parent class." },
            { line: "super().__init__(brand, num_parts)", explain: "Calls the Instrument constructor to set up self.brand and self.num_parts. DrumKit has no unique attributes in its constructor — it only needs the inherited ones." },
            { line: "def play(self):", explain: "DrumKit writes its own version of play() — overriding the parent's default. When drums.play() is called, Python uses this version." },
            { line: "def roll(self):", explain: "roll() is a unique method that exists only in the DrumKit class. Only a DrumKit object can call this method." }
          ]
        },
        {
          type: "build",
          heading: "Step 6 — Add the Piano child class",
          instruction: `<p>Add the <strong>Piano</strong> class to your file, below the DrumKit class. Do not delete anything you have already written.</p>
<p><strong>Run your file after adding this class. Your terminal should show the output below.</strong> The Piano class has been added but the test code does not use it yet — that changes in Step 7.</p>`,
          expectedOutput: `Yamaha instrument with 4 parts.\nYamaha plays a sound.\n\n--- Guitar ---\nFender instrument with 6 parts.\nFender electric guitar strums 6 strings — twang! 🎸\nFender is being tuned...\nFender bends a string for that blues sound! 🎵`,
          code: `class Piano(Instrument):    # Piano is a child class of Instrument

    def __init__(self, brand, num_parts, style):
        super().__init__(brand, num_parts)  # calls Instrument's __init__
        self.style = style                  # INSTANCE VARIABLE unique to Piano

    def play(self):    # OVERRIDE — replaces the parent's play() with a Piano version
        print(f"{self.brand} {self.style} piano rings out {self.num_parts} keys — chime! 🎹")

    def arpeggio(self):    # UNIQUE METHOD — only Pianos have this
        print(f"{self.brand} plays a sweeping arpeggio — cascade of notes! 🎼")`,
          explain: [
            { line: "class Piano(Instrument):", explain: "The same pattern as Guitar and DrumKit. Inside the brackets after Piano is the name Instrument — Piano is a child class and Instrument is its parent class." },
            { line: "self.style = style", explain: "The unique instance variable that only Piano has. style stores whether it is a grand piano, upright piano, and so on. Guitar and DrumKit do not have this." },
            { line: "def arpeggio(self):", explain: "arpeggio() is a unique method that exists only in the Piano class. Only a Piano object can call this method." }
          ]
        },
        {
          type: "build",
          heading: "Step 7 — The polymorphism loop",
          instruction: `<p>Replace the test code at the bottom of your file with this final version. Run it in PyCharm and observe the loop carefully — this is polymorphism in action.</p>`,
          expectedOutput: `--- Individual plays ---\nFender electric guitar strums 6 strings — twang! 🎸\nPearl drum kit thunders with 5 drums — boom! 🥁\nSteinway grand piano rings out 88 keys — chime! 🎹\n\n--- Polymorphism loop ---\nFender electric guitar strums 6 strings — twang! 🎸\nPearl drum kit thunders with 5 drums — boom! 🥁\nSteinway grand piano rings out 88 keys — chime! 🎹\n\n--- Inherited method ---\nFender is being tuned...\nPearl is being tuned...\nSteinway is being tuned...\n\n--- Unique methods ---\nFender bends a string for that blues sound! 🎵\nPearl performs a drum roll — ratatat! 🥁🥁🥁\nSteinway plays a sweeping arpeggio — cascade of notes! 🎼`,
          code: `guitar = Guitar("Fender", 6, "electric")
drums  = DrumKit("Pearl", 5)
piano  = Piano("Steinway", 88, "grand")

print("--- Individual plays ---")
guitar.play()   # Guitar's override
drums.play()    # DrumKit's override
piano.play()    # Piano's override

print("\\n--- Polymorphism loop ---")
band = [guitar, drums, piano]
for instrument in band:
    instrument.play()   # Python calls the RIGHT version for each object automatically

print("\\n--- Inherited method ---")
for instrument in band:
    instrument.tune()   # tune() is inherited from Instrument — no override needed

print("\\n--- Unique methods ---")
guitar.bend_string()
drums.roll()
piano.arpeggio()`,
          explain: [
            { line: "for instrument in band: instrument.play()", explain: "This is polymorphism in action. The loop does not know or care whether each object is a Guitar, DrumKit, or Piano. It just calls play() on whatever is in the list. Python looks at the actual type of each object and calls that class's version of play() automatically. One loop, three completely different results." },
            { line: "for instrument in band: instrument.tune()", explain: "tune() is not overridden by any child class — they all inherit the same version from Instrument. This shows that inherited methods work in the polymorphism loop too." }
          ]
        }
      ],
      snapshot: `# band_instruments.py — page 4 complete

class Instrument:

    def __init__(self, brand, num_parts):
        self.brand = brand
        self.num_parts = num_parts

    def describe(self):
        print(f"{self.brand} instrument with {self.num_parts} parts.")

    def play(self):
        print(f"{self.brand} plays a sound.")

    def tune(self):
        print(f"{self.brand} is being tuned...")


class Guitar(Instrument):

    def __init__(self, brand, num_parts, guitar_type):
        super().__init__(brand, num_parts)
        self.guitar_type = guitar_type

    def play(self):
        print(f"{self.brand} {self.guitar_type} guitar strums {self.num_parts} strings — twang! 🎸")

    def bend_string(self):
        print(f"{self.brand} bends a string for that blues sound! 🎵")


class DrumKit(Instrument):

    def __init__(self, brand, num_parts):
        super().__init__(brand, num_parts)

    def play(self):
        print(f"{self.brand} drum kit thunders with {self.num_parts} drums — boom! 🥁")

    def roll(self):
        print(f"{self.brand} performs a drum roll — ratatat! 🥁🥁🥁")


class Piano(Instrument):

    def __init__(self, brand, num_parts, style):
        super().__init__(brand, num_parts)
        self.style = style

    def play(self):
        print(f"{self.brand} {self.style} piano rings out {self.num_parts} keys — chime! 🎹")

    def arpeggio(self):
        print(f"{self.brand} plays a sweeping arpeggio — cascade of notes! 🎼")


# --- Instances ---
guitar = Guitar("Fender", 6, "electric")
drums  = DrumKit("Pearl", 5)
piano  = Piano("Steinway", 88, "grand")

print("--- Individual plays ---")
guitar.play()
drums.play()
piano.play()

print("\\n--- Polymorphism loop ---")
band = [guitar, drums, piano]
for instrument in band:
    instrument.play()

print("\\n--- Inherited method ---")
for instrument in band:
    instrument.tune()

print("\\n--- Unique methods ---")
guitar.bend_string()
drums.roll()
piano.arpeggio()`
    },

    // ============================================================
    // PAGE 5 — Complete file + download
    // ============================================================
    {
      pageNum: 5,
      title: "Your Complete Program",
      subtitle: "The full working code — download it and try the challenges",
      sections: [
        {
          type: "info",
          heading: "What You Have Built",
          content: `<p>You now have a complete working Python program that demonstrates polymorphism. Here is what each part of the code illustrates:</p>`,
          highlight: `✅ <strong>Instrument</strong> — the parent class. Defines the shared blueprint and the default play() method.<br><br>
✅ <strong>Guitar, DrumKit, Piano</strong> — three child classes. Each inherits from Instrument, overrides play() with its own version, and adds a unique method.<br><br>
✅ <strong>The loop</strong> — one call to play() on each object in the band list. Python automatically uses the right version for each object. This is polymorphism.<br><br>
✅ <strong>tune()</strong> — an inherited method that works on all three child class objects without being overridden. Same method, same result — this shows inheritance working alongside polymorphism.`,
          callout: `The most important line in the whole tutorial is: <code>for instrument in band: instrument.play()</code> — one loop, one method name, three completely different results, all handled automatically by Python.`
        }
      ],
      snapshot: `# band_instruments.py — COMPLETE FILE

class Instrument:

    def __init__(self, brand, num_parts):
        self.brand = brand
        self.num_parts = num_parts

    def describe(self):
        print(f"{self.brand} instrument with {self.num_parts} parts.")

    def play(self):
        print(f"{self.brand} plays a sound.")

    def tune(self):
        print(f"{self.brand} is being tuned...")


class Guitar(Instrument):

    def __init__(self, brand, num_parts, guitar_type):
        super().__init__(brand, num_parts)
        self.guitar_type = guitar_type

    def play(self):
        print(f"{self.brand} {self.guitar_type} guitar strums {self.num_parts} strings — twang! 🎸")

    def bend_string(self):
        print(f"{self.brand} bends a string for that blues sound! 🎵")


class DrumKit(Instrument):

    def __init__(self, brand, num_parts):
        super().__init__(brand, num_parts)

    def play(self):
        print(f"{self.brand} drum kit thunders with {self.num_parts} drums — boom! 🥁")

    def roll(self):
        print(f"{self.brand} performs a drum roll — ratatat! 🥁🥁🥁")


class Piano(Instrument):

    def __init__(self, brand, num_parts, style):
        super().__init__(brand, num_parts)
        self.style = style

    def play(self):
        print(f"{self.brand} {self.style} piano rings out {self.num_parts} keys — chime! 🎹")

    def arpeggio(self):
        print(f"{self.brand} plays a sweeping arpeggio — cascade of notes! 🎼")


# --- Run the complete band ---
guitar = Guitar("Fender", 6, "electric")
drums  = DrumKit("Pearl", 5)
piano  = Piano("Steinway", 88, "grand")

print("--- Individual plays ---")
guitar.play()
drums.play()
piano.play()

print("\\n--- Polymorphism loop ---")
band = [guitar, drums, piano]
for instrument in band:
    instrument.play()

print("\\n--- Inherited method ---")
for instrument in band:
    instrument.tune()

print("\\n--- Unique methods ---")
guitar.bend_string()
drums.roll()
piano.arpeggio()`,
      download: {
        filename: "band_instruments.py",
        challenges: [
          "CHALLENGE 1 — Add a Violin class that inherits from Instrument. Give it a unique attribute called bow_type. Override play() to print a violin-specific sound message. Add a unique method called pizzicato() that plucks the strings. Create a Violin instance and test all its methods.",
          "CHALLENGE 2 — Add your Violin to the band list and run the polymorphism loop again. Does play() work correctly for the Violin without any changes to the loop? Why?",
          "CHALLENGE 3 — Add a describe() method override to Guitar only. Make it print the brand, guitar_type, and num_parts. Run the loop calling describe() on all instruments — observe that Guitar uses its own version and the others use the parent's version.",
          "CHALLENGE 4 — Create two Guitar instances with different brands and types. Add them both to the band list. Run the polymorphism loop — each should produce different output even though they are the same class."
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
            question: `Look at the following code:\n---code---\nclass Instrument:\n    def play(self):\n        print("Some sound")\n\nclass Guitar(Instrument):\n    def play(self):\n        print("Twang!")\n---code---\na) What OOP concept is demonstrated by the play() method in Guitar?\nb) What will be displayed when this code runs:\n---code---\ng = Guitar()\ng.play()\n---code---`,
            options: [
              "a) Inheritance — b) Some sound",
              "a) Overriding — b) Some sound",
              "a) Overriding — b) Twang!",
              "a) Inheritance — b) Twang!"
            ],
            answer: 2,
            explanation: "Guitar writes its own version of play() which already exists in Instrument — this is overriding. When g.play() is called, Python uses Guitar's version because Guitar is the actual class of the object, so it prints 'Twang!'"
          },
          {
            id: "q2",
            type: "mcq",
            difficulty: "Easy-Medium — Understanding",
            question: "In our tutorial, the Guitar, DrumKit, and Piano classes all have their own version of play(). When you call play() on a DrumKit object, which version does Python use?",
            options: [
              "The Instrument parent class version — because Instrument defined play() first",
              "The DrumKit version — because Python looks at the actual class of the object and calls that class's version",
              "All three versions run — Python calls all overrides",
              "Python raises an error — it cannot decide which version to use"
            ],
            answer: 1,
            explanation: "Python looks at the actual class of the object at runtime. The object is a DrumKit, so Python finds and calls DrumKit's version of play(). The parent class version is only used if the child class does not have its own version."
          },
          {
            id: "q3",
            type: "mcq",
            difficulty: "Medium — Application",
            question: "A student writes:\n\nband = [guitar, drums, piano]\nfor instrument in band:\n    instrument.play()\n\nHow does Python know which version of play() to call for each object in the loop?",
            options: [
              "Python checks the variable name (guitar, drums, piano) to figure out the type",
              "Python always calls the parent class Instrument's version of play()",
              "Python looks at the actual class of each object and calls that class's version of play() — this is polymorphism",
              "Python crashes because it cannot tell the difference between the objects"
            ],
            answer: 2,
            explanation: "Python looks at the actual class of each object at runtime — not the variable name. When it sees a Guitar it calls Guitar's play(). When it sees a DrumKit it calls DrumKit's play(). The loop does not need to know which type each object is — Python handles it automatically. This automatic dispatch is polymorphism."
          },
          {
            id: "q4",
            type: "mcq",
            difficulty: "Medium — Understanding",
            question: "The tune() method is defined in Instrument and is NOT overridden by Guitar, DrumKit, or Piano. When you call tune() on a Piano object, what happens?",
            options: [
              "Python raises an error — Piano does not have a tune() method",
              "Python looks up to the Instrument parent class and uses its tune() method",
              "Python creates a new tune() method automatically for Piano",
              "Nothing happens — the call is silently ignored"
            ],
            answer: 1,
            explanation: "When Python cannot find a method on the child class, it automatically looks up to the parent class. tune() is written once in Instrument and all child classes can use it without rewriting it. This is inheritance working alongside polymorphism."
          },
          {
            id: "q5",
            type: "fill",
            difficulty: "Medium — Recall",
            question: "Complete this line. The blank calls the parent class constructor from inside the Guitar child class constructor:\n\ndef __init__(self, brand, num_parts, guitar_type):\n    _______________(brand, num_parts)\n    self.guitar_type = guitar_type",
            answers: ["super().__init__", "super().__init__(brand, num_parts)"],
            placeholder: "Type the missing line...",
            explanation: "super().__init__(brand, num_parts) calls the Instrument class constructor directly. Instrument's __init__ runs and sets up self.brand and self.num_parts — the Guitar class does not need to repeat those lines."
          },
          {
            id: "q6",
            type: "mcq",
            difficulty: "Medium — Reading Code",
            question: `Examine this code:\n---code---\nclass Instrument:\n    def __init__(self, brand, num_parts):\n        self.brand = brand\n        self.num_parts = num_parts\n    def play(self):\n        print(f"{self.brand} plays a sound.")\n    def tune(self):\n        print(f"{self.brand} is being tuned...")\n\nclass Piano(Instrument):\n    def __init__(self, brand, num_parts, style):\n        super().__init__(brand, num_parts)\n        self.style = style\n    def play(self):\n        print(f"{self.brand} {self.style} piano chimes!")\n    def arpeggio(self):\n        print(f"{self.brand} plays an arpeggio!")\n---code---\nWhich of the following is correct?`,
            options: [
              "Instrument is the child class. Piano is the parent class. Piano inherits arpeggio() from Instrument.",
              "Piano is the child class. Instrument is the parent class. Piano inherits tune() from Instrument and overrides play() with its own version.",
              "Piano is the child class. Instrument is the parent class. Piano inherits play() and tune() from Instrument without changing either.",
              "Both classes are independent — Piano does not inherit anything from Instrument."
            ],
            answer: 1,
            explanation: "Piano is the child class — Instrument appears in its brackets. Instrument is the parent class. Piano inherits tune() from Instrument and uses it without changing it. Piano overrides play() with its own version. arpeggio() belongs to Piano only — it is not inherited from Instrument."
          },
          {
            id: "q7",
            type: "mcq",
            difficulty: "Hard — Creation",
            question: "A student wants to add a Violin class. Which option correctly creates a Violin that inherits from Instrument, adds a bow_type attribute, overrides play(), and adds a unique pizzicato() method?",
            options: [
              `class Violin:\n  def __init__(self, brand, num_parts, bow_type):\n    self.bow_type = bow_type\n  def play(self):\n    print(f"Violin sings!")`,
              `class Violin(Instrument):\n  def __init__(self, brand, num_parts, bow_type):\n    super().__init__(brand, num_parts)\n    self.bow_type = bow_type\n  def play(self):\n    print(f"{self.brand} violin sings!")\n  def pizzicato(self):\n    print(f"{self.brand} plucks the strings!")`,
              `class Violin(Instrument):\n  def __init__(self, bow_type):\n    self.bow_type = bow_type\n  def play(self):\n    print(f"Violin sings!")`,
              `class Violin = Instrument:\n  bow_type = "wood"\n  def play():\n    print("Violin sings")`
            ],
            answer: 1,
            explanation: "Option B is the only one that: (1) inherits from Instrument using brackets, (2) calls super().__init__(brand, num_parts) to set up inherited instance variables, (3) adds bow_type as its own unique attribute, (4) overrides play() using self.brand, and (5) includes the unique pizzicato() method."
          }
        ],
        brokenCode: {
          heading: "Broken Code Challenge",
          instruction: `<p>The code below has <strong>four deliberate errors</strong>. Copy it into PyCharm, find all four errors, fix them, and run the file until it works correctly.</p>
<p>When it runs without errors, copy your corrected code and submit it to the school LMS as evidence of completion.</p>`,
          code: `class Instrument:

    def __init__(self, brand, num_parts):
        self.brand = brand
        self.num_parts = num_parts

    def tune(self):
        print(f"{self.brand} is being tuned...")


class Guitar(Instrument):

    def __init__(self, brand, num_parts, guitar_type):
        super().__init__(brand)
        self.guitar_type = guitar_type

    def play(self):
        print(f"{self.brand} {self.guitar_type} guitar strums {self.num_parts} strings!")


class DrumKit(Instrument)

    def __init__(self, brand, num_parts):
        super().__init__(brand, num_parts)

    def play(self):
        print(f"{self.brand} drum kit booms!")


guitar = Guitar("Fender", 6, "electric")
drums  = DrumKit("Pearl", 5)

guitar.play
drums.play()`,
          errors: [
            "Line 14: super().__init__(brand) is missing num_parts — should be super().__init__(brand, num_parts)",
            "Line 21: class DrumKit(Instrument) is missing a colon at the end — should be class DrumKit(Instrument):",
            "Line 30: guitar.play is missing brackets — should be guitar.play()"
          ],
          hint: "Look carefully at: what super().__init__ is being passed in Guitar, the end of the DrumKit class definition line, and how play is being called on the guitar instance."
        }
      }
    }

  ]
};
