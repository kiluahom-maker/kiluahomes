import { MapPin, Check, AlertCircle, Building2, Palmtree, Car, Dumbbell, GraduationCap, Train, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const plots = [
  {
    size: "100 x 100",
    area: "10,000 sq.ft",
    price: "KSH 7M",
    features: ["Freehold Title Deed", "Up to 18 Months Payment Plan", "Gated Community Access"],
  },
  {
    size: "50 x 100",
    area: "5,000 sq.ft",
    price: "KSH 4.5M",
    features: ["Freehold Title Deed", "Up to 18 Months Payment Plan", "Gated Community Access"],
  },
  {
    size: "40 x 80",
    area: "3,200 sq.ft",
    price: "KSH 3M",
    features: ["Freehold Title Deed", "Up to 18 Months Payment Plan", "Gated Community Access"],
  },
];

const keyDevelopments = [
  "Vipingo Ridge Golf Club",
  "Sultan Palace Beach",
  "Vipingo Market & Beyond",
  "Ocean Breeze Court",
];

const upcomingDevelopments = [
  "Centum Developments",
  "Free Economic Zone",
  "Vipingo City",
  "Phase II Lamu-Malindi-Isiolo SGR",
  "Ronald Ngala Utalii College",
  "Mombasa – Malindi Dual Carriage",
];

const amenities = [
  { icon: Car, name: "Ample Parking" },
  { icon: MapPin, name: "Good Roads" },
  { icon: Palmtree, name: "Walking Tracks" },
  { icon: Home, name: "Common Area Park" },
  { icon: Palmtree, name: "Child's Play Area" },
  { icon: Palmtree, name: "Swimming Pool" },
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
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
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

        {/* Beach & Location Highlight */}
        <div className="bg-gradient-hero rounded-2xl p-6 md:p-8 shadow-soft max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-foreground/20 rounded-full mb-4">
            <Palmtree className="w-6 h-6 text-primary-foreground" />
          </div>
          <h3 className="text-xl font-display font-semibold text-primary-foreground mb-2">
            Pristine Beach Living
          </h3>
          <p className="text-primary-foreground/90 max-w-2xl mx-auto">
            Experience the breathtaking beauty of Vipingo's pristine white sandy beaches and crystal-clear turquoise waters. 
            Our development is located on the <strong>second row from the main road</strong>, offering easy access while maintaining 
            a peaceful coastal retreat atmosphere. The stunning Indian Ocean coastline is just moments away.
          </p>
        </div>

        {/* Gated community note */}
        <div className="bg-card rounded-2xl p-6 md:p-8 shadow-soft max-w-4xl mx-auto text-center mb-12">
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

        {/* Amenities */}
        <div className="bg-card rounded-2xl p-6 md:p-8 shadow-soft max-w-4xl mx-auto mb-12">
          <h3 className="text-xl font-display font-semibold text-foreground mb-6 text-center">
            Community Amenities
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {amenities.map((amenity, index) => (
              <div key={index} className="flex items-center gap-3 bg-secondary/50 rounded-xl p-4">
                <div className="flex-shrink-0 w-10 h-10 bg-ocean/10 rounded-full flex items-center justify-center">
                  <amenity.icon className="w-5 h-5 text-ocean" />
                </div>
                <span className="text-foreground font-medium">{amenity.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Key Developments */}
        <div className="bg-card rounded-2xl p-6 md:p-8 shadow-soft max-w-4xl mx-auto mb-12">
          <h3 className="text-xl font-display font-semibold text-foreground mb-6 text-center">
            Key Developments Nearby
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {keyDevelopments.map((development, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-secondary rounded-full flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-ocean" />
                </div>
                <span className="text-foreground">{development}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Developments */}
        <div className="bg-card rounded-2xl p-6 md:p-8 shadow-soft max-w-4xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Building2 className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-display font-semibold text-foreground text-center">
              Upcoming Developments
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {upcomingDevelopments.map((development, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground">{development}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Vipingo Special Economic Zone */}
        <div className="bg-secondary rounded-2xl p-6 md:p-8 shadow-soft max-w-4xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Building2 className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-display font-semibold text-foreground text-center">
              Vipingo Special Economic Zone (VSEZ)
            </h3>
          </div>
          <p className="text-muted-foreground text-center">
            A 2,000-acre, "plug-and-play" industrial park in Kilifi County, Kenya, designed as a sustainable hub 
            for manufacturing, agro-processing, and logistics. Developed by Centum Investment and Arise IIP, 
            it aims to attract <strong>Sh390 billion ($3 billion)</strong> in investments, create <strong>35,000+ jobs</strong>, 
            and leverage proximity to the Port of Mombasa. The zone features industrial parks, extensive residential options, 
            modern infrastructure including a desalination plant and power facilities, plus lifestyle amenities like schools, 
            medical centers, and a golf course.
          </p>
        </div>

        {/* Vipingo Ridge PGA */}
        <div className="bg-card rounded-2xl p-6 md:p-8 shadow-soft max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Palmtree className="w-6 h-6 text-ocean" />
            <h3 className="text-xl font-display font-semibold text-foreground text-center">
              Vipingo Ridge - PGA Baobab Course
            </h3>
          </div>
          <p className="text-muted-foreground text-center">
            Home to the <strong>PGA Baobab Course</strong>, the <strong>only PGA-accredited championship golf course in Africa</strong>. 
            This world-class facility hosts the European Tour's Magical Kenya Ladies Open, putting Vipingo on the global golfing map.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlotsForSale;
