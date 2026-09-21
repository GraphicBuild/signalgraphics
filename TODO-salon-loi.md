# TODO — Salon Loi Vorschau

Entwurf unter `/vorschau/salon-loi/`. Diese Punkte vor dem Kundengespräch bzw. vor Livegang klären — die aktuelle Website des Salons war in dieser Umgebung nicht erreichbar (Domain blockiert), daher sind folgende Inhalte **Annahmen**, keine bestätigten Fakten:

- [ ] **Öffnungszeiten**: Google-Maps-Eintrag zeigte nur „Opens 9 am Tue"; ein Branchenverzeichnis nennt Di–Fr 08:30–18:00 und Sa 08:30–13:00 statt 09:00. Vor Livegang mit dem Salon oder dem aktuellen Google-Profil abgleichen (30-Minuten-Differenz beim Öffnen).
- [ ] **Leistungen & Preise**: Die vier Kategorien (Damen, Herren, Farbe & Textur, Pflege & Anlässe) sind branchenübliche Annahmen, keine echte Leistungsliste. Vor Kundengespräch mit echter Preisliste abgleichen oder Preise bewusst weglassen ("Preise im Salon").
- [ ] **Fotos**: Galerie nutzt Farbflächen-Platzhalter statt echter Fotos. Vier bis sechs gute Fotos (Empfang, Arbeitsplätze, Ergebnisse, Team) würden die Vorschau deutlich stärker machen.
- [ ] **Über-uns-Text**: Vier Zeilen sind Entwurf, nicht mit dem Salon abgestimmt — vor Versand persönlicher machen (Team-Namen, Spezialisierung, Gründungsjahr o. Ä.).
- [ ] **WhatsApp-Nummer**: Aktuell = Festnetz-/Salonnummer aus dem Google-Profil (0621 331273). Bitte bestätigen, dass diese Nummer WhatsApp-fähig ist — sonst separate Mobilnummer eintragen in `src/content/clients/salon-loi.ts`.
- [x] **Bewertungszahl korrigiert**: Der ursprüngliche Wert „4.882 Bewertungen" aus dem Maps-Ausschnitt war vermutlich ein Lesefehler aus „4,8 ★ · 82 Bewertungen" — exakt derselbe Fehlertyp wurde bei Haarmonie 11 vom Kunden bestätigt (dort 4.954 → echte 54). Jetzt auf **82 Bewertungen, 4,8 ★** gestellt (Branchenverzeichnis-Quelle). Bitte trotzdem mit dem aktuellen Google-Profil gegenprüfen.
- [ ] **Bewertungs-Zitate**: Die Bewertungen-Sektion zeigt aktuell nur Sterne-Zahl + Platzhalter-Karten ("Bewertung folgt"). Für echte Zitate bitte schicken (3–6 reichen):
      - Bewertungstext (Original oder gekürzt)
      - Sterne-Zahl der einzelnen Bewertung
      - Name des Kunden, wie er bei Google steht (oder nur Vorname/Kürzel, falls Datenschutz-Bedenken)
      - Copy-paste aus Google reicht, ein Screenshot der Bewertungen geht auch.
- [ ] **Rechtliches**: Für die Vorschau bewusst kein Impressum/Datenschutz (nicht-öffentlicher Entwurf). Vor echtem Livegang: Impressum mit Inhaber/Vertretungsberechtigten des Salon Loi sowie Datenschutzerklärung ergänzen (siehe `/impressum` und `/datenschutz` der Agentur-Seite als Vorlage).

## Alles pflegen
Alle Inhalte liegen zentral in `src/content/clients/salon-loi.ts` (Texte, Farben, Kontakt, Leistungen, Öffnungszeiten). Anpassen reicht dort — Komponenten unter `src/components/preview/` bleiben unverändert.
