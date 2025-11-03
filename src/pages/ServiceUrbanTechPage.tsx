// import React from "react";
import ServicePageHeader from "../components/services/ServicePageHeader";
import UrbanTechContent from "../components/services/UrbanTechContent";
import CallToAction from "../components/homepage/CallToAction";

export default function ServiceUrbanTechPage() {
  return (
    <>
      <ServicePageHeader
        category="Our Services"
        title="Advertising & Urban Tech"
        description="Making cities smarter & brands brighter. [cite: 66] We deploy 
                     next-generation advertising solutions and public amenities."
        backgroundImage="https://picsum.photos/1920/1080?cityscape"
      />

      <UrbanTechContent />

      <CallToAction />
    </>
  );
}
