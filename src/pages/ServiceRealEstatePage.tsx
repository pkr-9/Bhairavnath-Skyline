// import React from "react";
import ServicePageHeader from "../components/services/ServicePageHeader";
import RealEstateContent from "../components/services/RealEstateContent";
import CallToAction from "../components/homepage/CallToAction";
import FeaturedProjects from "../components/homepage/FeaturedProjects";

export default function ServiceRealEstatePage() {
  return (
    <>
      <ServicePageHeader
        category="Our Services"
        title="Building & Real Estate"
        description="From luxury residential towers to expansive IT parks, 
                     we shape the modern landscapes where people live, work, and thrive."
        // Using a relevant placeholder image
        backgroundImage="https://picsum.photos/1920/1080"
      />

      <RealEstateContent />

      {/* Re-using the featured projects section */}
      <FeaturedProjects />

      <CallToAction />
    </>
  );
}
