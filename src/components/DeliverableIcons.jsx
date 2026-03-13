/* Custom SVG icons for each BRF deliverable — 44×44 viewBox, line-art, currentColor */

const S = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.65, strokeLinecap: 'round', strokeLinejoin: 'round' };

/* 1. Blast Path Register — propagation chain: nodes connected by arrows, terminal node bursts */
export function IconBlastPath() {
  return (
    <svg viewBox="0 0 44 44" width="36" height="36" {...S}>
      {/* Entry node */}
      <circle cx="7" cy="22" r="4"/>
      {/* Mid-hop node */}
      <circle cx="22" cy="22" r="4"/>
      {/* Terminal / admin node */}
      <circle cx="37" cy="22" r="4"/>
      <circle cx="37" cy="22" r="1.8" fill="currentColor" stroke="none"/>
      {/* Arrow: entry → hop */}
      <line x1="11.2" y1="22" x2="16.8" y2="22" strokeWidth="1.3"/>
      <polyline points="14.5,19.5 17.2,22 14.5,24.5" strokeWidth="1.3"/>
      {/* Arrow: hop → terminal */}
      <line x1="26.2" y1="22" x2="31.8" y2="22" strokeWidth="1.3"/>
      <polyline points="29.5,19.5 32.2,22 29.5,24.5" strokeWidth="1.3"/>
      {/* Blast radiating lines from terminal */}
      <line x1="37" y1="16.5" x2="37" y2="13.5" strokeWidth="1.2"/>
      <line x1="41" y1="18" x2="43" y2="16.5" strokeWidth="1.2"/>
      <line x1="41" y1="26" x2="43" y2="27.5" strokeWidth="1.2"/>
      <line x1="37" y1="27.5" x2="37" y2="30.5" strokeWidth="1.2"/>
    </svg>
  );
}

/* 2. Containment Strength Index — gauge arc with needle and domain tick marks */
export function IconCSI() {
  return (
    <svg viewBox="0 0 44 44" width="36" height="36" {...S}>
      {/* Outer gauge arc (half circle, 180°) */}
      <path d="M6,30 A16,16 0 0,1 38,30" strokeWidth="2"/>
      {/* Five domain tick marks */}
      <line x1="6"  y1="30" x2="5"   y2="26" strokeWidth="1.2"/>
      <line x1="13" y1="16" x2="11.5" y2="13" strokeWidth="1.2"/>
      <line x1="22" y1="14" x2="22"   y2="11" strokeWidth="1.2"/>
      <line x1="31" y1="16" x2="32.5" y2="13" strokeWidth="1.2"/>
      <line x1="38" y1="30" x2="39"   y2="26" strokeWidth="1.2"/>
      {/* Inner fill arc ~75% — strong containment */}
      <path d="M9,30 A13,13 0 0,1 35.5,23" strokeWidth="3.5" opacity="0.35"/>
      {/* Needle pointing to ~75% (≈ 135° from left, or 45° from top-right) */}
      <line x1="22" y1="30" x2="33" y2="19" strokeWidth="1.6"/>
      {/* Pivot dot */}
      <circle cx="22" cy="30" r="2.5" fill="currentColor" stroke="none"/>
      {/* Score label area */}
      <line x1="15" y1="36" x2="29" y2="36" strokeWidth="1" opacity="0.4"/>
    </svg>
  );
}

/* 3. Ranked Intervention Matrix — three ranked rows with shrinking priority bars */
export function IconMatrix() {
  return (
    <svg viewBox="0 0 44 44" width="36" height="36" {...S}>
      {/* Row 1 — highest priority */}
      <rect x="4" y="9" width="6" height="6" rx="1.5"/>
      <line x1="4" y1="9" x2="10" y2="15" strokeWidth="0.8" opacity="0"/>
      {/* Priority bar 1 — full */}
      <line x1="14" y1="12" x2="40" y2="12" strokeWidth="2.5"/>
      {/* Row 2 — medium priority */}
      <rect x="4" y="20" width="6" height="6" rx="1.5" opacity="0.7"/>
      {/* Priority bar 2 — 70% */}
      <line x1="14" y1="23" x2="32" y2="23" strokeWidth="2.5" opacity="0.7"/>
      {/* Row 3 — lower priority */}
      <rect x="4" y="31" width="6" height="6" rx="1.5" opacity="0.4"/>
      {/* Priority bar 3 — 45% */}
      <line x1="14" y1="34" x2="24" y2="34" strokeWidth="2.5" opacity="0.4"/>
      {/* Lightning bolt on first row (high impact) */}
      <polyline points="8,7 5.5,12 7.5,12 5,17" strokeWidth="1.3" fill="none"/>
    </svg>
  );
}

/* 4. 60-Day Remediation Sequence — horizontal timeline with milestone markers */
export function IconTimeline() {
  return (
    <svg viewBox="0 0 44 44" width="36" height="36" {...S}>
      {/* Main timeline rail */}
      <line x1="4" y1="22" x2="40" y2="22" strokeWidth="1.4"/>
      {/* Week markers — 4 milestones */}
      {[10, 19, 28, 37].map((x, i) => (
        <g key={x}>
          <circle cx={x} cy="22" r="3.2" fill={i === 0 ? 'currentColor' : 'none'} strokeWidth="1.5"/>
          {i > 0 && <circle cx={x} cy="22" r="1.2" fill="currentColor" stroke="none"/>}
          {/* Week label tick */}
          <line x1={x} y1="26" x2={x} y2="29" strokeWidth="1"/>
        </g>
      ))}
      {/* Completion check on first milestone */}
      <polyline points="7.5,22 9.5,24 12.5,19" strokeWidth="1.5" stroke="currentColor" fill="none"/>
      {/* Bracket at end — open/future */}
      <polyline points="37,16 40,16 40,28 37,28" strokeWidth="1.2"/>
      {/* Day labels */}
      <text x="7" y="36" fontSize="5.5" textAnchor="middle" fill="currentColor" stroke="none" fontFamily="monospace" opacity="0.5">W1</text>
      <text x="37" y="36" fontSize="5.5" textAnchor="middle" fill="currentColor" stroke="none" fontFamily="monospace" opacity="0.5">W8</text>
    </svg>
  );
}

/* 5. Topology & Trust Map — hub-and-spoke network with trust boundary zone */
export function IconTopology() {
  return (
    <svg viewBox="0 0 44 44" width="36" height="36" {...S}>
      {/* Trust boundary dashed ring */}
      <circle cx="22" cy="22" r="14" strokeDasharray="3 2.5" strokeWidth="1" opacity="0.45"/>
      {/* Hub node — center */}
      <circle cx="22" cy="22" r="4"/>
      {/* Satellite nodes */}
      <circle cx="22" cy="7"  r="2.5"/>
      <circle cx="36" cy="16" r="2.5"/>
      <circle cx="35" cy="31" r="2.5"/>
      <circle cx="10" cy="31" r="2.5"/>
      <circle cx="9"  cy="16" r="2.5"/>
      {/* Edges: hub → satellites */}
      <line x1="22" y1="18" x2="22" y2="9.5"  strokeWidth="1.2"/>
      <line x1="25.5" y1="19" x2="33.8" y2="17.2" strokeWidth="1.2"/>
      <line x1="25.3" y1="24.8" x2="33" y2="29.2" strokeWidth="1.2"/>
      <line x1="18.7" y1="24.8" x2="11.5" y2="29.2" strokeWidth="1.2"/>
      <line x1="18.5" y1="19" x2="10.2" y2="17.2" strokeWidth="1.2"/>
    </svg>
  );
}

/* 6. Evidence Package — document with hash/fingerprint verification seal */
export function IconEvidence() {
  return (
    <svg viewBox="0 0 44 44" width="36" height="36" {...S}>
      {/* Document body */}
      <path d="M8,6 L8,38 L32,38 L32,14 L26,6 Z"/>
      {/* Folded corner */}
      <polyline points="26,6 26,14 32,14"/>
      {/* Text lines */}
      <line x1="13" y1="20" x2="27" y2="20" strokeWidth="1.1"/>
      <line x1="13" y1="25" x2="27" y2="25" strokeWidth="1.1"/>
      <line x1="13" y1="30" x2="21" y2="30" strokeWidth="1.1"/>
      {/* Verification seal — circle badge bottom-right */}
      <circle cx="34" cy="33" r="7" fill="var(--bg-card,#0e1620)" strokeWidth="1.5"/>
      {/* Check inside seal */}
      <polyline points="30,33 33,36 38,29" strokeWidth="1.8"/>
    </svg>
  );
}
