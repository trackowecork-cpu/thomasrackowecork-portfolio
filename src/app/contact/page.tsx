import type { Metadata } from "next";
import Contact from "@/components/interim/Contact";
import { getAbout } from "@/lib/about";

export const metadata: Metadata = {
  title: "Contact — Thomas Rackowe Cork",
  description: "Get in touch with Thomas Rackowe Cork, product and service designer.",
};

export default function ContactPage() {
  return <Contact bio={getAbout().headline} />;
}
