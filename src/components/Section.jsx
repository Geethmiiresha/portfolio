export default function Section({ id, title, children }) {
  return (
    <section id={id} className="section">
      <div className="wrap section-grid">
        <h2>{title}</h2>
        <div className="section-body">{children}</div>
      </div>
    </section>
  );
}
