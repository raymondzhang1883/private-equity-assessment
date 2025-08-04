# Private Equity Data Maturity Assessment - Persona Scoring

## Overview
This assessment evaluates data maturity across 6 core dimensions to determine a company's persona on a scale of 0-60 points. Each question contributes to specific subscores that combine to form a total maturity score, which maps to one of five data maturity personas.

## Composite Score Formula

**Total Score = KPI Breadth + Consistency + Governance + Automation + Analytics + Cloud Adoption**

Maximum possible score: **60 points**

---

## 🎯 **KPI Breadth Score** (0-10 points)
*Formula: (# KPIs selected ÷ 8) × 10*

### Q4: Which value-creation KPIs are reviewed monthly?
**Type:** Multi-select  
**Scoring:** Each KPI selected = 1.25 points (8 total KPIs available)

**Available KPIs:**
- Revenue Growth (Total & by Segment) - **1.25 pts**
- EBITDA / EBITDA Margin - **1.25 pts**
- Customer Retention / Churn Rate - **1.25 pts**
- Sales Pipeline & Conversion Rates - **1.25 pts**
- Operational Efficiency (e.g., DSO, Inventory Turns, Utilization) - **1.25 pts**
- Headcount & Labor Productivity - **1.25 pts**
- Forecast Accuracy (Revenue and EBITDA) - **1.25 pts**
- Net Promoter Score (NPS) or Customer Satisfaction - **1.25 pts**

---

## ✅ **Consistency Score** (0-10 points)
*Measures standardization across business units*

### Q5: Do all business units calculate those KPIs the same way?
**Type:** Single-select

**Answer Options:**
- Always - **10 pts**
- Mostly - **7 pts**
- Rarely - **3 pts**
- Never - **0 pts**

---

## 🛡️ **Governance Score** (0-10 points)
*Formula: +2 points per safeguard, capped at 10*

### Q9: Which governance safeguards are formally in place?
**Type:** Multi-select  
**Scoring:** Each safeguard = +2 points (maximum 10 points)

**Answer Options:**
- Defined data owners or stewards - **+2 pts**
- Formal data governance policies or standards - **+2 pts**
- Automated data quality checks in reporting - **+2 pts**
- Role-based user access controls - **+2 pts**
- Change control process for reporting logic or data models - **+2 pts**
- None / Informal governance only - **0 pts**

---

## ⚙️ **Automation Score** (0-10 points)
*Average of three components: Reporting Sources + Latency + Manual Work*

### Q6: Primary reporting source today?
**Type:** Multi-select  
**Scoring:** Highest sophistication level selected

**Answer Options:**
- Data Warehouse / Lake (e.g., Snowflake, Redshift, Databricks) - **10 pts**
- Business Intelligence Tool (e.g., Power BI, Tableau, Looker) - **8 pts**
- ERP system (e.g., NetSuite, SAP, Microsoft Dynamics) - **6 pts**
- CRM (e.g., Salesforce, HubSpot) - **6 pts**
- Custom-built system - **4 pts**
- Excel / Google Sheets - **2 pts**

### Q7: How many days after month-end can the board see final numbers?
**Type:** Single-select

**Answer Options:**
- 1–3 days - **10 pts**
- 4–6 days - **8 pts**
- 7–10 days - **6 pts**
- 11–15 days - **3 pts**
- Varies / Not consistent - **2 pts**
- More than 15 days - **1 pt**
- Not sure - **1 pt**

### Q8: Approximately what percentage of data used for monthly reporting requires manual handling?
**Type:** Single-select

**Answer Options:**
- 0–10% (mostly automated) - **10 pts**
- 11–25% - **8 pts**
- 26–50% - **5 pts**
- 51–75% - **3 pts**
- 76–100% (mostly manual) - **1 pt**
- Not sure - **2 pts**

---

## 📊 **Analytics Score** (0-10 points)
*Measures advanced analytical capabilities*

### Q11: Which advanced capabilities are live today?
**Type:** Single-select

**Answer Options:**
- AI-powered insights generation - **10 pts**
- Predictive forecasting models - **7 pts**
- Self-service analytics for executives - **6 pts**
- Real-time performance dashboards - **5 pts**
- Automated variance commentary (for board reports) - **4 pts**
- None - basic reporting only - **1 pt**

---

## ☁️ **Cloud Adoption Score** (0-10 points)
*Measures cloud/SaaS adoption level*

### Q12: Is your data and reporting stack primarily cloud-based (SaaS)?
**Type:** Single-select

**Answer Options:**
- Fully cloud-based / SaaS (e.g., NetSuite, Power BI, Snowflake) - **10 pts**
- Mostly cloud, with some on-premise systems - **7 pts**
- Mostly on-premise, with limited cloud tools - **4 pts**
- Entirely on-premise / legacy systems - **1 pt**
- Not sure - **2 pts**

---

## 🎭 **Data Maturity Personas**

### Score Thresholds:
- **P4: Strategic / Value Multiplier** - 54+ points
- **P3: Predictive / Optimized** - 42-53 points  
- **P2: Integrated / Insight-driven** - 30-41 points
- **P1: Standardized / Foundational** - 15-29 points
- **P0: Ad Hoc / Fire-fighting** - 0-14 points

### Persona Descriptions:

#### **P4: Strategic / Value Multiplier** (54-60 points)
Data is a differentiator; equity story asset. Your data capabilities directly contribute to valuation and exit readiness.

#### **P3: Predictive / Optimized** (42-53 points)
Forecasting & scenario models guide decisions. You use predictive analytics to drive strategic choices.

#### **P2: Integrated / Insight-driven** (30-41 points)
Systems integrated; weekly insight loop. Your data flows between systems and informs regular decision-making.

#### **P1: Standardized / Foundational** (15-29 points)
Defined KPIs but manual pulls; hindsight view. You have the basics in place but rely on manual processes.

#### **P0: Ad Hoc / Fire-fighting** (0-14 points)
KPIs in silos; manual fire-fighting. Your data processes are reactive and heavily dependent on spreadsheets.