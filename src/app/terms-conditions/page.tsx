import { Metadata } from "next";
import { FadeIn, FadeInLeft } from "@/components/motion/fade-in";
import ContactUsForm from "@/components/jot-form/contact-us-form";
export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Fundela Terms & Conditions",
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
          <p className="font-bold">Terms & Conditions</p>
          <p className="my-4">
          By using our website and services, including text messaging, you agree to these terms.
          </p>
          <ul className="pl-1">
            <li>
              <p className="font-bold">1. Introduction</p>
              <span className="my-2">
                <p className="my-4">
                These Terms and Conditions govern your use of Fundela website and our services. If you
                disagree, please do not use our website or services.
                </p>
              </span>
        
          
            </li>
            <li>
              <p className="font-bold">2. Using Our Website</p>
              <span className="my-2">
              <p className="my-4"></p>
                <p className="font-bold">Age Restriction</p>
                You must be at least 18 years old to use our website and services,
                including text messaging.
              </span>
              <span className="my-2">
              <p className="my-4"></p>
                <p className="font-bold">Legal Use Only</p>
                You may not use our website or text messaging for any illegal or
unauthorised purpose. You must obey all relevant laws.
              </span>
              <span className="my-2">
              <p className="my-4"></p>
                <p className="font-bold">Changes</p>
                We may modify, stop, or remove any part of our website, services, or
content without notice.
              </span>
              <p className="my-4"></p>
              <span className="my-2">
                <p className="font-bold">Your Responsibility</p>
                All text, images, logos, software, videos, and text message content on our website are
protected by copyright and other laws. You may not copy, distribute, change, or use any of
our content without our written permission.
<p className="my-4"></p>
              </span>
            </li>
            <li>
              <p className="font-bold">3. Intellectual Property</p>
              <p className="my-4"></p>
              All text, images, logos, software, videos, and text message content on our website are
              protected by copyright and other laws. You may not copy, distribute, change, or use any of
              our content without our written permission.
              <p className="my-4"></p>
            </li>
            <li>
              <p className="font-bold">4. Privacy</p>
              <p className="my-4"></p>
              <p>
              <span className="font-semibold"> Privacy Policy: </span>
              Our Privacy Policy explains how we collect, use, and protect your
              data, including information you share through text messages. By using our website
              and text messaging, you agree to our Privacy Policy.
              </p>
              <p className="my-4">
                <span className="font-semibold"> No Data Policy: </span>
                We do not share or sell your personal information, including the
                content of your text messages.
              </p>
            </li>
            <li>
              <p className="font-bold">5. No Guarantees</p>
              <p className="my-4"></p>
              <p>
              <span className="font-semibold"> Information: </span>
              Information on our website is for general knowledge only. We do not
              guarantee it is accurate, complete, or reliable.
              </p>
              <p className="my-4">
                <span className="font-semibold"> No Liability: </span>
                We are not responsible for any losses or problems that may occur from
using our website, text messaging services, or any information they provide.
              </p>
            </li>
            <li>
              <p className="font-bold">7. Limitation of Liability</p>
              <p className="my-4"></p>
              As allowed by law, Fundela is not liable for any damages (direct, indirect, or otherwise)
caused by using our website, services, or text messaging.
              <p className="my-4"></p>
            </li>
            <li>
              <p className="font-bold">8. Your Responsibility to Protect Us</p>
              <p>
              You will protect Fundela including its officers, directors, employees, and affiliates, from any
              claims, losses, or expenses (including legal costs) arising from your use of our website or if
              you break these Terms and Conditions.
              </p>
            </li>
            <p className="my-4"></p>
            <li>
              <p className="font-bold">9. Laws and Disputes</p>
              <p className="my-4"></p>
              <p>
              These Terms and Conditions are governed by the laws of Palm Beach County, Florida. Any
              disputes relating to these terms will be resolved in the courts of Palm Beach County, Florida.
              </p>
            </li>
            <p className="my-4"></p>
            <li>
              <p className="font-bold">10. Changes to These Terms</p>
              <p>
              We may change these Terms and Conditions at any time. If we do, your continued use of
              our website and services, including text messaging, means you accept the updated terms.
              </p>
            </li>
            <p className="my-4"></p>
            <li>

              <p className="font-bold">11. Contact</p>
              For questions about these Terms and Conditions
            </li>
            <li>
              <p>please contact us at:</p>
              <p className="my-4"></p>
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
