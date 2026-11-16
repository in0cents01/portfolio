import { ArrowIcon } from "./icons";

const socials = ["GitHub", "LinkedIn", "Dribbble", "Are.na"];

export function Contact() {
  return (
    <section className="section contact-section" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <p className="section-kicker" data-reveal>
          03 / Contact
        </p>
        <h2 id="contact-title" data-reveal>
          Let&apos;s make something
          <br />
          <em>clear and useful.</em>
        </h2>
        <p className="contact-copy" data-reveal>
          Have a project, a role, or just a question? My inbox is open.
        </p>
        <a className="email-link" href="mailto:" data-reveal>
          Start a conversation <ArrowIcon diagonal />
        </a>
        <div className="socials" data-reveal>
          {socials.map((social) => (
            <a
              href={`https://${social.toLowerCase().replace(".", "")}.com`}
              target="_blank"
              rel="noreferrer"
              key={social}
            >
              {social} <ArrowIcon diagonal />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
