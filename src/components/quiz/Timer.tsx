"use client";

import { useEffect, useState } from "react";

interface TimerProps {
  isRunning: boolean;
  onTick?: (seconds: number) => void;
  initialSeconds?: number;
  countDown?: boolean;
  maxSeconds?: number;
}

export function Timer({
  isRunning,
  onTick,
  initialSeconds = 0,
  countDown = false,
  maxSeconds,
}: TimerProps) {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setSeconds((prev) => {
        const next = countDown ? prev - 1 : prev + 1;
        
        // Check limits
        if (countDown && next <= 0) {
          clearInterval(interval);
          onTick?.(0);
          return 0;
        }
        if (maxSeconds && next >= maxSeconds) {
          clearInterval(interval);
          onTick?.(maxSeconds);
          return maxSeconds;
        }

        onTick?.(next);
        return next;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, countDown, maxSeconds, onTick]);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const isWarning = countDown && seconds <= 60 && seconds > 0;
  const isDanger = countDown && seconds <= 30 && seconds > 0;

  return (
    <div
      className={`flex items-center gap-2 rounded-lg border px-4 py-2 font-mono text-sm font-bold transition-colors ${
        isDanger
          ? "border-red-500/50 bg-red-500/10 text-red-400"
          : isWarning
          ? "border-orange-500/50 bg-orange-500/10 text-orange-400"
          : "border-white/10 bg-white/5 text-white"
      }`}
    >
      <svg
        className={`h-4 w-4 ${isDanger ? "animate-pulse" : ""}`}
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
      <span>
        {String(minutes).padStart(2, "0")}:{String(remainingSeconds).padStart(2, "0")}
      </span>
    </div>
  );
}
