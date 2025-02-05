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
          <p className="font-bold">Effective Date: October 7, 2024</p>
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
              <span className="my-2">
                <p className="font-bold">2.3 Third-Party Providers</p>
                We work with service providers, such as cloud storage or
                transaction monitoring services, who may collect or access your
                information on our behalf.
              </span>
            </li>
            <li>
              <p className="font-bold">3. Use of Your Information</p>
              We use the data collected for various purposes, including:
              <p className="my-4">
                <span className="font-semibold"> Providing Services: </span>
                Providing Services: To process your application and verify your
                identity.
              </p>
              <p className="my-4">
                <span className="font-semibold">Communications: </span>
                To send updates or marketing messages.
              </p>
              <p className="my-4">
                <span className="font-semibold">Customer Support: </span>
                To assist with inquiries or resolve issues.
              </p>
              <p className="my-4">
                <span className="font-semibold">Security: </span>
                To prevent fraud and secure your account.
              </p>
              <p className="my-4">
                <span className="font-semibold">Compliance: </span>
                To fulfill legal obligations.
              </p>
            </li>
            <li>
              <p className="font-bold">4. Sharing Information</p>
              <p>
                Fundela does not sell your personal information. However, we may
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
                transferred as part of the transaction.:
              </p>
            </li>
            <li>
              <p className="font-bold">5. Data Security </p>
              We take reasonable measures to protect your data from unauthorized
              access or misuse. While we work hard to secure your information,
              no method of transmission over the internet is entirely secure. In
              the event of a security breach, we will notify affected
              individuals as required by law.
            </li>
            <li>
              <p className="font-bold">6. Your Choices </p>
              You can opt out of receiving marketing emails by following the
              instructions in the emails or contacting us. You can also request
              access to, update, or delete your personal information by reaching
              out to our support team.
            </li>
            <li>
              <p className="font-bold">7. Policy Updates</p>
              We may update this Privacy Policy as needed. We will notify users
              of significant changes by posting the updated policy on our
              website with a new effective date.
            </li>
            <li>
              <p className="font-bold">8. Contact Information </p>
              <p>
                If you have any questions about this Privacy Policy or need to
                exercise your privacy rights,
              </p>
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
