import "./style.css";

const cx0 = 50;
const cy0 = 50;
const r = 45;

const svgns = "http://www.w3.org/2000/svg";

const samples = 10;

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
