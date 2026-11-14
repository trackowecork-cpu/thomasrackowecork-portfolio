import type { Metadata } from "next";
import { THEME_INIT_SCRIPT } from "@/components/v2/theme";
import "./v2.css";

// Preview of the v2 redesign (Figma "Minimal-2026" → "Website v2 (revised)").
// Lives at /v2 so the live homepage is untouched; kept out of search results.
export const metadata: Metadata = {
  title: "Thomas Cork — Product Designer (v2 preview)",
  robots: { index: false, follow: false },
};

export default function V2Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      <div className="v2" id="top">
        {children}
      </div>
    </>
  );
}
