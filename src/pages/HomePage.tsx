// packages/client-frontend/src/pages/HomePage.tsx
import Header from "../components/layout/Header";
import StatsCounter from "../components/ui/StatsCounter";
import ClientLogos from "../components/homepage/ClientLogos";
import CoreServices from "../components/homepage/CoreServices";
import FeaturedProjects from "../components/homepage/FeaturedProjects";
import TrustAndCompliance from "../components/homepage/TrustAndCompliance";
import Testimonials from "../components/homepage/Testimonials";
import CallToAction from "../components/homepage/CallToAction";
import SEO from "../components/layout/SEO";

export function HomePage() {
  return (
    <>
      <SEO
        title="Home"
        description="Bhairavnath Skyline: Leading infrastructure and real estate developers in India."
      />
      <Header />
      <StatsCounter />
      <ClientLogos />
      <CoreServices />
      <FeaturedProjects />
      <TrustAndCompliance />
      <Testimonials />
      <CallToAction />
    </>
  );
}

export default HomePage;
