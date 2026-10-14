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

// 1.2s per colour = under one change per second, far below the WCAG 2.3.1
// limit of three flashes per second. Reduced-motion visitors get no cycling.
export const STATE_DURATION_MS = 1200;

// The contact page holds on the highest-contrast pair (17:1) so the bio reads comfortably.
export const CONTACT_COLOURS = COLOUR_STATES[3];

export const CONTACT_LINKS = [
  { label: "Email", value: "hello@thomasrackowecork.com", href: "mailto:hello@thomasrackowecork.com", external: false },
  { label: "LinkedIn", value: "linkedin.com/in/thomasrackowecork", href: "https://www.linkedin.com/in/thomasrackowecork/", external: true },
  // Opens in the browser's PDF viewer, where it can be read, saved or printed.
  { label: "CV", value: "Download PDF", href: "/cv/Thomas-Rackowe-Cork-CV.pdf", external: true },
] as const;
