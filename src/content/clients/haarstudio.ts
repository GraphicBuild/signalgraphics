import type { ClientSite } from "./types";

/**
 * Das Haarstudio — Friseursalon, Mannheim-Schwetzingerstadt.
 * Quelle: Google-Profil (Name, Kategorie, 5,0 · 85 Bewertungen, Adresse,
 * Telefon). Die bestehende Website (dashaarstudio.net) war in dieser
 * Umgebung nicht erreichbar (Domain blockiert) — Leistungen, Über-uns-Text
 * und Öffnungszeiten sind Entwurfs-Annahmen. Details siehe TODO-haarstudio.md.
 */
export const haarstudio: ClientSite = {
  slug: "haarstudio",
  name: "Das Haarstudio",
  category: "Friseursalon",
  neighborhood: "Schwetzingerstadt, Mannheim",
  tagline: "Ihr Haar in guten Händen.",
  promise:
    "Schnitt, Farbe und Styling in der Schwetzingerstadt — Termin direkt hier anfragen, ohne Umweg über Google und Treatwell.",

  theme: {
    bg: "#FBF6EF",
    ink: "#211B17",
    mute: "#8A7C6E",
    accent: "#A34B2A",
    accentSoft: "#F0DEC9",
    line: "#E7DCC9",
  },

  nap: {
    name: "Das Haarstudio",
    street: "Viehhofstraße 3",
    zipCity: "68165 Mannheim-Schwetzingerstadt",
    phoneDisplay: "0621 443739",
    phoneTel: "+49621443739",
    // Nur Festnetznummer aus dem Google-Profil bekannt — siehe TODO-haarstudio.md.
    whatsapp: "49621443739",
  },
  mapsQuery: "Das Haarstudio, Viehhofstraße 3, 68165 Mannheim-Schwetzingerstadt",

  // Nur die Struktur (Ruhetage) ist branchentypisch angenommen, keine Zeit ist bestätigt.
  hours: [
    { day: "Montag", hours: "Ruhetag" },
    { day: "Dienstag", hours: "09:00–18:00" },
    { day: "Mittwoch", hours: "09:00–18:00" },
    { day: "Donnerstag", hours: "09:00–18:00" },
    { day: "Freitag", hours: "09:00–18:00" },
    { day: "Samstag", hours: "09:00–14:00" },
    { day: "Sonntag", hours: "Ruhetag" },
  ],
  hoursConfirmed: false,

  reviews: { count: 85, source: "Google", value: "5,0" },

  services: [
    {
      category: "Damen",
      items: ["Waschen, Schneiden, Föhnen", "Ansatz & Longbob", "Glätten & Föhnfrisur"],
    },
    {
      category: "Herren",
      items: ["Waschen, Schneiden, Styling", "Konturen & Fade", "Bart in Form"],
    },
    {
      category: "Farbe",
      items: ["Coloration", "Balayage & Strähnen", "Ansatzfarbe"],
    },
    {
      category: "Pflege & Anlass",
      items: ["Kur & Olaplex-Behandlung", "Hochsteckfrisur", "Styling für Events"],
    },
  ],
  servicesConfirmed: false,

  about: [
    "Das Haarstudio liegt mitten in der Schwetzingerstadt — kurze Wege, viele Stammkundinnen und -kunden.",
    "Vom klassischen Schnitt bis zur aufwendigen Coloration: Beratung zuerst, dann die Schere.",
    "Das Ergebnis soll zum Gesicht und zum Alltag passen — nicht nur zum Trend des Monats.",
    "5,0 Sterne aus 85 Google-Bewertungen sprechen für die Sorgfalt im Salon.",
  ],

  gallery: [
    { label: "Salon-Innenraum" },
    { label: "Farbarbeiten" },
    { label: "Styling & Finish" },
    { label: "Vorher / Nachher" },
  ],

  whatsappDefaultText: "Hallo Das Haarstudio, ich möchte gerne einen Termin anfragen.",

  // Annahme-Adresse für das Anfrageformular (ClientBooking) — vor Livegang
  // durch echte Adresse oder Formular-Endpoint ersetzen, siehe TODO-haarstudio.md.
  bookingEmail: "termin@dashaarstudio.net",

  legal: {
    impressumHref: "/vorschau/haarstudio/impressum/",
    datenschutzHref: "/vorschau/haarstudio/datenschutz/",
  },
};
