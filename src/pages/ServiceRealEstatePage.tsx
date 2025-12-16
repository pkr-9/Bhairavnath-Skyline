import ServiceDetailLayout from "../components/services/ServiceDetailLayout";
import RealEstateContent from "../components/services/RealEstateContent";
import FeaturedProjects from "../components/homepage/FeaturedProjects";

export default function ServiceRealEstatePage() {
  return (
    <ServiceDetailLayout
      serviceId="real-estate"
      headerTitle="Building & Real Estate"
      headerDesc="Developing high-rise ecosystems for modern living and working."
      headerImage="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=774&auto=format&fit=crop"
    >
      <RealEstateContent />
      <div className="mt-20">
        <FeaturedProjects />
      </div>
    </ServiceDetailLayout>
  );
}
