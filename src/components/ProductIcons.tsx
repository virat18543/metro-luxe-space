import { Link } from "react-router-dom";

const ProductIcons = () => {
  const products = [
    {
      name: "ASA Acrycore Sheets",
      icon: "🏢",
      anchor: "#asa-sheets",
      description: "Weather-resistant decorative surfaces"
    },
    {
      name: "Premium Laminates",
      icon: "✨",
      anchor: "#laminates", 
      description: "High-pressure decorative laminates"
    },
    {
      name: "Decorative Louvers",
      icon: "🏗️",
      anchor: "#louvers",
      description: "Architectural elements with style"
    },
    {
      name: "Cane Wallpaper",
      icon: "🌿",
      anchor: "#wallpaper",
      description: "Natural texture wallpaper solutions"
    }
  ];

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-primary mb-6">
            Our Product Collection
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our curated collection of decorative surfaces designed for architectural excellence
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {products.map((product, index) => (
            <Link
              key={index}
              to={`/products${product.anchor}`}
              className="group flex flex-col items-center text-center space-y-4 hover:scale-105 transition-all duration-300"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-cream-light to-cream-medium border-2 border-primary/20 flex items-center justify-center text-4xl md:text-5xl group-hover:shadow-elegant group-hover:border-primary/40 transition-all duration-300">
                {product.icon}
              </div>
              <div>
                <h3 className="font-playfair text-lg md:text-xl font-semibold text-primary mb-2 group-hover:text-primary/80 transition-colors">
                  {product.name}
                </h3>
                <p className="font-inter text-sm text-muted-foreground">
                  {product.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link 
            to="/products"
            className="inline-flex items-center px-8 py-3 bg-gradient-brown text-primary-foreground font-inter font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg"
          >
            Explore All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductIcons;