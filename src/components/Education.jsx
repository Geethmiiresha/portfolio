import Section from "./Section.jsx";
import { education } from "../data.js";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <ol className="timeline">
        {education.map((e) => (
          <li key={e.place}>
            <p className="when">{e.when}</p>
            <h3>{e.title}</h3>
            <p className="place">
              {e.place}, {e.where}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
