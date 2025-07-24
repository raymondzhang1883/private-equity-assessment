import { 
  BASE_RECOMMENDATIONS, 
  GROWTH_STRATEGY_RECOMMENDATIONS,
  HOLD_PERIOD_RECOMMENDATIONS
} from '../config/personas.js';
import { CTA_CONFIGURATIONS } from '../config/scoringRules.js';

export class RecommendationEngine {
  /**
   * Get personalized recommendations based on persona and PE context
   */
  static getPersonalizedRecommendations(persona, context, answers = {}) {
    const baseRecs = this._getBaseRecommendations(persona);
    let recommendations = [...baseRecs];

    // Add context-specific recommendations for PE
    if (context.holdPeriod && HOLD_PERIOD_RECOMMENDATIONS[context.holdPeriod]) {
      recommendations.push(HOLD_PERIOD_RECOMMENDATIONS[context.holdPeriod]);
    }

    if (context.growthStrategy && GROWTH_STRATEGY_RECOMMENDATIONS[context.growthStrategy]) {
      recommendations.push(GROWTH_STRATEGY_RECOMMENDATIONS[context.growthStrategy]);
    }

    return recommendations.slice(0, 3); // Keep top 3 recommendations
  }

  /**
   * Get contextual call-to-action configuration for PE
   */
  static getContextualCTA(holdPeriod, growthStrategy, systemComplexity, personaLabel = '') {
    const ctaConfig = CTA_CONFIGURATIONS[holdPeriod] || CTA_CONFIGURATIONS['Scale (13-36 months)'];
    
    let { primaryCTA, secondaryCTA, valueProposition } = ctaConfig;

    // Adjust based on system complexity
    if (systemComplexity === '7+') {
      secondaryCTA = 'Schedule Integration Strategy Call';
      valueProposition = 'Navigate complex system integration with proven PE data strategies.';
    } else if (systemComplexity === '1') {
      valueProposition = 'Leverage your unified system advantage for rapid data maturity gains.';
    }

    // Adjust based on growth strategy
    if (growthStrategy === 'Acquisition-led') {
      primaryCTA = 'Download PE Data Maturity';
      secondaryCTA = 'Schedule M&A Data Strategy Call';
    } else if (growthStrategy === 'Organic') {
      primaryCTA = 'Download Organic Growth Analytics Guide';
    }

    return { primaryCTA, secondaryCTA, valueProposition };
  }

  /**
   * Get base recommendations for a persona
   */
  static _getBaseRecommendations(persona) {
    return BASE_RECOMMENDATIONS[persona] || BASE_RECOMMENDATIONS['P0'];
  }

  /**
   * Generate impact statement for missing KPIs
   */
  static getKPIImpactStatement(missingKPIs) {
    if (!missingKPIs || missingKPIs.length === 0) {
      return null;
    }

    const peKPIImpacts = {
      'Revenue growth %': 'track growth trajectory against plan',
      'EBITDA margin': 'monitor profitability trends',
      'Net working-capital days': 'optimize cash conversion',
      'Synergy capture $': 'measure M&A value realization',
      'Customer churn %': 'predict revenue retention risks',
      'Cash conversion cycle': 'improve working capital efficiency'
    };

    const impactDescriptions = missingKPIs.map(kpi => peKPIImpacts[kpi]).filter(Boolean);

    return {
      title: 'Consider Adding These PE Value-Creation KPIs',
      description: `Missing: ${missingKPIs.join(', ')}. These metrics help you ${impactDescriptions.join(', ')}.`,
      impact: 'Portfolio companies tracking all 6 KPIs typically see 15-25% faster value creation cycles.'
    };
  }
} 