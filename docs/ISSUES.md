  To fix:
  
  1. KPI Breadth Scoring - Rounding Error

  return Math.round((validKPIs.length / peKPIs.length) * 10);
  - Problem: With 8 total KPIs, selecting 1 KPI = (1/8) × 10 = 1.25 → rounds to 1 point
  - Issue: This creates uneven scoring - some KPIs are worth 1 point, others worth 2 points
  - Expected: Each KPI should be worth exactly 1.25 points, but rounding breaks this

  2. Automation Score - Flawed Multi-Select Logic

  if (reportingSources.includes('Data Warehouse / Lake...')) sourceScore = 10;
  else if (reportingSources.includes('Business Intelligence Tool...')) sourceScore = 8;
  - Problem: Uses else if chain instead of finding the maximum
  - Issue: If user selects both "Excel" and "Data Warehouse", it only checks Excel first and gives 2 points instead of 10
  - Should: Find the highest sophistication level among all selected sources

  3. Governance Score - Logic Gap

  const validSafeguards = safeguards.filter(s => s !== 'None');
  - Problem: Only filters out "None" but the actual option is "None / Informal governance only"
  - Issue: If user selects "None / Informal governance only", it still gets counted as a valid safeguard
  - Should: Filter out the exact string "None / Informal governance only"

  4. Total Score Cap - Potential Logic Issue

  return Math.min(60, total);
  - Problem: Hard caps at 60 but individual components can theoretically exceed their limits
  - Issue: If there's a bug in component scoring, the cap masks the problem instead of fixing it
  - Better: Each component should be capped individually, then summed

  5. Default Score Inconsistency

  - Automation: Defaults to 1 when no answers provided
  - Analytics: Defaults to 1 via || 1 fallback
  - Others: Default to 0 when no answer provided
  - Issue: Inconsistent baseline scoring across components