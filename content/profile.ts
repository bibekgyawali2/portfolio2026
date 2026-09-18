/**
 * All page content. Edit here; the page composes itself from this file.
 */

export const identity = {
  name: "Bibek Gyawali",
  summary:
    "Electronics and Communication Engineering graduate, Tribhuvan University, with research interests across 5G wireless systems, machine learning, and software engineering.",
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

export const nav = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "CV", href: "/cv" },
];

export const home = {
  /** The opening line. Set in display type; keep it to one idea. */
  display:
    "5G wireless systems, artificial intelligence, and software engineering.",
  intro: [
    "I am an electronics engineer in Kathmandu. My thesis was a ventilator: a closed-loop device built from parts a hospital workshop could source, with a PID controller holding airway pressure against lungs that do not behave linearly.",
    "Before that, and alongside the degree, I spent three years writing software that reached a lot of people — municipal services used by over 100,000 citizens, a retail platform running in 1,000 shops. Useful work, and it paid for the degree, but the ventilator is the problem I want to keep.",
  ],
  now: "Applying for master's study in 5G wireless systems, artificial intelligence, and software engineering.",
};

export const about = {
  lede: "Electronics and Communication Engineering, Tribhuvan University. I work on control, instrumentation and signals — and I have spent three years shipping production software to people who had no choice but to rely on it.",
  story: [
    "I came to engineering through software, which is the usual route here: it pays, it is learnable from a laptop, and there is real demand. For three years I built mobile systems for Nepali municipalities and businesses — the digital governance application for Kathmandu Metropolitan City among them — and I learned the thing that production teaches and coursework cannot, which is what it costs to keep a system correct once people depend on it and you cannot take it back.",
    "The thesis pulled me back to hardware. Building a ventilator meant confronting a plant that fights you: a bag valve mask whose resistance shifts through the stroke and shifts again with the patient. A timer cannot handle that; a closed loop can. Getting a PID controller to hold tidal volume against real pneumatics, with three sensors feeding it over I²C and analog lines, was the most interesting problem I have been given, and I got it working.",
    "I also know exactly how far short of rigorous that work fell. I tuned the gains by hand because I had no model of the plant, and I could demonstrate the device holding its set point without being able to state a stability margin. Working and characterised are not the same thing, and the distance between them is the thing I want to close.",
    "So: a master's, in control theory and statistical signal processing, with the research training to evaluate a system rather than merely demonstrate one. Longer term I want to work on instrumentation that can be deployed where the expensive version never arrives.",
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
    body: [
      "Thesis: *Low-Cost Automated Ventilator with Real-Time Patient Monitoring* — 76/100.",
      "Coursework: digital signal processing, control systems, microprocessors and embedded systems, instrumentation, electromagnetics, probability and statistics, radar technology.",
    ],
    note: "Completed while working full-time as a software engineer from 2022 onward.",
  },
];

export const research = [
  {
    period: "Thesis",
    title: "Low-Cost Automated Ventilator with Real-Time Patient Monitoring",
    body: [
      "Designed and prototyped a fully functional closed-loop ventilator, implementing PID control in embedded C on Arduino to regulate tidal volume and airway pressure against the non-linear dynamics of a bag-valve pneumatic system.",
      "Instrumented the device with a MAX30100 pulse oximeter, MPX5010 differential pressure sensor, and LM35 temperature sensor over I²C and analog interfaces, acquiring SpO₂, heart rate, and lung pressure at rates sufficient to close the control loop.",
      "Built the monitoring interface for live waveform visualisation, carrying the system end to end from hardware prototype to clinical-facing software.",
    ],
  },
  {
    period: "2023",
    title: "Time-series forecasting of NEPSE equity prices with LSTMs",
    href: "https://github.com/bibekgyawali2/Stock-Market-Prediction-using-LSTM-NEPSE-Dataset",
    body: [
      "Trained a recurrent architecture to forecast closing prices on the Nepal Stock Exchange, with feature engineering and windowing over a thin, noisy emerging-market series.",
      "Evaluated by RMSE against observed trends, treating the gap between plausible-looking predictions and genuine predictive power as the result worth reporting.",
    ],
  },
  {
    period: "2023",
    title: "Fraud detection under severe class imbalance",
    href: "https://github.com/bibekgyawali2/Credit-Card-Fraud-Detection-using-Logistic-Regression",
    body: [
      "Built a logistic regression pipeline on a real transaction dataset where the positive class is a fraction of a percent, applying resampling to correct the imbalance.",
      "Assessed with precision, recall, and AUC-ROC rather than accuracy, which is uninformative at this skew.",
    ],
  },
];

export const experience = {
  preamble:
    "Three years of production engineering, concurrent with my degree. It funded my studies and taught me what it costs to keep a system correct once real people depend on it.",
  roles: [
    {
      period: "2025–now",
      role: "Mobile Application Developer",
      institution: "Kingsoft, Kathmandu",
      body: [
        "Architected a Flutter codebase on the BLoC pattern and built the CI/CD and automated test pipeline in GitHub Actions across iOS and Android.",
        "Profiled and removed performance bottlenecks — widget tree, memory, lazy loading — for low-end Android hardware, which is most of the installed base here.",
      ],
    },
    {
      period: "2022–2024",
      role: "Mobile Application Developer",
      institution: "CellApp / SmartPalika, Kathmandu",
      body: [
        "Built civic technology for 15+ municipal governments, including the digital governance application for Kathmandu Metropolitan City, serving over 100,000 citizens.",
        "Developed a retail SaaS platform with real-time inventory and billing, deployed to 1,000+ businesses, and presented the systems to government officials to drive adoption.",
      ],
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
    term: "Machine learning",
    description:
      "Python, PyTorch, Keras, scikit-learn, NumPy, Pandas, Matplotlib",
  },
  {
    term: "Programming",
    description: "Python, C/C++, Dart, TypeScript, Java",
  },
  {
    term: "Engineering",
    description:
      "Flutter, React, Node.js, PostgreSQL, Docker, AWS, Git, GitHub Actions",
  },
];

export const also = [
  {
    term: "2023",
    description:
      "Supervised Machine Learning: Regression and Classification — DeepLearning.AI, Andrew Ng",
  },
  {
    term: "2023",
    description:
      "Award of Excellence, CellApp / SmartPalika, for contributions to civic technology development",
  },
  {
    term: "Networking",
    description: "CCNA Networking Fundamentals, 45 hours — Himalaya College of Engineering",
  },
  {
    term: "Languages",
    description: "English (professional working proficiency), Nepali (native)",
  },
];
