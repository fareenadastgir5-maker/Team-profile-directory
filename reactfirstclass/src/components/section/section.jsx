import './section.css';   // sahi (lowercase)

function Section({ title, children }) {
  return (
    <section className="section">
      <h1>{title}</h1>

      <div className="section-content">
        {children}
      </div>
    </section>
  );
}

export default Section;