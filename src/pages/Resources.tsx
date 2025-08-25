import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Download, ExternalLink, FileText, Users, Building, Utensils } from "lucide-react";
import SmartImage from "../components/SmartImage";

const Resources = () => {
  const technicalGuides = [
    {
      title: "ASA vs PETG Material Guide",
      description: "Comprehensive comparison of material properties, applications, and performance characteristics for informed decision-making.",
      category: "Technical",
      downloadUrl: "#",
      icon: FileText
    },
    {
      title: "Installation Best Practices",
      description: "Step-by-step installation guidelines for optimal performance and longevity of decorative surfaces.",
      category: "Installation",
      downloadUrl: "#",
      icon: FileText
    },
    {
      title: "Maintenance & Care Manual",
      description: "Proper care instructions to maintain the beauty and durability of decorative surfaces over time.",
      category: "Maintenance",
      downloadUrl: "#",
      icon: FileText
    }
  ];

  const caseStudies = [
    {
      title: "Corporate Headquarters Transformation",
      description: "How ASA Acrycore sheets elevated a 50,000 sq ft office space with modern elegance and functionality.",
      category: "Commercial",
      image: "office-case-study",
      icon: Building,
      results: "40% improvement in employee satisfaction, 25% reduction in noise levels"
    },
    {
      title: "Luxury Residential Project",
      description: "Premium laminates and decorative louvers create sophisticated living environments that blend form and function.",
      category: "Residential",
      image: "residential-case-study",
      icon: Users,
      results: "30% increase in property value, seamless integration with existing architecture"
    },
    {
      title: "Restaurant Design Innovation",
      description: "Decorative louvers balance acoustics and aesthetics in high-traffic dining spaces while maintaining durability.",
      category: "Hospitality",
      image: "restaurant-case-study",
      icon: Utensils,
      results: "50% noise reduction, enhanced dining experience, easy maintenance"
    }
  ];

  const designTools = [
    {
      title: "Color & Finish Selector",
      description: "Interactive tool to explore our complete range of colors, textures, and finishes.",
      type: "Interactive Tool",
      url: "#"
    },
    {
      title: "3D Visualization Library",
      description: "High-resolution 3D models and textures for architectural visualization software.",
      type: "Download",
      url: "#"
    },
    {
      title: "CAD Blocks & Specifications",
      description: "Detailed technical drawings and specifications in multiple CAD formats.",
      type: "Download",
      url: "#"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-cream-light to-background">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-semibold text-primary mb-6">
            Design Resources
          </h1>
          <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive resources for architects, designers, and distributors. 
            From technical specifications to design inspiration, everything you need to succeed.
          </p>
        </div>
      </section>

      {/* Technical Guides Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-primary mb-4">
              Technical Documentation
            </h2>
            <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
              In-depth technical guides and documentation to support your projects from conception to completion.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technicalGuides.map((guide, index) => {
              const IconComponent = guide.icon;
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <IconComponent className="h-8 w-8 text-primary" />
                      <Badge variant="secondary">{guide.category}</Badge>
                    </div>
                    <CardTitle className="font-playfair text-xl group-hover:text-primary transition-colors">
                      {guide.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="font-inter mb-4 text-base leading-relaxed">
                      {guide.description}
                    </CardDescription>
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                      asChild
                    >
                      <a href={guide.downloadUrl}>
                        <Download className="h-4 w-4 mr-2" />
                        Download Guide
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 px-6 bg-cream-light/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-primary mb-4">
              Success Stories
            </h2>
            <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
              Real-world applications showcasing the versatility and impact of our decorative solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => {
              const IconComponent = study.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-500 overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <SmartImage
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      fallback={
                        <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center">
                          <IconComponent className="h-16 w-16 text-primary/40" />
                        </div>
                      }
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-background/90 text-primary hover:bg-background">
                        {study.category}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="font-playfair text-xl group-hover:text-primary transition-colors">
                      {study.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="font-inter mb-4 text-base leading-relaxed">
                      {study.description}
                    </CardDescription>
                    <div className="bg-cream-light/50 p-4 rounded-lg mb-4">
                      <h4 className="font-semibold text-primary mb-2 font-inter">Key Results:</h4>
                      <p className="text-sm text-muted-foreground font-inter">{study.results}</p>
                    </div>
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Full Case Study
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Design Tools Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-primary mb-4">
              Design Tools & Assets
            </h2>
            <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional tools and resources to streamline your design process and enhance your presentations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designTools.map((tool, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 text-center">
                <CardHeader className="pb-4">
                  <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                    <FileText className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-playfair text-xl group-hover:text-primary transition-colors">
                    {tool.title}
                  </CardTitle>
                  <Badge variant="outline" className="mx-auto w-fit">
                    {tool.type}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="font-inter mb-6 text-base leading-relaxed">
                    {tool.description}
                  </CardDescription>
                  <Button 
                    variant="default" 
                    className="group-hover:shadow-lg transition-all duration-300"
                    asChild
                  >
                    <a href={tool.url}>
                      {tool.type === "Download" ? (
                        <><Download className="h-4 w-4 mr-2" />Download</>
                      ) : (
                        <><ExternalLink className="h-4 w-4 mr-2" />Launch Tool</>
                      )}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-background to-cream-light/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-primary mb-6">
            Need Additional Support?
          </h2>
          <p className="font-inter text-lg text-muted-foreground mb-8 leading-relaxed">
            Our technical team is here to help you with project-specific questions, 
            custom specifications, and design consultations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="font-inter" asChild>
              <a href="/contact">
                Contact Technical Support
              </a>
            </Button>
            <Button variant="outline" size="lg" className="font-inter" asChild>
              <a href="/products">
                Browse Products
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
