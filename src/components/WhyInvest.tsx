import { TrendingUp, Waves, ShieldCheck, Wallet, Building2, Plane } from "lucide-react";

const reasons = [
  {
    icon: TrendingUp,
    title: "High Appreciation Area",
    description:
      "Vipingo is one of Kenya's fastest-growing coastal corridors — driven by Vipingo Ridge, new infrastructure and rising diaspora demand.",
  },
  {
    icon: Waves,
    title: "Minutes from the Beach",
    description:
      "A short drive to pristine white-sand beaches, Pazuri, and the Indian Ocean — coastal lifestyle without the Mombasa traffic.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Gated Community",
    description:
      "Controlled access, perimeter security and a tight-knit neighborhood designed for families and long-stay holiday rentals.",
  },
  {
    icon: Wallet,
    title: "Flexible Payment Plans",
    description:
      "Spread payments over up to 18 months with a clear schedule. No hidden costs — built for diaspora & local buyers.",
  },
  {
    icon: Building2,
    title: "Vipingo Ridge & Amenities",
    description:
      "Walking distance to world-class golf, hospitality, schools and shopping — a fully serviced lifestyle ecosystem.",
  },
  {
    icon: Plane,
    title: "Strategic Location",
    description:
      "Direct access to Mombasa–Malindi highway, 35 mins from Moi International Airport and the future SGR corridor.",
  },
];

const WhyInvest = () => {
  return (
    <section id="why-invest" className="py-20 bg-gradient-sand">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gold/15 text-foreground px-4 py-1.5 rounded-full mb-4 border border-gold/30">
            <span className="w-1.5 h-1.5 bg-gold rounded-full" />
            <span className="text-xs font-semibold tracking-widest uppercase">Why Kilua Homes</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            A Smart Coastal Investment
          </h2>
          <p className="text-muted-foreground text-lg">
            Built for diaspora investors, Nairobi professionals and Mombasa-based families looking for secure, high-appreciation coastal property.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="bg-card rounded-2xl p-7 shadow-soft hover:shadow-medium transition-all border border-border/50 group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-gold mb-5 group-hover:scale-105 transition-transform">
                <r.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-xl text-foreground mb-2">
                {r.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-[15px]">{r.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyInvest;
