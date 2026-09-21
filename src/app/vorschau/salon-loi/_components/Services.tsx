import { Reveal } from "@/components/Reveal";
import { salonLoi } from "../salon-loi.config";

export function Services() {
  return (
    <section
      id="leistungen"
      className="border-b border-[var(--sl-line)] bg-[var(--sl-ink)] px-5 py-20 text-[var(--sl-paper)] md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--sl-accent)]">
            Leistungen
          </p>
          <h2 className="mt-4 max-w-md font-[family-name:var(--font-salon-display)] text-3xl italic leading-tight md:text-4xl">
            Was hier gemacht wird.
          </h2>
        </Reveal>
        <div className="mt-12 divide-y divide-[var(--sl-line)] border-t border-[var(--sl-line)]">
          {salonLoi.services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="group flex flex-col gap-1 py-6 md:flex-row md:items-baseline md:gap-8">
                <span className="font-[family-name:var(--font-salon-display)] text-sm text-[var(--sl-mute)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-[family-name:var(--font-salon-display)] text-xl font-medium italic transition group-hover:text-[var(--sl-accent)] md:w-72 md:shrink-0">
                  {s.title}
                </h3>
                <p className="text-[rgba(246,239,230,0.75)] md:max-w-sm">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-sm text-[var(--sl-mute)]">
          Preise & Dauer auf Anfrage — wir nennen sie gern am Telefon.
        </p>
      </div>
    </section>
  );
}
