import masterPlan from "@/assets/kilua-master-plan.png";

const MasterPlan = () => {
  return (
    <section id="masterplan" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Development Master Plan
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A thoughtfully designed gated community featuring Villa Type A & B units, community spaces, and secure access.
          </p>
        </div>

        <div className="bg-card rounded-2xl p-4 md:p-8 shadow-medium max-w-5xl mx-auto">
          <img
            src={masterPlan}
            alt="Kilua Homes development master plan"
            className="w-full rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default MasterPlan;
