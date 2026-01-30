import { MapPin, Check, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const plots = [
  {
    size: "100 x 100",
    area: "10,000 sq.ft",
    price: "KSH 7M",
    features: ["Freehold Title Deed", "Ready for Development", "Gated Community Access"],
  },
  {
    size: "50 x 100",
    area: "2,500 sq.ft",
    price: "KSH 4M",
    features: ["Freehold Title Deed", "Ready for Development", "Gated Community Access"],
  },
];

const PlotsForSale = () => {
  return (
    <section id="plots" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full mb-6">
            <AlertCircle className="w-4 h-4" />
            <span className="text-sm font-medium">Very Limited Plots Available</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Premium Plots for Sale
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Secure your piece of paradise in our exclusive gated community. Freehold ownership with full title deeds.
          </p>
        </div>

        {/* Plots grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {plots.map((plot, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-medium hover:shadow-strong transition-shadow"
            >
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-hero rounded-xl mb-4">
                  <MapPin className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="text-2xl font-display font-bold text-foreground mb-1">
                  {plot.size} Plot
                </div>
                <div className="text-muted-foreground">{plot.area}</div>
              </div>

              <div className="text-center mb-6">
                <div className="text-sm text-muted-foreground">Starting From</div>
                <div className="text-4xl font-display font-bold text-primary">
                  {plot.price}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plot.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-ocean" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant="cta" 
                className="w-full"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Inquire Now
              </Button>
            </div>
          ))}
        </div>

        {/* Gated community note */}
        <div className="bg-card rounded-2xl p-6 md:p-8 shadow-soft max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-ocean/10 rounded-full mb-4">
            <MapPin className="w-6 h-6 text-ocean" />
          </div>
          <h3 className="text-xl font-display font-semibold text-foreground mb-2">
            Located Within a Gated Community
          </h3>
          <p className="text-muted-foreground">
            All plots are situated within our secure gated community in Vipingo, offering 24/7 security, 
            controlled access, and shared amenities. Just 2km from the beach.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlotsForSale;
