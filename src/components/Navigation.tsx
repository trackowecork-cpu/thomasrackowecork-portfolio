"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const navLinkClass = (href: string) => {
    const isActive = pathname === href || pathname.startsWith(href + "/");
    return [
      "text-sm transition-colors duration-200",
      isActive ? "text-ink" : "text-ink-muted hover:text-ink",
    ].join(" ");
  };

  return (
    <header className="sticky top-0 z-50 bg-canvas border-b border-border">
      <nav className="site-container flex items-center justify-between h-14">
        <Link
          href="/"
          className="text-sm text-ink hover:text-ink-secondary transition-colors duration-200 tracking-tight"
        >
          Thomas Rackowe Cork
        </Link>
        <div className="flex items-center gap-8">
          <Link href="/work" className={navLinkClass("/work")}>
            Work
          </Link>
          <Link href="/about" className={navLinkClass("/about")}>
            About
          </Link>
        </div>
      </nav>
    </header>
  );
}
