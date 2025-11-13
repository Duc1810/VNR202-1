"use client";

import { useEffect, useState } from "react";
import { QuizResult } from "@/types/quiz";
import { formatTime, getPerformanceLevel } from "@/lib/quizHelpers";
import confetti from "canvas-confetti";

interface ResultScreenProps {
  result: QuizResult;
  onRestart: () => void;
  onReview: () => void;
  onBackToHome: () => void;
}

export function ResultScreen({
  result,
  onRestart,
  onReview,
  onBackToHome,
}: ResultScreenProps) {
  const [showConfetti, setShowConfetti] = useState(false);
  const performance = getPerformanceLevel(result.accuracy);

  useEffect(() => {
    if (result.accuracy >= 80 && !showConfetti) {
      setShowConfetti(true);
      // Trigger confetti
      const duration = 3000;
      const end = Date.now() + duration;

      const colors = ["#f35e53", "#ffd966 ", "#e3a645"];

      (function frame() {
        confetti({
          particleCount: 3,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: colors,
        });
        confetti({
          particleCount: 3,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: colors,
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      })();
    }
  }, [result.accuracy, showConfetti]);

  return (
    <div className="mx-auto max-w-3xl space-y-8 animate-scale-in">
      {/* Result Card */}
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-r  from-white/10 to-white/0 p-8 lg:p-12">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#f35e53]/10 blur-3xl" />

        <div className="relative space-y-8 text-center">
          {/* Icon & Title */}
          <div className="space-y-4">
            <div className="text-7xl">{performance.emoji}</div>
            <div>
              <h2 className="font-quicksand text-4xl font-bold text-white lg:text-5xl">
                Hoàn thành!
              </h2>
              <p className={`mt-2 text-2xl font-semibold ${performance.color}`}>
                {performance.level}
              </p>
            </div>
          </div>

          {/* Score */}
          <div className="inline-block rounded-2xl border border-[#f35e53]/30 bg-[#f35e53]/10 px-12 py-6">
            <div className="text-sm font-semibold uppercase tracking-wider text-[#f35e53]/80">
              Điểm số
            </div>
            <div className="mt-2 font-mono text-6xl font-bold text-[#f35e53]">
              {result.score}
              <span className="text-3xl text-[#f35e53]/60">/100</span>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="text-2xl font-bold text-green-400">
                {result.correctAnswers}
              </div>
              <div className="mt-1 text-xs text-white/90">Câu đúng</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="text-2xl font-bold text-red-400">
                {result.incorrectAnswers}
              </div>
              <div className="mt-1 text-xs text-white/90">Câu sai</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="text-2xl font-bold text-blue-400">
                {formatTime(result.timeElapsed)}
              </div>
              <div className="mt-1 text-xs text-white/90">Thời gian</div>
            </div>
          </div>

          {/* Accuracy Bar */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-white/90">Độ chính xác</span>
              <span className="font-bold text-white">
                {result.accuracy.toFixed(1)}%
              </span>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-linear-to-r from-[#f35e53] to-[#ffd966 ] transition-all duration-1000 ease-out"
                style={{ width: `${result.accuracy}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid gap-4 sm:grid-cols-3">
        <button
          onClick={onReview}
          className="flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-4 font-semibold text-white transition-all hover:bg-white/10"
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
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
          Xem lại đáp án
        </button>

        <button
          onClick={onBackToHome}
          className="flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-4 font-semibold text-white transition-all hover:bg-white/10"
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
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          Về trang chủ
        </button>


        <button
          onClick={onRestart}
          className="flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-[#f35e53] to-[#ffcccc] px-6 py-4 font-semibold text-black transition-all hover:shadow-2xl hover:shadow-[#f35e53]/50"
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
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
          Làm lại
        </button>
      </div>
    </div>
  );
}
