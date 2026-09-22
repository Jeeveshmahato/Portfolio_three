import { Brain, Cloud, Database, GraduationCap, Monitor, Search, Server, ShieldCheck } from "lucide-react";
import { education, skills } from "../data/profile";
import Section, { Em } from "./Section";

const icons = {
  Frontend: Monitor,
  Backend: Server,
  "AI and LLM": Brain,
  Databases: Database,
  "Cloud and DevOps": Cloud,
  "Security and Testing": ShieldCheck,
  "SEO and Tools": Search,
};

// Wider cards for the two groups that carry the most weight.
const wide = new Set(["Frontend", "AI and LLM"]);

const Skills = () => (
  <Section
    id="skills"
    index="04"
    label="Skills"
    muted
    title={
      <>
        The <Em>toolkit</Em>.
      </>
    }
    intro="Languages, frameworks and platforms I use to take a product from idea to production."
  >
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {skills.map(({ group, items }, i) => {
        const Icon = icons[group];
        return (
          <div
            key={group}
            className={`reveal card p-6 ${wide.has(group) ? "lg:col-span-2" : ""}`}
            style={{ "--delay": `${(i % 3) * 70}ms` }}
          >
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent/10 text-accent">
                <Icon className="h-[1.1rem] w-[1.1rem]" aria-hidden="true" />
              </span>
              <h3 className="font-semibold text-ink">{group}</h3>
              <span className="ml-auto font-mono text-xs text-faint">{String(items.length).padStart(2, "0")}</span>
            </div>
            <ul className="mt-5 flex flex-wrap gap-1.5">
              {items.map((item) => (
                <li key={item} className="chip">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>

    <div className="reveal card mt-4 flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:gap-6">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">
        <GraduationCap className="h-5 w-5" aria-hidden="true" />
      </span>
      <div className="flex-1">
        <p className="eyebrow text-faint">Education</p>
        <h3 className="mt-1 font-semibold text-ink">
          {education.degree}, {education.school}
        </h3>
        <p className="mt-0.5 text-sm text-muted">{education.location}</p>
      </div>
      <div className="flex flex-wrap gap-2 sm:flex-col sm:items-end">
        <span className="rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent">{education.grade}</span>
        <span className="font-mono text-xs text-faint">{education.period}</span>
      </div>
    </div>
  </Section>
);

export default Skills;
