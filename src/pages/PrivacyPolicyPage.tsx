import SEO from "../components/layout/SEO";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white py-20 dark:bg-gray-950">
      <SEO title="Privacy Policy" />
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Privacy Policy
        </h1>

        <div className="prose prose-lg text-gray-600 dark:text-gray-400 dark:prose-invert">
          <p>Last Updated: {new Date().toLocaleDateString()}</p>

          <h3>1. Introduction</h3>
          <p>
            Bhairavnath Skyline Private Limited ("we," "our," or "us") respects
            your privacy. This Privacy Policy explains how we collect, use, and
            protect your information when you visit our website or engage with
            our services, including Government Tenders and Real Estate
            inquiries.
          </p>

          <h3>2. Information We Collect</h3>
          <p>We may collect personal information such as:</p>
          <ul>
            <li>Name, email address, and phone number (via Contact Forms).</li>
            <li>Company details and GST numbers (via Vendor Registration).</li>
            <li>Resume and employment history (via Career Applications).</li>
          </ul>

          <h3>3. How We Use Your Information</h3>
          <p>
            We use this data to:
            <ul>
              <li>Process tender applications and vendor registrations.</li>
              <li>Respond to project inquiries and consultation requests.</li>
              <li>Comply with RERA and other legal obligations.</li>
            </ul>
          </p>

          <h3>4. Data Protection</h3>
          <p>
            We implement industry-standard security measures to protect your
            data. However, no transmission over the internet is completely
            secure.
          </p>

          {/* Add more sections as needed */}
        </div>
      </div>
    </div>
  );
}
