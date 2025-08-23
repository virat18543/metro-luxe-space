import { Card } from "../components/ui/card";
import { Users, RefreshCw, Scale, Target } from "lucide-react";

const PhilosophyPage = () => {
  const timeline = [
    {
      year: "1990s",
      title: "Foundation Years",
      description: "Established with a vision to bring premium decorative surfaces to the Indian market. Built initial partnerships with quality manufacturers."
    },
    {
      year: "2000s", 
      title: "Market Expansion",
      description: "Expanded product range and distribution network. Established reputation for reliable service and consistent quality."
    },
    {
      year: "2010s",
      title: "Innovation Focus",
      description: "Introduced advanced materials like ASA Acrycore. Strengthened B2B partnerships with architects and designers."
    },
    {
      year: "2020s",
      title: "Sustainable Future",
      description: "Leading the industry in sustainable practices and innovative surface solutions. Continuing the legacy of excellence."
    }
  ];

  const values = [
    {
      icon: Users,
      title: "Uncompromising Service",
      description: "Every client interaction reflects our commitment to excellence, from initial consultation to project completion. We believe that exceptional service builds lasting relationships.",
      details: [
        "Dedicated account management",
        "Technical support and guidance", 
        "Timely project delivery",
        "Post-installation assistance"
      ]
    },
    {
      icon: RefreshCw,
      title: "Supply Continuity",
      description: "Reliable partnerships built on consistent quality and dependable delivery schedules that architects and designers can trust without compromise.",
      details: [
        "Maintained inventory levels",
        "Backup supplier networks",
        "Quality consistency monitoring",
        "Predictable delivery schedules"
      ]
    },
    {
      icon: Scale,
      title: "Ethical Practice",
      description: "Transparent processes, honest communication, and sustainable business practices guide every decision we make in our journey towards excellence.",
      details: [
        "Transparent pricing models",
        "Honest product specifications",
        "Sustainable sourcing practices",
        "Fair partnership agreements"
      ]
    },
    {
      icon: Target,
      title: "Selective Distribution",
      description: "Curated partnerships with premium brands ensure our clients access only the finest decorative surface solutions available in the market.",
      details: [
        "Premium brand partnerships",
        "Quality-first selection criteria",
        "Exclusive product access",
        "Limited distribution networks"
      ]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-cream-light to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-semibold text-primary mb-6">
            Our Philosophy
          </h1>
          <p className="font-inter text-xl text-muted-foreground leading-relaxed">
            Built on decades of experience, our approach transcends mere product supply. 
            We craft lasting relationships through principled business practices and 
            unwavering commitment to architectural excellence.
          </p>
        </div>
      </section>


      {/* Core Values */}
      <section className="py-24 px-6 bg-cream-light">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-primary mb-6">
              Core Values
            </h2>
            <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              These principles guide every interaction, every decision, and every partnership we forge.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-8 h-full hover:shadow-elegant transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-playfair text-2xl font-semibold text-primary mb-4">
                    {value.title}
                  </h3>
                  <p className="font-inter text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-inter font-semibold text-primary">How we deliver:</h4>
                  <div className="space-y-2">
                    {value.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                        <span className="font-inter text-muted-foreground text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 px-6 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold mb-8">
            Our Mission
          </h2>
          <p className="font-inter text-xl leading-relaxed mb-8">
            To be the most trusted partner in decorative surfaces, enabling architects 
            and designers to create extraordinary spaces through premium materials, 
            exceptional service, and unwavering reliability.
          </p>
          <p className="font-inter text-lg leading-relaxed opacity-90">
            We believe that every surface tells a story, and we're here to help you 
            write yours with elegance, durability, and distinction.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PhilosophyPage;

