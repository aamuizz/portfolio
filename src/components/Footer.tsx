import { Github, Linkedin, Twitter, Mail, MapPin, ArrowUp, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import userData from '@/constants/data';
import ScrollReveal from '@/components/ScrollReveal';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: userData.socialLinks.github, label: 'GitHub' },
    { icon: Linkedin, href: userData.socialLinks.linkedin, label: 'LinkedIn' },
    { icon: Twitter, href: userData.socialLinks.twitter, label: 'Twitter' },
    { icon: Mail, href: `mailto:${userData.email}`, label: 'Email' },
  ];

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Services', href: '#services' },
    { label: 'Experience', href: '#experience' },
  ];

  const moreLinks = [
    { label: 'Projects', href: '#projects' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-border/30 bg-gradient-to-b from-background to-background/95">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-6 py-16">
        <ScrollReveal direction="up" delay={0}>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand & About */}
            <div className="space-y-6 lg:col-span-1">
              <a href="#" className="font-display flex items-center gap-3 group relative">
                <div className="relative">
                  <img 
                    src="/logo.png" 
                    alt="Logo" 
                    className="w-12 h-12 rounded-full object-cover transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 relative z-10"
                  />
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"></span>
                </div>
                <span className="relative inline-flex items-center gap-2">
                  <span className="w-1 h-8 bg-gradient-to-b from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="flex flex-col items-start leading-none relative">
                    <span className="text-gradient-primary text-2xl font-bold tracking-tighter">
                      {userData.name.split(' ')[0]}
                    </span>
                    <span className="text-foreground text-lg font-bold opacity-70 group-hover:opacity-100 transition-opacity -mt-1 tracking-tight">
                      {userData.name.split(' ').slice(1).join(' ')}
                    </span>
                  </span>
                  <span className="w-1 h-8 bg-gradient-to-b from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </span>
              </a>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {userData.designation} crafting exceptional digital experiences with modern technologies and clean code.
              </p>
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="p-2.5 rounded-lg glass-card hover:text-primary hover:glow-primary transition-all duration-300 hover:scale-110"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display font-semibold mb-6 text-foreground">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* More Links */}
            <div>
              <h4 className="font-display font-semibold mb-6 text-foreground">More</h4>
              <ul className="space-y-3">
                {moreLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-6">
              <div>
                <h4 className="font-display font-semibold mb-6 text-foreground">Get In Touch</h4>
                <ul className="space-y-4">
                  <li>
                    <a
                      href={`mailto:${userData.email}`}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-3 group"
                    >
                      <Mail className="w-4 h-4 text-primary" />
                      <span>{userData.email}</span>
                    </a>
                  </li>
                  <li>
                    <div className="text-muted-foreground text-sm flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{userData.address}</span>
                    </div>
                  </li>
                </ul>
              </div>

              <a 
                href="https://mentoga.com/abdulmuizz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full mb-3"
              >
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-primary">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule a Call
                </Button>
              </a>
              <a 
                href="https://api.whatsapp.com/send/?phone=923000870860&text=Hello%21+I+came+across+your+portfolio+at+abdulmuizz.com+and+I%27m+interested+in+discussing+a+potential+project.+Are+you+available+for+a+conversation%3F&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full"
              >
                <Button variant="outline" className="w-full">
                  Start a Project
                </Button>
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom Bar */}
        <ScrollReveal direction="up" delay={200}>
          <div className="pt-8 border-t border-border/30">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm text-muted-foreground">
                <p>
                  © {new Date().getFullYear()} {userData.name}. All rights reserved.
                </p>
              </div>
              
              <button
                onClick={scrollToTop}
                className="p-2 rounded-lg glass-card hover:glow-primary transition-all duration-300 hover:scale-110 group"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};

export default Footer;
