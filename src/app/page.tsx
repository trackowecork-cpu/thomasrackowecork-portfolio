import Link from "next/link";

export default function Home() {
  return (
    <div className="site-container py-24 sm:py-32">
      <p className="font-mono text-xs uppercase tracking-widest text-ink-faint mb-8">
        Portfolio — In progress
      </p>
      <h1 className="font-serif text-6xl sm:text-7xl lg:text-8xl text-ink leading-tight mb-8 max-w-3xl">
        Thomas Rackowe Cork
      </h1>
      <p className="text-lg text-ink-muted leading-relaxed mb-12 max-w-lg">
        Senior Product Designer. The brief is rarely the problem.
      </p>
      <Link
        href="/design-system"
        className="font-mono text-xs uppercase tracking-widest text-ink-muted hover:text-rust transition-colors duration-200"
      >
        View design system →
      </Link>
    </div>
  );
}
