import { LATENCY_LABELS } from '../config/scoringRules.js';

export class DataTransformer {
  /**
   * Extract PE business context from answers
   */
  static extractContext(answers) {
    return {
      holdPeriod: answers.Q1 || '',
      growthStrategy: answers.Q2 || '',
      systemComplexity: answers.Q3 || '',
      kpiTracking: answers.Q4 || [],
      consistency: answers.Q5 || '',
      reportingSources: answers.Q6 || [],
      reportingLatency: answers.Q7 || '',
      manualWork: answers.Q8 || '',
      governance: answers.Q9 || [],
      dashboardUsers: answers.Q10 || [],
      analytics: answers.Q11 || '',
      cloudAdoption: answers.Q12 || ''
    };
  }

  /**
   * Extract demographics from answers
   */
  static extractDemographics(answers) {
    return {
      systemComplexity: answers.Q3 || null,
    };
  }

  /**
   * Extract business context details
   */
  static extractBusinessContext(answers) {
    return {
      holdPeriod: answers.Q1 || null,
      growthStrategy: answers.Q2 || null,
    };
  }

  /**
   * Extract KPI assessment details
   */
  static extractKPIAssessment(answers) {
    return {
      kpiTracking: answers.Q4 || null,
      consistency: answers.Q5 || null,
      reportingSources: answers.Q6 || null,
      reportingSpeed: answers.Q7 || null,
      manualWork: answers.Q8 || null,
      governance: answers.Q9 || null,
      dashboardUsers: answers.Q10 || null,
      analytics: answers.Q11 || null,
      cloudAdoption: answers.Q12 || null
    };
  }

  /**
   * Prepare complete user data structure for API/database submission
   */
  static prepareUserData(answers, scores, persona, recommendations, leadScore, gdprConsent = true) {
    const timestamp = new Date().toISOString();
    const sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    return {
      // Metadata
      sessionId,
      timestamp,
      assessmentVersion: 'v4.0',
      
      // Demographics
      demographics: this.extractDemographics(answers),
      
      // Business Context
      businessContext: this.extractBusinessContext(answers),
      
      // KPI Assessment Answers
      kpiAssessment: this.extractKPIAssessment(answers),
      
      // Calculated Results
      results: {
        scores,
        persona: persona.persona,
        personaLabel: persona.personaLabel,
        totalScore: scores.total,
        leadScore,
        recommendations
      },
      
      // User Consent & Preferences
      consent: {
        gdprConsent,
        marketingOptIn: gdprConsent, // Could be separate field later
      },
      
      // Raw answers object for backup/debugging
      rawAnswers: answers
    };
  }

  /**
   * Get latency description for display
   */
  static getLatencyDescription(reportingSpeed) {
    return LATENCY_LABELS[reportingSpeed] || 'unknown timeframe';
  }

  /**
   * Format score for percentage display
   */
  static formatScoreAsPercentage(score, maxScore = 10) {
    return Math.round((score / maxScore) * 100);
  }

  /**
   * Generate assessment summary text
   */
  static generateAssessmentSummary(scores, answers) {
    const latencyLabel = this.getLatencyDescription(answers.Q7);
    const selectedKPIs = scores.selectedKPIs;
    const consistencyLabel = answers.Q5 || 'Not specified';

    return `You're tracking ${selectedKPIs} of 6 core PE value-creation KPIs and report final numbers ${latencyLabel}. Your KPI consistency across business units is: ${consistencyLabel}.`;
  }

  /**
   * Validate required fields for assessment completion
   */
  static validateAssessmentCompletion(answers) {
    const requiredFields = [
      'Q1', // Hold period
      'Q2', // Growth strategy
      'Q4', // KPI tracking
      'Q5', // Consistency
      'Q7', // Reporting latency
    ];

    const missing = requiredFields.filter(field => !answers[field]);
    
    return {
      isComplete: missing.length === 0,
      missingFields: missing,
      completionPercentage: ((requiredFields.length - missing.length) / requiredFields.length) * 100
    };
  }

  /**
   * Sanitize data for API submission
   */
  static sanitizeForAPI(data) {
    // Remove any potential XSS or injection risks
    const sanitized = JSON.parse(JSON.stringify(data));
    
    // Clean string fields
    const cleanString = (str) => {
      if (typeof str !== 'string') return str;
      return str.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
                .replace(/javascript:/gi, '')
                .trim();
    };

    // Recursively clean all string fields
    const cleanObject = (obj) => {
      if (typeof obj === 'string') {
        return cleanString(obj);
      } else if (Array.isArray(obj)) {
        return obj.map(cleanObject);
      } else if (obj && typeof obj === 'object') {
        const cleaned = {};
        for (const [key, value] of Object.entries(obj)) {
          cleaned[key] = cleanObject(value);
        }
        return cleaned;
      }
      return obj;
    };

    return cleanObject(sanitized);
  }
} 