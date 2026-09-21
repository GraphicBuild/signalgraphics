/**
 * Gemeinsames Content-Modell für Kunden-Vorschauen (Product B).
 * Neuer Kunde = neue Datei in diesem Ordner nach diesem Typ, keine neuen Komponenten.
 */

export type ClientTheme = {
  bg: string;
  ink: string;
  mute: string;
  accent: string;
  accentSoft: string;
  line: string;
};

export type ClientHour = {
  day: string;
  hours: string;
};

export type ClientServiceGroup = {
  category: string;
  items: string[];
};

export type ClientGalleryTile = {
  label: string;
};

export type ClientSite = {
  slug: string;
  name: string;
  category: string;
  neighborhood: string;
  tagline: string;
  promise: string;
  theme: ClientTheme;

  nap: {
    name: string;
    street: string;
    zipCity: string;
    phoneDisplay: string;
    phoneTel: string;
    whatsapp: string;
  };
  mapsQuery: string;

  hours: ClientHour[];
  /** false = nicht alle Zeiten bestätigt, UI zeigt Hinweis statt vollständige Tabelle */
  hoursConfirmed: boolean;

  reviews: { count: number; source: string };

  services: ClientServiceGroup[];
  /** false = Leistungen sind Entwurfs-Annahmen, UI zeigt Kennzeichnung */
  servicesConfirmed: boolean;

  about: string[];
  gallery: ClientGalleryTile[];

  whatsappDefaultText: string;
};
