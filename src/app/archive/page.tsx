import type { Metadata } from "next";
import DirectionELayout from "../direction-e/layout";
import DirectionEPage from "../direction-e/page";

// The previous homepage, kept reachable (but unlinked and hidden from search)
// while the interim landing page sits at "/".
export const metadata: Metadata = {
  title: "Archive — Thomas Rackowe Cork",
  robots: { index: false, follow: false },
};

export default function ArchivePage() {
  return (
    <DirectionELayout>
      <DirectionEPage />
    </DirectionELayout>
  );
}
