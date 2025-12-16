import ServiceDetailLayout from "../components/services/ServiceDetailLayout";
import WaterEnvContent from "../components/services/WaterEnvContent";
import FeaturedProjects from "../components/homepage/FeaturedProjects";

export default function ServiceWaterPage() {
  return (
    <ServiceDetailLayout
      serviceId="water"
      headerTitle="Water & Environmental"
      headerDesc="Engineering lifeline projects for water management and flood control."
      headerImage="https://images.unsplash.com/photo-1520361098688-a4b9960d394b?q=80&w=872&auto=format&fit=crop"
    >
      <WaterEnvContent />
      <div className="mt-20">
        <FeaturedProjects />
      </div>
    </ServiceDetailLayout>
  );
}
