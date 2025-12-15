import ServiceDetailLayout from "../components/services/ServiceDetailLayout";
import WaterEnvContent from "../components/services/WaterEnvContent";
import FeaturedProjects from "../components/homepage/FeaturedProjects";

export default function ServiceWaterPage() {
  return (
    <ServiceDetailLayout
      serviceId="water"
      headerTitle="Water & Environmental"
      headerDesc="Engineering lifeline projects for water management and flood control."
      headerImage="https://picsum.photos/1920/1080?water"
    >
      <WaterEnvContent />
      <div className="mt-20">
        <FeaturedProjects />
      </div>
    </ServiceDetailLayout>
  );
}
