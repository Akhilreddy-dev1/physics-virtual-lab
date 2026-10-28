# Orbit Lab

Orbit Lab is a responsive React/Vite MVP for an interactive B.Tech Physics Virtual Laboratory. It includes all eight requested experiments, reusable controls, live equations, measurement recording, charts, and procedural Three.js apparatus geometry.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. Validate the production bundle with:

```bash
npm test
npm run build
npm run preview
```

The measurements are intentionally simulated for teaching. Each experiment keeps the requested reference equation visible and labels the simulated nature of the values; real lab calibration and uncertainty analysis should be added before using the tool for assessment.
