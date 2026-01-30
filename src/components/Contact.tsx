import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            Book a Site Visit
          </h2>
          <p className="text-muted-foreground mb-12 text-lg">
            Ready to see your future home? Schedule a visit to our Vipingo development site and experience coastal living firsthand.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="bg-card rounded-2xl p-6 shadow-soft">
              <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div className="font-semibold text-foreground mb-1">Phone</div>
              <a href="tel:+254790900900" className="text-muted-foreground hover:text-ocean transition-colors">
                +254-790-900-900
              </a>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-soft">
              <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div className="font-semibold text-foreground mb-1">Email</div>
              <a href="mailto:admin@kiluahomes.co.ke" className="text-muted-foreground hover:text-ocean transition-colors">
                admin@kiluahomes.co.ke
              </a>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-soft">
              <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div className="font-semibold text-foreground mb-1">Location</div>
              <p className="text-muted-foreground text-sm mb-2">
                Vipingo, Near Vipingo Ridge & Pazuri<br />
                Kilifi County, Kenya
              </p>
              <a 
                href="https://maps.app.goo.gl/mLjQuVruMa4m3hsHA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-ocean hover:text-ocean-light transition-colors text-sm font-medium"
              >
                View on Google Maps →
              </a>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-soft">
              <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div className="font-semibold text-foreground mb-1">Site Visit Hours</div>
              <p className="text-muted-foreground text-sm">
                Monday - Saturday: 9:00 AM - 5:00 PM<br />
                Sunday: By Appointment
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
