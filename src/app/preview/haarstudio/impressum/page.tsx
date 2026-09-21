import type { Metadata } from "next";
import Link from "next/link";
import { haarstudio } from "@/content/haarstudio.config";

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: false, follow: false },
};

export default function HaarstudioImpressumPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 pb-24 pt-16 md:px-8">
      <Link href="/preview/haarstudio/" className="text-sm text-salonMute hover:text-salonClay">
        ← Zurück
      </Link>
      <h1 className="mt-6 font-salonDisplay text-4xl font-semibold tracking-tight text-salonInk">
        Impressum
      </h1>
      <div className="mt-10 space-y-8 text-sm leading-relaxed text-salonInk/85">
        <section>
          <h2 className="font-salonDisplay text-lg font-semibold text-salonInk">
            Angaben gemäß § 5 TMG
          </h2>
          <p className="mt-3">
            {haarstudio.name}
            <br />
            {haarstudio.contact.address.full}
          </p>
          <p className="mt-3 text-salonMute">
            Inhaber:in wird vor Livegang ergänzt.
          </p>
        </section>
        <section>
          <h2 className="font-salonDisplay text-lg font-semibold text-salonInk">
            Kontakt
          </h2>
          <p className="mt-3">
            Telefon:{" "}
            <a
              href={`tel:${haarstudio.contact.phoneTel}`}
              className="text-salonClay hover:underline"
            >
              {haarstudio.contact.phoneDisplay}
            </a>
            <br />
            Web: {haarstudio.currentUrl}
          </p>
        </section>
        <section>
          <h2 className="font-salonDisplay text-lg font-semibold text-salonInk">
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
          </h2>
          <p className="mt-3 text-salonMute">
            Wird vor Livegang mit der Inhaberin/dem Inhaber ergänzt.
          </p>
        </section>
        <section>
          <h2 className="font-salonDisplay text-lg font-semibold text-salonInk">
            Haftung für Inhalte
          </h2>
          <p className="mt-3 text-salonMute">
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene
            Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
            verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter
            jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
            Informationen zu überwachen oder nach Umständen zu forschen, die
            auf eine rechtswidrige Tätigkeit hinweisen.
          </p>
        </section>
        <section>
          <h2 className="font-salonDisplay text-lg font-semibold text-salonInk">
            Urheberrecht
          </h2>
          <p className="mt-3 text-salonMute">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht.
          </p>
        </section>
      </div>
    </article>
  );
}
