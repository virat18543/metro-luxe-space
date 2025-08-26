const Philosophy = () => {
  const principles = [
    {
      title: "Uncompromising Service",
      description: "Every client interaction reflects our commitment to excellence, from initial consultation to project completion."
    },
    {
      title: "Supply Continuity", 
      description: "Reliable partnerships built on consistent quality and dependable delivery schedules that architects can trust."
    },
    {
      title: "Ethical Practice",
      description: "Transparent processes, honest communication, and sustainable business practices guide every decision we make."
    },
    {
      title: "Selective Distribution",
      description: "Curated partnerships with premium brands ensure our clients access only the finest decorative surface solutions."
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
              <h3 className="font-playfair text-2xl font-semibold text-primary mb-4 group-hover:text-brown-dark transition-colors">
                {principle.title}
              </h3>
              <p className="font-inter text-lg text-muted-foreground leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
