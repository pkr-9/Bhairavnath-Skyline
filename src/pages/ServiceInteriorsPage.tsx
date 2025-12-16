import ServiceDetailLayout from "../components/services/ServiceDetailLayout";
import InteriorsContent from "../components/services/InteriorsContent";

export default function ServiceInteriorsPage() {
  return (
    <ServiceDetailLayout
      serviceId="interiors"
      headerTitle="Premium Interiors"
      headerDesc="Turnkey luxury fit-outs and bespoke furniture solutions."
      headerImage="https://images.unsplash.com/photo-1503174971373-b1f69850bded?q=80&w=913&auto=format&fit=crop"
    >
      <InteriorsContent />
    </ServiceDetailLayout>
  );
}
