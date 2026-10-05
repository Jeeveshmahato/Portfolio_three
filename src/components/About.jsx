import { Brain, Monitor, Server, Smartphone } from "lucide-react";
import { about, focusAreas } from "../data/profile";
import Section, { Em } from "./Section";

const icons = [Monitor, Server, Brain, Smartphone];

const About = () => (
  <Section
    id="about"
    index="01"
    label="About"
    title={
      <>
        Engineering that spans the <Em>whole stack</Em>.
      </>
    }
  >
    <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-20">
      <div className="reveal space-y-6 text-lg leading-relaxed text-muted sm:text-xl sm:leading-relaxed">
        {about.map((paragraph, i) => (
          <p key={paragraph.slice(0, 24)} className={i === 0 ? "text-ink" : undefined}>
            {paragraph}
          </p>
        ))}
      </div>

      <ul className="space-y-3">
        {focusAreas.map((area, i) => {
          const Icon = icons[i];
          return (
            <li
              key={area.title}
              className="reveal card group flex gap-4 p-5 transition-colors hover:border-accent/40"
              style={{ "--delay": `${i * 80}ms` }}
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-ink">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-semibold text-ink">{area.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{area.description}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  </Section>
);

export default About;
