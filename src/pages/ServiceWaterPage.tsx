// import React from "react";
import ServicePageHeader from "../components/services/ServicePageHeader";
import WaterEnvContent from "../components/services/WaterEnvContent";
import CallToAction from "../components/homepage/CallToAction";
import FeaturedProjects from "../components/homepage/FeaturedProjects";

export default function ServiceWaterPage() {
  return (
    <>
      <ServicePageHeader
        category="Our Services"
        title="Water & Environmental"
        description="We engineer essential infrastructure to protect, treat, and 
                     manage water resources, ensuring sustainability for 
                     communities and farms."
        // Using a relevant placeholder image (a dam [cite: 33])
        backgroundImage="https://picsum.photos/1920/1080?2"
      />

      <WaterEnvContent />

      {/* Re-using the featured projects section */}
      <FeaturedProjects />

      <CallToAction />
    </>
  );
}
