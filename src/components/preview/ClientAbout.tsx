import type { ClientSite } from "@/content/clients/types";
import { Reveal } from "@/components/Reveal";

export function ClientAbout({ client }: { client: ClientSite }) {
  return (
    <section id="ueber-uns" className="border-b border-[var(--line)] py-16 md:py-24">
      <div className="mx-auto max-w-site px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              Über den Salon
            </p>
            <h2 className="mt-3 font-client-display text-3xl font-semibold tracking-tight md:text-4xl">
              {client.name}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-4 text-base leading-relaxed text-[color-mix(in_srgb,var(--ink)_85%,transparent)] md:text-lg">
              {client.about.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
