# TODO — offene Punkte je Vorschau

## Das Haarstudio (`/preview/haarstudio`)

Quelle: Google-Eintrag (Name, Kategorie, 5,0 · 85 Bewertungen, Adresse,
Telefon) + `dashaarstudio.net` (nur URL bekannt, Inhalt der aktuellen Seite
war beim Bauen dieser Vorschau nicht abrufbar). Vor Übergabe an die Kundin
bitte prüfen:

- **Öffnungszeiten** — aktuell Annahme (Di–Fr 9–18, Sa 9–14, Mo/So Ruhetag)
  in `src/content/haarstudio.config.ts` → `hours`. Mit echtem Google-Eintrag
  abgleichen.
- **Leistungen & Preise** — Kategorien in `haarstudio.config.ts` →
  `services` sind branchenübliche Annahmen ohne erfundene Preise (bewusst
  „Preise auf Anfrage"). Mit der Kundin abgleichen, ob feste Preise gezeigt
  werden sollen.
- **Terminbuchung** — läuft aktuell über `mailto:` an eine angenommene
  Adresse `termin@dashaarstudio.net` (`bookingEmail` in der Config) plus
  Sofort-Anruf-Button. Kein WhatsApp-Button, da nur eine Festnetznummer
  bekannt ist (keine WhatsApp-Business-Nummer bestätigt). Vor Livegang mit
  der Kundin klären:
  - eigenes Buchungssystem (Kalender/Terminverwaltung) einbinden, **oder**
  - Treatwell-Widget einbetten (kostet ~30 % Provision je Buchung — daher
    hier bewusst nicht vorausgesetzt), **oder**
  - echte E-Mail-Adresse bzw. Formular-Endpoint (z. B. Formspree/Getform)
    für den `mailto:`-Fallback hinterlegen.
- **Impressum** — Inhaber:in und USt-ID fehlen noch (`src/app/preview/
  haarstudio/impressum/page.tsx`), Adresse & Telefon sind bereits korrekt.
- **Fotos** — Galerie zeigt ehrliche Platzhalter („Foto folgt"), keine
  Stockfotos. Echte Salonfotos vor Livegang einsetzen.
- Seite ist `robots: noindex` gesetzt (nicht öffentlich, Entwurf).
