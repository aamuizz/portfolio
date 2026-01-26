import { Building2 } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      role: 'Senior Full-Stack Developer',
      company: 'Tech Innovators Inc.',
      period: '2022 - Present',
      description: 'Leading development of enterprise-scale applications using React, Node.js, and AWS. Mentoring junior developers and establishing best practices.',
      achievements: ['Led team of 8 developers', 'Reduced load time by 60%', 'Implemented CI/CD pipelines'],
    },
    {
      role: 'Full-Stack Developer',
      company: 'StartupHub',
      period: '2019 - 2022',
      description: 'Built and scaled multiple SaaS products from scratch. Worked directly with founders to translate business requirements into technical solutions.',
      achievements: ['Built 5 products from 0 to launch', 'Grew user base to 100K+', 'Integrated 20+ third-party APIs'],
    },
    {
      role: 'Frontend Developer',
      company: 'Digital Agency Co.',
      period: '2017 - 2019',
      description: 'Created responsive web applications and interactive user interfaces for various clients across industries.',
      achievements: ['Delivered 30+ client projects', 'Improved UX metrics by 45%', 'Introduced React to the team'],
    },
    {
      role: 'Junior Developer',
      company: 'CodeFirst Studios',
      period: '2015 - 2017',
      description: 'Started my professional journey building websites and learning modern web development practices.',
      achievements: ['Mastered JavaScript ecosystem', 'Built first open-source library', 'Received "Rising Star" award'],
    },
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">Career Journey</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Work{' '}
            <span className="text-gradient-primary">Experience</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent transform md:-translate-x-px" />

          {experiences.map((exp, index) => (
            <div
              key={exp.company}
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
                      <p className="text-primary">{exp.company}</p>
                      <p className="text-sm text-muted-foreground">{exp.period}</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.achievements.map((achievement) => (
                      <span
                        key={achievement}
                        className="text-xs px-3 py-1 rounded-full bg-secondary/20 text-secondary"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
