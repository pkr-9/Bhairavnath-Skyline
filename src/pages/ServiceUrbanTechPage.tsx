import ServiceDetailLayout from "../components/services/ServiceDetailLayout";
import UrbanTechContent from "../components/services/UrbanTechContent";

export default function ServiceUrbanTechPage() {
  return (
    <ServiceDetailLayout
      serviceId="urban-tech"
      headerTitle="Urban Tech & Ads"
      headerDesc="Smart city solutions and next-gen digital advertising infrastructure."
      headerImage="https://images.unsplash.com/photo-1752742111841-f490c48aa668?q=80&w=1032&auto=format&fit=crop"
    >
      <UrbanTechContent />
    </ServiceDetailLayout>
  );
}
