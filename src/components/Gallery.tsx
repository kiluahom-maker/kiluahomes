import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import propertyPool from "@/assets/property-pool.jpg";
import propertyFront from "@/assets/property-front.jpg";
import propertySide from "@/assets/property-side.jpg";
import propertyBack from "@/assets/property-back.jpg";
import propertyRow from "@/assets/property-row.png";
import propertySingle from "@/assets/property-single.png";
import propertyGate from "@/assets/property-gate.png";
import siteView1 from "@/assets/site-view-1.jpg";
import siteView2 from "@/assets/site-view-2.jpg";
import siteView3 from "@/assets/site-view-3.jpg";
import siteView4 from "@/assets/site-view-4.jpg";
import siteView5 from "@/assets/site-view-5.jpg";
import sitePoolSteps from "@/assets/site-pool-steps.png";
import siteWalkway from "@/assets/site-walkway.jpg";
import sitePergola from "@/assets/site-pergola.jpg";
import locationMap1 from "@/assets/location-map-1.png";
import locationMap2 from "@/assets/location-map-2.png";

const images = [
  { src: propertyPool, alt: "Property with pool view", label: "Pool View" },
  { src: propertyFront, alt: "Front facade", label: "Front Facade" },
  { src: propertySide, alt: "Side view", label: "Side View" },
  { src: propertyBack, alt: "Back facade", label: "Back Facade" },
  { src: propertyRow, alt: "Row of townhouses", label: "Townhouse Row" },
  { src: propertySingle, alt: "Single unit view", label: "Single Unit" },
  { src: propertyGate, alt: "Property entrance gate", label: "Entrance Gate" },
  { src: sitePergola, alt: "Pergola and pool area", label: "Pergola Area" },
  { src: sitePoolSteps, alt: "Pool with curved steps", label: "Pool Steps" },
  { src: siteWalkway, alt: "Garden walkway", label: "Garden Walkway" },
  { src: siteView1, alt: "Construction site view", label: "Site View" },
  { src: siteView2, alt: "Site progress", label: "Site Progress" },
  { src: siteView3, alt: "Land preparation", label: "Land Preparation" },
  { src: siteView4, alt: "Site clearing", label: "Site Clearing" },
  { src: siteView5, alt: "Building foundation", label: "Foundation" },
  { src: locationMap1, alt: "Location near Mombasa Highway", label: "Location Map" },
  { src: locationMap2, alt: "Highway access", label: "Highway Access" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return;
    if (direction === "prev") {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    } else {
      setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Property Gallery
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our modern architectural design with clean lines, natural light, and premium finishes.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-xl cursor-pointer group ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                  index === 0 ? "h-full min-h-[400px]" : "h-64"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 text-primary-foreground font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                {image.label}
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 z-50 bg-charcoal/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-primary-foreground hover:text-ocean transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            
            {/* Navigation buttons */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-foreground hover:text-ocean transition-colors p-2"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage("prev");
              }}
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
            
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-primary-foreground hover:text-ocean transition-colors p-2"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage("next");
              }}
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            
            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-primary-foreground/80 text-sm">
              {selectedImage + 1} / {images.length}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
