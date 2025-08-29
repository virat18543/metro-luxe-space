import { Card } from "../components/ui/card";
import { Users, RefreshCw, Scale, Target } from "lucide-react";
import Seo from '../components/Seo';

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
      title: "Quality Excellence",
      description: "Uncompromising standards in material selection, testing, and delivery. We partner only with manufacturers who share our commitment to superior quality.",
      details: [
        "Rigorous quality testing protocols",
        "Certified material standards",
        "Regular supplier audits",
        "Continuous improvement processes"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Design Philosophy | Metro Surfaces Quality & Sustainability"
        description="Metro Surfaces design philosophy: Committed to quality, sustainability, and principled business practices. Learn what sets our brand apart in premium decorative surfaces."
        canonical="https://voli.co.in/philosophy"
        ogImage="https://voli.co.in/philosophy/og.jpg"
      />
      
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context":"https://schema.org",
            "@type":"BreadcrumbList",
            "itemListElement":[
              {"@type":"ListItem","position":1,"name":"Home","item":"https://voli.co.in/"},
              {"@type":"ListItem","position":2,"name":"Philosophy","item":"https://voli.co.in/philosophy"}
            ]
          })
        }}
      />
      
      {/* Hero Section */}
      <section className="relative py-24 px-6 bg-gradient-to-br from-primary/5 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-semibold text-primary mb-6">
            Our Design Philosophy
          </h1>
          <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Three decades of excellence built on unwavering principles. 
            Discover the values that drive Metro Surfaces' commitment to quality, 
            sustainability, and exceptional service.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-primary mb-6">
              Our Journey
            </h2>
            <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From humble beginnings to industry leadership, our story is one of continuous growth, 
              innovation, and unwavering commitment to our core values.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {timeline.map((item, index) => (
              <Card className="p-6 text-center hover:shadow-elegant transition-all duration-300" key={index}>
                <div className="text-primary font-playfair text-2xl font-semibold mb-4">
                  {item.year}
                </div>
                <h3 className="font-inter font-semibold text-lg mb-3">
                  {item.title}
                </h3>
                <p className="font-inter text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-primary mb-6">
              Our Core Values
            </h2>
            <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              These principles guide every interaction, every decision, and every partnership we forge.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card className="p-8 h-full hover:shadow-elegant transition-all duration-300" key={index}>
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
                  <h4 className="font-inter font-semibold text-primary">
                    How we deliver:
                  </h4>
                  <div className="space-y-2">
                    {value.details.map((detail, detailIndex) => (
                      <div className="flex items-center space-x-2" key={detailIndex}>
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
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

      <footer>
        <nav>
          <a href="/products">Products</a> |
          <a href="/applications">Applications</a> |
          <a href="/contact">Contact</a>
        </nav>
      </footer>
    </div>
  );
};

export default PhilosophyPage;
