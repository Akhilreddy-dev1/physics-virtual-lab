import React, { useEffect, useMemo, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Activity, Atom, BookOpen, ChevronRight, CircleHelp, FlaskConical, Gauge,
  Info, Layers3, Menu, Play, RotateCcw, Save, SlidersHorizontal, Sparkles,
  Table2, Thermometer, Waves, X
} from "lucide-react";
import * as THREE from "three";
import "./styles.css";

export const experiments = [
  { id: "bandgap", index: "01", name: "Semiconductor band gap", short: "Four-probe setup", icon: Atom, accent: "#79e5c4", category: "Electronic materials", formula: "ρ = 2πs(V/I)F · lnρ = lnρ₀ + Eᵍ/(2kᵦT)", units: "eV", description: "Estimate the forbidden energy gap from the temperature dependence of a semiconductor's resistivity." },
  { id: "hall", index: "02", name: "Hall effect", short: "Carrier density & sign", icon: Activity, accent: "#8bb9ff", category: "Electronic materials", formula: "Vᴴ = RᴴIB/t · Rᴴ = 1/(nq)", units: "m⁻³", description: "Resolve carrier type, Hall coefficient, and concentration from a transverse voltage." },
  { id: "lee", index: "03", name: "Lee's method", short: "Thermal conductivity", icon: Thermometer, accent: "#ffbd7a", category: "Thermal physics", formula: "K = mc|dT/dt|L / A(Tₕ − T𝚌)", units: "W m⁻¹ K⁻¹", description: "Measure the thermal conductivity of a poor conductor using a steady-state disc." },
  { id: "grating", index: "04", name: "Diffraction grating", short: "Wavelength", icon: Waves, accent: "#dc9cff", category: "Optics", formula: "d sinθ = nλ", units: "nm", description: "Use angular separation of spectral orders to determine laser wavelength." },
  { id: "brewster", index: "05", name: "Brewster angle", short: "Glass refractive index", icon: Sparkles, accent: "#f7de77", category: "Optics", formula: "tanθᴮ = n₂/n₁", units: "index", description: "Find the refractive index of glass using a He-Ne laser and p-polarised reflection." },
  { id: "fresnel", index: "06", name: "Fresnel diffraction", short: "Near-field optics", icon: Layers3, accent: "#74d8f4", category: "Optics", formula: "Nᶠ = a²/(λz)", units: "dimensionless", description: "Explore the transition between geometrical and wave optics in the near field." },
  { id: "stefan", index: "07", name: "Stefan's law", short: "Thermal radiation", icon: Gauge, accent: "#ff8e86", category: "Thermal physics", formula: "P = εσA(T⁴ − Tₐ⁴)", units: "W", description: "Verify radiated power scales with the fourth power of absolute temperature." },
  { id: "hysteresis", index: "08", name: "Hysteresis / B–H curve", short: "Energy loss", icon: Activity, accent: "#a9a7ff", category: "Magnetism", formula: "W = ∮ H dB", units: "J m⁻³", description: "Trace a magnetic hysteresis loop and calculate energy loss per cycle." }
];

export const defaults = {
  bandgap: { temperature: 330, current: 12, voltage: 0.184 },
  hall: { current: 0.8, field: 0.16, thickness: 0.001, voltage: 0.0024 },
  lee: { mass: 0.42, heatCapacity: 385, slope: 0.00042, length: 0.006, area: 0.0028, hot: 88, cold: 31 },
  grating: { lineDensity: 600, angle: 21.3, order: 1 },
  brewster: { angle: 56.3, wavelength: 632.8, incident: 1 },
  fresnel: { aperture: 0.004, wavelength: 632.8e-9, distance: 0.24 },
  stefan: { emissivity: 0.92, area: 0.012, temperature: 480, ambient: 295 },
  hysteresis: { amplitude: 1.2, coercivity: 0.18, remanence: 0.62, turns: 120 }
};

export function calculate(id, values) {
  const kB = 8.617333262e-5;
  const sigma = 5.670374419e-8;
  if (id === "bandgap") return { value: (2 * kB * values.temperature * Math.log(1 + values.voltage * 20)).toFixed(3), label: "Estimated Eᵍ" };
  if (id === "hall") return { value: ((values.voltage * values.thickness) / (values.current * values.field) * 1e6).toFixed(2), label: "Hall coefficient × 10⁶" };
  if (id === "lee") return { value: ((values.mass * values.heatCapacity * values.slope * values.length) / (values.area * Math.max(values.hot - values.cold, 1))).toFixed(4), label: "Thermal conductivity" };
  if (id === "grating") return { value: ((1 / (values.lineDensity * 1e3)) * Math.sin(values.angle * Math.PI / 180) / values.order * 1e9).toFixed(1), label: "Wavelength" };
  if (id === "brewster") return { value: Math.tan(values.angle * Math.PI / 180).toFixed(3), label: "Refractive index" };
  if (id === "fresnel") return { value: (values.aperture ** 2 / (values.wavelength * values.distance)).toFixed(2), label: "Fresnel number" };
  if (id === "stefan") return { value: (values.emissivity * sigma * values.area * (values.temperature ** 4 - values.ambient ** 4)).toFixed(3), label: "Net radiated power" };
  return { value: (2 * values.amplitude * values.coercivity * (1 + values.remanence)).toFixed(3), label: "Loop area estimate" };
}

function ThreeScene({ experiment, values }) {
  const mountRef = useRef(null);
  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#0b1727");
    const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
    camera.position.set(5.2, 4.4, 6.2);
    camera.lookAt(0, 0.4, 0);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);
    const group = new THREE.Group();
    const accent = new THREE.Color(experiment.accent);
    const metal = new THREE.MeshStandardMaterial({ color: "#b9cad6", metalness: 0.65, roughness: 0.28 });
    const dark = new THREE.MeshStandardMaterial({ color: "#17273a", metalness: 0.2, roughness: 0.55 });
    const glow = new THREE.MeshStandardMaterial({ color: accent, emissive: accent, emissiveIntensity: 1.2 });
    const bench = new THREE.Mesh(new THREE.BoxGeometry(6.6, 0.18, 4.2), new THREE.MeshStandardMaterial({ color: "#172a39", roughness: 0.72 }));
    bench.position.y = -0.15; group.add(bench);
    const base = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.48, 1.35), dark);
    base.position.set(-0.75, 0.45, 0); group.add(base);
    const top = new THREE.Mesh(new THREE.BoxGeometry(1.7, 0.12, 1.05), metal);
    top.position.set(-0.75, 0.75, 0); group.add(top);
    for (let i = 0; i < 4; i += 1) {
      const probe = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.055, 0.52, 16), glow);
      probe.position.set(-1.35 + i * 0.4, 0.98, 0);
      group.add(probe);
    }
    const meter = new THREE.Mesh(new THREE.BoxGeometry(1.3, 1.15, 0.62), dark);
    meter.position.set(1.25, 0.62, 0.15); group.add(meter);
    const screen = new THREE.Mesh(new THREE.BoxGeometry(0.78, 0.42, 0.03), glow);
    screen.position.set(1.25, 0.76, -0.18); group.add(screen);
    const coil = new THREE.Mesh(new THREE.TorusGeometry(0.74, 0.09, 14, 48, Math.PI * 1.75), new THREE.MeshStandardMaterial({ color: accent, emissive: accent, emissiveIntensity: 0.45 }));
    coil.rotation.x = Math.PI / 2; coil.position.set(0.2, 0.82, 0.2); group.add(coil);
    const cableMaterial = new THREE.LineBasicMaterial({ color: accent, transparent: true, opacity: 0.8 });
    const cablePoints = [new THREE.Vector3(-0.1, 0.82, 0), new THREE.Vector3(0.3, 1.35, 0), new THREE.Vector3(1.0, 1.35, 0), new THREE.Vector3(1.25, 0.9, 0)];
    group.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(cablePoints), cableMaterial));
    scene.add(group);
    scene.add(new THREE.HemisphereLight("#c7e9ff", "#172235", 2.8));
    const key = new THREE.DirectionalLight(accent, 3.2); key.position.set(3, 5, 4); scene.add(key);
    const resize = () => { const width = mount.clientWidth; const height = mount.clientHeight; camera.aspect = width / height; camera.updateProjectionMatrix(); renderer.setSize(width, height, false); };
    resize();
    const onResize = () => resize();
    window.addEventListener("resize", onResize);
    let frame = 0;
    const animate = () => { group.rotation.y += 0.0018; renderer.render(scene, camera); frame = requestAnimationFrame(animate); };
    animate();
    return () => { cancelAnimationFrame(frame); window.removeEventListener("resize", onResize); renderer.dispose(); mount.removeChild(renderer.domElement); };
  }, [experiment, values]);
  return <div ref={mountRef} className="three-canvas" aria-label={`${experiment.name} procedural 3D apparatus`} />;
}

function Apparatus({ experiment, values }) {
  const result = calculate(experiment.id, values);
  return <div className="apparatus"><div className="apparatus-top"><span className="eyebrow">LIVE 3D BENCH</span><span className="scene-status"><i /> procedural geometry</span></div><div className="scene"><ThreeScene experiment={experiment} values={values} /><div className="scene-overlay"><span className="scene-caption"><strong>{experiment.name}</strong><small>Interactive apparatus preview</small></span><span className="scene-readout">{result.value}<small>{experiment.units}</small></span></div></div><div className="apparatus-footer"><span><i className="dot cyan" /> Auto-orbit enabled</span><span><i className="dot amber" /> Simulated measurements</span><button aria-label="Reset camera"><RotateCcw size={14} /> Reset view</button></div></div>;
}

function Control({ label, value, min, max, step = 1, unit, onChange }) {
  return <label className="control"><span><b>{label}</b><em>{value}{unit && <small>{unit}</small>}</em></span><input type="range" min={min} max={max} step={step} value={value} onChange={(event) => onChange(Number(event.target.value))} /></label>;
}

function ExperimentPanel({ experiment, values, setValues, onRecord }) {
  const result = calculate(experiment.id, values);
  const set = (key) => (value) => setValues((previous) => ({ ...previous, [key]: value }));
  const controls = {
    bandgap: <><Control label="Sample temperature" value={values.temperature} min={280} max={420} unit=" K" onChange={set("temperature")} /><Control label="Probe current" value={values.current} min={1} max={30} unit=" mA" onChange={set("current")} /><Control label="Probe voltage" value={values.voltage} min={0.05} max={0.6} step={0.001} unit=" V" onChange={set("voltage")} /></>,
    hall: <><Control label="Magnetic field" value={values.field} min={0.01} max={0.4} step={0.01} unit=" T" onChange={set("field")} /><Control label="Drive current" value={values.current} min={0.1} max={2} step={0.1} unit=" A" onChange={set("current")} /><Control label="Hall voltage" value={values.voltage} min={0.0001} max={0.01} step={0.0001} unit=" V" onChange={set("voltage")} /></>,
    lee: <><Control label="Hot disc temperature" value={values.hot} min={50} max={130} unit=" °C" onChange={set("hot")} /><Control label="Cold disc temperature" value={values.cold} min={20} max={70} unit=" °C" onChange={set("cold")} /><Control label="Cooling slope" value={values.slope} min={0.0001} max={0.001} step={0.00001} unit=" K/s" onChange={set("slope")} /></>,
    grating: <><Control label="Grating lines" value={values.lineDensity} min={300} max={1200} unit=" /mm" onChange={set("lineDensity")} /><Control label="Diffraction angle" value={values.angle} min={5} max={45} step={0.1} unit=" °" onChange={set("angle")} /><Control label="Order" value={values.order} min={1} max={3} onChange={set("order")} /></>,
    brewster: <><Control label="Polariser angle" value={values.angle} min={35} max={75} step={0.1} unit=" °" onChange={set("angle")} /><Control label="Laser wavelength" value={values.wavelength} min={400} max={700} step={0.1} unit=" nm" onChange={set("wavelength")} /></>,
    fresnel: <><Control label="Aperture radius" value={values.aperture * 1000} min={1} max={12} step={0.1} unit=" mm" onChange={(value) => set("aperture")(value / 1000)} /><Control label="Screen distance" value={values.distance * 100} min={5} max={80} unit=" cm" onChange={(value) => set("distance")(value / 100)} /><Control label="Wavelength" value={values.wavelength * 1e9} min={400} max={700} step={0.1} unit=" nm" onChange={(value) => set("wavelength")(value * 1e-9)} /></>,
    stefan: <><Control label="Emitter temperature" value={values.temperature} min={300} max={900} unit=" K" onChange={set("temperature")} /><Control label="Emissivity" value={values.emissivity} min={0.1} max={1} step={0.01} onChange={set("emissivity")} /><Control label="Surface area" value={values.area * 1e4} min={10} max={300} unit=" cm²" onChange={(value) => set("area")(value / 1e4)} /></>,
    hysteresis: <><Control label="Field amplitude" value={values.amplitude} min={0.2} max={3} step={0.1} unit=" kA/m" onChange={set("amplitude")} /><Control label="Coercivity" value={values.coercivity} min={0.02} max={0.8} step={0.01} unit=" kA/m" onChange={set("coercivity")} /><Control label="Remanence" value={values.remanence} min={0.1} max={1} step={0.01} unit=" T" onChange={set("remanence")} /></>
  }[experiment.id];
  return <section className="panel controls-panel"><div className="panel-heading"><div><span className="eyebrow">EXPERIMENT CONTROLS</span><h2>{experiment.name}</h2></div><SlidersHorizontal size={18} /></div><div className="control-stack">{controls}</div><div className="formula-box"><span>Working equation</span><strong>{experiment.formula}</strong><small>Values are simulated for learning; calibrate against your apparatus in a real lab.</small></div><div className="result-row"><div><span>{result.label}</span><strong>{result.value} <small>{experiment.units}</small></strong></div><button className="primary-button" onClick={onRecord}><Save size={16} /> Record reading</button></div></section>;
}

function Chart({ records, accent }) {
  const points = records.length ? records.map((record, index) => `${index * (100 / Math.max(records.length - 1, 1))},${84 - (Number(record.value) % 10) * 5}`).join(" ") : "0,76 18,64 36,68 54,44 72,51 100,22";
  return <div className="chart"><svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-label="Recorded readings chart"><defs><linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor={accent} stopOpacity=".28" /><stop offset="1" stopColor={accent} stopOpacity="0" /></linearGradient></defs><path d={`M ${points} L 100,100 L 0,100 Z`} fill="url(#chartFill)" /><polyline points={points} fill="none" stroke={accent} strokeWidth="1.8" vectorEffect="non-scaling-stroke" /></svg><div className="chart-labels"><span>start</span><span>time →</span><span>latest</span></div></div>;
}

export function App() {
  const [selected, setSelected] = useState("bandgap");
  const [values, setValues] = useState(defaults.bandgap);
  const [records, setRecords] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const experiment = experiments.find((item) => item.id === selected);
  const Icon = experiment.icon;
  const grouped = useMemo(() => experiments.reduce((accumulator, item) => { (accumulator[item.category] ||= []).push(item); return accumulator; }, {}), []);
  const selectExperiment = (id) => { setSelected(id); setValues(defaults[id]); setRecords([]); setMenuOpen(false); };
  const record = () => setRecords((previous) => [...previous, { value: calculate(experiment.id, values).value, time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) }]);
  return <div className="app-shell">
    <aside className={`sidebar ${menuOpen ? "open" : ""}`}><div className="brand"><div className="brand-mark"><FlaskConical size={18} /></div><div><strong>ORBIT<span>LAB</span></strong><small>Physics virtual laboratory</small></div><button className="close-menu" onClick={() => setMenuOpen(false)}><X size={18} /></button></div><div className="side-label">EXPERIMENTS <span>08</span></div><nav>{Object.entries(grouped).map(([category, items]) => <div className="nav-group" key={category}><p>{category}</p>{items.map((item) => { const ItemIcon = item.icon; return <button className={selected === item.id ? "active" : ""} key={item.id} onClick={() => selectExperiment(item.id)}><span className="nav-index">{item.index}</span><ItemIcon size={16} /><span>{item.name}<small>{item.short}</small></span>{selected === item.id && <ChevronRight className="nav-arrow" size={16} />}</button>; })}</div>)}</nav><div className="sidebar-bottom"><button><BookOpen size={16} /> Lab manual</button><button><CircleHelp size={16} /> How it works</button><div className="profile"><div className="avatar">AP</div><span><b>AP</b><small>Student workspace</small></span><span className="online" /></div></div></aside>
    <main className="main"><header className="topbar"><button className="menu-button" onClick={() => setMenuOpen(true)}><Menu size={20} /></button><div className="breadcrumb"><span>LAB 01</span><ChevronRight size={14} /><b>{experiment.name}</b></div><div className="top-actions"><span className="session"><i /> session saved</span><button className="icon-button" aria-label="Help"><Info size={18} /></button></div></header>
      <div className="content"><section className="intro"><div><div className="title-line"><div className="experiment-icon" style={{ color: experiment.accent, background: `${experiment.accent}18` }}><Icon size={20} /></div><span className="eyebrow">B.TECH PHYSICS · {experiment.category.toUpperCase()}</span></div><h1>{experiment.name}</h1><p>{experiment.description}</p></div><div className="intro-actions"><button className="ghost-button"><BookOpen size={16} /> Procedure</button><button className="primary-button"><Play size={16} fill="currentColor" /> Start simulation</button></div></section>
      <div className="workspace-grid"><div className="left-column"><Apparatus experiment={experiment} values={values} /><section className="panel measurement-panel"><div className="panel-heading"><div><span className="eyebrow">MEASUREMENT LOG</span><h2>Live readings</h2></div><span className="record-count">{records.length.toString().padStart(2, "0")} readings</span></div><Chart records={records} accent={experiment.accent} /><div className="reading-table"><div className="table-head"><span>Reading</span><span>Value</span><span>Timestamp</span></div>{records.length ? records.slice(-3).reverse().map((record, index) => <div className="table-row" key={`${record.time}-${index}`}><span><i style={{ background: experiment.accent }} /> #{records.length - index}</span><span>{record.value} <small>{experiment.units}</small></span><span>{record.time}</span></div>) : <div className="empty-row"><Table2 size={16} /> Record a reading to populate your observation table.</div>}</div></section></div><div className="right-column"><ExperimentPanel experiment={experiment} values={values} setValues={setValues} onRecord={record} /><section className="panel notes-panel"><div className="panel-heading"><div><span className="eyebrow">LEARNING NOTE</span><h2>What to observe</h2></div><Sparkles size={17} /></div><p>Change one variable at a time and record enough readings to reveal the trend. The scene uses procedural geometry to show the key apparatus and measurement path.</p><div className="tip"><span>01</span><b>Keep the circuit steady</b><small>Allow the sample to settle before recording.</small></div><div className="tip"><span>02</span><b>Compare against theory</b><small>Use the chart to identify linear regions.</small></div></section></div></div></div>
    </main>
  </div>;
}

if (typeof document !== "undefined") {
  createRoot(document.getElementById("root")).render(<App />);
}
