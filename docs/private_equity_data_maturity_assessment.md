# Private Equity Data Maturity Assessment Blueprint

## 1. Core Question Set (12)

| # | Question | Type | Notes / Options (abridged) |
|---|----------|------|----------------------------|
| 1 | Where is your PortCo in the PE hold period? | single‑select | Stabilize (0‑12 mo) · Scale (13‑36 mo) · Exit prep (>36 mo) |
| 2 | What growth strategy dominates today? | single‑select | Organic · Acquisition‑led · Mix |
| 3 | How many ERP/CRM/finance systems are currently in use across the business? | single‑select | 1 · 2‑3 · 4‑6 · 7+ |
| 4 | Which value‑creation KPIs are reviewed **monthly**? | multi‑select | Revenue growth % · EBITDA margin · Net working‑capital days · Synergy capture $ · Customer churn % · Cash conversion cycle |
| 5 | Do all business units calculate those KPIs the same way? | single‑select | Always · Mostly · Rarely · Never |
| 6 | Primary reporting source today? | multi‑select | Cloud DW/BI · On‑prem DB · Excel · Board deck slides |
| 7 | How many days after month‑end can the board see final numbers? | single‑select | Same day · ≤7 days · 8‑14 days · >14 days |
| 8 | Estimated % of data still touched manually each cycle? | single‑select | 0‑10 % · 11‑30 % · 31‑60 % · 61‑100 % |
| 9 | Which governance safeguards are **formally** in place? | multi‑select | Data dictionary · Ownership RACI · Access controls · Compliance audits · None |
| 10 | Who actively uses data dashboards to run the business? | multi‑select | Board · C‑suite · Functional VPs · Line managers · Analysts |
| 11 | Which advanced capabilities are live today? | single‑select | None · Automated variance commentary · Forecast models · ML / GenAI simulations |
| 12 | Is your stack predominantly SaaS/cloud? | single‑select | Yes, >80 % · Hybrid · Mostly on‑prem · Unsure |

---

## 2. Supplementary Question Bank (10)

1. **Biggest integration pain post‑acquisition?** (Data mapping · Master‑data merge · User adoption · Compliance)  
2. **Frequency of board data “re‑statements” last 12 mo?** (Never · 1‑2× · 3‑5× · >5×)  
3. **Do you employ a dedicated data‑governance lead?** (Yes full‑time · Fractional · No)  
4. **% of IT budget allocated to data/analytics?** (slider 0‑20 %)  
5. **Preferred exit path** (Strategic sale · IPO · Secondary PE)  
6. **Do functional teams self‑serve analytics without IT?** (Always → Never scale)  
7. **Time to integrate a newly acquired add‑on into reporting** (≤90 days · 91‑180 days · >180 days)  
8. **Largest data‑quality issue** (Duplicates · Missing fields · Inconsistent definitions · Timing lags)  
9. **Level of GenAI experimentation** (None · Pilots · In production)  
10. **Use of managed services for data ops** (Yes full‑scope · Limited · None)

---

## 3. Scoring Framework (0‑50 points)

| Dimension | Max Points | How it’s calculated |
|-----------|------------|---------------------|
| KPI Breadth | 10 | (# KPIs chosen ÷ 6) × 10 |
| Consistency | 10 | Always = 10 · Mostly = 7 · Rarely = 3 · Never = 0 |
| Governance & Compliance | 10 | +2 pts per safeguard, capped at 10 |
| Automation & Integration | 10 | SaaS + ≤7‑day latency + ≤30 % manual = 10 → scaled down proportionally |
| Advanced Analytics Readiness | 10 | None = 1 · Commentary = 4 · Forecast = 7 · ML/GenAI = 10 |

Total Score → Persona classification.

---

## 4. Persona Bands & Targeted Recommendations

| Persona | Score Range | Snapshot | Top 3 Actions |
|---------|-------------|----------|---------------|
| **P0 Reactive / Spreadsheet‑Centric** | 0–12 | KPIs in silos; manual fire‑fighting | 1️⃣ Run a *Strategic Data Roadmap*.<br>2️⃣ Standardize top‑10 KPIs and definitions.<br>3️⃣ Replace spreadsheet consolidations with a single source of truth. |
| **P1 Foundational / Board‑Ready** | 13–24 | Defined KPIs but manual pulls; hindsight view | 1️⃣ Automate refresh pipelines to cut manual effort.<br>2️⃣ Deliver sprint‑based dashboards to prove value quickly.<br>3️⃣ Pilot GenAI to draft variance commentary for board packs. |
| **P2 Integrated / Synergy‑Seeker** | 25–34 | Systems integrated; weekly insight loop | 1️⃣ Stand up a scalable cloud data platform (SaaS‑first).<br>2️⃣ Embed Q&A chat over dashboards for executives.<br>3️⃣ Formalize governance council to keep definitions aligned. |
| **P3 Predictive / Value Accelerator** | 35–44 | Forecasting & scenario models guide decisions | 1️⃣ Embed analytics into frontline workflows (pricing, inventory).<br>2️⃣ Validate governance to support ML at scale.<br>3️⃣ Use GenAI to simulate strategic options before board meetings. |
| **P4 Strategic / Exit‑Ready** | 45–50 | Data is a differentiator; equity story asset | 1️⃣ Transition run‑state to *Managed Data Services* to control costs and ensure continuity.<br>2️⃣ Tighten forward‑looking governance & audit trails to de‑risk diligence.<br>3️⃣ Establish DataOps + GenAI operating model for continuous insight delivery. |

---

**Implementation Tips**

1. **Deploy** the 12 core questions in your assessment tool; use the supplementary bank for conditional drill‑downs.  
2. **Score** responses with the framework above, then surface persona‑specific guidance on the results page or follow‑up email.  
3. Map personas to nurture tracks (e.g., P0–P1 → share intro whitepaper; P3–P4 → invite to strategy workshop).  
