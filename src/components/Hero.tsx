import heroImage from "@/assets/hero-ambient.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover object-center"
          poster={heroImage}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          {/* Fallback image if video fails to load */}
          <img 
            src={heroImage} 
            alt="Elegant interior with decorative surfaces and laminates"
            className="w-full h-full object-cover object-center"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-brown-dark/70 via-brown-dark/50 to-brown-dark/80" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-in">
        <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
          Metro Laminates
        </h1>
        <p className="font-inter text-xl md:text-2xl text-white/95 mb-4 font-light drop-shadow-md">
          Beautiful Spaces, Beautiful Life
        </p>
        <p className="font-inter text-lg text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
          ASA Acrycore sheets, laminates, louvers, and cane wallpaper 
          for discerning architects and designers
        </p>
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