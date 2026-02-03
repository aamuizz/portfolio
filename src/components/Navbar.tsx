import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Sparkles, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/hooks/use-theme';
import userData from '@/constants/data';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Services', href: '#services' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Active section detection
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(`#${sections[i]}`);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'glass-card border-b border-border/50 shadow-lg backdrop-blur-xl bg-background/80' 
          : 'bg-transparent border-b border-border/20'
      }`}
    >
      {/* Decorative gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#" 
            className="font-display flex items-center gap-3 group relative"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img 
                src="/logo.png" 
                alt="Logo" 
                className="relative w-10 h-10 rounded-full object-cover transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ring-2 ring-primary/20 group-hover:ring-primary/40"
              />
            </div>
            <span className="flex flex-col leading-none">
              <span className="text-gradient-primary text-xl font-bold tracking-tighter group-hover:scale-105 transition-transform inline-block">
                {userData.name.split(' ')[0]}
              </span>
              <span className="text-foreground text-xs font-semibold opacity-70 group-hover:opacity-100 transition-opacity -mt-0.5">
                {userData.name.split(' ').slice(1).join(' ')}
              </span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group ${
                    isActive
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 bg-primary/10 rounded-lg animate-pulse" />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    {link.label}
                    {isActive && (
                      <Sparkles className="w-3 h-3 text-primary animate-pulse" />
                    )}
                  </span>
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-3/4 ${isActive ? 'w-3/4' : ''}`} />
                </a>
              );
            })}
            
            <div className="w-px h-6 bg-border mx-2" />
            
            <button
              onClick={toggleTheme}
              className="relative p-2.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-300 group"
              aria-label="Toggle theme"
            >
              <div className="absolute inset-0 bg-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              {theme === 'light' ? (
                <Moon className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform" />
              ) : (
                <Sun className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform" />
              )}
            </button>
            
            <a 
              href="https://mentoga.com/abdulmuizz"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2"
            >
              <Button variant="outline" className="border-primary/50 hover:bg-primary/10 hover:border-primary hover:text-primary transition-all duration-300">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule a Call
              </Button>
            </a>
            <a 
              href="https://api.whatsapp.com/send/?phone=923000870860&text=Hello%21+I+came+across+your+portfolio+at+abdulmuizz.com+and+I%27m+interested+in+discussing+a+potential+project.+Are+you+available+for+a+conversation%3F&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary hover:scale-105 transition-transform duration-300 shadow-lg shadow-primary/20">
                Get in Touch
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative p-2 rounded-lg text-foreground hover:bg-muted/50 transition-colors group"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="absolute inset-0 bg-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            {isOpen ? (
              <X size={24} className="relative z-10 rotate-90 transition-transform duration-300" />
            ) : (
              <Menu size={24} className="relative z-10" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <>
            {/* Backdrop overlay - positioned below navbar */}
            <div 
              className="fixed top-[73px] left-0 right-0 bottom-0 bg-background/90 z-40 md:hidden"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />
            <div className="md:hidden pt-6 pb-4 space-y-2 animate-slide-in border-t border-border/30 mt-4 bg-background/98 shadow-2xl -mx-6 px-6 relative z-50">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 group ${
                    isActive
                      ? 'bg-primary/10 text-primary font-semibold'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  {isActive && <Sparkles className="w-4 h-4 text-primary" />}
                  <span>{link.label}</span>
                </a>
              );
            })}
            
            <div className="pt-4 border-t border-border/30 space-y-2">
              <button
                onClick={() => {
                  toggleTheme();
                }}
                className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <>
                    <Moon className="w-5 h-5" />
                    <span>Dark Mode</span>
                  </>
                ) : (
                  <>
                    <Sun className="w-5 h-5" />
                    <span>Light Mode</span>
                  </>
                )}
              </button>
              
              <a 
                href="https://mentoga.com/abdulmuizz"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-primary mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule a Call
                </Button>
              </a>
              <a 
                href="https://api.whatsapp.com/send/?phone=923000870860&text=Hello%21+I+came+across+your+portfolio+at+abdulmuizz.com+and+I%27m+interested+in+discussing+a+potential+project.+Are+you+available+for+a+conversation%3F&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <Button variant="outline" className="w-full">
                  Get in Touch
                </Button>
              </a>
            </div>
          </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
