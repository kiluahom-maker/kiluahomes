import { Trees, Users, Sparkles } from "lucide-react";

const highlights = [
  {
    icon: Trees,
    title: "Green Open Space",
    description: "Landscaped gardens and shaded seating designed for relaxation and family time.",
  },
  {
    icon: Users,
    title: "Community Hub",
    description: "A central gathering point for residents to connect, host events, and build lasting neighbourhood ties.",
  },
  {
    icon: Sparkles,
    title: "Lifestyle Amenities",
    description: "Carefully planned recreational space that adds value to every villa in the development.",
  },
];

const CommunityArea = () => {
  return (
    <section id="community" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-block bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
            ¼ Acre Reserved
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            A Quarter Acre for the Community
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            At the heart of the Kilua development, we've set aside a dedicated <span className="font-semibold text-foreground">quarter-acre community area</span> — a shared space designed exclusively for residents to relax, gather, and enjoy coastal living together.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all group text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-hero rounded-xl mb-5 group-hover:scale-110 transition-transform">
                <item.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityArea;
