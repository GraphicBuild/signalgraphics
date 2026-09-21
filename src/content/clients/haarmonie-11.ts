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
  // Echte Google-Bewertungen, vom Nutzer per Screenshot geschickt.
  reviewHighlights: [
    {
      author: "Betty",
      rating: 5,
      text: "Ich bin seit der Eröffnung Kundin und kann nur sagen alles Top. Immer gut beraten und für mich nix besseres. Da nehme ich gerne alle 8 Wochen die Fahrt von PF nach MA in Kauf.",
    },
    {
      author: "Beate Beulig",
      rating: 5,
      text: "Sehr zu empfehlen! Ein Friseur aus Leidenschaft! Alex schneidet nicht nur die Haare, sondern geht auf jeden sehr persönlich ein und du fühlst dich einfach super! Definitiv mein Friseur!",
    },
    {
      author: "Ines Ostkamp",
      rating: 5,
      text: "Wundervoller Friseursalon. Man entspannt in toller Atmosphäre. Nach einer Massage wird man durch den kompetenten Inhaber beraten und verwöhnt. Dort versteht man das Handwerk Friseur.",
    },
    {
      author: "Victoria Rabe",
      rating: 5,
      text: "Du möchtest endlich deinen Typ/Style finden und keine wandelnde Kopie mehr sein? Bei Alex bist du genau richtig, bin schon seit Jahren sehr zufrieden. Preis/Leistung einfach TOP. Danke Alex!",
    },
  ],

  // Leistungsnamen aus dem Google-Profil (Rezensions-Tag), keine Erfindung mehr.
  services: [
    {
      category: "Schnitt & Styling",
      items: ["Haarstyling", "Pony schneiden", "Haareföhnen", "Lockenfrisuren"],
    },
    {
      category: "Farbe & Textur",
      items: ["Haarefärben", "Haar-Highlights", "Hair Gloss / Hair Glaze", "Haarglättung"],
    },
    {
      category: "Pflege",
      items: ["Keratinbehandlungen", "Feuchtigkeitsbehandlung der Haare"],
    },
  ],
  servicesConfirmed: true,

  about: [
    "Haarmonie 11 sitzt mitten im Jungbusch — dort, wo Mannheim gerade am meisten in Bewegung ist.",
    "Hinter dem Stuhl steht Alex: Frisör aus Leidenschaft, der zuhört, bevor er schneidet.",
    "Manche Kundinnen fahren seit der Eröffnung von außerhalb an, alle paar Wochen, weil es hier passt.",
    "Beratung, Schnitt, Farbe und Pflege aus einer Hand — kein Fließband-Termin, sondern ein Typ, der zu dir passt.",
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
