const GLOSSARY = {
  class: {
    term: "Class",
    definition: "A blueprint or template that defines what data an object holds and what actions it can perform. A class is not the thing itself — it is the plan for making the thing.",
    analogy: "A class is like an architect's blueprint. The blueprint describes the house in detail, but you cannot live in a blueprint. You need to build an actual house from it first.",
    tutorial: 2, step: 2
  },
  constructor: {
    term: "Constructor",
    definition: "A special method that runs automatically when an object is created from a class. It sets up the object's starting state by giving its attributes their initial values.",
    analogy: "The constructor is the moment the house is actually built from the blueprint — the point where the plan becomes a real, physical object.",
    tutorial: 2, step: 3
  },
  self: {
    term: "Self",
    definition: "A reference that an object uses to refer to itself. When a method uses 'self', it means 'the specific object this method belongs to right now'.",
    analogy: "Imagine you are filling out a form and it asks for 'your name'. The word 'your' refers to whoever is filling it in — not someone else. 'self' works the same way inside a class.",
    tutorial: 2, step: 3
  },
  variable: {
    term: "Variable",
    definition: "A named storage location that holds a value. You give it a name so you can refer to that value later in your code.",
    analogy: "A variable is like a labelled box. You write a name on the outside and store something inside. Whenever you need it, you look for the box with that label.",
    tutorial: 2, step: 4
  },
  attribute: {
    term: "Attribute",
    definition: "A variable that belongs to a specific object. Attributes store the data that describes an object — what it knows about itself.",
    analogy: "If a variable is any labelled box, an attribute is a labelled box that belongs inside one particular house. It is part of that house specifically, not floating around on its own.",
    tutorial: 2, step: 4
  },
  object: {
    term: "Object",
    definition: "A specific thing created from a class. An object has all the attributes and methods defined in its class, filled in with real values.",
    analogy: "The object is the actual house built from the blueprint. It is real, it exists, and you can interact with it directly.",
    tutorial: 2, step: 3
  },
  instance: {
    term: "Instance",
    definition: "One specific object created from a class. Many instances can be made from the same class, each with their own separate data.",
    analogy: "If a class is a blueprint and an object is a house, then an instance is one particular house. Your neighbour may have built from the same blueprint, but their house is a separate instance — different address, different furniture.",
    tutorial: 2, step: 3
  },
  method: {
    term: "Method",
    definition: "A function that belongs to a class. Methods define what an object can do — the actions it can perform or the information it can provide.",
    analogy: "If a class is a remote control, a method is one of the buttons. Each button does something specific, and you press it when you want that action to happen.",
    tutorial: 3, step: 2
  },
  encapsulation: {
    term: "Encapsulation",
    definition: "The practice of keeping an object's data and the methods that work with that data bundled together inside the class, and controlling how outside code can access or change that data.",
    analogy: "A capsule tablet contains medicine sealed inside a casing. You take the capsule — you do not pour the medicine out and handle it separately. The casing controls how the medicine is delivered. Encapsulation does the same for data.",
    tutorial: 4, step: 3
  },
  inheritance: {
    term: "Inheritance",
    definition: "A way to create a new class based on an existing one. The new class automatically gets all the attributes and methods of the parent class, and can add its own on top.",
    analogy: "A child inherits traits from their parents — eye colour, height tendencies, family name. But the child is also their own person with their own personality and skills. Inheritance in code works the same way.",
    tutorial: 5, step: 3
  },
  polymorphism: {
    term: "Polymorphism",
    definition: "The ability for different classes to respond to the same method name in their own way. You call the same method on different objects and each one does the right thing for its type.",
    analogy: "'Tidy your room' means something different in every household. One family means vacuum and dust. Another means shove things under the bed. Same instruction, different behaviour depending on who receives it.",
    tutorial: 6, step: 2
  },
  abstraction: {
    term: "Abstraction",
    definition: "Hiding the complex inner workings of a class behind a simple, clean interface. The user of the class only needs to know what it does, not how it does it.",
    analogy: "You press a button on a TV remote and the channel changes. You do not need to understand the infrared signal encoding or the circuit board inside. The remote abstracts all of that away.",
    tutorial: 6, step: 4
  }
};

const TUTORIALS = [
  {
    id: 1,
    title: "What is OOP?",
    subtitle: "Purpose, history, the four pillars, and every term you will learn",
    icon: "ti-bulb",
    color: "teal",
    steps: [
      {
        title: "Programming has always needed better organisation",
        terms: [],
        content: `
<p>Before we write a single line of Python, it is worth asking a genuine question: <em>why does Object-Oriented Programming exist at all?</em> Every major programming concept was invented to solve a real problem. Understanding the problem makes the solution feel obvious — and obvious solutions are much easier to remember.</p>
<p>In the earliest days of programming, code was written as a long sequence of instructions, executed one after another. This is called <strong>procedural programming</strong> — the program is a procedure, a recipe, a list of steps. For small programs, this works perfectly well.</p>
<p>But as programs grew larger — spanning thousands, then tens of thousands of lines — something broke down. The code became tangled. Changing one part would unexpectedly break something else entirely. Understanding what a program did required reading every single line of it. Adding new features became dangerous, because you could never be sure what you might accidentally disturb.</p>
<p>Programmers needed a better way to organise code. Not just how to write individual instructions, but how to structure an entire program so it remained understandable, maintainable, and extendable as it grew.</p>
<p>Object-Oriented Programming was the answer that emerged. It did not replace procedural thinking — it gave programmers a higher-level way to organise their procedural code into meaningful, self-contained units.</p>`,
        code: null,
        codeExplain: null
      },
      {
        title: "What is a programming paradigm?",
        terms: [],
        content: `
<p>OOP is described as a <strong>programming paradigm</strong> — a word that simply means a style or way of thinking about how to write programs.</p>
<p>Think of a paradigm as a lens. Two photographers standing in the same place can take completely different pictures depending on the lens they choose. The scene in front of them is identical — but what they focus on, and how they frame it, produces very different results.</p>
<p>Programming paradigms work the same way. The problem you are solving does not change. But the paradigm you choose shapes how you think about it, how you structure your solution, and what tools you reach for.</p>
<p>There are several major paradigms in programming:</p>
<ul>
  <li><strong>Procedural</strong> — the program is a sequence of instructions, like a recipe. Each step follows the last.</li>
  <li><strong>Functional</strong> — the program is built from functions that transform data, avoiding shared state.</li>
  <li><strong>Object-Oriented</strong> — the program is built from objects: self-contained units that combine data and behaviour.</li>
</ul>
<p>Python supports all three. In this tutorial series, you are learning the Object-Oriented paradigm — the most widely used in professional software development today.</p>`,
        code: null,
        codeExplain: null
      },
      {
        title: "The core idea: things, not steps",
        terms: [],
        content: `
<p>The central insight of OOP is deceptively simple: <em>the real world is made of things, not steps.</em></p>
<p>When you think about your school day, you do not think in procedures. You think in things: a student, a class, a timetable, an assignment, a teacher. Each of those things has properties it holds — a timetable has days and times — and things it can do — a timetable can display itself or add a new class.</p>
<p>Procedural programming makes you model your problem as a sequence of steps. OOP makes you model it as a collection of <em>things that interact with each other</em>. For most real-world problems, the second approach is far more natural.</p>
<p>Consider the Student Study Aid you are going to build in these tutorials. You need to track:</p>
<ul>
  <li>A <strong>Student</strong> — who has a name, a year level, and a list of subjects</li>
  <li>A <strong>SchoolTimetable</strong> — which holds classes organised by day and time</li>
  <li>A <strong>StudyTimetable</strong> — which holds personal study sessions</li>
  <li>A <strong>ToDoList</strong> — which manages tasks with priorities</li>
  <li>An <strong>Assessment</strong> — which has a due date, a scaffold, and a recorded mark</li>
</ul>
<p>Each of those is a <em>thing</em>. OOP lets you represent each thing in code exactly as you think about it in real life — as a self-contained unit with its own data and its own behaviour.</p>`,
        code: null,
        codeExplain: null
      },
      {
        title: "The four pillars of OOP",
        terms: [],
        content: `
<p>Every OOP language — Python, Java, C++, Swift, C#, Ruby — is built around four core principles. These are sometimes called the <strong>four pillars of OOP</strong>. You will learn each one deeply in later tutorials. For now, meet them by name and get a feel for what each one is about.</p>

<div style="display:flex;flex-direction:column;gap:1rem;margin:1.25rem 0;">

  <div style="border:1px solid var(--border);border-radius:10px;overflow:hidden;">
    <div style="background:var(--teal-light);padding:0.75rem 1rem;border-bottom:1px solid var(--border);display:flex;align-items:center;gap:0.6rem;">
      <span style="font-family:var(--font-mono);font-size:0.72rem;font-weight:600;color:var(--teal-dark);text-transform:uppercase;letter-spacing:0.08em;">Pillar 1</span>
      <span style="font-size:1rem;font-weight:600;color:var(--teal-dark);">Encapsulation</span>
    </div>
    <div style="padding:0.85rem 1rem;font-size:0.88rem;line-height:1.7;color:var(--text-muted);">
      Think about your locker at school. Your belongings are inside, and only you have the combination. A friend cannot just reach in and grab something — they have to ask you, and you decide whether to get it out for them. Encapsulation works exactly the same way. An object keeps its data locked inside itself. Outside code cannot just reach in and change things directly — it has to go through the methods the object provides. This stops other parts of your program from accidentally (or deliberately) putting nonsense data into your object.
    </div>
  </div>

  <div style="border:1px solid var(--border);border-radius:10px;overflow:hidden;">
    <div style="background:var(--blue-light);padding:0.75rem 1rem;border-bottom:1px solid var(--border);display:flex;align-items:center;gap:0.6rem;">
      <span style="font-family:var(--font-mono);font-size:0.72rem;font-weight:600;color:var(--blue-dark);text-transform:uppercase;letter-spacing:0.08em;">Pillar 2</span>
      <span style="font-size:1rem;font-weight:600;color:var(--blue-dark);">Inheritance</span>
    </div>
    <div style="padding:0.85rem 1rem;font-size:0.88rem;line-height:1.7;color:var(--text-muted);">
      Imagine you already have a perfectly working chocolate cake recipe. You want to make a chocolate-raspberry cake. You would not throw the original away and start from scratch — you would take everything from the chocolate cake recipe and just add the raspberry parts on top. Inheritance works the same way in code. If you already have a working class, and you need a new class that is similar but with a few extras, the new class can <em>inherit</em> from the original. It automatically gets everything the original has, and you only have to write the new parts.
    </div>
  </div>

  <div style="border:1px solid var(--border);border-radius:10px;overflow:hidden;">
    <div style="background:var(--purple-light);padding:0.75rem 1rem;border-bottom:1px solid var(--border);display:flex;align-items:center;gap:0.6rem;">
      <span style="font-family:var(--font-mono);font-size:0.72rem;font-weight:600;color:var(--purple-dark);text-transform:uppercase;letter-spacing:0.08em;">Pillar 3</span>
      <span style="font-size:1rem;font-weight:600;color:var(--purple-dark);">Polymorphism</span>
    </div>
    <div style="padding:0.85rem 1rem;font-size:0.88rem;line-height:1.7;color:var(--text-muted);">
      A coach shouts "warm up!" to the whole team before a game. The goalkeeper immediately starts working on their diving and footwork. The striker starts doing sprint drills. The defender focuses on heading practice. Same instruction — completely different response from each player depending on their role. Polymorphism in code works the same way. You can call the same method name on different types of objects, and each one responds in the way that makes sense for its type. Your program gives one instruction and every object does the right thing for itself.
    </div>
  </div>

  <div style="border:1px solid var(--border);border-radius:10px;overflow:hidden;">
    <div style="background:var(--amber-light);padding:0.75rem 1rem;border-bottom:1px solid var(--border);display:flex;align-items:center;gap:0.6rem;">
      <span style="font-family:var(--font-mono);font-size:0.72rem;font-weight:600;color:var(--amber-dark);text-transform:uppercase;letter-spacing:0.08em;">Pillar 4</span>
      <span style="font-size:1rem;font-weight:600;color:var(--amber-dark);">Abstraction</span>
    </div>
    <div style="padding:0.85rem 1rem;font-size:0.88rem;line-height:1.7;color:var(--text-muted);">
      When you tap an app icon on your phone, you have no idea what actually happens behind that tap. The phone might be loading data from a server, decrypting a file, rendering thousands of pixels, and running dozens of background processes — all before the screen even changes. You just tapped. Everything else happened invisibly. Abstraction in code does exactly this. You design your classes so that using them is simple, even if the code inside is complicated. Someone using your <code>AssessmentTracker</code> class just calls <code>tracker.add_assessment(essay)</code> — they do not need to know it is sorting a list using date calculations behind the scenes.
    </div>
  </div>

</div>

<p>These four pillars are not four separate things you do one at a time. They work together constantly. In the Student Study Aid you are going to build, every class you write will use all four of them at once — sometimes without you even realising it. By the end of Tutorial 6, you will be able to look back at your code and point to exactly where each pillar is at work.</p>`,
        code: null,
        codeExplain: null
      },
      {
        title: "Why OOP is everywhere",
        terms: [],
        content: `
<p>Object-Oriented Programming is the dominant paradigm in professional software development. It is worth understanding <em>why</em> — because it is not an accident or a fashion. It solves real, persistent problems that affect every large software project.</p>

<p><strong>It manages complexity.</strong> A large program written procedurally eventually becomes impossible to hold in your head all at once. OOP breaks the program into objects — each one is small enough to understand completely. You can understand a <code>ToDoList</code> object without needing to know anything about the <code>AssessmentTracker</code>.</p>

<p><strong>It enables reuse.</strong> Once you have written a well-designed class, you can use it anywhere — in this project, in future projects, shared with other developers. With inheritance, you can build on existing classes rather than starting from scratch every time.</p>

<p><strong>It maps to how humans think.</strong> People naturally think in terms of things and their properties and behaviours. OOP code tends to read more like a description of the real world than procedural code does — which makes it easier to write, easier to read, and easier to debug.</p>

<p><strong>It makes teams possible.</strong> In a professional software team, many people work on the same codebase simultaneously. OOP's encapsulation means that one developer can work on the <code>Student</code> class while another works on the <code>AssessmentTracker</code>, with minimal risk of one person's changes breaking the other's work.</p>

<p><strong>Languages that use OOP:</strong> Python, Java, C++, C#, Swift, Kotlin, Ruby, JavaScript, PHP — virtually every mainstream language in use today either supports or is built around OOP. Learning it in Python gives you transferable knowledge that applies across all of them.</p>`,
        code: null,
        codeExplain: null
      },
      {
        title: "Every term you will learn in this series",
        terms: [],
        content: `
<p>Across the next five tutorials, you will encounter twelve specific OOP terms. Every one of them will be introduced with a plain-English explanation, a real-world analogy, and a coding example in the context of the Student Study Aid project.</p>
<p>This page is your reference map. You do not need to memorise any of this now — you are simply seeing the landscape before you walk through it. Return here any time you want to see the full picture.</p>

<div style="display:flex;flex-direction:column;gap:0.6rem;margin:1.25rem 0;">

  <div style="background:var(--gray-50);border:1px solid var(--border);border-radius:8px;padding:0.75rem 1rem;display:flex;align-items:flex-start;gap:1rem;">
    <span style="font-family:var(--font-mono);font-size:0.7rem;background:var(--teal-light);color:var(--teal-dark);padding:2px 8px;border-radius:4px;white-space:nowrap;margin-top:2px;font-weight:600;">Tutorial 2</span>
    <div>
      <span style="font-weight:600;font-size:0.9rem;">Class</span>
      <span style="font-size:0.84rem;color:var(--text-muted);margin-left:8px;">— a blueprint for creating objects</span>
    </div>
  </div>

  <div style="background:var(--gray-50);border:1px solid var(--border);border-radius:8px;padding:0.75rem 1rem;display:flex;align-items:flex-start;gap:1rem;">
    <span style="font-family:var(--font-mono);font-size:0.7rem;background:var(--teal-light);color:var(--teal-dark);padding:2px 8px;border-radius:4px;white-space:nowrap;margin-top:2px;font-weight:600;">Tutorial 2</span>
    <div>
      <span style="font-weight:600;font-size:0.9rem;">Constructor</span>
      <span style="font-size:0.84rem;color:var(--text-muted);margin-left:8px;">— the method that sets up a new object when it is created</span>
    </div>
  </div>

  <div style="background:var(--gray-50);border:1px solid var(--border);border-radius:8px;padding:0.75rem 1rem;display:flex;align-items:flex-start;gap:1rem;">
    <span style="font-family:var(--font-mono);font-size:0.7rem;background:var(--teal-light);color:var(--teal-dark);padding:2px 8px;border-radius:4px;white-space:nowrap;margin-top:2px;font-weight:600;">Tutorial 2</span>
    <div>
      <span style="font-weight:600;font-size:0.9rem;">Self</span>
      <span style="font-size:0.84rem;color:var(--text-muted);margin-left:8px;">— how an object refers to itself inside its own methods</span>
    </div>
  </div>

  <div style="background:var(--gray-50);border:1px solid var(--border);border-radius:8px;padding:0.75rem 1rem;display:flex;align-items:flex-start;gap:1rem;">
    <span style="font-family:var(--font-mono);font-size:0.7rem;background:var(--teal-light);color:var(--teal-dark);padding:2px 8px;border-radius:4px;white-space:nowrap;margin-top:2px;font-weight:600;">Tutorial 2</span>
    <div>
      <span style="font-weight:600;font-size:0.9rem;">Variable</span>
      <span style="font-size:0.84rem;color:var(--text-muted);margin-left:8px;">— a named storage location that holds a value</span>
    </div>
  </div>

  <div style="background:var(--gray-50);border:1px solid var(--border);border-radius:8px;padding:0.75rem 1rem;display:flex;align-items:flex-start;gap:1rem;">
    <span style="font-family:var(--font-mono);font-size:0.7rem;background:var(--teal-light);color:var(--teal-dark);padding:2px 8px;border-radius:4px;white-space:nowrap;margin-top:2px;font-weight:600;">Tutorial 2</span>
    <div>
      <span style="font-weight:600;font-size:0.9rem;">Attribute</span>
      <span style="font-size:0.84rem;color:var(--text-muted);margin-left:8px;">— a variable that belongs permanently to a specific object</span>
    </div>
  </div>

  <div style="background:var(--gray-50);border:1px solid var(--border);border-radius:8px;padding:0.75rem 1rem;display:flex;align-items:flex-start;gap:1rem;">
    <span style="font-family:var(--font-mono);font-size:0.7rem;background:var(--teal-light);color:var(--teal-dark);padding:2px 8px;border-radius:4px;white-space:nowrap;margin-top:2px;font-weight:600;">Tutorial 2</span>
    <div>
      <span style="font-weight:600;font-size:0.9rem;">Object</span>
      <span style="font-size:0.84rem;color:var(--text-muted);margin-left:8px;">— a real thing created from a class blueprint</span>
    </div>
  </div>

  <div style="background:var(--gray-50);border:1px solid var(--border);border-radius:8px;padding:0.75rem 1rem;display:flex;align-items:flex-start;gap:1rem;">
    <span style="font-family:var(--font-mono);font-size:0.7rem;background:var(--teal-light);color:var(--teal-dark);padding:2px 8px;border-radius:4px;white-space:nowrap;margin-top:2px;font-weight:600;">Tutorial 2</span>
    <div>
      <span style="font-weight:600;font-size:0.9rem;">Instance</span>
      <span style="font-size:0.84rem;color:var(--text-muted);margin-left:8px;">— one specific object among many that could be made from the same class</span>
    </div>
  </div>

  <div style="background:var(--gray-50);border:1px solid var(--border);border-radius:8px;padding:0.75rem 1rem;display:flex;align-items:flex-start;gap:1rem;">
    <span style="font-family:var(--font-mono);font-size:0.7rem;background:var(--blue-light);color:var(--blue-dark);padding:2px 8px;border-radius:4px;white-space:nowrap;margin-top:2px;font-weight:600;">Tutorial 3</span>
    <div>
      <span style="font-weight:600;font-size:0.9rem;">Method</span>
      <span style="font-size:0.84rem;color:var(--text-muted);margin-left:8px;">— a function that belongs to a class and defines what an object can do</span>
    </div>
  </div>

  <div style="background:var(--gray-50);border:1px solid var(--border);border-radius:8px;padding:0.75rem 1rem;display:flex;align-items:flex-start;gap:1rem;">
    <span style="font-family:var(--font-mono);font-size:0.7rem;background:var(--purple-light);color:var(--purple-dark);padding:2px 8px;border-radius:4px;white-space:nowrap;margin-top:2px;font-weight:600;">Tutorial 4</span>
    <div>
      <span style="font-weight:600;font-size:0.9rem;">Encapsulation</span>
      <span style="font-size:0.84rem;color:var(--text-muted);margin-left:8px;">— bundling data and methods together, and controlling outside access</span>
    </div>
  </div>

  <div style="background:var(--gray-50);border:1px solid var(--border);border-radius:8px;padding:0.75rem 1rem;display:flex;align-items:flex-start;gap:1rem;">
    <span style="font-family:var(--font-mono);font-size:0.7rem;background:var(--amber-light);color:var(--amber-dark);padding:2px 8px;border-radius:4px;white-space:nowrap;margin-top:2px;font-weight:600;">Tutorial 5</span>
    <div>
      <span style="font-weight:600;font-size:0.9rem;">Inheritance</span>
      <span style="font-size:0.84rem;color:var(--text-muted);margin-left:8px;">— building a new class on top of an existing one, reusing its code</span>
    </div>
  </div>

  <div style="background:var(--gray-50);border:1px solid var(--border);border-radius:8px;padding:0.75rem 1rem;display:flex;align-items:flex-start;gap:1rem;">
    <span style="font-family:var(--font-mono);font-size:0.7rem;background:var(--coral-light);color:var(--coral-dark);padding:2px 8px;border-radius:4px;white-space:nowrap;margin-top:2px;font-weight:600;">Tutorial 6</span>
    <div>
      <span style="font-weight:600;font-size:0.9rem;">Polymorphism</span>
      <span style="font-size:0.84rem;color:var(--text-muted);margin-left:8px;">— different objects responding to the same method name in their own way</span>
    </div>
  </div>

  <div style="background:var(--gray-50);border:1px solid var(--border);border-radius:8px;padding:0.75rem 1rem;display:flex;align-items:flex-start;gap:1rem;">
    <span style="font-family:var(--font-mono);font-size:0.7rem;background:var(--coral-light);color:var(--coral-dark);padding:2px 8px;border-radius:4px;white-space:nowrap;margin-top:2px;font-weight:600;">Tutorial 6</span>
    <div>
      <span style="font-weight:600;font-size:0.9rem;">Abstraction</span>
      <span style="font-size:0.84rem;color:var(--text-muted);margin-left:8px;">— hiding internal complexity behind a clean, simple interface</span>
    </div>
  </div>

</div>

<p>Every one of these terms also lives in the <strong>Glossary</strong> — accessible at any time from the button in the top right corner. The glossary shows you where each term is introduced and gives you the full definition and analogy without having to navigate away from where you are.</p>`,
        code: null,
        codeExplain: null
      },
      {
        title: "What you are going to build",
        terms: [],
        content: `
<p>Every concept in this tutorial series is taught in the context of one real project: a <strong>Student Study Aid</strong>. You will build it piece by piece across Tutorials 2 through 6, and by the end you will have a fully working Python application.</p>
<p>Here is everything the finished application includes:</p>

<div style="display:flex;flex-direction:column;gap:0.75rem;margin:1.25rem 0;">

  <div style="border:1px solid var(--border);border-radius:10px;padding:1rem 1.1rem;display:flex;gap:1rem;align-items:flex-start;">
    <div style="width:36px;height:36px;border-radius:8px;background:var(--teal-light);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:1.1rem;">🎓</div>
    <div>
      <div style="font-weight:600;font-size:0.9rem;margin-bottom:3px;">Student Profile</div>
      <div style="font-size:0.83rem;color:var(--text-muted);line-height:1.6;">Stores the student's name, year level, and subjects. The central object that everything else connects to. Built in Tutorial 2.</div>
    </div>
  </div>

  <div style="border:1px solid var(--border);border-radius:10px;padding:1rem 1.1rem;display:flex;gap:1rem;align-items:flex-start;">
    <div style="width:36px;height:36px;border-radius:8px;background:var(--blue-light);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:1.1rem;">📅</div>
    <div>
      <div style="font-weight:600;font-size:0.9rem;margin-bottom:3px;">School Timetable</div>
      <div style="font-size:0.83rem;color:var(--text-muted);line-height:1.6;">Add classes by day, time, subject, and room. Display the full week at a glance. Built in Tutorial 3.</div>
    </div>
  </div>

  <div style="border:1px solid var(--border);border-radius:10px;padding:1rem 1.1rem;display:flex;gap:1rem;align-items:flex-start;">
    <div style="width:36px;height:36px;border-radius:8px;background:var(--purple-light);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:1.1rem;">📚</div>
    <div>
      <div style="font-weight:600;font-size:0.9rem;margin-bottom:3px;">Study Timetable</div>
      <div style="font-size:0.83rem;color:var(--text-muted);line-height:1.6;">Plan personal study sessions with subject, time, and duration. Validates that sessions are a sensible length. Built in Tutorial 4.</div>
    </div>
  </div>

  <div style="border:1px solid var(--border);border-radius:10px;padding:1rem 1.1rem;display:flex;gap:1rem;align-items:flex-start;">
    <div style="width:36px;height:36px;border-radius:8px;background:var(--purple-light);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:1.1rem;">✅</div>
    <div>
      <div style="font-weight:600;font-size:0.9rem;margin-bottom:3px;">To-Do List</div>
      <div style="font-size:0.83rem;color:var(--text-muted);line-height:1.6;">Add tasks with low, normal, or high priority. Mark them complete. View only what is still pending. Built in Tutorial 4.</div>
    </div>
  </div>

  <div style="border:1px solid var(--border);border-radius:10px;padding:1rem 1.1rem;display:flex;gap:1rem;align-items:flex-start;">
    <div style="width:36px;height:36px;border-radius:8px;background:var(--amber-light);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:1.1rem;">📝</div>
    <div>
      <div style="font-weight:600;font-size:0.9rem;margin-bottom:3px;">Assessment Tracker</div>
      <div style="font-size:0.83rem;color:var(--text-muted);line-height:1.6;">All assessments listed in due-date order. Each assessment has a title, subject, description, and due date. Built in Tutorial 5.</div>
    </div>
  </div>

  <div style="border:1px solid var(--border);border-radius:10px;padding:1rem 1.1rem;display:flex;gap:1rem;align-items:flex-start;">
    <div style="width:36px;height:36px;border-radius:8px;background:var(--amber-light);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:1.1rem;">🗂️</div>
    <div>
      <div style="font-weight:600;font-size:0.9rem;margin-bottom:3px;">Assessment Scaffold</div>
      <div style="font-size:0.83rem;color:var(--text-muted);line-height:1.6;">Each assessment has built-in planning sections: task understanding, key ideas, evidence, structure plan, and notes. Built in Tutorial 5.</div>
    </div>
  </div>

  <div style="border:1px solid var(--border);border-radius:10px;padding:1rem 1.1rem;display:flex;gap:1rem;align-items:flex-start;">
    <div style="width:36px;height:36px;border-radius:8px;background:var(--coral-light);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:1.1rem;">🏆</div>
    <div>
      <div style="font-weight:600;font-size:0.9rem;margin-bottom:3px;">Marks Recording</div>
      <div style="font-size:0.83rem;color:var(--text-muted);line-height:1.6;">Record a mark and maximum mark for each assessment. The app calculates and displays the percentage automatically. Built in Tutorial 5.</div>
    </div>
  </div>

  <div style="border:1px solid var(--border);border-radius:10px;padding:1rem 1.1rem;display:flex;gap:1rem;align-items:flex-start;">
    <div style="width:36px;height:36px;border-radius:8px;background:var(--coral-light);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:1.1rem;">🚀</div>
    <div>
      <div style="font-weight:600;font-size:0.9rem;margin-bottom:3px;">Complete Application Menu</div>
      <div style="font-size:0.83rem;color:var(--text-muted);line-height:1.6;">A text-based menu that ties everything together. One command to launch the full app. All complexity hidden behind a clean interface. Built in Tutorial 6.</div>
    </div>
  </div>

</div>

<p>You are ready to begin. Tutorial 2 starts from scratch — no prior Python OOP knowledge assumed — and builds the very first piece of this application. Every step of the way, you will understand not just <em>how</em> to write the code, but <em>why</em> it is written that way.</p>`,
        code: null,
        codeExplain: null
      }
    ]
  },
  {
    id: 2,
    title: "Blueprints and Objects",
    subtitle: "Class, Constructor, Self, Variable, Attribute, Object, Instance",
    icon: "ti-layout-grid",
    color: "blue",
    steps: [
      {
        title: "Why do we need a better way to organise data?",
        terms: [],
        content: `
<p>Imagine you are building a Student Study Aid application. Before you write a single line of code, think about everything you need to track for one student:</p>
<ul>
  <li>Their name</li>
  <li>Their year level</li>
  <li>Their school subjects</li>
  <li>Their assessments and due dates</li>
  <li>Their marks</li>
  <li>Their study sessions</li>
  <li>Their to-do items</li>
</ul>
<p>You could try to store all of this in separate variables like this:</p>
<pre><code>student_name = "Anika"
student_year = 11
student_subjects = ["Maths", "English", "Biology"]
student_marks = []</code></pre>
<p>This works for one student. But what if a teacher uses the app for a whole class? You would need a completely new set of variables for every student. The code quickly becomes unmanageable and impossible to read.</p>
<p>This is the problem that <strong>Object-Oriented Programming (OOP)</strong> solves. Instead of scattering related data across dozens of loose variables, OOP lets you bundle everything about a student into one neat, reusable package called a <em>class</em>.</p>
<p>In this tutorial, you will build your first class — the foundation that the entire Student Study Aid application will grow from.</p>`,
        code: null,
        codeExplain: null
      },
      {
        title: "What is a Class?",
        terms: ["class"],
        content: `
<p>A <strong>class</strong> is a blueprint — a template that describes what something should look like and what it should be able to do. The class itself is not a real thing. It is the plan for making a real thing.</p>
<p>In Python, you define a class using the <code>class</code> keyword followed by the class name. By convention, class names always start with a capital letter.</p>
<p><strong>Type the code below into your study_aid.py file and run it.</strong> It will not produce any output yet — that is expected. You are simply telling Python that a blueprint called Student exists.</p>`,
        code: `class Student:
    pass`,
        codeExplain: `<p><code>def _time_to_minutes(time_str):
    """Convert a time string like 9:30am or 11:00pm to total minutes since midnight."""
    time_str = time_str.strip().lower()
    period = "am" if time_str.endswith("am") else "pm"
    time_str = time_str[:-2]
    if ":" in time_str:
        h, m = time_str.split(":")
    else:
        h, m = time_str, "0"
    h, m = int(h), int(m)
    if period == "pm" and h != 12:
        h += 12
    if period == "am" and h == 12:
        h = 0
    return h * 60 + m


class Student:</code> — This line declares that we are creating a new blueprint called Student. The capital S is a Python convention for class names.</p>
<p><code>pass</code> — This is a placeholder that tells Python "this class exists but has nothing in it yet." We will replace it very soon.</p>
<p>Right now, this class is just an empty blueprint. It does not do anything useful yet — but it exists, and that is the first step. No output when you run it is correct behaviour.</p>`,
        fileSnapshot: `# study_aid.py

class Student:
    pass`,
      },
      {
        title: "The Constructor: bringing the blueprint to life",
        terms: ["constructor", "self", "object", "instance"],
        content: `
<p>An empty class is not very useful. We need to tell it what information to store when a new student is created. This is done using a special method called the <strong>constructor</strong>.</p>
<p>In Python, the constructor is always named <code>__init__</code> (two underscores on each side). It runs automatically the moment you create a new student from the class.</p>
<p>Before we look at the constructor code, two more terms need a proper introduction here — because the constructor is the exact moment they come into existence.</p>
<p>When Python runs your class definition, nothing real is created yet. The class is still just a blueprint sitting in memory. The moment you use the class to actually create something — that real, usable thing is called an <strong>object</strong>. Each individual object you create from the same class is called an <strong>instance</strong>.</p>
<p>The constructor is the method that runs at the precise moment an object comes into existence. It is Python's way of saying "a new instance is being created right now — set it up."</p>
<p>You will also notice a parameter called <strong>self</strong> appearing in the constructor. Every method in a class receives <code>self</code> as its first parameter. It is how the object refers to itself — whichever specific instance is being created or used right now.</p>
<p><strong>Replace the <code>pass</code> line in your Student class with the constructor below.</strong> You are not retyping the whole class — just replace that one word with the four new lines shown.</p>`,
        code: `class Student:
    def __init__(self, name, year_level):
        self.name = name
        self.year_level = year_level`,
        codeExplain: `<p><code>def __init__(self, name, year_level):</code> — This defines the constructor. It takes <code>self</code> (the object being created), plus two pieces of information we want to store: the student's name and year level.</p>
<p><code>self.name = name</code> — This stores the name we passed in onto the object itself. The <code>self.</code> part means "attach this to the object, not just a temporary variable inside the method."</p>
<p><code>self.year_level = year_level</code> — Same idea — the year level is stored on the object so it can be accessed later.</p>
<p>Think of it this way: <code>name</code> on its own is a temporary value that exists only while the constructor is running. <code>self.name</code> is a permanent label attached to the student object that exists for as long as the student object exists.</p>`,
        fileSnapshot: `# study_aid.py

class Student:
    def __init__(self, name, year_level):
        self.name = name
        self.year_level = year_level`,
      },
      {
        title: "Variables and Attributes: what is the difference?",
        terms: ["variable", "attribute"],
        readOnly: true,
        content: `
<p>You have just seen two different kinds of data storage in the constructor. Let us be precise about what each one is.</p>
<p>A <strong>variable</strong> is any named storage location in your program. The <code>name</code> parameter inside <code>__init__</code> is a variable — it holds a value temporarily while the method runs.</p>
<p>An <strong>attribute</strong> is a variable that belongs permanently to a specific object. <code>self.name</code> is an attribute — it is attached to the student and stays with it.</p>
<p>The distinction matters because attributes are how objects remember things about themselves. They are the data that makes one student different from another student, even though they were both made from the same blueprint.</p>
<p><strong>This is a reading step.</strong> The code below is your Student class with comments added to label each type. Read it carefully — you do not need to retype it, but make sure you can identify which parts are variables and which are attributes in your own file.</p>`,
        code: `class Student:
    def __init__(self, name, year_level):
        self.name = name           # attribute
        self.year_level = year_level   # attribute

# 'name' and 'year_level' inside __init__ are variables (parameters)
# 'self.name' and 'self.year_level' are attributes of the object`,
        codeExplain: `<p>The parameters <code>name</code> and <code>year_level</code> are regular variables. They only exist inside the <code>__init__</code> method, and disappear when it finishes.</p>
<p>The attributes <code>self.name</code> and <code>self.year_level</code> are permanently attached to whatever student object is being created. They persist for as long as the object exists.</p>
<p>You can add as many attributes as you need. Our Student will eventually have attributes for subjects, marks, and more — but we start simple.</p>`
      },
      {
        title: "Growing the Student class — adding attributes and a method",
        terms: [],
        content: `
<p>In the previous step you typed the Student class with two attributes: <code>self.name</code> and <code>self.year_level</code>. Now you are going to open that file and add three more lines to it.</p>
<p><strong>Do not start a new file and do not retype the whole class.</strong> Find the Student class you already wrote and add the two new lines shown below inside <code>__init__</code>, then add the <code>introduce</code> method below it.</p>
<p>Here is exactly what is new — the two highlighted additions inside <code>__init__</code>, and the brand new <code>introduce</code> method underneath:</p>`,
        code: `# ADD these two lines inside __init__, after self.year_level:
        self.subjects = []
        self.marks = []

# ADD this new method below __init__, at the same indentation level as def __init__:
    def introduce(self):
        print(f"Hi, I am {self.name}, a Year {self.year_level} student.")
        print(f"I am studying {len(self.subjects)} subject(s).")`,
        codeExplain: `<p><strong>Where to add these lines:</strong> <code>self.subjects = []</code> and <code>self.marks = []</code> go inside <code>__init__</code>, directly below <code>self.year_level = year_level</code>. Make sure they are indented by eight spaces (two levels) — the same as the lines above them.</p>
<p><code>self.subjects = []</code> — An empty list that will hold this student's subjects. Every new Student starts with no subjects, so the list starts empty. You will add subjects to it later in the project.</p>
<p><code>self.marks = []</code> — An empty list ready to hold marks. It starts empty because no marks have been recorded yet. Preparing it now means the space exists when you need it later.</p>
<p><code>def introduce(self):</code> — A method that prints a short introduction. It sits at the same indentation level as <code>def __init__</code> — one level in from the <code>class</code> keyword. This is your first custom method.</p>
<p><code>f"I am studying {len(self.subjects)} subject(s)."</code> — <code>len()</code> counts how many items are in a list. Right now it will print 0, which is correct — no subjects have been added yet.</p>
<p><strong>After adding these lines, your complete Student class should look like the reference below. Check yours matches before moving on.</strong></p>`,
        fileSnapshot: `# study_aid.py

class Student:
    def __init__(self, name, year_level):
        self.name = name
        self.year_level = year_level
        self.subjects = []
        self.marks = []

    def introduce(self):
        print(f"Hi, I am {self.name}, a Year {self.year_level} student.")
        print(f"I am studying {len(self.subjects)} subject(s).")`,
      },
      {
        title: "Check your work — the complete Student class so far",
        terms: [],
        content: `
<p>Before moving to the next step, check that your <code>study_aid.py</code> file matches the complete class shown below. This is a <strong>reading and checking step</strong> — do not retype the whole thing. Simply compare what you have with what is shown here and fix any differences you spot.</p>
<p>Common things to check:</p>
<ul>
  <li>Every line inside <code>__init__</code> is indented by 8 spaces (two tabs)</li>
  <li>The <code>def introduce(self):</code> line is indented by 4 spaces (one tab) — the same level as <code>def __init__</code></li>
  <li>The two <code>print</code> lines inside <code>introduce</code> are indented by 8 spaces</li>
  <li>There are no extra spaces or missing colons</li>
</ul>`,
        code: `# Your complete Student class should look exactly like this:

class Student:
    def __init__(self, name, year_level):
        self.name = name
        self.year_level = year_level
        self.subjects = []
        self.marks = []

    def introduce(self):
        print(f"Hi, I am {self.name}, a Year {self.year_level} student.")
        print(f"I am studying {len(self.subjects)} subject(s).")`,
        codeExplain: `<p>If your class matches this exactly, run your file. You will not see any output yet — you have only defined the class, not created an instance from it. That is fine. You will do that in the next step.</p>
<p>If Python shows an error, read the error message carefully. It will tell you the line number where the problem is. The most common cause is an indentation error — a line indented by the wrong number of spaces.</p>`
      },
      {
        title: "Objects and Instances: seeing them in action",
        terms: [],
        content: `
<p>The class is the blueprint. An <strong>object</strong> is what you get when you build something from that blueprint. The act of creating an object from a class is called <strong>instantiation</strong>, and each object created is called an <strong>instance</strong>.</p>
<p>You can create as many instances as you like from the same class. Each one is completely independent — changing the name of one student does not affect any other.</p>
<p><strong>Add the code below to the bottom of your study_aid.py file</strong> — below the Student class, not inside it. Make sure these lines start at the very left edge with no indentation. Run the file and check you see two introduction messages printed.</p>`,
        code: `class Student:
    def __init__(self, name, year_level):
        self.name = name
        self.year_level = year_level
        self.subjects = []
        self.marks = []

    def introduce(self):
        print(f"Hi, I am {self.name}, a Year {self.year_level} student.")
        print(f"I am studying {len(self.subjects)} subject(s).")

# Creating two instances from the same blueprint
student_one = Student("Anika", 11)
student_two = Student("Marcus", 10)

# Each instance has its own separate data
student_one.introduce()
student_two.introduce()

print(student_one.name)   # Anika
print(student_two.name)   # Marcus`,
        codeExplain: `<p><code>student_one = Student("Anika", 11)</code> — This creates a new instance of Student. Python automatically calls <code>__init__</code> with "Anika" and 11. The result is stored in the variable <code>student_one</code>.</p>
<p><code>student_two = Student("Marcus", 10)</code> — A second, completely separate instance. It has its own <code>self.name</code> and <code>self.year_level</code>, independent of student_one.</p>
<p><code>student_one.introduce()</code> — Calling a method on an instance. The dot notation tells Python: "call the introduce method on the student_one object." Inside the method, <code>self</code> refers to student_one.</p>
<p>The two students share the same blueprint (the Student class) but are entirely separate objects. Changing one does not touch the other.</p>`,
        fileSnapshot: `# study_aid.py

class Student:
    def __init__(self, name, year_level):
        self.name = name
        self.year_level = year_level
        self.subjects = []
        self.marks = []

    def introduce(self):
        print(f"Hi, I am {self.name}, a Year {self.year_level} student.")
        print(f"I am studying {len(self.subjects)} subject(s).")


# Creating two instances from the same blueprint
student_one = Student("Anika", 11)
student_two = Student("Marcus", 10)

student_one.introduce()
student_two.introduce()`,
      },
      {
        title: "What you built — Tutorial 2 summary",
        terms: [],
        content: `
<p>In this tutorial you have built the foundation of the Student Study Aid application. Here is what you now understand:</p>
<ul>
  <li>A <strong>class</strong> is a blueprint that describes what an object will look like</li>
  <li>The <strong>constructor</strong> (<code>__init__</code>) runs automatically when an object is created and sets up its attributes</li>
  <li><strong>Self</strong> is how an object refers to itself inside its own methods</li>
  <li><strong>Variables</strong> are named storage locations; <strong>attributes</strong> are variables attached to an object</li>
  <li>An <strong>object</strong> is a real thing created from a class; an <strong>instance</strong> is one specific object from that class</li>
</ul>
<p>Your Student class currently stores a name, year level, and empty lists for subjects and marks. In Tutorial 3, you will give objects the ability to <em>do things</em> by adding methods — starting with a school timetable.</p>
<p><strong>Before moving on:</strong> check your study_aid.py file matches the complete class shown below. Replace <code>"Your Name Here"</code> with your actual name and run it one final time to confirm everything works.</p>`,
        code: `# Your complete Student class so far
class Student:
    def __init__(self, name, year_level):
        self.name = name
        self.year_level = year_level
        self.subjects = []
        self.marks = []

    def introduce(self):
        print(f"Hi, I am {self.name}, a Year {self.year_level} student.")
        print(f"I am studying {len(self.subjects)} subject(s).")

# Try it yourself — replace the name and year with your own
my_student = Student("Your Name Here", 11)
my_student.introduce()`,
        quiz: [
          {
            type: "mcq",
            question: "What keyword do you use to define a class in Python?",
            options: ["def", "class", "object", "new"],
            answer: 1,
            explanation: "The class keyword defines a class. def is used for functions and methods — including those inside a class."
          },
          {
            type: "tf",
            question: "True or False: __init__ runs automatically every time you create a new object from a class.",
            answer: true,
            explanation: "True. Python calls __init__ automatically when you write Student('Anika', 11) — you do not call it yourself."
          },
          {
            type: "fill",
            question: "Inside a method, what keyword is used to refer to the object itself?",
            answers: ["self"],
            explanation: "self is the first parameter of every method and gives it access to the object's own attributes and other methods."
          }
        ],
        codeExplain: `<p>Type this code in, replacing <code>"Your Name Here"</code> with your actual name, and run it one final time to confirm everything works.</p>
<p><strong>Now delete the last three lines</strong> — the comment and the two lines below it:</p>
<pre><code># Try it yourself — replace the name and year with your own
my_student = Student("Your Name Here", 11)
my_student.introduce()</code></pre>
<p>These lines were test code — you wrote them to check that your class was working correctly. They have done their job. From here, the application will create and use objects in a more structured way, so these loose lines at the bottom of the file are no longer needed. Professional Python files do not contain test code mixed in with the application — they are kept separate. Delete all three lines, save the file, and move on to Tutorial 3.</p>`
      }
    ]
  },
  {
    id: 3,
    title: "Making Classes Do Things",
    subtitle: "Methods and the School Timetable",
    icon: "ti-calendar-event",
    color: "purple",
    steps: [
      {
        title: "Recap: where we left off",
        terms: [],
        content: `
<p>In Tutorial 2, you built a <code>Student</code> class that stores a name, year level, subjects, and marks. You learned that a class is a blueprint, and an object is a real instance created from that blueprint.</p>
<p><strong>Open your study_aid.py file now.</strong> Your Student class should be there from Tutorial 2. Check it matches the code shown below before continuing — if anything is missing, add it now.</p>`,
        code: `class Student:
    def __init__(self, name, year_level):
        self.name = name
        self.year_level = year_level
        self.subjects = []
        self.marks = []

    def introduce(self):
        print(f"Hi, I am {self.name}, a Year {self.year_level} student.")
        print(f"I am studying {len(self.subjects)} subject(s).")`,
        codeExplain: `<p>This is a <strong>checking step</strong> — do not retype this code. Simply confirm your file matches. Notice that <code>introduce</code> is already a method — a function that belongs to the class. In this tutorial we will explore methods in much more depth and build an entirely new class: the school timetable.</p>`,
        fileSnapshot: `# study_aid.py

class Student:
    def __init__(self, name, year_level):
        self.name = name
        self.year_level = year_level
        self.subjects = []
        self.marks = []

    def introduce(self):
        print(f"Hi, I am {self.name}, a Year {self.year_level} student.")
        print(f"I am studying {len(self.subjects)} subject(s).")`,
      },
      {
        title: "What is a Method?",
        terms: ["method"],
        content: `
<p>So far your Student object can store data but it cannot really <em>do</em> much. A <strong>method</strong> is what gives an object its behaviour — the things it knows how to do.</p>
<p>A method is defined inside a class using the <code>def</code> keyword, just like a regular function. The crucial difference is that every method receives <code>self</code> as its first parameter, giving it access to the object's own attributes.</p>
<p>Think about what a school timetable needs to be able to do:</p>
<ul>
  <li>Add a subject to a particular day and time</li>
  <li>Display the full week</li>
  <li>Find out what is on at a given time</li>
</ul>
<p>Each of those actions will become a method.</p>
<p><strong>Where this code goes:</strong> You are going to write a brand new class called <code>SchoolTimetable</code>. It goes in your <code>study_aid.py</code> file, directly below the <code>Student</code> class you already wrote. Leave one blank line between the end of the <code>Student</code> class and the start of this new one.</p>`,
        code: `class SchoolTimetable:
    def __init__(self):
        self.schedule = {
            "Monday": [],
            "Tuesday": [],
            "Wednesday": [],
            "Thursday": [],
            "Friday": []
        }

    def add_class(self, day, time, subject, room):
        day_map = {
            "mon": "Monday", "monday": "Monday",
            "tue": "Tuesday", "tuesday": "Tuesday",
            "wed": "Wednesday", "wednesday": "Wednesday",
            "thu": "Thursday", "thursday": "Thursday",
            "fri": "Friday", "friday": "Friday"
        }
        day = day_map.get(day.strip().lower())
        if not day:
            print("Error: please enter a valid weekday as Mon, Tue, Wed, Thu or Fri.")
            return
        entry = {"time": time, "subject": subject, "room": room}
        self.schedule[day].append(entry)
        self.schedule[day].sort(key=lambda e: _time_to_minutes(e["time"]))
        print(f"Added: {time} — {subject} ({room}) on {day}")`,
        codeExplain: `<p><code>self.schedule</code> — A dictionary attribute that holds the timetable. Each day maps to a list of class entries. It starts empty for every day.</p>
<p><code>def add_class(self, day, time, subject, room):</code> — A method that takes four pieces of information. Notice <code>self</code> comes first — Python always passes the object itself as the first argument automatically.</p>
<p><code>entry = {"time": time, "subject": subject, "room": room}</code> — This creates a small dictionary to store all the details of one class period together. Using a dictionary (rather than a plain string) means you can later access individual pieces — <code>entry['subject']</code>, <code>entry['room']</code> — which the display methods need.</p>
<p><code>self.schedule[day].append(entry)</code> — This accesses the object's own schedule attribute and adds the new entry dictionary to the correct day's list. Without <code>self.</code>, Python would look for a local variable called <code>schedule</code> and fail.</p>
<p><code>self.schedule[day].sort(key=lambda e: _time_to_minutes(e["time"]))</code> — After appending, the day's list is immediately sorted by time. <code>sort()</code> reorders the list in place. The <code>key=</code> argument tells Python what value to sort by — here it calls <code>_time_to_minutes()</code> on each entry's time string to convert it to a number (total minutes since midnight), so <code>9:00am</code> = 540, <code>11:30am</code> = 690, <code>1:00pm</code> = 780. Sorting numbers is simple and reliable. Sorting by the raw time string would give wrong results because strings sort alphabetically — <code>"9:00am"</code> would come after <code>"11:30am"</code> because "9" > "1". This is why consistent time formatting matters: <code>_time_to_minutes()</code> depends on the exact format <code>_ask_time()</code> produces. Sorting on insert (rather than on display) means the data is always in the right order regardless of how it is accessed.</p>
<p><code>def _time_to_minutes(time_str):</code> — A module-level helper function (not a method of any class) that converts a time string to a plain integer for comparison. It handles am/pm correctly, including the special cases of 12:00am (midnight = 0 minutes) and 12:00pm (noon = 720 minutes). It sits at the top of the file, before the classes, because it is shared by both <code>SchoolTimetable</code> and <code>StudyTimetable</code>.</p>
<p><strong>What the file snapshot shows:</strong> Once you have typed in the <code>SchoolTimetable</code> class, your complete <code>study_aid.py</code> file should match the snapshot below. You will see both classes together — the <code>Student</code> class you wrote in Tutorial 2 is still there unchanged at the top, and the new <code>SchoolTimetable</code> class sits below it. The snapshot is showing you the whole file so you can check everything is in the right place.</p>`,
        fileSnapshot: `# study_aid.py

def _time_to_minutes(time_str):
    """Convert a time string like 9:30am or 11:00pm to total minutes since midnight."""
    time_str = time_str.strip().lower()
    period = "am" if time_str.endswith("am") else "pm"
    time_str = time_str[:-2]
    if ":" in time_str:
        h, m = time_str.split(":")
    else:
        h, m = time_str, "0"
    h, m = int(h), int(m)
    if period == "pm" and h != 12:
        h += 12
    if period == "am" and h == 12:
        h = 0
    return h * 60 + m


class Student:
    def __init__(self, name, year_level):
        self.name = name
        self.year_level = year_level
        self.subjects = []
        self.marks = []

    def introduce(self):
        print(f"Hi, I am {self.name}, a Year {self.year_level} student.")
        print(f"I am studying {len(self.subjects)} subject(s).")

class SchoolTimetable:
    def __init__(self):
        self.schedule = {
            "Monday": [],
            "Tuesday": [],
            "Wednesday": [],
            "Thursday": [],
            "Friday": []
        }

    def add_class(self, day, time, subject, room):
        day_map = {
            "mon": "Monday", "monday": "Monday",
            "tue": "Tuesday", "tuesday": "Tuesday",
            "wed": "Wednesday", "wednesday": "Wednesday",
            "thu": "Thursday", "thursday": "Thursday",
            "fri": "Friday", "friday": "Friday"
        }
        day = day_map.get(day.strip().lower())
        if not day:
            print("Error: please enter a valid weekday as Mon, Tue, Wed, Thu or Fri.")
            return
        entry = {"time": time, "subject": subject, "room": room}
        self.schedule[day].append(entry)
        self.schedule[day].sort(key=lambda e: _time_to_minutes(e["time"]))
        print(f"Added: {time} — {subject} ({room}) on {day}")`,
      },
      {
        title: "Why self is in every method",
        terms: [],
        readOnly: 'broken',
        content: `
<p>New Python learners often wonder: why does every method need <code>self</code>? Can we leave it out?</p>
<p>Let us see exactly what happens when you do — this is one of the most instructive errors in Python.</p>
<p><strong>This is a reading step — do not type this code into your study_aid.py file.</strong> This example is deliberately broken to show you what goes wrong. Read it, understand the error, then move on.</p>`,
        code: `# BROKEN version — self missing from add_class
class SchoolTimetable:
    def __init__(self):
        self.schedule = {"Monday": [], "Tuesday": []}

    def add_class(day, time, subject):   # self is missing!
        self.schedule[day].append(...)   # ERROR here

timetable = SchoolTimetable()
timetable.add_class("Monday", "9am", "Maths")
# TypeError: add_class() takes 3 positional arguments but 4 were given`,
        codeExplain: `<p>This error message looks confusing — you only passed 3 arguments ("Monday", "9am", "Maths") but Python says 4 were given. Why?</p>
<p>When you call <code>timetable.add_class(...)</code>, Python automatically passes <code>timetable</code> (the object itself) as the first argument. That is always how method calls work — Python slides the object in as the first argument so the method knows which object it is working with.</p>
<p>If you forget <code>self</code> in the method definition, Python tries to use your first real argument ("Monday") as the object reference instead — and everything breaks.</p>
<p>The fix is always simple: make sure <code>self</code> is the first parameter in every method.</p>`,
        fixedCode: `# FIXED version — self is the first parameter in every method
class SchoolTimetable:
    def __init__(self):
        self.schedule = {"Monday": [], "Tuesday": []}

    def add_class(self, day, time, subject):   # self is back where it belongs
        self.schedule[day].append(...)         # now works correctly

timetable = SchoolTimetable()
timetable.add_class("Monday", "9am", "Maths")
# No error — Python passes timetable as self automatically`
      },
      {
        title: "Building the full SchoolTimetable class",
        terms: [],
        content: `
<p>Now let us build a complete, working school timetable. This class will let students add all their classes for the week and display them clearly.</p>
<p><strong>Add this new class to your study_aid.py file, below the Student class.</strong> Do not delete anything that is already there — the SchoolTimetable class sits underneath Student, at the same indentation level (no indentation at all, starting at the left edge).</p>
<p><strong>Note: if you run your file now, you will not see any output.</strong> That is expected. A class is only a blueprint — it describes what a timetable <em>can</em> do, but it does not do anything on its own. To see output, you need to create an instance of the class and call its methods. You will do exactly that in the next step.</p>`,
        code: `class SchoolTimetable:
    def __init__(self):
        self.schedule = {
            "Monday": [],
            "Tuesday": [],
            "Wednesday": [],
            "Thursday": [],
            "Friday": []
        }

    def add_class(self, day, time, subject, room):
        day_map = {
            "mon": "Monday", "monday": "Monday",
            "tue": "Tuesday", "tuesday": "Tuesday",
            "wed": "Wednesday", "wednesday": "Wednesday",
            "thu": "Thursday", "thursday": "Thursday",
            "fri": "Friday", "friday": "Friday"
        }
        day = day_map.get(day.strip().lower())
        if not day:
            print("Error: please enter a valid weekday as Mon, Tue, Wed, Thu or Fri.")
            return
        entry = {"time": time, "subject": subject, "room": room}
        self.schedule[day].append(entry)
        self.schedule[day].sort(key=lambda e: _time_to_minutes(e["time"]))
        print(f"Added: {time} — {subject} ({room}) on {day}")

    def display_day(self, day):
        print()
        print(f"--- {day} ---")
        if not self.schedule[day]:
            print("  No classes scheduled.")
        else:
            for entry in self.schedule[day]:
                print(f"  {entry['time']:8} {entry['subject']} — Room {entry['room']}")

    def display_week(self):
        print()
        print("=== SCHOOL TIMETABLE ===")
        for day in self.schedule:
            self.display_day(day)`,
        codeExplain: `<p><code>entry = {"time": ..., "subject": ..., "room": ...}</code> — We store each class as a dictionary so we can access each piece of information by name later. This is cleaner than a formatted string.</p>
<p><code>def display_day(self, day):</code> — A method that prints one day's schedule. It checks if the day is empty first, to give a helpful message rather than just blank output.</p>
<p><code>def display_week(self):</code> — Loops through every day and calls <code>display_day</code> for each one. Notice a method can call another method on the same object using <code>self.display_day(day)</code>.</p>
<p><code>f"  {entry['time']:8}"</code> — The <code>:8</code> pads the time to 8 characters wide so all subject names line up neatly in a column.</p>`,
        fileSnapshot: `# study_aid.py

def _time_to_minutes(time_str):
    """Convert a time string like 9:30am or 11:00pm to total minutes since midnight."""
    time_str = time_str.strip().lower()
    period = "am" if time_str.endswith("am") else "pm"
    time_str = time_str[:-2]
    if ":" in time_str:
        h, m = time_str.split(":")
    else:
        h, m = time_str, "0"
    h, m = int(h), int(m)
    if period == "pm" and h != 12:
        h += 12
    if period == "am" and h == 12:
        h = 0
    return h * 60 + m


class Student:
    def __init__(self, name, year_level):
        self.name = name
        self.year_level = year_level
        self.subjects = []
        self.marks = []

    def introduce(self):
        print(f"Hi, I am {self.name}, a Year {self.year_level} student.")
        print(f"I am studying {len(self.subjects)} subject(s).")

class SchoolTimetable:
    def __init__(self):
        self.schedule = {
            "Monday": [],
            "Tuesday": [],
            "Wednesday": [],
            "Thursday": [],
            "Friday": []
        }

    def add_class(self, day, time, subject, room):
        day_map = {
            "mon": "Monday", "monday": "Monday",
            "tue": "Tuesday", "tuesday": "Tuesday",
            "wed": "Wednesday", "wednesday": "Wednesday",
            "thu": "Thursday", "thursday": "Thursday",
            "fri": "Friday", "friday": "Friday"
        }
        day = day_map.get(day.strip().lower())
        if not day:
            print("Error: please enter a valid weekday as Mon, Tue, Wed, Thu or Fri.")
            return
        entry = {"time": time, "subject": subject, "room": room}
        self.schedule[day].append(entry)
        self.schedule[day].sort(key=lambda e: _time_to_minutes(e["time"]))
        print(f"Added: {time} — {subject} ({room}) on {day}")

    def display_day(self, day):
        print()
        print(f"--- {day} ---")
        if not self.schedule[day]:
            print("  No classes scheduled.")
        else:
            for entry in self.schedule[day]:
                print(f"  {entry['time']:8} {entry['subject']} — Room {entry['room']}")

    def display_week(self):
        print()
        print("=== SCHOOL TIMETABLE ===")
        for day in self.schedule:
            self.display_day(day)`,
      },
      {
        title: "Calling methods on an object",
        terms: [],
        content: `
<p>A method does nothing until you call it on an instance. Let us create a timetable and populate it — exactly as a student would when setting up their Study Aid for the first time.</p>
<p><strong>Add the code below to the bottom of your study_aid.py file</strong> — below both classes, starting at the left edge with no indentation. This code creates a timetable instance and calls methods on it. Run the file and check you see a full week printed.</p>`,
        code: `# Create an instance of SchoolTimetable
timetable = SchoolTimetable()

# Call methods to add classes
timetable.add_class("Monday", "8:30am", "English", "B12")
timetable.add_class("Monday", "10:00am", "Maths", "A3")
timetable.add_class("Tuesday", "9:00am", "Biology", "C7")
timetable.add_class("Wednesday", "8:30am", "English", "B12")
timetable.add_class("Thursday", "11:00am", "Maths", "A3")
timetable.add_class("Friday", "9:00am", "Biology", "C7")

# Display the full week
timetable.display_week()

# Or just one day
timetable.display_day("Monday")`,
        codeExplain: `<p><code>timetable = SchoolTimetable()</code> — Creates one instance of the timetable. <code>__init__</code> runs automatically, setting up the empty schedule dictionary.</p>
<p><code>timetable.add_class("Monday", "8:30am", "English", "B12")</code> — Calls the method on the object. Python passes <code>timetable</code> as <code>self</code> automatically, then passes the four arguments you wrote.</p>
<p><code>timetable.display_week()</code> — Calls the display method. No extra arguments needed — it just needs <code>self</code> to access <code>self.schedule</code>.</p>
<p>The dot between the object name and the method name is called <em>dot notation</em>. It is how you interact with an object's methods and attributes from outside the class.</p>`,
        fileSnapshot: `# study_aid.py

def _time_to_minutes(time_str):
    """Convert a time string like 9:30am or 11:00pm to total minutes since midnight."""
    time_str = time_str.strip().lower()
    period = "am" if time_str.endswith("am") else "pm"
    time_str = time_str[:-2]
    if ":" in time_str:
        h, m = time_str.split(":")
    else:
        h, m = time_str, "0"
    h, m = int(h), int(m)
    if period == "pm" and h != 12:
        h += 12
    if period == "am" and h == 12:
        h = 0
    return h * 60 + m


class Student:
    def __init__(self, name, year_level):
        self.name = name
        self.year_level = year_level
        self.subjects = []
        self.marks = []

    def introduce(self):
        print(f"Hi, I am {self.name}, a Year {self.year_level} student.")
        print(f"I am studying {len(self.subjects)} subject(s).")

class SchoolTimetable:
    def __init__(self):
        self.schedule = {
            "Monday": [],
            "Tuesday": [],
            "Wednesday": [],
            "Thursday": [],
            "Friday": []
        }

    def add_class(self, day, time, subject, room):
        day_map = {
            "mon": "Monday", "monday": "Monday",
            "tue": "Tuesday", "tuesday": "Tuesday",
            "wed": "Wednesday", "wednesday": "Wednesday",
            "thu": "Thursday", "thursday": "Thursday",
            "fri": "Friday", "friday": "Friday"
        }
        day = day_map.get(day.strip().lower())
        if not day:
            print("Error: please enter a valid weekday as Mon, Tue, Wed, Thu or Fri.")
            return
        entry = {"time": time, "subject": subject, "room": room}
        self.schedule[day].append(entry)
        self.schedule[day].sort(key=lambda e: _time_to_minutes(e["time"]))
        print(f"Added: {time} — {subject} ({room}) on {day}")

    def display_day(self, day):
        print()
        print(f"--- {day} ---")
        if not self.schedule[day]:
            print("  No classes scheduled.")
        else:
            for entry in self.schedule[day]:
                print(f"  {entry['time']:8} {entry['subject']} — Room {entry['room']}")

    def display_week(self):
        print()
        print("=== SCHOOL TIMETABLE ===")
        for day in self.schedule:
            self.display_day(day)


# Test code — delete these lines before Tutorial 4
timetable = SchoolTimetable()

# Call methods to add classes
timetable.add_class("Monday", "8:30am", "English", "B12")
timetable.add_class("Monday", "10:00am", "Maths", "A3")
timetable.add_class("Tuesday", "9:00am", "Biology", "C7")
timetable.add_class("Wednesday", "8:30am", "English", "B12")
timetable.add_class("Thursday", "11:00am", "Maths", "A3")
timetable.add_class("Friday", "9:00am", "Biology", "C7")

# Display the full week
timetable.display_week()

# Or just one day
timetable.display_day("Monday")`,
      },
      {
        title: "What you built — Tutorial 3 summary",
        terms: [],
        quiz: [
          {
            type: "mcq",
            question: "Which of the following correctly calls the add_class method on an object called timetable?",
            options: [
              "add_class(timetable, 'Monday', '9am', 'Maths', 'B2')",
              "timetable.add_class('Monday', '9am', 'Maths', 'B2')",
              "timetable->add_class('Monday', '9am', 'Maths', 'B2')",
              "SchoolTimetable.add_class('Monday', '9am', 'Maths', 'B2')"
            ],
            answer: 1,
            explanation: "Dot notation is how you call a method on an object: object.method(arguments). Python automatically passes the object as self — you do not include it yourself."
          },
          {
            type: "tf",
            question: "True or False: a method inside a class can call another method on the same object using self.method_name().",
            answer: true,
            explanation: "True. self gives the method access to the object, including all its other methods. This is how display_week() calls display_day() for each day."
          },
          {
            type: "fill",
            question: "What symbol and notation do you use to call a method on an object? (e.g. object __ method())",
            answers: [".", "dot", "dot notation"],
            explanation: "The dot (.) separates the object from the method name: timetable.display_week()"
          }
        ],
        content: `
<p>In this tutorial you have added behaviour to your application with methods, and built the school timetable feature. Here is what you now understand:</p>
<ul>
  <li>A <strong>method</strong> is a function that belongs to a class and defines what an object can do</li>
  <li>Every method takes <code>self</code> as its first parameter so it can access the object's own data</li>
  <li>Methods are called using dot notation: <code>object.method()</code></li>
  <li>One method can call other methods on the same object using <code>self.method_name()</code></li>
  <li>Python automatically passes the object as the first argument when you call a method</li>
</ul>
<p>In Tutorial 4 you will learn about <strong>encapsulation</strong> — a fundamental OOP principle about protecting data — and build both the study timetable and to-do list features.</p>
<p><strong>Before moving on:</strong> check your study_aid.py file matches the complete code shown below. Remove any test lines you added at the bottom — you only need the two class definitions going into Tutorial 4.</p>`,
        code: `# Your application so far
def _time_to_minutes(time_str):
    """Convert a time string like 9:30am or 11:00pm to total minutes since midnight."""
    time_str = time_str.strip().lower()
    period = "am" if time_str.endswith("am") else "pm"
    time_str = time_str[:-2]
    if ":" in time_str:
        h, m = time_str.split(":")
    else:
        h, m = time_str, "0"
    h, m = int(h), int(m)
    if period == "pm" and h != 12:
        h += 12
    if period == "am" and h == 12:
        h = 0
    return h * 60 + m


class Student:
    def __init__(self, name, year_level):
        self.name = name
        self.year_level = year_level
        self.subjects = []
        self.marks = []

    def introduce(self):
        print(f"Hi, I am {self.name}, a Year {self.year_level} student.")
        print(f"I am studying {len(self.subjects)} subject(s).")


class SchoolTimetable:
    def __init__(self):
        self.schedule = {
            "Monday": [], "Tuesday": [], "Wednesday": [],
            "Thursday": [], "Friday": []
        }

    def add_class(self, day, time, subject, room):
        day_map = {
            "mon": "Monday", "monday": "Monday",
            "tue": "Tuesday", "tuesday": "Tuesday",
            "wed": "Wednesday", "wednesday": "Wednesday",
            "thu": "Thursday", "thursday": "Thursday",
            "fri": "Friday", "friday": "Friday"
        }
        day = day_map.get(day.strip().lower())
        if not day:
            print("Error: please enter a valid weekday as Mon, Tue, Wed, Thu or Fri.")
            return
        entry = {"time": time, "subject": subject, "room": room}
        self.schedule[day].append(entry)
        self.schedule[day].sort(key=lambda e: _time_to_minutes(e["time"]))
        print(f"Added: {time} — {subject} ({room}) on {day}")

    def display_day(self, day):
        print()
        print(f"--- {day} ---")
        if not self.schedule[day]:
            print("  No classes scheduled.")
        else:
            for entry in self.schedule[day]:
                print(f"  {entry['time']:8} {entry['subject']} — Room {entry['room']}")

    def display_week(self):
        print()
        print("=== SCHOOL TIMETABLE ===")
        for day in self.schedule:
            self.display_day(day)`,
        codeExplain: null
      }
    ]
  },
  {
    id: 4,
    title: "Protecting Your Data",
    subtitle: "Encapsulation, Study Timetable and To-Do List",
    icon: "ti-shield-check",
    color: "amber",
    steps: [
      {
        title: "Recap: where we left off",
        terms: [],
        readOnly: true,
        content: `
<p>You now have a <code>Student</code> class and a <code>SchoolTimetable</code> class. In this tutorial you will build two more classes — <code>StudyTimetable</code> and <code>ToDoList</code> — while learning an important OOP principle: <strong>encapsulation</strong>.</p>
<p><strong>Open your study_aid.py file</strong> and confirm your Student and SchoolTimetable classes are there from previous tutorials. The code below shows the problem we are about to solve — <strong>read it, do not type it.</strong></p>`,
        code: `# Right now, nothing stops someone from doing this:
timetable = SchoolTimetable()
timetable.schedule = "I have replaced your schedule with this string!"

# Or this:
student = Student("Anika", 11)
student.year_level = -500   # A year level of -500 makes no sense

print(student.year_level)   # -500 — Python allowed this!`,
        codeExplain: `<p>Python lets you access and change any attribute from outside the class. This is a problem because there is nothing stopping invalid or nonsensical data from being written directly into an object's attributes.</p>
<p>In a small script this might seem harmless. In a larger application — or one used by students who might make mistakes — unprotected data leads to hard-to-find bugs.</p>`,
        fileSnapshot: `# study_aid.py

def _time_to_minutes(time_str):
    """Convert a time string like 9:30am or 11:00pm to total minutes since midnight."""
    time_str = time_str.strip().lower()
    period = "am" if time_str.endswith("am") else "pm"
    time_str = time_str[:-2]
    if ":" in time_str:
        h, m = time_str.split(":")
    else:
        h, m = time_str, "0"
    h, m = int(h), int(m)
    if period == "pm" and h != 12:
        h += 12
    if period == "am" and h == 12:
        h = 0
    return h * 60 + m


class Student:
    def __init__(self, name, year_level):
        self.name = name
        self.year_level = year_level
        self.subjects = []
        self.marks = []

    def introduce(self):
        print(f"Hi, I am {self.name}, a Year {self.year_level} student.")
        print(f"I am studying {len(self.subjects)} subject(s).")

class SchoolTimetable:
    def __init__(self):
        self.schedule = {
            "Monday": [],
            "Tuesday": [],
            "Wednesday": [],
            "Thursday": [],
            "Friday": []
        }

    def add_class(self, day, time, subject, room):
        day_map = {
            "mon": "Monday", "monday": "Monday",
            "tue": "Tuesday", "tuesday": "Tuesday",
            "wed": "Wednesday", "wednesday": "Wednesday",
            "thu": "Thursday", "thursday": "Thursday",
            "fri": "Friday", "friday": "Friday"
        }
        day = day_map.get(day.strip().lower())
        if not day:
            print("Error: please enter a valid weekday as Mon, Tue, Wed, Thu or Fri.")
            return
        entry = {"time": time, "subject": subject, "room": room}
        self.schedule[day].append(entry)
        self.schedule[day].sort(key=lambda e: _time_to_minutes(e["time"]))
        print(f"Added: {time} — {subject} ({room}) on {day}")

    def display_day(self, day):
        print()
        print(f"--- {day} ---")
        if not self.schedule[day]:
            print("  No classes scheduled.")
        else:
            for entry in self.schedule[day]:
                print(f"  {entry['time']:8} {entry['subject']} — Room {entry['room']}")

    def display_week(self):
        print()
        print("=== SCHOOL TIMETABLE ===")
        for day in self.schedule:
            self.display_day(day)`,
      },
      {
        title: "The problem with unprotected data",
        terms: [],
        readOnly: true,
        content: `
<p>Let us think about the study timetable specifically. Each study session should have a duration in hours. What if someone accidentally (or deliberately) sets that to a negative number?</p>
<p><strong>This is a reading step — do not add this code to your file.</strong> This example shows the unprotected version of the class so you can see the problem clearly before we fix it with encapsulation.</p>`,
        code: `# Without encapsulation:
class StudySession:
    def __init__(self, subject, hours):
        self.subject = subject
        self.hours = hours

session = StudySession("Maths", 2)
print(session.hours)   # 2 — correct

# Nothing stops this:
session.hours = -10
print(session.hours)   # -10 — nonsense, but Python allows it

# Or this:
session.hours = "lots"
print(session.hours)   # "lots" — completely wrong type, still allowed`,
        codeExplain: `<p>The object has no way to defend itself. Its attributes are completely exposed. Any code anywhere in the program can write anything it likes directly into <code>session.hours</code>.</p>
<p>This is the problem encapsulation solves. We want the object to be in charge of its own data — to validate it, protect it, and only allow changes through controlled channels.</p>`
      },
      {
        title: "What is Encapsulation?",
        terms: ["encapsulation"],
        readOnly: true,
        content: `
<p><strong>Encapsulation</strong> bundles data and the methods that work with that data together inside a class, while controlling how the outside world can access or modify that data.</p>
<p>In Python, we signal that an attribute is intended to be private (internal to the class) by starting its name with a single underscore: <code>_hours</code>. This is a convention — Python will not actually block access — but it communicates to other programmers: "do not touch this directly, use the methods I provide instead."</p>
<p>We then provide <strong>getter</strong> and <strong>setter</strong> methods to read and write the data safely. The setter can validate the value before accepting it.</p>
<p><strong>This is a reading step.</strong> The short example below introduces the pattern. Read it carefully and make sure you understand how the setter works before moving on — you will use this pattern in the next two steps.</p>`,
        code: `class StudySession:
    def __init__(self, subject, hours):
        self.subject = subject
        self._hours = 0            # private attribute, starts at 0
        self.set_hours(hours)      # use the setter immediately

    def set_hours(self, hours):
        if not isinstance(hours, (int, float)):
            print("Error: hours must be a number.")
        elif hours <= 0:
            print("Error: hours must be a positive number.")
        elif hours > 12:
            print("Error: a study session cannot exceed 12 hours.")
        else:
            self._hours = hours
            print(f"Study session set: {self.subject} for {self._hours} hour(s).")

    def get_hours(self):
        return self._hours`,
        codeExplain: `<p><code>self._hours = 0</code> — The underscore prefix signals this is a private attribute. We initialise it to 0 before the setter validates the real value.</p>
<p><code>self.set_hours(hours)</code> — Instead of writing <code>self._hours = hours</code> directly in <code>__init__</code>, we call our own setter. This means the validation runs even during construction.</p>
<p><code>def set_hours(self, hours):</code> — The setter checks three conditions: is it a number? Is it positive? Is it reasonable? Only if all checks pass does it update <code>self._hours</code>.</p>
<p><code>def get_hours(self):</code> — The getter simply returns the private attribute. Having a method for this means we could add logic later (such as formatting) without changing the calling code.</p>`
      },
      {
        title: "Building the StudyTimetable class",
        terms: [],
        content: `
<p>Now let us build the full study timetable. It will hold a collection of study sessions and provide methods to add, view, and calculate total study hours — all with encapsulation in place.</p>
<p><strong>Add this class to your study_aid.py file, below the SchoolTimetable class.</strong> Start at the left edge with no indentation. Run the file after typing it — no output is expected yet, but Python will tell you immediately if there is a syntax error.</p>`,
        code: `class StudyTimetable:
    def __init__(self):
        self._sessions = []   # private — manage through methods only

    def add_session(self, day, subject, start_time, hours):
        day_map = {
            "mon": "Monday", "monday": "Monday",
            "tue": "Tuesday", "tuesday": "Tuesday",
            "wed": "Wednesday", "wednesday": "Wednesday",
            "thu": "Thursday", "thursday": "Thursday",
            "fri": "Friday", "friday": "Friday",
            "sat": "Saturday", "saturday": "Saturday",
            "sun": "Sunday", "sunday": "Sunday"
        }
        day = day_map.get(day.strip().lower())
        if not day:
            print("Error: please enter a valid day as Mon, Tue, Wed, Thu, Fri, Sat or Sun.")
            return
        if hours <= 0 or hours > 12:
            print("Error: hours must be between 1 and 12.")
            return
        session = {
            "day": day,
            "subject": subject,
            "start": start_time,
            "hours": hours
        }
        self._sessions.append(session)
        self._sessions.sort(key=lambda s: (_time_to_minutes(s["start"]), s["day"]))
        print(f"Study session added: {subject} on {day} at {start_time} for {hours}h")

    def get_sessions(self):
        return list(self._sessions)   # return a copy, not the original

    def total_hours(self):
        return sum(s["hours"] for s in self._sessions)

    def display(self):
        print()
        print("=== STUDY TIMETABLE ===")
        if not self._sessions:
            print("  No study sessions scheduled yet.")
            return
        for s in self._sessions:
            print(f"  {s['day']:12} {s['start']:8} {s['subject']:15} {s['hours']}h")
        print(f"  Total: {self.total_hours()} hours")`,
        codeExplain: `<p><code>self._sessions = []</code> — Private list. External code should not add to it directly — always through <code>add_session</code> so validation runs.</p>
<p><code>valid_days = [...]</code> and <code>day = day.strip().capitalize()</code> — Notice that <code>add_session</code> validates the day explicitly, just as <code>SchoolTimetable.add_class</code> does. Both methods now use a <code>day_map</code> dictionary that accepts either the 3-letter abbreviation (<code>Mon</code>, <code>Tue</code>, <code>Wed</code>, <code>Thu</code>, <code>Fri</code>, <code>Sat</code>, <code>Sun</code>) or the full name, in any capitalisation. <code>day.strip().lower()</code> normalises the input before the lookup, so <code>mon</code>, <code>Mon</code>, and <code>MON</code> all resolve to <code>"Monday"</code>. The value stored and displayed is always the full name. If the input does not match any key in the map, the method prints an error and returns without saving — invalid data is never stored. Note that study sessions include Saturday and Sunday — students study on weekends — so the map has all seven days, unlike the school timetable which only covers Monday to Friday.</p>
<p><code>self._sessions.sort(key=lambda s: (_time_to_minutes(s["start"]), s["day"]))</code> — After appending, the sessions list is sorted by two keys: first by start time (converted to minutes), then alphabetically by day as a tiebreaker if two sessions have the same start time. This is the same sort-on-insert pattern as <code>add_class</code> — the data is always kept in order so display is always correct regardless of the order entries were added.</p>
<p><code>return list(self._sessions)</code> — In <code>get_sessions</code>, we return a <em>copy</em> of the list, not the list itself. This prevents outside code from modifying the original list by manipulating what they receive.</p>
<p><code>sum(s["hours"] for s in self._sessions)</code> — A generator expression that adds up all the hours values across every session dictionary. It is a clean, Pythonic way to total a list of values.</p>`,
        fileSnapshot: `# study_aid.py

def _time_to_minutes(time_str):
    """Convert a time string like 9:30am or 11:00pm to total minutes since midnight."""
    time_str = time_str.strip().lower()
    period = "am" if time_str.endswith("am") else "pm"
    time_str = time_str[:-2]
    if ":" in time_str:
        h, m = time_str.split(":")
    else:
        h, m = time_str, "0"
    h, m = int(h), int(m)
    if period == "pm" and h != 12:
        h += 12
    if period == "am" and h == 12:
        h = 0
    return h * 60 + m


class Student:
    def __init__(self, name, year_level):
        self.name = name
        self.year_level = year_level
        self.subjects = []
        self.marks = []

    def introduce(self):
        print(f"Hi, I am {self.name}, a Year {self.year_level} student.")
        print(f"I am studying {len(self.subjects)} subject(s).")

class SchoolTimetable:
    def __init__(self):
        self.schedule = {
            "Monday": [],
            "Tuesday": [],
            "Wednesday": [],
            "Thursday": [],
            "Friday": []
        }

    def add_class(self, day, time, subject, room):
        day_map = {
            "mon": "Monday", "monday": "Monday",
            "tue": "Tuesday", "tuesday": "Tuesday",
            "wed": "Wednesday", "wednesday": "Wednesday",
            "thu": "Thursday", "thursday": "Thursday",
            "fri": "Friday", "friday": "Friday"
        }
        day = day_map.get(day.strip().lower())
        if not day:
            print("Error: please enter a valid weekday as Mon, Tue, Wed, Thu or Fri.")
            return
        entry = {"time": time, "subject": subject, "room": room}
        self.schedule[day].append(entry)
        self.schedule[day].sort(key=lambda e: _time_to_minutes(e["time"]))
        print(f"Added: {time} — {subject} ({room}) on {day}")

    def display_day(self, day):
        print()
        print(f"--- {day} ---")
        if not self.schedule[day]:
            print("  No classes scheduled.")
        else:
            for entry in self.schedule[day]:
                print(f"  {entry['time']:8} {entry['subject']} — Room {entry['room']}")

    def display_week(self):
        print()
        print("=== SCHOOL TIMETABLE ===")
        for day in self.schedule:
            self.display_day(day)

class StudyTimetable:
    def __init__(self):
        self._sessions = []

    def add_session(self, day, subject, start_time, hours):
        day_map = {
            "mon": "Monday", "monday": "Monday",
            "tue": "Tuesday", "tuesday": "Tuesday",
            "wed": "Wednesday", "wednesday": "Wednesday",
            "thu": "Thursday", "thursday": "Thursday",
            "fri": "Friday", "friday": "Friday",
            "sat": "Saturday", "saturday": "Saturday",
            "sun": "Sunday", "sunday": "Sunday"
        }
        day = day_map.get(day.strip().lower())
        if not day:
            print("Error: please enter a valid day as Mon, Tue, Wed, Thu, Fri, Sat or Sun.")
            return
        if hours <= 0 or hours > 12:
            print("Error: hours must be between 1 and 12.")
            return
        session = {
            "day": day,
            "subject": subject,
            "start": start_time,
            "hours": hours
        }
        self._sessions.append(session)
        self._sessions.sort(key=lambda s: (_time_to_minutes(s["start"]), s["day"]))
        print(f"Study session added: {subject} on {day} at {start_time} for {hours}h")

    def get_sessions(self):
        return list(self._sessions)

    def total_hours(self):
        return sum(s["hours"] for s in self._sessions)

    def display(self):
        print()
        print("=== STUDY TIMETABLE ===")
        if not self._sessions:
            print("  No study sessions scheduled yet.")
            return
        for s in self._sessions:
            print(f"  {s['day']:12} {s['start']:8} {s['subject']:15} {s['hours']}h")
        print(f"  Total: {self.total_hours()} hours")`,
      },
      {
        title: "Building the ToDoList class",
        terms: [],
        content: `
<p>The to-do list needs to support adding tasks, marking them done, and displaying only incomplete tasks. Encapsulation here means the list itself is protected — tasks can only be modified through the proper methods.</p>
<p><strong>Add this class to your study_aid.py file, below the StudyTimetable class.</strong> Again, start at the left edge. When you have typed it, run the file to check for errors before moving on.</p>`,
        code: `class ToDoList:
    def __init__(self):
        self._tasks = []   # private list of task dictionaries

    def add_task(self, description, priority="normal"):
        valid_priorities = ["low", "normal", "high"]
        if priority not in valid_priorities:
            print(f"Error: priority must be one of {valid_priorities}")
            return
        task = {
            "description": description,
            "priority": priority,
            "done": False
        }
        self._tasks.append(task)
        print(f"Task added: [{priority.upper()}] {description}")

    def complete_task(self, description):
        for task in self._tasks:
            if task["description"] == description:
                task["done"] = True
                print(f"Completed: {description}")
                return
        print(f"Task not found: {description}")

    def display_pending(self):
        print()
        print("=== TO-DO LIST ===")
        pending = [t for t in self._tasks if not t["done"]]
        if not pending:
            print("  All tasks complete!")
        else:
            for task in pending:
                marker = "!!!" if task["priority"] == "high" else "   "
                print(f"  {marker} [{task['priority'].upper():6}] {task['description']}")`,
        codeExplain: `<p><code>priority not in valid_priorities</code> — Validation before the task is created. If an invalid priority is given, we print an error and return early without adding anything.</p>
<p><code>task = {"description": ..., "priority": ..., "done": False}</code> — Each task is a dictionary. The <code>"done"</code> field starts as <code>False</code> and can only be set to <code>True</code> through the <code>complete_task</code> method.</p>
<p><code>[t for t in self._tasks if not t["done"]]</code> — A list comprehension that filters to only incomplete tasks. Reading left to right: "give me t, for each t in tasks, where t is not done."</p>`,
        fileSnapshot: `# study_aid.py

def _time_to_minutes(time_str):
    """Convert a time string like 9:30am or 11:00pm to total minutes since midnight."""
    time_str = time_str.strip().lower()
    period = "am" if time_str.endswith("am") else "pm"
    time_str = time_str[:-2]
    if ":" in time_str:
        h, m = time_str.split(":")
    else:
        h, m = time_str, "0"
    h, m = int(h), int(m)
    if period == "pm" and h != 12:
        h += 12
    if period == "am" and h == 12:
        h = 0
    return h * 60 + m


class Student:
    def __init__(self, name, year_level):
        self.name = name
        self.year_level = year_level
        self.subjects = []
        self.marks = []

    def introduce(self):
        print(f"Hi, I am {self.name}, a Year {self.year_level} student.")
        print(f"I am studying {len(self.subjects)} subject(s).")

class SchoolTimetable:
    def __init__(self):
        self.schedule = {
            "Monday": [],
            "Tuesday": [],
            "Wednesday": [],
            "Thursday": [],
            "Friday": []
        }

    def add_class(self, day, time, subject, room):
        day_map = {
            "mon": "Monday", "monday": "Monday",
            "tue": "Tuesday", "tuesday": "Tuesday",
            "wed": "Wednesday", "wednesday": "Wednesday",
            "thu": "Thursday", "thursday": "Thursday",
            "fri": "Friday", "friday": "Friday"
        }
        day = day_map.get(day.strip().lower())
        if not day:
            print("Error: please enter a valid weekday as Mon, Tue, Wed, Thu or Fri.")
            return
        entry = {"time": time, "subject": subject, "room": room}
        self.schedule[day].append(entry)
        self.schedule[day].sort(key=lambda e: _time_to_minutes(e["time"]))
        print(f"Added: {time} — {subject} ({room}) on {day}")

    def display_day(self, day):
        print()
        print(f"--- {day} ---")
        if not self.schedule[day]:
            print("  No classes scheduled.")
        else:
            for entry in self.schedule[day]:
                print(f"  {entry['time']:8} {entry['subject']} — Room {entry['room']}")

    def display_week(self):
        print()
        print("=== SCHOOL TIMETABLE ===")
        for day in self.schedule:
            self.display_day(day)

class StudyTimetable:
    def __init__(self):
        self._sessions = []

    def add_session(self, day, subject, start_time, hours):
        day_map = {
            "mon": "Monday", "monday": "Monday",
            "tue": "Tuesday", "tuesday": "Tuesday",
            "wed": "Wednesday", "wednesday": "Wednesday",
            "thu": "Thursday", "thursday": "Thursday",
            "fri": "Friday", "friday": "Friday",
            "sat": "Saturday", "saturday": "Saturday",
            "sun": "Sunday", "sunday": "Sunday"
        }
        day = day_map.get(day.strip().lower())
        if not day:
            print("Error: please enter a valid day as Mon, Tue, Wed, Thu, Fri, Sat or Sun.")
            return
        if hours <= 0 or hours > 12:
            print("Error: hours must be between 1 and 12.")
            return
        session = {
            "day": day,
            "subject": subject,
            "start": start_time,
            "hours": hours
        }
        self._sessions.append(session)
        self._sessions.sort(key=lambda s: (_time_to_minutes(s["start"]), s["day"]))
        print(f"Study session added: {subject} on {day} at {start_time} for {hours}h")

    def get_sessions(self):
        return list(self._sessions)

    def total_hours(self):
        return sum(s["hours"] for s in self._sessions)

    def display(self):
        print()
        print("=== STUDY TIMETABLE ===")
        if not self._sessions:
            print("  No study sessions scheduled yet.")
            return
        for s in self._sessions:
            print(f"  {s['day']:12} {s['start']:8} {s['subject']:15} {s['hours']}h")
        print(f"  Total: {self.total_hours()} hours")

class ToDoList:
    def __init__(self):
        self._tasks = []

    def add_task(self, description, priority="normal"):
        valid_priorities = ["low", "normal", "high"]
        if priority not in valid_priorities:
            print(f"Error: priority must be one of {valid_priorities}")
            return
        task = {
            "description": description,
            "priority": priority,
            "done": False
        }
        self._tasks.append(task)
        print(f"Task added: [{priority.upper()}] {description}")

    def complete_task(self, description):
        for task in self._tasks:
            if task["description"] == description:
                task["done"] = True
                print(f"Completed: {description}")
                return
        print(f"Task not found: {description}")

    def display_pending(self):
        print()
        print("=== TO-DO LIST ===")
        pending = [t for t in self._tasks if not t["done"]]
        if not pending:
            print("  All tasks complete!")
        else:
            for task in pending:
                marker = "!!!" if task["priority"] == "high" else "   "
                print(f"  {marker} [{task['priority'].upper():6}] {task['description']}")`,
      },
      {
        title: "What you built — Tutorial 4 summary",
        terms: [],
        quiz: [
          {
            type: "mcq",
            question: "What does the underscore prefix on an attribute (e.g. _hours) signal to other programmers?",
            options: [
              "The attribute is a number",
              "The attribute is intended to be private and should not be accessed directly from outside the class",
              "The attribute cannot be changed once set",
              "The attribute belongs to the class, not the object"
            ],
            answer: 1,
            explanation: "An underscore prefix is a convention that says 'treat this as private'. Python does not enforce it technically, but it is a clear signal that outside code should use the provided methods instead of accessing it directly."
          },
          {
            type: "tf",
            question: "True or False: encapsulation means hiding data inside an object and controlling access to it through methods.",
            answer: true,
            explanation: "True. Encapsulation bundles data and the methods that work on it together, and uses setter/getter methods to control how that data is read or changed."
          },
          {
            type: "fill",
            question: "What type of method validates and sets a value on an object? (setter or getter)",
            answers: ["setter", "a setter", "setter method"],
            explanation: "A setter method receives a new value, checks it is valid, and only applies it if it passes. This protects the object from ending up in an invalid state."
          }
        ],
        content: `
<p>In this tutorial you learned one of the most important principles in OOP and applied it to two new features. Here is what you now understand:</p>
<ul>
  <li><strong>Encapsulation</strong> bundles data and methods together and controls outside access to that data</li>
  <li>The underscore prefix (e.g. <code>_hours</code>) signals that an attribute is intended to be private</li>
  <li><strong>Setter methods</strong> (methods named <code>set_something</code> that write a value) validate data before accepting it, protecting the object from invalid state</li>
  <li>Returning a copy of a list (not the list itself) from a <strong>getter</strong> (a method named <code>get_something</code> that reads and returns a value) prevents unintended external modification</li>
</ul>
<p>In Tutorial 5, you will meet <strong>inheritance</strong> — a powerful way to build new classes on top of existing ones — and you will build the assessment tracker complete with due dates, scaffolds, and marks recording.</p>
<p><strong>Before moving on:</strong> add the test code below temporarily to the bottom of your file, run it to confirm all three classes work correctly, then delete those test lines before starting Tutorial 5.</p>`,
        code: `# Quick demonstration of all three classes working together
student = Student("Anika", 11)
school_tt = SchoolTimetable()
study_tt = StudyTimetable()
todo = ToDoList()

school_tt.add_class("Monday", "8:30am", "Maths", "A3")
study_tt.add_session("Sunday", "Maths", "4:00pm", 2)
todo.add_task("Review Chapter 5 notes", "high")
todo.add_task("Complete practice problems")

school_tt.display_week()
study_tt.display()
todo.display_pending()`,
        codeExplain: null
      }
    ]
  },
  {
    id: 5,
    title: "Building on What Exists",
    subtitle: "Inheritance, Assessments, Scaffolds and Marks",
    icon: "ti-subtask",
    color: "coral",
    steps: [
      {
        title: "Recap: where we left off",
        terms: [],
        readOnly: true,
        content: `
<p>Your application now has four classes: <code>Student</code>, <code>SchoolTimetable</code>, <code>StudyTimetable</code>, and <code>ToDoList</code>. In this tutorial you will build the assessment tracker — the most complex feature so far.</p>
<p><strong>Open your study_aid.py file</strong> and confirm all four classes are there. The code below explains the problem we are about to solve — <strong>read it, do not type it.</strong></p>`,
        code: `# We need two related things:
# 1. A general Task (anything on the to-do list)
# 2. An Assessment (a specific kind of task with extra details)

# An Assessment needs everything a Task has, PLUS:
# - A due date
# - A subject it belongs to
# - A scaffold (planning sections)
# - A mark and maximum mark

# Without inheritance, we would have to repeat all the Task code
# inside Assessment. That is messy and hard to maintain.`,
        codeExplain: `<p>Any time you find yourself copying code from one class into another, inheritance is usually the right solution. If the two things share significant common ground, one should inherit from the other.</p>`,
        fileSnapshot: `# study_aid.py

def _time_to_minutes(time_str):
    """Convert a time string like 9:30am or 11:00pm to total minutes since midnight."""
    time_str = time_str.strip().lower()
    period = "am" if time_str.endswith("am") else "pm"
    time_str = time_str[:-2]
    if ":" in time_str:
        h, m = time_str.split(":")
    else:
        h, m = time_str, "0"
    h, m = int(h), int(m)
    if period == "pm" and h != 12:
        h += 12
    if period == "am" and h == 12:
        h = 0
    return h * 60 + m


class Student:
    def __init__(self, name, year_level):
        self.name = name
        self.year_level = year_level
        self.subjects = []
        self.marks = []

    def introduce(self):
        print(f"Hi, I am {self.name}, a Year {self.year_level} student.")
        print(f"I am studying {len(self.subjects)} subject(s).")

class SchoolTimetable:
    def __init__(self):
        self.schedule = {
            "Monday": [],
            "Tuesday": [],
            "Wednesday": [],
            "Thursday": [],
            "Friday": []
        }

    def add_class(self, day, time, subject, room):
        day_map = {
            "mon": "Monday", "monday": "Monday",
            "tue": "Tuesday", "tuesday": "Tuesday",
            "wed": "Wednesday", "wednesday": "Wednesday",
            "thu": "Thursday", "thursday": "Thursday",
            "fri": "Friday", "friday": "Friday"
        }
        day = day_map.get(day.strip().lower())
        if not day:
            print("Error: please enter a valid weekday as Mon, Tue, Wed, Thu or Fri.")
            return
        entry = {"time": time, "subject": subject, "room": room}
        self.schedule[day].append(entry)
        self.schedule[day].sort(key=lambda e: _time_to_minutes(e["time"]))
        print(f"Added: {time} — {subject} ({room}) on {day}")

    def display_day(self, day):
        print()
        print(f"--- {day} ---")
        if not self.schedule[day]:
            print("  No classes scheduled.")
        else:
            for entry in self.schedule[day]:
                print(f"  {entry['time']:8} {entry['subject']} — Room {entry['room']}")

    def display_week(self):
        print()
        print("=== SCHOOL TIMETABLE ===")
        for day in self.schedule:
            self.display_day(day)

class StudyTimetable:
    def __init__(self):
        self._sessions = []

    def add_session(self, day, subject, start_time, hours):
        day_map = {
            "mon": "Monday", "monday": "Monday",
            "tue": "Tuesday", "tuesday": "Tuesday",
            "wed": "Wednesday", "wednesday": "Wednesday",
            "thu": "Thursday", "thursday": "Thursday",
            "fri": "Friday", "friday": "Friday",
            "sat": "Saturday", "saturday": "Saturday",
            "sun": "Sunday", "sunday": "Sunday"
        }
        day = day_map.get(day.strip().lower())
        if not day:
            print("Error: please enter a valid day as Mon, Tue, Wed, Thu, Fri, Sat or Sun.")
            return
        if hours <= 0 or hours > 12:
            print("Error: hours must be between 1 and 12.")
            return
        session = {
            "day": day,
            "subject": subject,
            "start": start_time,
            "hours": hours
        }
        self._sessions.append(session)
        self._sessions.sort(key=lambda s: (_time_to_minutes(s["start"]), s["day"]))
        print(f"Study session added: {subject} on {day} at {start_time} for {hours}h")

    def get_sessions(self):
        return list(self._sessions)

    def total_hours(self):
        return sum(s["hours"] for s in self._sessions)

    def display(self):
        print()
        print("=== STUDY TIMETABLE ===")
        if not self._sessions:
            print("  No study sessions scheduled yet.")
            return
        for s in self._sessions:
            print(f"  {s['day']:12} {s['start']:8} {s['subject']:15} {s['hours']}h")
        print(f"  Total: {self.total_hours()} hours")

class ToDoList:
    def __init__(self):
        self._tasks = []

    def add_task(self, description, priority="normal"):
        valid_priorities = ["low", "normal", "high"]
        if priority not in valid_priorities:
            print(f"Error: priority must be one of {valid_priorities}")
            return
        task = {
            "description": description,
            "priority": priority,
            "done": False
        }
        self._tasks.append(task)
        print(f"Task added: [{priority.upper()}] {description}")

    def complete_task(self, description):
        for task in self._tasks:
            if task["description"] == description:
                task["done"] = True
                print(f"Completed: {description}")
                return
        print(f"Task not found: {description}")

    def display_pending(self):
        print()
        print("=== TO-DO LIST ===")
        pending = [t for t in self._tasks if not t["done"]]
        if not pending:
            print("  All tasks complete!")
        else:
            for task in pending:
                marker = "!!!" if task["priority"] == "high" else "   "
                print(f"  {marker} [{task['priority'].upper():6}] {task['description']}")`,
      },
      {
        title: "The problem: repeating yourself",
        terms: [],
        readOnly: true,
        content: `
<p>Here is what the problem looks like without inheritance. Notice how much code is duplicated:</p>
<p><strong>This is a reading step — do not add this code to your file.</strong> This is the problem version. Look at how much of the Assessment class is identical to Task. Inheritance eliminates all of that repetition.</p>`,
        code: `# Without inheritance — lots of repeated code
class Task:
    def __init__(self, title, description, priority):
        self.title = title
        self.description = description
        self.priority = priority
        self.done = False

    def complete(self):
        self.done = True

    def display(self):
        print(f"[{self.priority.upper()}] {self.title}")


class Assessment:
    def __init__(self, title, description, priority, due_date, subject):
        # All of this is IDENTICAL to Task above — wasted code!
        self.title = title
        self.description = description
        self.priority = priority
        self.done = False
        # Plus the extra stuff:
        self.due_date = due_date
        self.subject = subject
        self.mark = None
        self.max_mark = None`,
        codeExplain: `<p>The first several lines of Assessment's <code>__init__</code> are identical to Task's. If we ever needed to change how a Task initialises, we would have to remember to change Assessment too — and every other class that duplicated that code. This is fragile and error-prone.</p>`
      },
      {
        title: "What is Inheritance?",
        terms: ["inheritance"],
        content: `
<p><strong>Inheritance</strong> lets you create a new class that automatically receives all the attributes and methods of an existing class, then adds its own on top. The existing class is called the <em>parent</em> (or base/super) class. The new class is called the <em>child</em> (or subclass).</p>
<p>The relationship is described as "is a": an Assessment <em>is a</em> Task. A Dog <em>is an</em> Animal. Whenever that "is a" sentence makes sense, inheritance is probably the right tool.</p>
<p>To inherit from a class in Python, you put the parent class name in parentheses after the child class name:</p>
<p><strong>Add the Task class to your study_aid.py file, below your existing four classes.</strong> Then add the initial Assessment class directly below it. Run the file — no output is expected yet.</p>`,
        code: `class Task:
    def __init__(self, title, description, priority="normal"):
        self.title = title
        self.description = description
        self.priority = priority
        self._done = False

    def complete(self):
        self._done = True
        print(f"Completed: {self.title}")

    def is_done(self):
        return self._done

    def display(self):
        status = "✓" if self._done else "○"
        print(f"  {status} [{self.priority.upper():6}] {self.title}")


# Assessment inherits everything from Task
class Assessment(Task):
    pass   # No new code yet — but Assessment already has complete(), is_done(), and display()!`,
        codeExplain: `<p><code>class Assessment(Task):</code> — The parentheses signal inheritance. Assessment now has every attribute and method that Task has, automatically, without rewriting anything.</p>
<p><code>pass</code> — Even with nothing added yet, Assessment inherits <code>complete()</code>, <code>is_done()</code>, and <code>display()</code> from Task. Even with nothing added yet, Assessment already has those methods available. You will see this in action in the next step.</p>`,
        fileSnapshot: `# study_aid.py

from datetime import datetime


def _time_to_minutes(time_str):
    """Convert a time string like 9:30am or 11:00pm to total minutes since midnight."""
    time_str = time_str.strip().lower()
    period = "am" if time_str.endswith("am") else "pm"
    time_str = time_str[:-2]
    if ":" in time_str:
        h, m = time_str.split(":")
    else:
        h, m = time_str, "0"
    h, m = int(h), int(m)
    if period == "pm" and h != 12:
        h += 12
    if period == "am" and h == 12:
        h = 0
    return h * 60 + m


class Student:
    def __init__(self, name, year_level):
        self.name = name
        self.year_level = year_level
        self.subjects = []
        self.marks = []

    def introduce(self):
        print(f"Hi, I am {self.name}, a Year {self.year_level} student.")
        print(f"I am studying {len(self.subjects)} subject(s).")

class SchoolTimetable:
    def __init__(self):
        self.schedule = {
            "Monday": [],
            "Tuesday": [],
            "Wednesday": [],
            "Thursday": [],
            "Friday": []
        }

    def add_class(self, day, time, subject, room):
        day_map = {
            "mon": "Monday", "monday": "Monday",
            "tue": "Tuesday", "tuesday": "Tuesday",
            "wed": "Wednesday", "wednesday": "Wednesday",
            "thu": "Thursday", "thursday": "Thursday",
            "fri": "Friday", "friday": "Friday"
        }
        day = day_map.get(day.strip().lower())
        if not day:
            print("Error: please enter a valid weekday as Mon, Tue, Wed, Thu or Fri.")
            return
        entry = {"time": time, "subject": subject, "room": room}
        self.schedule[day].append(entry)
        self.schedule[day].sort(key=lambda e: _time_to_minutes(e["time"]))
        print(f"Added: {time} — {subject} ({room}) on {day}")

    def display_day(self, day):
        print()
        print(f"--- {day} ---")
        if not self.schedule[day]:
            print("  No classes scheduled.")
        else:
            for entry in self.schedule[day]:
                print(f"  {entry['time']:8} {entry['subject']} — Room {entry['room']}")

    def display_week(self):
        print()
        print("=== SCHOOL TIMETABLE ===")
        for day in self.schedule:
            self.display_day(day)

class StudyTimetable:
    def __init__(self):
        self._sessions = []

    def add_session(self, day, subject, start_time, hours):
        day_map = {
            "mon": "Monday", "monday": "Monday",
            "tue": "Tuesday", "tuesday": "Tuesday",
            "wed": "Wednesday", "wednesday": "Wednesday",
            "thu": "Thursday", "thursday": "Thursday",
            "fri": "Friday", "friday": "Friday",
            "sat": "Saturday", "saturday": "Saturday",
            "sun": "Sunday", "sunday": "Sunday"
        }
        day = day_map.get(day.strip().lower())
        if not day:
            print("Error: please enter a valid day as Mon, Tue, Wed, Thu, Fri, Sat or Sun.")
            return
        if hours <= 0 or hours > 12:
            print("Error: hours must be between 1 and 12.")
            return
        session = {
            "day": day,
            "subject": subject,
            "start": start_time,
            "hours": hours
        }
        self._sessions.append(session)
        self._sessions.sort(key=lambda s: (_time_to_minutes(s["start"]), s["day"]))
        print(f"Study session added: {subject} on {day} at {start_time} for {hours}h")

    def get_sessions(self):
        return list(self._sessions)

    def total_hours(self):
        return sum(s["hours"] for s in self._sessions)

    def display(self):
        print()
        print("=== STUDY TIMETABLE ===")
        if not self._sessions:
            print("  No study sessions scheduled yet.")
            return
        for s in self._sessions:
            print(f"  {s['day']:12} {s['start']:8} {s['subject']:15} {s['hours']}h")
        print(f"  Total: {self.total_hours()} hours")

class ToDoList:
    def __init__(self):
        self._tasks = []

    def add_task(self, description, priority="normal"):
        valid_priorities = ["low", "normal", "high"]
        if priority not in valid_priorities:
            print(f"Error: priority must be one of {valid_priorities}")
            return
        task = {
            "description": description,
            "priority": priority,
            "done": False
        }
        self._tasks.append(task)
        print(f"Task added: [{priority.upper()}] {description}")

    def complete_task(self, description):
        for task in self._tasks:
            if task["description"] == description:
                task["done"] = True
                print(f"Completed: {description}")
                return
        print(f"Task not found: {description}")

    def display_pending(self):
        print()
        print("=== TO-DO LIST ===")
        pending = [t for t in self._tasks if not t["done"]]
        if not pending:
            print("  All tasks complete!")
        else:
            for task in pending:
                marker = "!!!" if task["priority"] == "high" else "   "
                print(f"  {marker} [{task['priority'].upper():6}] {task['description']}")

class Task:
    def __init__(self, title, description, priority="normal"):
        self.title = title
        self.description = description
        self.priority = priority
        self._done = False

    def complete(self):
        self._done = True
        print(f"Completed: {self.title}")

    def is_done(self):
        return self._done

    def display(self):
        status = "✓" if self._done else "○"
        print(f"  {status} [{self.priority.upper():6}] {self.title}")

class Assessment(Task):
    pass`,
      },
      {
        title: "Introducing super() — connecting to the parent",
        terms: [],
        content: `
<p>When the child class needs its own <code>__init__</code> (because it has extra attributes to set up), it should call the parent's <code>__init__</code> first using <code>super()</code>. This ensures the parent class sets up its part of the object before the child adds its own extras.</p>
<p><code>super()</code> gives you a reference to the parent class so you can call its methods without repeating any code.</p>
<p><strong>Replace the Assessment class you just typed</strong> (the one with just <code>pass</code>) with the expanded version below. Keep the Task class exactly as it is above it — only the Assessment class changes.</p>`,
        code: `class Assessment(Task):
    def __init__(self, title, description, due_date, subject, priority="normal"):
        # First, let Task handle what Task knows about
        super().__init__(title, description, priority)

        # Then, add what only Assessment knows about
        self.due_date = due_date
        self.subject = subject
        self._mark = None
        self._max_mark = None
        self._scaffold = {}

    def set_mark(self, mark, max_mark):
        if mark < 0 or max_mark <= 0 or mark > max_mark:
            print("Error: invalid mark values.")
            return
        self._mark = mark
        self._max_mark = max_mark
        percentage = round((mark / max_mark) * 100, 1)
        print(f"Mark recorded: {mark}/{max_mark} ({percentage}%)")`,
        codeExplain: `<p><code>super().__init__(title, description, priority)</code> — This calls Task's <code>__init__</code> method. Task sets up <code>self.title</code>, <code>self.description</code>, <code>self.priority</code>, and <code>self._done</code>. We do not need to repeat that code at all.</p>
<p>After <code>super().__init__</code> completes, we add the Assessment-specific attributes: due date, subject, mark, max_mark, and scaffold.</p>
<p><code>self._mark = None</code> — We use <code>None</code> as the starting value for mark because the assessment has not been marked yet. <code>None</code> is Python's way of saying "no value yet."</p>`,
        fileSnapshot: `# study_aid.py

from datetime import datetime


def _time_to_minutes(time_str):
    """Convert a time string like 9:30am or 11:00pm to total minutes since midnight."""
    time_str = time_str.strip().lower()
    period = "am" if time_str.endswith("am") else "pm"
    time_str = time_str[:-2]
    if ":" in time_str:
        h, m = time_str.split(":")
    else:
        h, m = time_str, "0"
    h, m = int(h), int(m)
    if period == "pm" and h != 12:
        h += 12
    if period == "am" and h == 12:
        h = 0
    return h * 60 + m


class Student:
    def __init__(self, name, year_level):
        self.name = name
        self.year_level = year_level
        self.subjects = []
        self.marks = []

    def introduce(self):
        print(f"Hi, I am {self.name}, a Year {self.year_level} student.")
        print(f"I am studying {len(self.subjects)} subject(s).")

class SchoolTimetable:
    def __init__(self):
        self.schedule = {
            "Monday": [],
            "Tuesday": [],
            "Wednesday": [],
            "Thursday": [],
            "Friday": []
        }

    def add_class(self, day, time, subject, room):
        day_map = {
            "mon": "Monday", "monday": "Monday",
            "tue": "Tuesday", "tuesday": "Tuesday",
            "wed": "Wednesday", "wednesday": "Wednesday",
            "thu": "Thursday", "thursday": "Thursday",
            "fri": "Friday", "friday": "Friday"
        }
        day = day_map.get(day.strip().lower())
        if not day:
            print("Error: please enter a valid weekday as Mon, Tue, Wed, Thu or Fri.")
            return
        entry = {"time": time, "subject": subject, "room": room}
        self.schedule[day].append(entry)
        self.schedule[day].sort(key=lambda e: _time_to_minutes(e["time"]))
        print(f"Added: {time} — {subject} ({room}) on {day}")

    def display_day(self, day):
        print()
        print(f"--- {day} ---")
        if not self.schedule[day]:
            print("  No classes scheduled.")
        else:
            for entry in self.schedule[day]:
                print(f"  {entry['time']:8} {entry['subject']} — Room {entry['room']}")

    def display_week(self):
        print()
        print("=== SCHOOL TIMETABLE ===")
        for day in self.schedule:
            self.display_day(day)

class StudyTimetable:
    def __init__(self):
        self._sessions = []

    def add_session(self, day, subject, start_time, hours):
        day_map = {
            "mon": "Monday", "monday": "Monday",
            "tue": "Tuesday", "tuesday": "Tuesday",
            "wed": "Wednesday", "wednesday": "Wednesday",
            "thu": "Thursday", "thursday": "Thursday",
            "fri": "Friday", "friday": "Friday",
            "sat": "Saturday", "saturday": "Saturday",
            "sun": "Sunday", "sunday": "Sunday"
        }
        day = day_map.get(day.strip().lower())
        if not day:
            print("Error: please enter a valid day as Mon, Tue, Wed, Thu, Fri, Sat or Sun.")
            return
        if hours <= 0 or hours > 12:
            print("Error: hours must be between 1 and 12.")
            return
        session = {
            "day": day,
            "subject": subject,
            "start": start_time,
            "hours": hours
        }
        self._sessions.append(session)
        self._sessions.sort(key=lambda s: (_time_to_minutes(s["start"]), s["day"]))
        print(f"Study session added: {subject} on {day} at {start_time} for {hours}h")

    def get_sessions(self):
        return list(self._sessions)

    def total_hours(self):
        return sum(s["hours"] for s in self._sessions)

    def display(self):
        print()
        print("=== STUDY TIMETABLE ===")
        if not self._sessions:
            print("  No study sessions scheduled yet.")
            return
        for s in self._sessions:
            print(f"  {s['day']:12} {s['start']:8} {s['subject']:15} {s['hours']}h")
        print(f"  Total: {self.total_hours()} hours")

class ToDoList:
    def __init__(self):
        self._tasks = []

    def add_task(self, description, priority="normal"):
        valid_priorities = ["low", "normal", "high"]
        if priority not in valid_priorities:
            print(f"Error: priority must be one of {valid_priorities}")
            return
        task = {
            "description": description,
            "priority": priority,
            "done": False
        }
        self._tasks.append(task)
        print(f"Task added: [{priority.upper()}] {description}")

    def complete_task(self, description):
        for task in self._tasks:
            if task["description"] == description:
                task["done"] = True
                print(f"Completed: {description}")
                return
        print(f"Task not found: {description}")

    def display_pending(self):
        print()
        print("=== TO-DO LIST ===")
        pending = [t for t in self._tasks if not t["done"]]
        if not pending:
            print("  All tasks complete!")
        else:
            for task in pending:
                marker = "!!!" if task["priority"] == "high" else "   "
                print(f"  {marker} [{task['priority'].upper():6}] {task['description']}")

class Task:
    def __init__(self, title, description, priority="normal"):
        self.title = title
        self.description = description
        self.priority = priority
        self._done = False

    def complete(self):
        self._done = True
        print(f"Completed: {self.title}")

    def is_done(self):
        return self._done

    def display(self):
        status = "✓" if self._done else "○"
        print(f"  {status} [{self.priority.upper():6}] {self.title}")

class Assessment(Task):
    def __init__(self, title, description, due_date, subject, priority="normal"):
        super().__init__(title, description, priority)
        self.due_date = due_date
        self.subject = subject
        self._mark = None
        self._max_mark = None
        self._scaffold = {}

    def set_mark(self, mark, max_mark):
        if mark < 0 or max_mark <= 0 or mark > max_mark:
            print("Error: invalid mark values.")
            return
        self._mark = mark
        self._max_mark = max_mark
        percentage = round((mark / max_mark) * 100, 1)
        print(f"Mark recorded: {mark}/{max_mark} ({percentage}%)")

    def display(self):
        status = "✓" if self.is_done() else "○"
        mark_info = ""
        if self._mark is not None:
            pct = round((self._mark / self._max_mark) * 100, 1)
            mark_info = f" | Mark: {self._mark}/{self._max_mark} ({pct}%)"
        print(f"  {status} {self.subject:15} {self.title}")
        print(f"     Due: {self.due_date}{mark_info}")`,
      },
      {
        title: "Adding the scaffold feature",
        terms: [],
        content: `
<p>A <strong>scaffold</strong> is a structured planning tool — a set of named sections (like "Key ideas" or "Evidence or examples") that a student fills in before writing their assessment response. Think of it as a built-in planning template that lives inside each Assessment object.</p>
<p>To add this feature, you need to make three changes to the Assessment class:</p>
<ol>
  <li><strong>Add <code>self._scaffold</code> to <code>__init__</code></strong> — a dictionary with section names as keys and empty strings as values. This means every new Assessment automatically comes with a blank planning template ready to fill in.</li>
  <li><strong>Add <code>add_scaffold_note(section, notes)</code></strong> — a method that lets the student write into one section of the scaffold. It validates that the section name is real before accepting the note.</li>
  <li><strong>Add <code>display_scaffold()</code></strong> — a method that prints the whole scaffold, showing either the student's notes or <em>(not yet completed)</em> for any empty sections.</li>
</ol>
<p>The <code>set_mark</code> and <code>display</code> methods are already in your class from the previous step — they are included below so you have the complete picture in one place.</p>
<p><strong>Replace your current Assessment class</strong> with the expanded version below. The Task class above it stays unchanged. Copy it carefully, paying close attention to indentation.</p>`,
        code: `class Assessment(Task):
    def __init__(self, title, description, due_date, subject, priority="normal"):
        super().__init__(title, description, priority)
        self.due_date = due_date
        self.subject = subject
        self._mark = None
        self._max_mark = None
        self._scaffold = {
            "Task understanding": "",
            "Key ideas": "",
            "Evidence or examples": "",
            "Structure plan": "",
            "Notes": ""
        }

    def add_scaffold_note(self, section, notes):
        if section not in self._scaffold:
            print(f"Error: '{section}' is not a scaffold section.")
            print(f"Available sections: {list(self._scaffold.keys())}")
            return
        self._scaffold[section] = notes
        print(f"Scaffold updated: {section}")

    def display_scaffold(self):
        print()
        print(f"=== SCAFFOLD: {self.title} ===")
        for section, content in self._scaffold.items():
            print()
            print(f"  {section}:")
            if content:
                print(f"    {content}")
            else:
                print("    (not yet completed)")

    def set_mark(self, mark, max_mark):
        if mark < 0 or max_mark <= 0 or mark > max_mark:
            print("Error: invalid mark values.")
            return
        self._mark = mark
        self._max_mark = max_mark

    def display(self):
        status = "✓" if self.is_done() else "○"
        mark_info = ""
        if self._mark is not None:
            pct = round((self._mark / self._max_mark) * 100, 1)
            mark_info = f" | Mark: {self._mark}/{self._max_mark} ({pct}%)"
        print(f"  {status} {self.subject:15} {self.title}")
        print(f"     Due: {self.due_date}{mark_info}")`,
        codeExplain: `<p><code>self._scaffold = {...}</code> — A dictionary with pre-set section names as keys and empty strings as values. The student fills in each section as they plan.</p>
<p><code>if section not in self._scaffold:</code> — Validation prevents writing to a non-existent scaffold section. The error message even shows the valid options.</p>
<p><code>def display(self):</code> — Assessment <em>overrides</em> the Task <code>display</code> method with a richer version that shows the due date and mark. This is the beginning of polymorphism, which we cover fully in Tutorial 6.</p>`,
        fileSnapshot: `# study_aid.py

from datetime import datetime


def _time_to_minutes(time_str):
    """Convert a time string like 9:30am or 11:00pm to total minutes since midnight."""
    time_str = time_str.strip().lower()
    period = "am" if time_str.endswith("am") else "pm"
    time_str = time_str[:-2]
    if ":" in time_str:
        h, m = time_str.split(":")
    else:
        h, m = time_str, "0"
    h, m = int(h), int(m)
    if period == "pm" and h != 12:
        h += 12
    if period == "am" and h == 12:
        h = 0
    return h * 60 + m


class Student:
    def __init__(self, name, year_level):
        self.name = name
        self.year_level = year_level
        self.subjects = []
        self.marks = []

    def introduce(self):
        print(f"Hi, I am {self.name}, a Year {self.year_level} student.")
        print(f"I am studying {len(self.subjects)} subject(s).")

class SchoolTimetable:
    def __init__(self):
        self.schedule = {
            "Monday": [],
            "Tuesday": [],
            "Wednesday": [],
            "Thursday": [],
            "Friday": []
        }

    def add_class(self, day, time, subject, room):
        day_map = {
            "mon": "Monday", "monday": "Monday",
            "tue": "Tuesday", "tuesday": "Tuesday",
            "wed": "Wednesday", "wednesday": "Wednesday",
            "thu": "Thursday", "thursday": "Thursday",
            "fri": "Friday", "friday": "Friday"
        }
        day = day_map.get(day.strip().lower())
        if not day:
            print("Error: please enter a valid weekday as Mon, Tue, Wed, Thu or Fri.")
            return
        entry = {"time": time, "subject": subject, "room": room}
        self.schedule[day].append(entry)
        self.schedule[day].sort(key=lambda e: _time_to_minutes(e["time"]))
        print(f"Added: {time} — {subject} ({room}) on {day}")

    def display_day(self, day):
        print()
        print(f"--- {day} ---")
        if not self.schedule[day]:
            print("  No classes scheduled.")
        else:
            for entry in self.schedule[day]:
                print(f"  {entry['time']:8} {entry['subject']} — Room {entry['room']}")

    def display_week(self):
        print()
        print("=== SCHOOL TIMETABLE ===")
        for day in self.schedule:
            self.display_day(day)

class StudyTimetable:
    def __init__(self):
        self._sessions = []

    def add_session(self, day, subject, start_time, hours):
        day_map = {
            "mon": "Monday", "monday": "Monday",
            "tue": "Tuesday", "tuesday": "Tuesday",
            "wed": "Wednesday", "wednesday": "Wednesday",
            "thu": "Thursday", "thursday": "Thursday",
            "fri": "Friday", "friday": "Friday",
            "sat": "Saturday", "saturday": "Saturday",
            "sun": "Sunday", "sunday": "Sunday"
        }
        day = day_map.get(day.strip().lower())
        if not day:
            print("Error: please enter a valid day as Mon, Tue, Wed, Thu, Fri, Sat or Sun.")
            return
        if hours <= 0 or hours > 12:
            print("Error: hours must be between 1 and 12.")
            return
        session = {
            "day": day,
            "subject": subject,
            "start": start_time,
            "hours": hours
        }
        self._sessions.append(session)
        self._sessions.sort(key=lambda s: (_time_to_minutes(s["start"]), s["day"]))
        print(f"Study session added: {subject} on {day} at {start_time} for {hours}h")

    def get_sessions(self):
        return list(self._sessions)

    def total_hours(self):
        return sum(s["hours"] for s in self._sessions)

    def display(self):
        print()
        print("=== STUDY TIMETABLE ===")
        if not self._sessions:
            print("  No study sessions scheduled yet.")
            return
        for s in self._sessions:
            print(f"  {s['day']:12} {s['start']:8} {s['subject']:15} {s['hours']}h")
        print(f"  Total: {self.total_hours()} hours")

class ToDoList:
    def __init__(self):
        self._tasks = []

    def add_task(self, description, priority="normal"):
        valid_priorities = ["low", "normal", "high"]
        if priority not in valid_priorities:
            print(f"Error: priority must be one of {valid_priorities}")
            return
        task = {
            "description": description,
            "priority": priority,
            "done": False
        }
        self._tasks.append(task)
        print(f"Task added: [{priority.upper()}] {description}")

    def complete_task(self, description):
        for task in self._tasks:
            if task["description"] == description:
                task["done"] = True
                print(f"Completed: {description}")
                return
        print(f"Task not found: {description}")

    def display_pending(self):
        print()
        print("=== TO-DO LIST ===")
        pending = [t for t in self._tasks if not t["done"]]
        if not pending:
            print("  All tasks complete!")
        else:
            for task in pending:
                marker = "!!!" if task["priority"] == "high" else "   "
                print(f"  {marker} [{task['priority'].upper():6}] {task['description']}")

class Task:
    def __init__(self, title, description, priority="normal"):
        self.title = title
        self.description = description
        self.priority = priority
        self._done = False

    def complete(self):
        self._done = True
        print(f"Completed: {self.title}")

    def is_done(self):
        return self._done

    def display(self):
        status = "✓" if self._done else "○"
        print(f"  {status} [{self.priority.upper():6}] {self.title}")

class Assessment(Task):
    def __init__(self, title, description, due_date, subject, priority="normal"):
        super().__init__(title, description, priority)
        self.due_date = due_date
        self.subject = subject
        self._mark = None
        self._max_mark = None
        self._scaffold = {
            "Task understanding": "",
            "Key ideas": "",
            "Evidence or examples": "",
            "Structure plan": "",
            "Notes": ""
        }

    def add_scaffold_note(self, section, notes):
        if section not in self._scaffold:
            print(f"Error: '{section}' is not a scaffold section.")
            print(f"Available sections: {list(self._scaffold.keys())}")
            return
        self._scaffold[section] = notes
        print(f"Scaffold updated: {section}")

    def display_scaffold(self):
        print()
        print(f"=== SCAFFOLD: {self.title} ===")
        for section, content in self._scaffold.items():
            print()
            print(f"  {section}:")
            if content:
                print(f"    {content}")
            else:
                print("    (not yet completed)")

    def set_mark(self, mark, max_mark):
        if mark < 0 or max_mark <= 0 or mark > max_mark:
            print("Error: invalid mark values.")
            return
        self._mark = mark
        self._max_mark = max_mark

    def display(self):
        status = "✓" if self.is_done() else "○"
        mark_info = ""
        if self._mark is not None:
            pct = round((self._mark / self._max_mark) * 100, 1)
            mark_info = f" | Mark: {self._mark}/{self._max_mark} ({pct}%)"
        print(f"  {status} {self.subject:15} {self.title}")
        print(f"     Due: {self.due_date}{mark_info}")`,
      },
      {
        title: "Sorting assessments by due date",
        terms: [],
        content: `
<p>The assessment list should always show the most urgent item first — nearest due date at the top. Let us build an <code>AssessmentTracker</code> class that manages a collection of assessments and keeps them sorted.</p>
<p><strong>Add the AssessmentTracker class to your study_aid.py file, below the Assessment class.</strong> Also add the <code>from datetime import datetime</code> line to the very top of your file — before all the classes. Run the file to check for errors.</p>`,
        code: `from datetime import datetime

class AssessmentTracker:
    def __init__(self):
        self._assessments = []

    def add_assessment(self, assessment):
        self._assessments.append(assessment)
        self._sort_by_due_date()
        print(f"Assessment added: {assessment.title} (due {assessment.due_date})")

    def _sort_by_due_date(self):
        self._assessments.sort(
            key=lambda a: datetime.strptime(a.due_date, "%d/%m/%y")
        )

    def display_all(self):
        print()
        print("=== ASSESSMENTS (by due date) ===")
        if not self._assessments:
            print("  No assessments added yet.")
            return
        for assessment in self._assessments:
            assessment.display()

    def get_upcoming(self, n=3):
        incomplete = [a for a in self._assessments if not a.is_done()]
        return incomplete[:n]`,
        codeExplain: `<p><code>from datetime import datetime</code> — We import Python's datetime module to parse date strings properly so sorting works correctly (sorting date strings alphabetically would give wrong results).</p>
<p><code>self._assessments.sort(key=lambda a: datetime.strptime(a.due_date, "%d/%m/%y"))</code> — The <code>key</code> parameter tells sort() what to sort by. The lambda converts each assessment's due_date string into a real datetime object for accurate comparison.</p>
<p><code>def _sort_by_due_date(self):</code> — Note the underscore prefix. This is a private method — it is an internal implementation detail that outside code should not call directly. It runs automatically every time an assessment is added.</p>
<p><code>incomplete[:n]</code> — Slice notation: take only the first n items from the list.</p>`,
        fileSnapshot: `# study_aid.py

from datetime import datetime


def _time_to_minutes(time_str):
    """Convert a time string like 9:30am or 11:00pm to total minutes since midnight."""
    time_str = time_str.strip().lower()
    period = "am" if time_str.endswith("am") else "pm"
    time_str = time_str[:-2]
    if ":" in time_str:
        h, m = time_str.split(":")
    else:
        h, m = time_str, "0"
    h, m = int(h), int(m)
    if period == "pm" and h != 12:
        h += 12
    if period == "am" and h == 12:
        h = 0
    return h * 60 + m


class Student:
    def __init__(self, name, year_level):
        self.name = name
        self.year_level = year_level
        self.subjects = []
        self.marks = []

    def introduce(self):
        print(f"Hi, I am {self.name}, a Year {self.year_level} student.")
        print(f"I am studying {len(self.subjects)} subject(s).")

class SchoolTimetable:
    def __init__(self):
        self.schedule = {
            "Monday": [],
            "Tuesday": [],
            "Wednesday": [],
            "Thursday": [],
            "Friday": []
        }

    def add_class(self, day, time, subject, room):
        day_map = {
            "mon": "Monday", "monday": "Monday",
            "tue": "Tuesday", "tuesday": "Tuesday",
            "wed": "Wednesday", "wednesday": "Wednesday",
            "thu": "Thursday", "thursday": "Thursday",
            "fri": "Friday", "friday": "Friday"
        }
        day = day_map.get(day.strip().lower())
        if not day:
            print("Error: please enter a valid weekday as Mon, Tue, Wed, Thu or Fri.")
            return
        entry = {"time": time, "subject": subject, "room": room}
        self.schedule[day].append(entry)
        self.schedule[day].sort(key=lambda e: _time_to_minutes(e["time"]))
        print(f"Added: {time} — {subject} ({room}) on {day}")

    def display_day(self, day):
        print()
        print(f"--- {day} ---")
        if not self.schedule[day]:
            print("  No classes scheduled.")
        else:
            for entry in self.schedule[day]:
                print(f"  {entry['time']:8} {entry['subject']} — Room {entry['room']}")

    def display_week(self):
        print()
        print("=== SCHOOL TIMETABLE ===")
        for day in self.schedule:
            self.display_day(day)

class StudyTimetable:
    def __init__(self):
        self._sessions = []

    def add_session(self, day, subject, start_time, hours):
        day_map = {
            "mon": "Monday", "monday": "Monday",
            "tue": "Tuesday", "tuesday": "Tuesday",
            "wed": "Wednesday", "wednesday": "Wednesday",
            "thu": "Thursday", "thursday": "Thursday",
            "fri": "Friday", "friday": "Friday",
            "sat": "Saturday", "saturday": "Saturday",
            "sun": "Sunday", "sunday": "Sunday"
        }
        day = day_map.get(day.strip().lower())
        if not day:
            print("Error: please enter a valid day as Mon, Tue, Wed, Thu, Fri, Sat or Sun.")
            return
        if hours <= 0 or hours > 12:
            print("Error: hours must be between 1 and 12.")
            return
        session = {
            "day": day,
            "subject": subject,
            "start": start_time,
            "hours": hours
        }
        self._sessions.append(session)
        self._sessions.sort(key=lambda s: (_time_to_minutes(s["start"]), s["day"]))
        print(f"Study session added: {subject} on {day} at {start_time} for {hours}h")

    def get_sessions(self):
        return list(self._sessions)

    def total_hours(self):
        return sum(s["hours"] for s in self._sessions)

    def display(self):
        print()
        print("=== STUDY TIMETABLE ===")
        if not self._sessions:
            print("  No study sessions scheduled yet.")
            return
        for s in self._sessions:
            print(f"  {s['day']:12} {s['start']:8} {s['subject']:15} {s['hours']}h")
        print(f"  Total: {self.total_hours()} hours")

class ToDoList:
    def __init__(self):
        self._tasks = []

    def add_task(self, description, priority="normal"):
        valid_priorities = ["low", "normal", "high"]
        if priority not in valid_priorities:
            print(f"Error: priority must be one of {valid_priorities}")
            return
        task = {
            "description": description,
            "priority": priority,
            "done": False
        }
        self._tasks.append(task)
        print(f"Task added: [{priority.upper()}] {description}")

    def complete_task(self, description):
        for task in self._tasks:
            if task["description"] == description:
                task["done"] = True
                print(f"Completed: {description}")
                return
        print(f"Task not found: {description}")

    def display_pending(self):
        print()
        print("=== TO-DO LIST ===")
        pending = [t for t in self._tasks if not t["done"]]
        if not pending:
            print("  All tasks complete!")
        else:
            for task in pending:
                marker = "!!!" if task["priority"] == "high" else "   "
                print(f"  {marker} [{task['priority'].upper():6}] {task['description']}")

class Task:
    def __init__(self, title, description, priority="normal"):
        self.title = title
        self.description = description
        self.priority = priority
        self._done = False

    def complete(self):
        self._done = True
        print(f"Completed: {self.title}")

    def is_done(self):
        return self._done

    def display(self):
        status = "✓" if self._done else "○"
        print(f"  {status} [{self.priority.upper():6}] {self.title}")

class Assessment(Task):
    def __init__(self, title, description, due_date, subject, priority="normal"):
        super().__init__(title, description, priority)
        self.due_date = due_date
        self.subject = subject
        self._mark = None
        self._max_mark = None
        self._scaffold = {
            "Task understanding": "",
            "Key ideas": "",
            "Evidence or examples": "",
            "Structure plan": "",
            "Notes": ""
        }

    def add_scaffold_note(self, section, notes):
        if section not in self._scaffold:
            print(f"Error: '{section}' is not a scaffold section.")
            print(f"Available sections: {list(self._scaffold.keys())}")
            return
        self._scaffold[section] = notes
        print(f"Scaffold updated: {section}")

    def display_scaffold(self):
        print()
        print(f"=== SCAFFOLD: {self.title} ===")
        for section, content in self._scaffold.items():
            print()
            print(f"  {section}:")
            if content:
                print(f"    {content}")
            else:
                print("    (not yet completed)")

    def set_mark(self, mark, max_mark):
        if mark < 0 or max_mark <= 0 or mark > max_mark:
            print("Error: invalid mark values.")
            return
        self._mark = mark
        self._max_mark = max_mark

    def display(self):
        status = "✓" if self.is_done() else "○"
        mark_info = ""
        if self._mark is not None:
            pct = round((self._mark / self._max_mark) * 100, 1)
            mark_info = f" | Mark: {self._mark}/{self._max_mark} ({pct}%)"
        print(f"  {status} {self.subject:15} {self.title}")
        print(f"     Due: {self.due_date}{mark_info}")

class AssessmentTracker:
    def __init__(self):
        self._assessments = []

    def add_assessment(self, assessment):
        self._assessments.append(assessment)
        self._sort_by_due_date()
        print(f"Assessment added: {assessment.title} (due {assessment.due_date})")

    def _sort_by_due_date(self):
        self._assessments.sort(
            key=lambda a: datetime.strptime(a.due_date, "%d/%m/%y")
        )

    def display_all(self):
        print()
        print("=== ASSESSMENTS (by due date) ===")
        if not self._assessments:
            print("  No assessments added yet.")
            return
        for assessment in self._assessments:
            assessment.display()

    def get_upcoming(self, n=3):
        incomplete = [a for a in self._assessments if not a.is_done()]
        return incomplete[:n]`,
      },
      {
        title: "Putting it all together",
        terms: [],
        content: `
<p>Let us see the full assessment system in action — creating assessments, adding scaffold notes, recording marks, and displaying everything in due date order.</p>
<p><strong>Add the test code below temporarily to the bottom of your study_aid.py file</strong> — below all classes, at the left edge. Run it and check that assessments appear sorted by due date, with the maths test first. Once confirmed, delete these test lines before moving to Tutorial 6.</p>`,
        code: `from datetime import datetime

# Create some assessments
essay = Assessment(
    "Essay: Climate Change",
    "2000-word analytical essay",
    "15/06/2025",
    "English",
    priority="high"
)

lab_report = Assessment(
    "Lab Report: Enzyme Activity",
    "Practical write-up",
    "22/06/2025",
    "Biology"
)

maths_test = Assessment(
    "Algebra Topic Test",
    "Chapters 4-6",
    "10/06/2025",
    "Maths",
    priority="high"
)

# Add scaffold notes to the essay
essay.add_scaffold_note("Task understanding",
    "Analyse causes and solutions of climate change")
essay.add_scaffold_note("Key ideas",
    "Greenhouse gases, feedback loops, policy responses")

# Record a mark for the maths test
maths_test.set_mark(42, 50)
maths_test.complete()

# Add all to the tracker — automatically sorted by due date
tracker = AssessmentTracker()
tracker.add_assessment(essay)
tracker.add_assessment(lab_report)
tracker.add_assessment(maths_test)

tracker.display_all()

# Show the scaffold for the essay
essay.display_scaffold()`,
        codeExplain: `<p>The assessments are created in a random order, but the tracker sorts them so the maths test (due 10/06) appears first, then the essay (15/06), then the lab report (22/06).</p>
<p>Notice that Assessment inherits <code>complete()</code> and <code>is_done()</code> from Task — we did not have to write those again. That is inheritance doing its job.</p>`
      },
      {
        title: "What you built — Tutorial 5 summary",
        terms: [],
        quiz: [
          {
            type: "mcq",
            question: "In Python, which of the following correctly defines a child class called Assessment that inherits from a parent class called Task?",
            options: [
              "class Assessment extends Task:",
              "class Assessment inherits Task:",
              "class Assessment(Task):",
              "class Assessment: Task"
            ],
            answer: 2,
            explanation: "In Python, you write the parent class name in parentheses after the child class name: class Assessment(Task). This tells Python that Assessment inherits everything from Task."
          },
          {
            type: "tf",
            question: "True or False: when a child class defines a method with the same name as a parent class method, the child's version replaces it for that object.",
            answer: true,
            explanation: "True — this is called overriding. Assessment defined its own display() method, so calling display() on an Assessment object runs Assessment's version, not Task's."
          },
          {
            type: "fill",
            question: "What function do you call inside a child class __init__ to run the parent class constructor?",
            answers: ["super().__init__()", "super()", "super.__init__()"],
            explanation: "super().__init__() calls the parent class constructor. This sets up all the parent's attributes before you add the child's own."
          }
        ],
        content: `
<p>In this tutorial you built the most sophisticated feature yet — a full assessment tracker with scaffold support, mark recording, and automatic date sorting. Here is what you now understand:</p>
<ul>
  <li><strong>Inheritance</strong> lets a child class receive all the attributes and methods of a parent class automatically</li>
  <li>Use <code>super().__init__()</code> to call the parent's constructor before adding child-specific setup</li>
  <li>The "is a" test helps you decide when inheritance is appropriate</li>
  <li>Child classes can <em>override</em> parent methods with their own versions (as Assessment did with <code>display</code>)</li>
  <li>Private methods (underscore prefix) hide internal implementation details</li>
</ul>
<p>In Tutorial 6 — the final tutorial — you will name what Assessment's <code>display</code> override is doing (polymorphism), learn about abstraction, and assemble the complete Student Study Aid application with a working menu.</p>`,
        code: null,
        codeExplain: null
      }
    ]
  },
  {
    id: 6,
    title: "The Complete Application",
    subtitle: "Polymorphism, Abstraction and the Full Study Aid",
    icon: "ti-rocket",
    color: "gray",
    steps: [
      {
        title: "Recap: everything you have built",
        terms: [],
        readOnly: true,
        content: `
<p>Over five tutorials you have built six classes that together form a Student Study Aid application. Here is the full picture of what exists.</p>
<p><strong>Open your study_aid.py file</strong> and confirm all six classes are present. The list below is a reading reference — check yours matches before continuing.</p>`,
        code: `# Your complete class structure so far:

# Student          — stores name, year, subjects, marks
# SchoolTimetable  — weekly class schedule with day/time/room
# StudyTimetable   — personal study sessions with validation
# ToDoList         — prioritised tasks with completion tracking
# Task             — base class: title, description, priority, done state
# Assessment       — inherits Task, adds due date, scaffold, mark
# AssessmentTracker — manages and sorts a collection of assessments`,
        codeExplain: `<p>In this final tutorial you will learn two more OOP concepts — polymorphism and abstraction — and then connect all these classes into one unified application with a text-based menu.</p>`
      },
      {
        title: "What is Polymorphism?",
        terms: ["polymorphism"],
        content: `
<p>You already used polymorphism in Tutorial 5 without naming it. When Assessment overrode the <code>display</code> method from Task, that was polymorphism in action.</p>
<p><strong>Polymorphism</strong> means "many forms". In OOP it means that different classes can respond to the same method name, each in their own appropriate way. You call <code>display()</code> and the right version runs automatically based on what type of object you have.</p>
<p>Let us make this explicit by giving every class in our application a <code>display()</code> method. The code below shows the <code>display()</code> method for each of the three classes — type each one into the matching class in your file.</p>`,
        code: `# Each class has a display() method, but each one does the right thing for its type

class SchoolTimetable:
    def display(self):
        print()
        print("=== SCHOOL TIMETABLE ===")
        for day, classes in self.schedule.items():
            print()
            print(f"  {day}:")
            for c in classes:
                print(f"    {c['time']:8} {c['subject']} — Room {c['room']}")

class StudyTimetable:
    def display(self):
        print()
        print("=== STUDY TIMETABLE ===")
        for s in self._sessions:
            print(f"  {s['day']:12} {s['start']:8} {s['subject']} ({s['hours']}h)")

class ToDoList:
    def display(self):
        print()
        print("=== TO-DO LIST ===")
        for task in self._tasks:
            if not task["done"]:
                print(f"  ○ [{task['priority'].upper():6}] {task['description']}")`,
        codeExplain: `<p>Find your SchoolTimetable, StudyTimetable, and ToDoList classes in study_aid.py and add or replace the <code>display()</code> method in each one. Do not retype the whole class — just update that one method inside each.</p>
<p>Once all three classes have their <code>display()</code> method, polymorphism means you can write code like this — though you do not need to add this to your file, it is just to show how it works:</p>
<pre style="background:#1e1e1e;color:#d4d4d4;padding:0.8rem;border-radius:6px;font-size:0.85rem;overflow-x:auto"># All three respond to display() — same name, different behaviour
components = [SchoolTimetable(), StudyTimetable(), ToDoList()]
for component in components:
    component.display()   # Python calls the right version automatically</pre>
<p>This loop does not know or care whether each item is a SchoolTimetable, StudyTimetable, or ToDoList. It just calls <code>display()</code> and the correct version runs automatically. This is polymorphism: the same method call produces different, appropriate behaviour depending on the object's actual type.</p>
<p>This makes application code much simpler — you can treat different types of objects uniformly when they share a common method name, without needing a different line of code for each type.</p>`,
        fileSnapshot: `# study_aid.py

from datetime import datetime


def _time_to_minutes(time_str):
    """Convert a time string like 9:30am or 11:00pm to total minutes since midnight."""
    time_str = time_str.strip().lower()
    period = "am" if time_str.endswith("am") else "pm"
    time_str = time_str[:-2]
    if ":" in time_str:
        h, m = time_str.split(":")
    else:
        h, m = time_str, "0"
    h, m = int(h), int(m)
    if period == "pm" and h != 12:
        h += 12
    if period == "am" and h == 12:
        h = 0
    return h * 60 + m


class Student:
    def __init__(self, name, year_level):
        self.name = name
        self.year_level = year_level
        self.subjects = []
        self.marks = []

    def introduce(self):
        print(f"Hi, I am {self.name}, a Year {self.year_level} student.")
        print(f"I am studying {len(self.subjects)} subject(s).")

class SchoolTimetable:
    def __init__(self):
        self.schedule = {
            "Monday": [],
            "Tuesday": [],
            "Wednesday": [],
            "Thursday": [],
            "Friday": []
        }

    def add_class(self, day, time, subject, room):
        day_map = {
            "mon": "Monday", "monday": "Monday",
            "tue": "Tuesday", "tuesday": "Tuesday",
            "wed": "Wednesday", "wednesday": "Wednesday",
            "thu": "Thursday", "thursday": "Thursday",
            "fri": "Friday", "friday": "Friday"
        }
        day = day_map.get(day.strip().lower())
        if not day:
            print("Error: please enter a valid weekday as Mon, Tue, Wed, Thu or Fri.")
            return
        entry = {"time": time, "subject": subject, "room": room}
        self.schedule[day].append(entry)
        self.schedule[day].sort(key=lambda e: _time_to_minutes(e["time"]))
        print(f"Added: {time} — {subject} ({room}) on {day}")

    def display_day(self, day):
        print()
        print(f"--- {day} ---")
        if not self.schedule[day]:
            print("  No classes scheduled.")
        else:
            for entry in self.schedule[day]:
                print(f"  {entry['time']:8} {entry['subject']} — Room {entry['room']}")

    def display_week(self):
        print()
        print("=== SCHOOL TIMETABLE ===")
        for day in self.schedule:
            self.display_day(day)

    def display(self):
        print()
        print("=== SCHOOL TIMETABLE ===")
        for day, classes in self.schedule.items():
            print()
            print(f"  {day}:")
            for c in classes:
                print(f"    {c['time']:8} {c['subject']} — Room {c['room']}")

class StudyTimetable:
    def __init__(self):
        self._sessions = []

    def add_session(self, day, subject, start_time, hours):
        day_map = {
            "mon": "Monday", "monday": "Monday",
            "tue": "Tuesday", "tuesday": "Tuesday",
            "wed": "Wednesday", "wednesday": "Wednesday",
            "thu": "Thursday", "thursday": "Thursday",
            "fri": "Friday", "friday": "Friday",
            "sat": "Saturday", "saturday": "Saturday",
            "sun": "Sunday", "sunday": "Sunday"
        }
        day = day_map.get(day.strip().lower())
        if not day:
            print("Error: please enter a valid day as Mon, Tue, Wed, Thu, Fri, Sat or Sun.")
            return
        if hours <= 0 or hours > 12:
            print("Error: hours must be between 1 and 12.")
            return
        session = {
            "day": day,
            "subject": subject,
            "start": start_time,
            "hours": hours
        }
        self._sessions.append(session)
        self._sessions.sort(key=lambda s: (_time_to_minutes(s["start"]), s["day"]))
        print(f"Study session added: {subject} on {day} at {start_time} for {hours}h")

    def get_sessions(self):
        return list(self._sessions)

    def total_hours(self):
        return sum(s["hours"] for s in self._sessions)

    def display(self):
        print()
        print("=== STUDY TIMETABLE ===")
        if not self._sessions:
            print("  No study sessions scheduled yet.")
            return
        for s in self._sessions:
            print(f"  {s['day']:12} {s['start']:8} {s['subject']:15} {s['hours']}h")
        print(f"  Total: {self.total_hours()} hours")

class ToDoList:
    def __init__(self):
        self._tasks = []

    def add_task(self, description, priority="normal"):
        valid_priorities = ["low", "normal", "high"]
        if priority not in valid_priorities:
            print(f"Error: priority must be one of {valid_priorities}")
            return
        task = {
            "description": description,
            "priority": priority,
            "done": False
        }
        self._tasks.append(task)
        print(f"Task added: [{priority.upper()}] {description}")

    def complete_task(self, description):
        for task in self._tasks:
            if task["description"] == description:
                task["done"] = True
                print(f"Completed: {description}")
                return
        print(f"Task not found: {description}")

    def display_pending(self):
        print()
        print("=== TO-DO LIST ===")
        pending = [t for t in self._tasks if not t["done"]]
        if not pending:
            print("  All tasks complete!")
        else:
            for task in pending:
                marker = "!!!" if task["priority"] == "high" else "   "
                print(f"  {marker} [{task['priority'].upper():6}] {task['description']}")

    def display(self):
        print()
        print("=== TO-DO LIST ===")
        for task in self._tasks:
            if not task["done"]:
                print(f"  ○ [{task['priority'].upper():6}] {task['description']}")

class Task:
    def __init__(self, title, description, priority="normal"):
        self.title = title
        self.description = description
        self.priority = priority
        self._done = False

    def complete(self):
        self._done = True
        print(f"Completed: {self.title}")

    def is_done(self):
        return self._done

    def display(self):
        status = "✓" if self._done else "○"
        print(f"  {status} [{self.priority.upper():6}] {self.title}")

class Assessment(Task):
    def __init__(self, title, description, due_date, subject, priority="normal"):
        super().__init__(title, description, priority)
        self.due_date = due_date
        self.subject = subject
        self._mark = None
        self._max_mark = None
        self._scaffold = {
            "Task understanding": "",
            "Key ideas": "",
            "Evidence or examples": "",
            "Structure plan": "",
            "Notes": ""
        }

    def add_scaffold_note(self, section, notes):
        if section not in self._scaffold:
            print(f"Error: '{section}' is not a scaffold section.")
            print(f"Available sections: {list(self._scaffold.keys())}")
            return
        self._scaffold[section] = notes
        print(f"Scaffold updated: {section}")

    def display_scaffold(self):
        print()
        print(f"=== SCAFFOLD: {self.title} ===")
        for section, content in self._scaffold.items():
            print()
            print(f"  {section}:")
            if content:
                print(f"    {content}")
            else:
                print("    (not yet completed)")

    def set_mark(self, mark, max_mark):
        if mark < 0 or max_mark <= 0 or mark > max_mark:
            print("Error: invalid mark values.")
            return
        self._mark = mark
        self._max_mark = max_mark

    def display(self):
        status = "✓" if self.is_done() else "○"
        mark_info = ""
        if self._mark is not None:
            pct = round((self._mark / self._max_mark) * 100, 1)
            mark_info = f" | Mark: {self._mark}/{self._max_mark} ({pct}%)"
        print(f"  {status} {self.subject:15} {self.title}")
        print(f"     Due: {self.due_date}{mark_info}")

class AssessmentTracker:
    def __init__(self):
        self._assessments = []

    def add_assessment(self, assessment):
        self._assessments.append(assessment)
        self._sort_by_due_date()
        print(f"Assessment added: {assessment.title} (due {assessment.due_date})")

    def _sort_by_due_date(self):
        self._assessments.sort(
            key=lambda a: datetime.strptime(a.due_date, "%d/%m/%y")
        )

    def display_all(self):
        print()
        print("=== ASSESSMENTS (by due date) ===")
        if not self._assessments:
            print("  No assessments added yet.")
            return
        for assessment in self._assessments:
            assessment.display()

    def get_upcoming(self, n=3):
        incomplete = [a for a in self._assessments if not a.is_done()]
        return incomplete[:n]`,
      },
      {
        title: "What is Abstraction?",
        terms: ["abstraction"],
        readOnly: true,
        content: `
<p><strong>Abstraction</strong> means hiding the complex details of how something works behind a simple, clean interface. The user of a class only needs to know what it does — not how it does it internally.</p>
<p>You have already been practising abstraction throughout these tutorials. When you called <code>tracker.add_assessment(essay)</code>, you did not need to know that it was sorting a list using a lambda and datetime parsing internally. The method hid all of that.</p>
<p>The final piece of abstraction for our application is a clean menu that exposes only what the student needs, hiding all the class-level detail behind simple numbered choices.</p>
<p><strong>This is a reading step.</strong> The code below shows the skeleton of the StudyAidApp class. Read it and understand how it holds all the other objects privately. You will type the complete version in the next step.</p>`,
        code: `class StudyAidApp:
    def __init__(self, student_name, year_level):
        # All the complexity is set up here, invisibly to the user
        self._student = Student(student_name, year_level)
        self._school_tt = SchoolTimetable()
        self._study_tt = StudyTimetable()
        self._todo = ToDoList()
        self._tracker = AssessmentTracker()

    def run(self):
        print()
        print(f"Welcome, {self._student.name}!")
        while True:
            self._show_menu()
            print()
            choice = input("Enter your choice: ").strip()
            self._handle_choice(choice)
            if choice == "0":
                break`,
        codeExplain: `<p><code>class StudyAidApp:</code> — This is the abstraction layer. It holds all the other objects and coordinates them. The student using the app just sees a menu — they never interact with SchoolTimetable or AssessmentTracker directly.</p>
<p><code>self._school_tt = SchoolTimetable()</code> — All five component objects are created here, once, privately. The underscore prefix on each signals they are internal to the app.</p>
<p><code>def run(self):</code> — One method to start everything. The user of this class only needs to know: create an app, call <code>run()</code>. Everything else is abstracted away.</p>`
      },
      {
        title: "The complete application menu",
        terms: [],
        content: `
<p>This is the final class you will write — <code>StudyAidApp</code>. It is the coordinator that connects every class you have built across all six tutorials into one working application. Before you type anything, read through this explanation carefully so you understand what each part does.</p>

<h3 style="margin-top:1.2rem;margin-bottom:0.4rem;font-size:1rem;">What this class contains</h3>
<p><code>StudyAidApp</code> has seven methods:</p>
<ul>
  <li><strong><code>__init__</code></strong> — Creates one instance of every component class (<code>Student</code>, <code>SchoolTimetable</code>, <code>StudyTimetable</code>, <code>ToDoList</code>, <code>AssessmentTracker</code>) and stores them privately. This happens once when the app starts.</li>
  <li><strong><code>_ask(prompt)</code></strong> — A private helper method that shows a prompt and waits for the user to type something. If they press Enter without typing anything, it prints a message and asks again. This prevents blank values from being saved. Every place in the app that needs text input uses this instead of calling <code>input()</code> directly.</li>
  <li><strong><code>_ask_float(prompt)</code></strong> — Similar to <code>_ask</code>, but specifically for numbers. If the user types letters or leaves it blank, it prints a message and asks again. Used wherever the app needs a number — like hours for a study session or a mark out of a total.</li>
  <li><strong><code>_ask_time(prompt)</code></strong> — Asks for the hour (1–12, loops until valid), then minutes (0–59, press Enter for 00, loops until valid), then am or pm (loops until valid). Returns a consistently formatted string like <code>9:30am</code> or <code>11:00pm</code>. Consistent formatting is essential because the timetable classes sort entries by time — inconsistent formats would cause incorrect sort order.</li>
  <li><strong><code>_show_menu</code></strong> — Prints the numbered menu to the screen. Private — only called from inside <code>run()</code>.</li>
  <li><strong><code>_handle_choice</code></strong> — Reads the student's menu choice and calls the right method on the right component. Each <code>elif</code> block handles one menu option. Also private — only called from inside <code>run()</code>.</li>
  <li><strong><code>run</code></strong> — The only public method. Welcomes the student by name, then enters a loop that keeps showing the menu and handling choices until the student types 0 to exit.</li>
</ul>

<h3 style="margin-top:1.2rem;margin-bottom:0.4rem;font-size:1rem;">Why use helper methods instead of just calling input()?</h3>
<p>Without the helper methods, every input call would need its own validation code — checking for blank values, catching number errors, splitting time input into two parts, and so on. That would mean writing the same logic over and over. By writing <code>_ask</code>, <code>_ask_float</code>, and <code>_ask_time</code> once each, every input in the app is automatically protected. This is a good example of the DRY principle — <strong>Don't Repeat Yourself</strong> — which you will hear a lot as you write more code.</p>

<h3 style="margin-top:1.2rem;margin-bottom:0.4rem;font-size:1rem;">How <code>_handle_choice</code> works</h3>
<p>Each menu number maps to an action. Here is what each one does:</p>
<ul>
  <li><strong>1</strong> — Calls <code>display()</code> on the school timetable to print the week's classes.</li>
  <li><strong>2</strong> — Asks for a day, time, subject, and room. The day loops until a valid full weekday name (Monday–Friday) is entered — a hint like "e.g. Monday" in a prompt is not sufficient, because a user can still type "Mon" or "monday" and the data would be silently wrong. The loop here is the same pattern used for priority in choice 6: keep asking until the input is acceptable. The time uses <code>_ask_time()</code>, which first asks for the time value (e.g. 9:00) then asks separately for am or pm — looping until one of those two is entered. Then calls <code>add_class()</code>.</li>
  <li><strong>3</strong> — Calls <code>display()</code> on the study timetable.</li>
  <li><strong>4</strong> — Asks for a day, subject, start time, and hours. The day uses the same validation loop as choice 2 — but the valid list includes Saturday and Sunday, since students study on weekends. The start time uses <code>_ask_time()</code> for the same reason as choice 2. The hours use <code>_ask_float()</code>. Then calls <code>add_session()</code>.</li>
  <li><strong>5</strong> — Calls <code>display_pending()</code> on the to-do list to show incomplete tasks.</li>
  <li><strong>6</strong> — Asks for a description and loops until a valid priority (low/normal/high) is entered, then calls <code>add_task()</code>.</li>
  <li><strong>7</strong> — Retrieves the pending task list and displays it numbered. If the list is empty it says so and stops. Otherwise it loops until the student enters a valid number, then calls <code>complete_task()</code> with the description of the chosen task. Asking a student to retype a task description from memory is poor design — a numbered list removes that problem entirely.</li>
  <li><strong>8</strong> — Calls <code>display_all()</code> on the assessment tracker.</li>
  <li><strong>9</strong> — Asks for title, description, due date, and subject, then creates a new <code>Assessment</code> and adds it to the tracker. The date accepts single or double digit day and month (e.g. 9/6/2026 or 09/06/2026) — each part is padded with <code>zfill(2)</code> before validation and storage, so the format is always consistent internally regardless of how the student typed it.</li>
  <li><strong>10</strong> — Shows a numbered list of all assessments with their due dates, loops until a valid number is entered, then shows the available scaffold sections and asks for a section name and notes. The same numbered list pattern as choices 7 and 11 — no relying on memory.</li>
  <li><strong>11</strong> — Shows the same numbered list of assessments, loops until a valid number is entered, then asks for the mark and the total using <code>_ask_float()</code>.</li>
  <li><strong>0</strong> — Prints a goodbye message. The <code>run()</code> loop sees this and stops.</li>
</ul>

<h3 style="margin-top:1.2rem;margin-bottom:0.4rem;font-size:1rem;">Indentation is critical</h3>
<p>This class has two levels of indentation: method definitions are indented 4 spaces inside the class, and the code inside each method is indented 8 spaces. The <code>elif</code> blocks inside <code>_handle_choice</code> are at 8 spaces, and the lines inside each <code>elif</code> are at 12 spaces. Take your time — Python will give you an <code>IndentationError</code> if anything is out of place.</p>

<p><strong>Now add the complete <code>StudyAidApp</code> class to the bottom of your study_aid.py file, below all existing classes.</strong> Read through the code above one more time before you start typing.</p>`,
        code: `class StudyAidApp:
    def __init__(self, student_name, year_level):
        self._student = Student(student_name, year_level)
        self._school_tt = SchoolTimetable()
        self._study_tt = StudyTimetable()
        self._todo = ToDoList()
        self._tracker = AssessmentTracker()

    def _show_menu(self):
        print()
        print("="*56)
        print(f"  STUDY AID — {self._student.name}")
        print("="*56)
        print("""
  1. View school timetable      2. Add school class
  3. View study timetable       4. Add study session
  5. View to-do list            6. Add to-do task         7. Complete a task
  8. View assessments           9. Add assessment
 10. Add scaffold note         11. Record a mark
  0. Exit
""")

    def _ask(self, prompt):
        while True:
            value = input(prompt).strip()
            if value:
                return value
            print("  This field cannot be blank. Please try again.")

    def _ask_float(self, prompt):
        while True:
            value = input(prompt).strip()
            try:
                return float(value)
            except ValueError:
                print("  Please enter a number (e.g. 2 or 1.5).")

    def _ask_time(self, prompt):
        while True:
            hour = self._ask(prompt)
            try:
                h = int(hour)
                if 1 <= h <= 12:
                    break
                print("  Please enter an hour between 1 and 12.")
            except ValueError:
                print("  Please enter a number for the hour.")
        while True:
            mins = input("  Minutes (0-59, or press Enter for 00): ").strip()
            if mins == "":
                mins = "00"
                break
            try:
                m = int(mins)
                if 0 <= m <= 59:
                    mins = str(m).zfill(2)
                    break
                print("  Please enter minutes between 0 and 59.")
            except ValueError:
                print("  Please enter a number for the minutes.")
        while True:
            period = input("  am or pm? ").strip().lower()
            if period in ["am", "pm"]:
                return f"{h}:{mins}{period}"
            print("  Please enter am or pm.")

    def _handle_choice(self, choice):
        if choice == "1":
            self._school_tt.display()
        elif choice == "2":
            day_map = {
                "mon": "Monday", "monday": "Monday",
                "tue": "Tuesday", "tuesday": "Tuesday",
                "wed": "Wednesday", "wednesday": "Wednesday",
                "thu": "Thursday", "thursday": "Thursday",
                "fri": "Friday", "friday": "Friday"
            }
            while True:
                raw_day = self._ask("Day (Mon-Fri): ")
                day = day_map.get(raw_day.strip().lower())
                if day:
                    break
                print("  Please enter Mon, Tue, Wed, Thu or Fri.")
            time = self._ask_time("Hour (1-12): ")
            subject = self._ask("Subject: ")
            room = self._ask("Room: ")
            self._school_tt.add_class(day, time, subject, room)
        elif choice == "3":
            self._study_tt.display()
        elif choice == "4":
            day_map = {
                "mon": "Monday", "monday": "Monday",
                "tue": "Tuesday", "tuesday": "Tuesday",
                "wed": "Wednesday", "wednesday": "Wednesday",
                "thu": "Thursday", "thursday": "Thursday",
                "fri": "Friday", "friday": "Friday",
                "sat": "Saturday", "saturday": "Saturday",
                "sun": "Sunday", "sunday": "Sunday"
            }
            while True:
                raw_day = self._ask("Day (Mon-Sun): ")
                day = day_map.get(raw_day.strip().lower())
                if day:
                    break
                print("  Please enter Mon, Tue, Wed, Thu, Fri, Sat or Sun.")
            subject = self._ask("Subject: ")
            start = self._ask_time("Start hour (1-12): ")
            hours = self._ask_float("Hours (e.g. 2): ")
            self._study_tt.add_session(day, subject, start, hours)
        elif choice == "5":
            self._todo.display_pending()
        elif choice == "6":
            desc = self._ask("Task description: ")
            while True:
                priority = self._ask("Priority (low/normal/high): ").lower()
                if priority in ["low", "normal", "high"]:
                    break
                print("  Please enter low, normal or high.")
            self._todo.add_task(desc, priority)
        elif choice == "7":
            pending = [t for t in self._todo._tasks if not t["done"]]
            if not pending:
                print("  No pending tasks.")
            else:
                print()
                print("  Pending tasks:")
                for i, task in enumerate(pending, 1):
                    marker = "!!!" if task["priority"] == "high" else "   "
                    print(f"  {i}. {marker} [{task['priority'].upper():6}] {task['description']}")
                while True:
                    raw = self._ask("Enter task number to complete: ")
                    try:
                        num = int(raw)
                        if 1 <= num <= len(pending):
                            break
                        print(f"  Please enter a number between 1 and {len(pending)}.")
                    except ValueError:
                        print("  Please enter a number.")
                self._todo.complete_task(pending[num - 1]["description"])
        elif choice == "8":
            self._tracker.display_all()
        elif choice == "9":
            title = self._ask("Assessment title: ")
            desc = self._ask("Description: ")
            while True:
                due = self._ask("Due date (e.g. 9/6/26): ")
                try:
                    parts = due.strip().split("/")
                    if len(parts) == 3:
                        due = "/".join(p.zfill(2) for p in parts)
                    datetime.strptime(due, "%d/%m/%y")
                    break
                except ValueError:
                    print("  Please enter a valid date as D/M/YY or DD/MM/YY (e.g. 9/6/26).")
            subject = self._ask("Subject: ")
            a = Assessment(title, desc, due, subject)
            self._tracker.add_assessment(a)
        elif choice == "10":
            assessments = self._tracker._assessments
            if not assessments:
                print("  No assessments added yet.")
            else:
                print("\\n  Assessments:")
                for i, a in enumerate(assessments, 1):
                    print(f"  {i}. {a.title} (due {a.due_date})")
                while True:
                    raw = self._ask("Enter assessment number: ")
                    try:
                        num = int(raw)
                        if 1 <= num <= len(assessments):
                            break
                        print(f"  Please enter a number between 1 and {len(assessments)}.")
                    except ValueError:
                        print("  Please enter a number.")
                a = assessments[num - 1]
                print(f"  Scaffold sections: {', '.join(a._scaffold.keys())}")
                section = self._ask("Scaffold section: ")
                notes = self._ask("Notes: ")
                a.add_scaffold_note(section, notes)
        elif choice == "11":
            assessments = self._tracker._assessments
            if not assessments:
                print("  No assessments added yet.")
            else:
                print("\\n  Assessments:")
                for i, a in enumerate(assessments, 1):
                    print(f"  {i}. {a.title} (due {a.due_date})")
                while True:
                    raw = self._ask("Enter assessment number: ")
                    try:
                        num = int(raw)
                        if 1 <= num <= len(assessments):
                            break
                        print(f"  Please enter a number between 1 and {len(assessments)}.")
                    except ValueError:
                        print("  Please enter a number.")
                a = assessments[num - 1]
                mark = self._ask_float("Mark received: ")
                max_mark = self._ask_float("Out of: ")
                a.set_mark(mark, max_mark)
        elif choice == "0":
            print(f"Goodbye, {self._student.name}! Good luck with your studies.")
        else:
            print("Invalid choice. Please enter a number from the menu.")
    def run(self):
        print()
        print(f"Welcome, {self._student.name}!")
        while True:
            self._show_menu()
            print()
            choice = input("Enter your choice: ").strip()
            self._handle_choice(choice)
            if choice == "0":
                break`,
        codeExplain: `<p><code>def _ask(self, prompt):</code> and <code>def _ask_float(self, prompt):</code> — These two helper methods sit at the top of the class. Every input in the app goes through one of these instead of calling <code>input()</code> directly. <code>_ask</code> prevents blank values; <code>_ask_float</code> also prevents non-numeric values by catching the <code>ValueError</code> that Python raises when you try to convert letters to a number.</p>
<p><code>def _ask_time(self, prompt):</code> — Asks for the hour, minutes, and period (am/pm) as three separate steps, each with its own validation loop. The hour must be 1–12; minutes must be 0–59 (pressing Enter gives 00); period must be am or pm. The result is always in the format <code>H:MMam</code> or <code>H:MMpm</code> — for example <code>9:00am</code> or <code>11:30pm</code>. This consistent format is not just about display — it is required for the sort to work correctly. <code>_time_to_minutes()</code>, the module-level helper used by both timetable classes when sorting, depends on this exact format to convert times to a comparable number. If the format were inconsistent (e.g. sometimes <code>9am</code>, sometimes <code>9:00am</code>), the sort would fail or give wrong results. Controlling format at the point of entry is a fundamental principle of data integrity.</p>
<p><code>def _find_assessment(self, title):</code> — This method has been removed. Choices 10 and 11 now display a numbered list of assessments directly, the same pattern used by choice 7 for tasks. Asking a student to type a title from memory is the same problem as asking them to type a task description — a numbered list solves it cleanly.</p>
<p><code>def _show_menu(self):</code> — Private helper method that prints the menu. The menu options use a triple-quoted string — <code>print("""...""")</code> — rather than twelve separate <code>print()</code> calls. A triple-quoted string preserves all the whitespace and line breaks exactly as written, which makes it easy to lay out the options in two columns. Related options sit on the same line (view and add for each topic), which reduces screen space and makes the menu easier to scan. The separator line was also widened to 56 characters to better frame the two-column layout.</p>
<p><strong>Day validation in choices 2 and 4:</strong> Both choices use a <code>day_map</code> dictionary and a <code>while True</code> loop. The student types a 3-letter abbreviation (<code>Mon</code>, <code>Tue</code> etc.) in any capitalisation — <code>day.strip().lower()</code> normalises it before the lookup. The map resolves the abbreviation to the full day name, which is what gets stored and displayed. If the input does not match any key, the loop asks again. This is a good example of using a dictionary as a lookup table — cleaner than a long chain of <code>if/elif</code> statements. Notice that choice 4 (study session) includes <code>Sat</code> and <code>Sun</code> in its map while choice 2 (school class) only covers <code>Mon</code>–<code>Fri</code>.</p>
<p><strong>Choice 7 — completing a task by number:</strong> Rather than asking the student to retype a task description, the code first builds a list of pending tasks, displays them numbered, then loops until a valid integer within range is entered. Notice that <code>self._todo._tasks</code> is accessed directly here — this is a pragmatic decision. The <code>ToDoList</code> class does not need a getter for this because the selection and display logic belongs in the app layer, not in the class itself. The same numbered list pattern is used for choices 10 and 11. The <code>try/except ValueError</code> handles non-numeric input the same way <code>_ask_float</code> does.</p>
<p><strong>Choice 9 — date validation:</strong> The date input accepts single or double digit day and month, and a 2-digit year — so <code>9/6/26</code> and <code>09/06/26</code> are both valid. The code splits on <code>/</code>, pads day and month to two digits with <code>zfill(2)</code>, then validates with <code>datetime.strptime(due, "%d/%m/%y")</code>. The lowercase <code>%y</code> tells Python to expect a 2-digit year — Python automatically interprets values 00–68 as 2000–2068 and 69–99 as 1969–1999. If the date is not real, <code>strptime</code> raises a <code>ValueError</code> and the loop asks again. The same <code>%d/%m/%y</code> format is used in <code>AssessmentTracker._sort_by_due_date</code> so both stay consistent.</p>
<p><code>def _handle_choice(self, choice):</code> — Another private method. Contains all the branching logic but is hidden from the outside. The outside world just calls <code>run()</code>.</p>
<p><code>def run(self):</code> — Starts the welcome message and enters a <code>while True</code> loop. Each iteration shows the menu, reads a choice, handles it, and breaks only when the choice is "0".</p>`,
        fileSnapshot: `# study_aid.py

from datetime import datetime


def _time_to_minutes(time_str):
    """Convert a time string like 9:30am or 11:00pm to total minutes since midnight."""
    time_str = time_str.strip().lower()
    period = "am" if time_str.endswith("am") else "pm"
    time_str = time_str[:-2]
    if ":" in time_str:
        h, m = time_str.split(":")
    else:
        h, m = time_str, "0"
    h, m = int(h), int(m)
    if period == "pm" and h != 12:
        h += 12
    if period == "am" and h == 12:
        h = 0
    return h * 60 + m


class Student:
    def __init__(self, name, year_level):
        self.name = name
        self.year_level = year_level
        self.subjects = []
        self.marks = []

    def introduce(self):
        print(f"Hi, I am {self.name}, a Year {self.year_level} student.")
        print(f"I am studying {len(self.subjects)} subject(s).")

class SchoolTimetable:
    def __init__(self):
        self.schedule = {
            "Monday": [],
            "Tuesday": [],
            "Wednesday": [],
            "Thursday": [],
            "Friday": []
        }

    def add_class(self, day, time, subject, room):
        day_map = {
            "mon": "Monday", "monday": "Monday",
            "tue": "Tuesday", "tuesday": "Tuesday",
            "wed": "Wednesday", "wednesday": "Wednesday",
            "thu": "Thursday", "thursday": "Thursday",
            "fri": "Friday", "friday": "Friday"
        }
        day = day_map.get(day.strip().lower())
        if not day:
            print("Error: please enter a valid weekday as Mon, Tue, Wed, Thu or Fri.")
            return
        entry = {"time": time, "subject": subject, "room": room}
        self.schedule[day].append(entry)
        self.schedule[day].sort(key=lambda e: _time_to_minutes(e["time"]))
        print(f"Added: {time} — {subject} ({room}) on {day}")

    def display_day(self, day):
        print()
        print(f"--- {day} ---")
        if not self.schedule[day]:
            print("  No classes scheduled.")
        else:
            for entry in self.schedule[day]:
                print(f"  {entry['time']:8} {entry['subject']} — Room {entry['room']}")

    def display_week(self):
        print()
        print("=== SCHOOL TIMETABLE ===")
        for day in self.schedule:
            self.display_day(day)

    def display(self):
        print()
        print("=== SCHOOL TIMETABLE ===")
        for day, classes in self.schedule.items():
            print()
            print(f"  {day}:")
            for c in classes:
                print(f"    {c['time']:8} {c['subject']} — Room {c['room']}")

class StudyTimetable:
    def __init__(self):
        self._sessions = []

    def add_session(self, day, subject, start_time, hours):
        day_map = {
            "mon": "Monday", "monday": "Monday",
            "tue": "Tuesday", "tuesday": "Tuesday",
            "wed": "Wednesday", "wednesday": "Wednesday",
            "thu": "Thursday", "thursday": "Thursday",
            "fri": "Friday", "friday": "Friday",
            "sat": "Saturday", "saturday": "Saturday",
            "sun": "Sunday", "sunday": "Sunday"
        }
        day = day_map.get(day.strip().lower())
        if not day:
            print("Error: please enter a valid day as Mon, Tue, Wed, Thu, Fri, Sat or Sun.")
            return
        if hours <= 0 or hours > 12:
            print("Error: hours must be between 1 and 12.")
            return
        session = {
            "day": day,
            "subject": subject,
            "start": start_time,
            "hours": hours
        }
        self._sessions.append(session)
        self._sessions.sort(key=lambda s: (_time_to_minutes(s["start"]), s["day"]))
        print(f"Study session added: {subject} on {day} at {start_time} for {hours}h")

    def get_sessions(self):
        return list(self._sessions)

    def total_hours(self):
        return sum(s["hours"] for s in self._sessions)

    def display(self):
        print()
        print("=== STUDY TIMETABLE ===")
        if not self._sessions:
            print("  No study sessions scheduled yet.")
            return
        for s in self._sessions:
            print(f"  {s['day']:12} {s['start']:8} {s['subject']:15} {s['hours']}h")
        print(f"  Total: {self.total_hours()} hours")

class ToDoList:
    def __init__(self):
        self._tasks = []

    def add_task(self, description, priority="normal"):
        valid_priorities = ["low", "normal", "high"]
        if priority not in valid_priorities:
            print(f"Error: priority must be one of {valid_priorities}")
            return
        task = {
            "description": description,
            "priority": priority,
            "done": False
        }
        self._tasks.append(task)
        print(f"Task added: [{priority.upper()}] {description}")

    def complete_task(self, description):
        for task in self._tasks:
            if task["description"] == description:
                task["done"] = True
                print(f"Completed: {description}")
                return
        print(f"Task not found: {description}")

    def display_pending(self):
        print()
        print("=== TO-DO LIST ===")
        pending = [t for t in self._tasks if not t["done"]]
        if not pending:
            print("  All tasks complete!")
        else:
            for task in pending:
                marker = "!!!" if task["priority"] == "high" else "   "
                print(f"  {marker} [{task['priority'].upper():6}] {task['description']}")

    def display(self):
        print()
        print("=== TO-DO LIST ===")
        for task in self._tasks:
            if not task["done"]:
                print(f"  ○ [{task['priority'].upper():6}] {task['description']}")

class Task:
    def __init__(self, title, description, priority="normal"):
        self.title = title
        self.description = description
        self.priority = priority
        self._done = False

    def complete(self):
        self._done = True
        print(f"Completed: {self.title}")

    def is_done(self):
        return self._done

    def display(self):
        status = "✓" if self._done else "○"
        print(f"  {status} [{self.priority.upper():6}] {self.title}")

class Assessment(Task):
    def __init__(self, title, description, due_date, subject, priority="normal"):
        super().__init__(title, description, priority)
        self.due_date = due_date
        self.subject = subject
        self._mark = None
        self._max_mark = None
        self._scaffold = {
            "Task understanding": "",
            "Key ideas": "",
            "Evidence or examples": "",
            "Structure plan": "",
            "Notes": ""
        }

    def add_scaffold_note(self, section, notes):
        if section not in self._scaffold:
            print(f"Error: '{section}' is not a scaffold section.")
            print(f"Available sections: {list(self._scaffold.keys())}")
            return
        self._scaffold[section] = notes
        print(f"Scaffold updated: {section}")

    def display_scaffold(self):
        print()
        print(f"=== SCAFFOLD: {self.title} ===")
        for section, content in self._scaffold.items():
            print()
            print(f"  {section}:")
            if content:
                print(f"    {content}")
            else:
                print("    (not yet completed)")

    def set_mark(self, mark, max_mark):
        if mark < 0 or max_mark <= 0 or mark > max_mark:
            print("Error: invalid mark values.")
            return
        self._mark = mark
        self._max_mark = max_mark

    def display(self):
        status = "✓" if self.is_done() else "○"
        mark_info = ""
        if self._mark is not None:
            pct = round((self._mark / self._max_mark) * 100, 1)
            mark_info = f" | Mark: {self._mark}/{self._max_mark} ({pct}%)"
        print(f"  {status} {self.subject:15} {self.title}")
        print(f"     Due: {self.due_date}{mark_info}")

class AssessmentTracker:
    def __init__(self):
        self._assessments = []

    def add_assessment(self, assessment):
        self._assessments.append(assessment)
        self._sort_by_due_date()
        print(f"Assessment added: {assessment.title} (due {assessment.due_date})")

    def _sort_by_due_date(self):
        self._assessments.sort(
            key=lambda a: datetime.strptime(a.due_date, "%d/%m/%y")
        )

    def display_all(self):
        print()
        print("=== ASSESSMENTS (by due date) ===")
        if not self._assessments:
            print("  No assessments added yet.")
            return
        for assessment in self._assessments:
            assessment.display()

    def get_upcoming(self, n=3):
        incomplete = [a for a in self._assessments if not a.is_done()]
        return incomplete[:n]

class StudyAidApp:
    def __init__(self, student_name, year_level):
        self._student = Student(student_name, year_level)
        self._school_tt = SchoolTimetable()
        self._study_tt = StudyTimetable()
        self._todo = ToDoList()
        self._tracker = AssessmentTracker()

    def _show_menu(self):
        print()
        print("="*56)
        print(f"  STUDY AID — {self._student.name}")
        print("="*56)
        print("""
  1. View school timetable      2. Add school class
  3. View study timetable       4. Add study session
  5. View to-do list            6. Add to-do task         7. Complete a task
  8. View assessments           9. Add assessment
 10. Add scaffold note         11. Record a mark
  0. Exit
""")

    def _ask(self, prompt):
        while True:
            value = input(prompt).strip()
            if value:
                return value
            print("  This field cannot be blank. Please try again.")

    def _ask_float(self, prompt):
        while True:
            value = input(prompt).strip()
            try:
                return float(value)
            except ValueError:
                print("  Please enter a number (e.g. 2 or 1.5).")

    def _ask_time(self, prompt):
        while True:
            hour = self._ask(prompt)
            try:
                h = int(hour)
                if 1 <= h <= 12:
                    break
                print("  Please enter an hour between 1 and 12.")
            except ValueError:
                print("  Please enter a number for the hour.")
        while True:
            mins = input("  Minutes (0-59, or press Enter for 00): ").strip()
            if mins == "":
                mins = "00"
                break
            try:
                m = int(mins)
                if 0 <= m <= 59:
                    mins = str(m).zfill(2)
                    break
                print("  Please enter minutes between 0 and 59.")
            except ValueError:
                print("  Please enter a number for the minutes.")
        while True:
            period = input("  am or pm? ").strip().lower()
            if period in ["am", "pm"]:
                return f"{h}:{mins}{period}"
            print("  Please enter am or pm.")

    def _handle_choice(self, choice):
        if choice == "1":
            self._school_tt.display()
        elif choice == "2":
            day_map = {
                "mon": "Monday", "monday": "Monday",
                "tue": "Tuesday", "tuesday": "Tuesday",
                "wed": "Wednesday", "wednesday": "Wednesday",
                "thu": "Thursday", "thursday": "Thursday",
                "fri": "Friday", "friday": "Friday"
            }
            while True:
                raw_day = self._ask("Day (Mon-Fri): ")
                day = day_map.get(raw_day.strip().lower())
                if day:
                    break
                print("  Please enter Mon, Tue, Wed, Thu or Fri.")
            time = self._ask_time("Hour (1-12): ")
            subject = self._ask("Subject: ")
            room = self._ask("Room: ")
            self._school_tt.add_class(day, time, subject, room)
        elif choice == "3":
            self._study_tt.display()
        elif choice == "4":
            day_map = {
                "mon": "Monday", "monday": "Monday",
                "tue": "Tuesday", "tuesday": "Tuesday",
                "wed": "Wednesday", "wednesday": "Wednesday",
                "thu": "Thursday", "thursday": "Thursday",
                "fri": "Friday", "friday": "Friday",
                "sat": "Saturday", "saturday": "Saturday",
                "sun": "Sunday", "sunday": "Sunday"
            }
            while True:
                raw_day = self._ask("Day (Mon-Sun): ")
                day = day_map.get(raw_day.strip().lower())
                if day:
                    break
                print("  Please enter Mon, Tue, Wed, Thu, Fri, Sat or Sun.")
            subject = self._ask("Subject: ")
            start = self._ask_time("Start hour (1-12): ")
            hours = self._ask_float("Hours (e.g. 2): ")
            self._study_tt.add_session(day, subject, start, hours)
        elif choice == "5":
            self._todo.display_pending()
        elif choice == "6":
            desc = self._ask("Task description: ")
            while True:
                priority = self._ask("Priority (low/normal/high): ").lower()
                if priority in ["low", "normal", "high"]:
                    break
                print("  Please enter low, normal or high.")
            self._todo.add_task(desc, priority)
        elif choice == "7":
            pending = [t for t in self._todo._tasks if not t["done"]]
            if not pending:
                print("  No pending tasks.")
            else:
                print()
                print("  Pending tasks:")
                for i, task in enumerate(pending, 1):
                    marker = "!!!" if task["priority"] == "high" else "   "
                    print(f"  {i}. {marker} [{task['priority'].upper():6}] {task['description']}")
                while True:
                    raw = self._ask("Enter task number to complete: ")
                    try:
                        num = int(raw)
                        if 1 <= num <= len(pending):
                            break
                        print(f"  Please enter a number between 1 and {len(pending)}.")
                    except ValueError:
                        print("  Please enter a number.")
                self._todo.complete_task(pending[num - 1]["description"])
        elif choice == "8":
            self._tracker.display_all()
        elif choice == "9":
            title = self._ask("Assessment title: ")
            desc = self._ask("Description: ")
            while True:
                due = self._ask("Due date (e.g. 9/6/26): ")
                try:
                    parts = due.strip().split("/")
                    if len(parts) == 3:
                        due = "/".join(p.zfill(2) for p in parts)
                    datetime.strptime(due, "%d/%m/%y")
                    break
                except ValueError:
                    print("  Please enter a valid date as D/M/YY or DD/MM/YY (e.g. 9/6/26).")
            subject = self._ask("Subject: ")
            a = Assessment(title, desc, due, subject)
            self._tracker.add_assessment(a)
        elif choice == "10":
            assessments = self._tracker._assessments
            if not assessments:
                print("  No assessments added yet.")
            else:
                print("\\n  Assessments:")
                for i, a in enumerate(assessments, 1):
                    print(f"  {i}. {a.title} (due {a.due_date})")
                while True:
                    raw = self._ask("Enter assessment number: ")
                    try:
                        num = int(raw)
                        if 1 <= num <= len(assessments):
                            break
                        print(f"  Please enter a number between 1 and {len(assessments)}.")
                    except ValueError:
                        print("  Please enter a number.")
                a = assessments[num - 1]
                print(f"  Scaffold sections: {', '.join(a._scaffold.keys())}")
                section = self._ask("Scaffold section: ")
                notes = self._ask("Notes: ")
                a.add_scaffold_note(section, notes)
        elif choice == "11":
            assessments = self._tracker._assessments
            if not assessments:
                print("  No assessments added yet.")
            else:
                print("\\n  Assessments:")
                for i, a in enumerate(assessments, 1):
                    print(f"  {i}. {a.title} (due {a.due_date})")
                while True:
                    raw = self._ask("Enter assessment number: ")
                    try:
                        num = int(raw)
                        if 1 <= num <= len(assessments):
                            break
                        print(f"  Please enter a number between 1 and {len(assessments)}.")
                    except ValueError:
                        print("  Please enter a number.")
                a = assessments[num - 1]
                mark = self._ask_float("Mark received: ")
                max_mark = self._ask_float("Out of: ")
                a.set_mark(mark, max_mark)
        elif choice == "0":
            print(f"Goodbye, {self._student.name}! Good luck with your studies.")
        else:
            print("Invalid choice. Please enter a number from the menu.")
    def run(self):
        print()
        print(f"Welcome, {self._student.name}!")
        while True:
            self._show_menu()
            print()
            choice = input("Enter your choice: ").strip()
            self._handle_choice(choice)
            if choice == "0":
                break`,
      },
      {
        title: "The complete application — all together",
        terms: [],
        content: `
<p>You have now written seven classes across six tutorials. But right now, if you ran your file, nothing would happen — because all you have defined are blueprints. No object has been created yet, and no method has been called. These final lines are what actually <em>starts</em> the program.</p>

<h3 style="margin-top:1.2rem;margin-bottom:0.4rem;font-size:1rem;">Why do you need these lines?</h3>
<p>Think of your classes like appliances in a kitchen. You have built a fridge, an oven, and a microwave — but nobody has plugged them in or turned them on yet. These four lines are the moment you walk into the kitchen, plug everything in, and start cooking.</p>
<p>Specifically, these lines do three things in order:</p>
<ol>
  <li><strong>Ask the student for their name and year level</strong> — using <code>input()</code> to pause and wait for them to type. The year level is wrapped in <code>int()</code> because <code>input()</code> always returns text, and the <code>Student</code> class expects a number.</li>
  <li><strong>Create a <code>StudyAidApp</code> object</strong> — passing in the name and year. This triggers <code>__init__</code> inside <code>StudyAidApp</code>, which in turn creates all five component objects (<code>Student</code>, <code>SchoolTimetable</code>, <code>StudyTimetable</code>, <code>ToDoList</code>, <code>AssessmentTracker</code>) and stores them ready to use.</li>
  <li><strong>Call <code>app.run()</code></strong> — this starts the menu loop. From this point on, the app keeps showing the menu and responding to choices until the student types 0 to exit.</li>
</ol>

<h3 style="margin-top:1.2rem;margin-bottom:0.4rem;font-size:1rem;">What is <code>if __name__ == "__main__":</code>?</h3>
<p>This is a standard Python pattern. Every Python file has a built-in variable called <code>__name__</code>. When you run a file directly (by pressing Run in your editor), Python sets <code>__name__</code> to the string <code>"__main__"</code>. The <code>if</code> check means: <em>"only execute this code if this file is being run directly"</em>. It is the correct and professional way to write the starting point of any Python program.</p>

<h3 style="margin-top:1.2rem;margin-bottom:0.4rem;font-size:1rem;">Where does this code go?</h3>
<p>These lines go at the very bottom of your study_aid.py file, <strong>below the StudyAidApp class</strong>, with <strong>no indentation at all</strong> — they start at the left edge. They are not inside any class. They are the top-level instructions that run when the file starts.</p>

<p><strong>Add these lines now, save your file, and run it.</strong> You should see your name asked for, then a numbered menu appear. Type a number and press Enter to try it out — your application is complete.</p>`,
        code: `# Entry point — run the full application
if __name__ == "__main__":
    name = input("Enter your name: ")
    year = int(input("Enter your year level: "))
    app = StudyAidApp(name, year)
    app.run()`,
        codeExplain: `<p><code>if __name__ == "__main__":</code> — This Python idiom means "only run this code if this file is being run directly, not if it is being imported by another file." It is the standard way to write the entry point of a Python program.</p>
<p>Three lines. That is all the user of the <code>StudyAidApp</code> class needs to see. Everything else — the six component classes, the sorting logic, the validation, the scaffold structure — is abstracted away behind <code>app.run()</code>.</p>
<p>This is abstraction at its most powerful: enormous complexity, completely invisible to the person using the interface.</p>`,
        fileSnapshot: `# study_aid.py

from datetime import datetime


def _time_to_minutes(time_str):
    """Convert a time string like 9:30am or 11:00pm to total minutes since midnight."""
    time_str = time_str.strip().lower()
    period = "am" if time_str.endswith("am") else "pm"
    time_str = time_str[:-2]
    if ":" in time_str:
        h, m = time_str.split(":")
    else:
        h, m = time_str, "0"
    h, m = int(h), int(m)
    if period == "pm" and h != 12:
        h += 12
    if period == "am" and h == 12:
        h = 0
    return h * 60 + m


class Student:
    def __init__(self, name, year_level):
        self.name = name
        self.year_level = year_level
        self.subjects = []
        self.marks = []

    def introduce(self):
        print(f"Hi, I am {self.name}, a Year {self.year_level} student.")
        print(f"I am studying {len(self.subjects)} subject(s).")

class SchoolTimetable:
    def __init__(self):
        self.schedule = {
            "Monday": [],
            "Tuesday": [],
            "Wednesday": [],
            "Thursday": [],
            "Friday": []
        }

    def add_class(self, day, time, subject, room):
        day_map = {
            "mon": "Monday", "monday": "Monday",
            "tue": "Tuesday", "tuesday": "Tuesday",
            "wed": "Wednesday", "wednesday": "Wednesday",
            "thu": "Thursday", "thursday": "Thursday",
            "fri": "Friday", "friday": "Friday"
        }
        day = day_map.get(day.strip().lower())
        if not day:
            print("Error: please enter a valid weekday as Mon, Tue, Wed, Thu or Fri.")
            return
        entry = {"time": time, "subject": subject, "room": room}
        self.schedule[day].append(entry)
        self.schedule[day].sort(key=lambda e: _time_to_minutes(e["time"]))
        print(f"Added: {time} — {subject} ({room}) on {day}")

    def display_day(self, day):
        print()
        print(f"--- {day} ---")
        if not self.schedule[day]:
            print("  No classes scheduled.")
        else:
            for entry in self.schedule[day]:
                print(f"  {entry['time']:8} {entry['subject']} — Room {entry['room']}")

    def display_week(self):
        print()
        print("=== SCHOOL TIMETABLE ===")
        for day in self.schedule:
            self.display_day(day)

    def display(self):
        print()
        print("=== SCHOOL TIMETABLE ===")
        for day, classes in self.schedule.items():
            print()
            print(f"  {day}:")
            for c in classes:
                print(f"    {c['time']:8} {c['subject']} — Room {c['room']}")

class StudyTimetable:
    def __init__(self):
        self._sessions = []

    def add_session(self, day, subject, start_time, hours):
        day_map = {
            "mon": "Monday", "monday": "Monday",
            "tue": "Tuesday", "tuesday": "Tuesday",
            "wed": "Wednesday", "wednesday": "Wednesday",
            "thu": "Thursday", "thursday": "Thursday",
            "fri": "Friday", "friday": "Friday",
            "sat": "Saturday", "saturday": "Saturday",
            "sun": "Sunday", "sunday": "Sunday"
        }
        day = day_map.get(day.strip().lower())
        if not day:
            print("Error: please enter a valid day as Mon, Tue, Wed, Thu, Fri, Sat or Sun.")
            return
        if hours <= 0 or hours > 12:
            print("Error: hours must be between 1 and 12.")
            return
        session = {
            "day": day,
            "subject": subject,
            "start": start_time,
            "hours": hours
        }
        self._sessions.append(session)
        self._sessions.sort(key=lambda s: (_time_to_minutes(s["start"]), s["day"]))
        print(f"Study session added: {subject} on {day} at {start_time} for {hours}h")

    def get_sessions(self):
        return list(self._sessions)

    def total_hours(self):
        return sum(s["hours"] for s in self._sessions)

    def display(self):
        print()
        print("=== STUDY TIMETABLE ===")
        if not self._sessions:
            print("  No study sessions scheduled yet.")
            return
        for s in self._sessions:
            print(f"  {s['day']:12} {s['start']:8} {s['subject']:15} {s['hours']}h")
        print(f"  Total: {self.total_hours()} hours")

class ToDoList:
    def __init__(self):
        self._tasks = []

    def add_task(self, description, priority="normal"):
        valid_priorities = ["low", "normal", "high"]
        if priority not in valid_priorities:
            print(f"Error: priority must be one of {valid_priorities}")
            return
        task = {
            "description": description,
            "priority": priority,
            "done": False
        }
        self._tasks.append(task)
        print(f"Task added: [{priority.upper()}] {description}")

    def complete_task(self, description):
        for task in self._tasks:
            if task["description"] == description:
                task["done"] = True
                print(f"Completed: {description}")
                return
        print(f"Task not found: {description}")

    def display_pending(self):
        print()
        print("=== TO-DO LIST ===")
        pending = [t for t in self._tasks if not t["done"]]
        if not pending:
            print("  All tasks complete!")
        else:
            for task in pending:
                marker = "!!!" if task["priority"] == "high" else "   "
                print(f"  {marker} [{task['priority'].upper():6}] {task['description']}")

    def display(self):
        print()
        print("=== TO-DO LIST ===")
        for task in self._tasks:
            if not task["done"]:
                print(f"  ○ [{task['priority'].upper():6}] {task['description']}")

class Task:
    def __init__(self, title, description, priority="normal"):
        self.title = title
        self.description = description
        self.priority = priority
        self._done = False

    def complete(self):
        self._done = True
        print(f"Completed: {self.title}")

    def is_done(self):
        return self._done

    def display(self):
        status = "✓" if self._done else "○"
        print(f"  {status} [{self.priority.upper():6}] {self.title}")

class Assessment(Task):
    def __init__(self, title, description, due_date, subject, priority="normal"):
        super().__init__(title, description, priority)
        self.due_date = due_date
        self.subject = subject
        self._mark = None
        self._max_mark = None
        self._scaffold = {
            "Task understanding": "",
            "Key ideas": "",
            "Evidence or examples": "",
            "Structure plan": "",
            "Notes": ""
        }

    def add_scaffold_note(self, section, notes):
        if section not in self._scaffold:
            print(f"Error: '{section}' is not a scaffold section.")
            print(f"Available sections: {list(self._scaffold.keys())}")
            return
        self._scaffold[section] = notes
        print(f"Scaffold updated: {section}")

    def display_scaffold(self):
        print()
        print(f"=== SCAFFOLD: {self.title} ===")
        for section, content in self._scaffold.items():
            print()
            print(f"  {section}:")
            if content:
                print(f"    {content}")
            else:
                print("    (not yet completed)")

    def set_mark(self, mark, max_mark):
        if mark < 0 or max_mark <= 0 or mark > max_mark:
            print("Error: invalid mark values.")
            return
        self._mark = mark
        self._max_mark = max_mark

    def display(self):
        status = "✓" if self.is_done() else "○"
        mark_info = ""
        if self._mark is not None:
            pct = round((self._mark / self._max_mark) * 100, 1)
            mark_info = f" | Mark: {self._mark}/{self._max_mark} ({pct}%)"
        print(f"  {status} {self.subject:15} {self.title}")
        print(f"     Due: {self.due_date}{mark_info}")

class AssessmentTracker:
    def __init__(self):
        self._assessments = []

    def add_assessment(self, assessment):
        self._assessments.append(assessment)
        self._sort_by_due_date()
        print(f"Assessment added: {assessment.title} (due {assessment.due_date})")

    def _sort_by_due_date(self):
        self._assessments.sort(
            key=lambda a: datetime.strptime(a.due_date, "%d/%m/%y")
        )

    def display_all(self):
        print()
        print("=== ASSESSMENTS (by due date) ===")
        if not self._assessments:
            print("  No assessments added yet.")
            return
        for assessment in self._assessments:
            assessment.display()

    def get_upcoming(self, n=3):
        incomplete = [a for a in self._assessments if not a.is_done()]
        return incomplete[:n]

class StudyAidApp:
    def __init__(self, student_name, year_level):
        self._student = Student(student_name, year_level)
        self._school_tt = SchoolTimetable()
        self._study_tt = StudyTimetable()
        self._todo = ToDoList()
        self._tracker = AssessmentTracker()

    def _show_menu(self):
        print()
        print("="*56)
        print(f"  STUDY AID — {self._student.name}")
        print("="*56)
        print("""
  1. View school timetable      2. Add school class
  3. View study timetable       4. Add study session
  5. View to-do list            6. Add to-do task         7. Complete a task
  8. View assessments           9. Add assessment
 10. Add scaffold note         11. Record a mark
  0. Exit
""")

    def _ask(self, prompt):
        while True:
            value = input(prompt).strip()
            if value:
                return value
            print("  This field cannot be blank. Please try again.")

    def _ask_float(self, prompt):
        while True:
            value = input(prompt).strip()
            try:
                return float(value)
            except ValueError:
                print("  Please enter a number (e.g. 2 or 1.5).")

    def _ask_time(self, prompt):
        while True:
            hour = self._ask(prompt)
            try:
                h = int(hour)
                if 1 <= h <= 12:
                    break
                print("  Please enter an hour between 1 and 12.")
            except ValueError:
                print("  Please enter a number for the hour.")
        while True:
            mins = input("  Minutes (0-59, or press Enter for 00): ").strip()
            if mins == "":
                mins = "00"
                break
            try:
                m = int(mins)
                if 0 <= m <= 59:
                    mins = str(m).zfill(2)
                    break
                print("  Please enter minutes between 0 and 59.")
            except ValueError:
                print("  Please enter a number for the minutes.")
        while True:
            period = input("  am or pm? ").strip().lower()
            if period in ["am", "pm"]:
                return f"{h}:{mins}{period}"
            print("  Please enter am or pm.")

    def _handle_choice(self, choice):
        if choice == "1":
            self._school_tt.display()
        elif choice == "2":
            day_map = {
                "mon": "Monday", "monday": "Monday",
                "tue": "Tuesday", "tuesday": "Tuesday",
                "wed": "Wednesday", "wednesday": "Wednesday",
                "thu": "Thursday", "thursday": "Thursday",
                "fri": "Friday", "friday": "Friday"
            }
            while True:
                raw_day = self._ask("Day (Mon-Fri): ")
                day = day_map.get(raw_day.strip().lower())
                if day:
                    break
                print("  Please enter Mon, Tue, Wed, Thu or Fri.")
            time = self._ask_time("Hour (1-12): ")
            subject = self._ask("Subject: ")
            room = self._ask("Room: ")
            self._school_tt.add_class(day, time, subject, room)
        elif choice == "3":
            self._study_tt.display()
        elif choice == "4":
            day_map = {
                "mon": "Monday", "monday": "Monday",
                "tue": "Tuesday", "tuesday": "Tuesday",
                "wed": "Wednesday", "wednesday": "Wednesday",
                "thu": "Thursday", "thursday": "Thursday",
                "fri": "Friday", "friday": "Friday",
                "sat": "Saturday", "saturday": "Saturday",
                "sun": "Sunday", "sunday": "Sunday"
            }
            while True:
                raw_day = self._ask("Day (Mon-Sun): ")
                day = day_map.get(raw_day.strip().lower())
                if day:
                    break
                print("  Please enter Mon, Tue, Wed, Thu, Fri, Sat or Sun.")
            subject = self._ask("Subject: ")
            start = self._ask_time("Start hour (1-12): ")
            hours = self._ask_float("Hours (e.g. 2): ")
            self._study_tt.add_session(day, subject, start, hours)
        elif choice == "5":
            self._todo.display_pending()
        elif choice == "6":
            desc = self._ask("Task description: ")
            while True:
                priority = self._ask("Priority (low/normal/high): ").lower()
                if priority in ["low", "normal", "high"]:
                    break
                print("  Please enter low, normal or high.")
            self._todo.add_task(desc, priority)
        elif choice == "7":
            pending = [t for t in self._todo._tasks if not t["done"]]
            if not pending:
                print("  No pending tasks.")
            else:
                print()
                print("  Pending tasks:")
                for i, task in enumerate(pending, 1):
                    marker = "!!!" if task["priority"] == "high" else "   "
                    print(f"  {i}. {marker} [{task['priority'].upper():6}] {task['description']}")
                while True:
                    raw = self._ask("Enter task number to complete: ")
                    try:
                        num = int(raw)
                        if 1 <= num <= len(pending):
                            break
                        print(f"  Please enter a number between 1 and {len(pending)}.")
                    except ValueError:
                        print("  Please enter a number.")
                self._todo.complete_task(pending[num - 1]["description"])
        elif choice == "8":
            self._tracker.display_all()
        elif choice == "9":
            title = self._ask("Assessment title: ")
            desc = self._ask("Description: ")
            while True:
                due = self._ask("Due date (e.g. 9/6/26): ")
                try:
                    parts = due.strip().split("/")
                    if len(parts) == 3:
                        due = "/".join(p.zfill(2) for p in parts)
                    datetime.strptime(due, "%d/%m/%y")
                    break
                except ValueError:
                    print("  Please enter a valid date as D/M/YY or DD/MM/YY (e.g. 9/6/26).")
            subject = self._ask("Subject: ")
            a = Assessment(title, desc, due, subject)
            self._tracker.add_assessment(a)
        elif choice == "10":
            assessments = self._tracker._assessments
            if not assessments:
                print("  No assessments added yet.")
            else:
                print("\\n  Assessments:")
                for i, a in enumerate(assessments, 1):
                    print(f"  {i}. {a.title} (due {a.due_date})")
                while True:
                    raw = self._ask("Enter assessment number: ")
                    try:
                        num = int(raw)
                        if 1 <= num <= len(assessments):
                            break
                        print(f"  Please enter a number between 1 and {len(assessments)}.")
                    except ValueError:
                        print("  Please enter a number.")
                a = assessments[num - 1]
                print(f"  Scaffold sections: {', '.join(a._scaffold.keys())}")
                section = self._ask("Scaffold section: ")
                notes = self._ask("Notes: ")
                a.add_scaffold_note(section, notes)
        elif choice == "11":
            assessments = self._tracker._assessments
            if not assessments:
                print("  No assessments added yet.")
            else:
                print("\\n  Assessments:")
                for i, a in enumerate(assessments, 1):
                    print(f"  {i}. {a.title} (due {a.due_date})")
                while True:
                    raw = self._ask("Enter assessment number: ")
                    try:
                        num = int(raw)
                        if 1 <= num <= len(assessments):
                            break
                        print(f"  Please enter a number between 1 and {len(assessments)}.")
                    except ValueError:
                        print("  Please enter a number.")
                a = assessments[num - 1]
                mark = self._ask_float("Mark received: ")
                max_mark = self._ask_float("Out of: ")
                a.set_mark(mark, max_mark)
        elif choice == "0":
            print(f"Goodbye, {self._student.name}! Good luck with your studies.")
        else:
            print("Invalid choice. Please enter a number from the menu.")
    def run(self):
        print()
        print(f"Welcome, {self._student.name}!")
        while True:
            self._show_menu()
            print()
            choice = input("Enter your choice: ").strip()
            self._handle_choice(choice)
            if choice == "0":
                break


if __name__ == "__main__":
    name = input("Enter your name: ")
    year = int(input("Enter your year level: "))
    app = StudyAidApp(name, year)
    app.run()`,
      },
      {
        title: "Where to go from here",
        terms: [],
        quiz: [
          {
            type: "mcq",
            question: "Which OOP principle describes the ability of different classes to respond to the same method name in their own way?",
            options: ["Encapsulation", "Inheritance", "Abstraction", "Polymorphism"],
            answer: 3,
            explanation: "Polymorphism means 'many forms'. Each class can have a display() method, but each one does the right thing for its own type of object."
          },
          {
            type: "tf",
            question: "True or False: abstraction means hiding complex internal details and providing a simple interface for other code to use.",
            answer: true,
            explanation: "True. Abstraction lets you call timetable.add_class() without needing to know how the schedule dictionary works internally."
          },
          {
            type: "fill",
            question: "What are the four core principles of OOP covered in this course? List them separated by commas.",
            answers: ["encapsulation, inheritance, polymorphism, abstraction", "abstraction, encapsulation, inheritance, polymorphism", "inheritance, encapsulation, abstraction, polymorphism", "polymorphism, abstraction, encapsulation, inheritance"],
            explanation: "The four principles are encapsulation, inheritance, polymorphism, and abstraction — sometimes remembered as EIPA or A-PIE."
          }
        ],
        content: `
<p>You have built a complete, working Python application using all the core principles of Object-Oriented Programming. Here is a summary of everything you have learned across the six tutorials:</p>
<ul>
  <li><strong>Class</strong> — a blueprint for creating objects</li>
  <li><strong>Constructor</strong> — sets up an object when it is created</li>
  <li><strong>Self</strong> — an object referring to itself</li>
  <li><strong>Variable</strong> — a named storage location</li>
  <li><strong>Attribute</strong> — a variable belonging to an object</li>
  <li><strong>Object / Instance</strong> — a real thing made from a class blueprint</li>
  <li><strong>Method</strong> — a function that belongs to a class</li>
  <li><strong>Encapsulation</strong> — bundling data and methods, controlling access</li>
  <li><strong>Inheritance</strong> — building a new class on top of an existing one</li>
  <li><strong>Polymorphism</strong> — different classes responding to the same method name</li>
  <li><strong>Abstraction</strong> — hiding complexity behind a clean interface</li>
</ul>
<p>Here are some ideas for extending this project:</p>
<ul>
  <li>Save data to a text file so it persists between sessions (file I/O)</li>
  <li>Add a <code>Reminder</code> class that alerts the student about upcoming due dates</li>
  <li>Build a <code>MarkCalculator</code> that computes the GPA or weighted average across all assessments</li>
  <li>Create a <code>SubjectSummary</code> class that groups assessments and study time by subject</li>
  <li>Add a graphical interface using <code>tkinter</code> (Python's built-in GUI library)</li>
</ul>
<p>Each of these extensions will use the OOP principles you have already learned. The foundation is solid — now build on it.</p>`,
        code: null,
        codeExplain: null
      }
    ]
  }
];
// touched 2026-06-05
