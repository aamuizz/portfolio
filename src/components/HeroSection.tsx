import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const projects = [
    { title: 'Web', image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80' },
    { title: 'Mobile App', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80' },
    { title: 'E-Commerce Platform', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80' },
    { title: 'SaaS Dashboard', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80' },
  ];

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
              Full-Stack{' '}
              <span className="text-gradient-primary">Developer</span>
              {' '}&amp;{' '}
              <span className="text-gradient-accent">Freelancer</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              I build performant web & mobile apps, crafting exceptional digital experiences through clean code and creative solutions. 
              Specializing in modern technologies and scalable, production-ready applications.
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
                <p className="font-display text-3xl font-bold text-gradient-accent">100+</p>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <p className="font-display text-3xl font-bold text-foreground">30+</p>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
            </div>
          </div>

          {/* Project Showcase */}
          <div className="relative hidden lg:block animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {projects.map((project, index) => (
                <div
                  key={project.title}
                  className="absolute glass-card rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:scale-105 hover:z-20"
                  style={{
                    top: `${index * 40}px`,
                    left: `${index * 30}px`,
                    zIndex: projects.length - index,
                    transform: `rotate(${(index - 1) * 3}deg)`,
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-80 h-52 object-cover"
                  />
                  <div className="p-4">
                    <p className="font-medium text-foreground">{project.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
