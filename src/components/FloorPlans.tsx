import floorplanGround from "@/assets/floorplan-ground-4br.png";
import floorplanFirst from "@/assets/floorplan-first-4br.png";

const features = [
  "Modern Open Plan Living",
  "Sunken Lounge",
  "Open Kitchen with Dining",
  "4 Bedrooms (All Ensuite)",
  "Master Bedroom with Walk-in Closet",
  "Large Open Terrace & Balcony",
  "Ample Natural Lighting",
  "Landscaped Gardens",
  "Secure 6-Car Parking",
  "Built on a 50 x 100 Plot",
];

const FloorPlans = () => {
  return (
    <section id="floorplans" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Floor Plan — 4 Bedroom Villa
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A spacious 4-bedroom home on a 50 x 100 plot — thoughtfully designed to maximize space, light, and coastal breezes.
          </p>
        </div>

        {/* Floor plan display */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Images */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card rounded-2xl p-4 shadow-medium">
              <div className="text-sm font-medium text-muted-foreground mb-3 px-2">Ground Floor</div>
              <img
                src={floorplanGround}
                alt="Kilua Homes 4-Bedroom Villa — Ground Floor plan"
                className="w-full rounded-xl"
              />
            </div>
            <div className="bg-card rounded-2xl p-4 shadow-medium">
              <div className="text-sm font-medium text-muted-foreground mb-3 px-2">First Floor</div>
              <img
                src={floorplanFirst}
                alt="Kilua Homes 4-Bedroom Villa — First Floor plan"
                className="w-full rounded-xl"
              />
            </div>
          </div>

          {/* Features list */}
          <div className="bg-card rounded-2xl p-8 shadow-soft">
            <h3 className="text-xl font-display font-semibold text-foreground mb-2">
              4 Bedroom Villa — 50 x 100 Plot
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              4 Bedrooms · All Ensuite · 6 Parking
            </p>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-ocean rounded-full" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-border grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-muted-foreground mb-1">Plot Size</div>
                <div className="text-lg font-display font-bold text-primary">50 x 100</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Bedrooms</div>
                <div className="text-lg font-display font-bold text-primary">4 Ensuite</div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-xs text-muted-foreground text-center mt-6">
          Disclaimer: This is an architectural drawing for presentation purposes only. Actual finishes and dimensions may vary.
        </p>
      </div>
    </section>
  );
};

export default FloorPlans;
