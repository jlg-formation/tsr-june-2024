import "./style.css";

const cx0 = 50;
const cy0 = 50;
const r = 45;

const svgns = "http://www.w3.org/2000/svg";

const samples = 10;
const multiplicationFactor = 2;

const container = document.querySelector("g.samples");
if (container === null) {
  throw new Error("oups");
}

for (let i = 0; i < samples; i++) {
  const circle = document.createElementNS(svgns, "circle");

  const angle = (i * (2 * Math.PI)) / samples;
  const x = cx0 + r * Math.cos(angle);
  const y = cy0 + r * Math.sin(angle);

  circle.setAttributeNS(null, "cx", x + "");
  circle.setAttributeNS(null, "cy", String(y));
  circle.setAttributeNS(null, "r", (1).toString());
  container.appendChild(circle);
}

const lineContainer = document.querySelector("g.lines");
if (lineContainer === null) {
  throw new Error("oups");
}

for (let i = 0; i < samples; i++) {
  const line = document.createElementNS(svgns, "line");

  const angle1 = (i * (2 * Math.PI)) / samples;
  const angle2 = multiplicationFactor * angle1;
  const x1 = cx0 + r * Math.cos(angle1);
  const y1 = cy0 + r * Math.sin(angle1);
  const x2 = cx0 + r * Math.cos(angle2);
  const y2 = cy0 + r * Math.sin(angle2);

  line.setAttributeNS(null, "x1", x1 + "");
  line.setAttributeNS(null, "x2", x2 + "");
  line.setAttributeNS(null, "y1", y1 + "");
  line.setAttributeNS(null, "y2", y2 + "");
  lineContainer.appendChild(line);
}
