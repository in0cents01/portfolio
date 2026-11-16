import type { CSSProperties } from "react";
import { ArrowIcon } from "./icons";

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <p className="eyebrow" data-reveal>
          That Sothoun — Software Developer
        </p>
        <h1 data-reveal style={{ "--delay": "80ms" } as CSSProperties}>
          Clean, <em>reliable</em>
          <br />
          software for the web.
        </h1>
        <p className="hero-copy" data-reveal style={{ "--delay": "140ms" } as CSSProperties}>
          I&apos;m That Sothoun — a software developer focused on building thoughtful, dependable
          digital products with clean code and intuitive experiences.
        </p>
        <div className="hero-actions" data-reveal style={{ "--delay": "200ms" } as CSSProperties}>
          <a className="button button-primary" href="#contact">
            Get in touch <ArrowIcon />
          </a>
          <a className="text-link" href="#about">
            More about me <span>↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
