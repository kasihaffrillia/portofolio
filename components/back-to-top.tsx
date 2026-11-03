"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { dict } from "@/lib/dictionary";

export function BackToTop() {
  const [show, setShow] = useState(false);
  const { t } = useLang();

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          type="button"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0 })}
          aria-label={t(dict.common.backToTop)}
          className="fixed bottom-6 right-6 z-40 rounded-full border border-border bg-card/90 p-3 text-foreground shadow-lg backdrop-blur transition-colors hover:border-primary hover:text-primary"
        >
          <ArrowUp className="h-4 w-4" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
