/**
 * Portfolio profile content and identity.
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

export const credentials = {
  gpa: "",
  gradingScale: "",
  englishTest: "IELTS 7.0 overall",
  englishTestDate: "2026",
  gre: "",
  greDate: "",
  supervisor: "",
  thesisUrl: "",
};

export const nav = [
  { label: "CV", href: "/" },
  { label: "Projects", href: "/projects" },
];

export const home = {
  display:
    "Computer science and 5G wireless communication, from signal processing up.",
  intro: [
    "I am an electronics engineer in Kathmandu. My thesis was a ventilator: a closed-loop device built from parts a hospital workshop could source, with a PID controller holding airway pressure against lungs that do not behave linearly.",
    "Alongside the degree I spent three years writing software that reached a lot of people — municipal services used by over 100,000 citizens, and a retail platform running in 1,000 shops. Useful work that funded my studies, but real-time systems and biomedical instrumentation are the problems I want to pursue.",
  ],
  now: "Applying for master's study in these areas.",
};

export const education = [
  {
    period: "2018–2023",
    degree: "B.E. Electronics and Communication Engineering",
    institution: "Tribhuvan University, Kathmandu",
    note: "",
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
      "Supervised Machine Learning: Regression and Classification — DeepLearning.AI (Coursera)",
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

export const referees: { term: string; description: string }[] = [];
