interface FlowStep {
  text: string;
  annotation?: string;
  isDropOff?: boolean;
}

interface FlowSide {
  label?: string;
  steps: FlowStep[];
  metric?: string;
}

interface FlowComparisonProps {
  before: FlowSide;
  after: FlowSide;
}

function StepList({ side, variant }: { side: FlowSide; variant: "before" | "after" }) {
  const isBefore = variant === "before";

  return (
    <div className="flex flex-col h-full">
      {/* Column label */}
      <p className="font-mono text-xs uppercase tracking-widest text-ink-faint mb-6">
        {side.label ?? (isBefore ? "Before" : "After")}
      </p>

      {/* Steps */}
      <ol className="flex flex-col gap-0 flex-1">
        {side.steps.map((step, i) => (
          <li key={i} className="flex flex-col">
            <div
              className={[
                "py-3 px-0 border-t border-border",
                step.isDropOff ? "opacity-40" : "",
              ].join(" ")}
            >
              <p
                className={[
                  "text-sm leading-snug",
                  step.isDropOff
                    ? "text-ink-faint line-through"
                    : isBefore
                    ? "text-ink-muted"
                    : "text-ink-secondary",
                ].join(" ")}
              >
                {step.text}
              </p>
              {step.annotation && (
                <p className="text-xs text-ink-faint mt-1 leading-snug italic">
                  {step.annotation}
                </p>
              )}
            </div>
            {/* Connector arrow — not shown after last step */}
            {i < side.steps.length - 1 && (
              <span
                aria-hidden
                className="text-ink-faint text-xs pl-0 py-1 select-none"
              >
                ↓
              </span>
            )}
          </li>
        ))}
      </ol>

      {/* Metric footer */}
      {side.metric && (
        <div className="mt-6 pt-4 border-t border-border">
          <p
            className={[
              "text-sm font-medium",
              isBefore ? "text-ink-muted" : "text-rust",
            ].join(" ")}
          >
            {side.metric}
          </p>
        </div>
      )}
    </div>
  );
}

export default function FlowComparison({ before, after }: FlowComparisonProps) {
  return (
    <div className="border border-border">
      <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-border">
        <div className="p-8 sm:p-10">
          <StepList side={before} variant="before" />
        </div>
        <div className="p-8 sm:p-10">
          <StepList side={after} variant="after" />
        </div>
      </div>
    </div>
  );
}
