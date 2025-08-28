import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";

const ContactPage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-cream-light to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-semibold text-primary mb-6">
            Let's Create Together
          </h1>
          <p className="font-inter text-xl text-muted-foreground leading-relaxed">
            Ready to elevate your next project? Our team is here to provide expert guidance 
            and premium decorative surface solutions tailored to your specific needs.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              {/* Direct Contact */}
              <Card className="p-8">
                <h3 className="font-playfair text-xl font-semibold text-primary mb-6">
                  Direct Contact
                </h3>
                <div className="space-y-6">
                  {/* WhatsApp */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-brown rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-inter font-semibold text-primary mb-2">WhatsApp</h4>
                      <p className="font-inter text-muted-foreground mb-2">Quick responses for immediate needs</p>
                      <Button asChild variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-background">
                        <a href="https://wa.me/918286580449" target="_blank" rel="noopener noreferrer">
                          +91 82865 80449
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-brown rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-inter font-semibold text-primary mb-2">Email</h4>
                      <p className="font-inter text-muted-foreground mb-2">Detailed project discussions</p>
                      <Button asChild variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-background">
                        <a href="mailto:rrrmetro@gmail.com">
                          rrrmetro@gmail.com
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Business Hours */}
              <Card className="p-8">
                <h3 className="font-playfair text-xl font-semibold text-primary mb-6">
                  Business Information
                </h3>
                <div className="space-y-4 font-inter text-muted-foreground">
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Business Hours</h4>
                    Monday - Saturday: 9:00 AM - 6:00 PM<br/>
                    Sunday: Closed
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Response Time</h4>
                    WhatsApp: Within 2 hours<br/>
                    Email: Within 24 hours
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Sample Delivery</h4>
                    All India: 2-3 business days
                  </div>
                </div>
              </Card>

              {/* Service Areas */}
              <Card className="p-8">
                <h3 className="font-playfair text-xl font-semibold text-primary mb-6">
                  Service Areas
                </h3>
                <div className="space-y-2 font-inter text-muted-foreground">
                  <p className="font-semibold text-primary">We serve customers across India.</p>
                  Our distribution network ensures timely delivery and support nationwide.
                </div>
              </Card>
            </div>

            {/* Placeholder for future content */}
            <div className="space-y-8">
              <Card className="p-8">
                <h3 className="font-playfair text-xl font-semibold text-primary mb-6">
                  Get In Touch
                </h3>
                <div className="space-y-4 font-inter text-muted-foreground">
                  <p>Contact us directly through WhatsApp or email for:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Product samples and catalogs</li>
                    <li>Project consultations</li>
                    <li>Technical specifications</li>
                    <li>Pricing and availability</li>
                    <li>Distribution inquiries</li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
