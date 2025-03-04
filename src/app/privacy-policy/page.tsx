import { Metadata } from "next";
import { FadeIn, FadeInLeft } from "@/components/motion/fade-in";
import ContactUsForm from "@/components/jot-form/contact-us-form";
export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Fundela Privacy Policy",
};

export default function WhatWeDo() {
  const bgLaptopHand = {
    backgroundImage: "url(/man-suit-using-tab.jpg)",
    backgroundBlendMode: "overlay",
    backgroundSize: "cover",
    backgroundPositionY: "45%",
    backgroundColor: "#00000078",
  };

  return (
    <>
      <FadeIn>
        <div
          style={{ ...bgLaptopHand, height: "40vh" }}
          className="grid grid-cols-2 gap-4 p-10 xl:p-20 "
        >
          <div className="flex flex-col justify-center col-span-2 xl:col-span-1">
            <FadeInLeft>
              <div className="flex flex-col justify-center">
                <span className="text-5xl  text-white font-semibold  text-center xl:text-start">
                  Privacy Policy
                </span>
              </div>
            </FadeInLeft>
          </div>
        </div>
      </FadeIn>
      <div className="p-2 flex justify-center 2xl:py-10">
        <div className="2xl:w-6/12 text-lg">
          <p className="font-bold">Privacy Policy</p>
          <p className="font-bold">Effective Date: February 28, 2025</p>
          <p className="my-4">
            This website is operated by Fundela LLC (“Fundela”). We prioritize
            the privacy of our visitors and customers and are committed to
            safeguarding your personal information. This Privacy Policy outlines
            how we handle the information collected when you use our website,
            features, and services (collectively referred to as &quot;Services&quot;).
          </p>
          <p className="my-4">
            Fundela assists businesses in securing working capital. This Privacy
            Policy applies to anyone who interacts with our Services.
          </p>
          <p className="my-4">
            We encourage you to review Fundela’s Terms of Use. Where necessary
            by law, we will request your consent to collect, use, and share your
            personal information as described below. Otherwise, by using our
            Services, you consent to the collection and use of your data as
            described in this Privacy Policy.
          </p>
          <ul className="pl-1">
            <li>
              <p className="font-bold">1. Information We Collect</p>
              <span className="my-2">
                <p className="font-bold">1.1 Personal Information</p>
                <p className="my-4">
                <span className="font-semibold">Personally Identifiable Information (PII): </span>
                This includes your name, email, address, phone
                number, and any other details you directly provide, even through a text message. 
                </p>
                <p className="my-4">
                <span className="font-semibold">Non-Personally Identifiable Information (Non-PII): </span>
                Technical data like your IP address,
                browser, device details, website usage, including how you use our text messaging.
                </p>
                
                <p className="my-4">
                  Fundela may collect personal data about business owners as
                  part of the application process for capital. &quot;Personal
                  Information&quot; refers to data that can identify or link back to
                  an individual. This does not include:
                </p>
                <p className="my-4">
                  Publicly available information from government sources.
                </p>
                <p className="my-4">
                  Deidentified or aggregated data that cannot be linked back to
                  you.
                </p>
                <p className="my-4">
                  We collect certain information to process your funding request
                  or provide services. Failure to provide required information
                  may prevent us from offering services.
                </p>
              </span>
              <span className="my-2">
                <p className="font-bold">1.2 Types of Personal Information</p>
                <p className="my-4">
                  We may collect the following information from you:
                </p>
                <p className="my-4">
                  <span className="font-semibold">
                    Identification Information:
                  </span>
                  Name, contact details (e.g., email, phone), address, IP
                  address, and Social Security number.
                </p>
                <p className="my-4">
                  <span className="font-semibold">Business Information: </span>
                  EIN, legal documents for your business, ownership details.
                </p>
                <p className="my-4">
                  <span className="font-semibold">Financial Information: </span>
                  Bank account details, tax records, financial statements, and
                  credit scores.
                </p>
                <p className="my-4">
                  <span className="font-semibold">Transaction Details: </span>
                  Information related to the transactions you make on our
                  platform.
                </p>
                <p className="my-4">
                  <span className="font-semibold">
                    Employment Information:{" "}
                  </span>
                  Employment Information: Business role and job title.
                </p>
              </span>
              <span className="my-2">
                <p className="font-bold"> 1.3 Device Information</p>
                <p>
                  When using our Site or Services, we automatically collect
                  information about your device and browsing behavior. This
                  includes:
                </p>
                <p className="my-4">
                  <span className="font-semibold">Identifiers: </span>
                  Identifiers: IP addresses, geolocation, browser details, and
                  device type.
                </p>
                <p className="my-4">
                  <span className="font-semibold">Usage Data: </span>
                  Usage Data: Information on how you navigate and interact with
                  our Site, including cookies and similar technologies.
                </p>
              </span>
            </li>
            <li>
              <p className="font-bold">2. How We Collect Information</p>
              We gather information from you directly when you use our Services
              or from third-party services connected to our platform.
              <span className="my-2">
                <p className="font-bold">2.1 Application Process</p>
                During the funding application process, we collect personal and
                business information, including your name, contact details,
                business tax ID, and average monthly sales.
              </span>
              <span className="my-2">
                <p className="font-bold">2.2 Communications</p>
                We may use your contact information for both service-related
                communications and promotional messages. You can opt out of
                marketing messages, but service-related communications are
                necessary to use our platform.
              </span>
            </li>
            <li>
              <p className="font-bold">3. Use of Your Information</p>
              We use the data collected for various purposes, including:
              <p className="my-4">
                <span className="font-semibold"> Providing Services: </span>
                To process your application and verify your
                identity.
              </p>
              <p className="my-4">
                <span className="font-semibold">Service Delivery: </span>
                To provide and enhance our services, including our text messaging.
              </p>
              <p className="my-4">
                <span className="font-semibold">Communication: </span>
                Responding to your questions (including those via text), and for marketing if you opt-in.
              </p>
              <p className="my-4">
                <span className="font-semibold">Analytics: </span>
                Understanding how you use our Site and text features to make improvements.
              </p>
              <p className="my-4">
                <span className="font-semibold">Legal Compliance: </span>
                  Fulfilling legal requirements.
              </p>
              <p className="my-4">
                <span className="font-semibold">Customer Support: </span>
                To assist with inquiries or resolve issues.
              </p>
              <p className="my-4">
                <span className="font-semibold">Security: </span>
                To prevent fraud and secure your account.
              </p>
            </li>
            <li>
              <p className="font-bold">4. Sharing Information</p>
              <p>
              Your information, including that shared via text, is never sold. However, we may
                share data under the following conditions:
              </p>
              <p className="my-4">
                <span className="font-semibold"> Service Providers: </span>
                We share information with third parties who assist in delivering
                our services.
              </p>
              <p className="my-4">
                <span className="font-semibold">Legal Compliance: </span>
                We may disclose information to comply with legal obligations.
              </p>
              <p className="my-4">
                <span className="font-semibold">Business Transactions: </span>
                In the event of a merger or acquisition, your data may be
                transferred as part of the transaction.
              </p>
            </li>
            <li>
              <p className="font-bold">5. Third Parties</p>
              <p>
              We only share your information when legally obligated or to provide necessary services. We
              ensure they handle your data securely and in line with this Privacy Policy.
              </p>
            </li>
            <li>
              <p className="font-bold">6. Cookies</p>
              <p>
              We may use cookies and similar technologies for better user experience, analytics, and
              personalization. You can manage these settings in your browser.
              </p>
            </li>
            <li>
              <p className="font-bold">7. External Links</p>
              <p>
              We may link to other websites. Please review their privacy policies as we are not responsible for
              their practices.
              </p>
            </li>
            <li>
              <p className="font-bold">8. Children&#39;s Privacy</p>
              <p>
              Our services, including texting, are not for children under 13. We do not intentionally gather their data.
              </p>
            </li>
            <li>
              <p className="font-bold">9. Policy Updates</p>
              This Privacy Policy may change. The &quot;Last Updated&quot; date reflects revisions. Continued use of our services means you accept any changes.
            </li>
            <li>
              <p>please contact us at:</p>
              <p className="font-semibold">Fundela</p>
              <p>39 Broadway, Suite 650</p>
              <p>New York, NY 10006</p>
              <p>(833) 333-0020</p>
              <p>hello@fundela.com</p>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <ContactUsForm></ContactUsForm>
      </div>
    </>
  );
}
