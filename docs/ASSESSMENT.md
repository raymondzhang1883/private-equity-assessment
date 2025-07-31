# Private Equity Data Maturity Assessment

## Overview

This assessment evaluates a private equity portfolio company's data maturity across six key dimensions. The assessment consists of 12 questions across 5 sections, with a maximum total score of 60 points that determines the company's data maturity persona.

## Assessment Structure

The assessment is organized into five sections:

1. **Business Context** (3 questions) - Understanding company stage and complexity
2. **KPI Tracking** (2 questions) - Value creation metrics and consistency
3. **Reporting & Integration** (3 questions) - Data sources, timing, and automation
4. **Governance & Usage** (2 questions) - Data governance and stakeholder usage
5. **Advanced Analytics** (2 questions) - Advanced capabilities and cloud adoption

## Questions and Answer Choices

### Section 1: Business Context

**Q1: Where is your PortCo in the PE hold period?**
- Single-select question
- Options:
  - Newly acquired (0–12 months)
  - Early hold (Year 1–2)
  - Mid hold (Year 2–4)
  - Late hold / Exit planning (Year 4–5+)

**Q2: What growth strategy dominates today?**
- Single-select question
- Options:
  - Organic
  - Acquisition-led
  - Mix

**Q3: How many ERP/CRM/finance systems are currently in use across the business?**
- Single-select question
- Options:
  - 1
  - 2-3
  - 4-6
  - 7+

### Section 2: KPI Tracking

**Q4: Which value-creation KPIs are reviewed monthly?**
- Multi-select question (Select all that apply)
- Options:
  - Revenue Growth (Total & by Segment)
  - EBITDA / EBITDA Margin
  - Customer Retention / Churn Rate
  - Sales Pipeline & Conversion Rates
  - Operational Efficiency (e.g., DSO, Inventory Turns, Utilization)
  - Headcount & Labor Productivity
  - Forecast Accuracy (Revenue and EBITDA)
  - Net Promoter Score (NPS) or Customer Satisfaction

**Q5: Do all business units calculate those KPIs the same way?**
- Single-select question
- Options:
  - Always
  - Mostly
  - Rarely
  - Never

### Section 3: Reporting & Integration

**Q6: Primary reporting source today?**
- Multi-select question (Select all that apply)
- Options:
  - ERP system (e.g., NetSuite, SAP, Microsoft Dynamics)
  - Excel / Google Sheets
  - Business Intelligence Tool (e.g., Power BI, Tableau, Looker)
  - Data Warehouse / Lake (e.g., Snowflake, Redshift, Databricks)
  - CRM (e.g., Salesforce, HubSpot)
  - Custom-built system

**Q7: How many days after month-end can the board see final numbers?**
- Single-select question
- Options:
  - 1–3 days
  - 4–6 days
  - 7–10 days
  - 11–15 days
  - More than 15 days
  - Varies / Not consistent
  - Not sure

**Q8: Approximately what percentage of data used for monthly reporting requires manual handling (e.g., via Excel, email, copy/paste)?**
- Single-select question
- Options:
  - 0–10% (mostly automated)
  - 11–25%
  - 26–50%
  - 51–75%
  - 76–100% (mostly manual)
  - Not sure

### Section 4: Governance & Usage

**Q9: Which governance safeguards are formally in place?**
- Multi-select question (Select all that apply)
- Options:
  - Defined data owners or stewards
  - Formal data governance policies or standards
  - Automated data quality checks in reporting
  - Role-based user access controls
  - Change control process for reporting logic or data models
  - None / Informal governance only

**Q10: Who actively uses data dashboards to support day-to-day or strategic decision-making?**
- Multi-select question (Select all that apply)
- Options:
  - Executive leadership (CEO, CFO, COO, etc.)
  - Department heads / functional leaders
  - Front-line managers / team leads
  - Analysts / data teams only
  - Board members
  - Dashboards are rarely used

### Section 5: Advanced Analytics

**Q11: Which advanced capabilities are live today?**
- Single-select question
- Options:
  - Automated variance commentary (for board reports)
  - Predictive forecasting models
  - Real-time performance dashboards
  - Self-service analytics for executives
  - AI-powered insights generation
  - None - basic reporting only

**Q12: Is your data and reporting stack primarily cloud-based (SaaS)?**
- Single-select question
- Options:
  - Fully cloud-based / SaaS (e.g., NetSuite, Power BI, Snowflake)
  - Mostly cloud, with some on-premise systems
  - Mostly on-premise, with limited cloud tools
  - Entirely on-premise / legacy systems
  - Not sure

## Scoring Methodology

The assessment uses a 60-point scoring system across six dimensions, with each dimension worth up to 10 points:

### 1. KPI Breadth Score (0-10 points)
- **Source**: Question 4 (KPIs reviewed monthly)
- **Calculation**: (Number of selected KPIs ÷ 8 total KPIs) × 10
- **Purpose**: Measures comprehensiveness of KPI tracking

### 2. Consistency Score (0-10 points)
- **Source**: Question 5 (KPI calculation consistency)
- **Scoring**:
  - Always: 10 points
  - Mostly: 7 points
  - Rarely: 3 points
  - Never: 0 points

### 3. Governance Score (0-10 points)
- **Source**: Question 9 (governance safeguards)
- **Calculation**: 2 points per safeguard selected (excluding "None"), capped at 10 points
- **Purpose**: Measures formal data governance maturity

### 4. Automation & Integration Score (0-10 points)
- **Sources**: Questions 6, 7, and 8 (reporting sources, latency, manual work)
- **Calculation**: Average of three component scores:
  - **Reporting Source Score**:
    - Data Warehouse/Lake: 10 points
    - Business Intelligence Tool: 8 points
    - ERP/CRM systems: 6 points
    - Custom-built system: 4 points
    - Excel/Sheets: 2 points
  - **Latency Score**:
    - 1–3 days: 10 points
    - 4–6 days: 8 points
    - 7–10 days: 6 points
    - 11–15 days: 3 points
    - More than 15 days: 1 point
    - Varies/Not consistent: 2 points
    - Not sure: 1 point
  - **Manual Work Score**:
    - 0–10% (mostly automated): 10 points
    - 11–25%: 8 points
    - 26–50%: 5 points
    - 51–75%: 3 points
    - 76–100% (mostly manual): 1 point
    - Not sure: 2 points

### 5. Advanced Analytics Score (0-10 points)
- **Source**: Question 11 (advanced capabilities)
- **Scoring**:
  - AI-powered insights generation: 10 points
  - Predictive forecasting models: 7 points
  - Self-service analytics for executives: 6 points
  - Real-time performance dashboards: 5 points
  - Automated variance commentary: 4 points
  - None - basic reporting only: 1 point

### 6. Cloud Adoption Score (0-10 points)
- **Source**: Question 12 (cloud/SaaS adoption)
- **Scoring**:
  - Fully cloud-based/SaaS: 10 points
  - Mostly cloud, some on-premise: 7 points
  - Mostly on-premise, limited cloud: 4 points
  - Entirely on-premise/legacy: 1 point
  - Not sure: 2 points

## Data Maturity Personas

Based on the total score (0-60 points), companies are classified into five personas:

### P0: Reactive / Spreadsheet-Centric (0-14 points)
- **Description**: KPIs in silos; manual fire-fighting
- **Characteristics**: Data processes are reactive and heavily dependent on spreadsheets
- **Recommendations**:
  - Run a Strategic Data Roadmap
  - Standardize top-10 KPIs and definitions
  - Replace spreadsheet consolidations with a single source of truth

### P1: Foundational / Board-Ready (15-29 points)
- **Description**: Defined KPIs but manual pulls; hindsight view
- **Characteristics**: Basic processes in place but rely on manual work
- **Recommendations**:
  - Automate refresh pipelines to cut manual effort
  - Deliver sprint-based dashboards to prove value quickly
  - Pilot GenAI to draft variance commentary for board packs

### P2: Integrated / Synergy-Seeker (30-41 points)
- **Description**: Systems integrated; weekly insight loop
- **Characteristics**: Data flows between systems and informs regular decision-making
- **Recommendations**:
  - Stand up a scalable cloud data platform (SaaS-first)
  - Embed Q&A chat over dashboards for executives
  - Formalize governance council to keep definitions aligned

### P3: Predictive / Value Accelerator (42-53 points)
- **Description**: Forecasting & scenario models guide decisions
- **Characteristics**: Use predictive analytics to drive strategic choices
- **Recommendations**:
  - Embed analytics into frontline workflows (pricing, inventory)
  - Validate governance to support ML at scale
  - Use GenAI to simulate strategic options before board meetings

### P4: Strategic / Exit-Ready (54-60 points)
- **Description**: Data is a differentiator; equity story asset
- **Characteristics**: Data capabilities directly contribute to valuation and exit readiness
- **Recommendations**:
  - Transition run-state to Managed Data Services to control costs and ensure continuity
  - Tighten forward-looking governance & audit trails to de-risk diligence
  - Establish DataOps + GenAI operating model for continuous insight delivery

## Context-Specific Recommendations

### By Hold Period

**Newly acquired (0–12 months)**:
- Focus: Establish data foundation and standardize core KPIs across business units
- CTA: Download PE Data Maturity Whitepaper / Schedule Stabilization Consult

**Early hold (Year 1–2)**:
- Focus: Build scalable data infrastructure and automate reporting processes
- CTA: Download PE Data Maturity Whitepaper / Schedule Early Growth Strategy Session

**Mid hold (Year 2–4)**:
- Focus: Implement advanced analytics and automation to accelerate growth
- CTA: Download PE Data Maturity Whitepaper / Schedule Scale Strategy Session

**Late hold / Exit planning (Year 4–5+)**:
- Focus: Strengthen governance and create data story that enhances valuation
- CTA: Download PE Data Maturity Whitepaper / Schedule Exit Prep Review

### By Growth Strategy

**Organic**:
- Focus on customer analytics and operational efficiency KPIs to drive sustainable growth

**Acquisition-led**:
- Prioritize integration capabilities and synergy tracking to maximize M&A value

**Mix**:
- Balance organic growth metrics with acquisition integration frameworks

## Lead Scoring

The assessment also includes lead scoring based on context questions:

### PE Hold Period Weights:
- Newly acquired (0–12 months): 5 points
- Early hold (Year 1–2): 8 points
- Mid hold (Year 2–4): 10 points
- Late hold / Exit planning (Year 4–5+): 15 points

### Growth Strategy Weights:
- Organic: 5 points
- Acquisition-led: 10 points
- Mix: 8 points

### System Complexity Weights:
- 1 system: -5 points
- 2-3 systems: 0 points
- 4-6 systems: 5 points
- 7+ systems: 10 points

## Assessment Output

The final assessment provides:
1. **Overall maturity persona** (P0-P4)
2. **Detailed scoring breakdown** across all six dimensions
3. **Personalized recommendations** based on persona and context
4. **Context-specific action items** based on hold period and growth strategy
5. **Lead scoring** for sales qualification purposes