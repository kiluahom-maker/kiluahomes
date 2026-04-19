import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "A genuine investment opportunity in one of the fastest-growing coastal areas in Kenya. The location near Vipingo Ridge speaks for itself.",
    name: "Diaspora Buyer",
    role: "United Kingdom",
  },
  {
    quote:
      "Transparent process, clear titles and a payment plan that actually works for a working professional. Exactly what I was looking for.",
    name: "Nairobi Professional",
    role: "Westlands",
  },
  {
    quote:
      "Modern villa design, gated community, and minutes from the beach. The kind of coastal home I'd be proud to own and rent out.",
    name: "Mombasa Investor",
    role: "Nyali",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Trusted by Coastal Buyers
          </h2>
          <p className="text-muted-foreground">
            Real perspectives from the kind of buyer Kilua Homes is built for.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-card rounded-2xl p-7 shadow-soft border border-border/60 relative"
            >
              <Quote className="w-10 h-10 text-gold/30 absolute top-5 right-5" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>
              <div className="border-t border-border pt-4">
                <div className="font-semibold text-foreground">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
