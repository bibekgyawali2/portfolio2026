export type Project = {
  slug: string;
  title: string;
  year: string;
  kind: string;
  /** One line, used in lists. */
  summary: string;
  /** Opening line on the project's own page. */
  lede: string;
  facts: { term: string; description: string }[];
  repo?: string;
  /** Assessment, for work that carries one. */
  grade?: string;
  /** Condensed bullets for the CV page; falls back to `summary`. */
  cv?: string[];
  /** Optional link to a running deployment or app store. */
  demo?: string;
  demoLabel?: string;
  sections: { heading: string; body: string[] }[];
};

export const projects: Project[] = [
  {
    slug: "ventilator",
    title: "Low-cost automated ventilator",
    year: "2021",
    kind: "Undergraduate thesis",
    grade: "76/100",
    repo: "",
    cv: [
      "Designed and prototyped a fully functional closed-loop ventilator, implementing PID control in embedded C on Arduino to regulate tidal volume and airway pressure against the non-linear dynamics of a bag-valve pneumatic system.",
      "Instrumented the device with a MAX30100 pulse oximeter, MPX5010 differential pressure sensor and LM35 temperature sensor over I²C and analog interfaces, sampling SpO₂, heart rate and airway pressure fast enough to sit inside the control loop rather than merely report after it.",
      "Built the patient monitoring interface with live waveform visualisation, carrying the system end to end from hardware prototype to clinical-facing software.",
    ],
    summary:
      "A closed-loop bag-valve mask ventilator with real-time airway pressure regulation and live patient waveform telemetry.",
    lede: "An automated emergency ventilator prototyping closed-loop PID control in embedded C, with continuous airway pressure and SpO₂ telemetry on an Arduino platform.",
    facts: [
      { term: "Control", description: "PID loop in embedded C on Arduino" },
      {
        term: "Sensing",
        description: "MAX30100 (SpO₂, heart rate), MPX5010 (differential pressure), LM35 (temperature)",
      },
      { term: "Interfaces", description: "I²C and analog acquisition" },
      // { term: "Assessed", description: "76/100" },
    ],
    sections: [
      {
        heading: "Background & Objectives",
        body: [
          "Commercial ventilators in Nepal are primarily imported, costly to maintain, and difficult to service outside major tertiary hospitals. This project investigated whether core mechanical ventilation functions—specifically regulated tidal volume and pressure control—could be delivered using accessible, locally replaceable electromechanical and sensor components.",
        ],
      },
      {
        heading: "System Architecture & Control",
        body: [
          "The mechanical system automates compression of a standard bag-valve mask (BVM) using a motor-driven mechanical actuator. Because a pneumatic reservoir exhibits non-linear resistance over its stroke and varies with patient lung compliance, open-loop timed actuation delivers inconsistent volumes across changing airway states.",
          "To stabilize delivery, the system implements closed-loop PID control. An MPX5010 differential pressure sensor continuously samples airway pressure to modulate actuator displacement and rate set-points. A MAX30100 sensor provides pulse oximetry (SpO₂) and heart rate over I²C, while an LM35 analog sensor measures circuit temperature. Sampling routines execute within the primary control loop to enable dynamic cycle interruption upon overpressure detection.",
          "A companion monitoring interface parses serial telemetry to display real-time airway pressure curves, respiration rate, and patient vitals for visual inspection.",
        ],
      },
      {
        heading: "Engineering Challenges",
        body: [
          "Actuator gain tuning required extensive bench calibration against pneumatic backpressures to minimize overshoot while maintaining responsive rise times. Additionally, running multi-sensor acquisition, PID calculation, and serial telemetry within strict real-time deadlines on an 8-bit microcontroller required tight control over loop execution times and interrupt priorities.",
        ],
      },
      {
        heading: "Limitations & Future Work",
        body: [
          "Future iterations would benefit from formal mathematical system identification of patient airway impedance, transitioning from empirical PID to model-predictive control (MPC), and validation against a calibrated artificial test lung.",
        ],
      },
    ],
  },
  {
    slug: "kathmandu-metropolitan-app",
    title: "Kathmandu Metropolitan City digital governance platform",
    year: "2023",
    kind: "Civic technology",
    summary:
      "Municipal civic service mobile ecosystem deployed for Kathmandu Metropolitan City, serving 100,000+ citizens with digital recommendations and grievance dispatch.",
    lede: "Architected and engineered civic technology mobile applications for Kathmandu Metropolitan City, digitizing municipal recommendations, grievance reporting, and citizen verification workflows.",
    facts: [
      { term: "Platform", description: "Flutter (Android & iOS), Node.js, PostgreSQL" },
      { term: "Scale", description: "100,000+ registered citizens across 32 wards" },
      { term: "Organization", description: "SmartPalika / CellApp, Kathmandu" },
      {
        term: "Key modules",
        description: "eSifaris (digital recommendations), Hello Mayor (grievances), ward services",
      },
      { term: "Deployment", description: "Google Play Store" },
    ],
    demo: "https://play.google.com/store/search?q=kathmandu+metropolitan+city&c=apps&hl=en",
    demoLabel: "View on Google Play",
    cv: [
      "Engineered the official citizen services mobile platform for Kathmandu Metropolitan City, scaling to over 100,000 citizens across 32 municipal wards.",
      "Implemented digital municipal recommendation workflows (eSifaris) and automated grievance routing to local ward officers, reducing turnaround times from days to hours.",
      "Optimized rendering and payload serialization for low-bandwidth cellular networks and varied Android device specifications.",
    ],
    sections: [],
  },
  {
    slug: "nepse-forecasting",
    title: "Forecasting NEPSE prices with LSTMs",
    year: "2023",
    kind: "Machine learning",
    summary:
      "Time-series forecasting on Nepal Stock Exchange equity data, comparing recurrent architectures against naive persistence baselines.",
    lede: "Recurrent sequence modeling using Long Short-Term Memory (LSTM) networks applied to daily closing index data on the Nepal Stock Exchange.",
    facts: [
      { term: "Model", description: "LSTM over windowed price history" },
      { term: "Data", description: "NEPSE daily closing prices" },
      { term: "Evaluated", description: "RMSE against observed trends" },
      { term: "Tools", description: "Python, Keras, Pandas" },
    ],
    repo: "https://github.com/bibekgyawali2/Stock-Market-Prediction-using-LSTM-NEPSE-Dataset",
    sections: [
      {
        heading: "Market Context & Dataset",
        body: [
          "The Nepal Stock Exchange (NEPSE) is an emerging equity market characterized by low liquidity, concentrated sector capitalization, and non-stationary trading volume. Historical daily closing prices and volume metrics were compiled, normalized, and transformed into sliding lookback windows.",
        ],
      },
      {
        heading: "Model Architecture",
        body: [
          "An LSTM recurrent network was implemented in Python using Keras and Pandas. Input features included sequence-windowed closing prices, simple and exponential moving averages, and normalized volatility indicators. The network was trained using Mean Squared Error loss and evaluated across out-of-sample test splits.",
        ],
      },
      {
        heading: "Evaluation & Baseline Analysis",
        body: [
          "While the model achieved a low test Root Mean Squared Error (RMSE) that visually appeared to track market trends, benchmarking against a naive persistence baseline (predicting price(t) = price(t-1)) demonstrated that the LSTM was predominantly learning a one-step delayed identity mapping.",
          "This analysis demonstrated that standard regression metrics on autocorrelated time series can be misleading without strict benchmark comparisons and directional change accuracy metrics.",
        ],
      },
    ],
  },
  {
    slug: "fraud-detection",
    title: "Credit card fraud detection under severe class imbalance",
    year: "2023",
    kind: "Machine learning",
    summary:
      "Classification pipeline on transaction data with <0.2% positive instances, utilizing resampling and threshold optimization.",
    lede: "Binary classification pipeline addressing extreme class imbalance in electronic transaction fraud detection.",
    facts: [
      { term: "Model", description: "Logistic regression baseline" },
      { term: "Problem", description: "Binary classification, positives well under 1%" },
      { term: "Handling", description: "Resampling to correct class balance" },
      { term: "Evaluated", description: "Precision, recall, AUC-ROC" },
    ],
    repo: "https://github.com/bibekgyawali2/Credit-Card-Fraud-Detection-using-Logistic-Regression",
    sections: [
      {
        heading: "Problem Formulation",
        body: [
          "In electronic credit card transaction data, legitimate transactions vastly outnumber fraudulent activity, with positive cases accounting for less than 0.2% of total events. Under this level of class skew, raw classification accuracy is uninformative, as a trivial majority-class classifier achieves >99.8% accuracy while detecting zero fraud.",
        ],
      },
      {
        heading: "Methodology & Resampling",
        body: [
          "A supervised classification pipeline was developed in Python using scikit-learn. Training distributions were adjusted using Synthetic Minority Over-sampling (SMOTE) and targeted undersampling strategies to improve minority class representation without degrading classifier calibration on validation sets.",
        ],
      },
      {
        heading: "Threshold Optimization & Evaluation",
        body: [
          "Models were evaluated using Precision-Recall Area Under the Curve (PR-AUC), F1-score, and cost-matrix analysis. Decision thresholds were tuned explicitly to balance the operational tradeoff between false positive customer verification friction and false negative fraud losses.",
        ],
      },
    ],
  },
];

export function projectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
