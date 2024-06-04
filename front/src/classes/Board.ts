import { svgns } from "../constants";
import { BoardConfig } from "../interfaces/BoardConfig";
import { computeAngle, computePointOnCircle } from "../math";
import { querySelector, setAttribute } from "../misc";

export class Board {
  config: BoardConfig = {
    samples: 0,
    multiplicationFactor: 0,
  };

  clean() {
    querySelector("g.samples").innerHTML = "";
    querySelector("g.lines").innerHTML = "";
  }

  render() {
    this.clean();
    const { samples, multiplicationFactor } = this.config;

    const container = querySelector("g.samples");

    for (let i = 0; i < samples; i++) {
      const circle = document.createElementNS(svgns, "circle");

      const angle = computeAngle(i, samples);
      const { x, y } = computePointOnCircle(angle);

      setAttribute(circle, "cx", x);
      setAttribute(circle, "cy", y);
      setAttribute(circle, "r", 1);
      container.appendChild(circle);
    }

    const lineContainer = querySelector("g.lines");

    for (let i = 0; i < samples; i++) {
      const line = document.createElementNS(svgns, "line");

      const angle1 = computeAngle(i, samples);
      const angle2 = computeAngle(i * multiplicationFactor, samples);
      const { x: x1, y: y1 } = computePointOnCircle(angle1);
      const p2 = computePointOnCircle(angle2);

      setAttribute(line, "x1", x1);
      setAttribute(line, "y1", y1);
      setAttribute(line, "x2", p2.x);
      setAttribute(line, "y2", p2.y);
      lineContainer.appendChild(line);
    }
  }

  setConfig(config: BoardConfig) {
    this.config = config;
  }
}
