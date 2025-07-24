export const sections = [
  { id: 'context', title: 'Business Context', icon: 'Target' },
  { id: 'kpis', title: 'KPI Tracking', icon: 'BarChart3' },
  { id: 'reporting', title: 'Reporting & Integration', icon: 'Settings' },
  { id: 'governance', title: 'Governance & Usage', icon: 'Building' },
  { id: 'analytics', title: 'Advanced Analytics', icon: 'Users' }
];

export const peKPIs = [
  'Revenue growth %',
  'EBITDA margin',
  'Net working-capital days',
  'Synergy capture $',
  'Customer churn %',
  'Cash conversion cycle'
];

export const questions = {
  context: [
    {
      id: 'Q1',
      question: 'Where is your PortCo in the PE hold period?',
      type: 'single-select',
      options: [
        'Stabilize (0-12 months)',
        'Scale (13-36 months)', 
        'Exit prep (>36 months)'
      ]
    },
    {
      id: 'Q2',
      question: 'What growth strategy dominates today?',
      type: 'single-select',
      options: [
        'Organic',
        'Acquisition-led',
        'Mix'
      ]
    },
    {
      id: 'Q3',
      question: 'How many ERP/CRM/finance systems are currently in use across the business?',
      type: 'single-select',
      options: [
        '1',
        '2-3',
        '4-6',
        '7+'
      ]
    }
  ],
  kpis: [
    {
      id: 'Q4',
      question: 'Which value-creation KPIs are reviewed monthly?',
      type: 'multi-select',
      note: 'Select all that apply',
      options: [
        'Revenue growth %',
        'EBITDA margin',
        'Net working-capital days',
        'Synergy capture $',
        'Customer churn %',
        'Cash conversion cycle'
      ]
    },
    {
      id: 'Q5',
      question: 'Do all business units calculate those KPIs the same way?',
      type: 'single-select',
      options: [
        'Always',
        'Mostly',
        'Rarely',
        'Never'
      ]
    }
  ],
  reporting: [
    {
      id: 'Q6',
      question: 'Primary reporting source today?',
      type: 'multi-select',
      note: 'Select all that apply',
      options: [
        'Cloud DW/BI',
        'On-prem DB',
        'Excel',
        'Board deck slides'
      ]
    },
    {
      id: 'Q7',
      question: 'How many days after month-end can the board see final numbers?',
      type: 'single-select',
      options: [
        'Same day',
        '≤7 days',
        '8-14 days',
        '>14 days'
      ]
    },
    {
      id: 'Q8',
      question: 'Estimated % of data still touched manually each cycle?',
      type: 'single-select',
      options: [
        '0-10%',
        '11-30%',
        '31-60%',
        '61-100%'
      ]
    }
  ],
  governance: [
    {
      id: 'Q9',
      question: 'Which governance safeguards are formally in place?',
      type: 'multi-select',
      note: 'Select all that apply',
      options: [
        'Data dictionary',
        'Ownership RACI',
        'Access controls',
        'Compliance audits',
        'None'
      ]
    },
    {
      id: 'Q10',
      question: 'Who actively uses data dashboards to run the business?',
      type: 'multi-select',
      note: 'Select all that apply',
      options: [
        'Board',
        'C-suite',
        'Functional VPs',
        'Line managers',
        'Analysts'
      ]
    }
  ],
  analytics: [
    {
      id: 'Q11',
      question: 'Which advanced capabilities are live today?',
      type: 'single-select',
      options: [
        'None',
        'Automated variance commentary',
        'Forecast models',
        'ML / GenAI simulations'
      ]
    },
    {
      id: 'Q12',
      question: 'Is your stack predominantly SaaS/cloud?',
      type: 'single-select',
      options: [
        'Yes, >80%',
        'Hybrid',
        'Mostly on-prem',
        'Unsure'
      ]
    }
  ]
}; 