import { describe, expect, it } from "vitest";
import { calculate } from "./physics";

describe("physics calculations", () => {
  it("calculates a positive four-probe band gap estimate", () => {
    const result = calculate("bandgap", { temperature: 330, current: 12, voltage: 0.184, spacing: 0.02, correction: 1 });
    expect(result.value).toBeGreaterThan(0);
    expect(result.label).toBe("Band gap Eg");
  });

  it("uses the grating equation to estimate a laser wavelength", () => {
    const result = calculate("grating", { lineDensity: 600, angle: 21.3, order: 1 });
    expect(result.value).toBeGreaterThan(500);
    expect(result.value).toBeLessThan(700);
  });

  it("calculates net Stefan power above ambient", () => {
    const result = calculate("stefan", { emissivity: 0.92, area: 0.012, temperature: 480, ambient: 295 });
    expect(result.value).toBeGreaterThan(0);
  });

  it("reports measurement error and experiment-specific plot points", () => {
    const result = calculate("hall", { current: 0.8, field: 0.16, thickness: 0.001, voltage: 2.4 });
    expect(result.error).toBeGreaterThan(0);
    expect(result.plot.points).toHaveLength(6);
    expect(result.secondary).toContain("m³/C");
  });
});
