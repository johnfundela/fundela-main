import { Metadata } from "next";
import { FadeIn, FadeInLeft } from "@/components/motion/fade-in";
import ContactUsForm from "@/components/jot-form/contact-us-form";
import { MapComponent } from "@/components/commons/map-component";
import { MapProvider } from "@/providers/map-provider";
export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "At Fundela, we believe that access to credit should be simple, transparent, and tailored to your unique needs. ",
};

export default function WhatWeDo() {
  const bgLaptopHand = {
    backgroundImage: "url(/men-calling.jpg)",
    backgroundBlendMode: "overlay",
    backgroundSize: "cover",
    backgroundPositionY: "45%",
    backgroundColor: "#00000078",
  };

  return (
    <>
      <MapProvider>
        <FadeIn>
          <div
            style={{ ...bgLaptopHand, height: "40vh" }}
            className="grid grid-cols-2 gap-4 p-10 xl:p-20 "
          >
            <div className="flex flex-col justify-center col-span-2 xl:col-span-1">
              <FadeInLeft>
                <div className="flex flex-col justify-center">
                  <span className="text-5xl  text-white font-semibold  text-center xl:text-start">
                    Contact Us
                  </span>
                </div>
              </FadeInLeft>
            </div>
          </div>
          <div>
            <ContactUsForm></ContactUsForm>
          </div>
          <MapComponent></MapComponent>
        </FadeIn>
      </MapProvider>
    </>
  );
}
