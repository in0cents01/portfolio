import type { CSSProperties } from "react";

export function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="container">
        <div className="section-heading" data-reveal>
          <div>
            <p className="section-kicker">01 / Profile</p>
            <h2 id="about-title">About</h2>
          </div>
        </div>
        <div className="about-grid">
          <p className="about-statement" data-reveal>
            I turn ideas into dependable software — balancing technical quality, thoughtful problem
            solving, and experiences that feel simple to use.
          </p>
          <div className="about-copy" data-reveal style={{ "--delay": "80ms" } as CSSProperties}>
            <p>
              I build web applications with a focus on clean architecture, readable code, and
              practical solutions to real problems. I enjoy working across the stack and turning
              complex requirements into products people can rely on.
            </p>
            <p>
              I care about continuous improvement, strong collaboration, and the small technical
              decisions that make software faster, easier to maintain, and better for the people
              using it.
            </p>
            <dl className="facts">
              <div>
                <dt>Role</dt>
                <dd>Software Developer</dd>
              </div>
              <div>
                <dt>Focus</dt>
                <dd>Web applications</dd>
              </div>
              <div>
                <dt>Approach</dt>
                <dd>Clean & scalable</dd>
              </div>
              <div>
                <dt>Status</dt>
                <dd>
                  <span className="status-dot" />
                  Available for opportunities
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
