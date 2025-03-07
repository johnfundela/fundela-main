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
          <p className="font-bold">Protecting Your Privacy</p>
          <p className="my-4">
            We value your privacy. This Privacy Policy outlines how we collect, utilize, share, and
            safeguard your information when you use our website (&quot;Site&quot;) and services, including
            text messaging. By using our services, you agree to the terms of this policy.
          </p>
          <p className="font-bold">What We Collect</p>
          <p className="my-4">
            <span className="font-semibold">Personally Identifiable Information (PII):</span> This
            includes your name, email, address, phone number, and any other details you directly
            provide, even through a text message.
          </p>
          <p className="my-4">
            <span className="font-semibold">Non-Personally Identifiable Information (Non-PII):</span>{" "}
            Technical data like your IP address, browser, device details, website usage, including
            how you use our text messaging.
          </p>
          <p className="font-bold">How We Use Your Data</p>
          <p className="my-4">
            <span className="font-semibold">Service Delivery:</span> To provide and enhance our
            services, including our text messaging.
          </p>
          <p className="my-4">
            <span className="font-semibold">Communication:</span> Responding to your questions
            (including those via text), and for marketing if you opt-in.
          </p>
          <p className="my-4">
            <span className="font-semibold">Analytics:</span> Understanding how you use our Site and
            text features to make improvements.
          </p>
          <p className="my-4">
            <span className="font-semibold">Legal Compliance:</span> Fulfilling legal requirements.
          </p>
          <p className="font-bold">We Do Not Sell Your Data</p>
          <p className="my-4">Your information, including that shared via text, is never sold.</p>
          <p className="font-bold">Security Measures</p>
          <p className="my-4">
            We take reasonable steps to protect your data against unauthorized access or misuse.
            However, no internet-based system is 100% secure.
          </p>
          <p className="font-bold">Third-Parties</p>
          <p className="my-4">
            We only share your information when legally obligated or to provide necessary services.
            We ensure they handle your data securely and in line with this Privacy Policy.
          </p>
          <p className="font-bold">Cookies, etc.</p>
          <p className="my-4">
            We may use cookies and similar technologies for better user experience, analytics, and
            personalization. You can manage these settings in your browser.
          </p>
          <p className="font-bold">External Links</p>
          <p className="my-4">
            We may link to other websites. Please review their privacy policies as we are not
            responsible for their practices.
          </p>
          <p className="font-bold">Children&apos;s Privacy</p>
          <p className="my-4">
            Our services, including texting, are not for children under 13. We do not intentionally
            gather their data.
          </p>
          <p className="font-bold">Updates</p>
          <p className="my-4">
            This Privacy Policy may change. The &quot;Last Updated&quot; date reflects revisions.
            Continued use of our services means you accept any changes.
          </p>
          <p className="font-bold">Questions?</p>
          <p className="my-4">
            If you have questions about this policy or our data practices related to text messaging,
            contact us at: <a href="mailto:emails@fundela.com">emails@fundela.com</a>
          </p>
        </div>
      </div>
      <div>
        <ContactUsForm />
      </div>
    </>
  );
}
