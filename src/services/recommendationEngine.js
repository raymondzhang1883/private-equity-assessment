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
    const ctaConfig = CTA_CONFIGURATIONS[holdPeriod] || CTA_CONFIGURATIONS['Mid hold (Year 2–4)'];
    
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
      'Revenue Growth (Total & by Segment)': 'track growth trajectory by business unit',
      'EBITDA / EBITDA Margin': 'monitor profitability trends and margin optimization',
      'Customer Retention / Churn Rate': 'predict revenue retention risks and customer lifetime value',
      'Sales Pipeline & Conversion Rates': 'forecast revenue and optimize sales efficiency',
      'Operational Efficiency (e.g., DSO, Inventory Turns, Utilization)': 'optimize working capital and resource utilization',
      'Headcount & Labor Productivity': 'manage workforce efficiency and scaling',
      'Forecast Accuracy (Revenue and EBITDA)': 'improve planning reliability and board confidence',
      'Net Promoter Score (NPS) or Customer Satisfaction': 'measure customer loyalty and retention risk'
    };

    const impactDescriptions = missingKPIs.map(kpi => peKPIImpacts[kpi]).filter(Boolean);

    return {
      title: 'Consider Adding These PE Value-Creation KPIs',
      description: `Missing: ${missingKPIs.join(', ')}. These metrics help you ${impactDescriptions.join(', ')}.`,
      impact: 'Portfolio companies tracking all 8 KPIs typically see 15-25% faster value creation cycles.'
    };
  }
} 