interface PullQuoteProps {
  quote: string;
  attribution?: string;
}

export default function PullQuote({ quote, attribution }: PullQuoteProps) {
  return (
    <blockquote className="border-t border-border pt-8 pb-8">
      <p className="font-serif text-2xl sm:text-3xl text-ink leading-snug italic max-w-3xl">
        &ldquo;{quote}&rdquo;
      </p>
      {attribution && (
        <footer className="mt-6">
          <cite className="font-mono text-xs uppercase tracking-widest text-ink-muted not-italic">
            — {attribution}
          </cite>
        </footer>
      )}
    </blockquote>
  );
}
