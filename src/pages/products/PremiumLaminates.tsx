import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import JsonLd from "@/components/JsonLd";

const PremiumLaminates = () => {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Premium Laminates",
    "description": "High-quality decorative laminates for furniture and interior applications",
    "manufacturer": {
      "@type": "Organization",
      "name": "Metro Surfaces"
    },
    "category": "Building Materials"
  };

  return (
    <>
      <JsonLd data={jsonLdData} />
      <div className="min-h-screen bg-background">
        {/* Breadcrumbs */}
        <div className="bg-cream-light py-4">
          <div className="max-w-7xl mx-auto px-6">
            <nav className="flex items-center space-x-2 text-sm font-inter">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <span className="text-muted-foreground">/</span>
              <Link to="/products" className="text-muted-foreground hover:text-primary transition-colors">
                Products
              </Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-primary font-medium">Premium Laminates</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="font-playfair text-4xl md:text-5xl font-semibold text-primary mb-6">
                Premium Laminates
              </h1>
              <p className="font-inter text-lg text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
                High-performance decorative laminates engineered for superior durability, 
                aesthetic appeal, and versatile application across furniture and interior design projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="outline" size="lg">
                  <Link to="/applications">
                    View Applications
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-primary mb-6">
                Superior Performance Features
              </h2>
              <p className="font-inter text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Our premium laminates combine cutting-edge manufacturing with innovative design 
                to deliver exceptional performance across all applications.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Scratch Resistance",
                  description: "Advanced surface coating provides superior protection against daily wear and scratches.",
                  icon: "🛡️"
                },
                {
                  title: "Heat Resistant",
                  description: "Withstands high temperatures up to 180°C without deformation or discoloration.",
                  icon: "🔥"
                },
                {
                  title: "Stain Proof",
                  description: "Non-porous surface resists staining from common household substances.",
                  icon: "💧"
                },
                {
                  title: "Easy Maintenance",
                  description: "Simple cleaning with standard household cleaners maintains appearance.",
                  icon: "✨"
                },
                {
                  title: "UV Stable",
                  description: "Color-fast technology prevents fading from prolonged sunlight exposure.",
                  icon: "☀️"
                },
                {
                  title: "Impact Resistant",
                  description: "Engineered core structure provides excellent resistance to impacts.",
                  icon: "💪"
                }
              ].map((feature, index) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="font-inter font-semibold text-xl text-primary mb-3">
                      {feature.title}
                    </h3>
                    <p className="font-inter text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Design Categories */}
        <section className="py-20 px-6 bg-cream-light">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-primary mb-6">
                Design Categories
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  category: "Wood Grains",
                  varieties: ["Oak", "Walnut", "Teak", "Cherry", "Maple", "Bamboo"]
                },
                {
                  category: "Solid Colors",
                  varieties: ["Pure White", "Deep Black", "Grey Tones", "Vibrant Colors", "Pastels", "Earth Tones"]
                },
                {
                  category: "Specialty Finishes",
                  varieties: ["Stone Textures", "Fabric Patterns", "Metallic Effects", "Abstract Designs", "Geometric Patterns", "Custom Prints"]
                }
              ].map((category, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="font-inter font-semibold text-xl text-primary mb-4">
                      {category.category}
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      {category.varieties.map((variety, varIndex) => (
                        <span key={varIndex} className="font-inter text-sm text-muted-foreground bg-background px-2 py-1 rounded">
                          {variety}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 bg-cream-light">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-primary mb-6">
              Explore Our Laminate Collection
            </h2>
            <p className="font-inter text-lg text-muted-foreground mb-8 leading-relaxed">
              Discover the perfect laminate for your project. Our expert team will help you 
              select the ideal design and specification for your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="outline" size="lg">
                <Link to="/downloads">
                  Technical Data Sheets
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PremiumLaminates;
