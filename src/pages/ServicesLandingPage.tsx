// import React from "react";
import ServicesHeader from "../components/services/ServicesHeader";
import ServicesGrid from "../components/services/ServicesGrid";
import CallToAction from "../components/homepage/CallToAction";

export default function ServicesLandingPage() {
  return (
    <>
      <ServicesHeader />
      <ServicesGrid />
      {/* We can re-use the CTA component at the bottom */}
      <CallToAction />
    </>
  );
}
