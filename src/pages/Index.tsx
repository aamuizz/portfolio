import StarryBackground from '@/components/StarryBackground';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExpertiseSection from '@/components/ExpertiseSection';
import ServicesSection from '@/components/ServicesSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import { SectionDivider } from '@/components/DecorativeElements';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <StarryBackground />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <SectionDivider variant="wave" />
        <AboutSection />
        <SectionDivider />
        <ExpertiseSection />
        <SectionDivider variant="diagonal" />
        <ServicesSection />
        <SectionDivider />
        <ExperienceSection />
        <SectionDivider variant="wave" />
        <ProjectsSection />
        <SectionDivider />
        <TestimonialsSection />
        <SectionDivider variant="diagonal" />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
