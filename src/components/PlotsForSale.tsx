import { Check, MapPin, Shield, FileCheck, TreePine, Zap, Droplets, Baby } from "lucide-react";
import { Button } from "@/components/ui/button";
import sherianiMap from "@/assets/sheriani-vipingo.png";

const plotTypes = [
  {
    size: "50 × 100 ft",
    price: "KSH 2.8M",
    area: "5,000 sq.ft",
  },
  {
    size: "100 × 100 ft",
    price: "KSH 6M",
    area: "10,000 sq.ft",
  },
];

const features = [
  { icon: FileCheck, text: "Freehold Title Deeds — Ready for Transfer" },
  { icon: Shield, text: "Secure Gated Community" },
  { icon: Baby, text: "Children's Play Area & Landscaped Gardens" },
  { icon: Zap, text: "Govt Electricity Connection" },
  { icon: Droplets, text: "Clean Borehole Water" },
  { icon: TreePine, text: "Quiet, Green Environment — Ideal for Living or Airbnb" },
  { icon: MapPin, text: "Sheriani, Vipingo — Second Row from Main Road" },
];

const PlotsForSale = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
            Sheriani, Vipingo
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Own Your Slice of Paradise in Vipingo
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Freehold residential plots in a secure gated community. Titles ready, flexible 6-month payment plan.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Map / brochure image */}
          <div className="rounded-2xl overflow-hidden shadow-strong">
            <img
              src={sherianiMap}
              alt="Sheriani Vipingo plot layout"
              className="w-full"
            />
          </div>

          {/* Plot pricing & features */}
          <div>
            {/* Price cards */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {plotTypes.map((plot, i) => (
                <div key={i} className="bg-card rounded-2xl p-6 shadow-medium border-2 border-primary/10">
                  <div className="text-muted-foreground text-sm mb-1">{plot.size} Plot</div>
                  <div className="text-3xl font-display font-bold text-primary mb-1">{plot.price}</div>
                  <div className="text-sm text-ocean font-medium">{plot.area} • Freehold</div>
                </div>
              ))}
            </div>

            <div className="text-sm text-ocean font-medium mb-6 bg-secondary rounded-lg px-4 py-3">
              💰 Flexible 6-Month Payment Plan Available
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-8">
              {features.map((f, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                    <f.icon className="w-4 h-4 text-ocean" />
                  </div>
                  <span className="text-foreground">{f.text}</span>
                </li>
              ))}
            </ul>

            <Button
              variant="cta"
              size="xl"
              className="w-full"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Enquire About Plots
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlotsForSale;
