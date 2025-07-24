// Private Equity Data Maturity Assessment Scoring Rules

// KPI Consistency Scoring (Q5)
export const CONSISTENCY_SCORING = {
  'Always': 10,
  'Mostly': 7,
  'Rarely': 3,
  'Never': 0
};

// Reporting Latency Scoring (Q7)
export const LATENCY_SCORING = {
  'Same day': 10,
  '≤7 days': 8,
  '8-14 days': 5,
  '>14 days': 1
};

// Manual Work Scoring (Q8)
export const MANUAL_WORK_SCORING = {
  '0-10%': 10,
  '11-30%': 7,
  '31-60%': 4,
  '61-100%': 1
};

// Advanced Analytics Scoring (Q11)
export const ANALYTICS_SCORING = {
  'None': 1,
  'Automated variance commentary': 4,
  'Forecast models': 7,
  'ML / GenAI simulations': 10
};

// Cloud/SaaS Scoring (Q12)
export const CLOUD_SCORING = {
  'Yes, >80%': 3,
  'Hybrid': 2,
  'Mostly on-prem': 1,
  'Unsure': 0
};

// Governance scoring - +2 points per safeguard, capped at 10
export const GOVERNANCE_POINTS_PER_SAFEGUARD = 2;
export const GOVERNANCE_MAX_POINTS = 10;

// Persona Definitions based on total score (0-50 points)
export const PERSONAS = {
  P0: {
    range: [0, 12],
    label: 'Reactive / Spreadsheet-Centric',
    description: 'KPIs in silos; manual fire-fighting',
    recommendations: [
      'Run a Strategic Data Roadmap',
      'Standardize top-10 KPIs and definitions',
      'Replace spreadsheet consolidations with a single source of truth'
    ]
  },
  P1: {
    range: [13, 24],
    label: 'Foundational / Board-Ready',
    description: 'Defined KPIs but manual pulls; hindsight view',
    recommendations: [
      'Automate refresh pipelines to cut manual effort',
      'Deliver sprint-based dashboards to prove value quickly',
      'Pilot GenAI to draft variance commentary for board packs'
    ]
  },
  P2: {
    range: [25, 34],
    label: 'Integrated / Synergy-Seeker',
    description: 'Systems integrated; weekly insight loop',
    recommendations: [
      'Stand up a scalable cloud data platform (SaaS-first)',
      'Embed Q&A chat over dashboards for executives',
      'Formalize governance council to keep definitions aligned'
    ]
  },
  P3: {
    range: [35, 44],
    label: 'Predictive / Value Accelerator',
    description: 'Forecasting & scenario models guide decisions',
    recommendations: [
      'Embed analytics into frontline workflows (pricing, inventory)',
      'Validate governance to support ML at scale',
      'Use GenAI to simulate strategic options before board meetings'
    ]
  },
  P4: {
    range: [45, 50],
    label: 'Strategic / Exit-Ready',
    description: 'Data is a differentiator; equity story asset',
    recommendations: [
      'Transition run-state to Managed Data Services to control costs and ensure continuity',
      'Tighten forward-looking governance & audit trails to de-risk diligence',
      'Establish DataOps + GenAI operating model for continuous insight delivery'
    ]
  }
};

// CTA Configurations based on context
export const CTA_CONFIGURATIONS = {
  'Stabilize (0-12 months)': {
    primaryCTA: 'Download our PE Data Maturity Whitepaper',
    primaryCTALink: 'https://hubs.ly/Q03w50s40',
    secondaryCTA: 'Schedule Stabilization Consult',
    valueProposition: 'Get your data foundation right during the critical stabilization phase.'
  },
  'Scale (13-36 months)': {
    primaryCTA: 'Download our PE Data Maturity Whitepaper',
    primaryCTALink: 'https://hubs.ly/Q03w50s40',
    secondaryCTA: 'Schedule Scale Strategy Session',
    valueProposition: 'Accelerate growth with data-driven insights and automation.'
  },
  'Exit prep (>36 months)': {
    primaryCTA: 'Download our PE Data Maturity Whitepaper',
    primaryCTALink: 'https://hubs.ly/Q03w50s40',
    secondaryCTA: 'Schedule Exit Prep Review',
    valueProposition: 'Maximize valuation with bulletproof data governance and analytics.'
  }
};

// Scoring dimension weights for 50-point scale
export const SCORING_DIMENSIONS = {
  KPI_BREADTH: { maxPoints: 10, weight: 1 },
  CONSISTENCY: { maxPoints: 10, weight: 1 },
  GOVERNANCE: { maxPoints: 10, weight: 1 },
  AUTOMATION_INTEGRATION: { maxPoints: 10, weight: 1 },
  ANALYTICS_READINESS: { maxPoints: 10, weight: 1 }
};

// Legacy exports for compatibility
export const LATENCY_LABELS = {
  'Same day': 'same day',
  '≤7 days': 'within a week',
  '8-14 days': '1-2 weeks',
  '>14 days': 'more than 2 weeks'
};

export const LEAD_SCORING_WEIGHTS = {
  PE_HOLD_PERIOD: {
    'Stabilize (0-12 months)': 5,
    'Scale (13-36 months)': 10,
    'Exit prep (>36 months)': 15
  },
  GROWTH_STRATEGY: {
    'Organic': 5,
    'Acquisition-led': 10,
    'Mix': 8
  },
  SYSTEM_COMPLEXITY: {
    '1': -5,
    '2-3': 0,
    '4-6': 5,
    '7+': 10
  }
}; 