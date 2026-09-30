import { profile } from "../data.js";
import Contours from "./Contours.jsx";

export default function Hero() {
  return (
    <section className="hero">
      <Contours />
      <div className="wrap hero-inner">
        <h1>
          {profile.firstName}
          <br />
          {profile.lastName}
        </h1>
        <p className="headline">{profile.headline}</p>
        <p className="intro">{profile.intro}</p>
        <div className="actions">
          <a className="btn primary" href="#projects">
            See my projects
          </a>
          <a className="btn" href={`mailto:${profile.email}`}>
            Email me
          </a>
        </div>
      </div>
    </section>
  );
}
