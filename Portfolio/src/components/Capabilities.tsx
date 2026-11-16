const capabilities = [
  [
    "Front-end development",
    "Responsive, accessible interfaces built with modern web technologies and careful attention to detail.",
  ],
  [
    "Back-end development",
    "Reliable APIs, data models, and server-side systems designed to be clear, secure, and maintainable.",
  ],
  [
    "Application architecture",
    "Thoughtful technical foundations that help products stay fast, testable, and easy to evolve.",
  ],
  [
    "API integration",
    "Clean connections between services, platforms, and product experiences that work smoothly together.",
  ],
  [
    "Performance",
    "Fast loading experiences shaped by practical profiling, optimization, and efficient implementation.",
  ],
  [
    "Collaboration",
    "Clear communication, dependable delivery, and close partnership from the first idea to release.",
  ],
];

export function Capabilities() {
  return (
    <section className="section" aria-labelledby="capabilities-title">
      <div className="container">
        <div className="section-heading" data-reveal>
          <div>
            <p className="section-kicker">02 / Services</p>
            <h2 id="capabilities-title">Capabilities</h2>
          </div>
        </div>
        <ul className="capability-grid" data-reveal>
          {capabilities.map(([title, copy], index) => (
            <li key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
