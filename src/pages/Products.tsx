import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import asaSheetBrown from "@/assets/products/asa-sheet-brown.jpg";
import louversCream from "@/assets/products/louvers-cream.jpg";

const Products = () => {
  const productCategories = [
    {
      name: "ASA Acrycore Sheets",
      description: "Weather-resistant decorative surfaces with exceptional durability and UV stability. Perfect for both interior and exterior applications.",
      image: asaSheetBrown,
      features: ["UV Resistant", "Weather Proof", "8×4 feet standard", "Multiple finishes"],
      keywords: "ASA Acrycore PETG decorative sheets weather resistant UV stable"
    },
    {
      name: "Premium Laminates", 
      description: "High-pressure decorative laminates offering superior performance and aesthetic appeal for commercial and residential projects.",
      image: asaSheetBrown,
      features: ["High Pressure", "Scratch Resistant", "Easy Maintenance", "Wide Design Range"],
      keywords: "premium laminates HPL decorative high pressure laminate commercial residential"
    },
    {
      name: "Decorative Louvers",
      description: "Architectural louver systems combining functionality with aesthetic excellence for modern commercial and residential spaces.",
      image: louversCream,
      features: ["Architectural Grade", "Custom Spacing", "Multiple Materials", "Easy Installation"],
      keywords: "decorative louvers architectural elements ventilation commercial residential"
    },
    {
      name: "Cane Wallpaper",
      description: "Natural texture wallpaper solutions bringing organic elegance to contemporary interior design projects.",
      image: louversCream,
      features: ["Natural Texture", "Eco-Friendly", "Easy Application", "Durable Finish"],
      keywords: "cane wallpaper natural texture eco-friendly interior design organic"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-cream-light to-background">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-semibold text-primary mb-6">
            Premium Product Range
          </h1>
          <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive collection of decorative surfaces, 
            each meticulously selected for architectural excellence and lasting performance.
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-16">
            {productCategories.map((category, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-primary">
                    {category.name}
                  </h2>
                  <p className="font-inter text-lg text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h3 className="font-inter font-semibold text-primary">Key Features:</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {category.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          <span className="font-inter text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <Button asChild className="bg-gradient-brown hover:bg-primary/90 text-primary-foreground">
                      <Link to="/contact">Request Samples</Link>
                    </Button>
                    <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      <Link to="/applications">View Applications</Link>
                    </Button>
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <Card className="overflow-hidden group hover:shadow-elegant transition-all duration-300">
                    <img 
                      src={category.image} 
                      alt={`${category.name} ${category.keywords}`}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Specifications */}
      <section className="py-24 px-6 bg-cream-light">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-primary mb-6">
              Standard Specifications
            </h2>
            <p className="font-inter text-lg text-muted-foreground leading-relaxed">
              All products meet industry standards with customization options available for specific project requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h3 className="font-playfair text-xl font-semibold text-primary mb-4">Sheet Dimensions</h3>
              <div className="space-y-2 font-inter text-muted-foreground">
                <p>Standard: 8×4 feet (2440×1220 mm)</p>
                <p>Thickness: 0.5mm to 3mm</p>
                <p>Custom sizes available on request</p>
              </div>
            </Card>

            <Card className="p-8">
              <h3 className="font-playfair text-xl font-semibold text-primary mb-4">Quality Standards</h3>
              <div className="space-y-2 font-inter text-muted-foreground">
                <p>ISO certified manufacturing</p>
                <p>Weather resistance tested</p>
                <p>Fire safety compliant</p>
              </div>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild className="bg-gradient-brown hover:bg-primary/90 text-primary-foreground">
              <Link to="/downloads">Download Product Catalogs</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;