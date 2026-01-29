import { Check, Clock, TrendingUp, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  { icon: Clock, text: "30% Downpayment to Start" },
  { icon: TrendingUp, text: "Balance in 18 Monthly Installments" },
  { icon: Shield, text: "Transparent Progress Updates" },
  { icon: Check, text: "Freehold Title Deed Included" },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary-foreground rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-ocean rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-ocean rounded-full animate-pulse" />
            <span className="text-sm font-medium">Limited Off-Plan Pricing — Only 4 Units</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground mb-6">
            Secure Your Dream Home Today
          </h2>

          <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Take advantage of our exclusive off-plan pricing with flexible payment terms. Build equity while your home is being built.
          </p>

          {/* Price card */}
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-strong mb-10 max-w-xl mx-auto">
            <div className="text-muted-foreground mb-2">Off-Plan Price</div>
            <div className="text-5xl md:text-6xl font-display font-bold text-primary mb-2">
              KSH 7.9M
            </div>
            <div className="text-ocean font-medium mb-8">
              Save significantly compared to completed property prices
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 text-left">
                  <div className="flex-shrink-0 w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                    <benefit.icon className="w-5 h-5 text-ocean" />
                  </div>
                  <span className="text-foreground font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>

            <Button variant="cta" size="xl" className="w-full">
              Reserve Your Unit Now
            </Button>
          </div>

          <p className="text-primary-foreground/70 text-sm">
            *Terms and conditions apply. Prices subject to change. Contact us for full payment schedule.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
