import { useId } from "react";

export function QMark({ className }: { className?: string }) {
  const id = useId();
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#718BFF" />
          <stop offset="100%" stopColor="#A78BFA" />
        </linearGradient>
      </defs>
      <circle cx="19" cy="19" r="13.5" fill="none" stroke="currentColor" strokeWidth="5" />
      <rect x="26" y="26" width="9" height="9" rx="1.5" fill={`url(#${id})`} />
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center font-semibold tracking-[0.18em] leading-none ${className}`}>
      <span>ID</span>
      <QMark className="mx-[0.06em] h-[0.95em] w-[0.95em]" />
      <span>ODE</span>
      <span className="sr-only">IDQODE</span>
    </span>
  );
}
