interface CaseStudyHeaderProps {
  title: string;
  subtitle: string;
  company: string;
  role: string;
  year: string;
  disciplines: string[];
  principleQuote?: string;
}

export default function CaseStudyHeader({
  title,
  subtitle,
  company,
  role,
  year,
  disciplines,
  principleQuote,
}: CaseStudyHeaderProps) {
  return (
    <div className="pt-16 pb-12 sm:pt-20 sm:pb-16">
      {/* Principle quote — surfaces the reflection up front */}
      {principleQuote && (
        <div className="border-t border-border pt-6 mb-12">
          <p className="font-serif text-lg sm:text-xl text-ink-muted italic leading-relaxed prose-width">
            &ldquo;{principleQuote}&rdquo;
          </p>
        </div>
      )}

      {/* Title */}
      <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-ink leading-tight mb-6 max-w-3xl">
        {title}
      </h1>

      {/* Subtitle */}
      <p className="text-lg sm:text-xl text-ink-secondary leading-relaxed prose-width mb-10">
        {subtitle}
      </p>

      {/* Metadata row */}
      <div className="border-t border-border pt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-ink-faint mb-1">
            Company
          </p>
          <p className="text-sm text-ink-secondary">{company}</p>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-ink-faint mb-1">
            Role
          </p>
          <p className="text-sm text-ink-secondary">{role}</p>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-ink-faint mb-1">
            Year
          </p>
          <p className="text-sm text-ink-secondary">{year}</p>
        </div>
      </div>

      {/* Discipline tags */}
      <div className="flex flex-wrap gap-2 mt-6">
        {disciplines.map((d) => (
          <span
            key={d}
            className="font-mono text-xs uppercase tracking-widest text-ink-faint border border-border px-2 py-1"
          >
            {d}
          </span>
        ))}
      </div>
    </div>
  );
}
