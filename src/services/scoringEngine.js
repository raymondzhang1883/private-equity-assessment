import { 
  CONSISTENCY_SCORING,
  LATENCY_SCORING, 
  MANUAL_WORK_SCORING,
  ANALYTICS_SCORING,
  CLOUD_SCORING,
  GOVERNANCE_POINTS_PER_SAFEGUARD,
  GOVERNANCE_MAX_POINTS,
  SCORING_DIMENSIONS
} from '../config/scoringRules.js';
import { peKPIs } from '../config/questions.js';

export class ScoringEngine {
  /**
   * Calculate KPI Breadth score (Q4) - (# KPIs chosen ÷ 6) × 10
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
   * Calculate Automation & Integration score - Complex multi-factor calculation
   */
  static calculateAutomationScore(reportingSources = [], latency = '', manualWork = '', cloudAdoption = '') {
    let score = 1; // Base score for no answers
    
    // Only calculate if user has provided answers
    const hasAnswers = reportingSources.length > 0 || latency || manualWork || cloudAdoption;
    if (!hasAnswers) {
      return 1; // Minimum score when no data provided
    }
    
    score = 0; // Reset for calculation
    
    // Reporting source scoring
    if (reportingSources.includes('Cloud DW/BI')) score += 4;
    else if (reportingSources.includes('On-prem DB')) score += 2;
    else if (reportingSources.includes('Excel')) score += 1;
    
    // Latency scoring (converted to automation context)
    if (latency) {
      const latencyScore = LATENCY_SCORING[latency] || 1;
      score += Math.round(latencyScore * 0.3); // 30% weight
    }
    
    // Manual work scoring (lower manual work = higher automation)
    if (manualWork) {
      const manualScore = MANUAL_WORK_SCORING[manualWork] || 1;
      score += Math.round((11 - manualScore) * 0.3); // Inverse scoring - higher manual work = lower automation
    }
    
    // Cloud adoption bonus
    if (cloudAdoption) {
      score += CLOUD_SCORING[cloudAdoption] || 0;
    }
    
    return Math.min(10, Math.max(1, score));
  }

  /**
   * Calculate Advanced Analytics Readiness score (Q11)
   */
  static calculateAnalyticsScore(capability = '') {
    return ANALYTICS_SCORING[capability] || 1;
  }

  /**
   * Calculate total maturity score (0-50 points)
   */
  static calculateTotalScore(scores) {
    const total = scores.kpiBreadth + scores.consistency + scores.governance + 
                  scores.automation + scores.analytics;
    return Math.min(50, total);
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
      answers.Q8, 
      answers.Q12
    );
    const analytics = this.calculateAnalyticsScore(answers.Q11);

    const scores = {
      kpiBreadth,
      consistency,
      governance,
      automation,
      analytics
    };

    const total = this.calculateTotalScore(scores);

    // Calculate additional metrics for display
    const selectedKPIs = answers.Q4 ? answers.Q4.filter(kpi => peKPIs.includes(kpi)) : [];
    const missingKPIs = peKPIs.filter(kpi => !selectedKPIs.includes(kpi));

    return {
      ...scores,
      total,
      missingKPIs,
      selectedKPIs: selectedKPIs.length,
      // Convert to percentages for display - handle empty values properly
      coverage: Math.round((selectedKPIs.length / peKPIs.length) * 100),
      confidence: Math.round((consistency / 10) * 100),
      latency: answers.Q7 ? Math.round((LATENCY_SCORING[answers.Q7] / 10) * 100) : 10, // Default to 10% for no answer
      automation: Math.round((automation / 10) * 100),
      forecast: Math.round((analytics / 10) * 100)
    };
  }
} 