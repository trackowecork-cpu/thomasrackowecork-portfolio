// Colour states for the interim "under construction" landing page.
// Text is 16-18px medium, so every pair meets WCAG AA (4.5:1).
// See Figma "Minimal 2026" → "Accessible colour pairs" (Route A).
export const COLOUR_STATES = [
  { bg: "#3a5572", fg: "#e4c39c" },
  { bg: "#485012", fg: "#c0b4ff" },
  { bg: "#645961", fg: "#85ed9f" },
  { bg: "#380508", fg: "#fffefc" },
  { bg: "#b2ab6a", fg: "#2c308f" },
] as const;

export const STATE_DURATION_MS = 2500;

// The contact page holds on the highest-contrast pair (17:1) so the bio reads comfortably.
export const CONTACT_COLOURS = COLOUR_STATES[3];

export const CONTACT_LINKS = [
  { label: "Email", value: "hello@thomasrackowecork.com", href: "mailto:hello@thomasrackowecork.com", external: false },
  { label: "LinkedIn", value: "linkedin.com/in/thomasrackowecork", href: "https://www.linkedin.com/in/thomasrackowecork/", external: true },
] as const;
