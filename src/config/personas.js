// Private Equity Data Maturity Personas (0-60 point scale)  
export const PERSONA_THRESHOLDS = {
  P4: 54,
  P3: 42,
  P2: 30,
  P1: 15,
  P0: 0
};

export const PERSONA_LABELS = {
  P4: 'Strategic / Value Multiplier',
  P3: 'Predictive / Optimized',
  P2: 'Integrated / Insight-driven',
  P1: 'Standardized / Foundational',
  P0: 'Ad Hoc / Fire-fighting'
};

export const PERSONA_DESCRIPTIONS = {
  P0: 'KPIs in silos; manual fire-fighting. Your data processes are reactive and heavily dependent on spreadsheets.',
  P1: 'Defined KPIs but manual pulls; hindsight view. You have the basics in place but rely on manual processes.',
  P2: 'Systems integrated; weekly insight loop. Your data flows between systems and informs regular decision-making.',
  P3: 'Forecasting & scenario models guide decisions. You use predictive analytics to drive strategic choices.',
  P4: 'Data is a differentiator; equity story asset. Your data capabilities directly contribute to valuation and exit readiness.'
};

export const BASE_RECOMMENDATIONS = {
  P0: [
    'Run a Strategic Data Roadmap',
    'Standardize top-10 KPIs and definitions',
    'Replace spreadsheet consolidations with a single source of truth'
  ],
  P1: [
    'Automate refresh pipelines to cut manual effort',
    'Deliver sprint-based dashboards to prove value quickly',
    'Pilot GenAI to draft variance commentary for board packs'
  ],
  P2: [
    'Stand up a scalable cloud data platform (SaaS-first)',
    'Embed Q&A chat over dashboards for executives',
    'Formalize governance council to keep definitions aligned'
  ],
  P3: [
    'Embed analytics into frontline workflows (pricing, inventory)',
    'Validate governance to support ML at scale',
    'Use GenAI to simulate strategic options before board meetings'
  ],
  P4: [
    'Transition run-state to Managed Data Services to control costs and ensure continuity',
    'Tighten forward-looking governance & audit trails to de-risk diligence',
    'Establish DataOps + GenAI operating model for continuous insight delivery'
  ]
};

// Growth strategy context recommendations
export const GROWTH_STRATEGY_RECOMMENDATIONS = {
  'Organic': 'Focus on customer analytics and operational efficiency KPIs to drive sustainable growth.',
  'Acquisition-led': 'Prioritize integration capabilities and synergy tracking to maximize M&A value.',
  'Mix': 'Balance organic growth metrics with acquisition integration frameworks.'
};

// Hold period context recommendations
export const HOLD_PERIOD_RECOMMENDATIONS = {
  'Newly acquired (0–12 months)': 'Establish data foundation and standardize core KPIs across business units.',
  'Early hold (Year 1–2)': 'Build scalable data infrastructure and automate reporting processes.',
  'Mid hold (Year 2–4)': 'Implement advanced analytics and automation to accelerate growth.',
  'Late hold / Exit planning (Year 4–5+)': 'Strengthen governance and create data story that enhances valuation.'
};

 