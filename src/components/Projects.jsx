import { ArrowUpRight, Check } from "lucide-react";
import { profile, projects } from "../data/profile";
import { GitHubIcon } from "./Icons";
import Section, { Em } from "./Section";

// Screenshot presented inside a minimal browser window.
const BrowserFrame = ({ src, alt }) => (
  <div className="overflow-hidden rounded-xl border border-line bg-surface shadow-lg shadow-ink/5">
    <div className="flex h-7 items-center gap-1.5 border-b border-line bg-subtle px-3" aria-hidden="true">
      <span className="h-2 w-2 rounded-full bg-line" />
      <span className="h-2 w-2 rounded-full bg-line" />
      <span className="h-2 w-2 rounded-full bg-line" />
    </div>
    <div className="aspect-[16/10] overflow-hidden">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
      />
    </div>
  </div>
);

// Phone screenshots, slightly staggered. Used for mobile projects.
const PhoneFrames = ({ images }) => (
  <div className="flex items-start justify-center gap-4 sm:gap-6">
    {images.map((image, i) => (
      <div
        key={image.src}
        className={`w-[42%] max-w-[13rem] rounded-[1.9rem] border border-line bg-surface p-1.5 shadow-lg shadow-ink/5 ${
          i % 2 ? "mt-10" : ""
        }`}
      >
        <div className="aspect-[9/20] overflow-hidden rounded-[1.5rem]">
          <img
            src={image.src}
            alt={image.alt}
            width="540"
            height="1200"
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
        </div>
      </div>
    ))}
  </div>
);

const Media = ({ project }) =>
  project.platform === "mobile" ? (
    <PhoneFrames images={project.images} />
  ) : (
    <BrowserFrame src={project.image} alt={`Screenshot of ${project.name}`} />
  );

const Links = ({ project }) => (
  <div className="flex flex-wrap gap-2">
    <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-secondary py-2">
      {project.liveLabel ?? "Live demo"}
      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
    </a>
    {project.source && (
      <a href={project.source} target="_blank" rel="noopener noreferrer" className="btn py-2 text-muted hover:text-ink">
        <GitHubIcon className="h-4 w-4" />
        Source
      </a>
    )}
  </div>
);

const Stack = ({ items }) => (
  <ul className="flex flex-wrap gap-1.5" aria-label="Technologies used">
    {items.map((tech) => (
      <li key={tech} className="chip">
        {tech}
      </li>
    ))}
  </ul>
);

const cardClass =
  "reveal card group overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:border-faint/30 hover:shadow-xl hover:shadow-ink/5";

// With two columns, an odd last card is centered instead of left dangling.
const lastOddClass = "md:col-span-2 md:w-[calc(50%-0.75rem)] md:justify-self-center lg:col-span-1 lg:w-auto";

const Projects = () => {
  const [featured, ...rest] = projects;

  return (
    <Section
      id="projects"
      index="03"
      label="Projects"
      title={
        <>
          Things I&rsquo;ve <Em>built</Em> on my own.
        </>
      }
      intro="Personal projects, each shipped end to end, from web apps with their own APIs, auth and payments to a mobile app published on Google Play."
    >
      <article className={`${cardClass} grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]`}>
        <div className="flex flex-col justify-center bg-gradient-to-br from-accent/10 via-subtle to-subtle p-5 sm:p-10">
          <Media project={featured} />
        </div>
        <div className="flex flex-col p-6 sm:p-10">
          <p className="eyebrow text-accent">{featured.tagline ?? "Featured project"}</p>
          <h3 className="mt-3 flex items-center gap-3 text-2xl font-semibold tracking-tight text-ink">
            {featured.icon && (
              <img src={featured.icon} alt="" width="40" height="40" className="h-10 w-10 rounded-xl shadow-sm" />
            )}
            {featured.name}
          </h3>
          <p className="mt-4 leading-relaxed text-muted">{featured.description}</p>
          {featured.highlights && (
            <ul className="mt-5 space-y-2.5">
              {featured.highlights.map((point) => (
                <li key={point} className="flex gap-2.5 text-[0.95rem] leading-relaxed text-muted">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          )}
          <div className="mt-6">
            <Stack items={featured.stack} />
          </div>
          <div className="mt-auto pt-8">
            <Links project={featured} />
          </div>
        </div>
      </article>

      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {rest.map((project, i) => (
          <article
            key={project.name}
            className={`${cardClass} flex flex-col ${i === rest.length - 1 && rest.length % 2 ? lastOddClass : ""}`}
            style={{ "--delay": `${i * 80}ms` }}
          >
            <div className="bg-gradient-to-br from-accent/10 via-subtle to-subtle p-5 sm:p-7">
              <Media project={project} />
            </div>
            <div className="flex flex-1 flex-col p-6 sm:p-7">
              <h3 className="text-xl font-semibold tracking-tight text-ink">{project.name}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{project.description}</p>
              <div className="mt-5">
                <Stack items={project.stack} />
              </div>
              <div className="mt-auto pt-7">
                <Links project={project} />
              </div>
            </div>
          </article>
        ))}
      </div>

      <p className="reveal mt-10 text-center text-sm text-muted">
        More experiments and source code on{" "}
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="link font-medium">
          GitHub
        </a>
        .
      </p>
    </Section>
  );
};

export default Projects;
