````md
# Access Builder

Version: 0.1.0

Design-only web app to draw rubber ramps and platforms in 2D, preview in 3D, and export a dimensioned PDF.

## Features (v0.1)
- 2D editor: place, select, move, resize, rotate
- Elements: Ramp, Platform
- Snap-to-grid (mm)
- 3D preview (view-only)
- Export: dimensioned PDF (PDF)

## Latest changes
- Added: Initial project scaffold and UI shell
- Changed: N/A
- Fixed: N/A

Full history: see CHANGELOG.md

## Tech stack
- Vite + React + TypeScript
- 2D: HTML Canvas
- 3D: Three.js (view-only)
- PDF: jsPDF

## Local development
```bash
npm i
npm run dev
````

## Build

```bash
npm run build
npm run preview
```

## Deploy (GitHub Pages)

* GitHub Actions builds `dist/` and deploys to Pages.

## Repo structure

* src/ui: layout and panels
* src/editor2d: canvas editor
* src/render3d: three scene
* src/export: PDF export
* src/model: types and state

## Licence

TBC

```
::contentReference[oaicite:0]{index=0}
```
