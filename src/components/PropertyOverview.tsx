import propertyFront from "@/assets/property-front.jpg";
import propertySide from "@/assets/property-side.jpg";

const PropertyOverview = () => {
  return (
    <section id="property" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Images */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={propertyFront}
                alt="Modern coastal home"
                className="rounded-2xl shadow-strong w-full"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-2/3 z-0 hidden md:block">
              <img
                src={propertySide}
                alt="Property side view"
                className="rounded-2xl shadow-medium border-4 border-background"
              />
            </div>
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <div className="inline-block bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
              Vipingo, Kilifi County
            </div>

            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Modern 3-Bedroom Coastal Home
            </h2>

            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Experience the perfect blend of modern architecture and coastal living. This beautifully designed home features clean lines, natural light, and premium finishes throughout. Located just 2km from the beach, near Vipingo Ridge & Pazuri.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-ocean rounded-full" />
                <span className="text-foreground">Freehold title deed with full ownership</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-ocean rounded-full" />
                <span className="text-foreground">Second row from main road — easy access</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-ocean rounded-full" />
                <span className="text-foreground">Private compound in gated neighborhood</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-ocean rounded-full" />
                <span className="text-foreground">Timeless design built for long-term value</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="bg-muted rounded-xl px-6 py-4 text-center">
                <div className="text-2xl font-display font-bold text-primary">2,300</div>
                <div className="text-sm text-muted-foreground">Sq.Ft Built-up</div>
              </div>
              <div className="bg-muted rounded-xl px-6 py-4 text-center">
                <div className="text-2xl font-display font-bold text-primary">2km</div>
                <div className="text-sm text-muted-foreground">To Beach</div>
              </div>
              <div className="bg-muted rounded-xl px-6 py-4 text-center">
                <div className="text-2xl font-display font-bold text-primary">4</div>
                <div className="text-sm text-muted-foreground">Units Only</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyOverview;
