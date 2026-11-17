import type { Metadata } from "next";
import "./v2.css";

// Preview of the v2 redesign (Figma "Minimal-2026" → "Website v2 (revised)").
// Lives at /v2 so the live homepage is untouched; kept out of search results.
export const metadata: Metadata = {
  title: "Thomas Rackowe Cork — Product Designer (v2 preview)",
  robots: { index: false, follow: false },
};

export default function V2Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      {/* Dark only (Thomas, 2026-11-17): one theme, set before first paint. */}
      <script dangerouslySetInnerHTML={{ __html: 'document.documentElement.dataset.theme="dark";' }} />
      <div className="v2" id="top">
        {children}
      </div>
    </>
  );
}
