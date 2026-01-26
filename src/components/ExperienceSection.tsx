import { Building2 } from 'lucide-react';
import userData from '@/constants/data';
import ScrollReveal from '@/components/ScrollReveal';

const ExperienceSection = () => {
  const experiences = userData.experience.map((exp) => ({
    role: exp.title,
    company: exp.company,
    period: exp.year,
    description: exp.desc,
    companyLink: exp.companyLink,
  }));

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <ScrollReveal direction="up" delay={0}>
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2">Career Journey</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Work{' '}
              <span className="text-gradient-primary">Experience</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent transform md:-translate-x-px" />

          {experiences.map((exp, index) => (
            <ScrollReveal key={exp.company} direction={index % 2 === 0 ? 'left' : 'right'} delay={index * 100}>
            <div
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1.5 md:-translate-x-2 mt-6 glow-primary" />

              {/* Content */}
              <div className={`flex-1 ml-8 md:ml-0 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                <div className="glass-card rounded-2xl p-6 hover:glow-secondary transition-all duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <Building2 className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold">{exp.role}</h3>
                      <a
                        href={exp.companyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        {exp.company}
                      </a>
                      <p className="text-sm text-muted-foreground">{exp.period}</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground">{exp.description}</p>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
            </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
