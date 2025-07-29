import ProductGallery from "../components/ProductGallery";

const Applications = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-cream-light to-background">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-semibold text-primary mb-6">
            Application Showcase
          </h1>
          <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Witness the transformation from raw materials to stunning architectural elements. 
            Each application demonstrates the versatility and beauty of our premium decorative surfaces.
          </p>
        </div>
      </section>

      {/* Interactive Gallery */}
      <ProductGallery />

      {/* Application Types */}
      <section className="py-24 px-6 bg-cream-light">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-primary mb-6">
              Versatile Applications
            </h2>
            <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our decorative surfaces adapt to diverse architectural needs across multiple sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Commercial Spaces",
                applications: ["Office Interiors", "Retail Environments", "Hospitality Design", "Healthcare Facilities"],
                description: "Professional environments requiring durability and aesthetic appeal"
              },
              {
                title: "Residential Projects", 
                applications: ["Living Rooms", "Kitchens", "Bedrooms", "Feature Walls"],
                description: "Sophisticated home interiors with premium finishes"
              },
              {
                title: "Architectural Elements",
                applications: ["Exterior Cladding", "Interior Paneling", "Ceiling Systems", "Partition Walls"],
                description: "Structural and decorative architectural components"
              }
            ].map((category, index) => (
              <div key={index} className="bg-background p-8 rounded-lg shadow-soft">
                <h3 className="font-playfair text-xl font-semibold text-primary mb-4">
                  {category.title}
                </h3>
                <p className="font-inter text-muted-foreground mb-6 leading-relaxed">
                  {category.description}
                </p>
                <div className="space-y-2">
                  {category.applications.map((app, appIndex) => (
                    <div key={appIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="font-inter text-muted-foreground">{app}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Applications;