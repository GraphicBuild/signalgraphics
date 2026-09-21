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

## Kunden-Vorschauen (Product B)

Vorschauen für potenzielle Kunden liegen unter `/vorschau/[slug]/` und haben ein
eigenes Design, eigene Fonts und eigene Farben — komplett getrennt vom
Agentur-Layout (`src/app/(site)/`).

Neuen Kunden anlegen:

1. Neue Datei `src/content/clients/<slug>.ts` nach dem Typ in
   `src/content/clients/types.ts` (Name, Adresse, Telefon, Öffnungszeiten,
   Farben/Theme, Leistungen, Über-uns-Text, Galerie-Labels).
2. Neuer Ordner `src/app/vorschau/<slug>/` mit `layout.tsx` (eigene
   Google Fonts + Theme-Farben als CSS-Variablen) und `page.tsx` (setzt die
   vorhandenen Komponenten aus `src/components/preview/` zusammen).
3. Komponenten bleiben unverändert — nur Config und die zwei neuen Routen-Dateien.

Jede Vorschau zeigt oben automatisch das Banner „Unverbindlicher Entwurf —
nicht öffentlich, kein Auftrag." und ist per `robots: noindex` von der
Suche ausgeschlossen, bis der Kunde zusagt.

Beispiel: **Haarmonie 11** (Friseursalon, Mannheim Jungbusch) unter
`/vorschau/haarmonie-11/` — offene Punkte dazu in `TODO-haarmonie-11.md`.

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
