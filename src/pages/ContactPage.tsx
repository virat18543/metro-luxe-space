import React from 'react';
import { Button } from '../components/ui/button';
import { Phone, Mail, MessageCircle, Clock } from 'lucide-react';
import Seo from '../components/Seo';

// Declare gtag function for analytics
declare global {
  interface Window {
    gtag?: (command: string, targetId: string, config?: any) => void;
  }
}

const trackEvent = (eventName: string, location: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, { location });
  }
};

const ContactPage: React.FC = () => {
  return (
    <>
      <Seo
        title="Contact Metro Surfaces | Specification Support & Samples Request"
        description="Contact Metro Surfaces: For samples, expert consultation, and support with decorative surface products in Mumbai. Call, email, or WhatsApp us."
        canonical="https://voli.co.in/contact"
        ogImage="https://voli.co.in/contact/og.jpg"
      />
      <div className="min-h-screen bg-background">
        {/* Hero Section with Simple CTAs */}
        <section className="relative py-24 px-6 bg-gradient-to-br from-cream-light via-background to-cream-dark">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-primary mb-6 leading-tight">
              Get In Touch
            </h1>
            <p className="font-inter text-xl text-muted-foreground leading-relaxed mb-12">
              Ready to transform your space? Contact our design experts for premium decorative surface solutions.
            </p>
            
            {/* Simple Contact CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <a href="tel:+918286580449" onClick={() => trackEvent('call_click', document.location.pathname)}>
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
                <a href="mailto:rrrmetro@gmail.com" onClick={() => trackEvent('email_click', document.location.pathname)}>
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
                  onClick={() => trackEvent('whatsapp_click', document.location.pathname)}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Us
                </a>
              </Button>
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
                  Operating Hours
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
    </>
  );
};

export default ContactPage;
