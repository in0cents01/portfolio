import { ThemeIcon } from "./icons";

type HeaderProps = {
  dark: boolean;
  onToggleTheme: () => void;
};

export function Header({ dark, onToggleTheme }: HeaderProps) {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="wordmark" href="#top" aria-label="That Sothoun, home">
          <span className="brand-dot" />
          that.sothoun
        </a>
        <nav className="nav" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <span className="availability">
            <span />
            Available
          </span>
          <button
            className="theme-toggle"
            type="button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${dark ? "light" : "dark"} theme`}
            aria-pressed={dark}
          >
            <ThemeIcon dark={dark} />
          </button>
        </nav>
      </div>
    </header>
  );
}
