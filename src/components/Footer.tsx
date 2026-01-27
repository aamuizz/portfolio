import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import userData from '@/constants/data';
import ScrollReveal from '@/components/ScrollReveal';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: userData.socialLinks.github, label: 'GitHub' },
    { icon: Linkedin, href: userData.socialLinks.linkedin, label: 'LinkedIn' },
    { icon: Twitter, href: userData.socialLinks.twitter, label: 'Twitter' },
    { icon: Mail, href: `mailto:${userData.email}`, label: 'Email' },
  ];

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
  ];

  const footerLinks = [
    {
      title: 'Navigation',
      links: navLinks,
    },
  ];

  return (
    <footer className="py-16 border-t border-border/30 relative">
      <div className="container mx-auto px-6">
        <ScrollReveal direction="up" delay={0}>
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="space-y-4">
              <a href="#" className="font-display flex items-center gap-3 group relative">
                <div className="relative">
                  <img 
                    src="/logo.png" 
                    alt="Logo" 
                    className="w-10 h-10 rounded-full object-cover transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 relative z-10"
                  />
                  {/* Glowing ring around logo */}
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"></span>
                </div>
                {/* Symbolic name display - logo-style wordmark */}
                <span className="relative inline-flex items-center gap-2">
                  {/* Decorative left accent */}
                  <span className="w-1 h-8 bg-gradient-to-b from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  
                  {/* Name as symbol - artistic arrangement */}
                  <span className="flex flex-col items-start leading-none relative">
                    <span className="text-gradient-primary text-3xl font-bold tracking-tighter">
                      {userData.name.split(' ')[0]}
                    </span>
                    <span className="text-foreground text-xl font-bold opacity-70 group-hover:opacity-100 transition-opacity -mt-1 tracking-tight">
                      {userData.name.split(' ').slice(1).join(' ')}
                    </span>
                    {/* Decorative bottom accent */}
                    <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </span>
                  
                  {/* Decorative right accent */}
                  <span className="w-1 h-8 bg-gradient-to-b from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </span>
              </a>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {userData.designation} crafting exceptional digital experiences.
              </p>
              <div className="flex gap-4">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="p-2 rounded-lg glass-card hover:text-primary hover:glow-primary transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="font-display font-semibold mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={200}>
          <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {userData.name}. All rights reserved.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};

export default Footer;
