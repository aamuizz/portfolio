import { ExternalLink } from 'lucide-react';
import userData from '@/constants/data';
import ScrollReveal from '@/components/ScrollReveal';
import { GradientOrbs, GridPattern, GlowEffect } from '@/components/DecorativeElements';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <GradientOrbs className="opacity-40" />
      <GridPattern />
      <GlowEffect position="right" />
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal direction="up" delay={0}>
          <div className="mb-16">
            <p className="text-primary font-medium mb-2">Portfolio</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Featured{' '}
              <span className="text-gradient-primary">Projects</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {userData.projects.map((project, index) => (
            <ScrollReveal key={project.title} direction="up" delay={index * 100}>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-card rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 relative"
            >
              {/* Decorative gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-secondary/0 group-hover:from-primary/10 group-hover:to-secondary/10 transition-all duration-500 rounded-2xl z-10 pointer-events-none" />
              <div className="relative overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative">
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-20" />
                  <img
                    src={project.imgUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 relative z-10"
                    onError={(e) => {
                      // Fallback if image doesn't load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground text-sm font-bold rounded-md px-3 py-1">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-background/80 backdrop-blur-sm rounded-full p-2">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
              </div>
            </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
