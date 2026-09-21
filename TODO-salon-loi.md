# TODO — Salon Loi Vorschau

Entwurf unter `/vorschau/salon-loi/`. Diese Punkte vor dem Kundengespräch bzw. vor Livegang klären — die aktuelle Website des Salons war in dieser Umgebung nicht erreichbar (Domain blockiert), daher sind folgende Inhalte **Annahmen**, keine bestätigten Fakten:

- [ ] **Öffnungszeiten**: Google-Maps-Eintrag zeigte nur „Opens 9 am Tue"; ein Branchenverzeichnis nennt Di–Fr 08:30–18:00 und Sa 08:30–13:00 statt 09:00. Vor Livegang mit dem Salon oder dem aktuellen Google-Profil abgleichen (30-Minuten-Differenz beim Öffnen).
- [ ] **Leistungen & Preise**: Die vier Kategorien (Damen, Herren, Farbe & Textur, Pflege & Anlässe) sind branchenübliche Annahmen, keine echte Leistungsliste. Vor Kundengespräch mit echter Preisliste abgleichen oder Preise bewusst weglassen ("Preise im Salon").
- [ ] **Fotos**: Galerie nutzt Farbflächen-Platzhalter statt echter Fotos. Vier bis sechs gute Fotos (Empfang, Arbeitsplätze, Ergebnisse, Team) würden die Vorschau deutlich stärker machen.
- [ ] **Über-uns-Text**: Vier Zeilen sind Entwurf, nicht mit dem Salon abgestimmt — vor Versand persönlicher machen (Team-Namen, Spezialisierung, Gründungsjahr o. Ä.).
- [ ] **WhatsApp-Nummer**: Aktuell = Festnetz-/Salonnummer aus dem Google-Profil (0621 331273). Bitte bestätigen, dass diese Nummer WhatsApp-fähig ist — sonst separate Mobilnummer eintragen in `src/content/clients/salon-loi.ts`.
- [ ] **Bewertungszahl**: 4.882 Bewertungen wie direkt aus dem Google-Maps-Eintrag übernommen (aktueller als ältere Verzeichnis-Caches mit niedrigeren Zahlen) — kein Sterne-Durchschnitt verfügbar, daher bewusst nicht erfunden. Vor Übergabe erneut gegenprüfen.
- [ ] **Rechtliches**: Für die Vorschau bewusst kein Impressum/Datenschutz (nicht-öffentlicher Entwurf). Vor echtem Livegang: Impressum mit Inhaber/Vertretungsberechtigten des Salon Loi sowie Datenschutzerklärung ergänzen (siehe `/impressum` und `/datenschutz` der Agentur-Seite als Vorlage).

## Alles pflegen
Alle Inhalte liegen zentral in `src/content/clients/salon-loi.ts` (Texte, Farben, Kontakt, Leistungen, Öffnungszeiten). Anpassen reicht dort — Komponenten unter `src/components/preview/` bleiben unverändert.
