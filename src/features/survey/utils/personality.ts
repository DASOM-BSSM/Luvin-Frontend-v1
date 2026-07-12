import {
  PERSONALITY_VARIABLE_KEYS,
  type PersonalityAdjustment,
  type PersonalityVector,
  type SurveyAnswers,
  type SurveyQuestion,
} from '@/src/features/survey/types';

export const INITIAL_PERSONALITY_VALUE = 50;
const MIN_PERSONALITY_VALUE = 1;
const MAX_PERSONALITY_VALUE = 100;
const SURVEY_ADJUSTMENT_SCALE = 1.5;

export function createInitialPersonalityVector(): PersonalityVector {
  return PERSONALITY_VARIABLE_KEYS.reduce<PersonalityVector>((vector, key) => {
    vector[key] = INITIAL_PERSONALITY_VALUE;
    return vector;
  }, {} as PersonalityVector);
}

function clampPersonalityValue(value: number): number {
  return Math.min(MAX_PERSONALITY_VALUE, Math.max(MIN_PERSONALITY_VALUE, value));
}

export function applyPersonalityAdjustment(
  vector: PersonalityVector,
  adjustments: PersonalityAdjustment,
): PersonalityVector {
  const nextVector = { ...vector };

  PERSONALITY_VARIABLE_KEYS.forEach((key) => {
    const adjustment = adjustments[key];

    if (adjustment !== undefined) {
      nextVector[key] = clampPersonalityValue(
        nextVector[key] + adjustment * SURVEY_ADJUSTMENT_SCALE,
      );
    }
  });

  return nextVector;
}

export function calculatePersonalityVector(
  questions: SurveyQuestion[],
  answers: SurveyAnswers,
): PersonalityVector {
  return questions.reduce((vector, question) => {
    const optionId = answers[question.id];
    const selectedOption = question.options.find((option) => option.id === optionId);

    return selectedOption ? applyPersonalityAdjustment(vector, selectedOption.adjustments) : vector;
  }, createInitialPersonalityVector());
}
