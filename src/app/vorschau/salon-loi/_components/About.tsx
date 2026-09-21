import { Reveal } from "@/components/Reveal";
import { salonLoi } from "../salon-loi.config";

export function About() {
  return (
    <section className="border-b border-[var(--sl-line)] bg-[var(--sl-panel)] px-5 py-20 text-[var(--sl-paper)] md:px-8 md:py-28">
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--sl-accent)]">
            Über den Salon
          </p>
        </Reveal>
        <div className="mt-6 space-y-5">
          {salonLoi.about.map((line, i) => (
            <Reveal key={line} delay={i * 0.05}>
              <p className="font-[family-name:var(--font-salon-display)] text-2xl italic leading-snug text-[rgba(246,239,230,0.9)] md:text-3xl">
                {line}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
