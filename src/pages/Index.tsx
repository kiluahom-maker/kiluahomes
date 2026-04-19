import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PropertyOverview from "@/components/PropertyOverview";
import PropertyTypes from "@/components/PropertyTypes";
import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import FloorPlans from "@/components/FloorPlans";
import MasterPlan from "@/components/MasterPlan";
import CommunityArea from "@/components/CommunityArea";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useState } from "react";

const Index = () => {
  const [activeType, setActiveType] = useState<"type-a" | "type-b">("type-a");

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <PropertyOverview />
      <PropertyTypes activeType={activeType} onChange={setActiveType} />
      <Features />
      <Gallery />
      <FloorPlans />
      <MasterPlan />
      <CommunityArea />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
