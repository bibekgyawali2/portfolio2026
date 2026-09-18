/**
 * All page content. Edit here; the page composes itself from this file.
 */

export const identity = {
  name: "Bibek Gyawali",
  summary:
    "Electronics and Communication Engineering graduate, Tribhuvan University. I work on closed-loop control, biomedical instrumentation, and learning from signals on resource-constrained hardware.",
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

export const statement = [
  "My undergraduate thesis was a closed-loop ventilator built for a hospital system where a commercial unit costs more than a rural clinic's annual equipment budget. Making it work meant tuning a PID loop against real pneumatic dynamics, trusting a MAX30100 and an MPX5010 to close that loop in real time, and accepting that a missed deadline in the control path is a clinical failure, not a dropped frame.",
  "That problem is what I want to keep working on: control and estimation on hardware that is cheap enough to deploy widely, and the signal processing and machine learning that make such systems trustworthy. I am applying for master's study to do this with proper depth — stronger foundations in control theory and statistical signal processing, and the research training to evaluate a system rather than merely demonstrate it.",
];

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
