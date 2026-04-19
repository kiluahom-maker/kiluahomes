import { MapPin, ChevronDown, ShieldCheck, FileCheck, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import propertyPool from "@/assets/property-pool.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${propertyPool})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 via-charcoal/55 to-charcoal/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-sm border border-gold/30 text-primary-foreground px-4 py-2 rounded-full mb-6 animate-fade-up">
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            <span className="text-sm font-medium tracking-wide">Kilua Homes — Vipingo, Kilifi</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground mb-6 animate-fade-up leading-[1.05]" style={{ animationDelay: "0.1s" }}>
            Own a Premium Coastal Villa
            <br />
            <span className="text-gold-light">Minutes from the Beach</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/90 mb-6 animate-fade-up max-w-2xl leading-relaxed" style={{ animationDelay: "0.2s" }}>
            Secure, freehold villas in a gated coastal community with flexible payment plans — in one of Kenya's fastest-growing investment locations.
          </p>

          <div className="flex items-center gap-2 text-primary-foreground/80 mb-8 animate-fade-up" style={{ animationDelay: "0.25s" }}>
            <MapPin className="w-5 h-5 text-gold-light" />
            <span>Sheriani, Vipingo — near Vipingo Ridge & Pazuri Beach</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up mb-10" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Book a Site Visit
            </Button>
            <Button
              variant="heroOutline"
              size="xl"
              onClick={() => window.open('https://wa.me/254790900900?text=Hi%20Sunway%20Ventures%2C%20I%27d%20like%20to%20learn%20more%20about%20Kilua%20Homes%20villas.', '_blank')}
            >
              Chat on WhatsApp
            </Button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: "0.35s" }}>
            <div className="inline-flex items-center gap-2 bg-card/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-soft">
              <FileCheck className="w-4 h-4 text-palm" />
              <span className="text-sm font-medium text-foreground">Freehold Title</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-card/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-soft">
              <ShieldCheck className="w-4 h-4 text-palm" />
              <span className="text-sm font-medium text-foreground">Gated Community</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-card/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-soft">
              <Wallet className="w-4 h-4 text-palm" />
              <span className="text-sm font-medium text-foreground">Flexible Payment Plans</span>
            </div>
          </div>

          {/* Price highlights */}
          <div className="mt-10 flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-5 shadow-strong border-l-4 border-gold">
              <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Villa Type B — From</div>
              <div className="text-2xl font-display font-bold text-primary">KSH 7.9M</div>
              <div className="text-xs text-palm font-medium mt-1">Modern compact villa</div>
            </div>
            <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-5 shadow-strong border-l-4 border-palm">
              <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Villa Type A — 50×100</div>
              <div className="text-2xl font-display font-bold text-primary">KSH 13.5M</div>
              <div className="text-xs text-palm font-medium mt-1">Premium standalone villa</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#property" className="flex flex-col items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors">
          <span className="text-sm">Explore Villas</span>
          <ChevronDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
