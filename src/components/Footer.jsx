import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="Secure Stack Consulting" className="footer__logo" />
          <p className="footer__tagline">
            Cloud security consulting focused on blast radius reduction,
            IAM architecture, and AWS security posture.
          </p>
        </div>
        <div className="footer__links">
          <div className="footer__col">
            <div className="footer__col-title">Framework</div>
            <a href="#framework">Methodology</a>
            <a href="#report">Sample Report</a>
            <a href="#deliverables">Deliverables</a>
          </div>
          <div className="footer__col">
            <div className="footer__col-title">Contact</div>
            <a href="mailto:hello@secure-stack.consulting">Email us</a>
            <a href="#contact">Get Assessment</a>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>© {year} Secure Stack Consulting. All rights reserved.</span>
          <span className="footer__mono">BLAST RADIUS FRAMEWORK™</span>
        </div>
      </div>
    </footer>
  );
}
