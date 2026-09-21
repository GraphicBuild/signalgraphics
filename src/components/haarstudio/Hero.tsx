import { haarstudio, telUrl } from "@/content/haarstudio.config";

export function Hero() {
  return (
    <section id="top" className="border-b border-salonLine pt-10 md:pt-16">
      <div className="mx-auto max-w-site px-5 pb-16 md:px-8 md:pb-24">
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-salonLine bg-salonCard px-3.5 py-1.5 text-xs font-semibold text-salonInk">
          <span aria-hidden className="text-salonClay">
            ★
          </span>
          {haarstudio.rating.value} · {haarstudio.rating.count}{" "}
          {haarstudio.rating.source}
        </p>
        <h1 className="max-w-3xl font-salonDisplay text-[clamp(2.4rem,8vw,4.75rem)] font-semibold leading-[1.02] tracking-tight text-salonInk">
          {haarstudio.tagline}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-snug text-salonInk/80 md:text-xl">
          {haarstudio.promise}
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href="#termin"
            className="inline-flex items-center rounded-full bg-salonClay px-6 py-3.5 text-sm font-bold text-salonCream transition hover:brightness-110"
          >
            Termin anfragen
          </a>
          <a
            href={telUrl()}
            className="inline-flex items-center rounded-full border border-salonInk/20 px-6 py-3.5 text-sm font-semibold text-salonInk transition hover:border-salonClay/60"
          >
            {haarstudio.contact.phoneDisplay}
          </a>
        </div>
        <p className="mt-10 text-sm text-salonMute">
          {haarstudio.category} · {haarstudio.contact.address.city}
        </p>
      </div>
    </section>
  );
}
