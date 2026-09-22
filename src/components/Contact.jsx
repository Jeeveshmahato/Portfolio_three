import { useEffect, useState } from "react";
import { ArrowUpRight, Check, Copy, Mail, Phone } from "lucide-react";
import { profile } from "../data/profile";
import { GitHubIcon, LinkedInIcon } from "./Icons";

const channels = [
  { label: "Phone", value: profile.phone, href: profile.phoneHref, icon: Phone },
  { label: "LinkedIn", value: "in/jeeveshmahato", href: profile.linkedin, icon: LinkedInIcon, external: true },
  { label: "GitHub", value: "Jeeveshmahato", href: profile.github, icon: GitHubIcon, external: true },
];

// The panel is always dark, so it uses fixed light-on-dark colors in both themes.
const Contact = () => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(t);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
    } catch {
      // Clipboard access can be blocked; the mailto link remains available.
    }
  };

  return (
    <section id="contact" aria-labelledby="contact-title" className="py-20 sm:py-28">
      <div className="container-page">
        <div className="reveal panel-bg relative overflow-hidden rounded-[2rem] bg-panel px-6 py-14 text-white sm:px-14 sm:py-20">
          <p className="eyebrow flex items-center gap-3 text-accent-bright">
            <span>05</span>
            <span className="h-px w-6 bg-accent-bright/40" aria-hidden="true" />
            <span>Contact</span>
          </p>

          <h2
            id="contact-title"
            className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl"
          >
            Have a role or project in mind?{" "}
            <em className="font-serif font-normal italic tracking-normal text-accent-bright">Let&rsquo;s talk.</em>
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
            I&rsquo;m open to full-time roles and freelance work. Email is the fastest way to reach me, and I
            usually reply within a day.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="btn bg-white px-5 py-3 text-[#0c0a09] shadow-lg shadow-black/20 hover:bg-white/90"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {profile.email}
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="btn border border-white/15 bg-white/5 px-5 py-3 text-white hover:bg-white/10"
            >
              {copied ? (
                <Check className="h-4 w-4 text-accent-bright" aria-hidden="true" />
              ) : (
                <Copy className="h-4 w-4" aria-hidden="true" />
              )}
              {copied ? "Copied" : "Copy email"}
            </button>
            <span className="sr-only" aria-live="polite">
              {copied ? "Email address copied to clipboard" : ""}
            </span>
          </div>

          <ul className="mt-14 grid gap-3 border-t border-white/10 pt-8 sm:grid-cols-3">
            {channels.map(({ label, value, href, icon: Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                  className="group flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-white/5"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/5 text-white/80">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs text-white/50">{label}</span>
                    <span className="block truncate text-sm font-medium text-white">{value}</span>
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 text-white/40 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
