import { experience } from "../data/profile";
import Section, { Em } from "./Section";

// "Content Whale" -> "CW", "Ynaps" -> "YN"
const initials = (name) => {
  const words = name.split(" ");
  return (words.length > 1 ? words[0][0] + words[1][0] : name.slice(0, 2)).toUpperCase();
};

const Experience = () => (
  <Section
    id="experience"
    index="02"
    label="Experience"
    muted
    title={
      <>
        Where I&rsquo;ve <Em>worked</Em>.
      </>
    }
    intro="Product engineering, delivery leadership and enterprise systems, across five teams."
  >
    <ol className="ml-5 max-w-4xl">
      {experience.map((job) => (
        <li
          key={`${job.company}-${job.period}`}
          className="reveal relative border-l border-line pb-14 pl-10 last:border-transparent last:pb-0 sm:pl-12"
        >
          <span
            className={`absolute -left-5 top-0 grid h-10 w-10 place-items-center rounded-xl border font-mono text-[0.7rem] font-semibold ${
              job.current
                ? "border-accent bg-accent text-accent-ink shadow-md shadow-accent/25"
                : "border-line bg-surface text-muted"
            }`}
            aria-hidden="true"
          >
            {initials(job.company)}
          </span>

          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 pt-1.5">
            <h3 className="text-lg font-semibold tracking-tight text-ink">{job.role}</h3>
            <p className="font-mono text-xs tabular-nums text-faint">{job.period}</p>
          </div>
          <p className="mt-1 flex flex-wrap items-center gap-x-2 text-sm text-muted">
            <span className="font-medium text-ink">{job.company}</span>
            <span aria-hidden="true">·</span>
            <span>{job.location}</span>
            {job.current && (
              <span className="ml-1 rounded-full bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">
                Current
              </span>
            )}
          </p>

          <ul className="mt-5 space-y-3">
            {job.points.map((point) => (
              <li
                key={point.slice(0, 32)}
                className="relative pl-5 text-[0.95rem] leading-relaxed text-muted before:absolute before:left-0 before:top-[0.72em] before:h-px before:w-2.5 before:bg-accent/60"
              >
                {point}
              </li>
            ))}
          </ul>

          <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Technologies used">
            {job.stack.map((tech) => (
              <li key={tech} className="chip bg-surface">
                {tech}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  </Section>
);

export default Experience;
