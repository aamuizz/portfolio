const ExpertiseSection = () => {
  const technologies = [
    { name: 'React', category: 'Frontend' },
    { name: 'Next.js', category: 'Frontend' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Python', category: 'Language' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'GraphQL', category: 'API' },
    { name: 'Redis', category: 'Cache' },
    { name: 'Tailwind CSS', category: 'Styling' },
    { name: 'Vue.js', category: 'Frontend' },
    { name: 'Kubernetes', category: 'DevOps' },
    { name: 'Firebase', category: 'Backend' },
    { name: 'Prisma', category: 'ORM' },
  ];

  return (
    <section id="expertise" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/50 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">My Toolkit</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Expertise Across{' '}
            <span className="text-gradient-accent">Modern Technologies</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="group px-6 py-3 glass-card rounded-full border border-border/50 hover:border-primary/50 hover:glow-primary transition-all duration-300 cursor-default"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <span className="font-medium group-hover:text-primary transition-colors">
                {tech.name}
              </span>
              <span className="ml-2 text-xs text-muted-foreground">
                {tech.category}
              </span>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mt-20">
          {[
            { value: '50+', label: 'Technologies Mastered' },
            { value: '1M+', label: 'Lines of Code Written' },
            { value: '99%', label: 'Client Satisfaction' },
            { value: '24/7', label: 'Support Available' },
          ].map((stat) => (
            <div key={stat.label} className="text-center glass-card rounded-2xl p-8 hover:glow-secondary transition-all duration-300">
              <p className="font-display text-4xl font-bold text-gradient-primary mb-2">{stat.value}</p>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
