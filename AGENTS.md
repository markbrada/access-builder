# Enviro Ramp Designer (v0.1)

## Scope (v0.1)
Build a static GitHub Pages web app to design rubber ramps and platforms.
- Design-only tool (no pricing, no SKUs, no BOM).
- Output: dimensioned PDF only.
- Constraints: show warnings only (do not block user actions).
- Only two elements in v0.1: Ramp and Platform.
- 2D is the edit mode. 3D is view-only (select to inspect ok, no transforms in 3D).

## Non-goals (v0.1)
- No kerbing, wings, channels, cutouts, level sections, handrails, walls, doors, rooms.
- No authentication, no dashboard, no server.

## Tech decisions (locked for v0.1)
- Vite + React + TypeScript.
- 2D editor: HTML Canvas (no heavy CAD libs) with simple hit-testing + resize handles.
- 3D preview: Three.js (OrbitControls), generated mesh from the 2D objects.
- PDF export: jsPDF (raster export acceptable for v0.1; keep code structured so we can move to vector later).
- State: Zustand (or small custom store if you prefer, but keep it testable).
- Styling: simple CSS modules or plain CSS, no component library.

## Commands
- Install: npm i
- Dev: npm run dev
- Build: npm run build
- Preview: npm run preview
- Lint: npm run lint
- Test (if added): npm run test

## UI requirements (match provided concept)
Layout:
- Top bar with: Undo, Redo, Export PDF, and a mode toggle button: "Edit in 2D" / "Edit in 3D".
- Left sidebar: one group called "Ramps" with two tools only: Ramp, Platform.
- Centre canvas: grid background, snap-to-grid toggle (bottom right).
- Right sidebar: Inspector. Shows "No Selection" when empty. Shows editable fields when an object is selected.

Ramp inspector fields:
- Run/Length (mm), Width (mm), Height (mm), Elevation (mm)
- Rotate (degrees) + quick rotate buttons (+90, -90)
- Lock toggle
- Arrow toggle (shows direction)
- Derived read-only: Gradient (degrees), Ratio (1:x)

Platform inspector fields:
- Length (mm), Width (mm), Thickness (mm), Elevation (mm)
- Rotate (degrees)
- Lock toggle

Interaction:
- Place tool: click to place, drag to move.
- Select tool implicit: click object to select.
- Resize: corner handles.
- Snap to grid: configurable grid size (default 50 mm).
- Warnings: show if ramp ratio is steeper than 1:8 and 1:10 (warn-only).

## PDF export (v0.1)
Generate a single-page PDF:
- Title block: Project name, date/time, units = mm.
- Plan view image of canvas + dimension annotations for each object (overall run/length, width; ramp height noted).
- Scale text shown (even if approximate due to raster).

## Quality bar
- TypeScript strict.
- No console errors.
- Keep geometry and rendering code separated from UI components.
- Every PR includes a short summary in the description and how to test locally.
