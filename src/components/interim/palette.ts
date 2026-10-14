// Colour states for the interim "under construction" landing page.
// Route B pairs: header and ticker text are 24px (WCAG large text at any weight),
// so every pair clears 3:1. See Figma "Minimal 2026" → "Accessible colour pairs".
export const COLOUR_STATES = [
  { bg: "#536f8c", fg: "#e4c39c" },
  { bg: "#5f682c", fg: "#beb2fd" },
  { bg: "#7f747c", fg: "#85ed9f" },
  { bg: "#380508", fg: "#fffefc" },
  { bg: "#b5ae6d", fg: "#444eb0" },
] as const;

export const STATE_DURATION_MS = 2500;

// The contact page holds on the highest-contrast pair (17:1) so the bio reads comfortably.
export const CONTACT_COLOURS = COLOUR_STATES[3];

export const CONTACT_LINKS = [
  { label: "Email", value: "hello@thomasrackowecork.com", href: "mailto:hello@thomasrackowecork.com", external: false },
  { label: "LinkedIn", value: "linkedin.com/in/thomasrackowecork", href: "https://www.linkedin.com/in/thomasrackowecork/", external: true },
] as const;
