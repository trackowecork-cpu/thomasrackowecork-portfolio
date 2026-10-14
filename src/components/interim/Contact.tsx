import Link from "next/link";
import { CONTACT_COLOURS, CONTACT_LINKS } from "./palette";

type Props = { bio: string };

export default function Contact({ bio }: Props) {
  const { bg, fg } = CONTACT_COLOURS;

  return (
    <div className="flex min-h-[100svh] flex-col" style={{ backgroundColor: bg, color: fg }}>
      <style>{`body { background-color: ${bg}; }`}</style>

      <header className="flex items-center justify-between px-5 pb-5 pt-6 md:pt-5">
        <Link href="/" className="text-[19px] font-bold leading-none">
          Thomas Rackowe Cork
        </Link>

        <Link href="/" className="hidden text-[19px] font-bold leading-none md:block">
          Close ✕
        </Link>

        <Link href="/" aria-label="Close" className="-m-2 p-2 md:hidden">
          <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 5 L19 19 M19 5 L5 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
          </svg>
        </Link>
      </header>

      <main className="flex flex-1 flex-col gap-12 px-5 pb-16 pt-16 md:pt-[120px] lg:flex-row lg:justify-between lg:gap-10">
        <section className="flex max-w-[680px] flex-col gap-4">
          <h1 className="text-[18px] font-semibold">About</h1>
          <p className="text-[24px] font-medium leading-[1.2] tracking-[-0.015em] md:text-[32px] lg:text-[40px]">
            {bio}
          </p>
        </section>

        <section className="flex flex-col gap-4 lg:min-w-[360px]">
          <h2 className="text-[18px] font-semibold">Contact</h2>
          <ul className="flex flex-col gap-4 md:gap-2">
            {CONTACT_LINKS.map((link) => (
              <li key={link.label} className="flex flex-col gap-1 text-[16px] md:flex-row md:gap-4 md:text-[18px]">
                <span className="shrink-0 font-medium opacity-80 md:w-24">{link.label}</span>
                <a
                  href={link.href}
                  {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="min-w-0 break-words font-semibold underline underline-offset-4 md:whitespace-nowrap"
                >
                  {link.value}
                  {link.external ? " ↗" : ""}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="border-t px-5 py-5 text-[16px] font-medium" style={{ borderColor: fg }}>
        © 2026
      </footer>
    </div>
  );
}
