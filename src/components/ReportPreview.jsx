import './ReportPreview.css';
import reportImg from '../assets/report-preview.jpg';

const REPORT_URL = '/blast-radius-framework/sample-report/';

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
              secure-stack-consulting.com/blast-radius-framework/sample-report
            </div>
          </div>

          {/* Topology graph screenshot — blurred as teaser */}
          <div className="report-preview__screen">
            <img
              src={reportImg}
              alt="BRF Report — topology & trust map"
              className="report-preview__img"
            />
            {/* Uniform diffused blur across the entire preview */}
            <div className="report-preview__blur" aria-hidden="true"/>
            {/* Solid colour fade at the very bottom */}
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
