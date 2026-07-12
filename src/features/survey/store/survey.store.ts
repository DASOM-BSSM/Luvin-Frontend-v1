import { create } from 'zustand';

import { SURVEY_QUESTIONS } from '@/src/features/survey/constants/questions';
import type {
  PersonalityVector,
  SurveyAnswers,
  SurveyOption,
} from '@/src/features/survey/types';
import {
  calculatePersonalityVector,
  createInitialPersonalityVector,
} from '@/src/features/survey/utils/personality';

interface SurveyState {
  answers: SurveyAnswers;
  currentQuestionIndex: number;
  personality: PersonalityVector;
  answerQuestion: (questionId: number, option: SurveyOption) => void;
  goToPreviousQuestion: () => void;
  goToNextQuestion: () => void;
  resetSurvey: () => void;
}

const INITIAL_SURVEY_STATE = {
  answers: {},
  currentQuestionIndex: 0,
  personality: createInitialPersonalityVector(),
};

export const useSurveyStore = create<SurveyState>()((set) => ({
  ...INITIAL_SURVEY_STATE,
  answerQuestion: (questionId, option) => {
    set((state) => {
      const answers = { ...state.answers, [questionId]: option.id };

      return {
        answers,
        personality: calculatePersonalityVector(SURVEY_QUESTIONS, answers),
      };
    });
  },
  goToPreviousQuestion: () => {
    set((state) => ({
      currentQuestionIndex: Math.max(0, state.currentQuestionIndex - 1),
    }));
  },
  goToNextQuestion: () => {
    set((state) => ({
      currentQuestionIndex: Math.min(SURVEY_QUESTIONS.length - 1, state.currentQuestionIndex + 1),
    }));
  },
  resetSurvey: () => {
    set({
      answers: {},
      currentQuestionIndex: 0,
      personality: createInitialPersonalityVector(),
    });
  },
}));
