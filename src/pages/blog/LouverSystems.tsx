import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
import JsonLd from "../../components/JsonLd";

const LouverSystems = () => {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Resources", path: "/resources" },
    { name: "Louver Systems: Function Meets Aesthetic Appeal", path: "/blog/louver-systems" }
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
                Architectural Systems
              </span>
              <h1 className="font-playfair text-4xl md:text-5xl font-semibold text-primary mt-6 mb-6">
                Louver Systems: Function Meets Aesthetic Appeal
              </h1>
              <p className="font-inter text-xl text-muted-foreground leading-relaxed">
                How modern louver systems balance ventilation, privacy, and architectural beauty 
                in contemporary design applications for both interior and exterior environments.
              </p>
            </div>

            <div className="h-64 bg-gradient-brown rounded-lg flex items-center justify-center mb-12">
              <span className="font-inter text-primary-foreground text-lg">Featured Image: Modern Louver Installation</span>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16 px-6 bg-background">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div className="font-inter text-muted-foreground leading-relaxed space-y-8">
                
                <div>
                  <h2 className="font-playfair text-2xl font-semibold text-primary mb-4">The Evolution of Louver Systems</h2>
                  <p>
                    Louver systems have evolved from simple ventilation solutions to sophisticated architectural 
                    elements that serve multiple functions while enhancing the aesthetic appeal of modern buildings. 
                    Today's louver systems seamlessly integrate functionality with design, offering architects 
                    unprecedented flexibility in creating dynamic, responsive facades and interior partitions.
                  </p>
                </div>

                <div>
                  <h2 className="font-playfair text-2xl font-semibold text-primary mb-4">Functional Benefits</h2>
                  <p className="mb-4">
                    Modern louver systems provide multiple functional advantages that make them essential 
                    components in contemporary architecture:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8 my-8">
                    <Card className="p-6">
                      <h3 className="font-playfair text-xl font-semibold text-primary mb-4">Ventilation Control</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Natural airflow regulation</li>
                        <li>• Temperature management</li>
                        <li>• Humidity control</li>
                        <li>• Energy efficiency enhancement</li>
                      </ul>
                    </Card>
                    
                    <Card className="p-6">
                      <h3 className="font-playfair text-xl font-semibold text-primary mb-4">Privacy & Light Control</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Adjustable privacy levels</li>
                        <li>• Glare reduction</li>
                        <li>• Natural light filtering</li>
                        <li>• Visual screening</li>
                      </ul>
                    </Card>
                  </div>
                </div>

                <div>
                  <h2 className="font-playfair text-2xl font-semibold text-primary mb-4">Design Applications</h2>
                  <p className="mb-4">
                    The versatility of louver systems allows for creative applications across various architectural contexts:
                  </p>
                  
                  <div className="space-y-6">
                    <div className="bg-cream-light p-6 rounded-lg">
                      <h4 className="font-semibold text-primary mb-3">Exterior Applications</h4>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="font-medium mb-2">Building Facades:</p>
                          <ul className="space-y-1 text-muted-foreground">
                            <li>• Architectural screening</li>
                            <li>• Sun shading systems</li>
                            <li>• Weather protection</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-medium mb-2">Landscape Integration:</p>
                          <ul className="space-y-1 text-muted-foreground">
                            <li>• Garden screening</li>
                            <li>• Pool area privacy</li>
                            <li>• Outdoor dining enclosures</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-cream-light p-6 rounded-lg">
                      <h4 className="font-semibold text-primary mb-3">Interior Applications</h4>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="font-medium mb-2">Space Division:</p>
                          <ul className="space-y-1 text-muted-foreground">
                            <li>• Room partitions</li>
                            <li>• Flexible workspace design</li>
                            <li>• Acoustic management</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-medium mb-2">Decorative Elements:</p>
                          <ul className="space-y-1 text-muted-foreground">
                            <li>• Feature walls</li>
                            <li>• Ceiling treatments</li>
                            <li>• Staircase screening</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="font-playfair text-2xl font-semibold text-primary mb-4">Material Considerations</h2>
                  <p className="mb-4">
                    The choice of material significantly impacts both the performance and aesthetics of louver systems:
                  </p>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-cream-light">
                      <thead>
                        <tr className="bg-cream-light">
                          <th className="border border-cream-light p-3 text-left font-semibold text-primary">Material</th>
                          <th className="border border-cream-light p-3 text-left font-semibold text-primary">Advantages</th>
                          <th className="border border-cream-light p-3 text-left font-semibold text-primary">Best Applications</th>
                        </tr>
                      </thead>
                      <tbody className="text-sm">
                        <tr>
                          <td className="border border-cream-light p-3 font-medium">Aluminum</td>
                          <td className="border border-cream-light p-3">Lightweight, corrosion-resistant, recyclable</td>
                          <td className="border border-cream-light p-3">Exterior facades, commercial applications</td>
                        </tr>
                        <tr className="bg-cream-light/50">
                          <td className="border border-cream-light p-3 font-medium">Acrycore</td>
                          <td className="border border-cream-light p-3">UV-stable, weather-resistant, color variety</td>
                          <td className="border border-cream-light p-3">Decorative screens, architectural features</td>
                        </tr>
                        <tr>
                          <td className="border border-cream-light p-3 font-medium">Timber</td>
                          <td className="border border-cream-light p-3">Natural aesthetics, sustainable option</td>
                          <td className="border border-cream-light p-3">Interior partitions, residential projects</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h2 className="font-playfair text-2xl font-semibold text-primary mb-4">Design Considerations</h2>
                  <p className="mb-4">
                    Successful louver system implementation requires careful consideration of several design factors:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Blade angle:</strong> Determines the balance between privacy and ventilation</li>
                    <li><strong>Spacing:</strong> Affects airflow patterns and visual transparency</li>
                    <li><strong>Orientation:</strong> Optimizes performance based on sun path and prevailing winds</li>
                    <li><strong>Integration:</strong> Seamless incorporation with building systems and aesthetics</li>
                    <li><strong>Maintenance access:</strong> Planning for cleaning and upkeep requirements</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-playfair text-2xl font-semibold text-primary mb-4">Installation Best Practices</h2>
                  <p className="mb-4">
                    Proper installation is crucial for optimal performance and longevity:
                  </p>
                  <div className="bg-cream-light p-6 rounded-lg">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Pre-Installation</h4>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• Site survey and measurement</li>
                          <li>• Structural assessment</li>
                          <li>• Material delivery coordination</li>
                          <li>• Weather condition planning</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Quality Control</h4>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• Alignment verification</li>
                          <li>• Fastener quality check</li>
                          <li>• Weatherproofing inspection</li>
                          <li>• Performance testing</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="font-playfair text-2xl font-semibold text-primary mb-4">Future Trends</h2>
                  <p>
                    The future of louver systems lies in smart integration with building automation systems, 
                    responsive materials that adjust to environmental conditions, and sustainable manufacturing 
                    processes. These innovations will further enhance the role of louvers as both functional 
                    and aesthetic architectural elements, contributing to more efficient and beautiful built environments.
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
                  Comprehensive comparison of material properties and applications for louver systems.
                </p>
              </Card>
              
              <Card className="p-6 hover:shadow-elegant transition-all duration-300">
                <h3 className="font-playfair text-lg font-semibold text-primary mb-3">
                  <Link to="/blog/sustainable-design" className="hover:underline">
                    Sustainable Design with Laminates
                  </Link>
                </h3>
                <p className="font-inter text-muted-foreground">
                  Exploring eco-friendly approaches to architectural material selection.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-playfair text-2xl font-semibold mb-4">
              Interested in Louver Solutions?
            </h2>
            <p className="font-inter text-lg mb-8">
              Explore our range of architectural louver systems and get expert design guidance.
            </p>
            <Button 
              asChild 
              variant="outline"
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Link to="/contact">Discuss Your Project</Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default LouverSystems;

