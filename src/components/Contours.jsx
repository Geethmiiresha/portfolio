// Topographic contour lines: a nod to the Bandarawela hills.
// Generated once from simple sine waves, so it is always the same shape.

function ring(k, count) {
  const cx = 300;
  const cy = 300;
  const base = 40 + k * (250 / count);
  const points = [];
  const steps = 140;
  for (let i = 0; i <= steps; i++) {
    const a = (i / steps) * Math.PI * 2;
    const wobble =
      Math.sin(a * 3 + k * 0.35) * (6 + k * 1.1) +
      Math.sin(a * 5 - k * 0.6) * (3 + k * 0.5) +
      Math.cos(a * 2 + k * 0.2) * (4 + k * 0.8);
    const r = base + wobble;
    const x = cx + Math.cos(a) * r * 1.05;
    const y = cy + Math.sin(a) * r * 0.9;
    points.push(`${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`);
  }
  return points.join(" ") + " Z";
}

export default function Contours() {
  const count = 22;
  const rings = Array.from({ length: count }, (_, k) => ring(k, count));
  return (
    <svg
      className="contours"
      viewBox="0 0 600 600"
      aria-hidden="true"
      focusable="false"
    >
      {rings.map((d, k) => (
        <path
          key={k}
          d={d}
          pathLength="1"
          className={k % 5 === 0 ? "contour index" : "contour"}
          style={{ animationDelay: `${k * 70}ms` }}
        />
      ))}
    </svg>
  );
}
