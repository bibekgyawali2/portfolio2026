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
  englishTest: "",
  englishTestDate: "",
  gre: "",
  greDate: "",
  supervisor: "",
  thesisUrl: "",
};

export const nav = [
  { label: "Projects", href: "/projects" },
];


export const education = [
  {
    period: "2018–2023",
    degree: "B.E. Electronics and Communication Engineering",
    institution: "Tribhuvan University, Kathmandu",
    note: "",
  },
];

export const experience = {
  preamble: "",
  roles: [
    {
      period: "Dec 2025 – present",
      role: "Software Engineer",
      institution: "Kingsoft, Kathmandu",
      institutionHref: "https://www.linkedin.com/company/kingsoft-tech/",
      logo: "/logos/kingsoft.png",
      body: [
        "Architected a Flutter codebase on the BLoC pattern and built the CI/CD and automated test pipeline in GitHub Actions across iOS and Android.",
        "Profiled and removed performance bottlenecks across the widget tree, memory, and lazy loading for low-end Android hardware, which is most of the installed base here.",
      ],
      note: "",
    },
    {
      period: "Nov 2022 – Mar 2024",
      role: "Mobile Application Developer",
      institution: "CellApp / SmartPalika, Kathmandu",
      institutionHref: "https://www.linkedin.com/company/smartpalika/",
      logo: "/logos/cellapp.png",
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
    term: "Languages",
    description: "Python, C/C++, Dart, TypeScript, Java",
  },
  {
    term: "Machine Learning & AI",
    description:
      "PyTorch, scikit-learn, NumPy, Pandas, Matplotlib, Keras",
  },
  {
    term: "Embedded & Hardware",
    description:
      "Arduino (C/C++), PID control loops, sensor integration over I²C, SPI and analog, real-time data acquisition, signal conditioning",
  },
  {
    term: "Frameworks & Cloud",
    description: "Flutter, Node.js, PostgreSQL, Docker, AWS, Git, GitHub Actions",
  },
];

export type Certification = {
  title: string;
  issuer: string;
  year: string;
  logo: string;
  href?: string;
};

export const certifications: Certification[] = [
  {
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "DeepLearning.AI",
    year: "2023",
    logo: "/logos/deeplearning-ai.png",
    href: "https://www.coursera.org/account/accomplishments/verify/ENQCHQ9R2U39",
  },
  {
    title: "Award of Excellence",
    issuer: "CellApp / SmartPalika",
    year: "2023",
    logo: "/logos/smartpalika.png",
    href: "https://smartpalika.org",
  },
];

export const awards = [
  {
    term: "2023",
    description: "Award of Excellence, CellApp / SmartPalika",
  },
  {
    term: "2023",
    description:
      "Supervised Machine Learning: Regression and Classification | DeepLearning.AI (Coursera)",
  },
];

export const referees: { term: string; description: string }[] = [];
