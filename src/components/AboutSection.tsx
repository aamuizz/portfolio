import { MapPin, Code2, Mail, Github, Linkedin } from 'lucide-react';
import userData from '@/constants/data';
import ScrollReveal from '@/components/ScrollReveal';
import { GradientOrbs, DotPattern, GlowEffect } from '@/components/DecorativeElements';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <GradientOrbs className="opacity-50" />
      <DotPattern />
      <GlowEffect position="left" />
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal direction="up" delay={0}>
          <div className="mb-16">
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
              About Me.
            </h1>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" delay={100}>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact & Social Links */}
            <div className="space-y-8">
            <div className="mb-8 relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src={userData.avatarUrl}
                alt={`${userData.name} profile picture`}
                className="relative w-full max-w-xs rounded-2xl object-cover shadow-2xl mb-6 ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-500 group-hover:scale-105"
              />
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Contact</h2>
              <p className="text-muted-foreground mb-4">
                For any sort help / enquiry, shoot a{' '}
                <a
                  href={`mailto:${userData.email}`}
                  className="text-primary border-b-2 border-primary font-bold hover:text-primary/80 transition-colors"
                >
                  mail
                </a>{' '}
                and I'll get back. I swear.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Social Links</h2>
              <div className="space-y-2">
                <a
                  href={userData.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                  <span className="font-mono">GitHub</span>
                </a>
                <a
                  href={userData.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                  <span className="font-mono">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

            {/* About Content */}
            <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              {userData.about.description.map((desc, idx) => (
                <p key={idx} className="text-lg">
                  {desc}
                </p>
              ))}
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6 inline-block bg-primary text-primary-foreground rounded-md px-3 py-1">
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-4 mt-6">
                {userData.techStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-2 px-4 py-2 glass-card rounded-full border border-border/50 hover:border-primary/50 transition-colors"
                  >
                    <Code2 className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              <span>{userData.address}</span>
            </div>
          </div>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AboutSection;
