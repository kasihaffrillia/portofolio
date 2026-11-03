import { SiteHeader } from "@/components/site-header";
import { About, Contact, Experience, Hero, Projects } from "@/components/sections";
import { profile } from "@/lib/data";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-6">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="border-t border-border">
        <div className="mx-auto max-w-3xl px-6 py-6 text-xs text-muted">
          {`© ${new Date().getFullYear()} ${profile.name}`}
        </div>
      </footer>
    </>
  );
}
