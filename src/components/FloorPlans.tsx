import { useState } from "react";
import floorplanGround4 from "@/assets/floorplan-ground-4br.png";
import floorplanFirst4 from "@/assets/floorplan-first-4br.png";
import floorplanGround3 from "@/assets/floorplan-ground-3br.jpg";
import floorplanFirst3 from "@/assets/floorplan-first-3br.jpg";

type PlanKey = "3br" | "4br";

const plans: Record<PlanKey, {
  title: string;
  subtitle: string;
  description: string;
  ground: string;
  first: string;
  features: string[];
  stats: { label: string; value: string }[];
}> = {
  "3br": {
    title: "Standard 3 Bedroom Villa",
    subtitle: "3 Bedrooms · All Ensuite · Plunge Pool",
    description: "A standard 3-bedroom villa with sunken lounge, open kitchen, plunge pool and a private porch.",
    ground: floorplanGround3,
    first: floorplanFirst3,
    features: [
      "Sunken Lounge & Dining",
      "Open Kitchen",
      "Master Bedroom with Walk-in Closet",
      "3 Bedrooms (All Ensuite)",
      "Private Plunge Pool",
      "Front Porch & Open Terrace",
      "Balcony off Bedrooms",
      "Secure Parking Area",
    ],
    stats: [
      { label: "Footprint", value: "12.5 x 19m" },
      { label: "Bedrooms", value: "3 Ensuite" },
    ],
  },
  "4br": {
    title: "4 Bedroom Villa — 50 x 100 Plot",
    subtitle: "4 Bedrooms · All Ensuite · 6 Parking",
    description: "A spacious 4-bedroom home on a 50 x 100 plot — designed to maximize space, light and coastal breezes.",
    ground: floorplanGround4,
    first: floorplanFirst4,
    features: [
      "Modern Open Plan Living",
      "Sunken Lounge",
      "Open Kitchen with Dining",
      "4 Bedrooms (All Ensuite)",
      "Master Bedroom with Walk-in Closet",
      "Large Open Terrace & Balcony",
      "Landscaped Gardens",
      "Secure 6-Car Parking",
    ],
    stats: [
      { label: "Plot Size", value: "50 x 100" },
      { label: "Bedrooms", value: "4 Ensuite" },
    ],
  },
};

const FloorPlans = () => {
  const [active, setActive] = useState<PlanKey>("3br");
  const plan = plans[active];

  return (
    <section id="floorplans" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Floor Plans
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose between our standard 3-bedroom villa and the spacious 4-bedroom design.
          </p>
        </div>

        {/* Plan switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-card rounded-full p-1 shadow-soft">
            {(Object.keys(plans) as PlanKey[]).map((key) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  active === key
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {key === "3br" ? "3 Bedroom" : "4 Bedroom"}
              </button>
            ))}
          </div>
        </div>

        {/* Floor plan display */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card rounded-2xl p-4 shadow-medium">
              <div className="text-sm font-medium text-muted-foreground mb-3 px-2">Ground Floor</div>
              <img src={plan.ground} alt={`${plan.title} — Ground Floor`} className="w-full rounded-xl" />
            </div>
            <div className="bg-card rounded-2xl p-4 shadow-medium">
              <div className="text-sm font-medium text-muted-foreground mb-3 px-2">First Floor</div>
              <img src={plan.first} alt={`${plan.title} — First Floor`} className="w-full rounded-xl" />
            </div>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-soft lg:sticky lg:top-24">
            <h3 className="text-xl font-display font-semibold text-foreground mb-2">
              {plan.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-6">{plan.subtitle}</p>
            <p className="text-foreground mb-6">{plan.description}</p>
            <ul className="space-y-3">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-ocean rounded-full" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-border grid grid-cols-2 gap-4">
              {plan.stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-sm text-muted-foreground mb-1">{stat.label}</div>
                  <div className="text-lg font-display font-bold text-primary">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="text-xs text-muted-foreground text-center mt-6">
          Disclaimer: Architectural drawings shown for presentation purposes only. Actual finishes and dimensions may vary.
        </p>
      </div>
    </section>
  );
};

export default FloorPlans;
