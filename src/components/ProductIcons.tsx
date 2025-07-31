import { Link } from "react-router-dom";

const ProductIcons = () => {
  const products = [
    {
      name: "ASA Acrycore Sheets",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      anchor: "#asa-sheets",
      description: "Weather-resistant decorative surfaces"
    },
    {
      name: "Premium Laminates",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 21h10a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a4 4 0 01-4 4z" />
        </svg>
      ),
      anchor: "#laminates", 
      description: "High-pressure decorative laminates"
    },
    {
      name: "Decorative Louvers",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
        </svg>
      ),
      anchor: "#louvers",
      description: "Architectural elements with style"
    },
    {
      name: "Cane Wallpaper",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
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
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-background to-cream-light border border-primary/10 flex items-center justify-center text-primary group-hover:shadow-elegant group-hover:border-primary/30 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
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