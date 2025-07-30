import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
import JsonLd from "../../components/JsonLd";

const AsaVsPetg = () => {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Resources", path: "/resources" },
    { name: "ASA vs PETG: Understanding Decorative Sheet Materials", path: "/blog/asa-vs-petg" }
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
                Technical Guide
              </span>
              <h1 className="font-playfair text-4xl md:text-5xl font-semibold text-primary mt-6 mb-6">
                ASA vs PETG: Understanding Decorative Sheet Materials
              </h1>
              <p className="font-inter text-xl text-muted-foreground leading-relaxed">
                A comprehensive comparison of material properties, applications, and performance characteristics 
                to help architects and designers make informed decisions.
              </p>
            </div>

            <div className="h-64 bg-gradient-brown rounded-lg flex items-center justify-center mb-12">
              <span className="font-inter text-primary-foreground text-lg">Featured Image: Material Comparison</span>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16 px-6 bg-background">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div className="font-inter text-muted-foreground leading-relaxed space-y-8">
                
                <div>
                  <h2 className="font-playfair text-2xl font-semibold text-primary mb-4">Introduction</h2>
                  <p>
                    When selecting decorative sheets for architectural applications, understanding the fundamental 
                    differences between ASA (Acrylonitrile Styrene Acrylate) and PETG (Polyethylene Terephthalate Glycol) 
                    materials is crucial for project success. Both materials offer unique advantages that make them 
                    suitable for different applications.
                  </p>
                </div>

                <div>
                  <h2 className="font-playfair text-2xl font-semibold text-primary mb-4">ASA Material Properties</h2>
                  <p className="mb-4">
                    ASA is a thermoplastic known for its exceptional weather resistance and UV stability. 
                    Originally developed for outdoor applications, ASA has found extensive use in architectural 
                    applications where durability is paramount.
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Excellent UV resistance without degradation</li>
                    <li>Superior weather resistance for exterior applications</li>
                    <li>Maintains color stability over extended periods</li>
                    <li>Good impact resistance and dimensional stability</li>
                    <li>Chemical resistance to most cleaning agents</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-playfair text-2xl font-semibold text-primary mb-4">PETG Material Properties</h2>
                  <p className="mb-4">
                    PETG is a glycol-modified polyester that offers excellent clarity, chemical resistance, 
                    and ease of fabrication. It's particularly valued for interior applications where 
                    aesthetics and workability are priorities.
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Exceptional optical clarity and transparency</li>
                    <li>Easy thermoforming and fabrication</li>
                    <li>Good chemical resistance</li>
                    <li>Food-safe grade options available</li>
                    <li>Excellent impact resistance</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-playfair text-2xl font-semibold text-primary mb-4">Application Comparisons</h2>
                  
                  <div className="grid md:grid-cols-2 gap-8 my-8">
                    <Card className="p-6">
                      <h3 className="font-playfair text-xl font-semibold text-primary mb-4">ASA Applications</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Exterior cladding systems</li>
                        <li>• Architectural louver systems</li>
                        <li>• Outdoor signage</li>
                        <li>• Weather-exposed decorative elements</li>
                        <li>• High-traffic commercial interiors</li>
                      </ul>
                    </Card>
                    
                    <Card className="p-6">
                      <h3 className="font-playfair text-xl font-semibold text-primary mb-4">PETG Applications</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Interior decorative panels</li>
                        <li>• Display and retail fixtures</li>
                        <li>• Medical and healthcare environments</li>
                        <li>• Food service applications</li>
                        <li>• Architectural glazing elements</li>
                      </ul>
                    </Card>
                  </div>
                </div>

                <div>
                  <h2 className="font-playfair text-2xl font-semibold text-primary mb-4">Selection Criteria</h2>
                  <p className="mb-4">
                    The choice between ASA and PETG should be based on specific project requirements:
                  </p>
                  <div className="bg-cream-light p-6 rounded-lg">
                    <p className="font-semibold text-primary mb-2">Choose ASA when:</p>
                    <ul className="list-disc list-inside space-y-1 mb-4">
                      <li>UV exposure is a concern</li>
                      <li>Exterior applications are required</li>
                      <li>Long-term color stability is critical</li>
                      <li>Chemical resistance is important</li>
                    </ul>
                    
                    <p className="font-semibold text-primary mb-2">Choose PETG when:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Optical clarity is required</li>
                      <li>Easy fabrication is needed</li>
                      <li>Interior applications predominate</li>
                      <li>Food contact approval is necessary</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="font-playfair text-2xl font-semibold text-primary mb-4">Conclusion</h2>
                  <p>
                    Both ASA and PETG offer distinct advantages for decorative sheet applications. 
                    Understanding these material properties ensures optimal performance and longevity 
                    in your architectural projects. Our technical team at Metro Laminates can provide 
                    detailed guidance for your specific application requirements.
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
                  <Link to="/blog/sustainable-design" className="hover:underline">
                    Sustainable Design with Laminates
                  </Link>
                </h3>
                <p className="font-inter text-muted-foreground">
                  Exploring eco-friendly approaches to laminate selection and application in modern architecture.
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
              Need Material Guidance?
            </h2>
            <p className="font-inter text-lg mb-8">
              Our technical experts can help you select the right materials for your project.
            </p>
            <Button 
              asChild 
              variant="outline"
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Link to="/contact">Contact Our Technical Team</Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default AsaVsPetg;