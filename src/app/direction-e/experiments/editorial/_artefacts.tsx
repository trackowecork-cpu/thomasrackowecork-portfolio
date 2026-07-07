// Editorial Artefacts — large-scale strategic diagrams
// CSS classes used here are animated/transitioned in the parent page's <style> block.
// Never set opacity inline on hover-targeted elements — CSS controls those values.

const BD   = "#252220";
const GR2  = "#131110";
const FNT  = "#5C5652";
const MUT  = "#A8A09A";
const ACC  = "#C4A882";
const MONO = "var(--font-geist-mono,'Courier New',monospace)";

// ── PROXIMUS+ ─────────────────────────────────────────────────────────────────
// Platform architecture cross-section.
// 5 horizontal strata: customers above, data layer below.
// Static connections use .ed-prox-line; the central spine uses .ed-prox-spine + .ed-flow.
// On row hover: connections intensify and the spine animation runs.

export function EditorialProximus() {
  const layers = [
    { label: "CUSTOMER LAYER", y: 30,  nodes: [52, 122, 192, 262, 332, 402, 472] },
    { label: "PRODUCTS",       y: 83,  nodes: [52, 157, 262, 367, 472] },
    { label: "SERVICES",       y: 136, nodes: [52, 136, 220, 304, 388, 472] },
    { label: "PLATFORM CORE",  y: 189, nodes: [96, 262, 428] },
    { label: "DATA LAYER",     y: 242, nodes: [140, 362] },
  ];

  const connections: [number, number, number, number][] = [
    // DATA → PLATFORM
    [140, 242,  96, 189],
    [140, 242, 262, 189],
    [362, 242, 262, 189],
    [362, 242, 428, 189],
    // PLATFORM → SERVICES
    [ 96, 189,  52, 136],
    [ 96, 189, 136, 136],
    [262, 189, 220, 136],
    [262, 189, 304, 136],
    [428, 189, 388, 136],
    [428, 189, 472, 136],
    // SERVICES → PRODUCTS
    [ 52, 136,  52,  83],
    [136, 136, 157,  83],
    [220, 136, 157,  83],
    [304, 136, 262,  83],
    [388, 136, 367,  83],
    [472, 136, 472,  83],
    // PRODUCTS → CUSTOMERS
    [ 52,  83,  52,  30],
    [ 52,  83, 122,  30],
    [157,  83, 192,  30],
    [262,  83, 262,  30],
    [262,  83, 332,  30],
    [367,  83, 332,  30],
    [367,  83, 402,  30],
    [472,  83, 472,  30],
  ];

  // Spine: central column connections, animated on hover
  const spineIdx = new Set([1, 6, 11, 18]);

  return (
    <svg viewBox="0 0 480 268" width="100%" aria-hidden={true}>
      {/* alternating layer fills — subtle depth */}
      {([0, 110, 216] as const).map(y => (
        <rect key={y} x={0} y={y}
          width={480} height={y === 0 ? 57 : y === 110 ? 53 : 52}
          fill={GR2} opacity={0.4} />
      ))}

      {/* horizontal layer dividers */}
      {([0, 57, 110, 163, 216, 268] as const).map(y => (
        <line key={y} x1={0} y1={y} x2={480} y2={y}
          stroke={BD} strokeWidth={0.5} />
      ))}

      {/* static connections — opacity controlled by CSS .ed-prox-line */}
      {connections.map(([x1, y1, x2, y2], i) =>
        !spineIdx.has(i) ? (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
            stroke={BD} strokeWidth={0.5}
            className="ed-prox-line" />
        ) : null
      )}

      {/* spine connections — flow animated on hover */}
      {connections.map(([x1, y1, x2, y2], i) =>
        spineIdx.has(i) ? (
          <line key={`s${i}`} x1={x1} y1={y1} x2={x2} y2={y2}
            stroke={MUT} strokeWidth={1}
            className="ed-flow ed-prox-spine" />
        ) : null
      )}

      {/* nodes per layer */}
      {layers.map(({ label, y, nodes }, li) => (
        <g key={li}>
          <text x={4} y={y + 4} fontSize={8} fontFamily={MONO}
            fill={li === 0 || li === 3 || li === 4 ? MUT : FNT}
            letterSpacing={0.8}>
            {label}
          </text>
          {nodes.map((x, ni) => {
            const isData     = li === 4;
            const isPlatform = li === 3;
            const r = isData ? 6 : isPlatform ? 5 : 4;
            const strokeColor = isData ? ACC : isPlatform ? MUT : FNT;
            const fill = isData ? "#1E1B17" : "#181512";
            return (
              <circle key={ni} cx={x} cy={y} r={r}
                fill={fill}
                stroke={strokeColor}
                strokeWidth={isData ? 1.25 : isPlatform ? 1 : 0.75}
                className={isData || isPlatform ? "ed-node-primary" : "ed-node"}
                style={{
                  animationDelay:    `${-(li * 0.6 + ni * 0.25)}s`,
                  animationDuration: `${4.5 + li * 0.35 + (ni % 3) * 0.4}s`,
                }}
              />
            );
          })}
        </g>
      ))}
    </svg>
  );
}

// ── ESHARE ────────────────────────────────────────────────────────────────────
// Journey consolidation flow.
// Five acquisition channels → three-node ordering system → single conversion event.
// On hover: channel-to-outcome path brightens; flow dashes run.

export function EditorialEshare() {
  const entryY  = [28, 72, 120, 168, 212];
  const sysNodes = [
    { x: 218, y: 54,  r: 5.5 },
    { x: 218, y: 120, r: 7.5 },
    { x: 218, y: 186, r: 5.5 },
  ];
  const goalX = 416, goalY = 120;

  const entryLines: [number, number, number, number, boolean][] = [
    [52, 28,  218, 54,  false],
    [52, 72,  218, 54,  false],
    [52, 120, 218, 120, false],
    [52, 168, 218, 120, false],
    [52, 212, 218, 186, true],   // dashed — broken path
  ];

  return (
    <svg viewBox="0 0 480 240" width="100%" aria-hidden={true}>
      {/* section labels */}
      <text x={20}  y={14} fontSize={8} fontFamily={MONO} fill={MUT} letterSpacing={0.8}>CHANNELS</text>
      <text x={182} y={14} fontSize={8} fontFamily={MONO} fill={MUT} letterSpacing={0.8}>SYSTEM</text>
      <text x={375} y={14} fontSize={8} fontFamily={MONO} fill={MUT} letterSpacing={0.8}>OUTCOME</text>

      {/* entry → system — opacity via .ed-share-entry */}
      {entryLines.map(([x1, y1, x2, y2, dashed], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
          stroke={dashed ? FNT : BD}
          strokeWidth={0.5}
          strokeDasharray={dashed ? "2 5" : undefined}
          className={dashed ? "ed-share-entry" : "ed-share-entry"}
        />
      ))}

      {/* vertical connectors between system nodes */}
      <line x1={218} y1={54 + 5.5}  x2={218} y2={120 - 7.5}
        stroke={BD} strokeWidth={0.5} opacity={0.5} />
      <line x1={218} y1={120 + 7.5} x2={218} y2={186 - 5.5}
        stroke={BD} strokeWidth={0.5} opacity={0.5} />

      {/* system → goal: secondary — opacity via .ed-share-secondary */}
      <line x1={218} y1={54}  x2={goalX - 14} y2={goalY}
        stroke={BD} strokeWidth={0.5} className="ed-share-secondary" />
      <line x1={218} y1={186} x2={goalX - 14} y2={goalY}
        stroke={BD} strokeWidth={0.5} className="ed-share-secondary" />

      {/* system → goal: primary — flow animated on hover */}
      <line x1={218} y1={120} x2={goalX - 14} y2={goalY}
        stroke={MUT} strokeWidth={1}
        className="ed-flow ed-share-main" />

      {/* entry nodes */}
      {entryY.map((y, i) => (
        <circle key={i} cx={52} cy={y} r={4}
          fill="#181512" stroke={FNT} strokeWidth={0.75}
          className="ed-node"
          style={{ animationDelay: `${-(i * 0.4)}s`, animationDuration: `${4.5 + i * 0.3}s` }}
        />
      ))}

      {/* system nodes */}
      {sysNodes.map(({ x, y, r }, i) => (
        <circle key={i} cx={x} cy={y} r={r}
          fill="#181512"
          stroke={i === 1 ? MUT : FNT}
          strokeWidth={i === 1 ? 1.25 : 0.75}
          className={i === 1 ? "ed-node-primary" : "ed-node"}
          style={{ animationDelay: `${-(i * 0.7)}s`, animationDuration: `${4 + i * 0.4}s` }}
        />
      ))}

      {/* goal node */}
      <circle cx={goalX} cy={goalY} r={14}
        fill="#1E1B17" stroke={ACC} strokeWidth={1.5}
        className="ed-node-primary"
        style={{ animationDelay: "-1.2s", animationDuration: "4s" }}
      />
      <circle cx={goalX} cy={goalY} r={5}
        fill={ACC} opacity={0.65}
        className="ed-node"
        style={{ animationDelay: "-0.6s", animationDuration: "4s" }}
      />
    </svg>
  );
}

// ── ESIM ──────────────────────────────────────────────────────────────────────
// Transformation diagram: physical vs digital activation.
// Left — dense sequential process. Right — three clean digital steps.
// On hover: digital side lifts, physical recedes, flow lines run.

export function EditorialESim() {
  const physY    = [26, 57, 88, 119, 150, 181];
  const digX     = [286, 352, 418];
  const digY     = 110;
  const dividerX = 246;

  return (
    <svg viewBox="0 0 480 228" width="100%" aria-hidden={true}>
      {/* section labels */}
      <text x={52}  y={14} fontSize={8} fontFamily={MONO} fill={FNT}  letterSpacing={0.8}>PHYSICAL</text>
      <text x={260} y={14} fontSize={8} fontFamily={MONO} fill={MUT}  letterSpacing={0.8}>DIGITAL</text>

      {/* divider */}
      <line x1={dividerX} y1={6} x2={dividerX} y2={210}
        stroke={BD} strokeWidth={0.75} strokeDasharray="3 6" opacity={0.7} />

      {/* physical steps — opacity via .ed-esim-phys */}
      {physY.map((y, i) => (
        <g key={i}>
          <rect x={48} y={y} width={108} height={24} rx={2}
            fill={BD} stroke={FNT} strokeWidth={0.5}
            className="ed-esim-phys" />
          {i < physY.length - 1 && (
            <line x1={102} y1={y + 24} x2={102} y2={physY[i + 1]}
              stroke={FNT} strokeWidth={0.5}
              className="ed-esim-phys-conn" />
          )}
        </g>
      ))}

      {/* digital connector lines — flow animated on hover */}
      <line x1={286 + 9} y1={digY} x2={352 - 9} y2={digY}
        stroke={FNT} strokeWidth={0.75}
        className="ed-flow ed-esim-flow" />
      <line x1={352 + 9} y1={digY} x2={418 - 14} y2={digY}
        stroke={MUT} strokeWidth={1}
        className="ed-flow ed-esim-flow" />

      {/* digital nodes */}
      {digX.map((x, i) => {
        const isFinal = i === digX.length - 1;
        const r = isFinal ? 14 : 9;
        return (
          <g key={i}>
            <circle cx={x} cy={digY} r={r}
              fill={isFinal ? "#1E1B17" : "#181512"}
              stroke={isFinal ? ACC : FNT}
              strokeWidth={isFinal ? 1.5 : 0.75}
              className={`${isFinal ? "ed-node-primary" : "ed-node"} ed-esim-digital`}
              style={{
                animationDelay:    `${-(i * 0.6)}s`,
                animationDuration: `${4 + i * 0.5}s`,
              }}
            />
            {isFinal && (
              <circle cx={x} cy={digY} r={5.5}
                fill={ACC} opacity={0.65}
                className="ed-node ed-esim-digital"
                style={{ animationDelay: "-0.3s", animationDuration: "4s" }}
              />
            )}
          </g>
        );
      })}

      {/* timeline bars */}
      <rect x={48}  y={213} width={108} height={4} rx={2} fill={BD}  opacity={0.55} />
      <rect x={260} y={213} width={22}  height={4} rx={2} fill={ACC} opacity={0.45} />
      <text x={48}  y={224} fontSize={7} fontFamily={MONO} fill={FNT} letterSpacing={0.5}>6 WEEKS</text>
      <text x={260} y={224} fontSize={7} fontFamily={MONO} fill={MUT} letterSpacing={0.5}>INSTANT</text>
    </svg>
  );
}

// ── ARTEIA ────────────────────────────────────────────────────────────────────
// Collection ecosystem — radial network map.
// Central platform hub, seven asset category satellites, ring connections.
// On hover: all spokes animate, ring connections brighten.

export function EditorialArteia() {
  const R = 108, cx = 240, cy = 140;
  const categories = [
    "JEWELLERY", "WATCHES", "WINE",
    "CARS", "FASHION", "BOOKS", "ART",
  ];

  type CatNode = { label: string; x: number; y: number; angle: number };

  const catNodes: CatNode[] = categories.map((label, i) => {
    const angle = (-90 + i * (360 / 7)) * (Math.PI / 180);
    return {
      label,
      x: Math.round(cx + R * Math.cos(angle)),
      y: Math.round(cy + R * Math.sin(angle)),
      angle,
    };
  });

  return (
    <svg viewBox="0 0 480 280" width="100%" aria-hidden={true}>
      {/* ring connections — opacity via .ed-arteia-ring */}
      {catNodes.map((node, i) => {
        const next = catNodes[(i + 1) % catNodes.length];
        return (
          <line key={`ring-${i}`}
            x1={node.x} y1={node.y} x2={next.x} y2={next.y}
            stroke={BD} strokeWidth={0.5}
            className="ed-arteia-ring" />
        );
      })}

      {/* spokes — all animated on hover, opacity via .ed-arteia-spoke */}
      {catNodes.map((node, i) => (
        <line key={`spoke-${i}`}
          x1={cx} y1={cy} x2={node.x} y2={node.y}
          stroke={i % 2 === 0 ? MUT : BD}
          strokeWidth={0.5}
          className="ed-flow ed-arteia-spoke" />
      ))}

      {/* category nodes and labels */}
      {catNodes.map(({ label, x, y, angle }, i) => {
        const outDir = { x: Math.cos(angle), y: Math.sin(angle) };
        const lx = Math.round(x + outDir.x * 20);
        const ly = Math.round(y + outDir.y * 20);
        const anchor = outDir.x > 0.3 ? "start" : outDir.x < -0.3 ? "end" : "middle";
        return (
          <g key={i}>
            <circle cx={x} cy={y} r={5.5}
              fill="#181512" stroke={FNT} strokeWidth={0.75}
              className="ed-node ed-arteia-cat"
              style={{
                animationDelay:    `${-(i * 0.45)}s`,
                animationDuration: `${4.5 + i * 0.25}s`,
              }}
            />
            <text x={lx} y={ly + 3}
              textAnchor={anchor}
              fontSize={8} fontFamily={MONO}
              fill={MUT} letterSpacing={0.6}>
              {label}
            </text>
          </g>
        );
      })}

      {/* central hub */}
      <circle cx={cx} cy={cy} r={24}
        fill="#1C1A17" stroke={ACC} strokeWidth={1.25}
        className="ed-node-primary"
        style={{ animationDelay: "-0.8s", animationDuration: "5s" }}
      />
      <circle cx={cx} cy={cy} r={10}
        fill="none" stroke={ACC} strokeWidth={0.5} opacity={0.35}
        className="ed-node"
        style={{ animationDelay: "-1.6s", animationDuration: "5s" }}
      />
      <text x={cx} y={cy + 4} textAnchor="middle"
        fontSize={7} fontFamily={MONO} fill={MUT} letterSpacing={0.8}>
        COLLECTION
      </text>
    </svg>
  );
}
