import { profile, nav } from "../data.js";

export default function Header() {
  return (
    <header className="site-header">
      <div className="wrap bar">
        <a className="brand" href="#top">
          {profile.firstName} {profile.lastName}
        </a>
        <nav aria-label="Main">
          <ul>
            {nav.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
