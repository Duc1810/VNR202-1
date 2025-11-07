"use client";

import { QuizMode } from "@/types/quiz";

interface ModeCardProps {
  mode: QuizMode;
  title: string;
  description: string;
  icon: string;
  questionCount: number;
  timeLimit?: string;
  onSelect: () => void;
}

export function ModeCard({
  title,
  description,
  icon,
  questionCount,
  timeLimit,
  onSelect,
}: ModeCardProps) {
  return (
    <button
      onClick={onSelect}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br  from-white/5 to-white/0 p-6 text-left transition-all hover:border-[#f3c554]/50 hover:bg-white/10 hover:scale-105 active:scale-100"
    >
      <div className="absolute inset-0 bg-linear-to-br  from-[#f3c554]/0 to-[#f3c554]/0 opacity-0 transition-opacity group-hover:from-[#f3c554]/5 group-hover:to-[#f3c554]/10 group-hover:opacity-100" />

      <div className="relative space-y-4">
        <div className="flex items-start justify-between">
          <div className="text-4xl">{icon}</div>
          <div className="rounded-full bg-[#f3c554]/20 px-3 py-1 text-xs font-bold text-[#f3c554]">
            {questionCount} câu
          </div>
        </div>

        <div>
          <h3 className="font-quicksand text-xl font-bold text-white">
            {title}
          </h3>
          <p className="mt-2 text-sm text-white/70">{description}</p>
        </div>

        {timeLimit && (
          <div className="flex items-center gap-2 text-xs text-white/60">
            <svg
              className="h-4 w-4"
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
            <span>{timeLimit}</span>
          </div>
        )}

        <div className="flex items-center gap-2 text-sm font-semibold text-[#f3c554] opacity-0 transition-opacity group-hover:opacity-100">
          <span>Bắt đầu</span>
          <svg
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </div>
      </div>
    </button>
  );
}
