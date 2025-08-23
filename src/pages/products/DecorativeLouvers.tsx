import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import JsonLd from "@/components/JsonLd";
import louversCream from "@/assets/products/louvers-cream.jpg";
import restaurantLouvers from "@/assets/applications/restaurant-louvers.jpg";

const DecorativeLouvers = () => {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Decorative Louvers",
    "description": "Architectural louver systems for interior design and space division",
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
              <span className="text-primary font-medium">Decorative Louvers</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="font-playfair text-4xl md:text-5xl font-semibold text-primary mb-6">
                  Decorative Louvers
                </h1>
                <p className="font-inter text-lg text-muted-foreground mb-8 leading-relaxed">
                  Sophisticated architectural louver systems that combine functional space division 
                  with elegant design. Perfect for creating visual interest while maintaining 
                  airflow and natural light control.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg">
                    <Link to="/contact">Request Quote</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/applications">View Installations</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img
                  src={louversCream}
                  alt="Decorative louver panels cream finish architectural element"
                  className="w-full h-96 object-cover rounded-lg shadow-elegant"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-6 bg-cream-light">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-primary text-center mb-12">
              Design Benefits
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Light Control",
                  description: "Adjustable slats allow precise control of natural light while maintaining visual connection between spaces."
                },
                {
                  title: "Air Circulation",
                  description: "Promotes natural ventilation and airflow while providing privacy and space definition."
                },
                {
                  title: "Aesthetic Appeal",
                  description: "Creates sophisticated architectural details that enhance interior design and spatial dynamics."
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

        {/* Application Gallery */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-primary text-center mb-12">
              Installation Examples
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="group">
                <div className="relative overflow-hidden rounded-lg shadow-soft">
                  <img
                    src={restaurantLouvers}
                    alt="Decorative louvers installed in restaurant ceiling design"
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="font-inter font-semibold text-xl text-primary mt-4 mb-2">
                  Restaurant Ceiling Feature
                </h3>
                <p className="font-inter text-muted-foreground">
                  Dramatic ceiling installation creating visual depth and acoustic benefits.
                </p>
              </div>
              <div className="group">
                <div className="relative overflow-hidden rounded-lg shadow-soft bg-cream-light">
                  <div className="w-full h-64 flex items-center justify-center">
                    <div className="text-center p-8">
                      <h4 className="font-inter font-semibold text-lg text-primary mb-2">
                        Office Partition System
                      </h4>
                      <p className="font-inter text-muted-foreground text-sm">
                        Functional space division maintaining open office feel
                      </p>
                    </div>
                  </div>
                </div>
                <h3 className="font-inter font-semibold text-xl text-primary mt-4 mb-2">
                  Office Space Division
                </h3>
                <p className="font-inter text-muted-foreground">
                  Smart workspace solutions that define areas without blocking light.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* System Types */}
        <section className="py-16 px-6 bg-cream-light">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-primary text-center mb-12">
              Louver Systems
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  type: "Fixed Louvers",
                  description: "Stationary slat systems for permanent installations",
                  features: [
                    "Multiple blade angles available",
                    "Various spacing options",
                    "Custom sizing",
                    "Integrated mounting systems"
                  ]
                },
                {
                  type: "Adjustable Louvers",
                  description: "Moveable slat systems for dynamic light control",
                  features: [
                    "Manual or motorized operation",
                    "Variable light control",
                    "Privacy adjustment",
                    "Ventilation management"
                  ]
                }
              ].map((system, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="font-inter font-semibold text-xl text-primary mb-3">
                      {system.type}
                    </h3>
                    <p className="font-inter text-muted-foreground mb-4">
                      {system.description}
                    </p>
                    <ul className="space-y-2">
                      {system.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="font-inter text-sm text-muted-foreground flex items-center">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Specifications */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-primary text-center mb-12">
              Technical Specifications
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-inter font-semibold text-xl text-primary mb-4">
                    Materials
                  </h3>
                  <ul className="space-y-2 font-inter text-muted-foreground">
                    <li>• Aluminum construction</li>
                    <li>• Powder coated finishes</li>
                    <li>• Anodized options</li>
                    <li>• Wood grain laminates</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-inter font-semibold text-xl text-primary mb-4">
                    Dimensions
                  </h3>
                  <ul className="space-y-2 font-inter text-muted-foreground">
                    <li>• Blade width: 50-200mm</li>
                    <li>• Custom panel sizes</li>
                    <li>• Spacing: 25-100mm</li>
                    <li>• Height up to 3 meters</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-inter font-semibold text-xl text-primary mb-4">
                    Installation
                  </h3>
                  <ul className="space-y-2 font-inter text-muted-foreground">
                    <li>• Wall mounting systems</li>
                    <li>• Ceiling suspension</li>
                    <li>• Floor to ceiling frames</li>
                    <li>• Modular components</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-16 px-6 bg-cream-light">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-primary text-center mb-12">
              Ideal Applications
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  space: "Commercial Offices",
                  uses: ["Open office partitions", "Conference room dividers", "Reception areas", "Waiting spaces"]
                },
                {
                  space: "Hospitality",
                  uses: ["Restaurant dining areas", "Hotel lobbies", "Bar partitions", "Event spaces"]
                },
                {
                  space: "Retail Spaces",
                  uses: ["Store displays", "Changing areas", "Product showcases", "Design features"]
                },
                {
                  space: "Residential",
                  uses: ["Room dividers", "Balcony screening", "Garden features", "Privacy screens"]
                }
              ].map((application, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="font-inter font-semibold text-lg text-primary mb-3">
                      {application.space}
                    </h3>
                    <ul className="space-y-1">
                      {application.uses.map((use, useIndex) => (
                        <li key={useIndex} className="font-inter text-sm text-muted-foreground">
                          • {use}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-primary mb-6">
              Design Your Space with Louvers
            </h2>
            <p className="font-inter text-lg text-muted-foreground mb-8 leading-relaxed">
              Let our design team help you create the perfect louver solution for your project. 
              From concept to installation, we provide complete support for your architectural vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/contact">Design Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/downloads">System Specifications</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DecorativeLouvers;

