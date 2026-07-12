export const PERSONALITY_VARIABLE_KEYS = [
  'affection_expressiveness',
  'relationship_anxiety',
  'relationship_avoidance',
  'emotional_attunement',
  'relationship_initiative',
  'reality_priority',
  'reassurance_need',
  'jealousy_reactivity',
  'relationship_dependency',
  'emotional_suppression',
  'conflict_confrontation',
  'relationship_pace',
  'attention_frequency',
] as const;

export type PersonalityVariable = (typeof PERSONALITY_VARIABLE_KEYS)[number];
export type PersonalityVector = Record<PersonalityVariable, number>;
export type PersonalityAdjustment = Partial<Record<PersonalityVariable, number>>;
export type SurveyOptionId = 'A' | 'B' | 'C';

export const PERSONALITY_VARIABLE_LABELS: Record<PersonalityVariable, string> = {
  affection_expressiveness: '애정 표현성',
  relationship_anxiety: '관계 불안도',
  relationship_avoidance: '관계 회피성',
  emotional_attunement: '감정 동조성',
  relationship_initiative: '관계 주도성',
  reality_priority: '현실 우선성',
  reassurance_need: '확신 요구도',
  jealousy_reactivity: '질투 반응성',
  relationship_dependency: '관계 에너지 의존도',
  emotional_suppression: '감정 억제성',
  conflict_confrontation: '갈등 직면성',
  relationship_pace: '관계 속도감',
  attention_frequency: '관심 표현 빈도',
};

export interface SurveyOption {
  id: SurveyOptionId;
  label: string;
  description: string;
  adjustments: PersonalityAdjustment;
}

export interface SurveyQuestion {
  id: number;
  question: string;
  options: SurveyOption[];
}

export type SurveyAnswers = Partial<Record<number, SurveyOptionId>>;
