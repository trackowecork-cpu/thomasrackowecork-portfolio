import { PageReady, TransitionLink } from "./PageTransition";
import { CONTACT_COLOURS, CONTACT_LINKS } from "./palette";

type Props = { bio: string };

export default function Contact({ bio }: Props) {
  const { bg, fg } = CONTACT_COLOURS;

  return (
    <div className="flex min-h-[100svh] flex-col" style={{ backgroundColor: bg, color: fg }}>
      <style>{`body { background-color: ${bg}; }`}</style>

      <PageReady />

      <header className="flex items-center justify-between px-5 pb-5 pt-6 md:pt-5 lg:px-8 lg:pt-7">
        <TransitionLink direction="close" href="/" className="text-[16px] font-medium leading-none lg:text-[18px]">
          Thomas Rackowe Cork
        </TransitionLink>

        <TransitionLink
          direction="close"
          href="/"
          className="hidden text-[16px] font-medium leading-none md:block lg:text-[18px]"
        >
          Close ✕
        </TransitionLink>

        <TransitionLink direction="close" href="/" aria-label="Close" className="-m-2 p-2 md:hidden">
          <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 5 L19 19 M19 5 L5 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
          </svg>
        </TransitionLink>
      </header>

      <main className="flex flex-1 flex-col gap-12 px-5 pb-16 pt-16 md:pt-[120px] lg:grid lg:grid-cols-12 lg:content-start lg:gap-x-8 lg:px-8 lg:pt-[160px]">
        <section className="flex max-w-[680px] flex-col gap-4 lg:col-span-7 lg:max-w-none lg:gap-5">
          <h1 className="text-[14px] font-medium lg:text-[16px]">About</h1>
          <p className="text-[20px] font-medium leading-[1.25] tracking-[-0.01em] md:text-[24px] lg:text-[34px] lg:leading-[1.2]">
            {bio}
          </p>
        </section>

        <section className="flex flex-col gap-4 lg:col-span-4 lg:col-start-9 lg:gap-5">
          <h2 className="text-[14px] font-medium lg:text-[16px]">Contact</h2>
          <ul className="flex flex-col gap-4 md:gap-2 lg:gap-3">
            {CONTACT_LINKS.map((link) => (
              <li key={link.label} className="flex flex-col gap-1 text-[16px] md:flex-row md:gap-4 lg:flex-col lg:gap-1 lg:text-[18px]">
                <span className="shrink-0 font-medium opacity-80 md:w-24 lg:w-auto">{link.label}</span>
                <a
                  href={link.href}
                  {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="min-w-0 break-words font-medium underline underline-offset-4 md:whitespace-nowrap"
                >
                  {link.value}
                  {link.external ? " ↗" : ""}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="border-t px-5 py-5 text-[14px] font-medium lg:px-8 lg:text-[16px]" style={{ borderColor: fg }}>
        © 2026
      </footer>
    </div>
  );
}
