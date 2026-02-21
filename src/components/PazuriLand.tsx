import { MapPin, TrendingUp, FileCheck, Ruler } from "lucide-react";
import { Button } from "@/components/ui/button";
import pazuriMap from "@/assets/pazuri-10acre.jpg";

const highlights = [
  { icon: Ruler, text: "10 Acre Parcels Available" },
  { icon: MapPin, text: "Adjacent to Pazuri at Vipingo Ridge" },
  { icon: FileCheck, text: "Freehold Title Deeds" },
  { icon: TrendingUp, text: "Prime Investment Land — High Growth Area" },
];

const PazuriLand = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
            Next to Pazuri, Vipingo Ridge
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            10-Acre Investment Land
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Strategic land parcels adjacent to Pazuri at Vipingo Ridge — Kenya's premier coastal development corridor.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map image */}
          <div className="rounded-2xl overflow-hidden shadow-strong">
            <img
              src={pazuriMap}
              alt="10-acre plots near Pazuri, Vipingo"
              className="w-full"
            />
          </div>

          {/* Details */}
          <div>
            <div className="bg-card rounded-2xl p-8 shadow-medium mb-8">
              <div className="text-muted-foreground text-sm mb-2">10-Acre Parcel</div>
              <div className="text-4xl font-display font-bold text-primary mb-2">
                Contact for Pricing
              </div>
              <div className="text-ocean font-medium text-sm">
                Freehold Title • Prime Location
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              {highlights.map((h, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                    <h.icon className="w-5 h-5 text-ocean" />
                  </div>
                  <span className="text-foreground font-medium">{h.text}</span>
                </li>
              ))}
            </ul>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              Located next to the renowned Pazuri development at Vipingo Ridge, home to the PGA Baobab Course. This is a high-growth corridor with the Mombasa–Malindi Dual Carriageway, SGR Phase II, and the Vipingo Special Economic Zone driving rapid appreciation.
            </p>

            <Button
              variant="cta"
              size="xl"
              className="w-full"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Enquire About 10-Acre Land
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PazuriLand;
