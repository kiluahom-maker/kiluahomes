import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PropertyOverview from "@/components/PropertyOverview";
import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import FloorPlans from "@/components/FloorPlans";
import Pricing from "@/components/Pricing";
import PlotsForSale from "@/components/PlotsForSale";
import PazuriLand from "@/components/PazuriLand";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const tabs = [
  { id: "kilua-house", label: "Kilua House" },
  { id: "plots", label: "Plots for Sale" },
  { id: "10-acre", label: "10-Acre Land" },
];

const Index = () => {
  const [activeTab, setActiveTab] = useState("kilua-house");

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />

      {/* Property tabs */}
      <section id="properties" className="bg-muted border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-2 py-4 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground shadow-medium"
                    : "bg-card text-foreground hover:bg-secondary"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab content */}
      {activeTab === "kilua-house" && (
        <>
          <PropertyOverview />
          <Features />
          <Gallery />
          <FloorPlans />
          <Pricing />
        </>
      )}

      {activeTab === "plots" && <PlotsForSale />}

      {activeTab === "10-acre" && <PazuriLand />}

      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
