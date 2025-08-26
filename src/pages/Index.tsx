import Hero from "../components/Hero";
import Philosophy from "../components/Philosophy";
import ProductGallery from "../components/ProductGallery";
import Contact from "../components/Contact";
import JsonLd from "../components/JsonLd";
import { Link } from "react-router-dom";

const Index = () => {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Metro Surfaces",
    "alternateName": "Metro Surfaces - Premium Decorative Surfaces",
    "url": "https://voli.co.in",
    "description": "Metro Surfaces offers premium decorative surfaces including ASA Acrycore sheets, laminates, louvers, and cane wallpaper. Trusted B2B partner for architectural excellence.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "contactPoint": [{
      "@type": "ContactPoint",
      "telephone": "+91-93260-05195",
      "contactType": "Customer Service",
      "availableLanguage": ["English", "Hindi"]
    }],
    "sameAs": ["https://wa.me/919326005195"],
    "foundingDate": "2000"
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Metro Surfaces",
    "url": "https://voli.co.in",
    "description": "Premium decorative surfaces for architectural excellence",
    "publisher": {
      "@type": "Organization",
      "name": "Metro Surfaces",
      "url": "https://voli.co.in"
    }
  };

  return (
    <>
      <JsonLd data={organizationData} />
      <JsonLd data={websiteData} />
      <div className="min-h-screen bg-background font-inter">
        <Philosophy />
        
        {/* Product Categories Overview */}
        <section className="py-16 px-6 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { name: 'ASA Acrycore Sheets', anchor: '#asa-sheets' },
                { name: 'Premium Laminates', anchor: '#laminates' },
                { name: 'Decorative Louvers', anchor: '#louvers' },
                { name: 'Cane Wallpaper', anchor: '#wallpaper' }
              ].map((category, index) => (
                <Link
                  key={index} 
                  to={`/products${category.anchor}`}
                  className="group hover:scale-105 transition-all duration-300"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-brown rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="w-8 h-8 border-2 border-primary-foreground rounded-full"></div>
                  </div>
                  <h5 className="font-inter font-medium text-primary group-hover:text-primary/80 transition-colors">
                    {category.name}
                  </h5>
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        <Hero />
        <ProductGallery />
        <Contact />
      </div>
    </>
  );
};

export default Index;
