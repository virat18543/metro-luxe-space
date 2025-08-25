import Hero from "../components/Hero";
import Philosophy from "../components/Philosophy";
import ProductGallery from "../components/ProductGallery";
import Contact from "../components/Contact";
import Blog from "../components/Blog";
import JsonLd from "../components/JsonLd";

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
        <Hero />
        <Philosophy />
        <ProductGallery />
        <Blog />
        <Contact />
      </div>
    </>
  );
};

export default Index;
