import type { ClientSite } from "@/content/clients/types";
import { Reveal } from "@/components/Reveal";

export function ClientServices({ client }: { client: ClientSite }) {
  return (
    <section id="leistungen" className="border-b border-[var(--line)] py-16 md:py-24">
      <div className="mx-auto max-w-site px-5 md:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            Leistungen
          </p>
          <h2 className="mt-3 font-client-display text-3xl font-semibold tracking-tight md:text-4xl">
            Für jeden Anlass.
          </h2>
          {!client.servicesConfirmed && (
            <p className="mt-3 max-w-lg text-sm text-[var(--mute)]">
              Beispielhafte Übersicht — wird vor Livegang mit der echten
              Leistungs- und Preisliste von {client.name} abgeglichen.
            </p>
          )}
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {client.services.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-[var(--line)] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_-16px_rgba(0,0,0,0.35)]">
                <h3 className="font-client-display text-lg font-semibold">
                  {group.category}
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-[var(--ink)]/80">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
