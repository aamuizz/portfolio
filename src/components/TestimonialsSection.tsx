import { Star, Quote } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart',
      platform: 'Upwork',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
      content: 'Absolutely phenomenal work! Delivered our entire platform ahead of schedule with impeccable code quality. Will definitely work together again.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'CTO, InnovateLab',
      platform: 'LinkedIn',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
      content: 'One of the most skilled developers I\'ve worked with. Great communication, clean architecture, and attention to detail that\'s rare to find.',
      rating: 5,
    },
    {
      name: 'Emily Davis',
      role: 'Founder, GrowthHub',
      platform: 'Fiverr',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
      content: 'Transformed our outdated system into a modern, scalable application. The performance improvements alone increased our conversions by 40%.',
      rating: 5,
    },
    {
      name: 'David Wilson',
      role: 'Product Manager, ScaleUp',
      platform: 'Google',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
      content: 'Exceptional problem-solving skills and a true partner in building our product. Goes above and beyond to ensure project success.',
      rating: 5,
    },
  ];

  const platformColors: Record<string, string> = {
    Upwork: 'text-green-500',
    LinkedIn: 'text-blue-500',
    Fiverr: 'text-green-400',
    Google: 'text-red-500',
    Facebook: 'text-blue-600',
  };

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal direction="up" delay={0}>
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2">Social Proof</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              What Clients{' '}
              <span className="text-gradient-accent">Say</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.name} direction="up" delay={index * 100}>
            <div
              className="glass-card rounded-2xl p-8 hover:glow-secondary transition-all duration-300 relative group"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/20 group-hover:text-primary/40 transition-colors" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div>
                <p className="font-medium">{testimonial.name}</p>
              </div>
            </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
