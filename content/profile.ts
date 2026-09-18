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
  /** Add the four band scores — committees check sub-scores, not just the overall. */
  englishTest: "IELTS 7.0 overall",
  englishTestDate: "2026",
  /** Optional; only list if the score helps you. */
  gre: "",
  greDate: "",
  /** Thesis supervisor, with title and department. Names research provenance. */
  supervisor: "",
  /** Link to the thesis PDF. Hosting it costs nothing and proves the work exists. */
  thesisUrl: "",
};

export const nav = [
  { label: "Work", href: "/work" },
  { label: "CV", href: "/cv" },
];

export const home = {
  /** The opening line. Set in display type; keep it to one idea. */
  display:
    "Computer science and 5G wireless communication, from signal processing up.",
  intro: [
    "I am an electronics engineer in Kathmandu. My thesis was a ventilator: a closed-loop device built from parts a hospital workshop could source, with a PID controller holding airway pressure against lungs that do not behave linearly.",
    "Alongside the degree I spent three years writing software that reached a lot of people — municipal services used by over 100,000 citizens, a retail platform running in 1,000 shops. Useful work, and it paid for the degree, but the ventilator is the problem I want to keep.",
  ],
  now: "Applying for master's study in these areas.",
};

export const interests = [
  {
    label: "Control",
    title: "Embedded control and real-time systems",
  },
  {
    label: "Biomedical",
    title: "Biomedical instrumentation",
  },
  {
    label: "Signals",
    title: "Signal processing and applied machine learning",
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
