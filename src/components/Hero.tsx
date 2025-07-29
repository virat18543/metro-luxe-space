import heroImage from "@/assets/hero-ambient.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Elegant interior with premium decorative surfaces"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background/60" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-primary mb-6 leading-tight">
          Metro Laminates
        </h1>
        <p className="font-inter text-xl md:text-2xl text-muted-foreground mb-4 font-light">
          Elevating spaces through exceptional decorative surfaces
        </p>
        <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Premium ASA Acrycore sheets, laminates, louvers, and cane wallpaper 
          for discerning architects and designers
        </p>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;