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
  sections: { heading: string; body: string[] }[];
};

export const projects: Project[] = [
  {
    slug: "ventilator",
    title: "Low-cost automated ventilator",
    year: "2025",
    kind: "Undergraduate thesis",
    summary:
      "A closed-loop ventilator built from a bag valve mask, three sensors and an Arduino.",
    lede: "My undergraduate thesis: a working ventilator assembled from parts a hospital workshop could source and repair, with the control loop and the patient monitor both written from scratch.",
    facts: [
      { term: "Control", description: "PID loop in embedded C on Arduino" },
      {
        term: "Sensing",
        description: "MAX30100 (SpO₂, heart rate), MPX5010 (differential pressure), LM35 (temperature)",
      },
      { term: "Interfaces", description: "I²C and analog acquisition" },
      { term: "Assessed", description: "76/100" },
    ],
    sections: [
      {
        heading: "The problem",
        body: [
          "Ventilators are imported into Nepal at prices that put them out of reach of the clinics that need them most, and a unit that fails in a district hospital is a unit that goes back on a plane. The question I wanted to answer was narrow and practical: how much of a ventilator's actual function can you get from components a local workshop can buy, replace and understand?",
        ],
      },
      {
        heading: "How it works",
        body: [
          "An actuator compresses a bag valve mask on a timed cycle. That much is easy. The difficulty is that a bag is not a linear plant — its resistance changes through the stroke, and it changes again with the patient's own lung compliance, so an open-loop timer delivers a different breath every time conditions shift.",
          "So the device closes the loop. An MPX5010 differential pressure sensor reads airway pressure continuously, and a PID controller in embedded C adjusts the stroke to hold tidal volume and pressure at their set points. A MAX30100 supplies SpO₂ and heart rate over I²C, and an LM35 handles temperature. All of it is sampled fast enough to be inside the control loop rather than merely reported after the fact.",
          "The monitoring interface plots the signals live, which turned out to matter as much as the control: a clinician does not trust a number without the waveform behind it.",
        ],
      },
      {
        heading: "What was hard",
        body: [
          "Tuning. I tuned the PID gains by hand against the real pneumatics because I did not have a model of the plant, and hand-tuning gets you to working but not to justified — I could show the device holding its set point, but I could not tell you its stability margin.",
          "The other thing the project taught me is what a real-time deadline means when the application is clinical. In application software a late frame is a stutter. Here, a control action that arrives a cycle late is a breath the patient did not get.",
        ],
      },
      {
        heading: "What I would do next",
        body: [
          "Proper system identification instead of hand tuning, a model-based controller with margins I can state, and validation against a calibrated test lung rather than a bench demonstration. That gap — between a device that works and a device whose behaviour is characterised — is most of why I am applying for master's study.",
        ],
      },
    ],
  },
  {
    slug: "nepse-forecasting",
    title: "Forecasting NEPSE prices with LSTMs",
    year: "2023",
    kind: "Machine learning",
    summary:
      "A recurrent model on a thin, noisy emerging market — and what its error metric did not prove.",
    lede: "A time-series model trained to forecast closing prices on the Nepal Stock Exchange, and an honest look at what an RMSE figure does and does not establish.",
    facts: [
      { term: "Model", description: "LSTM over windowed price history" },
      { term: "Data", description: "NEPSE daily closing prices" },
      { term: "Evaluated", description: "RMSE against observed trends" },
      { term: "Tools", description: "Python, Keras, Pandas" },
    ],
    repo: "https://github.com/bibekgyawali2/Stock-Market-Prediction-using-LSTM-NEPSE-Dataset",
    sections: [
      {
        heading: "Why this market",
        body: [
          "Most forecasting tutorials run on deep, liquid markets with decades of clean history. NEPSE is the opposite: thin trading, a small number of dominant sectors, and stretches where price moves say more about liquidity than about value. If a method survives here, the data is doing less of the work.",
        ],
      },
      {
        heading: "Approach",
        body: [
          "I engineered features from the raw series, windowed it into fixed-length sequences, and trained an LSTM to predict the next closing price. Evaluation was RMSE, with predicted and actual trends plotted together.",
        ],
      },
      {
        heading: "What I actually learned",
        body: [
          "The plotted curves look convincing, and that is the trap. A model predicting tomorrow's close from a smooth price series can score a low RMSE while doing little more than repeating today's price with a lag — the metric rewards it and the chart flatters it.",
          "Taking that seriously is what moved me toward caring about evaluation design rather than model architecture: what baseline is this beating, what would a null result look like, and does the error measure answer the question I am actually asking.",
        ],
      },
    ],
  },
  {
    slug: "fraud-detection",
    title: "Detection under severe class imbalance",
    year: "2023",
    kind: "Machine learning",
    summary:
      "A classification pipeline where the positive class is a fraction of a percent and accuracy is meaningless.",
    lede: "A logistic regression pipeline on real transaction data, built around the problem that makes fraud detection interesting: almost nothing is fraud.",
    facts: [
      { term: "Model", description: "Logistic regression baseline" },
      { term: "Problem", description: "Binary classification, positives well under 1%" },
      { term: "Handling", description: "Resampling to correct class balance" },
      { term: "Evaluated", description: "Precision, recall, AUC-ROC" },
    ],
    repo: "https://github.com/bibekgyawali2/Credit-Card-Fraud-Detection-using-Logistic-Regression",
    sections: [
      {
        heading: "The shape of the problem",
        body: [
          "In the transaction data, genuine fraud is a fraction of a percent of rows. A classifier that answers \"not fraud\" to everything is over 99% accurate and completely worthless, which makes accuracy an actively misleading measure rather than merely a weak one.",
        ],
      },
      {
        heading: "Approach",
        body: [
          "I built a logistic regression pipeline as a baseline, applied resampling so the training distribution was not overwhelmed by the negative class, and scored it on precision, recall and AUC-ROC.",
        ],
      },
      {
        heading: "What I actually learned",
        body: [
          "Where you put the decision threshold is not a property of the model, it is a statement about cost: a missed fraud and a wrongly blocked customer are different kinds of expensive, and only someone who knows the business can price them. The model supplies a ranking; the threshold is a policy decision.",
          "That separation — between what the statistics give you and what the deployment has to decide — is the part of applied machine learning I find genuinely interesting.",
        ],
      },
    ],
  },
];

export function projectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
