interface DecisionBlockProps {
  number: number | string;
  decision: string;
  question: string;
  tension: string;
  choice: string;
  result?: string;
}

export default function DecisionBlock({
  number,
  decision,
  question,
  tension,
  choice,
  result,
}: DecisionBlockProps) {
  return (
    <div className="border border-border p-8 sm:p-10">
      {/* Header */}
      <div className="flex items-baseline gap-4 mb-8 pb-6 border-b border-border">
        <span className="font-mono text-xs uppercase tracking-widest text-ink-faint">
          Decision {String(number).padStart(2, "0")}
        </span>
        <h4 className="font-serif text-xl text-ink leading-snug">{decision}</h4>
      </div>

      {/* Body — two-column on larger screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-ink-faint mb-2">
            The question
          </p>
          <p className="text-sm text-ink-secondary leading-relaxed">{question}</p>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-ink-faint mb-2">
            The tension
          </p>
          <p className="text-sm text-ink-secondary leading-relaxed">{tension}</p>
        </div>

        <div className="sm:col-span-2">
          <p className="font-mono text-xs uppercase tracking-widest text-ink-faint mb-2">
            What we chose
          </p>
          <p className="text-sm text-ink-secondary leading-relaxed">{choice}</p>
        </div>
      </div>

      {/* Result */}
      {result && (
        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-sm text-rust font-medium">{result}</p>
        </div>
      )}
    </div>
  );
}
