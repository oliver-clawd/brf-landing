import './ReportPreview.css';

// Dev: point to local report. Update to deployed URL before going live.
const REPORT_URL = 'http://localhost:5173';

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

          {/* Live report iframe — perfectly crisp, no JPEG compression */}
          <div className="report-preview__screen" ref={el => {
            if (el) {
              const scale = el.offsetWidth / 1280;
              el.style.setProperty('--preview-scale', scale);
            }
          }}>
            <div className="report-preview__iframe-wrap">
              <iframe
                src={REPORT_URL}
                className="report-preview__iframe"
                title="BRF Sample Report"
                scrolling="no"
                tabIndex="-1"
              />
            </div>
            {/* Clean gradient fade into the CTA overlay */}
            <div className="report-preview__fade"/>

            {/* CTA overlay */}
            <div className="report-preview__overlay">
              <p className="report-preview__overlay-text">
                Interactive report with 20 blast paths, CSI scorecard, and intervention matrix
              </p>
              <a
                href={REPORT_URL}
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
