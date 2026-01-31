import { Code2, Smartphone, Cloud, Database, Zap, Settings, LucideIcon, Calendar } from 'lucide-react';
import userData from '@/constants/data';
import ScrollReveal from '@/components/ScrollReveal';
import { GradientOrbs, GridPattern, GlowEffect } from '@/components/DecorativeElements';

const ServicesSection = () => {
  // Icon mapping
  const iconMap: Record<string, LucideIcon> = {
    Code2,
    Smartphone,
    Cloud,
    Database,
    Zap,
    Settings,
  };

  const defaultServices = [
    {
      title: 'Web Development',
      description: 'Building modern, responsive web applications using React, Next.js, and TypeScript. From landing pages to complex enterprise solutions.',
      icon: 'Code2',
      features: ['React & Next.js', 'TypeScript', 'Responsive Design', 'Performance Optimization'],
    },
    {
      title: 'Mobile App Development',
      description: 'Cross-platform mobile applications for iOS and Android using React Native and Expo. Native performance with shared codebase.',
      icon: 'Smartphone',
      features: ['React Native', 'Expo', 'iOS & Android', 'App Store Deployment'],
    },
    {
      title: 'Backend Development',
      description: 'Scalable server-side solutions with RESTful APIs, GraphQL, and microservices architecture. Built for performance and reliability.',
      icon: 'Database',
      features: ['Node.js & NestJS', 'GraphQL', 'REST APIs', 'Microservices'],
    },
    {
      title: 'Cloud & DevOps',
      description: 'Deploying and managing applications on AWS with CI/CD pipelines, containerization, and infrastructure as code.',
      icon: 'Cloud',
      features: ['AWS Services', 'Docker', 'CI/CD', 'Infrastructure Setup'],
    },
    {
      title: 'API Development',
      description: 'Designing and building robust APIs with proper authentication, rate limiting, and comprehensive documentation.',
      icon: 'Zap',
      features: ['REST & GraphQL', 'Authentication', 'API Documentation', 'Rate Limiting'],
    },
    {
      title: 'Maintenance & Support',
      description: 'Ongoing maintenance, bug fixes, security updates, and performance monitoring to keep your applications running smoothly.',
      icon: 'Settings',
      features: ['Bug Fixes', 'Security Updates', 'Performance Monitoring', 'Technical Support'],
    },
  ];

  const services = userData.services || defaultServices;

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent" />
      <GradientOrbs className="opacity-40" />
      <GridPattern />
      <GlowEffect position="bottom" />
      
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal direction="up" delay={0}>
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2">What I Offer</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Services &{' '}
              <span className="text-gradient-primary">Solutions</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Comprehensive development services to bring your ideas to life, from concept to deployment and beyond.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Code2;
            return (
              <ScrollReveal key={service.title} direction="up" delay={index * 100}>
                <div className="glass-card rounded-2xl p-8 hover:glow-secondary transition-all duration-300 group h-full flex flex-col relative overflow-hidden">
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="mb-6 relative z-10">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 relative">
                      <div className="absolute inset-0 bg-primary/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                      <Icon className="w-7 h-7 text-primary relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                    </div>
                    <h3 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="mt-auto">
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal direction="up" delay={600}>
          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-6">
              Have a project in mind? Let's discuss how I can help bring it to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://mentoga.com/abdulmuizz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 glow-primary transition-all duration-300 group"
              >
                <Calendar className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Schedule a Call
              </a>
              <a 
                href="https://api.whatsapp.com/send/?phone=923000870860&text=Hello%21+I+came+across+your+portfolio+at+abdulmuizz.com+and+I%27m+interested+in+discussing+a+potential+project.+Are+you+available+for+a+conversation%3F&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-muted transition-all duration-300"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ServicesSection;
