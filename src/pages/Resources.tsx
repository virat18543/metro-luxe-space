import Blog from "../components/Blog";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

const Resources = () => {
  const technicalGuides = [
    {
      title: "ASA vs PETG Material Guide",
      description: "Comprehensive comparison of material properties, applications, and performance characteristics.",
      category: "Technical",
      downloadUrl: "#"
    },
    {
      title: "Installation Best Practices",
      description: "Step-by-step installation guidelines for optimal performance and longevity.",
      category: "Installation",
      downloadUrl: "#"
    },
    {
      title: "Maintenance & Care Manual",
      description: "Proper care instructions to maintain the beauty and durability of decorative surfaces.",
      category: "Maintenance",
      downloadUrl: "#"
    }
  ];

  const caseStudies = [
    {
      title: "Corporate Headquarters Transformation",
      description: "How ASA Acrycore sheets elevated a 50,000 sq ft office space with modern elegance.",
      category: "Commercial",
      image: "office-case-study"
    },
    {
      title: "Luxury Residential Project",
      description: "Premium laminates and louvers create sophisticated living environments.",
      category: "Residential", 
      image: "residential-case-study"
    },
    {
      title: "Restaurant Design Innovation",
      description: "Decorative louvers balance acoustics and aesthetics in high-traffic dining spaces.",
      category: "Hospitality",
      image: "restaurant-case-study"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-cream-light to-background">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-semibold text-primary mb-6">
            Design Resources
          </h1>
          <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive resources for architects, designers, and distributors. 
            From technical specifications to design inspiration, everything you need to succeed.
          </p>
        </div>
      </section>

      {/* Technical Guides */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-primary mb-6">
              Technical Documentation
            </h2>
            <p className="font-inter text-lg text-muted-foreground">
              Essential guides for specifiers, installers, and facility managers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {technicalGuides.map((guide, index) => (
              <Card key={index} className="p-8 hover:shadow-elegant transition-all duration-300">
                <div className="mb-4">
                  <span className="font-inter text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {guide.category}
                  </span>
                </div>
                <h3 className="font-playfair text-xl font-semibold text-primary mb-4">
                  {guide.title}
                </h3>
                <p className="font-inter text-muted-foreground mb-6 leading-relaxed">
                  {guide.description}
                </p>
                <Button 
                  asChild 
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <a href={guide.downloadUrl} download>
                    Download Guide
                  </a>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 px-6 bg-cream-light">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-primary mb-6">
              Project Case Studies
            </h2>
            <p className="font-inter text-lg text-muted-foreground">
              Real-world applications showcasing the versatility of our decorative surfaces.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-elegant transition-all duration-300">
                <div className="h-48 bg-gradient-brown flex items-center justify-center">
                  <span className="font-inter text-primary-foreground">Project Image</span>
                </div>
                <div className="p-8">
                  <div className="mb-4">
                    <span className="font-inter text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {study.category}
                    </span>
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-primary mb-4">
                    {study.title}
                  </h3>
                  <p className="font-inter text-muted-foreground leading-relaxed">
                    {study.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <Blog />

      {/* Support Section */}
      <section className="py-24 px-6 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold mb-8">
            Need Technical Support?
          </h2>
          <p className="font-inter text-xl leading-relaxed mb-8">
            Our technical team is ready to assist with product selection, 
            installation guidance, and project-specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-primary/5"
            >
              <Link to="/contact">Contact Technical Team</Link>
            </Button>
            <Button 
              asChild 
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-primary/5"
            >
              <a href="https://wa.me/919326005195" target="_blank" rel="noopener noreferrer">
                WhatsApp Support
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;