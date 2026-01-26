import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import userData from '@/constants/data';

const HeroSection = () => {
  // Get first 3 projects for showcase
  const featuredProjects = userData.projects.slice(0, 3);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-primary/30">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">Available for new projects</span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight">
              <span className="text-gradient-primary">Developer.</span>
              <br />
              <span className="text-gradient-accent">Designer.</span>
              <br />
              <span className="text-gradient-primary">Programmer.</span>
              <br />
              <span className="text-gradient-accent">Freelancer.</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              {userData.about.title}
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#projects">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary group">
                  View my Projects
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <p className="font-display text-3xl font-bold text-gradient-primary">7+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <p className="font-display text-3xl font-bold text-gradient-accent">50+</p>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
            </div>
          </div>

          {/* Avatar Image */}
          <div className="relative hidden lg:block animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="glass-card rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={userData.avatarUrl}
                  alt={`${userData.name} profile picture`}
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>
              <div className="flex flex-row items-center gap-2 mt-4 text-muted-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-90deg-up"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z"
                  />
                </svg>
                <p className="font-mono text-sm">That's me</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
