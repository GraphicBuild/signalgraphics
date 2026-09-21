import { Reveal } from "@/components/Reveal";
import { salonLoi, salonTelUrl } from "../salon-loi.config";

export function Visit() {
  return (
    <section
      id="besuch"
      className="border-b border-[var(--sl-line)] bg-[var(--sl-ink)] px-5 py-20 text-[var(--sl-paper)] md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--sl-accent)]">
            Vorbeikommen
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-salon-display)] text-3xl italic leading-tight md:text-4xl">
            Öffnungszeiten & Adresse.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <Reveal>
            <table className="w-full text-sm">
              <tbody>
                {salonLoi.hours.map((h) => (
                  <tr key={h.day} className="border-b border-[var(--sl-line)]">
                    <td className="py-3 text-[rgba(246,239,230,0.7)]">{h.day}</td>
                    <td className="py-3 text-right font-medium">{h.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-4 text-xs text-[var(--sl-mute)]">
              Zeiten laut öffentlichem Eintrag — vor Übernahme mit dem Salon
              bestätigen.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="overflow-hidden rounded-2xl border border-[var(--sl-line)]">
              <iframe
                title={`Karte — ${salonLoi.name}, ${salonLoi.address.full}`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  `${salonLoi.name}, ${salonLoi.address.full}`
                )}&output=embed`}
                loading="lazy"
                className="h-56 w-full grayscale contrast-125 brightness-90"
                style={{ border: 0 }}
              />
            </div>
            <p className="mt-4 text-[rgba(246,239,230,0.85)]">{salonLoi.address.full}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={salonTelUrl()}
                className="inline-flex items-center rounded-full bg-[var(--sl-accent)] px-5 py-2.5 text-sm font-semibold text-[var(--sl-ink)] transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--sl-accent)]"
              >
                {salonLoi.contact.phoneDisplay}
              </a>
              <a
                href={salonLoi.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-[rgba(246,239,230,0.25)] px-5 py-2.5 text-sm font-medium transition hover:border-[rgba(201,113,63,0.6)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--sl-accent)]"
              >
                Route planen
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
