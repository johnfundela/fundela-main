import { FadeInWhenVisibleLeft } from "../motion/fade-in-when-visible";
import Image from "next/image";
import ButtonComponent from "../button-component";
import salesRep from "../../../public/sales-representative.png";
import seniorAccount from "../../../public/senior-account-specialist.png";
import digitalAd from "../../../public/degital-advertising-specialist.png";
import contentStrat from "../../../public/content-stategist.png";
import adminAssistant from "../../../public/administrative-assistant.png";
import gapDes from "../../../public/graphic-designer.png";

const HiringPositions = () => {
  const jobs = [
    {
      title: "Sales Representative",
      image: salesRep,
    },
    {
      title: "Senior Account Specialist",
      image: seniorAccount,
    },
    {
      title: "Digital Advertising Specialist",
      image: digitalAd,
    },
    {
      title: "Content Strategist",
      image: contentStrat,
    },
    {
      title: "Administrative Assistant",
      image: adminAssistant,
    },
    {
      title: "Graphic Designer",
      image: gapDes,
    },
  ];

  return (
    <div className={`bg-gray-100 p-2 lg:p-40 py-6 lg:py-20`}>
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between text-black text-center lg:text-start ">
        <span className={`text-4xl font-semibold w-full md:w-6/12 2xl:w-7/12`}>
          Positions We Are Currently Hiring For
        </span>
        <span className="text-normal text-gray mt-5 w-full lg:w-5/12 2xl:w-4/12 text-center lg:text-end">
          Join our growing team and take your career to the next level! We’re
          excited to announce the following opportunities:
        </span>
      </div>
      <div className="mt-2 justify-center w-full flex justify-center flex-wrap">
        {jobs.map((item, index) => {
          return (
            <div
              className="p-2 w-full md:w-6/12 2xl:w-4/12"
              key={index + "_programs"}
            >
              <FadeInWhenVisibleLeft>
                <div className="flex flex-col items-center 2xl:text-start text-black p-4">
                  <Image
                    src={item.image}
                    alt="icon"
                    className="relative object-cover "
                  ></Image>
                  <p className="mt-2 text-lg 2xl:text-xl mb-2">{item.title}</p>
                </div>
              </FadeInWhenVisibleLeft>
            </div>
          );
        })}
        <span className="w-full 2xl:w-6/12 text-center">
          How to apply? If you are as passionate as we are about helping
          businesses aqcuire the capital they need to supercharge their growth,
          we would love to hear from you! Click the link below, fill out the
          form, and we’ll be in touch soon.
        </span>
      </div>
      <div className="flex justify-center mt-6">
        <ButtonComponent size="lg" color="white">Apply Now</ButtonComponent>
      </div>
    </div>
  );
};

export default HiringPositions;
