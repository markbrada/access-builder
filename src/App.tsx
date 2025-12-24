import { useState } from 'react';
import { version } from './version';

const TOOL_ITEMS = [
  { id: 'ramp', label: 'Ramp' },
  { id: 'platform', label: 'Platform' },
];

function App() {
  const [is3D, setIs3D] = useState(false);
  const [snapEnabled, setSnapEnabled] = useState(true);

  const modeLabel = is3D ? 'Edit in 2D' : 'Edit in 3D';
  const canvasMode = is3D ? '3D preview (view only)' : '2D canvas (edit mode)';
  const snapLabel = snapEnabled ? 'Snap: On' : 'Snap: Off';

  return (
    <div className="app-shell">
      <header className="top-bar">
        <div className="brand">
          <span className="brand-name">Access Builder</span>
          <span className="version">v{version}</span>
        </div>
        <div className="controls">
          <button type="button" className="ghost">
            Undo
          </button>
          <button type="button" className="ghost">
            Redo
          </button>
          <button type="button" className="primary">
            Export PDF
          </button>
          <button
            type="button"
            className="secondary"
            onClick={() => setIs3D((prev) => !prev)}
          >
            {modeLabel}
          </button>
        </div>
      </header>
      <div className="workspace">
        <aside className="sidebar left">
          <h2 className="sidebar-title">Ramps</h2>
          <div className="tool-list">
            {TOOL_ITEMS.map((tool) => (
              <button key={tool.id} type="button" className="tool-button">
                {tool.label}
              </button>
            ))}
          </div>
        </aside>
        <main className="canvas-wrapper">
          <div className="canvas-area">
            <div className="canvas-label">
              <p className="canvas-mode">{canvasMode}</p>
              <p className="canvas-helper">
                Grid background, placement, selection, resize, and rotation will be implemented here.
              </p>
            </div>
            <div className="snap-toggle">
              <span>Snap to grid</span>
              <button
                type="button"
                className="secondary"
                onClick={() => setSnapEnabled((prev) => !prev)}
              >
                {snapLabel}
              </button>
            </div>
          </div>
        </main>
        <aside className="sidebar right">
          <h2 className="sidebar-title">Inspector</h2>
          <div className="inspector-placeholder">
            <p className="muted">No Selection</p>
            <p className="muted small">
              Select a Ramp or Platform to edit dimensions, rotation, elevation, and toggles.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default App;
