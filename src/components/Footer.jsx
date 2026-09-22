import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { navLinks, profile } from "../data/profile";

const timeFormat = new Intl.DateTimeFormat("en-IN", {
  timeZone: "Asia/Kolkata",
  hour: "2-digit",
  minute: "2-digit",
  hour12: true,
});

const LocalTime = () => {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(id);
  }, []);

  return <time dateTime={now.toISOString()}>{timeFormat.format(now)} IST</time>;
};

const connect = [
  { label: "Email", href: `mailto:${profile.email}` },
  { label: "LinkedIn", href: profile.linkedin, external: true },
  { label: "GitHub", href: profile.github, external: true },
  { label: "Resume", href: profile.resume, external: true },
];

const Footer = () => (
  <footer className="border-t border-line">
    <div className="container-page grid gap-10 py-14 sm:grid-cols-[minmax(0,1.5fr)_1fr_1fr]">
      <div>
        <a href="#top" className="flex items-center gap-2.5 font-semibold tracking-tight text-ink">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent font-mono text-[0.7rem] font-semibold text-accent-ink">
            JM
          </span>
          {profile.name}
        </a>
        <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
          {profile.role} based in {profile.location}. Working remotely with teams worldwide.
        </p>
        <p className="mt-4 font-mono text-xs text-faint">
          Local time · <LocalTime />
        </p>
      </div>

      <nav aria-label="Footer">
        <p className="eyebrow text-faint">Navigate</p>
        <ul className="mt-4 space-y-2.5 text-sm">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} className="text-muted transition-colors hover:text-ink">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div>
        <p className="eyebrow text-faint">Connect</p>
        <ul className="mt-4 space-y-2.5 text-sm">
          {connect.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                {...(item.external && { target: "_blank", rel: "noopener noreferrer" })}
                className="text-muted transition-colors hover:text-ink"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="border-t border-line">
      <div className="container-page flex flex-col gap-3 py-6 text-xs text-faint sm:flex-row sm:items-center sm:justify-between">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}. Designed and built by me.
        </p>
        <a href="#top" className="inline-flex items-center gap-1.5 transition-colors hover:text-ink">
          Back to top
          <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
