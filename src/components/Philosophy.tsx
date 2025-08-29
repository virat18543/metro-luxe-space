import { Users, RefreshCw, Scale, Target } from "lucide-react";

const Philosophy = () => {
  const principles = [
    {
      icon: Users,
      title: "Uncompromising Service"
    },
    {
      icon: RefreshCw,
      title: "Supply Continuity"
    },
    {
      icon: Scale,
      title: "Ethical Practice"
    },
    {
      icon: Target,
      title: "Selective Distribution"
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-cream-light">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-primary mb-6">
            Our Philosophy
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Built on decades of experience, our approach transcends mere product supply. 
            We craft lasting relationships through principled business practices.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="group p-8 bg-card rounded-lg shadow-soft hover:shadow-elegant hover:scale-105 transition-all duration-300 border border-border/50"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <principle.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-playfair text-2xl font-semibold text-primary mb-4 group-hover:text-brown-dark transition-colors">
                  {principle.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
