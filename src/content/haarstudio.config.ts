/**
 * Das Haarstudio — Vorschau-Inhalte.
 * Alle Texte, Kontakte und Leistungen hier pflegen — Seiten lesen nur von hier.
 * Herkunft: öffentliche Angaben (Google-Eintrag, dashaarstudio.net). Unklare
 * Fakten sind unten markiert und stehen in TODO.md.
 */

export const haarstudio = {
  name: "Das Haarstudio",
  category: "Friseursalon",
  tagline: "Ihr Haar in guten Händen.",
  promise:
    "Schnitt, Farbe und Styling in der Schwetzingerstadt — Termin in einer Minute angefragt, keine Google-Umwege.",
  description:
    "Das Haarstudio in Mannheim-Schwetzingerstadt: Damen- und Herrenhaarschnitte, Coloration und Styling. Termin direkt auf der Seite anfragen.",
  url: "https://preview.signalgraphics.de/haarstudio",
  currentUrl: "https://www.dashaarstudio.net/",
  locale: "de-DE",

  rating: {
    value: "5,0",
    count: 85,
    source: "Google-Bewertungen",
  },

  contact: {
    phoneDisplay: "0621 443739",
    phoneTel: "+49621443739",
    // Kein bestätigtes Mobil-/WhatsApp-Business-Konto bekannt (nur Festnetz) —
    // siehe TODO.md. Bis dahin läuft die Anfrage per Anruf oder Formular.
    bookingEmail: "termin@dashaarstudio.net",
    address: {
      street: "Viehhofstraße 3",
      zip: "68165",
      city: "Mannheim-Schwetzingerstadt",
      full: "Viehhofstraße 3, 68165 Mannheim-Schwetzingerstadt",
    },
    mapsHref:
      "https://www.google.com/maps/search/?api=1&query=" +
      encodeURIComponent(
        "Das Haarstudio, Viehhofstraße 3, 68165 Mannheim-Schwetzingerstadt"
      ),
  },

  nap: {
    name: "Das Haarstudio",
    phone: "0621 443739",
    address: "Viehhofstraße 3, 68165 Mannheim-Schwetzingerstadt",
  },

  /** Annahme — Öffnungszeiten vor Livegang mit Kundin bestätigen (TODO.md). */
  hours: [
    { day: "Montag", time: "Ruhetag" },
    { day: "Dienstag", time: "09:00–18:00" },
    { day: "Mittwoch", time: "09:00–18:00" },
    { day: "Donnerstag", time: "09:00–18:00" },
    { day: "Freitag", time: "09:00–18:00" },
    { day: "Samstag", time: "09:00–14:00" },
    { day: "Sonntag", time: "Ruhetag" },
  ],

  services: [
    {
      id: "damen",
      group: "Damen",
      items: ["Waschen, Schneiden, Föhnen", "Ansatz & Longbob", "Glätten & Föhnfrisur"],
    },
    {
      id: "herren",
      group: "Herren",
      items: ["Waschen, Schneiden, Styling", "Konturen & Fade", "Bart in Form"],
    },
    {
      id: "farbe",
      group: "Farbe",
      items: ["Coloration", "Balayage & Strähnen", "Ansatzfarbe"],
    },
    {
      id: "pflege",
      group: "Pflege & Anlass",
      items: ["Kur & Olaplex-Behandlung", "Hochsteckfrisur", "Styling für Events"],
    },
  ],

  aboutLines: [
    "Das Haarstudio liegt mitten in der Schwetzingerstadt — kurze Wege, viele Stammkundinnen und -kunden.",
    "Vom klassischen Schnitt bis zur aufwendigen Coloration: Beratung zuerst, dann die Schere.",
    "Das Ergebnis soll zum Gesicht und zum Alltag passen — nicht nur zum Trend des Monats.",
    "5,0 Sterne aus 85 Google-Bewertungen sprechen für die Sorgfalt im Salon.",
  ],

  gallery: [
    { id: "raum", label: "Salon-Innenraum" },
    { id: "farbe", label: "Farbarbeiten" },
    { id: "styling", label: "Styling & Finish" },
    { id: "vorherNachher", label: "Vorher / Nachher" },
  ],

  bookingServiceOptions: [
    "Damen — Schnitt & Föhnen",
    "Herren — Schnitt & Styling",
    "Coloration / Balayage",
    "Pflege / Olaplex",
    "Hochsteckfrisur / Anlass",
    "Noch unsicher — bitte beraten",
  ],
} as const;

export type HaarstudioConfig = typeof haarstudio;

export function telUrl() {
  return `tel:${haarstudio.contact.phoneTel}`;
}

export function bookingMailtoUrl(fields: {
  name: string;
  phone: string;
  service?: string;
  date?: string;
  time?: string;
  message?: string;
}) {
  const subject = `Terminanfrage — ${fields.name}`;
  const bodyLines = [
    `Name: ${fields.name}`,
    `Rückruf-Nummer: ${fields.phone}`,
    fields.service && `Gewünschte Leistung: ${fields.service}`,
    fields.date && `Wunschtag: ${fields.date}`,
    fields.time && `Wunschzeit: ${fields.time}`,
    fields.message && `Nachricht: ${fields.message}`,
  ].filter(Boolean);
  const body = bodyLines.join("\n");
  return `mailto:${haarstudio.contact.bookingEmail}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
}
