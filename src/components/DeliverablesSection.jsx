import './DeliverablesSection.css';

const ITEMS = [
  {
    icon: '⬡',
    title: 'Blast Path Register',
    desc: '20+ propagation paths, each scored by severity band and entry class. Every path links to evidence, affected resources, and the interventions that address it.',
  },
  {
    icon: '◎',
    title: 'Containment Strength Index',
    desc: 'A 0–100 score across five domains: Identity, Network, Data, Compute, and Control. Shows where your containment is holding and where it breaks down.',
  },
  {
    icon: '≡',
    title: 'Ranked Intervention Matrix',
    desc: 'Every control ranked by impact-to-effort ratio, with dependency chains and projected score impact. Not a flat list — a decision surface.',
  },
  {
    icon: '→',
    title: '60-Day Remediation Sequence',
    desc: 'A week-by-week plan tied to specific blast paths and interventions. Weeks 1–2 address the highest-leverage identity controls; the plan builds from there.',
  },
  {
    icon: '◈',
    title: 'Topology & Trust Map',
    desc: 'Interactive graph of every node, trust relationship, and privilege boundary. Filterable by zone, entry class, and blast path.',
  },
  {
    icon: '✦',
    title: 'Evidence Package',
    desc: 'Every finding backed by AWS API data — IAM GetRolePolicy, CloudTrail AssumeRole events, VPC flow logs. Hash-verified and timestamped.',
  },
];

export default function DeliverablesSection() {
  return (
    <section className="deliverables section" id="deliverables">
      <div className="container">
        <div className="section-header">
          <p className="label">Deliverables</p>
          <h2>One engagement. Six deliverables.</h2>
          <p>
            Every BRF assessment produces a complete interactive report — not a
            slide deck, not a spreadsheet. A navigable, evidence-backed artifact
            your team can act on immediately.
          </p>
        </div>

        <div className="deliverables__grid">
          {ITEMS.map((item, i) => (
            <div key={i} className="deliverables__card">
              <div className="deliverables__icon">{item.icon}</div>
              <h3 className="deliverables__title">{item.title}</h3>
              <p className="deliverables__desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
