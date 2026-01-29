import { MapPin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import propertyPool from "@/assets/property-pool.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${propertyPool})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/50 to-charcoal/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-full mb-6 animate-fade-up">
            <span className="w-2 h-2 bg-ocean rounded-full animate-pulse" />
            <span className="text-sm font-medium">Limited Offer — Only 4 Units Available</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Modern Coastal
            <br />
            <span className="text-ocean-light">Living in Vipingo</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/90 mb-4 animate-fade-up max-w-xl" style={{ animationDelay: "0.2s" }}>
            Experience timeless design in a beautifully crafted 3-bedroom home with your own title deed. 2km from the beach, built for comfort and long-term value.
          </p>

          <div className="flex items-center gap-2 text-primary-foreground/80 mb-8 animate-fade-up" style={{ animationDelay: "0.25s" }}>
            <MapPin className="w-5 h-5 text-ocean-light" />
            <span>Vipingo Ridge & Pazuri Area, Kilifi County</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Book a Site Visit
            </Button>
            <Button variant="heroOutline" size="xl" onClick={() => document.getElementById('floorplans')?.scrollIntoView({ behavior: 'smooth' })}>
              View Floor Plans
            </Button>
          </div>

          {/* Price badge */}
          <div className="mt-12 inline-block animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-6 shadow-strong">
              <div className="text-sm text-muted-foreground mb-1">Off-Plan Price</div>
              <div className="text-3xl md:text-4xl font-display font-bold text-primary">
                KSH 7.9M
              </div>
              <div className="text-sm text-ocean font-medium mt-1">
                30% Downpayment • Balance in 18 Months
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#property" className="flex flex-col items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors">
          <span className="text-sm">Discover More</span>
          <ChevronDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
