import { useState } from "react";
import { Link } from "react-router-dom";
import SmartImage from "./SmartImage";
import asaSheetBrown from "@/assets/products/asa-sheet-brown.jpg";
import residentialFeatureWall from "@/assets/applications/residential-feature-wall.jpg";
import louInMS from "@/assets/products/Lou-in-MS.png";
import restaurantLouvers from "@/assets/applications/restaurant-louvers.jpg";

const ProductGallery = () => {
  const [activeProduct, setActiveProduct] = useState(0);

  const products = [
    {
      name: "Frost White",
      category: "Acrycore Sheet",
      internalCode: "VLT-123_Oak",
      sheetImage: asaSheetBrown,
      applications: [
        {
          title: "Corporate Office Paneling",
          image: "/assets/20250825_1334_Minimalist-Workstation-Design_remix_01k3g409jqehsvv8ybz8g2jr25.jpg",
          alt: "Showcase: Frost White used for Corporate Office Paneling — ASA Acrycore Sheet by Metro Surfaces"
        },
        {
          title: "Residential Feature Wall", 
          image: residentialFeatureWall,
          alt: "Showcase: Frost White used for Residential Feature Wall — ASA Acrycore Sheet by Metro Surfaces"
        }
      ]
    },
    {
      name: "Architectural Louvers",
      category: "Decorative Louvers",
      internalCode: "LVR-456_Cream",
      sheetImage: louInMS,
      applications: [
        {
          title: "Restaurant Ceiling Feature",
          image: restaurantLouvers,
          alt: "Showcase: Architectural Louvers used for Restaurant Ceiling Feature — Decorative Louvers by Metro Surfaces"
        },
        {
          title: "Office Partition System",
          image: "/assets/20250825_1334_Minimalist-Workstation-Design_remix_01k3g409jqehsvv8ybz8g2jr25.jpg",
          alt: "Showcase: Architectural Louvers used for Office Partition System — Decorative Louvers by Metro Surfaces"
        }
      ]
    }
  ];

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-primary mb-6">
            From Product to Space
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover how our premium decorative surfaces transform architectural visions into reality. 
            Each product showcases endless possibilities for sophisticated interior design.
          </p>
        </div>

        {/* Product Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-4 p-2 bg-cream-light rounded-lg">
            {products.map((product, index) => (
              <button
                key={index}
                onClick={() => setActiveProduct(index)}
                className={`px-6 py-3 rounded-md font-inter font-medium transition-all duration-300 ${
                  activeProduct === index
                    ? 'bg-primary text-primary-foreground shadow-soft'
                    : 'text-muted-foreground hover:text-primary hover:bg-background'
                }`}
              >
                {product.category}
              </button>
            ))}
          </div>
        </div>

        {/* Active Product Display */}
        <div className="space-y-12">
          {products.map((product, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ${
                activeProduct === index ? 'opacity-100' : 'opacity-0 hidden'
              }`}
            >
              <div className="grid lg:grid-cols-3 gap-8 items-start">
                {/* Product Sheet */}
                <div className="group">
                  <div className="relative overflow-hidden rounded-lg shadow-elegant">
                    <SmartImage
                      src={product.sheetImage}
                      alt={`Sample of ${product.name} (${product.category}) by Metro Surfaces — ${product.internalCode}, features: ${product.category}`}
                      width={400}
                      height={256}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="font-playfair text-2xl font-semibold text-primary mb-2">
                      {product.name}
                    </h3>
                    <p className="font-inter text-muted-foreground">
                      {product.category}
                    </p>
                    <p className="font-inter text-sm text-muted-foreground/70 mt-1">
                      8×4 feet available
                    </p>
                  </div>
                </div>

                {/* Applications */}
                <div className="lg:col-span-2 space-y-6">
                  <h4 className="font-playfair text-2xl font-semibold text-primary mb-6">
                    Application Showcase
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    {product.applications.map((app, appIndex) => (
                      <div className="group" key={appIndex}>
                        <div className="relative overflow-hidden rounded-lg shadow-soft">
                          <SmartImage
                            src={app.image}
                            alt={app.alt}
                            width={400}
                            height={192}
                            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="absolute bottom-4 left-4 right-4">
                            <h5 className="font-inter font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              {app.title}
                            </h5>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
