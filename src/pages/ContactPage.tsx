import React from 'react';
import { Button } from '../components/ui/button';
import { Phone, Mail, MessageCircle, Download, Clock } from 'lucide-react';
// react-helmet-async import removed - SEO meta tags should be managed centrally

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* 
        TODO: Add SEO meta tags centrally where SEO is managed
        Title: Contact Us - Metro Surfaces | Premium Decorative Solutions
        Description: Contact Metro Surfaces for premium decorative surface solutions. Call, email, or WhatsApp us for consultations and design services.
      */}
      
      {/* Hero Section */}
      <section className="relative py-24 px-6 bg-gradient-to-br from-cream-light via-background to-cream-dark">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h1 className="font-playfair text-4xl md:text-6xl font-bold text-primary mb-6 leading-tight">
                  Get In Touch
                </h1>
                <p className="font-inter text-xl text-muted-foreground leading-relaxed">
                  Ready to transform your space? Contact our design experts for premium decorative surface solutions.
                </p>
              </div>
              
              {/* Contact CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <a href="tel:+918286580449">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <a href="mailto:rrrmetro@gmail.com">
                    <Mail className="w-5 h-5 mr-2" />
                    Email Us
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white"
                >
                  <a
                    href="https://wa.me/918286580449"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp Us
                  </a>
                </Button>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                {/* TODO: Replace with your desired hero image filename/path */}
                <img
                  src="/images/hero/contact-hero-new.jpg"
                  alt="Metro Surfaces showroom with premium decorative materials"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <p className="font-playfair text-2xl font-bold">30+</p>
                  <p className="font-inter text-sm opacity-90">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <Clock className="w-8 h-8 text-primary" />
          </div>
          <h2 className="font-playfair text-3xl font-semibold text-primary mb-8">
            Business Hours
          </h2>
          <div className="max-w-md mx-auto">
            <div className="bg-background p-8 rounded-xl shadow-sm">
              <h3 className="font-playfair text-xl font-medium text-primary mb-4">
                Business Hours
              </h3>
              <p className="font-inter text-2xl font-semibold text-muted-foreground mb-2">
                Monday – Saturday
              </p>
              <p className="font-inter text-2xl font-semibold text-muted-foreground mb-2">
                9:00 AM – 6:00 PM
              </p>
              <p className="font-inter text-sm text-muted-foreground">
                Full service and consultations available
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* vCard Download */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-3xl font-semibold text-primary mb-6">
            Save Our Contact
          </h2>
          <p className="font-inter text-lg text-muted-foreground mb-8">
            Download our contact card to save our details to your phone.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <a
              href="/brand/metro-surfaces.vcf"
              download="metro-surfaces.vcf"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Contact Card
            </a>
          </Button>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Metro Surfaces",
            "description": "Premium decorative surface solutions and design consultancy",
            "url": "https://metrosurfaces.com",
            "telephone": "+91-82865-80449",
            "email": "rrrmetro@gmail.com",
            "openingHours": [
              "Mo-Sa 09:00-18:00"
            ],
            "priceRange": "$$",
            "sameAs": [
              "https://wa.me/918286580449"
            ]
          })
        }}
      />
    </div>
  );
};

export default ContactPage;
