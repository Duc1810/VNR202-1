import { QuizQuestion, QuizMode, QuizHistory, QuizResult } from "@/types/quiz";

// Shuffle array helper
export function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}


export function getQuestionsByMode(
  allQuestions: QuizQuestion[],
  mode: QuizMode,
  topic?: string
): QuizQuestion[] {
  switch (mode) {
    case "all":
      return shuffleArray(allQuestions);

    case "quick":
      return shuffleArray(allQuestions).slice(0, 20);

    case "challenge":
      return shuffleArray(allQuestions).slice(0, 15);

    case "topic":
      if (!topic) return [];

      // 👉 Lấy 20 câu đầu tiên đúng chủ đề, không random
      const filtered = allQuestions.filter((q) => q.topic === topic);
      return filtered.slice(0, 20);

    default:
      return allQuestions;
  }
}


// Calculate quiz result
export function calculateResult(
  questions: QuizQuestion[],
  userAnswers: Record<number, string>,
  timeElapsed: number
): QuizResult {
  const totalQuestions = questions.length;
  let correctAnswers = 0;

  questions.forEach((q) => {
    if (userAnswers[q.id] === q.answer) {
      correctAnswers++;
    }
  });

  const incorrectAnswers = totalQuestions - correctAnswers;
  const accuracy = (correctAnswers / totalQuestions) * 100;
  const score = Math.round(accuracy);

  return {
    totalQuestions,
    correctAnswers,
    incorrectAnswers,
    accuracy,
    timeElapsed,
    score,
  };
}

// Format time
export function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins} phút ${secs} giây`;
}

// Get performance level
export function getPerformanceLevel(accuracy: number): {
  level: string;
  emoji: string;
  color: string;
} {
  if (accuracy >= 90) {
    return { level: "Xuất sắc", emoji: "🏆", color: "text-yellow-400" };
  } else if (accuracy >= 80) {
    return { level: "Giỏi", emoji: "⭐", color: "text-green-400" };
  } else if (accuracy >= 70) {
    return { level: "Khá", emoji: "👍", color: "text-blue-400" };
  } else if (accuracy >= 60) {
    return { level: "Trung bình", emoji: "📖", color: "text-orange-400" };
  } else {
    return { level: "Cần cố gắng", emoji: "💪", color: "text-red-400" };
  }
}

// LocalStorage helpers
const STORAGE_KEY = "quiz_history";

export function saveQuizHistory(history: QuizHistory): void {
  try {
    const existing = getQuizHistory();
    existing.unshift(history);
    // Keep only last 10 attempts
    const limited = existing.slice(0, 10);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(limited));
  } catch (error) {
    console.error("Failed to save quiz history:", error);
  }
}

export function getQuizHistory(): QuizHistory[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Failed to get quiz history:", error);
    return [];
  }
}

export function clearQuizHistory(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error("Failed to clear quiz history:", error);
  }
}

// Get mode display name
export function getModeName(mode: QuizMode): string {
  switch (mode) {
    case "all":
      return "Luyện tập tất cả";
    case "quick":
      return "Ôn nhanh";
    case "challenge":
      return "Thử thách";
    case "topic":
      return "Theo chủ đề";
    default:
      return mode;
  }
}

// Get topic display name
export function getTopicName(topic: string): string {
  switch (topic) {
    case "nha-nuoc":
      return "Nhà nước XHCN";
    case "dan-chu":
      return "Dân chủ XHCN";
    case "xay-dung":
      return "Xây dựng & phát huy";
    default:
      return topic;
  }
}
