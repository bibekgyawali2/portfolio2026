/**
 * All page content. Edit here; the pages compose themselves from this file.
 */

export const identity = {
  name: "Bibek Gyawali",
  summary:
    "Electronics and Communication Engineering graduate, Tribhuvan University. Embedded control, instrumentation and signal processing, with three years building production software.",
  location: "Kathmandu, Nepal",
  email: "gyawali.b@outlook.com",
  links: [
    { label: "GitHub", href: "https://github.com/bibekgyawali2" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/bibek-gyawali-433642236/",
    },
  ],
};

/**
 * ─────────────────────────────────────────────────────────────────────
 * FILL THESE IN. An admissions committee looks for every one of them,
 * and their absence is read as a weak answer rather than a missing one.
 * Any field left empty simply will not render.
 * ─────────────────────────────────────────────────────────────────────
 */
export const credentials = {
  /** e.g. "78.4% (First Division)" or "3.42 / 4.0". The single most-screened number. */
  gpa: "",
  /** Foreign committees do not know Tribhuvan's scale. Tell them. */
  gradingScale: "",
  /** Add the four band scores and the exact month — committees check sub-scores. */
  englishTest: "IELTS 7.0 overall (2026)",
  /** Optional; only list if the score helps you. */
  gre: "",
  /** Thesis supervisor, with title and department. Names research provenance. */
  supervisor: "",
  /** Link to the thesis PDF. Hosting it costs nothing and proves the work exists. */
  thesisUrl: "",
};

export const nav = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "CV", href: "/cv" },
];

export const home = {
  /** The opening line. Set in display type; keep it to one idea. */
  display:
    "I build instruments — things that measure something real and then act on it.",
  intro: [
    "I am an electronics engineer in Kathmandu. My thesis was a ventilator: a closed-loop device built from parts a hospital workshop could source, with a PID controller holding airway pressure against lungs that do not behave linearly.",
    "Alongside the degree I spent three years writing software that reached a lot of people — municipal services used by over 100,000 citizens, a retail platform running in 1,000 shops. Useful work, and it paid for the degree, but the ventilator is the problem I want to keep.",
  ],
  now: "Applying for master's study in systems that sense, compute and act — control, instrumentation and signal processing.",
};

export const about = {
  lede: "Electronics and Communication Engineering, Tribhuvan University. I work on control, instrumentation and signals — and I have spent three years shipping production software to people who had no choice but to rely on it.",
  story: [
    "I came to engineering through software, which is the usual route here: it pays, it is learnable from a laptop, and there is real demand. For three years I built mobile systems for Nepali municipalities and businesses — the digital governance application for Kathmandu Metropolitan City among them — and I learned the thing that production teaches and coursework cannot, which is what it costs to keep a system correct once people depend on it and you cannot take it back.",
    "The thesis pulled me back to hardware. Building a ventilator meant confronting a plant that fights you: a bag valve mask whose resistance shifts through the stroke and shifts again with the patient. A timer cannot handle that; a closed loop can. Getting a PID controller to hold tidal volume against real pneumatics, with three sensors feeding it over I²C and analog lines, was the most interesting problem I have been given, and I got it working.",
    "I also know how far short of rigorous that work fell. I tuned the gains by hand because I had no model of the plant, and I could demonstrate the device holding its set point without being able to state a stability margin. Working and characterised are not the same thing, and the distance between them is what I want to close.",
    "So: a master's, with the mathematics and the research training to evaluate a system rather than merely demonstrate one. Longer term I want to work on instrumentation that can be deployed where the expensive version never arrives.",
  ],
};

export const interests = [
  {
    label: "Control",
    title: "Embedded control and real-time systems",
    body: "Closed-loop control on microcontrollers: deterministic timing, sensor-in-the-loop tuning, and stability under the constraints of low-cost hardware.",
  },
  {
    label: "Biomedical",
    title: "Biomedical instrumentation",
    body: "Low-cost sensing and patient monitoring for clinical settings where standard equipment is out of reach — acquisition, conditioning, and the validation such devices require.",
  },
  {
    label: "Signals",
    title: "Signal processing and applied machine learning",
    body: "Time-series modelling and evaluation under noise, drift, and severe class imbalance, with attention to whether a reported metric means anything.",
  },
];

export const education = [
  {
    period: "2017–2025",
    degree: "B.E. Electronics and Communication Engineering",
    institution: "Tribhuvan University, Kathmandu",
    /**
     * Eight years on a four-year degree is the first thing a reader will
     * question. Answer it before they ask. Edit this to the true account.
     */
    note: "Programme duration reflects Tribhuvan University's delayed academic calendar over this period, alongside full-time engineering work from 2022.",
  },
];

export const coursework = [
  {
    term: "Mathematics",
    description:
      "Engineering Mathematics I–IV (calculus, linear algebra, differential equations, complex variables and transforms), probability and statistics, numerical methods",
  },
  {
    term: "Signals",
    description:
      "Digital signal processing, control systems, communication systems, electromagnetics, radar technology",
  },
  {
    term: "Hardware",
    description:
      "Microprocessors and embedded systems, instrumentation, digital and analog electronics",
  },
];

export const thesis = {
  period: "2024–2025",
  title: "Low-Cost Automated Ventilator with Real-Time Patient Monitoring",
  grade: "76/100",
  body: [
    "Designed and prototyped a fully functional closed-loop ventilator, implementing PID control in embedded C on Arduino to regulate tidal volume and airway pressure against the non-linear dynamics of a bag-valve pneumatic system.",
    "Instrumented the device with a MAX30100 pulse oximeter, MPX5010 differential pressure sensor and LM35 temperature sensor over I²C and analog interfaces, sampling SpO₂, heart rate and airway pressure fast enough to sit inside the control loop rather than merely report after it.",
    "Built the patient monitoring interface with live waveform visualisation, carrying the system end to end from hardware prototype to clinical-facing software.",
  ],
};

export const experience = {
  preamble:
    "Three years of production engineering, concurrent with the degree. It funded my studies and taught me what it costs to keep a system correct once people depend on it.",
  roles: [
    {
      period: "Dec 2025 – present",
      role: "Mobile Application Developer",
      institution: "Kingsoft, Kathmandu",
      body: [
        "Architected a Flutter codebase on the BLoC pattern and built the CI/CD and automated test pipeline in GitHub Actions across iOS and Android.",
        "Profiled and removed performance bottlenecks — widget tree, memory, lazy loading — for low-end Android hardware, which is most of the installed base here.",
      ],
      /** A reader will notice the gap before this role. Account for it. */
      note: "",
    },
    {
      period: "Nov 2022 – Mar 2024",
      role: "Mobile Application Developer",
      institution: "CellApp / SmartPalika, Kathmandu",
      body: [
        "Built civic technology for 15+ municipal governments, including the digital governance application for Kathmandu Metropolitan City, serving over 100,000 citizens.",
        "Developed a retail SaaS platform with real-time inventory and billing, deployed to 1,000+ businesses, and presented the systems to government officials to drive adoption.",
      ],
      note: "",
    },
  ],
};

export const skills = [
  {
    term: "Instrumentation",
    description:
      "Arduino (C/C++), PID control loops, sensor integration over I²C, SPI and analog, real-time data acquisition, signal conditioning",
  },
  {
    term: "Scientific",
    description:
      "Python, NumPy, Pandas, Matplotlib, scikit-learn, PyTorch, Keras",
  },
  {
    term: "Programming",
    description: "Python, C/C++, Dart, TypeScript, Java",
  },
  {
    term: "Engineering",
    description: "Flutter, Node.js, PostgreSQL, Docker, AWS, Git, GitHub Actions",
  },
];

export const awards = [
  {
    term: "2023",
    description:
      "Award of Excellence, CellApp / SmartPalika — for contributions to civic technology development",
  },
  {
    term: "2023",
    description:
      "Supervised Machine Learning: Regression and Classification — DeepLearning.AI (Coursera), Andrew Ng",
  },
];

export const languages = [
  { term: "Nepali", description: "Native" },
  {
    term: "English",
    description:
      "Medium of instruction throughout secondary and undergraduate education",
  },
];

/** Committees expect names. Add your supervisor and one professional referee. */
export const referees: { term: string; description: string }[] = [];
