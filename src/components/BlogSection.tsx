import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BlogSection = () => {
  const posts = [
    {
      title: 'Building Scalable React Applications: A Complete Guide',
      excerpt: 'Learn the patterns and practices that will help you build maintainable React apps that scale.',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&q=80',
      date: 'Jan 15, 2024',
      readTime: '8 min read',
      category: 'React',
    },
    {
      title: 'The Future of Full-Stack Development with AI',
      excerpt: 'How AI tools are transforming the way we write code and what it means for developers.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80',
      date: 'Jan 10, 2024',
      readTime: '6 min read',
      category: 'AI',
    },
    {
      title: 'Mastering TypeScript: Advanced Patterns',
      excerpt: 'Deep dive into advanced TypeScript patterns that will level up your code quality.',
      image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600&q=80',
      date: 'Jan 5, 2024',
      readTime: '10 min read',
      category: 'TypeScript',
    },
  ];

  return (
    <section id="blog" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <p className="text-primary font-medium mb-2">Latest Insights</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Recent{' '}
              <span className="text-gradient-primary">Blog Posts</span>
            </h2>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0 group">
            View All Posts
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={post.title}
              className="group glass-card rounded-2xl overflow-hidden hover:glow-secondary transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                  {post.category}
                </span>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
                
                <h3 className="font-display text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground text-sm line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
