import Section from "./Section.jsx";
import { about, facts } from "../data.js";

export default function About() {
  return (
    <Section id="about" title="About">
      {about.map((text, i) => (
        <p className="prose" key={i}>
          {text}
        </p>
      ))}
      <dl className="facts">
        {facts.map((f) => (
          <div key={f.label}>
            <dt>{f.label}</dt>
            <dd>{f.value}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
