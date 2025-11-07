"use client";

import { useEffect, useState } from "react";
import type { QuizHistory as QuizHistoryType } from "@/types/quiz";
import { getQuizHistory, formatTime, getModeName } from "@/lib/quizHelpers";

export function QuizHistory() {
  const [history, setHistory] = useState<QuizHistoryType[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setHistory(getQuizHistory());
    }
  }, [isOpen]);

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-50 flex items-center gap-2 rounded-full bg-linear-to-r from-[#f3c554] to-[#ffd966] px-6 py-3 font-semibold text-black shadow-2xl transition-all hover:scale-110 hover:shadow-[#f3c554]/50"
      >
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        Lịch sử
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
      <div className="max-h-[80vh] w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-[#1a1510]">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 p-6">
          <h2 className="font-quicksand text-2xl font-bold text-white">
            Lịch sử làm bài
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="rounded-lg bg-white/10 p-2 text-white transition-all hover:bg-white/20"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* History List */}
        <div className="max-h-[calc(80vh-120px)] overflow-y-auto p-6">
          {history.length === 0 ? (
            <div className="py-12 text-center text-white/60">
              <svg
                className="mx-auto mb-4 h-16 w-16 text-white/20"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <p>Chưa có lịch sử làm bài</p>
            </div>
          ) : (
            <div className="space-y-4">
              {history.map((item, index) => {
                const date = new Date(item.date);
                const isGood = item.result.accuracy >= 70;

                return (
                  <div
                    key={index}
                    className="rounded-xl border border-white/10 bg-linear-to-r from-white/5 to-white/0 p-4 transition-all hover:border-[#f3c554]/30"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="mb-2 flex items-center gap-2">
                          <span className="rounded-full bg-[#f3c554]/20 px-3 py-1 text-xs font-bold text-[#f3c554]">
                            {getModeName(item.mode)}
                          </span>
                          <span className="text-xs text-white/50">
                            {date.toLocaleString("vi-VN")}
                          </span>
                        </div>

                        <div className="grid grid-cols-3 gap-4 text-sm">
                          <div>
                            <div className="text-white/60">Điểm</div>
                            <div
                              className={`text-xl font-bold ${
                                isGood ? "text-green-400" : "text-orange-400"
                              }`}
                            >
                              {item.result.score}
                            </div>
                          </div>
                          <div>
                            <div className="text-white/60">Đúng/Sai</div>
                            <div className="font-semibold text-white">
                              {item.result.correctAnswers}/
                              {item.result.incorrectAnswers}
                            </div>
                          </div>
                          <div>
                            <div className="text-white/60">Thời gian</div>
                            <div className="font-semibold text-white">
                              {formatTime(item.result.timeElapsed)}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="text-3xl">
                        {item.result.accuracy >= 90
                          ? "🏆"
                          : item.result.accuracy >= 70
                          ? "⭐"
                          : "📖"}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
