import reportImg from '../assets/report-preview.jpg';
import './ReportPreview.css';

export default function ReportPreview() {
  return (
    <section className="report-preview section" id="report">
      <div className="container">
        <div className="section-header">
          <p className="label">Sample Report</p>
          <h2>See what you get.</h2>
          <p>
            The BRF report is an interactive deliverable — not a PDF. Every section
            is navigable, every path is explorable, and every intervention links back
            to the blast paths it addresses.
          </p>
        </div>

        <div className="report-preview__frame">
          {/* Browser chrome bar */}
          <div className="report-preview__chrome">
            <div className="report-preview__dots">
              <span/><span/><span/>
            </div>
            <div className="report-preview__url">
              <span className="report-preview__url-icon">🔒</span>
              brf-report.secure-stack.consulting
            </div>
          </div>

          {/* Report screenshot */}
          <div className="report-preview__screen">
            <img
              src={reportImg}
              alt="BRF Sample Report — interactive security assessment"
              className="report-preview__img"
            />
            {/* Clean gradient fade — no blur, just a fade into the CTA */}
            <div className="report-preview__fade"/>

            {/* CTA overlay */}
            <div className="report-preview__overlay">
              <p className="report-preview__overlay-text">
                Interactive report with 20 blast paths, CSI scorecard, and intervention matrix
              </p>
              <a
                href="https://github.com/oliver-clawd/brf-report"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View Sample Report
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
