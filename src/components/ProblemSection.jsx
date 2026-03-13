import './ProblemSection.css';

export default function ProblemSection() {
  return (
    <section className="problem section">
      <div className="container">
        <div className="problem__grid">
          <div className="problem__text">
            <p className="label">The Problem</p>
            <h2 className="problem__headline">
              Security tools find vulnerabilities.<br />
              BRF maps their blast radius.
            </h2>
            <p className="problem__body">
              Your CSPM flags misconfigurations. Your pentest finds entry points.
              What neither answers: <em>how far can an attacker move before you stop them?</em>
            </p>
            <p className="problem__body">
              BRF models the full propagation graph — from initial compromise to
              org-admin — so you know exactly what's at risk, how fast, and what
              actually stops the spread.
            </p>
          </div>
          <div className="problem__cards">
            <div className="problem__card problem__card--bad">
              <div className="problem__card-label">Without BRF</div>
              <ul className="problem__list">
                <li>Long list of findings — no propagation context</li>
                <li>Unknown blast radius per vulnerability</li>
                <li>No path from entry point to crown jewel impact</li>
                <li>Remediation ordered by CVSS, not actual risk</li>
                <li>No containment score to measure improvement</li>
              </ul>
            </div>
            <div className="problem__card problem__card--good">
              <div className="problem__card-label">With BRF</div>
              <ul className="problem__list">
                <li>Every blast path scored and ranked by severity</li>
                <li>Propagation chain from compromise to impact, modeled</li>
                <li>CSI score: measurable containment across 5 domains</li>
                <li>Interventions ranked by impact-to-effort ratio</li>
                <li>60-day sequenced plan, tied to specific blast paths</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
