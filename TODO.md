# TODO

## Vorschau: Salon Loi (`/vorschau/salon-loi`)

Fakten aus dem öffentlichen Google-Eintrag und Branchenverzeichnissen
recherchiert, nicht mit dem Salon abgeglichen. Vor Ansprache/Übergabe
prüfen:

- **Öffnungszeiten**: Google-Eintrag zeigte „Opens 9 am Tue"; ein
  Branchenverzeichnis nennt Di–Fr 08:30–18:00 Uhr statt 09:00–18:00 Uhr.
  Aktuell mit 09:00 angesetzt (Hinweistext auf der Seite weist bereits auf
  Bestätigung hin) — vor Livegang mit dem Salon oder dem aktuellen
  Google-Eintrag abgleichen.
- **Bewertungszahl**: 4.882 aus dem direkt eingesehenen Google-Maps-Eintrag
  übernommen (aktueller als ältere Verzeichnis-Caches, die niedrigere Zahlen
  zeigten). Vor Übergabe erneut gegenprüfen, Google-Zahlen ändern sich.
- **Leistungen/Preise**: Keine echte Preisliste öffentlich auffindbar —
  bewusst ohne erfundene Preise, stattdessen „Preise auf Anfrage". Bei
  Kontakt echte Leistungen/Preise erfragen und einpflegen.
- **Fotos**: Keine verwendbaren echten Fotos gefunden — Seite bewusst ohne
  Bildmaterial gestaltet (typografisch/editorial). Bei Zusage: echte
  Salonfotos einholen und Galerie ergänzen.
- **Kartenausschnitt**: Google-Maps-Embed in `_components/Visit.tsx` per
  iframe ohne API-Key — in dieser Sandbox durch Netzwerk-Egress blockiert
  und daher ungetestet; im echten Browser/Deploy prüfen.
- **Rechtliches**: Bewusst kein Impressum/Datenschutz für den Salon
  ergänzt (kein Mandat, keine gesicherten Rechtsform-/Inhaberdaten) — bei
  Auftragserteilung nachreichen.

Quelle Inhalte: `src/app/vorschau/salon-loi/salon-loi.config.ts`.
