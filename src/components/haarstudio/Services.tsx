import { haarstudio } from "@/content/haarstudio.config";
import { Reveal } from "@/components/Reveal";

export function Services() {
  return (
    <section id="leistungen" className="py-20 md:py-28">
      <div className="mx-auto max-w-site px-5 md:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-salonClay">
            Leistungen
          </p>
          <h2 className="mt-3 max-w-xl font-salonDisplay text-4xl font-semibold tracking-tight text-salonInk md:text-5xl">
            Schnitt, Farbe, Styling.
          </h2>
          <p className="mt-4 max-w-md text-salonMute">
            Preise auf Anfrage — abhängig von Haarlänge und Wunsch.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {haarstudio.services.map((group, i) => (
            <Reveal key={group.id} delay={i * 0.06}>
              <article className="h-full rounded-2xl border border-salonLine bg-salonCard p-6 md:p-7">
                <h3 className="font-salonDisplay text-xl font-semibold text-salonInk">
                  {group.group}
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-salonInk/75">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span aria-hidden className="mt-0.5 text-salonClay">
                        —
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
