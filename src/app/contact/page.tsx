import type { Metadata } from "next";
import Contact from "@/components/interim/Contact";

export const metadata: Metadata = {
  title: "Contact — Thomas Rackowe Cork",
  description: "Get in touch with Thomas Rackowe Cork, product and service designer.",
};

const BIO = [
  "I'm a product and service designer who works best where design and strategy overlap.",
  "I see experiences as interconnected systems, not isolated screens. I bring people from different disciplines together to build a shared vision, test ideas quickly, and lay solid foundations so every learning moves us forward.",
];

export default function ContactPage() {
  return <Contact bio={BIO} />;
}
