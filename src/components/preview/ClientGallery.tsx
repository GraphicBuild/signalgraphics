import type { ClientSite } from "@/content/clients/types";
import { Reveal } from "@/components/Reveal";

export function ClientGallery({ client }: { client: ClientSite }) {
  return (
    <section id="galerie" className="border-b border-[var(--line)] py-16 md:py-24">
      <div className="mx-auto max-w-site px-5 md:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            Galerie
          </p>
          <h2 className="mt-3 font-client-display text-3xl font-semibold tracking-tight md:text-4xl">
            Ein Eindruck vom Salon.
          </h2>
          <p className="mt-3 max-w-lg text-sm text-[var(--mute)]">
            Platzhalter — echte Fotos vom Salon ersetzen diese Flächen vor
            Livegang.
          </p>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {client.gallery.map((tile, i) => (
            <Reveal key={tile.label} delay={i * 0.04}>
              <div
                className="flex aspect-[4/5] items-end rounded-2xl p-4 transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_-16px_rgba(0,0,0,0.35)]"
                style={{
                  background:
                    "linear-gradient(155deg, var(--accent-soft), var(--accent))",
                }}
              >
                <span className="rounded-full bg-[color-mix(in_srgb,var(--bg)_85%,transparent)] px-3 py-1 text-xs font-semibold text-[var(--ink)]">
                  {tile.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
