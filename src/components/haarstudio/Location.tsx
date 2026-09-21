import { haarstudio, telUrl } from "@/content/haarstudio.config";
import { Reveal } from "@/components/Reveal";

export function Location() {
  return (
    <section
      id="kontakt"
      className="border-y border-salonLine bg-salonCard py-20 md:py-28"
    >
      <div className="mx-auto max-w-site px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-salonClay">
              So finden Sie uns
            </p>
            <h2 className="mt-3 font-salonDisplay text-4xl font-semibold tracking-tight text-salonInk md:text-5xl">
              {haarstudio.contact.address.city}
            </h2>
            <p className="mt-5 text-salonInk/80">
              {haarstudio.contact.address.street}
              <br />
              {haarstudio.contact.address.zip}{" "}
              {haarstudio.contact.address.city}
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <a
                href={telUrl()}
                className="block font-semibold text-salonInk hover:text-salonClay"
              >
                {haarstudio.contact.phoneDisplay}
              </a>
              <a
                href={haarstudio.contact.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-salonMute hover:text-salonClay"
              >
                Route in Google Maps öffnen →
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-salonLine bg-salonCream p-6 md:p-8">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-salonClay">
                Öffnungszeiten
              </p>
              <ul className="divide-y divide-salonLine text-sm">
                {haarstudio.hours.map((row) => (
                  <li
                    key={row.day}
                    className="flex items-center justify-between py-2.5 text-salonInk/85"
                  >
                    <span>{row.day}</span>
                    <span
                      className={
                        row.time === "Ruhetag" ? "text-salonMute" : "font-medium"
                      }
                    >
                      {row.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
