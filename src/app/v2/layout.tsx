import type { Metadata } from "next";
import "./v2.css";

// The v2 site (Figma "Minimal-2026"). Its files live under /v2; next.config.ts serves it at "/".
export const metadata: Metadata = {
  title: "Thomas Rackowe Cork — Product and Service Designer",
  description: "Product and service designer who connects people, business, and technology to shape solutions that deliver meaningful impact.",
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
