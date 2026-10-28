import { describe, expect, it } from "vitest";
import { calculate } from "./main.jsx";

describe("physics calculations", () => {
  it("calculates a positive four-probe band gap estimate", () => {
    const result = calculate("bandgap", { temperature: 330, voltage: 0.184 });
    expect(Number(result.value)).toBeGreaterThan(0);
    expect(result.label).toBe("Estimated Eᵍ");
  });

  it("uses the grating equation to estimate a laser wavelength", () => {
    const result = calculate("grating", { lineDensity: 600, angle: 21.3, order: 1 });
    expect(Number(result.value)).toBeGreaterThan(500);
    expect(Number(result.value)).toBeLessThan(700);
  });

  it("calculates net Stefan power above ambient", () => {
    const result = calculate("stefan", { emissivity: 0.92, area: 0.012, temperature: 480, ambient: 295 });
    expect(Number(result.value)).toBeGreaterThan(0);
  });
});
