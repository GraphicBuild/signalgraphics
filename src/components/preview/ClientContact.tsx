import type { ClientSite } from "@/content/clients/types";
import { clientTelUrl, clientWhatsappUrl } from "@/lib/clientLinks";
import { Reveal } from "@/components/Reveal";

export function ClientContact({ client }: { client: ClientSite }) {
  return (
    <section id="kontakt" className="py-16 md:py-24">
      <div className="mx-auto max-w-site px-5 md:px-8">
        <Reveal>
          <div className="rounded-3xl bg-[var(--ink)] px-6 py-12 text-center text-[var(--bg)] md:px-12 md:py-16">
            <h2 className="font-client-display text-3xl font-semibold tracking-tight md:text-4xl">
              Termin anfragen.
            </h2>
            <p className="mx-auto mt-3 max-w-md text-[var(--bg)]/75">
              Kurz schreiben oder anrufen — {client.name} meldet sich zeitnah
              zurück.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={clientWhatsappUrl(client)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-[var(--accent)] px-6 py-3.5 text-sm font-bold text-[var(--bg)] transition hover:brightness-110"
              >
                WhatsApp schreiben
              </a>
              <a
                href={clientTelUrl(client)}
                className="inline-flex items-center rounded-full border border-[var(--bg)]/25 px-6 py-3.5 text-sm font-semibold text-[var(--bg)] transition hover:border-[var(--accent)]"
              >
                {client.nap.phoneDisplay}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
