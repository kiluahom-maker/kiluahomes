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
            <span className="text-sm font-medium">Homes, Plots & Land in Vipingo</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Vipingo
            <br />
            <span className="text-ocean-light">Properties</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/90 mb-4 animate-fade-up max-w-xl" style={{ animationDelay: "0.2s" }}>
            Discover premium homes, residential plots, and investment land in Vipingo, Kilifi County. Freehold titles and flexible payment plans.
          </p>

          <div className="flex items-center gap-2 text-primary-foreground/80 mb-8 animate-fade-up" style={{ animationDelay: "0.25s" }}>
            <MapPin className="w-5 h-5 text-ocean-light" />
            <span>Vipingo, Kilifi County — Kenya's Premier Coastal Location</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Book a Site Visit
            </Button>
            <Button variant="heroOutline" size="xl" onClick={() => document.getElementById('properties')?.scrollIntoView({ behavior: 'smooth' })}>
              View Properties
            </Button>
          </div>

          {/* Price highlights */}
          <div className="mt-12 flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-5 shadow-strong">
              <div className="text-sm text-muted-foreground mb-1">Kilua House</div>
              <div className="text-2xl font-display font-bold text-primary">KSH 7.9M</div>
              <div className="text-xs text-ocean font-medium mt-1">3-Bed Home • Off-Plan</div>
            </div>
            <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-5 shadow-strong">
              <div className="text-sm text-muted-foreground mb-1">Plots from</div>
              <div className="text-2xl font-display font-bold text-primary">KSH 2.8M</div>
              <div className="text-xs text-ocean font-medium mt-1">50×100 • Freehold Title</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#properties" className="flex flex-col items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors">
          <span className="text-sm">Explore Properties</span>
          <ChevronDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
