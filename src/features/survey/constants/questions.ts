import type { SurveyQuestion } from '@/src/features/survey/types';

export const SURVEY_QUESTIONS: SurveyQuestion[] = [
  {
    id: 1,
    question: '좋아하는 사람이랑 가까워지고 싶을 때 나는?',
    options: [
      { id: 'A', label: '같이 할 수 있는 것들 자체를 만든다' },
      { id: 'B', label: '자연스럽게 천천히 가까워진다' },
      { id: 'C', label: '상대가 먼저 다가와주길 기다린다' },
    ],
  },
  {
    id: 2,
    question: '사귀기 전, 좋아하는 감정을 상대가 눈치챘으면 할 때 나는?',
    options: [
      { id: 'A', label: '틱틱 말하거나 시선을 피해 티를 낸다' },
      { id: 'B', label: '작은 행동으로 알아채주길 바란다' },
      { id: 'C', label: '들키지 않으려고 최대한 숨긴다' },
    ],
  },
];
