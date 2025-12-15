import ServiceDetailLayout from "../components/services/ServiceDetailLayout";
import RealEstateContent from "../components/services/RealEstateContent";
import FeaturedProjects from "../components/homepage/FeaturedProjects";

export default function ServiceRealEstatePage() {
  return (
    <ServiceDetailLayout
      serviceId="real-estate"
      headerTitle="Building & Real Estate"
      headerDesc="Developing high-rise ecosystems for modern living and working."
      headerImage="https://picsum.photos/1920/1080?building"
    >
      <RealEstateContent />
      <div className="mt-20">
        <FeaturedProjects />
      </div>
    </ServiceDetailLayout>
  );
}
