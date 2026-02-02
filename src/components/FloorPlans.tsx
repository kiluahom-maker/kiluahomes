import { useState } from "react";
import floorplanGround from "@/assets/floorplan-ground.png";
import floorplanFirst from "@/assets/floorplan-first.png";
import masterPlanPlots from "@/assets/master-plan-plots.png";

const floors = [
  {
    id: "ground",
    label: "Ground Floor",
    image: floorplanGround,
    features: ["Sunken Lounge", "Open Kitchen", "Dining Area", "Guest Bedroom with En-suite", "Porch"],
  },
  {
    id: "first",
    label: "First Floor",
    image: floorplanFirst,
    features: ["Master Bedroom with En-suite", "Second Bedroom with En-suite", "Open Terrace", "Balcony"],
  },
  {
    id: "masterplan",
    label: "Master Plan",
    image: masterPlanPlots,
    features: ["50x100 Plots Available", "100x100 Plots Available", "Community Area & Shop", "Paved Access Roads", "Landscaped Greenery"],
  },
];

const FloorPlans = () => {
  const [activeFloor, setActiveFloor] = useState("ground");
  const currentFloor = floors.find((f) => f.id === activeFloor)!;

  return (
    <section id="floorplans" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Floor Plans
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Thoughtfully designed layouts maximizing space, light, and coastal breezes.
          </p>
        </div>

        {/* Floor selector */}
        <div className="flex justify-center gap-4 mb-8">
          {floors.map((floor) => (
            <button
              key={floor.id}
              onClick={() => setActiveFloor(floor.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeFloor === floor.id
                  ? "bg-primary text-primary-foreground shadow-medium"
                  : "bg-card text-foreground hover:bg-secondary"
              }`}
            >
              {floor.label}
            </button>
          ))}
        </div>

        {/* Floor plan display */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Image */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-2xl p-4 shadow-medium">
              <img
                src={currentFloor.image}
                alt={currentFloor.label}
                className="w-full rounded-xl"
              />
            </div>
          </div>

          {/* Features list */}
          <div className="bg-card rounded-2xl p-8 shadow-soft">
            <h3 className="text-xl font-display font-semibold text-foreground mb-6">
              {currentFloor.label} Features
            </h3>
            <ul className="space-y-4">
              {currentFloor.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-ocean rounded-full" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-border">
              <div className="text-sm text-muted-foreground mb-2">Total Built-up Area</div>
              <div className="text-2xl font-display font-bold text-primary">
                ~2,300 Sq.Ft
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FloorPlans;
