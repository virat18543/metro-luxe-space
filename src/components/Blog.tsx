import { Card } from "./ui/card";
import { Link } from "react-router-dom";
import SmartImage from "./SmartImage";

const Blog = () => {
  const articles = [
    {
      title: "ASA vs PETG: Understanding Decorative Sheet Materials",
      excerpt: "A comprehensive guide to choosing between ASA Acrycore and PETG decorative sheets for your architectural projects.",
      category: "Material Science",
      readTime: "5 min read",
      keywords: "ASA Acrycore, PETG, decorative sheets, material comparison, architectural surfaces",
      path: "/blog/asa-vs-petg",
      image: "/images/blog/asa-vs-petg.jpg"
    },
    {
      title: "Sustainable Design with Laminates",
      excerpt: "Exploring eco-friendly options in laminate selection for modern commercial and residential spaces.",
      category: "Sustainability",
      readTime: "7 min read",
      keywords: "sustainable laminates, eco-friendly materials, green building, environmental design",
      path: "/blog/sustainable-design",
      image: "/images/blog/sustainable-design.jpg"
    },
    {
      title: "Louver Systems: Function Meets Aesthetic Appeal",
      excerpt: "How decorative louvers enhance both ventilation and visual impact in contemporary architectural design.",
      category: "Design Trends",
      readTime: "6 min read", 
      keywords: "decorative louvers, architectural elements, ventilation design, commercial interiors",
      path: "/blog/louver-systems",
      image: "/images/blog/louver-systems.jpg"
    }
  ];

  return (
    <section className="py-24 px-6 bg-cream-light">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-primary mb-6">
            Design Insights
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stay informed with expert insights on decorative surfaces, material innovations, 
            and architectural design trends shaping tomorrow's spaces.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Link 
              key={index} 
              to={article.path}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <Card className="p-8 h-full hover:shadow-elegant transition-all duration-300 cursor-pointer group border-border/50">
                <div className="space-y-4">
                  <SmartImage 
                    src={article.image} 
                    alt={article.title} 
                    className="rounded-lg w-full h-48 object-cover mb-4" 
                    aspect="aspect-[16/9]" 
                  />
                  
                  <div className="flex items-center justify-between">
                    <span className="font-inter text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span className="font-inter text-sm text-muted-foreground">
                      {article.readTime}
                    </span>
                  </div>
                  
                  <h3 className="font-playfair text-xl font-semibold text-primary group-hover:text-brown-dark transition-colors leading-tight">
                    {article.title}
                  </h3>
                  
                  <p className="font-inter text-muted-foreground leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <div className="pt-4 border-t border-border/50">
                    <span className="font-inter text-xs text-muted-foreground/70">
                      Keywords: {article.keywords}
                    </span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="font-inter text-muted-foreground mb-6">
            More articles coming soon. Subscribe to stay updated on the latest in decorative surface innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blog;
