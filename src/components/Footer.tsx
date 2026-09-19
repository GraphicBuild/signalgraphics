import Link from "next/link";
import { site, telUrl, whatsappUrl } from "@/site.config";

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink">
      <div className="mx-auto grid max-w-site gap-10 px-5 py-14 md:grid-cols-3 md:px-8">
        <div>
          <p className="font-display text-2xl font-bold tracking-tight">
            Signal<span className="text-signal">.</span>
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-mute">
            {site.tagline} Für lokale Betriebe in DACH.
          </p>
        </div>
        <div className="text-sm">
          <p className="mb-3 font-semibold uppercase tracking-wider text-mute">
            NAP
          </p>
          <ul className="space-y-2 text-paper/90">
            <li>{site.nap.name}</li>
            <li>
              <a href={telUrl()} className="hover:text-signal">
                {site.nap.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.nap.email}`}
                className="hover:text-signal"
              >
                {site.nap.email}
              </a>
            </li>
            <li>{site.nap.region}</li>
          </ul>
        </div>
        <div className="text-sm">
          <p className="mb-3 font-semibold uppercase tracking-wider text-mute">
            Rechtliches
          </p>
          <ul className="space-y-2">
            <li>
              <Link href="/impressum/" className="hover:text-signal">
                Impressum
              </Link>
            </li>
            <li>
              <Link href="/datenschutz/" className="hover:text-signal">
                Datenschutz
              </Link>
            </li>
            <li>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-signal"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line px-5 py-5 text-center text-xs text-mute md:px-8">
        © {new Date().getFullYear()} {site.name} · {site.domain} ·{" "}
        {site.founders.map((f) => f.name).join(" & ")}
      </div>
    </footer>
  );
}
