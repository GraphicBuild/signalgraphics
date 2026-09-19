/**
 * Signal Graphics — zentrale Agenturdaten
 * Alle Texte, Kontakte und Preise hier pflegen.
 */

export const site = {
  name: "Signal Graphics",
  domain: "signalgraphics.de",
  tagline: "Websites, die lokal wirken.",
  offer:
    "In 7–10 Tagen online — für Betriebe, die vor Ort Kunden gewinnen.",
  description:
    "Signal Graphics baut schnelle, klare Websites für lokale Betriebe in DACH. Tür-zu-Tür-Vorschau, Launch in 7–10 Tagen, monatliche Betreuung.",
  url: "https://signalgraphics.de",
  locale: "de-DE",

  founders: [
    { name: "Raad Abdallah", role: "Gründer" },
    { name: "Aisa Gandour", role: "Gründer" },
  ],

  contact: {
    phoneDisplay: "0151 70517083",
    phoneTel: "+4915170517083",
    whatsapp: "4915170517083",
    email: "hallo@signalgraphics.de",
    city: "Deutschland · DACH",
  },

  nap: {
    name: "Signal Graphics",
    phone: "0151 70517083",
    email: "hallo@signalgraphics.de",
    region: "DACH",
  },

  /** Annahmen — siehe README. Keine verbindlichen Angebote. */
  pricing: {
    disclaimer:
      "Richtwerte zur Orientierung — kein verbindliches Angebot. Finales Angebot nach kurzem Gespräch.",
    packages: [
      {
        id: "launch",
        name: "Launch",
        price: "1.490 €",
        note: "einmalig · Annahme",
        duration: "7–10 Tage",
        highlight: false,
        features: [
          "Eine starke Seite mit klarem Angebot",
          "Handy-first, schnell, suchfreundlich",
          "WhatsApp- & Anruf-Buttons",
          "Impressum & Datenschutz",
          "Übergabe inkl. kurze Einweisung",
        ],
      },
      {
        id: "care",
        name: "Betreuung",
        price: "149 €",
        note: "pro Monat · Annahme",
        duration: "laufend",
        features: [
          "Kleine Text- & Bild-Updates",
          "Technische Pflege & Backup",
          "Performance im Blick",
          "Priorisierte Rückmeldung",
          "Monatlicher Kurz-Check",
        ],
        highlight: true,
      },
      {
        id: "plus",
        name: "Plus",
        price: "2.490 €",
        note: "einmalig · Annahme",
        duration: "10–14 Tage",
        highlight: false,
        features: [
          "Alles aus Launch",
          "Mehr Unterseiten / Leistungen",
          "Leichte Motion & stärkere Typo",
          "Erweiterte Kontaktstrecken",
          "Startpaket Betreuung (1 Monat)",
        ],
      },
    ],
  },

  process: [
    {
      step: "01",
      title: "Vorschau vor Ort",
      text: "Wir zeigen auf dem Handy, wie Ihre Seite wirken kann — klar, ohne Technik-Gerede.",
    },
    {
      step: "02",
      title: "Richtung festlegen",
      text: "Ein Angebotssatz, Farben, Typo. Eine Linie — keine endlosen Moodboards.",
    },
    {
      step: "03",
      title: "Bauen & schärfen",
      text: "Design und Umsetzung parallel. Nach 7–10 Tagen steht eine echte Seite.",
    },
    {
      step: "04",
      title: "Live & betreut",
      text: "Launch, kurze Einweisung, optional monatliche Pflege — damit es bleibt.",
    },
  ],

  work: [
    {
      id: "baeckerei",
      label: "Entwurf / Showcase",
      type: "Bäckerei",
      title: "Ofenruhe",
      line: "Frische, Öffnungszeiten, Bestellung — auf einen Blick.",
      accent: "#E8A87C",
    },
    {
      id: "physio",
      label: "Entwurf / Showcase",
      type: "Physiotherapie",
      title: "Praxis Nordlicht",
      line: "Termine, Vertrauen, ruhige Typografie.",
      accent: "#7CB8E8",
    },
    {
      id: "handwerk",
      label: "Entwurf / Showcase",
      type: "Handwerk",
      title: "Werkstatt Stahl & Holz",
      line: "Leistungen, Referenzen, direkter Anruf.",
      accent: "#C8F542",
    },
    {
      id: "gastro",
      label: "Entwurf / Showcase",
      type: "Gastronomie",
      title: "Tisch & Teller",
      line: "Menü, Reservierung, Atmosphäre ohne Overload.",
      accent: "#F5C542",
    },
  ],

  closerLines: [
    "Wir bauen Websites für Betriebe hier vor Ort — in einer Woche live.",
    "Kein Agentur-Theater: Sie sehen die Vorschau auf dem Handy, entscheiden vor Ort.",
    "Launch in 7 bis 10 Tagen, danach optional monatliche Betreuung.",
    "Kurz: klarer Auftritt, WhatsApp und Anruf — damit Anfragen ankommen.",
  ],
} as const;

export type SiteConfig = typeof site;

export function whatsappUrl(text?: string) {
  const base = `https://wa.me/${site.contact.whatsapp}`;
  if (!text) return base;
  return `${base}?text=${encodeURIComponent(text)}`;
}

export function telUrl() {
  return `tel:${site.contact.phoneTel}`;
}
