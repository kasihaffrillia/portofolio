"use client";

import { useState } from "react";
import { AlertCircle, AtSign, Briefcase, Camera, Code2, Loader2 } from "lucide-react";
import { Reveal } from "../reveal";
import { Container, PageHeader } from "../ui";
import { useLang } from "@/lib/i18n";
import { dict } from "@/lib/dictionary";

const channels = [
  { label: "Email", icon: AtSign },
  { label: "Instagram", icon: Camera },
  { label: "LinkedIn", icon: Briefcase },
  { label: "GitHub", icon: Code2 },
];

type Field = "name" | "email" | "category" | "subject" | "message";
type Values = Record<Field, string>;
const empty: Values = { name: "", email: "", category: "", subject: "", message: "" };

function validate(v: Values): Partial<Record<Field, true>> {
  const e: Partial<Record<Field, true>> = {};
  if (v.name.trim().length < 2) e.name = true;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) e.email = true;
  if (!v.category) e.category = true;
  if (v.subject.trim().length < 3) e.subject = true;
  if (v.message.trim().length < 20) e.message = true;
  return e;
}

function ContactForm() {
  const { t } = useLang();
  const [values, setValues] = useState<Values>(empty);
  const [errors, setErrors] = useState<Partial<Record<Field, true>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "not-connected">("idle");

  const update = (field: Field) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
    if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) {
      document.getElementById(`field-${Object.keys(found)[0]}`)?.focus();
      return;
    }
    setStatus("submitting");
    await new Promise((r) => setTimeout(r, 600));
    setStatus("not-connected");
  };

  const input =
    "w-full rounded-2xl border bg-surface px-4 py-3.5 text-sm text-foreground placeholder:text-muted/60 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/40";
  const fieldClass = (f: Field) => `${input} ${errors[f] ? "border-red-400/70" : "border-border focus:border-primary/60"}`;

  const label = (f: Field, text: string) => (
    <label htmlFor={`field-${f}`} className="mb-2 block text-sm font-medium">
      {text}
    </label>
  );
  const error = (f: Field) =>
    errors[f] ? (
      <p id={`err-${f}`} className="mt-2 text-xs text-red-300">
        {t(dict.contact.errors[f])}
      </p>
    ) : null;
  const aria = (f: Field) => ({ "aria-invalid": !!errors[f], "aria-describedby": errors[f] ? `err-${f}` : undefined });

  if (status === "not-connected") {
    return (
      <div role="status" className="rounded-[2rem] border border-border bg-card p-8 md:p-10">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet/15 text-violet">
          <AlertCircle className="h-5 w-5" aria-hidden="true" />
        </span>
        <h2 className="mt-6 text-2xl font-semibold tracking-tight">{t(dict.contact.notConnectedTitle)}</h2>
        <p className="mt-3 text-pretty leading-relaxed text-muted">{t(dict.contact.notConnected)}</p>
        <button
          type="button"
          onClick={() => {
            setValues(empty);
            setStatus("idle");
          }}
          className="mt-8 rounded-full border border-border px-5 py-2.5 text-sm transition-colors hover:border-primary/60 hover:bg-card-hover"
        >
          {t(dict.contact.reset)}
        </button>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} className="rounded-[2rem] border border-border bg-card p-6 md:p-10">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          {label("name", t(dict.contact.name))}
          <input id="field-name" autoComplete="name" value={values.name} onChange={update("name")} className={fieldClass("name")} {...aria("name")} />
          {error("name")}
        </div>
        <div>
          {label("email", t(dict.contact.email))}
          <input id="field-email" type="email" autoComplete="email" value={values.email} onChange={update("email")} className={fieldClass("email")} {...aria("email")} />
          {error("email")}
        </div>
        <div>
          {label("category", t(dict.contact.category))}
          <select id="field-category" value={values.category} onChange={update("category")} className={fieldClass("category")} {...aria("category")}>
            <option value="">{t(dict.contact.selectCategory)}</option>
            {dict.contact.categories.map((c) => (
              <option key={c.value} value={c.value}>
                {t(c.label)}
              </option>
            ))}
          </select>
          {error("category")}
        </div>
        <div>
          {label("subject", t(dict.contact.subject))}
          <input id="field-subject" value={values.subject} onChange={update("subject")} className={fieldClass("subject")} {...aria("subject")} />
          {error("subject")}
        </div>
        <div className="sm:col-span-2">
          {label("message", t(dict.contact.message))}
          <textarea id="field-message" rows={6} value={values.message} onChange={update("message")} className={`${fieldClass("message")} resize-y`} {...aria("message")} />
          {error("message")}
        </div>
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-colors hover:bg-primary disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
        {status === "submitting" ? t(dict.contact.submitting) : t(dict.contact.submit)}
      </button>
    </form>
  );
}

export function ContactView() {
  const { t } = useLang();
  return (
    <>
      <PageHeader eyebrow={t(dict.contact.label)} title={t(dict.contact.title)} description={t(dict.contact.description)} />
      <section className="py-16 md:py-24">
        <Container className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">{t(dict.contact.channels)}</h2>
            <ul className="mt-6 flex flex-col gap-3">
              {channels.map((c) => (
                <li key={c.label} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface text-primary">
                    <c.icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-medium">{c.label}</p>
                    <p className="text-xs text-muted">{t(dict.footer.placeholder)}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-muted">{t(dict.contact.placeholderNote)}</p>
          </Reveal>
          <Reveal className="lg:col-span-8" delay={0.06}>
            <ContactForm />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
