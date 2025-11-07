export interface QuizQuestion {
  id: number;
  question: string;
  options: Record<string, string>; // Allow any string keys (a, b, A, B, etc.)
  answer: string;
  topic?: string;
}

export type QuizMode = "all" | "quick" | "challenge" | "topic";

export interface QuizState {
  mode: QuizMode;
  selectedTopic?: string;
  questions: QuizQuestion[];
  currentQuestionIndex: number;
  userAnswers: Record<number, string>;
  markedQuestions: Set<number>;
  timeStarted: Date | null;
  timeElapsed: number;
  isCompleted: boolean;
  showResult: boolean;
}

export interface QuizResult {
  totalQuestions: number;
  correctAnswers: number;
  incorrectAnswers: number;
  accuracy: number;
  timeElapsed: number;
  score: number;
}

export interface QuizHistory {
  date: string;
  mode: QuizMode;
  result: QuizResult;
}
