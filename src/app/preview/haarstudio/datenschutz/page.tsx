import type { Metadata } from "next";
import Link from "next/link";
import { haarstudio } from "@/content/haarstudio.config";

export const metadata: Metadata = {
  title: "Datenschutz",
  robots: { index: false, follow: false },
};

export default function HaarstudioDatenschutzPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 pb-24 pt-16 md:px-8">
      <Link href="/preview/haarstudio/" className="text-sm text-salonMute hover:text-salonClay">
        ← Zurück
      </Link>
      <h1 className="mt-6 font-salonDisplay text-4xl font-semibold tracking-tight text-salonInk">
        Datenschutzerklärung
      </h1>
      <div className="mt-10 space-y-8 text-sm leading-relaxed text-salonInk/85">
        <section>
          <h2 className="font-salonDisplay text-lg font-semibold text-salonInk">
            1. Verantwortlicher
          </h2>
          <p className="mt-3">
            {haarstudio.name}
            <br />
            {haarstudio.contact.address.full}
            <br />
            Telefon: {haarstudio.contact.phoneDisplay}
          </p>
        </section>
        <section>
          <h2 className="font-salonDisplay text-lg font-semibold text-salonInk">
            2. Hosting
          </h2>
          <p className="mt-3 text-salonMute">
            Diese Website kann über GitHub Pages, Vercel oder einen anderen
            Hosting-Anbieter ausgeliefert werden. Dabei können technisch
            notwendige Server-Logfiles (z. B. IP-Adresse, Zeitpunkt,
            User-Agent) verarbeitet werden. Rechtsgrundlage: Art. 6 Abs. 1
            lit. f DSGVO (berechtigtes Interesse an sicherem Betrieb).
          </p>
        </section>
        <section>
          <h2 className="font-salonDisplay text-lg font-semibold text-salonInk">
            3. Terminanfrage
          </h2>
          <p className="mt-3 text-salonMute">
            Das Anfrageformular öffnet Ihr E-Mail-Programm mit einem
            vorausgefüllten Entwurf an den Salon. Es werden dabei keine Daten
            an uns oder Dritte übertragen — der Versand erfolgt erst, wenn Sie
            die E-Mail selbst absenden. Rechtsgrundlage: Art. 6 Abs. 1 lit. b
            DSGVO (vorvertraglich).
          </p>
        </section>
        <section>
          <h2 className="font-salonDisplay text-lg font-semibold text-salonInk">
            4. Cookies & Tracking
          </h2>
          <p className="mt-3 text-salonMute">
            Diese Website setzt keine Tracking-Cookies und kein
            Marketing-Pixel ein.
          </p>
        </section>
        <section>
          <h2 className="font-salonDisplay text-lg font-semibold text-salonInk">
            5. Ihre Rechte
          </h2>
          <p className="mt-3 text-salonMute">
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung,
            Einschränkung der Verarbeitung, Datenübertragbarkeit sowie
            Widerspruch gegen die Verarbeitung. Außerdem besteht ein
            Beschwerderecht bei einer Datenschutzaufsichtsbehörde.
          </p>
        </section>
      </div>
    </article>
  );
}
