// Landing page: a photo background (cracked asphalt) under a 50% black overlay,
// replacing the old colour cycling. Light blue text on the darkened photo.
// See Figma "Minimal 2026" → "Image background (landing)".
export const LANDING_IMAGE = "/images/landing-background.jpg";
export const LANDING_TEXT = "#94e8ff";
export const LANDING_OVERLAY = "rgba(0, 0, 0, 0.5)";
// Shown behind the photo while it loads, and on overscroll.
export const LANDING_FALLBACK_BG = "#2a2a2a";

// The contact page keeps its fixed high-contrast pair (17:1) so the bio reads comfortably.
export const CONTACT_COLOURS = { bg: "#380508", fg: "#fffefc" } as const;

export const CONTACT_LINKS = [
  { label: "Email", value: "hello@thomasrackowecork.com", href: "mailto:hello@thomasrackowecork.com", external: false },
  { label: "LinkedIn", value: "linkedin.com/in/thomasrackowecork", href: "https://www.linkedin.com/in/thomasrackowecork/", external: true },
  // Opens in the browser's PDF viewer, where it can be read, saved or printed.
  { label: "CV", value: "Download PDF", href: "/cv/Thomas-Rackowe-Cork-CV.pdf", external: true },
] as const;
