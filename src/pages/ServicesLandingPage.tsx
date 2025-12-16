// import React from "react";
import ServicesHeader from "../components/services/ServicesHeader";
import ServicesGrid from "../components/services/ServicesGrid";
import CallToAction from "../components/homepage/CallToAction";
import TechCapabilities from "../components/services/TechCapabilities";

export default function ServicesLandingPage() {
  return (
    <>
      <ServicesHeader />
      <ServicesGrid />
      <TechCapabilities />
      {/* We can re-use the CTA component at the bottom */}
      <CallToAction />
    </>
  );
}
