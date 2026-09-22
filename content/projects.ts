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
  /** Optional link to a running deployment. */
  demo?: string;
  sections: { heading: string; body: string[] }[];
};

export const projects: Project[] = [
  {
    slug: "ventilator",
    title: "Low-cost automated ventilator",
    year: "2025",
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
      { term: "Assessed", description: "76/100" },
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
    slug: "construction-cost",
    title: "Predicting building construction cost from early-stage design",
    year: "2026",
    kind: "Research project",
    summary:
      "Empirical regression modeling on 67 residential buildings in Kathmandu Valley comparing linear, ensemble, and neural network architectures.",
    lede: "Regression analysis predicting final construction expenditure from preliminary structural and architectural design parameters in Kathmandu Valley.",
    facts: [
      { term: "Data", description: "67 buildings, cost adjusted to base year 2025/26" },
      {
        term: "Features",
        description: "Plinth area, column count, storeys, foundation type, location",
      },
      {
        term: "Models",
        description: "Linear baseline, random forest, ANN (k-fold CV), XGBoost and LightGBM with grid search",
      },
      { term: "Best", description: "Random forest — R² 0.84, MAPE 4.94%" },
      { term: "Deployed", description: "Streamlit predictor (private)" },
    ],
    cv: [
      "Collected and normalised a dataset of 67 completed residential buildings across the Kathmandu Valley, adjusting every cost to a 2025/26 base year so that figures separated by years of material inflation could be compared.",
      "Compared a linear baseline, a random forest, a k-fold cross-validated feed-forward ANN, and tuned XGBoost and LightGBM models; the random forest reached R² 0.84 at 4.94% MAPE, and the linear baseline matched it at R² 0.85.",
      "Reported the negative result — that the additional capacity of the neural network is unjustified at this sample size — supported by residual, Q–Q, error-distribution and feature-importance diagnostics.",
    ],
    repo: "https://github.com/bibekgyawali2/ANN-based-Prediction-of-Final-Construction-Cost-of-Residential-Buildings-in-Kathmandu-Valley-at-an-E",
    demo: "",
    sections: [
      {
        heading: "Dataset & Normalization",
        body: [
          "In residential construction, financial commitments are made early in the architectural design phase before detailed quantity surveying is possible. This study collected structural and financial data from 67 completed residential buildings across Kathmandu Valley to evaluate whether preliminary design parameters reliably determine final construction expenditure.",
          "Historical project costs were normalized to a 2025/26 base year using national construction material and labor price indices, allowing comparisons across projects completed under varying inflationary environments.",
        ],
      },
      {
        heading: "Modeling Methodology",
        body: [
          "Five predictive models were trained and evaluated: an Ordinary Least Squares (OLS) linear baseline, Random Forest regressor, a feed-forward Artificial Neural Network (ANN) with k-fold cross-validation, and hyperparameter-tuned XGBoost and LightGBM models. Key features included plinth area, column count, storey count, foundation type, and municipal location.",
          "Model validation included residual analysis, Q–Q normality diagnostics, error distribution profiling, and feature importance rankings.",
        ],
      },
      {
        heading: "Evaluation & Findings",
        body: [
          "The Random Forest regressor attained an R² of 0.84 with a Mean Absolute Percentage Error (MAPE) of 4.94%, closely matched by the linear baseline at R² = 0.85. In contrast, the neural network achieved R² = 0.69, exhibiting pronounced variance and overfitting.",
          "With a small tabular dataset of 67 observations and five primary predictors, the high parameter capacity of a deep neural network offered no advantage over linear and decision-tree baselines. The empirical relationship between preliminary physical dimensions and total build cost is predominantly linear at this scale.",
        ],
      },
      {
        heading: "Limitations",
        body: [
          "The 67-building sample limits granular geographic stratification across Kathmandu Valley sub-markets. Expanding the dataset and outputting calibrated prediction intervals rather than single-point estimates would improve practical decision utility.",
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
