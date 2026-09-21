import { haarstudio } from "@/content/haarstudio.config";
import { Reveal } from "@/components/Reveal";

export function Gallery() {
  return (
    <section className="border-b border-salonLine py-20 md:py-28">
      <div className="mx-auto max-w-site px-5 md:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-salonClay">
            Einblick
          </p>
          <h2 className="mt-3 font-salonDisplay text-4xl font-semibold tracking-tight text-salonInk md:text-5xl">
            Der Salon in Bildern.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {haarstudio.gallery.map((frame, i) => (
            <Reveal key={frame.id} delay={i * 0.05}>
              <div className="flex aspect-[3/4] items-end rounded-2xl border border-dashed border-salonLine bg-salonCard p-4">
                <span className="text-xs font-medium text-salonMute">
                  {frame.label} · Foto folgt
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
