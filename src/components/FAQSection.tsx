import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import ScrollReveal from '@/components/ScrollReveal';

const FAQSection = () => {
  const faqs = [
    {
      question: 'What services do you offer?',
      answer: 'I offer full-stack web development, mobile app development, cloud architecture consulting, and technical mentorship. My expertise spans from building MVPs for startups to scaling enterprise applications.',
    },
    {
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary based on scope and complexity. A simple landing page might take 1-2 weeks, while a full-featured web application could take 2-4 months. I always provide detailed estimates during our initial consultation.',
    },
    {
      question: 'Do you work with international clients?',
      answer: 'Absolutely! I work with clients worldwide and have experience collaborating across different time zones. I\'m flexible with meeting times and use async communication tools effectively.',
    },
    {
      question: 'What technologies do you specialize in?',
      answer: 'My core stack includes React, Next.js, NestJS, React Native, Node.js, TypeScript, and PostgreSQL. I also have extensive experience with AWS, Docker, and various modern development tools and frameworks.',
    },
    {
      question: 'How do you handle project communication?',
      answer: 'I believe in transparent, regular communication. We\'ll have scheduled check-ins, I provide weekly progress updates, and I\'m always available for quick questions via Slack or email during working hours.',
    },
    {
      question: 'Do you offer ongoing maintenance and support?',
      answer: 'Yes! I offer maintenance packages to ensure your application stays up-to-date, secure, and performs optimally. This includes bug fixes, security updates, and performance monitoring.',
    },
  ];

  return (
    <section id="faq" className="py-24 relative">
      <div className="container mx-auto px-6">
        <ScrollReveal direction="up" delay={0}>
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2">Got Questions?</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Frequently Asked{' '}
              <span className="text-gradient-accent">Questions</span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={200}>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="glass-card rounded-xl border-none px-6 overflow-hidden"
                >
                <AccordionTrigger className="text-left font-display font-semibold hover:text-primary transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
            </Accordion>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FAQSection;
