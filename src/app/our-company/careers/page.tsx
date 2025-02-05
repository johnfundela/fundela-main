import { Metadata } from "next";
import CommonHero from "@/components/commons/common-hero";
import WhyWorkAtFundela from "@/components/commons/why-work-at-fundela";
import HiringPositions from "@/components/commons/hiring-positions";
import bg1 from "../../../../public/fundela-group-meeting-and-man-calling.png";
import Image from "next/image";
import { FadeIn} from "@/components/motion/fade-in";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "At Fundela, we believe that access to credit should be simple, transparent, and tailored to your unique needs. ",
};

export default function WhatWeDo() {
  return (
    <>
      <CommonHero
        background={"young-colleagues-meeting-and-agree.jpg"}
        title={"Help Us Fuel Business Growth"}
        message={
          "Join our team of talented professionals and help us define the future of business financing."
        }
      ></CommonHero>
      <div className="lg:grid  grid-cols-2">
        <div className="flex">
          <Image
            src={bg1}
            alt="men calling"
            className="object-cover h-full w-full"
          ></Image>
        </div>
        <div className="col-span-2 md:col-span-1 bg-[#1E1E1E] text-white p-10 flex flex-col justify-center h-full">
          <FadeIn>
            <span className="font-bold text-4xl text-teal-500">
              Our Mission
            </span>

            <p className=" text-3xl my-10">
              At Fundela, we are dedicated to providing the most competitive
              financing options the business funding space can offer. We work
              hand in hand with our clients in an effort to craft a custom
              tailored solution that works well for them and their business.
            </p>
          </FadeIn>
        </div>
      </div>
      <WhyWorkAtFundela />
      <HiringPositions />
    </>
  );
}
