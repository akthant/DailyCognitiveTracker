export interface Question {
  id: number;
  text: string;
  score: number;
}

export interface Domain {
  id: string;
  title: string;
  icons: string;
  questions: Question[];
}

export interface Answer {
  questionId: number;
  score: number;
}

export interface AssessmentData {
  date: string;
  scores: Record<string, number>;
  totalScore: number;
}

export type ViewType = 'start'|'home' | 'assessment' | 'results' | 'history' | 'details';