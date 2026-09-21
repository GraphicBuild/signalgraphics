import { telUrl } from "@/content/haarstudio.config";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-salonLine bg-salonCream/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-site items-center justify-between gap-4 px-5 py-3.5 md:px-8">
        <a
          href="#top"
          className="font-salonDisplay text-lg font-semibold tracking-tight text-salonInk md:text-xl"
        >
          Das Haarstudio
        </a>
        <nav className="hidden items-center gap-7 text-sm text-salonMute md:flex">
          <a href="#leistungen" className="transition hover:text-salonInk">
            Leistungen
          </a>
          <a href="#termin" className="transition hover:text-salonInk">
            Termin
          </a>
          <a href="#bewertungen" className="transition hover:text-salonInk">
            Bewertungen
          </a>
          <a href="#kontakt" className="transition hover:text-salonInk">
            Kontakt
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={telUrl()}
            className="hidden rounded-full border border-salonInk/15 px-3.5 py-1.5 text-sm text-salonInk transition hover:border-salonClay/60 sm:inline-flex"
          >
            Anrufen
          </a>
          <a
            href="#termin"
            className="rounded-full bg-salonClay px-3.5 py-1.5 text-sm font-semibold text-salonCream transition hover:brightness-110"
          >
            Termin anfragen
          </a>
        </div>
      </div>
    </header>
  );
}
