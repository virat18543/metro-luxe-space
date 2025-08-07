import heroImage from "@/assets/hero-ambient.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen md:min-h-screen sm:min-h-[60vh] flex items-center justify-center overflow-hidden sm:aspect-[3/2]">
      {/* Background Image with Video-Ready Structure */}
      <div className="absolute inset-0 z-0">
        {/* Main background image */}
        <img 
          src={heroImage} 
          alt="Modern interior with premium decorative surfaces and laminates"
          className="w-full h-full object-cover object-center"
        />
        {/* Video will be added when available */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover object-center absolute inset-0 opacity-0"
          poster={heroImage}
          onLoadedData={(e) => {
            e.currentTarget.style.opacity = "1";
          }}
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        >
          <source src="/modern-interior-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/90" />
      </div>
      
      {/* Floating Elements for Visual Interest */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        <div className="absolute top-20 left-4 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-8 w-1 h-1 bg-white/40 rounded-full animate-bounce"></div>
        <div className="absolute bottom-40 left-12 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse delay-300"></div>
        <div className="absolute top-64 right-4 w-1 h-1 bg-white/35 rounded-full animate-bounce delay-500"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto animate-fade-in">
        {/* Mobile-optimized typography */}
        <div className="mb-6 sm:mb-8">
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-3 sm:mb-6 leading-tight drop-shadow-lg">
            Metro Laminates
          </h1>
          {/* Mobile visual separator */}
          <div className="block sm:hidden w-16 h-0.5 bg-white/60 mx-auto mb-4"></div>
        </div>
        
        <div className="space-y-3 sm:space-y-4">
          <p className="font-inter text-lg sm:text-xl md:text-2xl text-white/95 font-light drop-shadow-md">
            Beautiful Spaces, Beautiful Life
          </p>
          <p className="font-inter text-base sm:text-lg text-white/90 max-w-xl sm:max-w-2xl mx-auto leading-relaxed drop-shadow-sm px-2">
            ASA Acrycore sheets, laminates, louvers, and cane wallpaper 
            for discerning architects and designers
          </p>
        </div>

        {/* Mobile CTA buttons */}
        <div className="mt-8 sm:mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
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
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;