type FieldColor = "brown" | "sage" | "tan" | "terracotta";

interface MetricCardProps {
  value: string;
  label: string;
  context?: string;
  dark?: boolean;
  fieldColor?: FieldColor;
}

const fieldBgMap: Record<FieldColor, string> = {
  brown: "bg-field-brown",
  sage: "bg-field-sage",
  tan: "bg-field-tan",
  terracotta: "bg-field-terracotta",
};

export default function MetricCard({
  value,
  label,
  context,
  dark = false,
  fieldColor,
}: MetricCardProps) {
  const isDark = dark || Boolean(fieldColor);

  const cardBg = fieldColor
    ? fieldBgMap[fieldColor]
    : dark
    ? "bg-ink"
    : "bg-canvas-alt border border-border";

  const valueColor = isDark ? "text-canvas" : "text-ink";
  const labelColor = isDark ? "text-canvas/70" : "text-ink-secondary";
  const contextColor = isDark ? "text-canvas/50" : "text-ink-muted";

  return (
    <div
      className={`${cardBg} p-8 sm:p-10 flex flex-col justify-between min-h-48`}
    >
      <p
        className={`font-serif text-5xl sm:text-6xl leading-none tracking-tight ${valueColor}`}
      >
        {value}
      </p>
      <div className="mt-8">
        <p className={`text-sm font-medium ${labelColor}`}>{label}</p>
        {context && (
          <p className={`text-sm mt-1 leading-snug ${contextColor}`}>
            {context}
          </p>
        )}
      </div>
    </div>
  );
}
