import { cx0, r, cy0 } from "./constants";
import { Point } from "./interfaces/Point";

export const computeAngle = (i: number, samples: number): number =>
  (i * (2 * Math.PI)) / samples;

export const computePointOnCircle = (angle: number): Point => {
  const x = cx0 + r * Math.cos(angle);
  const y = cy0 + r * Math.sin(angle);
  return { x, y };
};
