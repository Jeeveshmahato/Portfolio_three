/** @type {import('tailwindcss').Config} */

// Colors are CSS variables (RGB channels) defined in src/index.css, so a
// single class like `bg-surface` works in both light and dark themes.
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

const fallback = ["ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"];

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: token("bg"),
        surface: token("surface"),
        subtle: token("subtle"),
        line: token("line"),
        ink: token("ink"),
        muted: token("muted"),
        faint: token("faint"),
        accent: token("accent"),
        "accent-ink": token("accent-ink"),
        "accent-bright": token("accent-bright"),
        panel: token("panel"),
      },
      fontFamily: {
        sans: ["Geist", ...fallback],
        mono: ["Geist Mono", "ui-monospace", "SFMono-Regular", "Menlo", "Consolas", "monospace"],
        serif: ["Instrument Serif", "ui-serif", "Georgia", "serif"],
      },
      maxWidth: {
        page: "72rem",
      },
    },
  },
  plugins: [],
};
