// Abstract strategic artefacts — used across all homepage visual experiments

const BD   = "#252220";
const FNT  = "#5C5652";
const MUT  = "#A8A09A";
const ACC  = "#C4A882";
const MONO = "var(--font-geist-mono,'Courier New',monospace)";

// Proximus+: product/service architecture — 5 stacked layers, staircase right edge
export function ArtefactProximus() {
  const layers = ["CUSTOMER", "PRODUCT", "SERVICE", "PLATFORM", "DATA"];
  return (
    <svg viewBox="0 0 180 104" width="100%" style={{ display: "block" }} aria-hidden={true}>
      {layers.map((lbl, i) => (
        <g key={i}>
          <rect x={0} y={i * 22} width={180 - i * 20} height={16} rx={2} fill={BD} />
          <text x={8} y={i * 22 + 11.5} fontSize={7.5} fontFamily={MONO} fill={FNT} letterSpacing={1}>{lbl}</text>
        </g>
      ))}
    </svg>
  );
}

// eShare: acquisition funnel — 5 centred stages narrowing to conversion
export function ArtefactEshare() {
  const stages = ["AWARENESS", "VISITS", "INTENT", "CART", "ORDER"];
  return (
    <svg viewBox="0 0 180 90" width="100%" style={{ display: "block" }} aria-hidden={true}>
      {stages.map((lbl, i) => {
        const bw = 180 - i * 28;
        const x = (180 - bw) / 2;
        return (
          <g key={i}>
            <rect x={x} y={i * 19} width={bw} height={14} rx={2} fill={BD} />
            <text x={90} y={i * 19 + 10} textAnchor="middle" fontSize={7} fontFamily={MONO} fill={FNT} letterSpacing={0.8}>{lbl}</text>
          </g>
        );
      })}
    </svg>
  );
}

// eSIM: activation flow — linear node chain, final node accent-lit
export function ArtefactESim() {
  const steps = ["REQUEST", "VERIFY", "PROVISION", "ACTIVE"];
  const cx = (i: number) => 18 + i * 48;
  const last = steps.length - 1;
  return (
    <svg viewBox="0 0 180 46" width="100%" style={{ display: "block" }} aria-hidden={true}>
      {steps.slice(0, -1).map((_, i) => (
        <line key={i} x1={cx(i) + 9} y1={14} x2={cx(i + 1) - 9} y2={14} stroke={BD} strokeWidth={1.5} />
      ))}
      {steps.map((lbl, i) => (
        <g key={i}>
          <circle
            cx={cx(i)} cy={14} r={9}
            fill={i === last ? "#1C1A17" : BD}
            stroke={i === last ? ACC : FNT}
            strokeWidth={i === last ? 1 : 0.5}
          />
          {i === last && <circle cx={cx(i)} cy={14} r={3} fill={ACC} />}
          <text x={cx(i)} y={40} textAnchor="middle" fontSize={6.5} fontFamily={MONO} fill={FNT} letterSpacing={0.5}>{lbl}</text>
        </g>
      ))}
    </svg>
  );
}

// Arteïa: multi-category collection ecosystem — 2×3 category grid
export function ArtefactArteia() {
  const cats = [["ART", "JEWELLERY", "WATCHES"], ["WINE", "CARS", "OTHER"]];
  const cw = 54, ch = 26, gap = 6;
  return (
    <svg viewBox="0 0 174 58" width="100%" style={{ display: "block" }} aria-hidden={true}>
      {cats.map((row, ri) =>
        row.map((lbl, ci) => (
          <g key={lbl}>
            <rect x={ci * (cw + gap)} y={ri * (ch + gap)} width={cw} height={ch} rx={2} fill={BD} />
            <text
              x={ci * (cw + gap) + cw / 2} y={ri * (ch + gap) + ch / 2 + 3}
              textAnchor="middle" fontSize={6.5} fontFamily={MONO} fill={MUT} letterSpacing={0.6}
            >{lbl}</text>
          </g>
        ))
      )}
    </svg>
  );
}
