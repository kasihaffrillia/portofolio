import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 md:px-8 ${className}`}>{children}</div>;
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">
      <span className="h-px w-8 bg-gradient-to-r from-primary to-violet" aria-hidden="true" />
      {children}
    </p>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background";
  const styles =
    variant === "primary"
      ? "bg-foreground text-background hover:bg-primary"
      : "border border-border text-foreground hover:border-primary/60 hover:bg-card";
  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
    </Link>
  );
}

export function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-primary"
    >
      {children}
      <ArrowUpRight
        className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        aria-hidden="true"
      />
    </Link>
  );
}

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
}) {
  return (
    <header className="relative overflow-hidden border-b border-border pt-36 pb-16 md:pt-44 md:pb-24">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-violet/20 blur-3xl"
        aria-hidden="true"
      />
      <Container className="relative">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-6 max-w-4xl text-balance text-4xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
          {title}
        </h1>
        {description && <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted">{description}</p>}
        {children}
      </Container>
    </header>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-border bg-surface px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-muted">
      {children}
    </span>
  );
}
