import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import JsonLd from "@/components/JsonLd";
import SmartImage from "../../components/SmartImage";
import asaSheetBrown from "@/assets/products/asa-sheet-brown.jpg";
import render04Texture867 from "@/assets/applications/RENDER04 TEXTURE 867.png";
import residentialFeatureWall from "@/assets/applications/residential-feature-wall.jpg";

const AsaAcrycoreSheets = () => {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "ASA Acrycore Sheets",
    "description": "Premium ASA Acrycore PETG decorative sheets for architectural applications",
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
              <Link className="text-muted-foreground hover:text-primary transition-colors" to="/">
                Home
              </Link>
              <span className="text-muted-foreground">/</span>
              <Link className="text-muted-foreground hover:text-primary transition-colors" to="/products">
                Products
              </Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-primary font-medium">ASA Acrycore Sheets</span>
            </nav>
          </div>
        </div>
        
        {/* Hero Section */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="font-playfair text-4xl md:text-5xl font-semibold text-primary mb-6">
                  ASA Acrycore Sheets
                </h1>
                <p className="font-inter text-lg text-muted-foreground mb-8 leading-relaxed">
                  Premium decorative sheets combining the weather resistance of ASA with the 
                  formability of PETG. Perfect for architectural applications requiring both 
                  durability and aesthetic excellence.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg">
                    <Link to="/contact">Request Samples</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link to="/applications">View Applications</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <SmartImage
                  src={asaSheetBrown}
                  alt="ASA Acrycore decorative sheet sample brown oak veneer texture"
                  className="w-full h-96 object-cover rounded-lg shadow-elegant"
                  aspect="aspect-[4/3]"
                />
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
                  title: "Weather Resistant",
                  description: "ASA surface layer provides excellent UV and weather resistance for long-lasting color stability."
                },
                {
                  title: "Thermoformable",
                  description: "PETG core allows for easy thermoforming into complex shapes and curves."
                },
                {
                  title: "Premium Finish",
                  description: "High-quality decorative surfaces with wood grain, solid colors, and textured finishes."
                }
              ].map((feature, index) => (
                <Card className="text-center" key={index}>
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
        
        {/* Applications Gallery */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-primary text-center mb-12">
              Application Examples
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="group">
                <div className="relative overflow-hidden rounded-lg shadow-soft">
                  <SmartImage
                    src={render04Texture867}
                    alt="ASA Acrycore sheets used for corporate office wall paneling"
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    aspect="aspect-[16/9]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="font-inter font-semibold text-xl text-primary mt-4 mb-2">
                  Corporate Office Paneling
                </h3>
                <p className="font-inter text-muted-foreground">
                  Professional interior wall solutions for modern office environments.
                </p>
              </div>
              
              <div className="group">
                <div className="relative overflow-hidden rounded-lg shadow-soft">
                  <SmartImage
                    src={residentialFeatureWall}
                    alt="ASA Acrycore sheets as residential feature wall"
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    aspect="aspect-[16/9]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="font-inter font-semibold text-xl text-primary mt-4 mb-2">
                  Residential Feature Walls
                </h3>
                <p className="font-inter text-muted-foreground">
                  Elegant decorative solutions for luxury residential interiors.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Specifications */}
        <section className="py-16 px-6 bg-cream-light">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-primary text-center mb-12">
              Specifications
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-inter font-semibold text-xl text-primary mb-4">
                    Standard Dimensions
                  </h3>
                  <ul className="space-y-2 font-inter text-muted-foreground">
                    <li>• Sheet Size: 8×4 feet (2440×1220 mm)</li>
                    <li>• Thickness: 0.5mm to 3.0mm</li>
                    <li>• Weight: Varies by thickness</li>
                    <li>• Custom sizes available on request</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-inter font-semibold text-xl text-primary mb-4">
                    Available Finishes
                  </h3>
                  <ul className="space-y-2 font-inter text-muted-foreground">
                    <li>• Wood Grain Patterns</li>
                    <li>• Solid Colors</li>
                    <li>• Metallic Finishes</li>
                    <li>• Textured Surfaces</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-primary mb-6">
              Ready to Transform Your Project?
            </h2>
            <p className="font-inter text-lg text-muted-foreground mb-8 leading-relaxed">
              Contact us today to discuss your ASA Acrycore sheet requirements and get expert guidance 
              on selecting the perfect finish for your application.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/contact">Get Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/downloads">Download Catalog</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AsaAcrycoreSheets;
