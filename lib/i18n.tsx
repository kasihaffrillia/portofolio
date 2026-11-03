"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

export type Lang = "id" | "en";
export type L = { id: string; en: string };
export type LList = { id: readonly string[]; en: readonly string[] };

type LangContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (value: L) => string;
  tl: (value: LList) => readonly string[];
};

const LangContext = createContext<LangContextValue | null>(null);
const STORAGE_KEY = "idqode-lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("id");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "id" || stored === "en") setLangState(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const t = useCallback((value: L) => value[lang], [lang]);
  const tl = useCallback((value: LList) => value[lang], [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang, t, tl }}>{children}</LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
