import './FrameworkSection.css';

const PHASES = [
  {
    num: '01',
    name: 'Structural Surface Mapping',
    description:
      'Map every trust relationship, entry class, and privilege boundary in your account. Cross-account trust, environment separation, SAML federation, and CI/CD access chains — fully enumerated and risk-scored.',
    outputs: ['Topology graph', 'Trust map', 'Environment boundary statement', 'Structural findings'],
  },
  {
    num: '02',
    name: 'Propagation Modeling',
    description:
      'Score and rank every viable blast path from each entry class. Each path shows the full propagation chain, a BPSS severity score, hops-to-admin metric, and linked evidence.',
    outputs: ['Blast path register (20+ paths)', 'Severity distribution', 'Propagation summary', 'Path spotlight'],
  },
  {
    num: '03',
    name: 'Containment Strength Evaluation',
    description:
      'Quantify your ability to stop propagation across five domains. The Containment Strength Index (CSI) gives you a single score — and a breakdown that shows exactly where to invest.',
    outputs: ['CSI score (0–100)', 'Domain breakdown', 'Weak point register', 'Benchmark context'],
  },
  {
    num: '04',
    name: 'Risk Compression Plan',
    description:
      'Interventions ranked by impact-to-effort ratio, not arbitrary priority. A sequenced 60-day remediation plan, tied to specific blast paths, that reduces the most risk for the least work.',
    outputs: ['Ranked intervention matrix', '60-day remediation sequence', 'Path reduction projections', 'Score targets'],
  },
];

export default function FrameworkSection() {
  return (
    <section className="framework section" id="framework">
      <div className="container">
        <div className="section-header">
          <p className="label">The Framework</p>
          <h2>Four phases. One complete picture.</h2>
          <p>
            BRF follows a structured four-phase methodology — from surface enumeration
            through containment scoring to prioritized remediation. Every phase feeds
            the next.
          </p>
        </div>

        <div className="framework__phases">
          {PHASES.map((phase, i) => (
            <div key={i} className="framework__phase">
              <div className="framework__phase-num">{phase.num}</div>
              <div className="framework__phase-body">
                <h3 className="framework__phase-name">{phase.name}</h3>
                <p className="framework__phase-desc">{phase.description}</p>
                <div className="framework__phase-outputs">
                  {phase.outputs.map((o, j) => (
                    <span key={j} className="framework__output-chip">{o}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
