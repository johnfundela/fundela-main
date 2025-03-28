import { Metadata } from "next";
import { FadeIn, FadeInLeft } from "@/components/motion/fade-in";
import ContactUsForm from "@/components/jot-form/contact-us-form";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Fundela Privacy Policy",
};

export default function PrivacyPolicy() {
  return (
    <>
      <FadeIn>
        <div className="grid grid-cols-2 gap-4 p-10 xl:p-20 bg-black text-white text-center xl:text-start">
          <div className="flex flex-col justify-center col-span-2 xl:col-span-1">
            <FadeInLeft>
              <h1 className="text-5xl font-semibold">Privacy Policy</h1>
            </FadeInLeft>
          </div>
        </div>
      </FadeIn>
      <div className="p-2 flex justify-center 2xl:py-10">
        <div className="2xl:w-6/12 text-lg">
          <p className="font-bold">Effective Date:</p>
          <p className="mb-4">March 28th, 2025 | Last Updated: March 28th, 2025</p>

          <p className="font-bold">Protecting Your Privacy</p>
          <p className="my-4">
            Fundela (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) values your privacy. This Privacy Policy explains how we collect, use, share, and protect your information when you interact with our website (the &quot;Site&quot;), services, or text messaging. By using our Site or services, you agree to the terms in this Privacy Policy.
          </p>

          <p className="font-bold">1. Information We Collect</p>
          <p className="font-semibold my-4">Personally Identifiable Information (PII)</p>
          <p>We may collect the following information you voluntarily provide, including via text message or forms:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Full name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Mailing address</li>
            <li>Date of birth</li>
            <li>Social Security Number (if applicable)</li>
            <li>Bank statements or financial documents (if applicable)</li>
            <li>Government-issued identification</li>
          </ul>

          <p className="font-semibold my-4">Non-Personally Identifiable Information (Non-PII)</p>
          <p>We also automatically collect technical data, such as:</p>
          <ul className="list-disc list-inside mb-4">
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Device type</li>
            <li>Operating system</li>
            <li>Site usage data (e.g., pages visited, time on site)</li>
            <li>Interaction with SMS/text messaging services</li>
          </ul>

          <p className="font-bold">2. How We Use the Information</p>
          <ul className="list-disc list-inside mb-4">
            <li>To deliver, improve, and maintain our services</li>
            <li>To communicate with you, including via email or SMS, regarding services or offers</li>
            <li>For customer support and to respond to inquiries</li>
            <li>For internal analytics and website optimization</li>
            <li>To comply with legal and regulatory requirements</li>
          </ul>

          <p className="font-bold">3. Sharing Your Information</p>
          <p className="my-4">
            We <strong>do not sell</strong> your personal information.
          </p>
          <p>We may share your information with third parties under the following circumstances:</p>
          <ul className="list-disc list-inside mb-4">
            <li>With service providers who assist us in operating our Site or services</li>
            <li>When required by law or legal process</li>
            <li>In connection with a business transaction (e.g., merger, acquisition)</li>
          </ul>
          <p>All third parties are required to safeguard your data in accordance with this policy.</p>

          <p className="font-bold">4. Cookies and Tracking Technologies</p>
          <p>We may use cookies, web beacons, and similar technologies to:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Improve your experience on our Site</li>
            <li>Provide relevant content or ads</li>
            <li>Analyze usage patterns</li>
          </ul>
          <p>You can manage your cookie preferences through your browser settings.</p>

          <p className="font-bold">5. Data Security</p>
          <p>We implement reasonable administrative, technical, and physical safeguards to protect your data. However, no method of internet transmission or electronic storage is 100% secure.</p>

          <p className="font-bold">6. Your Rights & Choices</p>
          <p>Depending on your jurisdiction, including California, you may have rights regarding your personal information:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Request access to the data we collect</li>
            <li>Request correction or deletion of your data</li>
            <li>Opt out of marketing communications</li>
            <li>Limit the use of sensitive personal information</li>
            <li>Designate an authorized agent to make requests on your behalf</li>
          </ul>
          <p>
            To exercise these rights, contact us at:{" "}
            <a href="mailto:emails@fundela.com">emails@fundela.com</a>
          </p>

          <p className="font-bold">7. California Privacy Notice</p>
          <p>In accordance with the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA), we provide the following additional information:</p>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Categories of Personal Information Collected:</strong> Identifiers (name, email, phone), financial data (bank statements), internet activity (site usage), and geolocation data.
            </li>
            <li>
              <strong>Sources:</strong> Information you provide directly, your device/browser, and interactions with our services.
            </li>
            <li>
              <strong>Purpose of Collection:</strong> As described above in Section 2.
            </li>
            <li>
              <strong>Sharing or Selling:</strong> We do not sell personal information. Some site activity may be shared with advertising or analytics partners, which may constitute &quot;sharing&quot; under CCPA.
            </li>
            <li>
              <strong>Retention:</strong> We retain data as long as needed to fulfill the purposes stated above and comply with legal obligations.
            </li>
            <li>
              <strong>CCPA Rights:</strong> You have the right to access, delete, or correct your information, and to opt out of sharing.
            </li>
          </ul>

          <p className="font-bold">8. External Links</p>
          <p>Our Site may link to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to read their policies.</p>

          <p className="font-bold">9. Children&apos;s Privacy</p>
          <p>Our services are not intended for children under 13. We do not knowingly collect personal data from children.</p>

          <p className="font-bold">10. Updates to This Policy</p>
          <p>We may update this Privacy Policy periodically. Any changes will be reflected by the &quot;Last Updated&quot; date at the top. Continued use of our services after updates constitutes acceptance.</p>

          <p className="font-bold">11. Contact Us</p>
          <p>
            For questions about this Privacy Policy or your data rights, email us at:{" "}
            <a href="mailto:emails@fundela.com">emails@fundela.com</a>
          </p>
        </div>
      </div>
      <div>
        <ContactUsForm />
      </div>
    </>
  );
}
