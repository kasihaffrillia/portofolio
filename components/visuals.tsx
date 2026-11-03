"use client";

import { ImageIcon } from "lucide-react";
import { Logo, QMark } from "./logo";
import { useLang } from "@/lib/i18n";
import { dict } from "@/lib/dictionary";
import type { Category } from "@/lib/content";

export function PlaceholderBadge() {
  const { t } = useLang();
  return (
    <span className="absolute bottom-3 left-3 z-10 inline-flex items-center gap-1.5 rounded-full border border-border bg-background/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted backdrop-blur">
      <ImageIcon className="h-3 w-3" aria-hidden="true" />
      {t(dict.common.replaceImage)}
    </span>
  );
}

export function BusinessCardFace({
  side,
  rounded = false,
  className = "",
}: {
  side: "front" | "back";
  rounded?: boolean;
  className?: string;
}) {
  const radius = rounded ? "rounded-[6%/10%]" : "rounded-none";
  if (side === "front") {
    return (
      <div
        className={`relative aspect-[1.75/1] w-full overflow-hidden bg-navy text-beige shadow-2xl shadow-black/50 ring-1 ring-white/5 ${radius} ${className}`}
      >
        <div className="absolute -right-[12%] -top-[30%] h-[90%] aspect-square rounded-full border border-brown/40" aria-hidden="true" />
        <div className="absolute inset-0 flex flex-col justify-between p-[7%]">
          <Logo className="text-[clamp(0.9rem,3.2cqw,1.6rem)] text-beige" />
          <div>
            <p className="text-[clamp(0.7rem,2.4cqw,1.1rem)] font-medium">Kasih Afrillia</p>
            <p className="mt-0.5 text-[clamp(0.5rem,1.5cqw,0.75rem)] uppercase tracking-[0.2em] text-brown">Creative Lead</p>
          </div>
        </div>
        <div className="absolute bottom-[7%] right-[7%] h-[3%] w-[22%] bg-brown" aria-hidden="true" />
      </div>
    );
  }
  return (
    <div
      className={`relative aspect-[1.75/1] w-full overflow-hidden bg-beige text-navy shadow-2xl shadow-black/50 ${radius} ${className}`}
    >
      <div className="absolute inset-0 flex items-center justify-between gap-[6%] p-[7%]">
        <div className="flex flex-col gap-[0.4em] text-[clamp(0.5rem,1.6cqw,0.8rem)]">
          <p className="font-semibold uppercase tracking-[0.2em] text-brown">Contact</p>
          <p>email@idqode.example</p>
          <p>@idqode</p>
          <p>idqode.example</p>
          <p className="mt-[0.8em] font-mono text-[0.85em] text-navy/60">Designing Ideas.</p>
        </div>
        <QrPattern className="h-[62%] shrink-0 text-navy" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-[5%] bg-navy" aria-hidden="true" />
    </div>
  );
}

const QR_SIZE = 13;
const qrCells = Array.from({ length: QR_SIZE * QR_SIZE }, (_, i) => {
  const x = i % QR_SIZE;
  const y = Math.floor(i / QR_SIZE);
  const inFinder = (fx: number, fy: number) => x >= fx && x < fx + 4 && y >= fy && y < fy + 4;
  if (inFinder(0, 0) || inFinder(QR_SIZE - 4, 0) || inFinder(0, QR_SIZE - 4)) return false;
  return (x * 7 + y * 13 + x * y) % 3 === 0;
});

export function QrPattern({ className = "" }: { className?: string }) {
  const finder = (x: number, y: number) => (
    <g key={`${x}-${y}`}>
      <rect x={x} y={y} width="4" height="4" fill="none" stroke="currentColor" strokeWidth="0.8" />
      <rect x={x + 1.2} y={y + 1.2} width="1.6" height="1.6" fill="currentColor" />
    </g>
  );
  return (
    <svg viewBox={`-0.5 -0.5 ${QR_SIZE + 1} ${QR_SIZE + 1}`} className={`aspect-square ${className}`} role="img" aria-label="QR code concept">
      {qrCells.map((on, i) =>
        on ? <rect key={i} x={i % QR_SIZE} y={Math.floor(i / QR_SIZE)} width="0.9" height="0.9" fill="currentColor" /> : null,
      )}
      {finder(0, 0)}
      {finder(QR_SIZE - 4, 0)}
      {finder(0, QR_SIZE - 4)}
    </svg>
  );
}

export function InterfaceMock({ variant = "dashboard" }: { variant?: "dashboard" | "seats" | "landing" }) {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-xl border border-border bg-surface shadow-2xl shadow-black/40">
      <div className="flex items-center gap-1.5 border-b border-border px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-border" />
        <span className="h-2 w-2 rounded-full bg-border" />
        <span className="h-2 w-2 rounded-full bg-border" />
        <span className="ml-3 h-2 w-24 rounded-full bg-card-hover" />
      </div>
      {variant === "dashboard" && (
        <div className="flex flex-1 gap-3 p-3">
          <div className="hidden w-1/5 flex-col gap-2 sm:flex">
            {[0, 1, 2, 3, 4].map((i) => (
              <span key={i} className={`h-2 rounded-full ${i === 1 ? "bg-primary/70" : "bg-card-hover"}`} />
            ))}
          </div>
          <div className="flex flex-1 flex-col gap-3">
            <div className="grid grid-cols-3 gap-2">
              {[0, 1, 2].map((i) => (
                <div key={i} className="rounded-lg border border-border bg-card p-2">
                  <span className="block h-1.5 w-1/2 rounded-full bg-card-hover" />
                  <span className={`mt-2 block h-3 w-3/4 rounded ${i === 0 ? "bg-primary/60" : i === 1 ? "bg-violet/60" : "bg-foreground/20"}`} />
                </div>
              ))}
            </div>
            <div className="flex flex-1 items-end gap-1.5 rounded-lg border border-border bg-card p-3">
              {[40, 65, 35, 80, 55, 90, 60, 72].map((h, i) => (
                <span key={i} style={{ height: `${h}%` }} className="flex-1 rounded-sm bg-gradient-to-t from-primary/30 to-violet/70" />
              ))}
            </div>
          </div>
        </div>
      )}
      {variant === "seats" && (
        <div className="flex flex-1 flex-col items-center justify-center gap-3 p-4">
          <span className="h-1.5 w-2/3 rounded-full bg-gradient-to-r from-primary to-violet" />
          <div className="grid grid-cols-10 gap-1">
            {Array.from({ length: 50 }, (_, i) => (
              <span
                key={i}
                className={`h-2.5 w-2.5 rounded-sm ${[12, 13, 27, 34, 35, 36].includes(i) ? "bg-violet" : [5, 21, 22, 40].includes(i) ? "bg-border" : "bg-card-hover"}`}
              />
            ))}
          </div>
        </div>
      )}
      {variant === "landing" && (
        <div className="flex flex-1 flex-col gap-3 p-4">
          <span className="h-3 w-2/3 rounded bg-foreground/30" />
          <span className="h-2 w-1/2 rounded bg-card-hover" />
          <span className="h-5 w-20 rounded-full bg-primary/70" />
          <div className="mt-auto grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <span key={i} className="aspect-[4/3] rounded-md border border-border bg-card" />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function Wireframe() {
  return (
    <div className="grid h-full w-full grid-cols-12 gap-2 rounded-xl border border-dashed border-muted/40 p-4">
      <div className="col-span-12 h-6 rounded border border-dashed border-muted/40" />
      <div className="col-span-3 row-span-3 rounded border border-dashed border-muted/40" />
      <div className="col-span-9 h-16 rounded border border-dashed border-muted/40" />
      <div className="col-span-9 grid grid-cols-3 gap-2">
        {[0, 1, 2].map((i) => (
          <div key={i} className="h-14 rounded border border-dashed border-muted/40" />
        ))}
      </div>
      <div className="col-span-9 h-10 rounded border border-dashed border-muted/40" />
    </div>
  );
}

export function ProjectVisual({
  category,
  accent,
  slug,
  showBadge = true,
}: {
  category: Category;
  accent: "blue" | "violet" | "beige";
  slug: string;
  showBadge?: boolean;
}) {
  const glow = accent === "violet" ? "bg-violet/25" : accent === "beige" ? "bg-beige/15" : "bg-primary/25";
  return (
    <div className="relative h-full w-full overflow-hidden bg-surface [container-type:inline-size]">
      <div className="bg-grid absolute inset-0 opacity-40" aria-hidden="true" />
      <div className={`absolute -right-10 -top-10 h-2/3 w-2/3 rounded-full blur-3xl ${glow}`} aria-hidden="true" />
      <div className="relative flex h-full w-full items-center justify-center p-[8%] transition-transform duration-700 group-hover:scale-[1.03]">
        {category === "graphic" ? (
          <div className="relative w-[78%]">
            <BusinessCardFace side="back" className="absolute left-[10%] top-[-14%] w-full rotate-6 opacity-90" />
            <BusinessCardFace side="front" className="relative -rotate-3" />
          </div>
        ) : category === "uiux" ? (
          <div className="aspect-[16/10] w-[86%]">
            <InterfaceMock variant="seats" />
          </div>
        ) : (
          <div className="aspect-[16/10] w-[86%]">
            <InterfaceMock variant={slug === "gs-material-store" ? "landing" : "dashboard"} />
          </div>
        )}
      </div>
      {showBadge && category !== "graphic" && <PlaceholderBadge />}
    </div>
  );
}
