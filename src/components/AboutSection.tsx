import { MapPin, Coffee, Code2, Rocket } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    { icon: Code2, label: 'Clean Code Advocate' },
    { icon: Coffee, label: 'Coffee Enthusiast' },
    { icon: Rocket, label: 'Startup Mindset' },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative animate-slide-in">
            <div className="relative z-10">
              <div className="glass-card rounded-3xl p-2 glow-secondary">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
                  alt="Profile"
                  className="rounded-2xl w-full aspect-square object-cover"
                />
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/30 rounded-full blur-2xl" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary/30 rounded-full blur-2xl" />
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <p className="text-primary font-medium mb-2">About Me</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Passionate about crafting{' '}
                <span className="text-gradient-primary">digital excellence</span>
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                With over 8 years of experience in full-stack development, I've had the privilege of working 
                with startups, enterprises, and everything in between. My journey began with a curiosity 
                for how things work on the web, and it has evolved into a deep passion for building 
                scalable, performant applications.
              </p>
              <p>
                I specialize in React, Node.js, and cloud technologies, with a strong focus on creating 
                intuitive user experiences backed by robust architecture. When I'm not coding, you'll 
                find me creating content to help other developers grow in their careers.
              </p>
            </div>

            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Based in San Francisco, CA • Available Worldwide</span>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              {highlights.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 px-4 py-2 glass-card rounded-full">
                  <Icon className="w-4 h-4 text-primary" />
                  <span className="text-sm">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
