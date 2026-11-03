import { profile } from "@/lib/data";

const links = [
  { label: "Tentang", href: "#tentang" },
  { label: "Proyek", href: "#proyek" },
  { label: "Pengalaman", href: "#pengalaman" },
  { label: "Kontak", href: "#kontak" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <a href="#" className="text-sm font-semibold tracking-tight">
          {profile.name}
        </a>
        <nav aria-label="Navigasi utama">
          <ul className="flex items-center gap-5 text-sm text-muted">
            {links.map((link) => (
              <li key={link.href} className={link.href === "#tentang" ? "hidden sm:block" : ""}>
                <a href={link.href} className="transition-colors hover:text-foreground">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
