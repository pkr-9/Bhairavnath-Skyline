// import React from "react";
import AboutHeader from "../components/about/AboutHeader";
import OurApproach from "../components/about/OurApproach";
import LeadershipTeam from "../components/about/LeadershipTeam";
import OurCertifications from "../components/about/OurCertifications";
import CallToAction from "../components/homepage/CallToAction";

export default function AboutPage() {
  return (
    <>
      <AboutHeader />
      <OurApproach />
      <LeadershipTeam />
      <OurCertifications />
      {/* We can re-use the CTA component from the homepage */}
      <CallToAction />
    </>
  );
}
