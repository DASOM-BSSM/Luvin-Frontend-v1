export interface SurveyOption {
  id: 'A' | 'B' | 'C';
  label: string;
}

export interface SurveyQuestion {
  id: number;
  question: string;
  options: SurveyOption[];
}
