import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";

const Downloads = () => {
  const catalogs = [
    {
      title: "Complete Product Catalog 2024",
      description: "Comprehensive catalog featuring our entire range of decorative surfaces with specifications and applications.",
      size: "12.5 MB",
      pages: "48 pages",
      format: "PDF",
      category: "Complete Range",
      downloadUrl: "#"
    },
    {
      title: "ASA Acrycore Sheet Guide",
      description: "Detailed specifications, installation guidelines, and application examples for ASA Acrycore sheets.",
      size: "5.2 MB", 
      pages: "16 pages",
      format: "PDF",
      category: "ASA Acrycore",
      downloadUrl: "#"
    },
    {
      title: "Premium Laminates Collection",
      description: "High-pressure decorative laminates with texture samples and design options for commercial projects.",
      size: "8.7 MB",
      pages: "24 pages", 
      format: "PDF",
      category: "Laminates",
      downloadUrl: "#"
    },
    {
      title: "Decorative Louvers Systems",
      description: "Architectural louver solutions with spacing options, installation details, and project applications.",
      size: "4.1 MB",
      pages: "12 pages",
      format: "PDF", 
      category: "Louvers",
      downloadUrl: "#"
    },
    {
      title: "Cane Wallpaper Collection",
      description: "Natural texture wallpaper solutions with pattern variations and installation instructions.",
      size: "3.8 MB",
      pages: "8 pages",
      format: "PDF",
      category: "Wallpaper",
      downloadUrl: "#"
    },
    {
      title: "Technical Specifications Manual",
      description: "Comprehensive technical data, material properties, and compliance certifications for all products.",
      size: "6.3 MB",
      pages: "32 pages",
      format: "PDF",
      category: "Technical",
      downloadUrl: "#"
    }
  ];

  const certificates = [
    {
      title: "ISO Quality Certification",
      description: "Quality management system certification for manufacturing processes.",
      format: "PDF",
      downloadUrl: "#"
    },
    {
      title: "Fire Safety Compliance",
      description: "Fire safety test reports and compliance certificates for commercial applications.",
      format: "PDF", 
      downloadUrl: "#"
    },
    {
      title: "Environmental Standards",
      description: "Environmental compliance and sustainability certifications.",
      format: "PDF",
      downloadUrl: "#"
    }
  ];

  const samples = [
    {
      title: "Digital Color Samples",
      description: "High-resolution color swatches for all available finishes and textures.",
      format: "ZIP",
      size: "15.2 MB",
      downloadUrl: "#"
    },
    {
      title: "Texture Reference Guide",
      description: "Detailed texture patterns and surface finish references for specification.",
      format: "PDF",
      size: "7.8 MB", 
      downloadUrl: "#"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-cream-light to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-semibold text-primary mb-6">
            Download Center
          </h1>
          <p className="font-inter text-xl text-muted-foreground leading-relaxed">
            Access comprehensive product catalogs, technical documentation, and design resources. 
            Everything you need for successful project specification and implementation.
          </p>
        </div>
      </section>

      {/* Product Catalogs */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-primary mb-6">
              Product Catalogs
            </h2>
            <p className="font-inter text-lg text-muted-foreground">
              Detailed product information with specifications and application examples.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {catalogs.map((catalog, index) => (
              <Card key={index} className="p-8 hover:shadow-elegant transition-all duration-300">
                <div className="mb-4">
                  <span className="font-inter text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {catalog.category}
                  </span>
                </div>
                
                <h3 className="font-playfair text-xl font-semibold text-primary mb-4">
                  {catalog.title}
                </h3>
                
                <p className="font-inter text-muted-foreground mb-6 leading-relaxed">
                  {catalog.description}
                </p>
                
                <div className="flex justify-between items-center mb-6 font-inter text-sm text-muted-foreground">
                  <span>{catalog.format}</span>
                  <span>{catalog.size}</span>
                  <span>{catalog.pages}</span>
                </div>
                
                <Button 
                  asChild 
                  className="w-full bg-gradient-brown hover:bg-primary/90 text-primary-foreground"
                >
                  <a href={catalog.downloadUrl} download>
                    Download Catalog
                  </a>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section className="py-24 px-6 bg-cream-light">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-primary mb-6">
              Certifications & Compliance
            </h2>
            <p className="font-inter text-lg text-muted-foreground">
              Quality assurance and compliance documentation for professional specification.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <Card key={index} className="p-8 hover:shadow-elegant transition-all duration-300">
                <h3 className="font-playfair text-xl font-semibold text-primary mb-4">
                  {cert.title}
                </h3>
                <p className="font-inter text-muted-foreground mb-6 leading-relaxed">
                  {cert.description}
                </p>
                <Button 
                  asChild 
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <a href={cert.downloadUrl} download>
                    Download {cert.format}
                  </a>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Samples */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-primary mb-6">
              Digital Samples & References
            </h2>
            <p className="font-inter text-lg text-muted-foreground">
              Color swatches and texture references for design visualization and client presentations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {samples.map((sample, index) => (
              <Card key={index} className="p-8 hover:shadow-elegant transition-all duration-300">
                <h3 className="font-playfair text-xl font-semibold text-primary mb-4">
                  {sample.title}
                </h3>
                <p className="font-inter text-muted-foreground mb-6 leading-relaxed">
                  {sample.description}
                </p>
                <div className="flex justify-between items-center mb-6 font-inter text-sm text-muted-foreground">
                  <span>{sample.format}</span>
                  <span>{sample.size}</span>
                </div>
                <Button 
                  asChild 
                  className="w-full bg-gradient-brown hover:bg-primary/90 text-primary-foreground"
                >
                  <a href={sample.downloadUrl} download>
                    Download {sample.format}
                  </a>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Physical Samples */}
      <section className="py-24 px-6 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold mb-8">
            Need Physical Samples?
          </h2>
          <p className="font-inter text-xl leading-relaxed mb-8">
            For actual texture and color evaluation, we provide physical samples 
            delivered directly to your project location.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              variant="outline"
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <a href="https://wa.me/919326005195" target="_blank" rel="noopener noreferrer">
                Request via WhatsApp
              </a>
            </Button>
            <Button 
              asChild 
              variant="outline"
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <a href="mailto:rrrmetro@gmail.com">
                Email Sample Request
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Downloads;