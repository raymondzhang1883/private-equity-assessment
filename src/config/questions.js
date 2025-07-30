export const sections = [
  { id: 'context', title: 'Business Context', icon: 'Target' },
  { id: 'kpis', title: 'KPI Tracking', icon: 'BarChart3' },
  { id: 'reporting', title: 'Reporting & Integration', icon: 'Settings' },
  { id: 'governance', title: 'Governance & Usage', icon: 'Building' },
  { id: 'analytics', title: 'Advanced Analytics', icon: 'Users' }
];

export const peKPIs = [
  'Revenue Growth (Total & by Segment)',
  'EBITDA / EBITDA Margin',
  'Customer Retention / Churn Rate',
  'Sales Pipeline & Conversion Rates',
  'Operational Efficiency (e.g., DSO, Inventory Turns, Utilization)',
  'Headcount & Labor Productivity',
  'Forecast Accuracy (Revenue and EBITDA)',
  'Net Promoter Score (NPS) or Customer Satisfaction'
];

export const questions = {
  context: [
    {
      id: 'Q1',
      question: 'Where is your PortCo in the PE hold period?',
      type: 'single-select',
      options: [
        'Newly acquired (0–12 months)',
        'Early hold (Year 1–2)',
        'Mid hold (Year 2–4)',
        'Late hold / Exit planning (Year 4–5+)'
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
        'Revenue Growth (Total & by Segment)',
        'EBITDA / EBITDA Margin',
        'Customer Retention / Churn Rate',
        'Sales Pipeline & Conversion Rates',
        'Operational Efficiency (e.g., DSO, Inventory Turns, Utilization)',
        'Headcount & Labor Productivity',
        'Forecast Accuracy (Revenue and EBITDA)',
        'Net Promoter Score (NPS) or Customer Satisfaction'
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
        'ERP system (e.g., NetSuite, SAP, Microsoft Dynamics)',
        'Excel / Google Sheets',
        'Business Intelligence Tool (e.g., Power BI, Tableau, Looker)',
        'Data Warehouse / Lake (e.g., Snowflake, Redshift, Databricks)',
        'CRM (e.g., Salesforce, HubSpot)',
        'Custom-built system'
      ]
    },
    {
      id: 'Q7',
      question: 'How many days after month-end can the board see final numbers?',
      type: 'single-select',
      options: [
        '1–3 days',
        '4–6 days',
        '7–10 days',
        '11–15 days',
        'More than 15 days',
        'Varies / Not consistent',
        'Not sure'
      ]
    },
    {
      id: 'Q8',
      question: 'Approximately what percentage of data used for monthly reporting requires manual handling (e.g., via Excel, email, copy/paste)?',
      type: 'single-select',
      options: [
        '0–10% (mostly automated)',
        '11–25%',
        '26–50%',
        '51–75%',
        '76–100% (mostly manual)',
        'Not sure'
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
        'Defined data owners or stewards',
        'Formal data governance policies or standards',
        'Automated data quality checks in reporting',
        'Role-based user access controls',
        'Change control process for reporting logic or data models',
        'None / Informal governance only'
      ]
    },
    {
      id: 'Q10',
      question: 'Who actively uses data dashboards to support day-to-day or strategic decision-making?',
      type: 'multi-select',
      note: 'Select all that apply',
      options: [
        'Executive leadership (CEO, CFO, COO, etc.)',
        'Department heads / functional leaders',
        'Front-line managers / team leads',
        'Analysts / data teams only',
        'Board members',
        'Dashboards are rarely used'
      ]
    }
  ],
  analytics: [
    {
      id: 'Q11',
      question: 'Which advanced capabilities are live today?',
      type: 'single-select',
      options: [
        'Automated variance commentary (for board reports)',
        'Predictive forecasting models',
        'Real-time performance dashboards',
        'Self-service analytics for executives',
        'AI-powered insights generation',
        'None - basic reporting only'
      ]
    },
    {
      id: 'Q12',
      question: 'Is your data and reporting stack primarily cloud-based (SaaS)?',
      type: 'single-select',
      options: [
        'Fully cloud-based / SaaS (e.g., NetSuite, Power BI, Snowflake)',
        'Mostly cloud, with some on-premise systems',
        'Mostly on-premise, with limited cloud tools',
        'Entirely on-premise / legacy systems',
        'Not sure'
      ]
    }
  ]
}; 