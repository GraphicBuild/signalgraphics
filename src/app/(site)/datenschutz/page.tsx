import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/site.config";

export const metadata: Metadata = {
  title: "Datenschutz",
};

export default function DatenschutzPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 pb-24 pt-28 md:px-8 md:pt-36">
      <Link href="/" className="text-sm text-mute hover:text-signal">
        ← Zurück
      </Link>
      <h1 className="mt-6 font-display text-4xl font-bold tracking-tight">
        Datenschutzerklärung
      </h1>
      <div className="mt-10 space-y-8 text-sm leading-relaxed text-paper/85">
        <section>
          <h2 className="font-display text-lg font-bold text-paper">
            1. Verantwortlicher
          </h2>
          <p className="mt-3">
            {site.name}
            <br />
            {site.founders.map((f) => f.name).join(" & ")}
            <br />
            E-Mail:{" "}
            <a
              href={`mailto:${site.contact.email}`}
              className="text-signal hover:underline"
            >
              {site.contact.email}
            </a>
            <br />
            Telefon: {site.contact.phoneDisplay}
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-bold text-paper">
            2. Hosting
          </h2>
          <p className="mt-3 text-mute">
            Diese Website kann über GitHub Pages, Vercel oder einen anderen
            Hosting-Anbieter ausgeliefert werden. Dabei können technisch
            notwendige Server-Logfiles (z. B. IP-Adresse, Zeitpunkt, User-Agent)
            verarbeitet werden. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO
            (berechtigtes Interesse an sicherem Betrieb).
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-bold text-paper">
            3. Kontaktaufnahme
          </h2>
          <p className="mt-3 text-mute">
            Wenn Sie uns per E-Mail, Telefon oder WhatsApp kontaktieren,
            verarbeiten wir die von Ihnen mitgeteilten Daten zur Bearbeitung
            Ihrer Anfrage. WhatsApp ist ein Dienst der Meta Platforms Ireland
            Limited; bei Nutzung gelten die Datenschutzhinweise von WhatsApp /
            Meta. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vorvertraglich)
            bzw. lit. f DSGVO.
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-bold text-paper">
            4. Cookies & Tracking
          </h2>
          <p className="mt-3 text-mute">
            Diese Website setzt keine Tracking-Cookies und kein Marketing-Pixel
            ein. Es werden keine Analyse-Tools von Drittanbietern geladen, soweit
            nicht später ausdrücklich ergänzt und informiert.
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-bold text-paper">
            5. Schriftarten
          </h2>
          <p className="mt-3 text-mute">
            Für die Darstellung können Webfonts (über next/font) lokal
            ausgeliefert werden. Soweit Fonts lokal gebündelt werden, findet
            kein Abruf beim Font-Anbieter im Browser statt.
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-bold text-paper">
            6. Ihre Rechte
          </h2>
          <p className="mt-3 text-mute">
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung,
            Einschränkung der Verarbeitung, Datenübertragbarkeit sowie
            Widerspruch gegen die Verarbeitung. Außerdem besteht ein
            Beschwerderecht bei einer Datenschutzaufsichtsbehörde.
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-bold text-paper">
            7. Speicherdauer
          </h2>
          <p className="mt-3 text-mute">
            Kontaktdaten aus Anfragen speichern wir nur so lange, wie es zur
            Bearbeitung erforderlich ist bzw. gesetzliche Aufbewahrungsfristen
            bestehen.
          </p>
        </section>
      </div>
    </article>
  );
}
