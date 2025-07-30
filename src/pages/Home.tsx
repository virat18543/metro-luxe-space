import Hero from "../components/Hero";
import Philosophy from "../components/Philosophy";
import JsonLd from "../components/JsonLd";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import asaSheetBrown from "@/assets/products/asa-sheet-brown.jpg";
import louversCream from "@/assets/products/louvers-cream.jpg";
import officeBrownPanels from "@/assets/applications/office-brown-panels.jpg";
import residentialFeatureWall from "@/assets/applications/residential-feature-wall.jpg";

const Home = () => {
  const productPreview = [
    {
      name: "ASA Acrycore Sheets",
      description: "Weather-resistant decorative surfaces",
      image: asaSheetBrown
    },
    {
      name: "Decorative Louvers", 
      description: "Architectural elements with style",
      image: louversCream
    }
  ];

  const workGallery = [
    {
      title: "Corporate Excellence",
      image: officeBrownPanels,
      description: "Premium office environments"
    },
    {
      title: "Residential Luxury",
      image: residentialFeatureWall,
      description: "Sophisticated living spaces"
    }
  ];

  return (
    <>
      <JsonLd />
      <div className="pt-16">
        <Hero />
        
        {/* Philosophy Introduction */}
        <section className="py-16 px-6 bg-gradient-to-b from-background to-cream-light">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-primary mb-6">
              Crafting Excellence Through Partnership
            </h2>
            <p className="font-inter text-lg text-muted-foreground leading-relaxed mb-8">
              For decades, Metro Laminates has been the trusted partner for architects, 
              designers, and distributors seeking exceptional decorative surfaces. 
              Our commitment extends beyond products to lasting relationships built on 
              service, continuity, and ethical practice.
            </p>
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link to="/philosophy">Discover Our Philosophy</Link>
            </Button>
          </div>
        </section>

        {/* Product Preview */}
        <section className="py-24 px-6 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-primary mb-6">
              Our Product Collection
            </h2>
            <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From ASA Acrycore sheets to decorative louvers, explore our curated 
              collection of surfaces designed for architectural excellence.
            </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {productPreview.map((product, index) => (
                <Card key={index} className="overflow-hidden group hover:shadow-elegant transition-all duration-300">
                  <div className="relative h-64">
                    <img 
                      src={product.image} 
                      alt={`${product.name} premium decorative surface sample`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-playfair text-xl font-semibold text-primary mb-2">
                      {product.name}
                    </h3>
                    <p className="font-inter text-muted-foreground">
                      {product.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button asChild className="bg-gradient-brown hover:bg-primary/90 text-primary-foreground">
                <Link to="/products">Explore All Products</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Where Our Work Lives */}
        <section className="py-24 px-6 bg-cream-light">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-primary mb-6">
                Where Our Work Lives
              </h2>
              <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Every space tells a story. See how our decorative surfaces transform 
                architectural visions into remarkable environments.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {workGallery.map((work, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg shadow-elegant">
                  <img 
                    src={work.image} 
                    alt={`${work.title} - ${work.description} featuring premium decorative surfaces`}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="font-playfair text-2xl font-semibold mb-2">
                      {work.title}
                    </h3>
                    <p className="font-inter">
                      {work.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link to="/applications">View All Applications</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;