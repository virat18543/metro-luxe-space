import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
import JsonLd from "../../components/JsonLd";

const SustainableDesign = () => {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Resources", path: "/resources" },
    { name: "Sustainable Design with Laminates", path: "/blog/sustainable-design" }
  ];

  return (
    <>
      <JsonLd />
      <div className="pt-16">
        {/* Breadcrumb */}
        <nav className="py-4 px-6 bg-cream-light">
          <div className="max-w-4xl mx-auto">
            <ol className="flex items-center space-x-2 font-inter text-sm text-muted-foreground">
              {breadcrumbs.map((crumb, index) => (
                <li key={index} className="flex items-center">
                  {index > 0 && <span className="mx-2">/</span>}
                  {index === breadcrumbs.length - 1 ? (
                    <span className="text-primary font-medium">{crumb.name}</span>
                  ) : (
                    <Link to={crumb.path} className="hover:text-primary transition-colors">
                      {crumb.name}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </nav>

        {/* Article Header */}
        <section className="py-16 px-6 bg-background">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="font-inter text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                Sustainability
              </span>
              <h1 className="font-playfair text-4xl md:text-5xl font-semibold text-primary mt-6 mb-6">
                Sustainable Design with Laminates
              </h1>
              <p className="font-inter text-xl text-muted-foreground leading-relaxed">
                Exploring eco-friendly approaches to laminate selection and application in modern architecture 
                for sustainable building practices and environmental responsibility.
              </p>
            </div>

            <div className="h-64 bg-gradient-brown rounded-lg flex items-center justify-center mb-12">
              <span className="font-inter text-primary-foreground text-lg">Featured Image: Sustainable Architecture</span>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16 px-6 bg-background">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div className="font-inter text-muted-foreground leading-relaxed space-y-8">
                
                <div>
                  <h2 className="font-playfair text-2xl font-semibold text-primary mb-4">The Sustainable Design Imperative</h2>
                  <p>
                    As the construction industry increasingly focuses on environmental responsibility, 
                    the selection of sustainable materials has become crucial for architects and designers. 
                    Laminates, traditionally viewed as synthetic alternatives, are evolving to meet 
                    stringent sustainability criteria while maintaining their aesthetic and functional advantages.
                  </p>
                </div>

                <div>
                  <h2 className="font-playfair text-2xl font-semibold text-primary mb-4">Environmental Considerations</h2>
                  <p className="mb-4">
                    Modern laminate manufacturing has made significant strides in reducing environmental impact 
                    through improved processes and material sourcing:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Reduced VOC (Volatile Organic Compound) emissions</li>
                    <li>Increased use of recycled content in core materials</li>
                    <li>Energy-efficient manufacturing processes</li>
                    <li>Longer product lifecycles reducing replacement frequency</li>
                    <li>Recyclability at end-of-life</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-playfair text-2xl font-semibold text-primary mb-4">Sustainable Laminate Features</h2>
                  
                  <div className="grid md:grid-cols-2 gap-8 my-8">
                    <Card className="p-6">
                      <h3 className="font-playfair text-xl font-semibold text-primary mb-4">Low-Emission Options</h3>
                      <p className="text-muted-foreground mb-4">
                        E1 and E0 grade laminates meet strict formaldehyde emission standards, 
                        contributing to better indoor air quality.
                      </p>
                      <ul className="space-y-1 text-muted-foreground text-sm">
                        <li>• GREENGUARD certified options</li>
                        <li>• CARB Phase 2 compliant</li>
                        <li>• Low-formaldehyde adhesives</li>
                      </ul>
                    </Card>
                    
                    <Card className="p-6">
                      <h3 className="font-playfair text-xl font-semibold text-primary mb-4">Durability Benefits</h3>
                      <p className="text-muted-foreground mb-4">
                        Extended product lifespans reduce the need for frequent replacements, 
                        minimizing material consumption over time.
                      </p>
                      <ul className="space-y-1 text-muted-foreground text-sm">
                        <li>• 15-20 year performance warranties</li>
                        <li>• Scratch and stain resistance</li>
                        <li>• UV stability for color retention</li>
                      </ul>
                    </Card>
                  </div>
                </div>

                <div>
                  <h2 className="font-playfair text-2xl font-semibold text-primary mb-4">LEED and Green Building Certifications</h2>
                  <p className="mb-4">
                    Sustainable laminates can contribute to green building certification programs:
                  </p>
                  <div className="bg-cream-light p-6 rounded-lg">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-semibold text-primary mb-2">LEED Points</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Materials & Resources</li>
                          <li>• Indoor Environmental Quality</li>
                          <li>• Regional Materials</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">BREEAM</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Health & Wellbeing</li>
                          <li>• Materials scoring</li>
                          <li>• Pollution prevention</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">IGBC</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Material resource efficiency</li>
                          <li>• Indoor air quality</li>
                          <li>• Local materials preference</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="font-playfair text-2xl font-semibold text-primary mb-4">Lifecycle Assessment</h2>
                  <p className="mb-4">
                    A comprehensive approach to sustainability considers the entire product lifecycle:
                  </p>
                  <div className="space-y-4">
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold text-primary">Manufacturing Phase</h4>
                      <p className="text-sm text-muted-foreground">
                        Energy-efficient production, waste reduction, and responsible sourcing of raw materials.
                      </p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold text-primary">Use Phase</h4>
                      <p className="text-sm text-muted-foreground">
                        Low-maintenance requirements, durability, and contribution to healthy indoor environments.
                      </p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold text-primary">End-of-Life</h4>
                      <p className="text-sm text-muted-foreground">
                        Recyclability options and proper disposal methods to minimize environmental impact.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="font-playfair text-2xl font-semibold text-primary mb-4">Best Practices for Architects</h2>
                  <p className="mb-4">
                    To maximize the sustainability benefits of laminate applications:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Specify laminates with environmental certifications</li>
                    <li>Consider local suppliers to reduce transportation impact</li>
                    <li>Design for longevity and adaptability</li>
                    <li>Plan for maintenance and potential future recycling</li>
                    <li>Integrate with other sustainable building strategies</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-playfair text-2xl font-semibold text-primary mb-4">Future Innovations</h2>
                  <p>
                    The laminate industry continues to innovate with bio-based materials, 
                    improved recycling technologies, and carbon-neutral manufacturing processes. 
                    These developments promise even greater sustainability benefits for future projects, 
                    making laminates an increasingly attractive option for environmentally conscious design.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 px-6 bg-cream-light">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-2xl font-semibold text-primary mb-8 text-center">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 hover:shadow-elegant transition-all duration-300">
                <h3 className="font-playfair text-lg font-semibold text-primary mb-3">
                  <Link to="/blog/asa-vs-petg" className="hover:underline">
                    ASA vs PETG: Understanding Decorative Sheet Materials
                  </Link>
                </h3>
                <p className="font-inter text-muted-foreground">
                  Comprehensive comparison of material properties and applications for informed material selection.
                </p>
              </Card>
              
              <Card className="p-6 hover:shadow-elegant transition-all duration-300">
                <h3 className="font-playfair text-lg font-semibold text-primary mb-3">
                  <Link to="/blog/louver-systems" className="hover:underline">
                    Louver Systems: Function Meets Aesthetic Appeal
                  </Link>
                </h3>
                <p className="font-inter text-muted-foreground">
                  How modern louver systems balance ventilation, privacy, and architectural beauty.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-playfair text-2xl font-semibold mb-4">
              Interested in Sustainable Solutions?
            </h2>
            <p className="font-inter text-lg mb-8">
              Discover our eco-friendly laminate options and certification details.
            </p>
            <Button 
              asChild 
              variant="outline"
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Link to="/contact">Request Sustainability Information</Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default SustainableDesign;