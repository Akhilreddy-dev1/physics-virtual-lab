const KB = 8.617333262e-5;
const SIGMA = 5.670374419e-8;

const deg = (value) => (value * Math.PI) / 180;
const round = (value, digits = 4) => Number(value.toFixed(digits));
const safe = (value, fallback = 0) => (Number.isFinite(Number(value)) ? Number(value) : fallback);

export const experimentSpecs = {
  bandgap: {
    fields: [
      ["temperature", "Sample temperature", "K", 300, 450, 1],
      ["current", "Probe current", "mA", 1, 50, 0.1],
      ["voltage", "Probe voltage", "V", 0.001, 2, 0.001],
      ["spacing", "Probe spacing", "m", 0.001, 0.1, 0.001],
      ["correction", "Geometric correction F", "", 0.1, 5, 0.01]
    ],
    calculate(values) {
      const T = safe(values.temperature, 330);
      const I = safe(values.current, 12) / 1000;
      const V = safe(values.voltage, 0.184);
      const rho = 2 * Math.PI * safe(values.spacing, 0.02) * (V / Math.max(I, 1e-9)) * safe(values.correction, 1);
      const eg = 2 * KB * T * Math.log(Math.max(rho, 1.0001) * 100);
      const error = Math.abs(eg) * Math.sqrt((0.002 / Math.max(V, 1e-9)) ** 2 + (0.0001 / Math.max(I, 1e-9)) ** 2);
      const points = [300, 320, 340, 360, 380, 400].map((temperature) => ({ x: temperature, y: round(eg * (T / temperature), 4) }));
      return { value: round(eg, 4), unit: "eV", label: "Band gap Eg", error: round(error, 4), plot: { xLabel: "Temperature (K)", yLabel: "Eg estimate (eV)", points } };
    }
  },
  hall: {
    fields: [
      ["current", "Drive current", "A", 0.01, 5, 0.01],
      ["field", "Magnetic field B", "T", 0.001, 2, 0.001],
      ["thickness", "Sample thickness", "m", 0.0001, 0.01, 0.0001],
      ["voltage", "Hall voltage VH", "mV", -100, 100, 0.01]
    ],
    calculate(values) {
      const I = safe(values.current, 0.8);
      const B = safe(values.field, 0.16);
      const t = safe(values.thickness, 0.001);
      const vh = safe(values.voltage, 2.4) / 1000;
      const rh = (vh * t) / Math.max(I * B, 1e-12);
      const n = 1 / Math.max(Math.abs(rh) * 1.602e-19, 1e-30);
      const error = Math.abs(n) * Math.sqrt((0.01 / Math.max(Math.abs(vh), 1e-9)) ** 2 + (0.001 / Math.max(I, 1e-9)) ** 2);
      const points = [0.05, 0.1, 0.15, 0.2, 0.25, 0.3].map((field) => ({ x: field, y: round((rh * I * field / t) * 1000, 3) }));
      return { value: round(n / 1e20, 3), unit: "×10²⁰ m⁻³", secondary: `${rh.toExponential(3)} m³/C`, label: "Carrier concentration", error: round(error / 1e20, 3), plot: { xLabel: "Magnetic field (T)", yLabel: "Hall voltage (mV)", points } };
    }
  },
  lee: {
    fields: [
      ["mass", "Disc mass", "kg", 0.05, 2, 0.01],
      ["heatCapacity", "Disc heat capacity", "J/kg K", 100, 1000, 1],
      ["slope", "Cooling slope |dT/dt|", "K/s", 0.00001, 0.01, 0.00001],
      ["length", "Specimen thickness", "m", 0.001, 0.05, 0.001],
      ["area", "Specimen area", "m²", 0.0001, 0.02, 0.0001],
      ["hot", "Hot disc temperature", "°C", 40, 150, 0.1],
      ["cold", "Cold disc temperature", "°C", 20, 100, 0.1]
    ],
    calculate(values) {
      const delta = Math.max(safe(values.hot, 88) - safe(values.cold, 31), 0.1);
      const conductivity = safe(values.mass, 0.42) * safe(values.heatCapacity, 385) * safe(values.slope, 0.00042) * safe(values.length, 0.006) / (safe(values.area, 0.0028) * delta);
      const error = Math.abs(conductivity) * 0.05;
      const points = [35, 45, 55, 65, 75, 85].map((cold) => ({ x: cold, y: round(conductivity * delta / Math.max(safe(values.hot, 88) - cold, 1), 4) }));
      return { value: round(conductivity, 4), unit: "W m⁻¹ K⁻¹", label: "Thermal conductivity K", error: round(error, 4), plot: { xLabel: "Cold disc temperature (°C)", yLabel: "K (W m⁻¹ K⁻¹)", points } };
    }
  },
  grating: {
    fields: [
      ["lineDensity", "Grating lines", "lines/mm", 100, 1800, 1],
      ["angle", "Diffraction angle", "°", 1, 80, 0.1],
      ["order", "Diffraction order", "n", 1, 4, 1]
    ],
    calculate(values) {
      const wavelength = (Math.sin(deg(safe(values.angle, 21.3))) / (safe(values.lineDensity, 600) * 1000 * safe(values.order, 1))) * 1e9;
      const error = Math.abs(wavelength) * deg(0.1) / Math.max(Math.tan(deg(safe(values.angle, 21.3))), 0.01);
      const points = [10, 15, 20, 25, 30, 35].map((angle) => ({ x: angle, y: round((Math.sin(deg(angle)) / (safe(values.lineDensity, 600) * 1000 * safe(values.order, 1))) * 1e9, 1) }));
      return { value: round(wavelength, 2), unit: "nm", label: "Laser wavelength λ", error: round(error, 2), plot: { xLabel: "Angle (°)", yLabel: "Wavelength (nm)", points } };
    }
  },
  brewster: {
    fields: [
      ["angle", "Brewster angle", "°", 1, 89, 0.1],
      ["wavelength", "Laser wavelength", "nm", 400, 700, 0.1],
      ["incident", "Incident intensity", "mW", 0.1, 100, 0.1]
    ],
    calculate(values) {
      const angle = safe(values.angle, 56.3);
      const refractiveIndex = Math.tan(deg(angle));
      const error = Math.abs(1 / Math.cos(deg(angle)) ** 2) * deg(0.1);
      const points = [40, 45, 50, 55, 60, 65].map((x) => ({ x, y: round(Math.abs(Math.tan(deg(x)) - refractiveIndex), 3) }));
      return { value: round(refractiveIndex, 4), unit: "index", label: "Glass refractive index n", error: round(error, 4), plot: { xLabel: "Polariser angle (°)", yLabel: "|n(θ) − nB|", points } };
    }
  },
  fresnel: {
    fields: [
      ["aperture", "Aperture radius", "mm", 0.2, 20, 0.1],
      ["wavelength", "Wavelength", "nm", 400, 700, 0.1],
      ["distance", "Screen distance", "cm", 1, 100, 0.1]
    ],
    calculate(values) {
      const a = safe(values.aperture, 4) / 1000;
      const wavelength = safe(values.wavelength, 632.8) * 1e-9;
      const z = safe(values.distance, 24) / 100;
      const fresnel = (a * a) / (wavelength * z);
      const error = Math.abs(fresnel) * 0.03;
      const points = [5, 10, 20, 30, 40, 50].map((distance) => ({ x: distance, y: round((a * a) / (wavelength * distance / 100), 2) }));
      return { value: round(fresnel, 2), unit: "dimensionless", label: "Fresnel number NF", error: round(error, 2), plot: { xLabel: "Screen distance (cm)", yLabel: "Fresnel number", points } };
    }
  },
  stefan: {
    fields: [
      ["emissivity", "Surface emissivity", "", 0.1, 1, 0.01],
      ["area", "Radiating area", "m²", 0.0001, 0.1, 0.0001],
      ["temperature", "Emitter temperature", "K", 290, 1200, 1],
      ["ambient", "Ambient temperature", "K", 200, 400, 1]
    ],
    calculate(values) {
      const power = safe(values.emissivity, 0.92) * SIGMA * safe(values.area, 0.012) * (safe(values.temperature, 480) ** 4 - safe(values.ambient, 295) ** 4);
      const error = Math.abs(power) * 0.02;
      const points = [350, 400, 450, 500, 550, 600].map((temperature) => ({ x: temperature, y: round(safe(values.emissivity, 0.92) * SIGMA * safe(values.area, 0.012) * (temperature ** 4 - safe(values.ambient, 295) ** 4), 3) }));
      return { value: round(power, 4), unit: "W", label: "Net radiated power P", error: round(error, 4), plot: { xLabel: "Emitter temperature (K)", yLabel: "Power (W)", points } };
    }
  },
  hysteresis: {
    fields: [
      ["amplitude", "Field amplitude", "kA/m", 0.1, 5, 0.01],
      ["coercivity", "Coercive field", "kA/m", 0.01, 2, 0.01],
      ["remanence", "Remanent flux density", "T", 0.01, 1.5, 0.01],
      ["turns", "Coil turns", "turns", 10, 500, 1]
    ],
    calculate(values) {
      const area = 2 * safe(values.amplitude, 1.2) * safe(values.coercivity, 0.18) * (1 + safe(values.remanence, 0.62));
      const error = Math.abs(area) * 0.05;
      const points = Array.from({ length: 25 }, (_, index) => {
        const theta = (index / 24) * Math.PI * 2;
        return { x: round(safe(values.amplitude, 1.2) * Math.sin(theta), 3), y: round(safe(values.remanence, 0.62) * Math.sin(theta) + safe(values.coercivity, 0.18) * Math.sin(2 * theta), 3) };
      });
      return { value: round(area, 4), unit: "J m⁻³/cycle", label: "Hysteresis loop area W", error: round(error, 4), plot: { xLabel: "H (kA/m)", yLabel: "B (T)", points } };
    }
  }
};

export function calculate(id, values) {
  return experimentSpecs[id].calculate(values);
}
