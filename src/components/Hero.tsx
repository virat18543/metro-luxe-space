import SmartImage from './SmartImage';

const heroAmbient = '/brand/hero-ambient.jpg';

const Hero = () => {
  return (
    <>
      <div style={{
        color: 'red',
        fontWeight: 'bold', 
        fontSize: '2rem',
        zIndex: 99999,
        position: 'absolute',
        top: '10px',
        left: '10px'
      }}>
        Hero Confirmed Rendered
      </div>
      
      <section 
        className="relative w-full overflow-hidden"
        style={{ minHeight: 'calc(100vh - 72px)' }}
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <SmartImage
            src={heroAmbient}
            alt="Modern interior with premium decorative surfaces and laminates showcasing ASA Acrycore sheets"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/90"></div>
        </div>
        
        {/* Floating Elements for Visual Interest */}
        <div className="absolute inset-0 z-5 pointer-events-none hidden sm:block">
          <div className="absolute top-20 left-4 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-8 w-1 h-1 bg-white/40 rounded-full animate-bounce"></div>
          <div className="absolute bottom-40 left-12 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse delay-300"></div>
          <div className="absolute top-64 right-4 w-1 h-1 bg-white/35 rounded-full animate-bounce delay-500"></div>
        </div>
        
        {/* Content - Overlay section with proper white text visibility */}
        <div className="relative z-10 flex items-center justify-center h-full text-center px-4 sm:px-6 max-w-4xl mx-auto animate-fade-in">
          {/* Mobile-optimized typography */}
          <div className="space-y-4 sm:space-y-8">
            <div className="mb-4 sm:mb-8">
              <h1 className="font-playfair text-2xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-2 sm:mb-6 leading-snug drop-shadow-lg">
                Metro Surfaces
              </h1>
              {/* Mobile visual separator */}
              <div className="block sm:hidden w-16 h-0.5 bg-white/60 mx-auto mb-3"></div>
            </div>
            
            <div className="space-y-2 sm:space-y-4">
              <p className="font-inter text-sm sm:text-xl md:text-2xl text-white/95 font-light drop-shadow-md">
                Beautiful Spaces, Beautiful Life
              </p>
              <p className="font-inter text-xs sm:text-lg text-white/90 max-w-xl sm:max-w-2xl mx-auto leading-snug drop-shadow-sm px-2">
                ASA Acrycore sheets, laminates, louvers, and cane wallpaper
                for discerning architects and designers
              </p>
            </div>
            
            {/* Mobile CTA buttons */}
            <div className="mt-3 sm:mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <div className="block sm:hidden">
                <a
                  href="/products"
                  className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full hover:bg-white/20 transition-all duration-300 text-sm font-medium"
                >
                  Explore Products
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden sm:block">
          <div className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
