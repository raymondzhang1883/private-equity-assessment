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
  '1–3 days': 10,
  '4–6 days': 8,
  '7–10 days': 6,
  '11–15 days': 3,
  'More than 15 days': 1,
  'Varies / Not consistent': 2,
  'Not sure': 1
};

// Manual Work Scoring (Q8)
export const MANUAL_WORK_SCORING = {
  '0–10% (mostly automated)': 10,
  '11–25%': 8,
  '26–50%': 5,
  '51–75%': 3,
  '76–100% (mostly manual)': 1,
  'Not sure': 2
};

// Advanced Analytics Scoring (Q11)
export const ANALYTICS_SCORING = {
  'Automated variance commentary (for board reports)': 4,
  'Predictive forecasting models': 7,
  'Real-time performance dashboards': 5,
  'Self-service analytics for executives': 6,
  'AI-powered insights generation': 10,
  'None - basic reporting only': 1
};

// Cloud/SaaS Scoring (Q12)
export const CLOUD_SCORING = {
  'Fully cloud-based / SaaS (e.g., NetSuite, Power BI, Snowflake)': 10,
  'Mostly cloud, with some on-premise systems': 7,
  'Mostly on-premise, with limited cloud tools': 4,
  'Entirely on-premise / legacy systems': 1,
  'Not sure': 2
};

// Governance scoring - +2 points per safeguard, capped at 10
export const GOVERNANCE_POINTS_PER_SAFEGUARD = 2;
export const GOVERNANCE_MAX_POINTS = 10;

// CTA Configurations based on context
export const CTA_CONFIGURATIONS = {
  'Newly acquired (0–12 months)': {
    primaryCTA: 'Download our PE Data Maturity Whitepaper',
    primaryCTALink: 'https://hubs.ly/Q03w50s40',
    secondaryCTA: 'Schedule Stabilization Consult',
    valueProposition: 'Get your data foundation right during the critical stabilization phase.'
  },
  'Early hold (Year 1–2)': {
    primaryCTA: 'Download our PE Data Maturity Whitepaper',
    primaryCTALink: 'https://hubs.ly/Q03w50s40',
    secondaryCTA: 'Schedule Early Growth Strategy Session',
    valueProposition: 'Build scalable data infrastructure for sustainable growth.'
  },
  'Mid hold (Year 2–4)': {
    primaryCTA: 'Download our PE Data Maturity Whitepaper',
    primaryCTALink: 'https://hubs.ly/Q03w50s40',
    secondaryCTA: 'Schedule Scale Strategy Session',
    valueProposition: 'Accelerate growth with data-driven insights and automation.'
  },
  'Late hold / Exit planning (Year 4–5+)': {
    primaryCTA: 'Download our PE Data Maturity Whitepaper',
    primaryCTALink: 'https://hubs.ly/Q03w50s40',
    secondaryCTA: 'Schedule Exit Prep Review',
    valueProposition: 'Maximize valuation with bulletproof data governance and analytics.'
  }
};

// Scoring dimension weights for 60-point scale
export const SCORING_DIMENSIONS = {
  KPI_BREADTH: { maxPoints: 10, weight: 1 },
  CONSISTENCY: { maxPoints: 10, weight: 1 },
  GOVERNANCE: { maxPoints: 10, weight: 1 },
  AUTOMATION_INTEGRATION: { maxPoints: 10, weight: 1 },
  ANALYTICS_READINESS: { maxPoints: 10, weight: 1 },
  CLOUD_ADOPTION: { maxPoints: 10, weight: 1 }
};

// Legacy exports for compatibility
export const LATENCY_LABELS = {
  '1–3 days': 'within 3 days',
  '4–6 days': 'within a week',
  '7–10 days': '1-2 weeks',
  '11–15 days': '2-3 weeks',
  'More than 15 days': 'more than 2 weeks',
  'Varies / Not consistent': 'inconsistent timing',
  'Not sure': 'uncertain'
};

export const LEAD_SCORING_WEIGHTS = {
  PE_HOLD_PERIOD: {
    'Newly acquired (0–12 months)': 5,
    'Early hold (Year 1–2)': 8,
    'Mid hold (Year 2–4)': 10,
    'Late hold / Exit planning (Year 4–5+)': 15
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