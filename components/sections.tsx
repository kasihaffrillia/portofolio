import { experiences, profile, projects } from "@/lib/data";

function SectionTitle({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="mb-8 font-mono text-xs uppercase tracking-widest text-muted">
      {children}
    </h2>
  );
}

export function Hero() {
  return (
    <section className="py-20 sm:py-28">
      <p className="mb-4 flex items-center gap-2 text-sm text-muted">
        <span className="size-2 rounded-full bg-accent" aria-hidden="true" />
        Tersedia untuk proyek baru
      </p>
      <h1 className="text-4xl font-semibold leading-tight tracking-tight text-balance sm:text-5xl">
        {profile.role} dari {profile.location}.
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted text-pretty">
        {profile.intro}
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href="#proyek"
          className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-80"
        >
          Lihat Proyek
        </a>
        <a
          href={`mailto:${profile.email}`}
          className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-foreground"
        >
          Hubungi Saya
        </a>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section aria-labelledby="tentang" className="border-t border-border py-16">
      <SectionTitle id="tentang">Tentang</SectionTitle>
      <div className="flex flex-col gap-4 leading-relaxed">
        {profile.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <ul className="mt-8 flex flex-wrap gap-2" aria-label="Keahlian">
        {profile.skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full border border-border px-3 py-1 text-sm text-muted"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Projects() {
  return (
    <section aria-labelledby="proyek" className="border-t border-border py-16">
      <SectionTitle id="proyek">Proyek Pilihan</SectionTitle>
      <ul className="flex flex-col">
        {projects.map((project) => (
          <li key={project.title} className="border-b border-border last:border-b-0">
            <a
              href={project.href}
              className="group flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
            >
              <div className="flex-1">
                <h3 className="font-medium transition-colors group-hover:text-accent">
                  {project.title}
                  <span
                    className="ml-1 inline-block transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    {"→"}
                  </span>
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{project.description}</p>
                <p className="mt-3 font-mono text-xs text-muted">{project.tags.join(" · ")}</p>
              </div>
              <span className="font-mono text-xs text-muted">{project.year}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Experience() {
  return (
    <section aria-labelledby="pengalaman" className="border-t border-border py-16">
      <SectionTitle id="pengalaman">Pengalaman</SectionTitle>
      <ol className="flex flex-col gap-8">
        {experiences.map((item) => (
          <li key={item.role} className="flex flex-col gap-1 sm:flex-row sm:gap-8">
            <span className="w-36 shrink-0 font-mono text-xs leading-6 text-muted">
              {item.period}
            </span>
            <div>
              <h3 className="font-medium">
                {item.role} <span className="text-muted">— {item.company}</span>
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">{item.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function Contact() {
  return (
    <section aria-labelledby="kontak" className="border-t border-border py-16">
      <SectionTitle id="kontak">Kontak</SectionTitle>
      <p className="text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
        Punya ide atau proyek? Mari ngobrol.
      </p>
      <a
        href={`mailto:${profile.email}`}
        className="mt-4 inline-block text-lg text-accent underline underline-offset-4 hover:opacity-80"
      >
        {profile.email}
      </a>
      <ul className="mt-8 flex flex-wrap gap-6 text-sm text-muted">
        {profile.socials.map((social) => (
          <li key={social.label}>
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              {social.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
