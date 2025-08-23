const JsonLd = () => {
  const businessData = {
    "@context": "https://schema.org",
    "@type": "Business",
    "name": "Metro Surfaces",
    "alternateName": "Metro Surfaces - Premium Decorative Surfaces",
    "url": "https://voli.co.in",
    "description": "Metro Surfaces offers premium decorative surfaces including ASA Acrycore sheets, laminates, louvers, and cane wallpaper. Trusted B2B partner for architectural excellence.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-93260-05195",
        "contactType": "Customer Service",
        "availableLanguage": ["English", "Hindi"]
      },
      {
        "@type": "ContactPoint", 
        "email": "rrrmetro@gmail.com",
        "contactType": "Sales"
      }
    ],
    "sameAs": [
      "https://wa.me/919326005195"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Decorative Surfaces Catalog",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "ASA Acrycore Sheets",
            "description": "Premium ASA Acrycore decorative sheets for architectural applications",
            "category": "Decorative Surfaces",
            "material": "ASA, PETG"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Product",
            "name": "Premium Laminates",
            "description": "High-quality decorative laminates for interior design",
            "category": "Decorative Surfaces"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product", 
            "name": "Decorative Louvers",
            "description": "Architectural louver systems for commercial and residential spaces",
            "category": "Decorative Surfaces"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Cane Wallpaper",
            "description": "Natural cane wallpaper for premium interior design applications", 
            "category": "Decorative Surfaces"
          }
        }
      ]
    },
    "serviceArea": {
      "@type": "Country",
      "name": "India"
    },
    "foundingDate": "2000",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(businessData) }}
    />
  );
};

export default JsonLd;

