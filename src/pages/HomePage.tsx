// packages/client-frontend/src/pages/HomePage.tsx
import Header from "../components/layout/Header";
import CoreServices from "../components/homepage/CoreServices";
import FeaturedProjects from "../components/homepage/FeaturedProjects";
import TrustAndCompliance from "../components/homepage/TrustAndCompliance";
import CallToAction from "../components/homepage/CallToAction";

export function HomePage() {
  return (
    <>
      <Header />
      <CoreServices />
      <FeaturedProjects />
      <TrustAndCompliance />
      <CallToAction />
    </>
  );
}

export default HomePage;
