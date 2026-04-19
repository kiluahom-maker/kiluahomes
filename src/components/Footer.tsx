import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <span className="text-2xl font-display font-bold">Kilua Homes</span>
              <span className="block text-xs text-primary-foreground/70 tracking-widest uppercase mt-1">
                by Sunway Ventures LTD
              </span>
            </div>
            <p className="text-primary-foreground/80 max-w-md mb-4">
              Trusted coastal property developer in Vipingo. Premium freehold villas, gated community living, and flexible payment plans.
            </p>
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 px-3 py-1.5 rounded-full text-xs">
              <span className="w-1.5 h-1.5 bg-gold rounded-full" />
              Trusted coastal property developer
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#property" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Property Overview
                </a>
              </li>
              <li>
                <a href="#features" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#floorplans" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Floor Plans
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+254790900900" className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  <Phone className="w-4 h-4" />
                  +254-790-900-900
                </a>
              </li>
              <li>
                <a href="mailto:admin@kiluahomes.co.ke" className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  <Mail className="w-4 h-4" />
                  admin@kiluahomes.co.ke
                </a>
              </li>
              <li className="flex items-start gap-2 text-primary-foreground/80">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                Vipingo, Kilifi County, Kenya
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-primary-foreground/20 text-center text-primary-foreground/60 text-sm">
          <p>© {new Date().getFullYear()} Sunway Ventures LTD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
