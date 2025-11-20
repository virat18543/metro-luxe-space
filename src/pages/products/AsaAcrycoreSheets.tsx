import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import JsonLd from "@/components/JsonLd";
import SmartImage from "../../components/SmartImage";
import AcrycoreSheetBrown from "@/assets/products/Acrycore-sheet-brown.jpg";
import officeBrownPanels from "@/assets/applications/office-brown-panels.jpg";
import residentialFeatureWall from "@/assets/applications/residential-feature-wall.jpg";

const AcrycoreAcrycoreSheets = () => {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Acrycore Acrycore Sheets",
    "description": "Premium Acrycore Acrycore PETG decorative sheets for architectural applications",
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
              <span className="text-primary font-medium">Acrycore Acrycore Sheets</span>
            </nav>
          </div>
        </div>
        
        {/* Hero Section */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="font-playfair text-4xl md:text-5xl font-semibold text-primary mb-6">
                  Acrycore Acrycore Sheets
                </h1>
                <p className="font-inter text-lg text-muted-foreground mb-8 leading-relaxed">
                  Premium decorative sheets combining the weather resistance of Acrycore with the 
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
              <div>
                <SmartImage
                  src={AcrycoreSheetBrown}
                  alt="Acrycore Acrycore sheets in brown wood grain finish"
                  className="rounded-lg shadow-lg w-full h-auto"
                  priority
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
              <Card>
                <CardContent className="p-6 text-center">
                  <h3 className="font-inter font-semibold text-xl text-primary mb-4">
                    Weather Resistant
                  </h3>
                  <p className="font-inter text-muted-foreground">
                    Acrycore surface layer provides exceptional UV resistance and long-term color stability for outdoor applications.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <h3 className="font-inter font-semibold text-xl text-primary mb-4">
                    Formable Core
                  </h3>
                  <p className="font-inter text-muted-foreground">
                    PETG core layer offers excellent thermoforming properties for creating complex curved surfaces.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <h3 className="font-inter font-semibold text-xl text-primary mb-4">
                    Premium Finishes
                  </h3>
                  <p className="font-inter text-muted-foreground">
                    Available in a wide range of decorative patterns including wood grains, solids, and textures.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-primary text-center mb-12">
              Applications
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <SmartImage
                  src={officeBrownPanels}
                  alt="Acrycore Acrycore sheets used for commercial office panels"
                  className="rounded-lg shadow-lg w-full h-64 object-cover mb-4"
                />
                <h3 className="font-inter font-semibold text-xl text-primary mb-2">
                  Commercial Interiors
                </h3>
                <p className="font-inter text-muted-foreground">
                  Perfect for office partitions, ceiling panels, and architectural elements requiring durability and aesthetics.
                </p>
              </div>
              
              <div>
                <SmartImage
                  src={residentialFeatureWall}
                  alt="Acrycore Acrycore sheets creating a residential feature wall"
                  className="rounded-lg shadow-lg w-full h-64 object-cover mb-4"
                />
                <h3 className="font-inter font-semibold text-xl text-primary mb-2">
                  Residential Projects
                </h3>
                <p className="font-inter text-muted-foreground">
                  Ideal for feature walls, kitchen backsplashes, and furniture applications in residential spaces.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Specifications Section */}
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
              Contact us today to discuss your Acrycore Acrycore sheet requirements and get expert guidance 
              on selecting the perfect finish for your application.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/contact">Get Quote</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AcrycoreAcrycoreSheets;
