import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const url =
    "https://wa.me/254790900900?text=Hi%20Sunway%20Ventures%2C%20I%27d%20like%20to%20learn%20more%20about%20Kilua%20Homes%20villas.";

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-3 bg-palm hover:bg-palm-light text-primary-foreground pl-4 pr-5 py-3 rounded-full shadow-strong transition-all hover:scale-105"
    >
      <span className="relative flex items-center justify-center w-9 h-9 bg-primary-foreground/15 rounded-full">
        <MessageCircle className="w-5 h-5" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-gold rounded-full animate-pulse" />
      </span>
      <span className="hidden sm:inline font-medium text-sm">Chat on WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;
