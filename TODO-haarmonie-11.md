# TODO — Haarmonie 11 Vorschau

Entwurf unter `/vorschau/haarmonie-11/`. Diese Punkte vor dem Kundengespräch bzw. vor Livegang klären — die aktuelle Website des Salons war in dieser Umgebung nicht erreichbar (Domain blockiert), daher sind folgende Inhalte **Annahmen**, keine bestätigten Fakten:

- [ ] **Öffnungszeiten**: Nur „Dienstag ab 10 Uhr" ist bestätigt. Restliche Wochentage, Schließzeiten und Mittagspausen fehlen — bitte per Google-Profil oder Anruf ergänzen.
- [ ] **Leistungen & Preise**: Die vier Kategorien (Damen, Herren, Farbe & Textur, Pflege & Anlässe) sind branchenübliche Annahmen, keine echte Leistungsliste. Vor Kundengespräch mit echter Preisliste abgleichen oder Preise bewusst weglassen ("Preise im Salon").
- [ ] **Fotos**: Galerie nutzt Farbflächen-Platzhalter statt echter Fotos. Vier bis sechs gute Fotos (Eingang, Arbeitsplätze, Ergebnisse, Team) würden die Vorschau deutlich stärker machen.
- [ ] **Über-uns-Text**: Vier Zeilen sind Entwurf, nicht mit dem Salon abgestimmt — vor Versand persönlicher machen (Team-Namen, Spezialisierung, Gründungsjahr o. Ä.).
- [ ] **WhatsApp-Nummer**: Aktuell = Festnetz-/Salonnummer aus dem Google-Profil (0621 56091932). Bitte bestätigen, dass diese Nummer WhatsApp-fähig ist — sonst separate Mobilnummer eintragen in `src/content/clients/haarmonie-11.ts`.
- [ ] **Bewertungszahl**: 4.954 Bewertungen wie vom Nutzer übermittelt — kein Sterne-Durchschnitt verfügbar, daher bewusst nicht erfunden. Bei Gelegenheit den echten Rating-Wert ergänzen.
- [ ] **Rechtliches**: Für die Vorschau bewusst kein Impressum/Datenschutz (nicht-öffentlicher Entwurf). Vor echtem Livegang: Impressum mit Inhaber/Vertretungsberechtigten der Haarmonie 11 sowie Datenschutzerklärung ergänzen (siehe `/impressum` und `/datenschutz` der Agentur-Seite als Vorlage).

## Alles pflegen
Alle Inhalte liegen zentral in `src/content/clients/haarmonie-11.ts` (Texte, Farben, Kontakt, Leistungen, Öffnungszeiten). Anpassen reicht dort — Komponenten unter `src/components/preview/` bleiben unverändert.
