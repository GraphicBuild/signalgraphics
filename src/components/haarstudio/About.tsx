import { haarstudio } from "@/content/haarstudio.config";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-site px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-salonClay">
              Über uns
            </p>
            <h2 className="mt-3 font-salonDisplay text-4xl font-semibold tracking-tight text-salonInk md:text-5xl">
              {haarstudio.name}
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <ul className="space-y-4 text-lg leading-relaxed text-salonInk/80">
              {haarstudio.aboutLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
