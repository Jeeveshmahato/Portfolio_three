// Serif italic accent used for one or two words inside a heading.
export const Em = ({ children }) => (
  <em className="font-serif text-[1.08em] font-normal italic tracking-normal text-accent">{children}</em>
);

// Shared layout for content sections: numbered eyebrow, editorial heading,
// optional intro, then content. `muted` gives the section a tinted band.
const Section = ({ id, index, label, title, intro, muted = false, children }) => (
  <section
    id={id}
    aria-labelledby={`${id}-title`}
    className={muted ? "border-y border-line bg-subtle/50" : undefined}
  >
    <div className="container-page py-20 sm:py-28">
      <header className="reveal max-w-2xl">
        <p className="eyebrow flex items-center gap-3 text-accent">
          <span>{index}</span>
          <span className="h-px w-6 bg-accent/40" aria-hidden="true" />
          <span>{label}</span>
        </p>
        <h2
          id={`${id}-title`}
          className="mt-5 text-3xl font-semibold leading-[1.1] tracking-[-0.03em] text-ink sm:text-[2.75rem]"
        >
          {title}
        </h2>
        {intro && <p className="mt-5 text-lg leading-relaxed text-muted">{intro}</p>}
      </header>
      <div className="mt-12 sm:mt-16">{children}</div>
    </div>
  </section>
);

export default Section;
