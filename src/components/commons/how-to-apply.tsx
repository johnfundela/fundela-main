import Image from "next/image";
import { FadeInWhenVisibleLeft } from "../motion/fade-in-when-visible";
import girlCalling from "../../../public/girl-calling.png";

type HowToApply = {
  title: string;
  message: string;
  image: string;
};

type Prop = {
  title: string;
  howToApply?: HowToApply[];
};

const HowToApply = ({
  title,
  howToApply = [
    {
      title: "Apply Online",
      message: "Take 5 minutes to submit a quick and easy application online",
      image: "/fillup-frame.png",
    },
    {
      title: "Get Approved",
      message:
        "Review your options with one of our experienced and trusted account managers",
      image: "/confirmed-frame.png",
    },
    {
      title: "Receive Funds",
      message: "Receive the funds your business deserves within 24 hours",
      image: "/add-income-frame.png",
    },
  ],
}: Prop) => {
  return (
    // how-to-apply-bg
    <FadeInWhenVisibleLeft>
      <div
        className="p-2 xl:p-40 py-10 xl:py-10 px-4 2xl:px-40"
        style={{
          backgroundImage: `url(/how-to-apply-bg.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 lg:col-span-1 flex flex-col justify-center">
            <span className="col-span-2 text-3xl font-semibold pb-4 text-center xl:text-start text-[#1F2937]">
              {title}
            </span>
            <div className="flex mt-10 w-full flex-col justify-center items-center lg:items-start">
              <ol className="overflow-hidden space-y-6">
                {howToApply.map((item, index) => (
                  <li
                    key={`how-to-apply-steps_${index}`}
                    className="flex relative after:content-['']  after:w-0.5 after:h-full  after:bg-teal-600 after:inline-block after:absolute after:-bottom-8 2xl:after:-bottom-10 after:left-4 lg:after:left-5 "
                  >
                    <span className=" w-8 h-8 aspect-square bg-teal-400 border-2 border-transparent rounded-full flex justify-center items-center mr-3 text-sm text-white lg:w-10 lg:h-10">
                      {index + 1}
                    </span>

                    <div className="w-full block">
                      <div className="ml-10 mb-2">
                        <p className="font-bold text-3xl">{item.title}</p>
                        <p className="text-2xl">{item.message}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1 flex items-center flex-col">
            <Image src={girlCalling} alt="girl calling"></Image>
          </div>
        </div>
      </div>
    </FadeInWhenVisibleLeft>
  );
};

export default HowToApply;
