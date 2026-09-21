import type { ClientSite } from "./types";

/**
 * Salon Loi — Friseursalon, Mannheim Neckarstadt.
 * Quelle: öffentlicher Google-Maps-Eintrag (Name, Adresse, Telefon,
 * Bewertungsanzahl, Status "Opens 9 am Tue") sowie Branchenverzeichnisse
 * (Öffnungszeiten). Die bestehende Website des Salons war in dieser
 * Umgebung nicht erreichbar (Domain blockiert) — Leistungen, Über-uns-Text
 * und Galerie sind Entwurfs-Annahmen. Details siehe TODO-salon-loi.md.
 */
export const salonLoi: ClientSite = {
  slug: "salon-loi",
  name: "Salon Loi",
  category: "Friseursalon",
  neighborhood: "Neckarstadt, Mannheim",
  tagline: "Schnitt, Farbe, Styling — seit Jahren in der Neckarstadt.",
  promise:
    "Kein Konzept von außen, sondern ein Salon, der zum Kiez gehört — ehrliche Beratung, dann der Schnitt.",

  theme: {
    bg: "#14100D",
    ink: "#F6EFE6",
    mute: "#B6A89A",
    accent: "#C9A24B",
    accentSoft: "#E8CE8F",
    line: "#2A241C",
  },

  nap: {
    name: "Salon Loi",
    street: "Max-Joseph-Straße 3",
    zipCity: "68167 Mannheim-Neckarstadt",
    phoneDisplay: "0621 331273",
    phoneTel: "+49621331273",
    whatsapp: "49621331273",
  },
  mapsQuery: "Salon Loi, Max-Joseph-Straße 3, 68167 Mannheim",

  // Direkter Google-Maps-Eintrag zeigte nur "Opens 9 am Tue"; ein
  // Branchenverzeichnis nennt Di–Fr 08:30–18:00 und Sa 08:30–13:00 statt
  // 09:00. Bewusst nicht als bestätigt markiert, bis abgeglichen (siehe
  // Hinweis unter der Tabelle sowie TODO-salon-loi.md).
  hours: [
    { day: "Dienstag–Freitag", hours: "09:00–18:00" },
    { day: "Samstag", hours: "09:00–14:00" },
    { day: "Sonntag, Montag", hours: "Geschlossen" },
  ],
  hoursConfirmed: false,

  reviews: { count: 4882, source: "Google" },

  services: [
    {
      category: "Damen",
      items: ["Schnitt & Styling", "Föhnfrisur", "Hochsteckfrisur"],
    },
    {
      category: "Herren",
      items: ["Herrenschnitt", "Konturen", "Bartpflege"],
    },
    {
      category: "Farbe & Textur",
      items: ["Coloration", "Balayage", "Tönung"],
    },
    {
      category: "Pflege & Anlässe",
      items: ["Ansatzbehandlung", "Kur", "Braut- & Event-Styling"],
    },
  ],
  servicesConfirmed: false,

  about: [
    "Salon Loi steht seit Jahren an der Max-Joseph-Straße in der Neckarstadt — kein Konzept von außen, sondern ein Salon, der zum Kiez gehört.",
    "Fast 5.000 Bewertungen bei Google sind kein Zufall: Wer einmal kommt, kommt wieder.",
    "Hier wird nicht verkauft, sondern zugehört — und danach geschnitten, gefärbt oder gestylt.",
    "Ohne Umwege erreichbar: anrufen, Termin ausmachen, vorbeikommen.",
  ],

  gallery: [
    { label: "Empfang" },
    { label: "Arbeitsplätze" },
    { label: "Coloration" },
    { label: "Team bei der Arbeit" },
  ],

  whatsappDefaultText: "Hallo Salon Loi, ich möchte gerne einen Termin anfragen.",
};
