import ServiceDetailLayout from "../components/services/ServiceDetailLayout";
import InfrastructureContent from "../components/services/InfrastructureContent";
import FeaturedProjects from "../components/homepage/FeaturedProjects";

export default function ServiceInfraPage() {
  return (
    <ServiceDetailLayout
      serviceId="infrastructure"
      headerTitle="Core Infrastructure"
      headerDesc="Building the heavy arteries of the nation—highways, bridges, and tunnels."
      headerImage="https://images.unsplash.com/photo-1608237963573-ba0790bc6404?q=80&w=872&auto=format&fit=crop"
    >
      {/* We keep the old content component as the "Overview" introduction */}
      <InfrastructureContent />
      <div className="mt-20">
        <FeaturedProjects />
      </div>
    </ServiceDetailLayout>
  );
}
