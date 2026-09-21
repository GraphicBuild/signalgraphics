import type { ClientSite } from "@/content/clients/types";
import { clientTelUrl, clientWhatsappUrl } from "@/lib/clientLinks";
import { Reveal } from "@/components/Reveal";

export function ClientHero({ client }: { client: ClientSite }) {
  return (
    <section className="border-b border-[var(--line)] pb-14 pt-12 md:pb-20 md:pt-16">
      <div className="mx-auto max-w-site px-5 md:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
            {client.category} · {client.neighborhood}
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="mt-4 max-w-3xl font-client-display text-[clamp(2.4rem,8vw,4.75rem)] font-semibold leading-[0.98] tracking-tight">
            {client.name}
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 max-w-xl text-lg leading-snug text-[var(--ink)]/80 md:text-xl">
            {client.promise}
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={clientWhatsappUrl(client)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-[var(--accent)] px-6 py-3.5 text-sm font-bold text-[var(--bg)] transition hover:brightness-110"
            >
              Termin per WhatsApp
            </a>
            <a
              href={clientTelUrl(client)}
              className="inline-flex items-center rounded-full border border-[var(--ink)]/20 px-6 py-3.5 text-sm font-semibold text-[var(--ink)] transition hover:border-[var(--accent)]/60"
            >
              {client.nap.phoneDisplay}
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-7 text-sm text-[var(--mute)]">{client.nap.zipCity}</p>
        </Reveal>
      </div>
    </section>
  );
}
