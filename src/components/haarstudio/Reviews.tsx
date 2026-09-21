import { haarstudio } from "@/content/haarstudio.config";
import { Reveal } from "@/components/Reveal";

export function Reviews() {
  return (
    <section
      id="bewertungen"
      className="border-y border-salonLine bg-salonInk py-16 md:py-20"
    >
      <div className="mx-auto max-w-site px-5 md:px-8">
        <Reveal>
          <div className="flex flex-wrap items-center gap-6">
            <p className="font-salonDisplay text-6xl font-semibold text-salonCream md:text-7xl">
              {haarstudio.rating.value}
            </p>
            <div>
              <p aria-hidden className="text-salonClay">
                ★★★★★
              </p>
              <p className="mt-1 text-sm text-salonCream/70">
                {haarstudio.rating.count} {haarstudio.rating.source}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
