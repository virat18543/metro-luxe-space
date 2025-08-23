import { Card } from "./ui/card";

const CoreValues = () => {
  const values = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      ),
      title: "Uncompromising Service",
      description: "Dedicated support and guidance throughout your project journey"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M9 9h.01M15 9h.01M9 15h.01M15 15h.01" />
        </svg>
      ),
      title: "Supply Continuity",
      description: "Reliable inventory and consistent product availability"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Ethical Practice",
      description: "Transparent business relationships built on trust and integrity"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
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
              <div className="text-primary mb-4 group-hover:scale-110 group-hover:text-primary/80 transition-all duration-300">
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

