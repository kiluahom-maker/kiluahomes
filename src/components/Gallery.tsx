import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import propertyPool from "@/assets/property-pool.jpg";
import propertyFront from "@/assets/property-front.jpg";
import propertySide from "@/assets/property-side.jpg";
import propertyBack from "@/assets/property-back.jpg";
import propertyRow from "@/assets/property-row.png";
import propertySingle from "@/assets/property-single.png";
import propertyGate from "@/assets/property-gate.png";
import vipingoBeachMap from "@/assets/vipingo-beach-map.png";
import mainHighwayMap from "@/assets/main-highway-map.png";
import siteConstructionView from "@/assets/site-construction-view.jpg";
import siteGreeneryView from "@/assets/site-greenery-view.jpg";
import siteInteriorProgress from "@/assets/site-interior-progress.jpeg";
import sitePerimeterWall from "@/assets/site-perimeter-wall.jpeg";
import siteFoundation1 from "@/assets/site-foundation-1.jpeg";
import siteFoundation2 from "@/assets/site-foundation-2.jpeg";
import sitePoolConstruction from "@/assets/site-pool-construction.jpeg";
import constructionFoundation from "@/assets/construction-foundation.jpg";
import aerialConstructionView from "@/assets/aerial-construction-view.jpg";
import aerialLandscapeView from "@/assets/aerial-landscape-view.jpg";
import videoFrame1 from "@/assets/video-frame-1.jpg";
import videoFrame2 from "@/assets/video-frame-2.jpg";
import siteTrenchRebar from "@/assets/site-trench-rebar.jpg";
import sitePerimeterCorner from "@/assets/site-perimeter-corner.jpg";
import siteWallLandscaping from "@/assets/site-wall-landscaping.jpg";
import siteCoconutGrove from "@/assets/site-coconut-grove.jpg";
import sitePalmGroveClearing from "@/assets/site-palm-grove-clearing.jpg";
import siteFoundationSlab1 from "@/assets/site-foundation-slab-1.jpg";
import siteClearedPlot from "@/assets/site-cleared-plot.jpg";
import siteFoundationSlab2 from "@/assets/site-foundation-slab-2.jpg";

const images = [
  { src: siteFoundationSlab1, alt: "Villa foundation slab with rebar ready for next phase", label: "Foundation Slab Ready" },
  { src: siteFoundationSlab2, alt: "Wider view of villa foundation slab with neighbouring villas", label: "Foundation Overview" },
  { src: sitePalmGroveClearing, alt: "Coconut palms across the cleared site under blue sky", label: "Palm Grove" },
  { src: siteClearedPlot, alt: "Freshly cleared plot bordered by perimeter wall and palms", label: "Cleared Plot" },
  { src: siteTrenchRebar, alt: "Foundation trench with rebar reinforcement", label: "Foundation Trench & Rebar" },
  { src: sitePerimeterCorner, alt: "Completed perimeter wall corner", label: "Perimeter Wall Corner" },
  { src: siteWallLandscaping, alt: "Perimeter wall with new landscaping", label: "Wall Landscaping" },
  { src: siteCoconutGrove, alt: "Lush coconut grove on the property", label: "Coconut Grove" },
  { src: aerialLandscapeView, alt: "Aerial view of Kilua Homes site and surrounding landscape", label: "Aerial Site Overview" },
  { src: aerialConstructionView, alt: "Aerial view of villas under construction", label: "Aerial Construction View" },
  { src: videoFrame1, alt: "Site walkthrough still", label: "Site Walkthrough" },
  { src: videoFrame2, alt: "Construction progress walkthrough still", label: "Construction Walkthrough" },
  { src: propertyPool, alt: "Property with pool view", label: "Pool View" },
  { src: propertyFront, alt: "Front facade", label: "Front Facade" },
  { src: propertySide, alt: "Side view", label: "Side View" },
  { src: propertyBack, alt: "Back facade", label: "Back Facade" },
  { src: propertyRow, alt: "Row of townhouses", label: "Townhouse Row" },
  { src: propertySingle, alt: "Single unit view", label: "Single Unit" },
  { src: propertyGate, alt: "Property entrance gate", label: "Entrance Gate" },
  { src: vipingoBeachMap, alt: "Vipingo Beach location map", label: "Vipingo Beach Area" },
  { src: mainHighwayMap, alt: "Location near main highway", label: "Highway Access" },
  { src: siteConstructionView, alt: "Site construction progress", label: "Construction Progress" },
  { src: siteGreeneryView, alt: "Lush site greenery", label: "Natural Surroundings" },
  { src: siteInteriorProgress, alt: "Interior plastering progress", label: "Interior Progress" },
  { src: sitePerimeterWall, alt: "Perimeter wall construction", label: "Perimeter Wall" },
  { src: siteFoundation1, alt: "Foundation works", label: "Foundation Works" },
  { src: siteFoundation2, alt: "Foundation excavation overview", label: "Foundation Overview" },
  { src: sitePoolConstruction, alt: "Plunge pool under construction", label: "Pool Construction" },
  { src: constructionFoundation, alt: "Foundation reinforcement with coastal palms", label: "Foundation Reinforcement" },
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
      </div>

      {/* Gallery grid — edge to edge, no gaps */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden cursor-pointer group transition-transform duration-300 ease-out hover:-translate-y-2 hover:scale-[1.03] hover:z-10 hover:shadow-strong"
            onClick={() => setSelectedImage(index)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover block"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-4 left-4 text-primary-foreground font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              {image.label}
            </div>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4">


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
