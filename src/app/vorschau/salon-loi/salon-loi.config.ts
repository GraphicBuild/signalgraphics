/**
 * Salon Loi — Inhalts-Quelle für die Vorschau.
 * Fakten aus öffentlichem Google-Eintrag + Branchenverzeichnissen, Stand der Recherche.
 * Vor Übergabe mit dem Salon abgleichen (siehe TODO.md).
 */

export const salonLoi = {
  name: "Salon Loi",
  city: "Mannheim",
  district: "Neckarstadt",
  tagline: "Friseursalon in der Neckarstadt",

  address: {
    street: "Max-Joseph-Straße 3",
    zip: "68167",
    city: "Mannheim",
    full: "Max-Joseph-Straße 3, 68167 Mannheim",
  },

  contact: {
    phoneDisplay: "0621 331273",
    phoneTel: "+49621331273",
  },

  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Salon+Loi+Max-Joseph-Stra%C3%9Fe+3+68167+Mannheim",

  reviews: {
    count: "4.882",
    label: "Bewertungen bei Google",
  },

  hours: [
    { day: "Montag", time: "Geschlossen" },
    { day: "Dienstag", time: "09:00–18:00" },
    { day: "Mittwoch", time: "09:00–18:00" },
    { day: "Donnerstag", time: "09:00–18:00" },
    { day: "Freitag", time: "09:00–18:00" },
    { day: "Samstag", time: "09:00–14:00" },
    { day: "Sonntag", time: "Geschlossen" },
  ],

  services: [
    {
      title: "Damenhaarschnitt & Styling",
      text: "Schnitt auf Kopf- und Haarform abgestimmt, fönfertig gestylt.",
    },
    {
      title: "Herrenhaarschnitt",
      text: "Klassisch bis Fade — präzise Konturen, kurze Wartezeit.",
    },
    {
      title: "Coloration & Balayage",
      text: "Von dezenter Auffrischung bis zum sanften Übergang.",
    },
    {
      title: "Pflege & Ansatzbehandlung",
      text: "Struktur und Glanz zurück ins Haar, auf Wunsch mit Beratung.",
    },
    {
      title: "Hochsteckfrisuren & Anlässe",
      text: "Für Hochzeit, Abschlussball oder den besonderen Abend.",
    },
  ],

  about: [
    "Salon Loi steht seit Jahren an der Max-Joseph-Straße in der Neckarstadt — kein Konzept von außen, sondern ein Salon, der zum Kiez gehört.",
    "Fast 5.000 Bewertungen bei Google sind kein Zufall: Wer einmal kommt, kommt wieder.",
    "Hier wird nicht verkauft, sondern zugehört — und danach geschnitten, gefärbt oder gestylt.",
    "Ohne Umwege erreichbar: anrufen, Termin ausmachen, vorbeikommen.",
  ],

  seo: {
    title: "Salon Loi — Friseur in Mannheim-Neckarstadt",
    description:
      "Salon Loi in der Max-Joseph-Straße 3, Mannheim-Neckarstadt: Schnitt, Farbe, Styling. Fast 5.000 Bewertungen bei Google. Termin unter 0621 331273.",
  },
} as const;

export function salonTelUrl() {
  return `tel:${salonLoi.contact.phoneTel}`;
}
