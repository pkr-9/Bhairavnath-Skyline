import ServiceDetailLayout from "../components/services/ServiceDetailLayout";
import UrbanTechContent from "../components/services/UrbanTechContent";

export default function ServiceUrbanTechPage() {
  return (
    <ServiceDetailLayout
      serviceId="urban-tech"
      headerTitle="Urban Tech & Ads"
      headerDesc="Smart city solutions and next-gen digital advertising infrastructure."
      headerImage="https://picsum.photos/1920/1080?city"
    >
      <UrbanTechContent />
    </ServiceDetailLayout>
  );
}
