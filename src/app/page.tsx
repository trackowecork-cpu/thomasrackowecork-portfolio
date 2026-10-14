import type { Metadata } from "next";
import Landing from "@/components/interim/Landing";

// Interim "under construction" landing page. The previous homepage lives at /archive.
export const metadata: Metadata = {
  title: "Thomas Rackowe Cork — Product and Service Designer",
};

export default function RootPage() {
  return <Landing />;
}
