import type { Metadata } from "next";
import Link from "next/link";
import { haarstudio } from "@/content/clients/haarstudio";

export const metadata: Metadata = {
  title: "Datenschutz",
  robots: { index: false, follow: false },
};

export default function HaarstudioDatenschutzPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 pb-24 pt-16 md:px-8">
      <Link href="/vorschau/haarstudio/" className="text-sm text-[var(--mute)] hover:text-[var(--accent)]">
        ← Zurück
      </Link>
      <h1 className="mt-6 font-client-display text-4xl font-semibold tracking-tight">
        Datenschutzerklärung
      </h1>
      <div className="mt-10 space-y-8 text-sm leading-relaxed text-[var(--ink)]/85">
        <section>
          <h2 className="font-client-display text-lg font-semibold">
            1. Verantwortlicher
          </h2>
          <p className="mt-3">
            {haarstudio.nap.name}
            <br />
            {haarstudio.nap.street}, {haarstudio.nap.zipCity}
            <br />
            Telefon: {haarstudio.nap.phoneDisplay}
          </p>
        </section>
        <section>
          <h2 className="font-client-display text-lg font-semibold">2. Hosting</h2>
          <p className="mt-3 text-[var(--mute)]">
            Diese Website kann über GitHub Pages, Vercel oder einen anderen
            Hosting-Anbieter ausgeliefert werden. Dabei können technisch
            notwendige Server-Logfiles (z. B. IP-Adresse, Zeitpunkt,
            User-Agent) verarbeitet werden. Rechtsgrundlage: Art. 6 Abs. 1
            lit. f DSGVO (berechtigtes Interesse an sicherem Betrieb).
          </p>
        </section>
        <section>
          <h2 className="font-client-display text-lg font-semibold">
            3. Terminanfrage
          </h2>
          <p className="mt-3 text-[var(--mute)]">
            Das Anfrageformular öffnet Ihr E-Mail-Programm mit einem
            vorausgefüllten Entwurf an den Salon. Es werden dabei keine Daten
            an uns oder Dritte übertragen — der Versand erfolgt erst, wenn Sie
            die E-Mail selbst absenden. Rechtsgrundlage: Art. 6 Abs. 1 lit. b
            DSGVO (vorvertraglich).
          </p>
        </section>
        <section>
          <h2 className="font-client-display text-lg font-semibold">
            4. Cookies &amp; Tracking
          </h2>
          <p className="mt-3 text-[var(--mute)]">
            Diese Website setzt keine Tracking-Cookies und kein
            Marketing-Pixel ein.
          </p>
        </section>
        <section>
          <h2 className="font-client-display text-lg font-semibold">
            5. Ihre Rechte
          </h2>
          <p className="mt-3 text-[var(--mute)]">
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
