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
                <Button asChild size="lg">
                  <Link to="/contact">Request Samples</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/applications">View Applications</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-6 bg-cream-light">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-primary text-center mb-12">
              Key Features
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Superior Durability",
                  description: "High-pressure lamination process ensures exceptional resistance to wear, scratches, and impact."
                },
                {
                  title: "Extensive Design Range",
                  description: "Wide selection of wood grains, solid colors, patterns, and specialty finishes to suit any design vision."
                },
                {
                  title: "Easy Installation",
                  description: "Compatible with standard adhesives and fabrication techniques for efficient installation."
                }
              ].map((feature, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <h3 className="font-inter font-semibold text-xl text-primary mb-4">
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

        {/* Applications Section */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-primary text-center mb-12">
              Applications
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Furniture Manufacturing",
                  description: "Kitchen cabinets, wardrobes, office furniture, and custom millwork."
                },
                {
                  title: "Interior Panels",
                  description: "Wall cladding, ceiling panels, and decorative architectural elements."
                },
                {
                  title: "Retail Fixtures",
                  description: "Store displays, countertops, and commercial interior applications."
                },
                {
                  title: "Residential Projects",
                  description: "Home renovation, custom furniture, and interior design projects."
                }
              ].map((application, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="font-inter font-semibold text-lg text-primary mb-3">
                      {application.title}
                    </h3>
                    <p className="font-inter text-muted-foreground text-sm leading-relaxed">
                      {application.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Specifications */}
        <section className="py-16 px-6 bg-cream-light">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-primary text-center mb-12">
              Product Specifications
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-inter font-semibold text-xl text-primary mb-4">
                    Standard Dimensions
                  </h3>
                  <ul className="space-y-2 font-inter text-muted-foreground">
                    <li>• Sheet Size: 8×4 feet</li>
                    <li>• Thickness: 0.6mm to 1.5mm</li>
                    <li>• Custom sizes available</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-inter font-semibold text-xl text-primary mb-4">
                    Surface Options
                  </h3>
                  <ul className="space-y-2 font-inter text-muted-foreground">
                    <li>• Matte finish</li>
                    <li>• Gloss finish</li>
                    <li>• Textured surfaces</li>
                    <li>• Anti-fingerprint coating</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-inter font-semibold text-xl text-primary mb-4">
                    Performance Standards
                  </h3>
                  <ul className="space-y-2 font-inter text-muted-foreground">
                    <li>• Heat resistant up to 180°C</li>
                    <li>• Moisture resistant</li>
                    <li>• Scratch resistant surface</li>
                    <li>• UV stable colors</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Design Categories */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-primary text-center mb-12">
              Design Categories
            </h2>
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
              <Button asChild size="lg">
                <Link to="/contact">Request Catalog</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/downloads">Technical Data Sheets</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PremiumLaminates;

