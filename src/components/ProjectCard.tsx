import Link from "next/link";

interface ProjectCardProps {
  number: string;
  title: string;
  company: string;
  year: string;
  disciplines: string[];
  description: string;
  metric?: string;
  href?: string;
  status?: "live" | "in-progress";
}

function CardContent({
  number,
  title,
  company,
  year,
  disciplines,
  description,
  metric,
  href,
  status,
}: ProjectCardProps) {
  return (
    <div className="group border-t border-border py-10 sm:py-12 grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-8">
      {/* Number */}
      <div className="sm:col-span-1 flex sm:block items-center gap-4">
        <span className="font-mono text-xs text-ink-faint select-none">
          {number}
        </span>
      </div>

      {/* Main content */}
      <div className="sm:col-span-8">
        <h3 className="font-serif text-2xl sm:text-3xl text-ink leading-snug mb-3 group-hover:text-rust transition-colors duration-200">
          {title}
        </h3>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-4">
          <span className="text-sm text-ink-muted">{company}</span>
          <span className="text-ink-faint" aria-hidden>
            ·
          </span>
          <span className="text-sm text-ink-muted">{year}</span>
          {status === "in-progress" && (
            <>
              <span className="text-ink-faint" aria-hidden>
                ·
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-rust">
                In progress
              </span>
            </>
          )}
        </div>

        <div className="flex flex-wrap gap-2 mb-5">
          {disciplines.map((d) => (
            <span
              key={d}
              className="font-mono text-xs uppercase tracking-widest text-ink-faint border border-border px-2 py-1"
            >
              {d}
            </span>
          ))}
        </div>

        <p className="text-base text-ink-secondary leading-relaxed max-w-xl">
          {description}
        </p>
      </div>

      {/* Metric + link */}
      <div className="sm:col-span-3 flex flex-row sm:flex-col items-start sm:items-end justify-between gap-4">
        {metric && (
          <p className="font-serif text-2xl sm:text-3xl text-rust leading-none">
            {metric}
          </p>
        )}
        {href && (
          <span className="text-sm text-ink-muted group-hover:text-ink transition-colors duration-200 flex items-center gap-1 mt-auto whitespace-nowrap">
            View case study
            <span
              aria-hidden
              className="transition-transform duration-200 group-hover:translate-x-1 inline-block"
            >
              →
            </span>
          </span>
        )}
      </div>
    </div>
  );
}

export default function ProjectCard(props: ProjectCardProps) {
  if (props.href) {
    return (
      <Link href={props.href} className="block">
        <CardContent {...props} />
      </Link>
    );
  }
  return <CardContent {...props} />;
}
