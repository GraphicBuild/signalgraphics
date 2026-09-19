import { site } from "@/site.config";
import { Reveal } from "./Reveal";

export function Process() {
  return (
    <section id="ablauf" className="border-b border-line py-20 md:py-28">
      <div className="mx-auto max-w-site px-5 md:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-signal">
            Ablauf
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
            Vier Schritte. Kein Theater.
          </h2>
        </Reveal>

        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {site.process.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.06}>
              <li className="border-t border-signal/40 pt-5">
                <span className="font-display text-sm font-bold text-signal">
                  {step.step}
                </span>
                <h3 className="mt-3 font-display text-xl font-bold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mute">
                  {step.text}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
