interface SectionHeaderProps {
  label: string;
  className?: string;
}

export default function SectionHeader({
  label,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`border-t border-border pt-3 ${className}`}>
      <span className="font-mono text-xs uppercase tracking-widest text-ink-muted">
        {label}
      </span>
    </div>
  );
}
