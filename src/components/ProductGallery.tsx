import { useState } from "react";
import { Link } from "react-router-dom";
import asaSheetBrown from "@/assets/products/asa-sheet-brown.jpg";
import officeBrownPanels from "@/assets/applications/office-brown-panels.jpg";
import residentialFeatureWall from "@/assets/applications/residential-feature-wall.jpg";
import louversCream from "@/assets/products/louvers-cream.jpg";
import restaurantLouvers from "@/assets/applications/restaurant-louvers.jpg";

const ProductGallery = () => {
  const [activeProduct, setActiveProduct] = useState(0);

  const products = [
    {
      name: "Velvet Oak",
      category: "ASA Acrycore Sheet",
      internalCode: "VLT-123_Oak",
      sheetImage: asaSheetBrown,
      applications: [
        {
          title: "Corporate Office Paneling",
          image: officeBrownPanels,
          alt: "ASA Acrycore PETG decorative sheet brown oak veneer office wall panels corporate interior design"
        },
        {
          title: "Residential Feature Wall", 
          image: residentialFeatureWall,
          alt: "ASA Acrycore PETG brown wood grain decor sheet residential living room feature wall luxury interior"
        }
      ]
    },
    {
      name: "Architectural Louvers",
      category: "Decorative Louvers",
      internalCode: "LVR-456_Cream",
      sheetImage: louversCream,
      applications: [
        {
          title: "Restaurant Ceiling Feature",
          image: restaurantLouvers,
          alt: "Decorative louver ceiling installation restaurant commercial interior architectural element"
        },
        {
          title: "Office Partition System",
          image: officeBrownPanels,
          alt: "Louver partition panels office interior decorative architectural element workspace design"
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
                    <img
                      src={product.sheetImage}
                      alt={`${product.name} ${product.category} decorative sheet sample ASA Acrycore PETG`}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                      <div key={appIndex} className="group">
                        <div className="relative overflow-hidden rounded-lg shadow-soft">
                          <img
                            src={app.image}
                            alt={app.alt}
                            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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

        {/* Product Categories Overview */}
        <div className="mt-24 pt-16 border-t border-border">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { name: 'ASA Acrycore Sheets', anchor: '#asa-sheets' },
              { name: 'Premium Laminates', anchor: '#laminates' },
              { name: 'Decorative Louvers', anchor: '#louvers' },
              { name: 'Cane Wallpaper', anchor: '#wallpaper' }
            ].map((category, index) => (
              <Link 
                key={index} 
                to={`/products${category.anchor}`}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-brown rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="w-8 h-8 border-2 border-primary-foreground rounded-full" />
                </div>
                <h5 className="font-inter font-medium text-primary group-hover:text-primary/80 transition-colors">
                  {category.name}
                </h5>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;