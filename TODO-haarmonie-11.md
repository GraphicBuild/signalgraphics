# TODO — Haarmonie 11 Vorschau

Entwurf unter `/vorschau/haarmonie-11/`. Diese Punkte vor dem Kundengespräch bzw. vor Livegang klären — die aktuelle Website des Salons war in dieser Umgebung nicht erreichbar (Domain blockiert), daher sind folgende Inhalte **Annahmen**, keine bestätigten Fakten:

- [ ] **Öffnungszeiten**: Nur „Dienstag ab 10 Uhr" ist bestätigt. Restliche Wochentage, Schließzeiten und Mittagspausen fehlen — bitte per Google-Profil oder Anruf ergänzen.
- [x] **Leistungen**: ersetzt durch echte Leistungsnamen aus dem Google-Profil (Rezensions-Tag von Victoria Rabe: Haarstyling, Haarefärben, Haarglättung, Pony schneiden, Hair Glossing, Haareföhnen, Lockenfrisuren, Hair Gloss/Glaze, Haar-Highlights, Keratinbehandlungen, Feuchtigkeitsbehandlung). Keine echte Kategorisierung (Damen/Herren) oder Preise bekannt — **Preise fehlen weiterhin**, bitte Preisliste schicken oder "Preise im Salon" ergänzen.
- [ ] **Fotos**: Galerie nutzt Farbflächen-Platzhalter statt echter Fotos. Vier bis sechs gute Fotos (Eingang, Arbeitsplätze, Ergebnisse, Team/Alex) würden die Vorschau deutlich stärker machen.
- [x] **Über-uns-Text**: überarbeitet, nennt jetzt "Alex" als Frisör/Inhaber (aus mehreren Bewertungen bestätigt) und die Stammkundschaft-Story aus Bettys Bewertung. Nachname/genaue Rolle (Inhaber vs. Angestellter) noch nicht bestätigt.
- [ ] **WhatsApp-Nummer**: Aktuell = Festnetz-/Salonnummer aus dem Google-Profil (0621 56091932). Bitte bestätigen, dass diese Nummer WhatsApp-fähig ist — sonst separate Mobilnummer eintragen in `src/content/clients/haarmonie-11.ts`.
- [x] **Bewertungszahl**: korrigiert auf 54 Bewertungen, 4,9 Sterne bei Google (vom Nutzer bestätigt).
- [x] **Bewertungs-Zitate**: 4 echte Google-Bewertungen eingebaut (Betty, Beate Beulig, Ines Ostkamp, Victoria Rabe), aus Screenshots übernommen. Bei Bedarf weitere ergänzen oder austauschen in `reviewHighlights`.
- [ ] **Rechtliches**: Für die Vorschau bewusst kein Impressum/Datenschutz (nicht-öffentlicher Entwurf). Vor echtem Livegang: Impressum mit Inhaber/Vertretungsberechtigten der Haarmonie 11 sowie Datenschutzerklärung ergänzen (siehe `/impressum` und `/datenschutz` der Agentur-Seite als Vorlage).

## Alles pflegen
Alle Inhalte liegen zentral in `src/content/clients/haarmonie-11.ts` (Texte, Farben, Kontakt, Leistungen, Öffnungszeiten). Anpassen reicht dort — Komponenten unter `src/components/preview/` bleiben unverändert.
