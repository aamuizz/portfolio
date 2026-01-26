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

  const footerLinks = [
    {
      title: 'Navigation',
      links: ['Home', 'About', 'Services', 'Portfolio', 'Contact'],
    },
  ];

  return (
    <footer className="py-16 border-t border-border/30 relative">
      <div className="container mx-auto px-6">
        <ScrollReveal direction="up" delay={0}>
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="space-y-4">
              <a href="#" className="font-display text-3xl font-bold text-gradient-primary flex items-center gap-2">
                <img 
                  src="/logo.png" 
                  alt="Logo" 
                  className="w-8 h-8 rounded-full object-cover"
                />
                {userData.name.split(' ').map(n => n[0]).join('')}
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
                    <li key={link}>
                      <a
                        href="#"
                        className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                      >
                        {link}
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
