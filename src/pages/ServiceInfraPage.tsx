// import React from "react";
import ServicePageHeader from "../components/services/ServicePageHeader";
import InfrastructureContent from "../components/services/InfrastructureContent";
import CallToAction from "../components/homepage/CallToAction";
import FeaturedProjects from "../components/homepage/FeaturedProjects";

export default function ServiceInfraPage() {
  return (
    <>
      <ServicePageHeader
        category="Our Services"
        title="Core Infrastructure"
        description="As a leader in heavy construction, we build the large-scale,
                     foundational projects that power national progress and connectivity."
        // Using a relevant placeholder image
        backgroundImage="https://picsum.photos/id/1018/1920/1080"
      />

      <InfrastructureContent />

      {/* We can re-use the Featured Projects, maybe filtering them later */}
      <FeaturedProjects />

      <CallToAction />
    </>
  );
}
