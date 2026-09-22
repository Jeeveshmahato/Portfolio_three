import { ArrowRight, FileText } from "lucide-react";
import { experience, highlights, profile } from "../data/profile";
import { GitHubIcon, LinkedInIcon } from "./Icons";
import { Em } from "./Section";
import portrait from "../assets/portrait.jpg";

const socialClass =
  "grid h-10 w-10 place-items-center rounded-lg border border-transparent text-muted transition-colors hover:border-line hover:bg-surface hover:text-ink";

const companies = experience.map((job) => job.company.replace(" Technology Solutions", ""));

const Hero = () => (
  <>
    <section id="top" aria-label="Introduction" className="relative isolate overflow-hidden">
      <div className="hero-bg absolute inset-0 -z-10" aria-hidden="true" />

      <div className="container-page pb-16 pt-12 sm:pb-24 sm:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_19rem] lg:gap-20">
          <div>
            <p className="rise eyebrow flex items-center gap-3 text-muted">
              <span className="h-px w-8 bg-accent" aria-hidden="true" />
              {profile.name} · {profile.role}
            </p>

            <h1
              className="rise mt-6 text-[2.5rem] font-semibold leading-[1.04] tracking-[-0.04em] text-ink sm:text-6xl lg:text-[4.1rem]"
              style={{ "--delay": "80ms" }}
            >
              I build web products from the <Em>interface</Em> to the <Em>AI&nbsp;pipeline</Em>.
            </h1>

            <p
              className="rise mt-6 max-w-xl text-lg leading-relaxed text-muted"
              style={{ "--delay": "160ms" }}
            >
              {profile.summary}
            </p>

            <div className="rise mt-9 flex flex-wrap items-center gap-3" style={{ "--delay": "240ms" }}>
              <a href="#projects" className="btn-primary">
                View my work
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <FileText className="h-4 w-4" aria-hidden="true" />
                Resume
              </a>
              <span className="mx-1 hidden h-6 w-px bg-line sm:block" aria-hidden="true" />
              <div className="flex items-center gap-1">
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className={socialClass} aria-label="GitHub profile">
                  <GitHubIcon className="h-5 w-5" />
                </a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={socialClass} aria-label="LinkedIn profile">
                  <LinkedInIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <figure className="rise relative order-first w-36 sm:w-44 lg:order-none lg:w-full" style={{ "--delay": "120ms" }}>
            <div className="rounded-[1.75rem] border border-line bg-surface p-1.5 shadow-xl shadow-ink/5">
              <img
                src={portrait}
                alt={`Portrait of ${profile.name}`}
                width="480"
                height="480"
                decoding="async"
                className="aspect-square w-full rounded-[1.4rem] object-cover"
              />
            </div>
            <figcaption className="absolute -bottom-5 left-5 right-5 hidden items-center gap-3 rounded-xl border border-line bg-surface/95 px-4 py-3 shadow-lg shadow-ink/5 backdrop-blur lg:flex">
              <span className="relative flex h-2 w-2 shrink-0" aria-hidden="true">
                <span className="absolute inset-0 rounded-full bg-accent/40 motion-safe:animate-ping" />
                <span className="relative h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="min-w-0 text-xs leading-tight">
                <span className="block text-faint">Currently</span>
                <span className="block truncate font-medium text-ink">
                  {profile.current.title} at {profile.current.company}
                </span>
              </span>
            </figcaption>
          </figure>
        </div>

        <dl
          className="rise mt-16 grid grid-cols-2 overflow-hidden rounded-2xl border border-line bg-surface/80 backdrop-blur-sm sm:mt-24 lg:grid-cols-4"
          style={{ "--delay": "320ms" }}
        >
          {highlights.map((item, i) => (
            <div
              key={item.label}
              className={`flex flex-col p-5 sm:p-7 ${i % 2 ? "border-l border-line" : ""} ${
                i > 1 ? "border-t border-line lg:border-t-0" : ""
              } ${i === 2 ? "lg:border-l" : ""}`}
            >
              <dt className="text-sm leading-snug text-muted">{item.label}</dt>
              <dd className="order-first mb-2 text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-4xl">
                {item.value}
                <span className="text-accent">{item.suffix}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>

    <div className="border-y border-line bg-surface/60">
      <div className="container-page flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:gap-10">
        <p className="eyebrow shrink-0 text-faint">Experience at</p>
        <ul className="flex flex-wrap items-center gap-x-8 gap-y-2">
          {companies.map((name) => (
            <li key={name} className="text-[0.95rem] font-semibold tracking-tight text-muted">
              {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </>
);

export default Hero;
