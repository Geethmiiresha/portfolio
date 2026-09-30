import Section from "./Section.jsx";
import { skills } from "../data.js";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <dl className="skills">
        {skills.map((g) => (
          <div key={g.group}>
            <dt>{g.group}</dt>
            <dd>
              <ul>
                {g.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
