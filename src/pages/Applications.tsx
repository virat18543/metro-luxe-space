import ProductGallery from "../components/ProductGallery";
import Seo from '../components/Seo';

const Applications = () => {
  return (
    <>
      <Seo
        title="Decorative Surface Applications | Wall Cladding, Ceilings, Commercial Spaces"
        description="Applications of premium decorative surfaces by Metro Surfaces: Innovative wall cladding, hotel interiors, ceilings, and retail solutions using ASA Acrycore, laminates, louvers."
        canonical="https://voli.co.in/applications"
        ogImage="https://voli.co.in/applications/og.jpg"
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context":"https://schema.org",
            "@type":"BreadcrumbList",
            "itemListElement":[
              {"@type":"ListItem","position":1,"name":"Home","item":"https://voli.co.in/"},
              {"@type":"ListItem","position":2,"name":"Applications","item":"https://voli.co.in/applications"}
            ]
          })
        }}
      />
      
      <div className="pt-16">
        {/* Interactive Gallery */}
        <ProductGallery />
        
        {/* Decorative Louvers Section */}
        <section className="py-24 px-6 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-primary mb-6">
                Decorative Louvers
              </h2>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="font-inter text-muted-foreground">Premium aluminum construction</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="font-inter text-muted-foreground">Weather-resistant coating</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="font-inter text-muted-foreground">Custom color matching available</span>
              </div>
            </div>
          </div>
        </section>
        
        {/* Application Types */}
        <section className="py-24 px-6 bg-cream-light">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-primary mb-6">
                Versatile Applications
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Commercial Spaces",
                  applications: ["Offices", "Retail", "Hotels", "Healthcare"],
                  description: "Professional environments"
                },
                {
                  title: "Residential Projects", 
                  applications: ["Living rooms", "Kitchens", "Bedrooms", "Feature walls"],
                  description: "Sophisticated home interiors"
                },
                {
                  title: "Architectural Elements",
                  applications: ["Exterior cladding", "Interior panels", "Ceilings", "Partitions"],
                  description: "Structural and decorative components"
                }
              ].map((category, index) => (
                <div className="bg-background p-8 rounded-lg shadow-soft" key={index}>
                  <h3 className="font-playfair text-xl font-semibold text-primary mb-4">
                    {category.title}
                  </h3>
                  <p className="font-inter text-muted-foreground mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  <div className="space-y-2">
                    {category.applications.map((app, appIndex) => (
                      <div className="flex items-center space-x-2" key={appIndex}>
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
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
    </>
  );
};

export default Applications;
