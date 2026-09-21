import type { ClientSite } from "@/content/clients/types";
import { clientMapsUrl } from "@/lib/clientLinks";
import { Reveal } from "@/components/Reveal";

export function ClientHours({ client }: { client: ClientSite }) {
  return (
    <section id="lage" className="border-b border-[var(--line)] py-16 md:py-24">
      <div className="mx-auto max-w-site px-5 md:px-8">
        <div className="grid gap-10 md:grid-cols-2">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              Öffnungszeiten
            </p>
            <h2 className="mt-3 font-client-display text-3xl font-semibold tracking-tight md:text-4xl">
              Vorbeikommen.
            </h2>
            <ul className="mt-6 space-y-2 text-base text-[var(--ink)]/85">
              {client.hours.map((h) => (
                <li
                  key={h.day}
                  className="flex justify-between border-b border-[var(--line)] py-2"
                >
                  <span>{h.day}</span>
                  <span className="font-medium">{h.hours}</span>
                </li>
              ))}
            </ul>
            {!client.hoursConfirmed && (
              <p className="mt-4 text-sm text-[var(--mute)]">
                Vollständige Öffnungszeiten bitte kurz telefonisch oder über
                das Google-Profil bestätigen.
              </p>
            )}
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              Adresse
            </p>
            <address className="mt-3 font-client-display text-2xl font-semibold not-italic tracking-tight">
              {client.nap.street}
              <br />
              {client.nap.zipCity}
            </address>
            <a
              href={clientMapsUrl(client)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center rounded-full border border-[var(--ink)]/20 px-5 py-2.5 text-sm font-semibold transition hover:border-[var(--accent)]/60"
            >
              Route planen →
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
