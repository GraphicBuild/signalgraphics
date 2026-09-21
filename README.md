# Signal Graphics

Premium-Agenturwebsite für **Signal Graphics** (`signalgraphics.de`) — lokale Betriebe in DACH, Tür-zu-Tür-Vorschau, Launch in 7–10 Tagen + monatliche Betreuung.

Stack: **Next.js (App Router) · TypeScript · Tailwind · GSAP/ScrollTrigger** · Static Export.

## Lokal starten

```bash
npm install
npm run dev
```

Öffnen: [http://localhost:3000](http://localhost:3000)

Production-Build (statisch):

```bash
npm run build
# Ausgabe in out/
npx serve out
```

GitHub-Pages-Build (mit `basePath`):

```bash
GH_PAGES=true npm run build
```

## Inhalte anpassen

Alle Agenturdaten (Texte, Preise, Kontakt, Showcase) liegen in:

```
src/site.config.ts
```

## Preis-Annahmen (nicht verbindlich)

Die Zahlen auf der Seite sind **Entwurfs-Annahmen** für DACH-Lokalgeschäft — kein Angebot:

| Paket      | Annahme        | Hinweis                          |
|------------|----------------|----------------------------------|
| Launch     | **1.490 €**    | einmalig, 7–10 Tage              |
| Betreuung  | **149 € / Mo** | Updates, Pflege, Kurz-Check      |
| Plus       | **2.490 €**    | mehr Seiten / Motion + 1 Mo Care |

Finales Angebot immer nach kurzem Gespräch. Disclaimer steht auch auf der Seite.

## Showcase-Arbeit

Die Cases unter „Arbeit“ sind **Entwurf / Showcase** (Capability-Demos), keine echten Kundenmarken: Bäckerei, Physio, Handwerk, Gastro.

## Kunden-Vorschauen

Echte Tür-zu-Tür-Vorschauen für Betriebe liegen unter `src/app/preview/<slug>/`,
mit eigenem Layout (eigene Farben/Fonts, kein Agentur-Header) und eigener
Inhalts-Datei in `src/content/<slug>.config.ts`. Aktuell:

- **Das Haarstudio** (Friseursalon, Mannheim-Schwetzingerstadt) — `/preview/haarstudio/`
  Inhalte: `src/content/haarstudio.config.ts`. Kern der Vorschau: Terminanfrage
  direkt auf der Startseite (Formular + Sofort-Anruf), statt nur über den
  Google-Treatwell-Umweg wie auf der aktuellen Seite. Offene Punkte (Öffnungszeiten,
  Buchungssystem-Entscheidung, echte Fotos) stehen in [`TODO.md`](./TODO.md).

## Deploy

### Option A — GitHub Pages (bevorzugt, static export)

1. `GH_PAGES=true npm run build` erzeugt `out/` mit `basePath` `/signalgraphics`.
2. Branch `gh-pages` mit Inhalt von `out/` deployen (Workflow enthalten).
3. Repo → Settings → Pages → Source: `gh-pages` branch.
4. Live: `https://graphicbuild.github.io/signalgraphics/`

### Option B — Vercel

1. Repo bei Vercel importieren (ohne `GH_PAGES`).
2. Build: `next build` · Output: static (`out` via `output: 'export'`).
3. Optional Domain `signalgraphics.de` anbinden.

```bash
npx vercel --yes
```

nur wenn ein Vercel-Token vorhanden ist.

### Option C — eigener Host

Inhalt von `out/` per SFTP/CDN ausliefern. Ohne `GH_PAGES` ist der Root-Pfad `/`.

## Rechtliches

- `/impressum` und `/datenschutz` (DE) — Anschrift vor Go-Live vervollständigen.
- Kontaktformular öffnet WhatsApp (kein Server-Backend nötig).

## Gründer

Raad Abdallah & Aisa Gandour · Tel/WhatsApp: +49 151 70517083
