import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { navLinks, profile } from "../data/profile";
import { useActiveSection, useTheme } from "../hooks";

const sectionIds = navLinks.map((link) => link.id);

const ThemeToggle = () => {
  const [theme, toggle] = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      className="grid h-9 w-9 place-items-center rounded-lg text-muted transition-colors hover:bg-subtle hover:text-ink"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu with Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const linkClass = (id) =>
    `rounded-md px-3 py-1.5 text-sm transition-colors ${
      active === id ? "bg-subtle font-medium text-ink" : "text-muted hover:text-ink"
    }`;

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-colors duration-200 ${
        scrolled || open ? "border-line bg-bg/80 backdrop-blur-lg" : "border-transparent bg-transparent"
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between" aria-label="Primary">
        <a href="#top" className="flex items-center gap-2.5 font-semibold tracking-tight text-ink">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent font-mono text-[0.7rem] font-semibold text-accent-ink">
            JM
          </span>
          <span>{profile.name}</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={linkClass(link.id)}
              aria-current={active === link.id ? "true" : undefined}
            >
              {link.label}
            </a>
          ))}
          <span className="mx-2 h-5 w-px bg-line" aria-hidden="true" />
          <ThemeToggle />
          <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn-primary ml-2 py-2">
            Resume
          </a>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-lg text-ink hover:bg-subtle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <div id="mobile-menu" hidden={!open} className="border-t border-line md:hidden">
        <div className="container-page flex flex-col py-3">
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`} onClick={() => setOpen(false)} className={`${linkClass(link.id)} py-3`}>
              {link.label}
            </a>
          ))}
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="btn-primary mb-2 mt-3"
          >
            Download Resume
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
