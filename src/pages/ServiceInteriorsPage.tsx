import ServiceDetailLayout from "../components/services/ServiceDetailLayout";
import InteriorsContent from "../components/services/InteriorsContent";

export default function ServiceInteriorsPage() {
  return (
    <ServiceDetailLayout
      serviceId="interiors"
      headerTitle="Premium Interiors"
      headerDesc="Turnkey luxury fit-outs and bespoke furniture solutions."
      headerImage="https://picsum.photos/1920/1080?interior"
    >
      <InteriorsContent />
    </ServiceDetailLayout>
  );
}
