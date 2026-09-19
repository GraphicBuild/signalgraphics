import { site } from "@/site.config";
import { Reveal } from "./Reveal";

export function Work() {
  return (
    <section id="arbeit" className="border-b border-line py-20 md:py-28">
      <div className="mx-auto max-w-site px-5 md:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-signal">
            Arbeit
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl font-bold tracking-tight md:text-5xl">
            Die Website ist das Portfolio.
          </h2>
          <p className="mt-4 max-w-lg text-mute">
            Showcase-Entwürfe — Fähigkeit, kein Kundenclaim. Typische lokale
            Betriebe, wie wir sie bauen würden.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {site.work.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.08}>
              <article className="group relative flex min-h-[280px] flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-line/40 p-6 transition hover:border-signal/40 md:min-h-[320px] md:p-8">
                <div
                  className="card-mesh absolute inset-0 opacity-60"
                  aria-hidden
                />
                <div
                  className="absolute -right-8 -top-8 h-40 w-40 rounded-full opacity-30 blur-2xl transition group-hover:opacity-50"
                  style={{ background: item.accent }}
                  aria-hidden
                />
                <div className="relative">
                  <span className="inline-block rounded-full border border-white/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-mute">
                    {item.label}
                  </span>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-signal">
                    {item.type}
                  </p>
                  <h3 className="mt-2 font-display text-3xl font-bold tracking-tight md:text-4xl">
                    {item.title}
                  </h3>
                </div>
                <p className="relative mt-8 max-w-sm text-sm leading-relaxed text-paper/80">
                  {item.line}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
