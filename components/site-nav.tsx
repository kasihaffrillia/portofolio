"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "./logo";
import { useLang } from "@/lib/i18n";
import { dict } from "@/lib/dictionary";
import { navLinks, portfolioLinks } from "@/lib/content";

function LangSwitch() {
  const { lang, setLang, t } = useLang();
  return (
    <div role="group" aria-label={t(dict.nav.language)} className="flex items-center rounded-full border border-border p-0.5 font-mono text-xs">
      {(["id", "en"] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={`rounded-full px-2.5 py-1 uppercase transition-colors ${
            lang === code ? "bg-foreground text-background" : "text-muted hover:text-foreground"
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  );
}

export function SiteNav() {
  const pathname = usePathname();
  const { t } = useLang();
  const reduce = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const dropRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!dropOpen) return;
    const onDown = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) setDropOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setDropOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [dropOpen]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen ? "border-b border-border/70 bg-background/75 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5 md:h-20 md:px-8">
        <Link href="/" aria-label="IDQODE home" className="text-lg">
          <Logo />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) =>
            link.key === "portfolio" ? (
              <li key={link.href} ref={dropRef} className="relative" onMouseEnter={() => setDropOpen(true)} onMouseLeave={() => setDropOpen(false)}>
                <button
                  type="button"
                  aria-expanded={dropOpen}
                  aria-controls="portfolio-menu"
                  onClick={() => setDropOpen((v) => !v)}
                  className={`relative flex items-center gap-1 rounded-full px-3.5 py-2 text-sm transition-colors ${
                    isActive(link.href) ? "text-foreground" : "text-muted hover:text-foreground"
                  }`}
                >
                  {t(dict.nav[link.key])}
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform ${dropOpen ? "rotate-180" : ""}`} aria-hidden="true" />
                  {isActive(link.href) && <ActiveDot />}
                </button>
                <AnimatePresence>
                  {dropOpen && (
                    <motion.ul
                      id="portfolio-menu"
                      initial={reduce ? false : { opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={reduce ? undefined : { opacity: 0, y: -6 }}
                      transition={{ duration: 0.18 }}
                      className="absolute left-1/2 top-full w-56 -translate-x-1/2 pt-2"
                    >
                      <div className="rounded-2xl border border-border bg-card/95 p-1.5 shadow-2xl shadow-black/40 backdrop-blur-xl">
                        {portfolioLinks.map((p) => (
                          <li key={p.href}>
                            <Link
                              href={p.href}
                              aria-current={pathname === p.href ? "page" : undefined}
                              className={`block rounded-xl px-3.5 py-2.5 text-sm transition-colors hover:bg-card-hover ${
                                pathname === p.href ? "text-foreground" : "text-muted hover:text-foreground"
                              }`}
                            >
                              {t(dict.nav[p.key])}
                            </Link>
                          </li>
                        ))}
                      </div>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
            ) : (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`relative block rounded-full px-3.5 py-2 text-sm transition-colors ${
                    isActive(link.href) ? "text-foreground" : "text-muted hover:text-foreground"
                  }`}
                >
                  {t(dict.nav[link.key])}
                  {isActive(link.href) && <ActiveDot />}
                </Link>
              </li>
            ),
          )}
        </ul>

        <div className="flex items-center gap-3">
          <LangSwitch />
          <Link
            href="/contact"
            className="hidden rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-primary sm:inline-flex"
          >
            {t(dict.nav.contactCta)}
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? t(dict.nav.closeMenu) : t(dict.nav.openMenu)}
            className="rounded-full border border-border p-2 text-foreground lg:hidden"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden lg:hidden"
          >
            <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-5 pb-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={pathname === link.href ? "page" : undefined}
                    className={`block rounded-xl px-3 py-3 text-base ${isActive(link.href) ? "bg-card text-foreground" : "text-muted"}`}
                  >
                    {t(dict.nav[link.key])}
                  </Link>
                  {link.key === "portfolio" && (
                    <ul className="ml-4 border-l border-border pl-3">
                      {portfolioLinks.slice(1).map((p) => (
                        <li key={p.href}>
                          <Link
                            href={p.href}
                            className={`block px-3 py-2 text-sm ${pathname === p.href ? "text-foreground" : "text-muted"}`}
                          >
                            {t(dict.nav[p.key])}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function ActiveDot() {
  return (
    <motion.span
      layoutId="nav-active"
      className="absolute bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-primary"
      aria-hidden="true"
    />
  );
}
