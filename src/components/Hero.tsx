import { Link, useLocation } from "react-router-dom";
import SmartImage from "./SmartImage";

const heroAmbient = "/hero-ambient.webp";

const Hero = () => {
  const location = useLocation();

  // Handle navigation click with scroll-to-top logic
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (location.pathname === path) {
      e.preventDefault();
        window.scrollTo(0, 0);    }
    // If not on current page, allow normal navigation
  };

  return (
    <section className="relative w-full overflow-hidden min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <SmartImage
          src={heroAmbient}
          alt="Modern interior with premium decorative surfaces and laminates showcasing ASA Acrycore sheets"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/90"></div>
      </div>

      {/* Floating Elements for Visual Interest (hidden on mobile) */}
      <div className="absolute inset-0 z-5 pointer-events-none hidden sm:block">
          <div className="absolute top-20 left-4 w-2 h-2 bg-white/30 rounded-full"></div>        <div className="absolute top-32 right-8 w-1 h-1 bg-white/40 rounded-full animate-bounce"></div>
          <div className="absolute bottom-40 left-12 w-1.5 h-1.5 bg-white/20 rounded-full"></div>        <div className="absolute top-64 right-4 w-1 h-1 bg-white/35 rounded-full animate-bounce delay-500"></div>
      </div>

      {/* Content - Centered flex container */}
      <div className="relative z-10 h-full min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6">
        <div className="flex flex-col justify-center items-center h-full text-center space-y-4 sm:space-y-8 max-w-4xl mx-auto animate-fade-in">
          <div className="mb-4 sm:mb-8">
            <h1 className="font-playfair text-2xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-2 leading-sn animate-fade-in-up animate-delay-200ug drop-shadow-lg">
              Metro Surfaces
            </h1>
            <div className="block sm:hidden w-16 h-0.5 bg-white/60 mx-auto mb-3"></div>
          </div>

          <div className="space-y-2 sm:space-y-4">
            <p className="font-inter text-sm sm:text-xl md:text-2xl text-white/95 font-li animate-fade-in-up animate-delay-300ght drop-shadow-md">
              Beautiful Spaces, Beautiful Life
            </p>
            <p className="font-inter text-xs sm:text-lg text-white/90 max-w-xl sm:max-w-2xl mx-auto leading-snu animate-fade-in-up animate-delay-400g drop-shadow-sm px-2">
              Acrycore | Laminates | Louvers | Cane Wallpaper<br/>
              For discerning Architects and Interior Designers
            </p>
  </div>

          {/* Mobile CTA */}
          <div className="mt-3 sm:mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <div className="block sm:hidden">
              <Link
                to="/products"
                onClick={(e) => handleLinkClick(e, '/products')}
                className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full ho hover-liftver:bg-white/20 transition-all duration-300 text-sm font-medium"
              >
                Explore Products
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator (desktop only) */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden sm:block">
        <div className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
