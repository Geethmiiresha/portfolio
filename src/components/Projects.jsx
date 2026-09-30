import { useState } from "react";
import Section from "./Section.jsx";
import { projects } from "../data.js";

export default function Projects() {
  const [open, setOpen] = useState(0);

  return (
    <Section id="projects" title="Projects">
      <ul className="projects">
        {projects.map((p, i) => {
          const isOpen = open === i;
          return (
            <li key={p.title} className={isOpen ? "project open" : "project"}>
              <h3>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`project-${i}`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span className="project-name">{p.title}</span>
                  <span className="project-summary">{p.summary}</span>
                  <span className="chevron" aria-hidden="true" />
                </button>
              </h3>
              <div className="panel" id={`project-${i}`} role="region">
                <div className="panel-inner">
                  <ul className="points">
                    {p.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                  <ul className="stack" aria-label="Technologies used">
                    {p.stack.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                  {(p.github || p.live) && (
                    <p className="project-links">
                      {p.github && (
                        <a href={p.github} target="_blank" rel="noreferrer">
                          View source on GitHub
                        </a>
                      )}
                      {p.live && (
                        <a href={p.live} target="_blank" rel="noreferrer">
                          Open live site
                        </a>
                      )}
                    </p>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
