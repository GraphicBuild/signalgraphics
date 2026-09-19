import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/site.config";

export const metadata: Metadata = {
  title: "Impressum",
};

export default function ImpressumPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 pb-24 pt-28 md:px-8 md:pt-36">
      <Link href="/" className="text-sm text-mute hover:text-signal">
        ← Zurück
      </Link>
      <h1 className="mt-6 font-display text-4xl font-bold tracking-tight">
        Impressum
      </h1>
      <div className="mt-10 space-y-8 text-sm leading-relaxed text-paper/85">
        <section>
          <h2 className="font-display text-lg font-bold text-paper">
            Angaben gemäß § 5 TMG
          </h2>
          <p className="mt-3">
            {site.name}
            <br />
            {site.founders.map((f) => f.name).join(" & ")}
            <br />
            Deutschland · DACH-Region
          </p>
          <p className="mt-3 text-mute">
            Vollständige postalische Anschrift wird vor Livegang ergänzt.
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-bold text-paper">Kontakt</h2>
          <p className="mt-3">
            Telefon:{" "}
            <a
              href={`tel:${site.contact.phoneTel}`}
              className="text-signal hover:underline"
            >
              {site.contact.phoneDisplay}
            </a>
            <br />
            E-Mail:{" "}
            <a
              href={`mailto:${site.contact.email}`}
              className="text-signal hover:underline"
            >
              {site.contact.email}
            </a>
            <br />
            Web: {site.domain}
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-bold text-paper">
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
          </h2>
          <p className="mt-3">
            {site.founders.map((f) => f.name).join(" & ")}
            <br />
            {site.name}
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-bold text-paper">
            Haftung für Inhalte
          </h2>
          <p className="mt-3 text-mute">
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte
            auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
            §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
            überwachen oder nach Umständen zu forschen, die auf eine
            rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung
            oder Sperrung der Nutzung von Informationen nach den allgemeinen
            Gesetzen bleiben hiervon unberührt.
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-bold text-paper">
            Haftung für Links
          </h2>
          <p className="mt-3 text-mute">
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
            fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
            verantwortlich.
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-bold text-paper">
            Urheberrecht
          </h2>
          <p className="mt-3 text-mute">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
            schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </section>
      </div>
    </article>
  );
}
