import Section from "./Section.jsx";
import { profile } from "../data.js";

export default function Contact() {
  return (
    <>
      <Section id="contact" title="Contact">
        <p className="prose">
          I'm looking for a full stack developer internship. Email is the
          quickest way to reach me.
        </p>
        <a className="big-mail" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <ul className="links">
          <li>
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </li>
        </ul>
      </Section>
      <footer className="footer">
        <div className="wrap">
          <p>
            {profile.firstName} {profile.lastName}, {profile.location}
          </p>
        </div>
      </footer>
    </>
  );
}
