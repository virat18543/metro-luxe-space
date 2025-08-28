import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { MapPin, Phone, Mail, Clock, Download, MessageCircle } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-cream-light to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-semibold text-primary mb-6">
            Let's Create Together
          </h1>
          <p className="font-inter text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Ready to elevate your next project? Connect with Metro Surfaces for premium decorative surface solutions tailored to your vision.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Methods */}
            <div className="space-y-8">
              <div className="text-center lg:text-left mb-12">
                <h2 className="font-playfair text-3xl font-semibold text-primary mb-4">
                  Get In Touch
                </h2>
                <p className="font-inter text-muted-foreground leading-relaxed">
                  Choose your preferred way to connect with our team
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                {/* Phone */}
                <Card className="p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-brown rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-inter font-semibold text-primary mb-2">
                        Call Us
                      </h3>
                      <p className="font-inter text-muted-foreground mb-4 text-sm">
                        Speak directly with our design consultants
                      </p>
                      <Button 
                        asChild 
                        className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground"
                      >
                        <a href="tel:+918286580449">
                          <Phone className="w-4 h-4 mr-2" />
                          +91 82865 80449
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>

                {/* WhatsApp */}
                <Card className="p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-brown rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-inter font-semibold text-primary mb-2">
                        WhatsApp
                      </h3>
                      <p className="font-inter text-muted-foreground mb-4 text-sm">
                        Quick responses and instant project updates
                      </p>
                      <Button 
                        asChild 
                        variant="outline" 
                        className="w-full sm:w-auto border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                      >
                        <a href="https://wa.me/918286580449" target="_blank" rel="noopener noreferrer">
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Chat on WhatsApp
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>

                {/* Email */}
                <Card className="p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-brown rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-inter font-semibold text-primary mb-2">
                        Email
                      </h3>
                      <p className="font-inter text-muted-foreground mb-4 text-sm">
                        Detailed project discussions and quotes
                      </p>
                      <Button 
                        asChild 
                        variant="outline" 
                        className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      >
                        <a href="mailto:rrrmetro@gmail.com">
                          <Mail className="w-4 h-4 mr-2" />
                          rrrmetro@gmail.com
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Business Information */}
            <div className="space-y-8">
              {/* Business Hours */}
              <Card className="p-6">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-brown rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-inter font-semibold text-primary mb-2">
                      Business Hours
                    </h3>
                    <p className="font-inter text-muted-foreground text-sm">
                      We're here when you need us
                    </p>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="font-inter text-muted-foreground">Monday - Saturday</span>
                    <span className="font-inter font-medium text-primary">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-inter text-muted-foreground">Sunday</span>
                    <span className="font-inter font-medium text-primary">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="pt-3 border-t border-border">
                    <p className="font-inter text-xs text-muted-foreground">
                      Emergency consultations available by appointment
                    </p>
                  </div>
                </div>
              </Card>

              {/* Location */}
              <Card className="p-6">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-brown rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-inter font-semibold text-primary mb-2">
                      Visit Our Showroom
                    </h3>
                    <p className="font-inter text-muted-foreground text-sm">
                      Experience our surfaces in person
                    </p>
                  </div>
                </div>
                <address className="not-italic">
                  <div className="space-y-2 text-sm">
                    <p className="font-inter text-primary font-medium">
                      Metro Surfaces Design Studio
                    </p>
                    <p className="font-inter text-muted-foreground leading-relaxed">
                      123 Design District<br />
                      Mumbai, Maharashtra 400001<br />
                      India
                    </p>
                  </div>
                </address>
              </Card>

              {/* vCard Download */}
              <Card className="p-6">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-brown rounded-full flex items-center justify-center flex-shrink-0">
                    <Download className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-inter font-semibold text-primary mb-2">
                      Save Our Contact
                    </h3>
                    <p className="font-inter text-muted-foreground text-sm mb-4">
                      Add our details to your contacts for easy access
                    </p>
                    <Button 
                      asChild 
                      variant="outline" 
                      size="sm"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <a href="/brand/metro-surfaces.vcf" download>
                        <Download className="w-4 h-4 mr-2" />
                        Download vCard
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-background to-cream-light">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-primary mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="font-inter text-lg text-muted-foreground mb-8 leading-relaxed">
            Let's discuss how Metro Surfaces can bring your vision to life with our premium decorative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href="tel:+918286580449">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
              <a href="https://wa.me/918286580449" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Metro Surfaces",
          "description": "Premium decorative surface solutions and design consultancy",
          "url": "https://metrosurfaces.com",
          "telephone": "+91-82865-80449",
          "email": "rrrmetro@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Design District",
            "addressLocality": "Mumbai",
            "addressRegion": "Maharashtra",
            "postalCode": "400001",
            "addressCountry": "IN"
          },
          "openingHours": [
            "Mo-Sa 09:00-18:00",
            "Su 10:00-16:00"
          ],
          "priceRange": "$$",
          "sameAs": [
            "https://wa.me/918286580449"
          ]
        })}
      </script>
    </div>
  );
};

export default ContactPage;
