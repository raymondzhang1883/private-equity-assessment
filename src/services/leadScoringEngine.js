import { LEAD_SCORING_WEIGHTS } from '../config/scoringRules.js';

export class LeadScoringEngine {
  /**
   * Calculate lead score based on assessment scores and PE context
   */
  static calculateLeadScore(totalScore, context) {
    let leadScore = totalScore;

    // Apply PE hold period modifiers
    if (context.holdPeriod && LEAD_SCORING_WEIGHTS.PE_HOLD_PERIOD[context.holdPeriod]) {
      leadScore += LEAD_SCORING_WEIGHTS.PE_HOLD_PERIOD[context.holdPeriod];
    }

    // Apply growth strategy modifiers
    if (context.growthStrategy && LEAD_SCORING_WEIGHTS.GROWTH_STRATEGY[context.growthStrategy]) {
      leadScore += LEAD_SCORING_WEIGHTS.GROWTH_STRATEGY[context.growthStrategy];
    }

    // Apply system complexity modifiers
    if (context.systemComplexity && LEAD_SCORING_WEIGHTS.SYSTEM_COMPLEXITY[context.systemComplexity]) {
      leadScore += LEAD_SCORING_WEIGHTS.SYSTEM_COMPLEXITY[context.systemComplexity];
    }

    return Math.max(0, leadScore);
  }

  /**
   * Determine lead priority based on score
   */
  static getLeadPriority(leadScore) {
    if (leadScore >= 75) {
      return {
        level: 'HIGH',
        label: 'Priority Lead - High Intent & Authority',
        emoji: '🎯'
      };
    } else if (leadScore >= 50) {
      return {
        level: 'MEDIUM',
        label: 'Qualified Lead',
        emoji: '📈'
      };
    } else {
      return {
        level: 'LOW',
        label: 'Information Seeker',
        emoji: '📋'
      };
    }
  }



  /**
   * Check if lead should trigger immediate sales notification
   */
  static shouldTriggerSalesAlert(leadScore, context) {
    const priority = this.getLeadPriority(leadScore);
    
    // High priority leads with urgent timeline
    if (priority.level === 'HIGH' && context.timeline === 'Within 3 months') {
      return {
        trigger: true,
        reason: 'High-priority lead with immediate timeline',
        urgency: 'IMMEDIATE'
      };
    }

    // Executive decision makers
    if (context.owner === 'Executive team (strategy)' && leadScore >= 60) {
      return {
        trigger: true,
        reason: 'Executive decision maker with good fit',
        urgency: 'HIGH'
      };
    }

    return {
      trigger: false,
      reason: null,
      urgency: 'NORMAL'
    };
  }
} 