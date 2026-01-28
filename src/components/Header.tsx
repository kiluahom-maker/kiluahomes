import { Phone, Mail, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="hidden md:flex items-center justify-end gap-6 py-2 text-sm text-muted-foreground border-b border-border">
          <a href="tel:+254790900900" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Phone className="w-4 h-4" />
            +254-790-900-900
          </a>
          <a href="mailto:admin@kiluahomes.co.ke" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Mail className="w-4 h-4" />
            admin@kiluahomes.co.ke
          </a>
        </div>

        {/* Main nav */}
        <nav className="flex items-center justify-between py-4">
          <a href="#" className="flex items-center gap-2">
            <div className="flex flex-col">
              <span className="text-2xl font-display font-bold text-primary tracking-tight">
                Kilua Homes
              </span>
              <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase">
                Real Estate
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#property" className="text-foreground hover:text-primary transition-colors font-medium">
              Property
            </a>
            <a href="#features" className="text-foreground hover:text-primary transition-colors font-medium">
              Features
            </a>
            <a href="#gallery" className="text-foreground hover:text-primary transition-colors font-medium">
              Gallery
            </a>
            <a href="#floorplans" className="text-foreground hover:text-primary transition-colors font-medium">
              Floor Plans
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">
              Contact
            </a>
            <Button variant="cta" size="lg">
              Book Site Visit
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile nav */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              <a href="#property" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Property
              </a>
              <a href="#features" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Features
              </a>
              <a href="#gallery" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Gallery
              </a>
              <a href="#floorplans" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Floor Plans
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Contact
              </a>
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <a href="tel:+254790900900" className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  +254-790-900-900
                </a>
                <a href="mailto:admin@kiluahomes.co.ke" className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  admin@kiluahomes.co.ke
                </a>
              </div>
              <Button variant="cta" className="mt-4">
                Book Site Visit
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
