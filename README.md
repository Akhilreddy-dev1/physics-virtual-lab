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

## Public deployment

The `main` branch deploys automatically to GitHub Pages through
`.github/workflows/deploy-pages.yml`. After GitHub Pages is enabled for the
repository with **Settings → Pages → Source: GitHub Actions**, the public site
is available at:

```text
https://akhilreddy-dev1.github.io/physics-virtual-lab/
```

The measurements are intentionally simulated for teaching. Each experiment keeps the requested reference equation visible and labels the simulated nature of the values; real lab calibration and uncertainty analysis should be added before using the tool for assessment.
