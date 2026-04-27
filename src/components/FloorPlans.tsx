import floorplanTypeA from "@/assets/floorplan-type-a.png";

const features = [
  "Modern Open Plan Living",
  "Sunken Lounge",
  "Open Kitchen with Island",
  "3 Bedrooms (All Ensuite)",
  "Walk-in Wardrobes",
  "Large Balcony & Terrace",
  "Plunge Pool",
  "Ample Natural Lighting",
  "Landscaped Gardens",
  "Secure 2-Car Parking",
];

const FloorPlans = () => {
  return (
    <section id="floorplans" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Floor Plan — Unit Type A
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A 3-bedroom duplex thoughtfully designed to maximize space, light, and coastal breezes.
          </p>
        </div>

        {/* Floor plan display */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Image */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-2xl p-4 shadow-medium">
              <img
                src={floorplanTypeA}
                alt="Kilua Homes Unit Type A — 3 Bedroom Duplex floor plan"
                className="w-full rounded-xl"
              />
            </div>
          </div>

          {/* Features list */}
          <div className="bg-card rounded-2xl p-8 shadow-soft">
            <h3 className="text-xl font-display font-semibold text-foreground mb-2">
              Unit Type A — 3 Bedroom Duplex
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              3 Bedrooms · 3.5 Bathrooms · 2 Parking
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
                <div className="text-sm text-muted-foreground mb-1">Ground Floor</div>
                <div className="text-lg font-display font-bold text-primary">115 SQM</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">First Floor</div>
                <div className="text-lg font-display font-bold text-primary">86 SQM</div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-xs text-muted-foreground text-center mt-6">
          Disclaimer: This is an artistic impression for presentation purposes only. Actual finishes and dimensions may vary.
        </p>
      </div>
    </section>
  );
};

export default FloorPlans;
