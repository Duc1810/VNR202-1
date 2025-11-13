"use client";

interface QuestionNavigatorProps {
  totalQuestions: number;
  currentQuestion: number;
  answeredQuestions: Set<number>;
  markedQuestions: Set<number>;
  onNavigate: (index: number) => void;
}

export function QuestionNavigator({
  totalQuestions,
  currentQuestion,
  answeredQuestions,
  markedQuestions,
  onNavigate,
}: QuestionNavigatorProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-linear-to-br from-white/5 to-white/0 p-6">
      <h3 className="mb-4 font-quicksand text-lg font-bold text-white">
        Danh sách câu hỏi
      </h3>

      <div className="mb-4 space-y-2 text-xs">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-sm bg-[#f35e53]" />
          <span className="text-white/90">Đang làm</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-sm bg-green-500/30 border border-green-500" />
          <span className="text-white/90">Đã trả lời</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-sm bg-orange-500/30 border border-orange-500" />
          <span className="text-white/90">Đã đánh dấu</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-sm border border-white/30" />
          <span className="text-white/90">Chưa làm</span>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-2">
        {Array.from({ length: totalQuestions }, (_, i) => {
          const questionIndex = i;
          const isCurrent = questionIndex === currentQuestion;
          const isAnswered = answeredQuestions.has(questionIndex);
          const isMarked = markedQuestions.has(questionIndex);

          return (
            <button
              key={i}
              onClick={() => onNavigate(questionIndex)}
              className={`aspect-square rounded-lg border-2 font-mono text-xs font-bold transition-all hover:scale-110 ${isCurrent
                ? "border-[#f35e53] bg-[#f35e53] text-black shadow-lg shadow-[#f35e53]/30"
                : isMarked
                  ? "border-orange-500 bg-orange-500/30 text-orange-400 hover:bg-orange-500/40"
                  : isAnswered
                    ? "border-green-500 bg-green-500/30 text-green-400 hover:bg-green-500/40"
                    : "border-white/30 bg-white/5 text-white/90 hover:bg-white/10"
                }`}
            >
              {i + 1}
            </button>
          );
        })}
      </div>

      <div className="mt-4 rounded-lg bg-white/5 p-3 text-xs text-white/90">
        <div className="flex justify-between">
          <span>Đã trả lời:</span>
          <span className="font-bold text-white">
            {answeredQuestions.size}/{totalQuestions}
          </span>
        </div>
      </div>
    </div>
  );
}
