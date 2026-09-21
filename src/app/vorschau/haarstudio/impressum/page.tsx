import type { Metadata } from "next";
import Link from "next/link";
import { haarstudio } from "@/content/clients/haarstudio";
import { clientTelUrl } from "@/lib/clientLinks";

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: false, follow: false },
};

export default function HaarstudioImpressumPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 pb-24 pt-16 md:px-8">
      <Link href="/vorschau/haarstudio/" className="text-sm text-[var(--mute)] hover:text-[var(--accent)]">
        ← Zurück
      </Link>
      <h1 className="mt-6 font-client-display text-4xl font-semibold tracking-tight">
        Impressum
      </h1>
      <div className="mt-10 space-y-8 text-sm leading-relaxed text-[var(--ink)]/85">
        <section>
          <h2 className="font-client-display text-lg font-semibold">
            Angaben gemäß § 5 TMG
          </h2>
          <p className="mt-3">
            {haarstudio.nap.name}
            <br />
            {haarstudio.nap.street}, {haarstudio.nap.zipCity}
          </p>
          <p className="mt-3 text-[var(--mute)]">
            Inhaber:in wird vor Livegang ergänzt.
          </p>
        </section>
        <section>
          <h2 className="font-client-display text-lg font-semibold">Kontakt</h2>
          <p className="mt-3">
            Telefon:{" "}
            <a href={clientTelUrl(haarstudio)} className="text-[var(--accent)] hover:underline">
              {haarstudio.nap.phoneDisplay}
            </a>
          </p>
        </section>
        <section>
          <h2 className="font-client-display text-lg font-semibold">
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
          </h2>
          <p className="mt-3 text-[var(--mute)]">
            Wird vor Livegang mit der Inhaberin/dem Inhaber ergänzt.
          </p>
        </section>
        <section>
          <h2 className="font-client-display text-lg font-semibold">
            Haftung für Inhalte
          </h2>
          <p className="mt-3 text-[var(--mute)]">
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene
            Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
            verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter
            jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
            Informationen zu überwachen oder nach Umständen zu forschen, die
            auf eine rechtswidrige Tätigkeit hinweisen.
          </p>
        </section>
        <section>
          <h2 className="font-client-display text-lg font-semibold">Urheberrecht</h2>
          <p className="mt-3 text-[var(--mute)]">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht.
          </p>
        </section>
      </div>
    </article>
  );
}
