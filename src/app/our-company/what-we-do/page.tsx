import { Metadata } from "next";
import TrustPilot from "@/components/trust-pilot";
import {
  FadeInWhenVisibleLeft,
} from "@/components/motion/fade-in-when-visible";
import CommonHero from "@/components/commons/common-hero";
import HowItWorks from "@/app/home/how-it-works";
import ExploreMoreSolution from "@/components/commons/explore-more-solution";
import WhyChooseFundela2 from "@/components/commons/why-choose-fundela2";
import { ImageComponent } from "@/components/commons/image-component";
import { FadeInLeft, FadeInRight } from "@/components/motion/fade-in";
export const metadata: Metadata = {
  title: "What we do",
  description:
    "We are here to help small and medium sized businesses expand in both reach and revenue!",
};

export default function WhatWeDo() {
  const fourPillar = [
    {
      image: "key-round.png",
      message: "Turnkey Funding Process",
    },
    {
      image: "puzzle-round.png",
      message: "Custom Tailored Solutions",
    },
    {
      image: "receive-round.png",
      message: "Experienced Team of Experts",
    },
    {
      image: "people-round.png",
      message: "Large Network of Funders",
    },
  ];

  return (
    <>
      <CommonHero
        background={"young-colleagues-work-office-using-computers.png"}
        title={"What we do"}
        message={
          "We are here to help small and medium sized businesses expand in both reach and revenue!"
        }
        showRedirect={false}
      ></CommonHero>
      {/* our-mission-bg.png */}
      <div
        className="grid grid-cols-2 p-4 2xl:px-20 justify-center items-center text-white bg-[#161C2D] py-12 pt-20"
        style={{
          backgroundImage: `url(/our-mission-bg.png)`,
          backgroundSize: "cover",
          backgroundPositionY: "35%",
        }}
      >
        <div className="col-span-2 lg:col-span-1 p-2">
          <FadeInLeft>
            <ImageComponent
              divClassName="w-full h-[300px] lg:h-[600px]"
              src="investment-growth.png"
            ></ImageComponent>
          </FadeInLeft>
        </div>
        <div className="col-span-2 lg:col-span-1 flex flex-col items-center 2xl:items-start">
          <FadeInRight>
            <p className="mb-12 text-xl p-2 bg-teal-700 rounded-lg w-fit font-bold px-20">
              Our Mission
            </p>
          </FadeInRight>
          <span className="text-2xl">
            At Fundela, we are dedicated to providing the most competitive
            financing options the business funding space can offer.
          </span>
          <p className="text-2xl mt-4">
            We work hand in hand with our clients in an effort to craft a custom
            tailored solution that works well for them and their business.
          </p>
        </div>
      </div>
      <div className="py-16 grid grid-cols-2 px-6 2xl:px-40 py-2 md:py-20">
        <div className="col-span-2 lg:col-span-1">
          <ImageComponent
            src="Main image.png"
            divClassName="h-[300px] lg:h-[600px] w-full"
          ></ImageComponent>
        </div>
        <div className="col-span-2 lg:col-span-1">
          <FadeInWhenVisibleLeft>
            <div className="flex flex-col items-center lg:items-start">
              <p className="text-xl text-teal-700 px-6 bg-teal-100 w-fit rounded">
                4 PILLARS OF SUCCESS
              </p>
              <p className="text-3xl font-bold my-6  ">
                We are uniquely qualified to find our clients the cheapest loan
                at the lowest rates.
              </p>
              <div>
                {fourPillar.map((item, index) => (
                  <div key={`four-pillars-${index}`}>
                    <div className="flex p-2 items-center">
                      <ImageComponent
                        src={item.image}
                        divClassName="h-20 w-20 object-cover"
                      ></ImageComponent>

                      <p className="ml-4 text-center font-semibold text-black text-start text-2xl">
                        {item.message}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeInWhenVisibleLeft>
        </div>
      </div>
      <HowItWorks title={"How It Works"}></HowItWorks>
      <WhyChooseFundela2></WhyChooseFundela2>
      <ExploreMoreSolution hidden={[6, 7, 8, 9]} />
      <TrustPilot></TrustPilot>
    </>
  );
}
