import { 
  CONSISTENCY_SCORING,
  LATENCY_SCORING, 
  MANUAL_WORK_SCORING,
  ANALYTICS_SCORING,
  CLOUD_SCORING,
  GOVERNANCE_POINTS_PER_SAFEGUARD,
  GOVERNANCE_MAX_POINTS
} from '../config/scoringRules.js';
import { peKPIs } from '../config/questions.js';

export class ScoringEngine {
  /**
   * Calculate KPI Breadth score (Q4) - (# KPIs chosen ÷ 8) × 10
   */
  static calculateKPIBreadthScore(selectedKPIs = []) {
    const validKPIs = selectedKPIs.filter(kpi => peKPIs.includes(kpi));
    return Math.round((validKPIs.length / peKPIs.length) * 10);
  }

  /**
   * Calculate Consistency score (Q5) - Always = 10, Mostly = 7, Rarely = 3, Never = 0
   */
  static calculateConsistencyScore(consistency = '') {
    return CONSISTENCY_SCORING[consistency] || 0;
  }

  /**
   * Calculate Governance & Compliance score (Q9) - +2 pts per safeguard, capped at 10
   */
  static calculateGovernanceScore(safeguards = []) {
    const validSafeguards = safeguards.filter(s => s !== 'None');
    const score = validSafeguards.length * GOVERNANCE_POINTS_PER_SAFEGUARD;
    return Math.min(score, GOVERNANCE_MAX_POINTS);
  }

  /**
   * Calculate Automation & Integration score - Based on Q6, Q7, Q8 only
   */
  static calculateAutomationScore(reportingSources = [], latency = '', manualWork = '') {
    let score = 1; // Base score for no answers
    
    // Only calculate if user has provided answers
    const hasAnswers = reportingSources.length > 0 || latency || manualWork;
    if (!hasAnswers) {
      return 1; // Minimum score when no data provided
    }
    
    let totalPoints = 0;
    let components = 0;
    
    // Reporting source scoring (0-10 points)
    if (reportingSources.length > 0) {
      let sourceScore = 1;
      if (reportingSources.includes('Data Warehouse / Lake (e.g., Snowflake, Redshift, Databricks)')) sourceScore = 10;
      else if (reportingSources.includes('Business Intelligence Tool (e.g., Power BI, Tableau, Looker)')) sourceScore = 8;
      else if (reportingSources.includes('ERP system (e.g., NetSuite, SAP, Microsoft Dynamics)')) sourceScore = 6;
      else if (reportingSources.includes('CRM (e.g., Salesforce, HubSpot)')) sourceScore = 6;
      else if (reportingSources.includes('Custom-built system')) sourceScore = 4;
      else if (reportingSources.includes('Excel / Google Sheets')) sourceScore = 2;
      
      totalPoints += sourceScore;
      components++;
    }
    
    // Latency scoring (0-10 points)
    if (latency) {
      const latencyScore = LATENCY_SCORING[latency] || 1;
      totalPoints += latencyScore;
      components++;
    }
    
    // Manual work scoring (0-10 points)
    if (manualWork) {
      const manualScore = MANUAL_WORK_SCORING[manualWork] || 1;
      totalPoints += manualScore;
      components++;
    }
    
    // Average the components to get final score out of 10
    const finalScore = components > 0 ? Math.round(totalPoints / components) : 1;
    return Math.min(10, Math.max(1, finalScore));
  }

  /**
   * Calculate Advanced Analytics score (Q11)
   */
  static calculateAnalyticsScore(capability = '') {
    return ANALYTICS_SCORING[capability] || 1;
  }

  /**
   * Calculate Cloud Adoption score (Q12)
   */
  static calculateCloudAdoptionScore(cloudAdoption = '') {
    return CLOUD_SCORING[cloudAdoption] || 1;
  }

  /**
   * Calculate total maturity score (0-60 points)
   */
  static calculateTotalScore(scores) {
    const total = scores.kpiBreadth + scores.consistency + scores.governance + 
                  scores.automation + scores.analytics + scores.cloudAdoption;
    return Math.min(60, total);
  }

  /**
   * Calculate all scores for PE assessment
   */
  static calculateAllScores(answers) {
    const kpiBreadth = this.calculateKPIBreadthScore(answers.Q4 || []);
    const consistency = this.calculateConsistencyScore(answers.Q5);
    const governance = this.calculateGovernanceScore(answers.Q9 || []);
    const automation = this.calculateAutomationScore(
      answers.Q6 || [], 
      answers.Q7, 
      answers.Q8
    );
    const analytics = this.calculateAnalyticsScore(answers.Q11);
    const cloudAdoption = this.calculateCloudAdoptionScore(answers.Q12);

    const scores = {
      kpiBreadth,
      consistency,
      governance,
      automation,
      analytics,
      cloudAdoption
    };

    const total = this.calculateTotalScore(scores);

    // Calculate additional metrics for display
    const selectedKPIs = answers.Q4 ? answers.Q4.filter(kpi => peKPIs.includes(kpi)) : [];
    const missingKPIs = peKPIs.filter(kpi => !selectedKPIs.includes(kpi));

    return {
      // Raw scores for calculations
      kpiBreadth,
      consistency,
      governance,
      automation,
      analytics,
      cloudAdoption,
      total,
      missingKPIs,
      selectedKPIs: selectedKPIs.length,
      // Convert to percentages for display - handle empty values properly
      coverage: Math.round((selectedKPIs.length / peKPIs.length) * 100),
      confidence: Math.round((consistency / 10) * 100),
      latency: answers.Q7 ? Math.round((LATENCY_SCORING[answers.Q7] / 10) * 100) : 10, // Default to 10% for no answer
      automationPercentage: Math.round((automation / 10) * 100),
      forecast: Math.round((analytics / 10) * 100),
      cloudReadiness: Math.round((cloudAdoption / 10) * 100)
    };
  }
} 