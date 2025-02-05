import Image from "next/image";
import { FadeInWhenVisibleLeft } from "../motion/fade-in-when-visible";

const WhyChooseFundela2 = () => {
  return (
    <div className="bg-[#1f2937] grid grid-cols-2 text-white px-6 2xl:px-40 py-10 pb-20">
      <div className="col-span-2 xl:col-span-1 ">
        <FadeInWhenVisibleLeft>
          <p className="text-6xl font-bold my-12 text-center 2xl:text-start">
            Why Choose Fundela?
          </p>
          <ul className="list-disc pl-4">
            <li className="text-xl ">
              Flexible Credit Options: From personal to business needs, we offer
              solutions designed just for you.
            </li>
            <li className="text-xl mt-4">
              Transparency You Can Trust: No hidden fees or surprises—just clear
              terms and honest service.
            </li>
            <li className="text-xl mt-4">
              Fast and Simple Process: Accessing credit has never been easier
              with our streamlined application and approval processes.
            </li>
            <li className="text-xl mt-4">
              Customer-Centric Approach: Your goals are our priority, and we’re
              here to support you every step of the way.
            </li>
          </ul>
          <p className="text-xl font-semibold mt-4">
            At Fundela, we are more than a credit provider—we are your partner
            in building a brighter financial future. Let us help you turn your
            aspirations into achievements.
          </p>
        </FadeInWhenVisibleLeft>
      </div>
      <div className=" h-[400px] xl:h-full relative col-span-2 xl:col-span-1">
        <Image
          src="/man-pointing-smiling.png"
          fill
          alt="gentleman wearing suit"
          className="object-contain"
        ></Image>
      </div>
    </div>
  );
};

export default WhyChooseFundela2;
