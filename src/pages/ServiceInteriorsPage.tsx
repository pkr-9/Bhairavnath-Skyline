// import React from "react";
import ServicePageHeader from "../components/services/ServicePageHeader";
import InteriorsContent from "../components/services/InteriorsContent";
import CallToAction from "../components/homepage/CallToAction";

export default function ServiceInteriorsPage() {
  return (
    <>
      <ServicePageHeader
        category="Our Services"
        title="Premium Interior & Fit-Outs"
        description="We provide 'Turnkey Luxury' [cite: 32] and 'Aesthetic Mastery'[cite: 33], 
                     transforming empty shells into iconic spaces. [cite: 58]"
        backgroundImage="https://picsum.photos/1920/1080?interior-design"
      />

      <InteriorsContent />

      {/* This page would also benefit from a dedicated gallery component */}

      <CallToAction />
    </>
  );
}
