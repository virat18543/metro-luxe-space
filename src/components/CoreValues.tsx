import { Card } from "./ui/card";

const CoreValues = () => {
  const values = [
    {
      icon: "🤝",
      title: "Uncompromising Service",
      description: "Dedicated support and guidance throughout your project journey"
    },
    {
      icon: "📦",
      title: "Supply Continuity",
      description: "Reliable inventory and consistent product availability"
    },
    {
      icon: "⚖️",
      title: "Ethical Practice",
      description: "Transparent business relationships built on trust and integrity"
    },
    {
      icon: "🎯",
      title: "Selective Distribution",
      description: "Partnering with quality-focused distributors and professionals"
    }
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-background to-cream-light">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-primary mb-4">
            Our Core Values
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            The principles that guide every partnership and project we undertake
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card 
              key={index} 
              className="p-6 text-center group hover:shadow-elegant hover:-translate-y-1 transition-all duration-300 cursor-pointer bg-white/50 backdrop-blur-sm"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {value.icon}
              </div>
              <h3 className="font-playfair text-lg font-semibold text-primary mb-3">
                {value.title}
              </h3>
              <p className="font-inter text-sm text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;