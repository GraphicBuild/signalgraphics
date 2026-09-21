# TODO — Das Haarstudio Vorschau

Entwurf unter `/vorschau/haarstudio/`. Diese Punkte vor dem Kundengespräch bzw. vor Livegang klären — die bestehende Website des Salons (`dashaarstudio.net`) war in dieser Umgebung nicht erreichbar (Domain blockiert), daher sind folgende Inhalte **Annahmen**, keine bestätigten Fakten:

- [ ] **Öffnungszeiten**: komplett angenommen (Di–Fr 9–18, Sa 9–14, Mo/So Ruhetag), keine einzige Zeit ist bestätigt. Mit Google-Profil oder Anruf abgleichen.
- [ ] **Leistungen & Preise**: Die vier Kategorien (Damen, Herren, Farbe, Pflege & Anlass) sind branchenübliche Annahmen ohne erfundene Preise (bewusst „Preise auf Anfrage" statt Zahlen). Mit der Kundin abgleichen, ob feste Preise gezeigt werden sollen.
- [ ] **Terminbuchung**: `ClientBooking` sendet aktuell per `mailto:` an eine angenommene Adresse `termin@dashaarstudio.net` (`bookingEmail` in `src/content/clients/haarstudio.ts`) plus Sofort-Anruf-Button. Vor Livegang mit der Kundin klären:
  - eigenes Buchungssystem (Kalender/Terminverwaltung) einbinden, **oder**
  - Treatwell-Widget einbetten (kostet ~30 % Provision je Buchung — daher hier bewusst nicht vorausgesetzt), **oder**
  - echte E-Mail-Adresse bzw. Formular-Endpoint (z. B. Formspree/Getform) hinterlegen.
- [ ] **WhatsApp-Nummer**: Aktuell = Festnetznummer aus dem Google-Profil (0621 443739). Bitte bestätigen, dass diese Nummer WhatsApp-fähig ist — sonst separate Mobilnummer in `src/content/clients/haarstudio.ts` (`nap.whatsapp`) eintragen. Solange das nicht bestätigt ist, ist der Sofort-Anruf-Button in `ClientBooking`/`ClientHero` der verlässlichere Weg.
- [ ] **Bewertung**: 5,0 · 85 Bewertungen wie vom Nutzer übermittelt (Google-Profil) — bei Gelegenheit gegen den aktuellen Stand prüfen.
- [ ] **Fotos**: Galerie nutzt Farbflächen-Platzhalter statt echter Fotos. Vier bis sechs gute Fotos (Innenraum, Farbarbeiten, Styling, Vorher/Nachher) würden die Vorschau deutlich stärker machen.
- [ ] **Über-uns-Text**: Vier Zeilen sind Entwurf, nicht mit dem Salon abgestimmt — vor Versand persönlicher machen (Team-Namen, Spezialisierung, Gründungsjahr o. Ä.).
- [ ] **Impressum**: Inhaber:in und USt-ID fehlen noch (`src/app/vorschau/haarstudio/impressum/page.tsx`), Adresse & Telefon sind bereits korrekt.

## Alles pflegen

Alle Inhalte liegen zentral in `src/content/clients/haarstudio.ts` (Texte, Farben, Kontakt, Leistungen, Öffnungszeiten, Terminanfrage-Adresse). Anpassen reicht dort — Komponenten unter `src/components/preview/` bleiben unverändert.
