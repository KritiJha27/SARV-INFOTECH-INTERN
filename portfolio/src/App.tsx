import Navigation from "./components/Navigation";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import SkillsSection from "./sections/SkillsSection";
import ProjectsSection from "./sections/ProjectsSection";
import ExperienceSection from "./sections/ExperienceSection";
import AchievementsSection from "./sections/AchievementsSection";
import ResumeSection from "./sections/ResumeSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <div className="noise-overlay" />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <AchievementsSection />
        <ResumeSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
