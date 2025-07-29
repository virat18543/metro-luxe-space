import { Card } from "./ui/card";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-cream-light to-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-primary mb-6">
            Connect With Us
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to elevate your next project? Our team is here to provide expert guidance 
            and premium decorative surface solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* WhatsApp Contact */}
          <Card className="p-8 text-center hover:shadow-elegant transition-all duration-300 border-border/50">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-brown rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
            </div>
            <h3 className="font-playfair text-2xl font-semibold text-primary mb-4">
              WhatsApp
            </h3>
            <p className="font-inter text-muted-foreground mb-6">
              Quick responses for immediate project needs
            </p>
            <Button 
              asChild 
              className="w-full bg-gradient-brown hover:bg-primary/90 text-primary-foreground font-inter font-medium"
            >
              <a 
                href="https://wa.me/919326005195" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center"
              >
                Message Us: +91 93260 05195
              </a>
            </Button>
          </Card>

          {/* Email Contact */}
          <Card className="p-8 text-center hover:shadow-elegant transition-all duration-300 border-border/50">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-brown rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            <h3 className="font-playfair text-2xl font-semibold text-primary mb-4">
              Email
            </h3>
            <p className="font-inter text-muted-foreground mb-6">
              Detailed inquiries and project specifications
            </p>
            <Button 
              asChild 
              variant="outline"
              className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground font-inter font-medium"
            >
              <a 
                href="mailto:rrrmetro@gmail.com"
                className="inline-flex items-center justify-center"
              >
                rrrmetro@gmail.com
              </a>
            </Button>
          </Card>
        </div>

        {/* Brochure Download */}
        <div className="text-center">
          <Card className="p-8 inline-block hover:shadow-elegant transition-all duration-300 border-border/50">
            <h3 className="font-playfair text-2xl font-semibold text-primary mb-4">
              Product Catalog
            </h3>
            <p className="font-inter text-muted-foreground mb-6 max-w-md">
              Download our comprehensive brochure featuring the complete range of decorative surfaces
            </p>
            <Button 
              className="bg-gradient-brown hover:bg-primary/90 text-primary-foreground font-inter font-medium"
            >
              Download Brochure
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;