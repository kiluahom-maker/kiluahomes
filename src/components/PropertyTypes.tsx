import { Bed, Maximize, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PropertyTypesProps {
  activeType: "type-a" | "type-b";
  onChange: (type: "type-a" | "type-b") => void;
}

const types = {
  "type-a": {
    label: "Villa Type A",
    plotSize: "50 × 100 ft",
    price: "KSH 13.5M",
    tagline: "Spacious standalone villas on a full 50×100 plot",
    features: [
      "Set on a generous 50×100 ft plot",
      "Larger private compound & garden",
      "Premium standalone villa design",
      "Ideal for families seeking space & privacy",
    ],
  },
  "type-b": {
    label: "Villa Type B",
    plotSize: "Compact Plot",
    price: "From KSH 7.9M",
    tagline: "Modern villas on smarter, smaller plots — exceptional value",
    features: [
      "Efficient, modern layout",
      "Lower entry price — great for investors",
      "Same premium finishes as Type A",
      "Shared community amenities",
    ],
  },
};

const PropertyTypes = ({ activeType, onChange }: PropertyTypesProps) => {
  const current = types[activeType];

  return (
    <section id="property-types" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Choose Your Villa Type
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Two distinct villa designs within the Kilua development — pick the one that fits your lifestyle and budget.
          </p>
        </div>

        {/* Type selector */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {(Object.keys(types) as Array<keyof typeof types>).map((key) => (
            <button
              key={key}
              onClick={() => onChange(key)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeType === key
                  ? "bg-primary text-primary-foreground shadow-medium"
                  : "bg-card text-foreground hover:bg-secondary border border-border"
              }`}
            >
              {types[key].label}
            </button>
          ))}
        </div>

        {/* Detail card */}
        <div className="max-w-4xl mx-auto bg-card rounded-3xl p-8 md:p-12 shadow-medium">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-muted rounded-xl p-5 text-center">
              <Home className="w-6 h-6 text-ocean mx-auto mb-2" />
              <div className="text-sm text-muted-foreground">Type</div>
              <div className="font-display font-bold text-foreground">{current.label}</div>
            </div>
            <div className="bg-muted rounded-xl p-5 text-center">
              <Maximize className="w-6 h-6 text-ocean mx-auto mb-2" />
              <div className="text-sm text-muted-foreground">Plot Size</div>
              <div className="font-display font-bold text-foreground">{current.plotSize}</div>
            </div>
            <div className="bg-muted rounded-xl p-5 text-center">
              <Bed className="w-6 h-6 text-ocean mx-auto mb-2" />
              <div className="text-sm text-muted-foreground">Price</div>
              <div className="font-display font-bold text-primary">{current.price}</div>
            </div>
          </div>

          <p className="text-lg text-foreground mb-6">{current.tagline}</p>

          <ul className="space-y-3 mb-8">
            {current.features.map((f, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-2 h-2 bg-ocean rounded-full mt-2 flex-shrink-0" />
                <span className="text-foreground">{f}</span>
              </li>
            ))}
          </ul>

          <Button
            variant="cta"
            size="lg"
            className="w-full sm:w-auto"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Enquire About {current.label}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PropertyTypes;
