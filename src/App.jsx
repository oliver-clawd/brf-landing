import './index.css';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import FrameworkSection from './components/FrameworkSection';
import ReportPreview from './components/ReportPreview';
import DeliverablesSection from './components/DeliverablesSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <div className="divider" />
        <ProblemSection />
        <div className="divider" />
        <FrameworkSection />
        <div className="divider" />
        <ReportPreview />
        <div className="divider" />
        <DeliverablesSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
