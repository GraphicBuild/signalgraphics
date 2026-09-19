import { site, whatsappUrl } from "@/site.config";
import { Reveal } from "./Reveal";

export function Pricing() {
  return (
    <section id="preise" className="border-b border-line py-20 md:py-28">
      <div className="mx-auto max-w-site px-5 md:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-signal">
            Preise
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
            Klar kalkuliert.
          </h2>
          <p className="mt-4 max-w-xl text-sm text-mute">
            {site.pricing.disclaimer}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {site.pricing.packages.map((pkg, i) => (
            <Reveal key={pkg.id} delay={i * 0.08}>
              <article
                className={`flex h-full flex-col rounded-2xl border p-6 md:p-7 ${
                  pkg.highlight
                    ? "border-signal bg-signal text-ink"
                    : "border-white/10 bg-line/30"
                }`}
              >
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-display text-2xl font-bold">{pkg.name}</h3>
                  <span
                    className={`text-xs ${pkg.highlight ? "text-ink/70" : "text-mute"}`}
                  >
                    {pkg.duration}
                  </span>
                </div>
                <p className="mt-4 font-display text-4xl font-bold tracking-tight">
                  {pkg.price}
                </p>
                <p
                  className={`mt-1 text-xs ${pkg.highlight ? "text-ink/70" : "text-mute"}`}
                >
                  {pkg.note}
                </p>
                <ul className="mt-6 flex-1 space-y-2.5 text-sm">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span aria-hidden className="mt-0.5">
                        →
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappUrl(
                    `Hallo — Interesse am Paket „${pkg.name}“.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 inline-flex justify-center rounded-full px-5 py-3 text-sm font-bold transition ${
                    pkg.highlight
                      ? "bg-ink text-paper hover:bg-ink/90"
                      : "bg-signal text-ink hover:brightness-110"
                  }`}
                >
                  Anfragen
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
