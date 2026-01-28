import { Bed, Bath, Car, Maximize, Waves, MapPin, Shield, FileCheck } from "lucide-react";

const features = [
  { icon: Bed, label: "3 Bedrooms", description: "Spacious master & guest rooms" },
  { icon: Bath, label: "3 Bathrooms", description: "En-suite & shared facilities" },
  { icon: Car, label: "2 Car Parking", description: "Covered parking spaces" },
  { icon: Maximize, label: "2,300 Sq.Ft", description: "Built-up area" },
  { icon: Waves, label: "Plunge Pool", description: "Private swimming pool" },
  { icon: MapPin, label: "Easy Access", description: "Second row from main road" },
];

const highlights = [
  {
    icon: Shield,
    title: "Gated Community",
    description: "Secure coastal neighborhood with 24/7 security and controlled access.",
  },
  {
    icon: FileCheck,
    title: "Freehold Title Deed",
    description: "Full ownership with your own title deed. A solid investment for generations.",
  },
  {
    icon: Waves,
    title: "2km to Beach",
    description: "Just a short drive to pristine Vipingo beaches and world-class golf courses.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Property Features
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every detail designed for modern coastal living with premium finishes and thoughtful layouts.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 text-center shadow-soft hover:shadow-medium transition-shadow group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary rounded-full mb-4 group-hover:bg-ocean/10 transition-colors">
                <feature.icon className="w-6 h-6 text-primary group-hover:text-ocean transition-colors" />
              </div>
              <div className="font-semibold text-foreground mb-1">{feature.label}</div>
              <div className="text-sm text-muted-foreground">{feature.description}</div>
            </div>
          ))}
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-hero rounded-xl mb-6 group-hover:scale-110 transition-transform">
                <highlight.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                {highlight.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
