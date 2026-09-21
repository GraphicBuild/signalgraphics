import type { ClientSite } from "@/content/clients/types";
import { Reveal } from "@/components/Reveal";

/** Opt-in Social-Proof-Band — nur einbinden, wenn `client.reviews.value` (Sternedurchschnitt) bekannt ist. */
export function ClientReviews({ client }: { client: ClientSite }) {
  if (!client.reviews.value) return null;

  return (
    <section
      className="border-b border-[var(--line)] py-14 md:py-16"
      style={{ background: "var(--ink)" }}
    >
      <div className="mx-auto max-w-site px-5 md:px-8">
        <Reveal>
          <div className="flex flex-wrap items-center gap-6">
            <p
              className="font-client-display text-6xl font-semibold md:text-7xl"
              style={{ color: "var(--bg)" }}
            >
              {client.reviews.value}
            </p>
            <div>
              <p aria-hidden style={{ color: "var(--accent)" }}>
                ★★★★★
              </p>
              <p className="mt-1 text-sm" style={{ color: "var(--bg)", opacity: 0.7 }}>
                {client.reviews.count.toLocaleString("de-DE")} Bewertungen bei{" "}
                {client.reviews.source}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
