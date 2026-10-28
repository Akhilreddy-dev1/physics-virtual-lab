import React, { useEffect, useMemo, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { Activity, Atom, BookOpen, ChevronRight, CircleHelp, FlaskConical, Gauge, Info, Layers3, Menu, Play, RotateCcw, Save, SlidersHorizontal, Sparkles, Table2, Thermometer, Waves, X } from "lucide-react";
import * as THREE from "three";
import { calculate, experimentSpecs } from "./physics";
import "./styles.css";

export const experiments = [
  { id: "bandgap", index: "01", name: "Semiconductor band gap", short: "Four-probe setup", icon: Atom, accent: "#79e5c4", category: "Electronic materials", formula: "ρ = 2πs(V/I)F; lnρ = lnρ₀ + Eg/(2kBT)", description: "Measure resistivity at several temperatures and fit the semiconductor band gap." },
  { id: "hall", index: "02", name: "Hall effect", short: "Carrier density & sign", icon: Activity, accent: "#8bb9ff", category: "Electronic materials", formula: "VH = RHIB/t; RH = 1/(nq)", description: "Vary the magnetic field and determine Hall coefficient, carrier density, and sign." },
  { id: "lee", index: "03", name: "Lee's method", short: "Thermal conductivity", icon: Thermometer, accent: "#ffbd7a", category: "Thermal physics", formula: "K = mc|dT/dt|L/[A(Th − Tc)]", description: "Use a Lee disc cooling slope and steady-state temperatures to find K." },
  { id: "grating", index: "04", name: "Diffraction grating", short: "Wavelength", icon: Waves, accent: "#dc9cff", category: "Optics", formula: "d sinθ = nλ", description: "Rotate the telescope through diffraction orders and calculate laser wavelength." },
  { id: "brewster", index: "05", name: "Brewster angle", short: "Glass refractive index", icon: Sparkles, accent: "#f7de77", category: "Optics", formula: "tanθB = n₂/n₁", description: "Minimise p-polarised reflection to measure the refractive index of glass." },
  { id: "fresnel", index: "06", name: "Fresnel diffraction", short: "Near-field optics", icon: Layers3, accent: "#74d8f4", category: "Optics", formula: "NF = a²/(λz)", description: "Change aperture and screen distance to explore near-field diffraction." },
  { id: "stefan", index: "07", name: "Stefan's law", short: "Thermal radiation", icon: Gauge, accent: "#ff8e86", category: "Thermal physics", formula: "P = εσA(T⁴ − Ta⁴)", description: "Compare radiated power against absolute temperature to verify Stefan's law." },
  { id: "hysteresis", index: "08", name: "Hysteresis / B-H curve", short: "Energy loss", icon: Activity, accent: "#a9a7ff", category: "Magnetism", formula: "W = ∮ H dB", description: "Drive a ferromagnetic core through a loop and measure energy loss per cycle." }
];

export const defaults = {
  bandgap: { temperature: 330, current: 12, voltage: 0.184, spacing: 0.02, correction: 1 },
  hall: { current: 0.8, field: 0.16, thickness: 0.001, voltage: 2.4 },
  lee: { mass: 0.42, heatCapacity: 385, slope: 0.00042, length: 0.006, area: 0.0028, hot: 88, cold: 31 },
  grating: { lineDensity: 600, angle: 21.3, order: 1 },
  brewster: { angle: 56.3, wavelength: 632.8, incident: 1 },
  fresnel: { aperture: 4, wavelength: 632.8, distance: 24 },
  stefan: { emissivity: 0.92, area: 0.012, temperature: 480, ambient: 295 },
  hysteresis: { amplitude: 1.2, coercivity: 0.18, remanence: 0.62, turns: 120 }
};

function Scene({ experiment, values, running }) {
  const mountRef = useRef(null);
  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
    camera.position.set(5.2, 4.2, 6);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);
    const root = new THREE.Group();
    const accent = new THREE.Color(experiment.accent);
    const dark = new THREE.MeshStandardMaterial({ color: "#16283b", metalness: 0.25, roughness: 0.48 });
    const metal = new THREE.MeshStandardMaterial({ color: "#b8cbd3", metalness: 0.8, roughness: 0.25 });
    const luminous = new THREE.MeshStandardMaterial({ color: accent, emissive: accent, emissiveIntensity: 1.7 });
    const addBox = (size, position, material = dark) => { const object = new THREE.Mesh(new THREE.BoxGeometry(...size), material); object.position.set(...position); root.add(object); return object; };
    addBox([6.5, 0.16, 4], [0, -0.2, 0], new THREE.MeshStandardMaterial({ color: "#182d3e" }));
    if (experiment.id === "bandgap") {
      addBox([2.4, 0.35, 1.35], [-1, 0.35, 0]); addBox([1.9, 0.12, 1], [-1, 0.6, 0], metal);
      for (let i = 0; i < 4; i += 1) { const probe = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.55, 16), luminous); probe.position.set(-1.65 + i * 0.44, 0.9, 0); root.add(probe); }
      addBox([1.2, 1, 0.6], [1.25, 0.55, 0.1]); addBox([0.75, 0.4, 0.04], [1.25, 0.7, -0.22], luminous);
    } else if (experiment.id === "hall") {
      addBox([2.8, 0.2, 1.4], [-0.8, 0.35, 0], metal); addBox([1.7, 0.25, 0.55], [-0.8, 0.65, 0], luminous);
      const magnet = addBox([0.45, 1.2, 1.2], [-2.1, 0.65, 0], dark); const magnet2 = magnet.clone(); magnet2.position.x = 0.5; root.add(magnet2);
      const field = new THREE.ArrowHelper(new THREE.Vector3(1, 0, 0), new THREE.Vector3(-1.8, 1.4, 0), 2, accent, 0.25, 0.15); root.add(field);
    } else if (experiment.id === "lee") {
      const disc = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 0.9, 0.18, 48), metal); disc.rotation.x = Math.PI / 2; disc.position.set(-0.7, 0.7, 0); root.add(disc);
      const disc2 = disc.clone(); disc2.position.y = 1.05; root.add(disc2); addBox([1.9, 0.18, 1.9], [-0.7, 1.36, 0], luminous);
      const thermometer = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 1.3, 16), luminous); thermometer.position.set(1.25, 0.65, 0); root.add(thermometer);
    } else if (experiment.id === "grating") {
      const laser = addBox([1.4, 0.28, 0.35], [-2, 0.5, 0], luminous); const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 3.2, 12), luminous); beam.rotation.z = Math.PI / 2; beam.position.set(-0.3, 0.5, 0); root.add(beam);
      const grating = new THREE.Mesh(new THREE.BoxGeometry(0.08, 1.4, 1.7), metal); grating.position.set(1, 0.65, 0); root.add(grating);
      for (let i = -4; i <= 4; i += 1) { const ray = new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(1.05, 0.65, 0), new THREE.Vector3(2.7, 0.65 + i * 0.18, 0)]), new THREE.LineBasicMaterial({ color: accent })); root.add(ray); }
    } else if (experiment.id === "brewster") {
      addBox([2, 0.25, 1.4], [-0.5, 0.3, 0], metal); const slab = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.12, 1.2), luminous); slab.rotation.z = deg(values.angle - 45); slab.position.set(-0.5, 0.55, 0); root.add(slab);
      const ray = new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(-2, 1.8, 0), new THREE.Vector3(-0.5, 0.6, 0), new THREE.Vector3(1.7, 0.6, 0)]), new THREE.LineBasicMaterial({ color: accent, linewidth: 2 })); root.add(ray);
    } else if (experiment.id === "fresnel") {
      addBox([0.3, 1.6, 1.5], [-1.4, 0.7, 0], luminous); const screen = addBox([0.12, 2, 2], [1.5, 0.9, 0], metal);
      for (let i = -5; i <= 5; i += 1) { const ray = new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(-1.2, 0.7, 0), new THREE.Vector3(1.45, 0.9 + i * 0.12, 0)]), new THREE.LineBasicMaterial({ color: accent, transparent: true, opacity: 0.55 })); root.add(ray); }
      screen.material = new THREE.MeshStandardMaterial({ color: accent, emissive: accent, emissiveIntensity: 0.45, transparent: true, opacity: 0.32 });
    } else if (experiment.id === "stefan") {
      const emitter = new THREE.Mesh(new THREE.SphereGeometry(0.65, 32, 32), luminous); emitter.position.set(-0.8, 0.75, 0); root.add(emitter);
      for (let i = 0; i < 8; i += 1) { const ray = new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(-0.2, 0.75, 0), new THREE.Vector3(1.8, 0.75 + (i - 4) * 0.22, 0)]), new THREE.LineBasicMaterial({ color: accent, transparent: true, opacity: 0.7 })); root.add(ray); }
      addBox([1, 1.1, 1], [1.2, 0.55, 0], dark);
    } else {
      const core = addBox([1.3, 0.9, 0.9], [0, 0.65, 0], metal); const coil = new THREE.Mesh(new THREE.TorusGeometry(1.1, 0.1, 16, 64), luminous); coil.rotation.x = Math.PI / 2; coil.position.set(0, 0.65, 0); root.add(coil); addBox([0.9, 1.2, 0.8], [-1.7, 0.7, 0]); addBox([0.9, 1.2, 0.8], [1.7, 0.7, 0]);
    }
    scene.add(root); scene.add(new THREE.HemisphereLight("#d5efff", "#172235", 2.4)); const light = new THREE.DirectionalLight(accent, 3); light.position.set(4, 5, 4); scene.add(light);
    const resize = () => { const width = mount.clientWidth; const height = mount.clientHeight; camera.aspect = width / height; camera.updateProjectionMatrix(); renderer.setSize(width, height, false); };
    resize(); window.addEventListener("resize", resize);
    let frame = 0; let dragging = false; let lastX = 0; let lastY = 0;
    const pointerDown = (event) => { dragging = true; lastX = event.clientX; lastY = event.clientY; renderer.domElement.setPointerCapture(event.pointerId); };
    const pointerMove = (event) => { if (!dragging) return; root.rotation.y += (event.clientX - lastX) * 0.01; root.rotation.x = Math.max(-0.55, Math.min(0.55, root.rotation.x + (event.clientY - lastY) * 0.006)); lastX = event.clientX; lastY = event.clientY; };
    const pointerUp = () => { dragging = false; };
    const wheel = (event) => { event.preventDefault(); camera.position.z = Math.max(3.8, Math.min(9, camera.position.z + event.deltaY * 0.004)); };
    renderer.domElement.addEventListener("pointerdown", pointerDown); renderer.domElement.addEventListener("pointermove", pointerMove); renderer.domElement.addEventListener("pointerup", pointerUp); renderer.domElement.addEventListener("pointercancel", pointerUp); renderer.domElement.addEventListener("wheel", wheel, { passive: false });
    const animate = () => { if (running && !dragging) root.rotation.y += 0.003; renderer.render(scene, camera); frame = requestAnimationFrame(animate); }; animate();
    return () => { cancelAnimationFrame(frame); window.removeEventListener("resize", resize); renderer.domElement.removeEventListener("pointerdown", pointerDown); renderer.domElement.removeEventListener("pointermove", pointerMove); renderer.domElement.removeEventListener("pointerup", pointerUp); renderer.domElement.removeEventListener("pointercancel", pointerUp); renderer.domElement.removeEventListener("wheel", wheel); renderer.dispose(); mount.removeChild(renderer.domElement); };
  }, [experiment.id, values.angle, running]);
  return <div ref={mountRef} className="three-canvas" aria-label={`${experiment.name} interactive apparatus`} />;
}

function deg(value) { return (value * Math.PI) / 180; }

function Plot({ plot, accent }) {
  const maxX = Math.max(...plot.points.map((point) => point.x)); const minX = Math.min(...plot.points.map((point) => point.x)); const maxY = Math.max(...plot.points.map((point) => point.y), 0); const minY = Math.min(...plot.points.map((point) => point.y), 0);
  const x = (value) => 8 + ((value - minX) / Math.max(maxX - minX, 1e-9)) * 84; const y = (value) => 88 - ((value - minY) / Math.max(maxY - minY, 1e-9)) * 76; const points = plot.points.map((point) => `${x(point.x)},${y(point.y)}`).join(" ");
  return <div className="plot-wrap"><svg viewBox="0 0 100 100" role="img" aria-label={`${plot.yLabel} against ${plot.xLabel}`}><path d="M8 5V88H96" fill="none" stroke="#385169" strokeWidth=".6" /><polyline points={points} fill="none" stroke={accent} strokeWidth="2" vectorEffect="non-scaling-stroke" /><g fill={accent}>{plot.points.map((point) => <circle key={`${point.x}-${point.y}`} cx={x(point.x)} cy={y(point.y)} r="1.5" />)}</g></svg><div className="plot-axis"><span>{plot.xLabel}</span><span>{plot.yLabel}</span></div></div>;
}

function Field({ spec, value, onChange }) {
  const [key, label, unit, min, max, step] = spec;
  return <label className="field"><span>{label}{unit && <small>{unit}</small>}</span><input aria-label={label} type="number" min={min} max={max} step={step} value={value} onChange={(event) => onChange(key, event.target.value)} /><input aria-label={`${label} slider`} className="range" type="range" min={min} max={max} step={step} value={value} onChange={(event) => onChange(key, event.target.value)} /></label>;
}

function App() {
  const [selected, setSelected] = useState("bandgap"); const [values, setValues] = useState(defaults.bandgap); const [records, setRecords] = useState([]); const [running, setRunning] = useState(true); const [menuOpen, setMenuOpen] = useState(false);
  const experiment = experiments.find((item) => item.id === selected); const spec = experimentSpecs[selected]; const result = calculate(selected, values); const grouped = useMemo(() => experiments.reduce((accumulator, item) => { (accumulator[item.category] ||= []).push(item); return accumulator; }, {}), []);
  const update = (key, value) => setValues((previous) => ({ ...previous, [key]: Number(value) })); const selectExperiment = (id) => { setSelected(id); setValues({ ...defaults[id] }); setRecords([]); setMenuOpen(false); }; const record = () => setRecords((previous) => [...previous, { ...result, time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) }]);
  const Icon = experiment.icon;
  return <div className="app-shell"><aside className={`sidebar ${menuOpen ? "open" : ""}`}><div className="brand"><div className="brand-mark"><FlaskConical size={18} /></div><div><strong>ORBIT<span>LAB</span></strong><small>Physics virtual laboratory</small></div><button className="close-menu" onClick={() => setMenuOpen(false)}><X size={18} /></button></div><div className="side-label">EXPERIMENTS <span>08</span></div><nav>{Object.entries(grouped).map(([category, items]) => <div className="nav-group" key={category}><p>{category}</p>{items.map((item) => { const ItemIcon = item.icon; return <button className={selected === item.id ? "active" : ""} key={item.id} onClick={() => selectExperiment(item.id)}><span className="nav-index">{item.index}</span><ItemIcon size={16} /><span>{item.name}<small>{item.short}</small></span>{selected === item.id && <ChevronRight className="nav-arrow" size={16} />}</button>; })}</div>)}</nav><div className="sidebar-bottom"><button><BookOpen size={16} /> Lab manual</button><button><CircleHelp size={16} /> How it works</button></div></aside><main className="main"><header className="topbar"><button className="menu-button" onClick={() => setMenuOpen(true)}><Menu size={20} /></button><div className="breadcrumb"><span>LAB {experiment.index}</span><ChevronRight size={14} /><b>{experiment.name}</b></div><div className="top-actions"><span className={`session ${running ? "live" : ""}`}><i /> {running ? "simulation live" : "simulation paused"}</span><button className="icon-button" aria-label="Help"><Info size={18} /></button></div></header><div className="content"><section className="intro"><div><div className="title-line"><div className="experiment-icon" style={{ color: experiment.accent, background: `${experiment.accent}18` }}><Icon size={20} /></div><span className="eyebrow">B.TECH PHYSICS · {experiment.category.toUpperCase()}</span></div><h1>{experiment.name}</h1><p>{experiment.description}</p></div><div className="intro-actions"><button className="ghost-button" onClick={() => setRunning((value) => !value)}><Play size={16} fill={running ? "currentColor" : "none"} /> {running ? "Pause simulation" : "Run simulation"}</button><button className="primary-button" onClick={() => setValues({ ...defaults[selected] })}><RotateCcw size={16} /> Reset inputs</button></div></section><div className="workspace-grid"><div className="left-column"><div className="apparatus"><div className="apparatus-top"><span className="eyebrow">EXPERIMENT-SPECIFIC 3D BENCH</span><span className="scene-status"><i /> {running ? "interactive" : "paused"}</span></div><div className="scene"><Scene experiment={experiment} values={values} running={running} /><div className="scene-overlay"><span className="scene-caption"><strong>{experiment.name}</strong><small>Drag-ready procedural apparatus · no external assets</small></span><span className="scene-readout">{result.value}<small>{result.unit}</small></span></div></div><div className="apparatus-footer"><span><i className="dot cyan" /> Scene changes with experiment</span><span><i className="dot amber" /> Inputs are editable</span><button onClick={() => setRunning(false)}><RotateCcw size={14} /> Pause orbit</button></div></div><section className="panel measurement-panel"><div className="panel-heading"><div><span className="eyebrow">OBSERVATION GRAPH</span><h2>{result.plot.yLabel}</h2></div><span className="record-count">{records.length.toString().padStart(2, "0")} readings</span></div><Plot plot={result.plot} accent={experiment.accent} /><div className="reading-table"><div className="table-head"><span>Reading</span><span>Result</span><span>Error</span></div>{records.length ? records.slice(-5).reverse().map((recordItem, index) => <div className="table-row" key={`${recordItem.time}-${index}`}><span><i style={{ background: experiment.accent }} /> #{records.length - index}</span><span>{recordItem.value} {recordItem.unit}</span><span>± {recordItem.error}</span></div>) : <div className="empty-row"><Table2 size={16} /> Enter values, then record observations to build your table.</div>}</div></section></div><div className="right-column"><section className="panel controls-panel"><div className="panel-heading"><div><span className="eyebrow">MEASUREMENT INPUTS</span><h2>Enter apparatus readings</h2></div><SlidersHorizontal size={18} /></div><div className="field-stack">{spec.fields.map((field) => <Field key={field[0]} spec={field} value={values[field[0]]} onChange={update} />)}</div><div className="formula-box"><span>Working equation</span><strong>{experiment.formula}</strong><small>Computed from your entered values. Error is a first-order estimate from instrument uncertainty.</small></div><div className="result-row"><div><span>{result.label}</span><strong>{result.value} <small>{result.unit}</small></strong><em className="error">± {result.error} {result.unit}</em>{result.secondary && <small className="secondary">{result.secondary}</small>}</div><button className="primary-button" onClick={record}><Save size={16} /> Record observation</button></div></section><section className="panel notes-panel"><div className="panel-heading"><div><span className="eyebrow">PROCEDURE GUIDE</span><h2>Observe the trend</h2></div><Sparkles size={17} /></div><p>These interactions follow the standard apparatus flow shown in undergraduate virtual-lab demonstrations: set one instrument, observe the response, record a reading, and compare the graph with the theory.</p><div className="tip"><span>01</span><b>Change one variable</b><small>Keep other readings fixed to see a clean relationship.</small></div><div className="tip"><span>02</span><b>Record multiple observations</b><small>Use at least three readings before interpreting a slope or loop.</small></div></section></div></div></div></main></div>;
}

if (typeof document !== "undefined") createRoot(document.getElementById("root")).render(<App />);
