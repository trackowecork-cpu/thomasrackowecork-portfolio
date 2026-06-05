export default function Footer() {
  return (
    <footer className="border-t border-border mt-auto">
      <div className="site-container py-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <a
          href="mailto:hello@thomasrackowecork.com"
          className="text-sm text-ink-muted hover:text-rust transition-colors duration-200"
        >
          hello@thomasrackowecork.com
        </a>
        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/thomasrackowecork/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-ink-muted hover:text-rust transition-colors duration-200"
          >
            LinkedIn ↗
          </a>
          <span className="text-sm text-ink-faint">
            © 2026 Thomas Rackowe Cork
          </span>
        </div>
      </div>
    </footer>
  );
}
