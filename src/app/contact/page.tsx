import type { Metadata } from "next";
import Contact from "@/components/interim/Contact";

export const metadata: Metadata = {
  title: "Contact — Thomas Rackowe Cork",
  description: "Get in touch with Thomas Rackowe Cork, product and service designer.",
};

const INTRO = [
  "Hi, I'm Thomas.",
  "I'm a product and service designer who works best where design and strategy overlap.",
];

const BODY =
  "I see experiences as interconnected systems, not isolated screens. I love bringing people from different disciplines together around a shared direction, testing ideas quickly, and using what we learn to move the wider vision forward.";

export default function ContactPage() {
  return <Contact intro={INTRO} body={BODY} />;
}
