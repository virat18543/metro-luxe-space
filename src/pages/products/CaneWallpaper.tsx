import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import JsonLd from "@/components/JsonLd";

const CaneWallpaper = () => {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Cane Wallpaper",
    "description": "Natural cane and bamboo wallpaper for eco-friendly interior design",
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
              <span className="text-primary font-medium">Cane Wallpaper</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="font-playfair text-4xl md:text-5xl font-semibold text-primary mb-6">
                Cane Wallpaper
              </h1>
              <p className="font-inter text-lg text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
                Bring the beauty of nature indoors with our premium cane and bamboo wallpapers. 
                Sustainable, textural, and uniquely beautiful for creating warm, organic interiors.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link to="/contact">Request Samples</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/applications">View Interiors</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-6 bg-cream-light">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-primary text-center mb-12">
              Natural Benefits
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Eco-Friendly",
                  description: "Made from renewable bamboo and cane materials, supporting sustainable interior design practices."
                },
                {
                  title: "Natural Texture",
                  description: "Authentic woven patterns and organic textures that add depth and warmth to any space."
                },
                {
                  title: "Breathable Surface",
                  description: "Natural fiber construction allows walls to breathe while regulating humidity levels."
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

        {/* Material Types */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-primary text-center mb-12">
              Material Options
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  material: "Bamboo Wallpaper",
                  description: "Fast-growing bamboo fibers woven into beautiful wall coverings",
                  characteristics: [
                    "Light to medium brown tones",
                    "Fine to medium weave patterns",
                    "Smooth to slightly textured finish",
                    "Natural variations in color"
                  ]
                },
                {
                  material: "Cane Wallpaper",
                  description: "Traditional cane materials crafted into decorative wall surfaces",
                  characteristics: [
                    "Natural golden to brown colors",
                    "Open weave to tight patterns",
                    "Distinctive linear textures",
                    "Rustic to refined appearances"
                  ]
                }
              ].map((type, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="font-inter font-semibold text-xl text-primary mb-3">
                      {type.material}
                    </h3>
                    <p className="font-inter text-muted-foreground mb-4">
                      {type.description}
                    </p>
                    <ul className="space-y-2">
                      {type.characteristics.map((char, charIndex) => (
                        <li key={charIndex} className="font-inter text-sm text-muted-foreground flex items-center">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                          {char}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-16 px-6 bg-cream-light">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-primary text-center mb-12">
              Design Applications
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  space: "Living Rooms",
                  description: "Create warm, inviting focal walls that complement both modern and traditional decor.",
                  benefits: ["Natural warmth", "Acoustic benefits", "Texture contrast"]
                },
                {
                  space: "Bedrooms",
                  description: "Peaceful, organic environments that promote relaxation and natural comfort.",
                  benefits: ["Calming atmosphere", "Natural patterns", "Sound absorption"]
                },
                {
                  space: "Restaurants",
                  description: "Authentic, natural dining environments that create memorable experiences.",
                  benefits: ["Warm ambiance", "Cultural authenticity", "Easy maintenance"]
                },
                {
                  space: "Spas & Wellness",
                  description: "Natural materials that enhance the zen-like atmosphere of wellness spaces.",
                  benefits: ["Organic feel", "Stress reduction", "Natural healing"]
                },
                {
                  space: "Offices",
                  description: "Biophilic design elements that improve workplace well-being and productivity.",
                  benefits: ["Stress relief", "Air quality", "Natural beauty"]
                },
                {
                  space: "Retail Spaces",
                  description: "Natural backdrops that highlight products while creating sustainable brand image.",
                  benefits: ["Product enhancement", "Eco-friendly image", "Unique texture"]
                }
              ].map((application, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="font-inter font-semibold text-lg text-primary mb-3">
                      {application.space}
                    </h3>
                    <p className="font-inter text-muted-foreground text-sm mb-4">
                      {application.description}
                    </p>
                    <div className="space-y-1">
                      {application.benefits.map((benefit, benefitIndex) => (
                        <span key={benefitIndex} className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded mr-1 mb-1">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Installation & Care */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-primary text-center mb-12">
              Installation & Care
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-inter font-semibold text-xl text-primary mb-4">
                    Installation Guidelines
                  </h3>
                  <ul className="space-y-3 font-inter text-muted-foreground">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      Use appropriate adhesives for natural materials
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      Allow for natural expansion and contraction
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      Ensure proper wall preparation and dryness
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      Professional installation recommended
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-inter font-semibold text-xl text-primary mb-4">
                    Maintenance Tips
                  </h3>
                  <ul className="space-y-3 font-inter text-muted-foreground">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      Regular dusting with soft brush or vacuum
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      Avoid excessive moisture or humidity
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      Gentle cleaning with minimal water
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      Protect from direct sunlight when possible
                    </li>
                  </ul>
                </CardContent>
              </Card>
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
                    <li>• Roll width: 36" or 48"</li>
                    <li>• Roll length: 24 feet</li>
                    <li>• Thickness: 1-3mm</li>
                    <li>• Custom sizes available</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-inter font-semibold text-xl text-primary mb-4">
                    Weave Patterns
                  </h3>
                  <ul className="space-y-2 font-inter text-muted-foreground">
                    <li>• Plain weave</li>
                    <li>• Twill patterns</li>
                    <li>• Basket weave</li>
                    <li>• Custom patterns</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-inter font-semibold text-xl text-primary mb-4">
                    Color Options
                  </h3>
                  <ul className="space-y-2 font-inter text-muted-foreground">
                    <li>• Natural bamboo tones</li>
                    <li>• Golden cane colors</li>
                    <li>• Light to dark browns</li>
                    <li>• Bleached options</li>
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
              Embrace Natural Beauty
            </h2>
            <p className="font-inter text-lg text-muted-foreground mb-8 leading-relaxed">
              Transform your space with the timeless appeal of natural cane wallpaper. 
              Our collection offers sustainable beauty that connects your interior with nature.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/contact">Order Samples</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/downloads">Care Instructions</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaneWallpaper;

