import type { ClientSite } from "./types";

/**
 * Haarmonie 11 — Friseursalon, Mannheim Jungbusch.
 * Quelle: vom Nutzer übermittelte Google-Profil-Daten (Name, Adresse, Telefon,
 * Bewertungsanzahl, teilweise Öffnungszeiten). Die bestehende Website des
 * Salons war in dieser Umgebung nicht erreichbar (Domain blockiert) — Leistungen,
 * Über-uns-Text und Galerie sind Entwurfs-Annahmen. Details siehe TODO-haarmonie-11.md.
 */
export const haarmonie11: ClientSite = {
  slug: "haarmonie-11",
  name: "Haarmonie 11",
  category: "Friseursalon",
  neighborhood: "Jungbusch, Mannheim",
  tagline: "Schnitt, Farbe, Pflege — mitten im Jungbusch.",
  promise:
    "Damen, Herren und Kids: ein eingespieltes Team, ehrliche Beratung, Termine ohne langes Warten.",

  theme: {
    bg: "#F6EFE4",
    ink: "#1B1712",
    mute: "#6B6255",
    accent: "#B5622E",
    accentSoft: "#E7C7A8",
    line: "#E3D8C5",
  },

  nap: {
    name: "Haarmonie 11",
    street: "Schanzenstraße 11",
    zipCity: "68159 Mannheim-Innenstadt/Jungbusch",
    phoneDisplay: "0621 56091932",
    phoneTel: "+4962156091932",
    whatsapp: "4962156091932",
  },
  mapsQuery: "Haarmonie 11, Schanzenstraße 11, 68159 Mannheim",

  // Nur Dienstag/10 Uhr ist bestätigt. Rest bewusst nicht erfunden.
  hours: [{ day: "Dienstag", hours: "ab 10:00 Uhr" }],
  hoursConfirmed: false,

  reviews: { count: 54, rating: 4.9, source: "Google" },
  // Echte Zitate folgen, sobald der Kunde sie schickt — siehe TODO-haarmonie-11.md.
  reviewHighlights: [],

  services: [
    {
      category: "Damen",
      items: ["Schnitt & Styling", "Föhnfrisur", "Hochsteckfrisur"],
    },
    {
      category: "Herren",
      items: ["Herrenschnitt", "Bartpflege", "Fade & Konturen"],
    },
    {
      category: "Farbe & Textur",
      items: ["Coloration", "Strähnen & Balayage", "Tönung"],
    },
    {
      category: "Pflege & Anlässe",
      items: ["Kur & Aufbaupflege", "Braut- & Event-Styling"],
    },
  ],
  servicesConfirmed: false,

  about: [
    "Haarmonie 11 sitzt mitten im Jungbusch — dort, wo Mannheim gerade am meisten in Bewegung ist.",
    "Schnitt, Farbe und Pflege aus einer Hand, mit einem Team, das genau hinschaut, bevor es schneidet.",
    "Beratung zuerst, dann der Schnitt, der zum Kopf und zum Alltag passt — kein Fließband-Termin.",
    "Vom klassischen Herrenschnitt bis zur aufwendigen Coloration: ein Salon für den ganzen Kiez.",
  ],

  gallery: [
    { label: "Salon-Eingang" },
    { label: "Arbeitsplätze" },
    { label: "Farbe & Balayage" },
    { label: "Team bei der Arbeit" },
  ],

  whatsappDefaultText:
    "Hallo Haarmonie 11, ich möchte gerne einen Termin anfragen.",
};
