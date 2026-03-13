import './HeroSection.css';

export default function HeroSection() {
  return (
    <section className="hero">
      {/* Background rings */}
      <div className="hero__rings" aria-hidden="true">
        <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg" className="hero__rings-svg">
          <circle cx="400" cy="400" r="120" fill="none" stroke="#378ADD" strokeWidth="1" opacity="0.15"/>
          <circle cx="400" cy="400" r="200" fill="none" stroke="#378ADD" strokeWidth="0.8" opacity="0.10"/>
          <circle cx="400" cy="400" r="290" fill="none" stroke="#378ADD" strokeWidth="0.6" opacity="0.07"/>
          <circle cx="400" cy="400" r="380" fill="none" stroke="#378ADD" strokeWidth="0.5" opacity="0.05"/>
          <circle cx="400" cy="400" r="12" fill="#185FA5" opacity="0.9"/>
          {/* Radiating lines */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => {
            const rad = (deg * Math.PI) / 180;
            const x2 = 400 + Math.cos(rad) * 360;
            const y2 = 400 + Math.sin(rad) * 360;
            const nx = 400 + Math.cos(rad) * 290;
            const ny = 400 + Math.sin(rad) * 290;
            return (
              <g key={i}>
                <line x1="400" y1="400" x2={x2} y2={y2} stroke="#B5D4F4" strokeWidth="0.8" opacity="0.08" strokeLinecap="round"/>
                <circle cx={nx} cy={ny} r="3" fill="#B5D4F4" opacity="0.25"/>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="container hero__content">
        <p className="label">Blast Radius Framework™</p>
        <h1 className="hero__headline">
          Know your<br />blast radius.
        </h1>
        <p className="hero__body">
          A structured AWS security assessment that models every propagation path,
          scores your containment strength, and gives you a sequenced plan to compress
          exposure — before an incident does it for you.
        </p>
        <div className="hero__actions">
          <a href="#report" className="btn btn-primary">
            View Sample Report
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#contact" className="btn btn-outline">Schedule an Assessment</a>
        </div>
        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-num">20+</span>
            <span className="hero__stat-label">Blast paths modeled</span>
          </div>
          <div className="hero__stat-divider"/>
          <div className="hero__stat">
            <span className="hero__stat-num">4</span>
            <span className="hero__stat-label">Framework phases</span>
          </div>
          <div className="hero__stat-divider"/>
          <div className="hero__stat">
            <span className="hero__stat-num">60-day</span>
            <span className="hero__stat-label">Remediation plan</span>
          </div>
          <div className="hero__stat-divider"/>
          <div className="hero__stat">
            <span className="hero__stat-num">0–100</span>
            <span className="hero__stat-label">CSI score</span>
          </div>
        </div>
      </div>
    </section>
  );
}
