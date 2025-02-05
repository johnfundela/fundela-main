import ButtonComponent from "@/components/button-component";
import CardComponent from "@/components/card-component";
import { FadeInWhenVisibleLeft } from "@/components/motion/fade-in-when-visible";
import Image from "next/image";

type Prop = {
  title: string;
};

const HowItWorks = ({ title }: Prop) => {
  const howToApply = [
    {
      title: "Apply Online",
      message:
        "Spend just 5 minutes to fill out a simple and hassle-free application online. It's quick, straightforward, and designed to get you one step closer to securing the funds your business needs.",
      image: "/fillup-frame.png",
    },
    {
      title: "Get Approved",
      message:
        "Review your options with a knowledgeable and trusted account manager who will provide personalized guidance to help you make the best decision for your business.",
      image: "/confirmed-frame.png",
    },
    {
      title: "Receive Funds",
      message:
        "Get the financial support your business needs without the long wait—receive the funds you deserve within just 24 hours, allowing you to focus on what truly matters: growing and managing your business efficiently.",
      image: "/add-income-frame.png",
    },
  ];

  return (
    <div
      className="p-2 xl:p-40 py-10 xl:py-20 px-4 xl:px-20"
      style={{
        position: "relative",
        backgroundImage:
          "linear-gradient(to top, #1f2937,rgb(56, 60, 71),rgb(111, 112, 119),rgb(186, 186, 190), #eeeeee)"
          // "linear-gradient(to right, #1F2937,rgb(40, 53, 75),rgb(58, 76, 110),rgb(88, 107, 158), rgb(52, 68, 99),rgb(39, 51, 71), #1F2937)",
      }}
    >
      <FadeInWhenVisibleLeft>
        <div
          className=" justify-center items-center hidden xl:flex mt-6"
          style={{
            marginTop: "50px",
            width: "85%",
            position: "absolute",
            zIndex: 1,
            transform: "rotate(-17deg)",
          }}
        >
          <Image
            height={400}
            width={400}
            src="/iphone-15.png"
            alt="iphone 15"
          ></Image>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 flex flex-col">
            <span className="text-3xl font-semibold text-[#1F2937]">{title}</span>
            <span className="text-1xl font-semibold text-[#1F2937] mt-4">
              Fast, simple, and hassle-free financing—designed to meet your
              business needs.
            </span>
          </div>
          <div className="col-span-2 xl:col-span-1 flex justify-center items-center flex-col">
            <CardComponent className="bg-teal-400/80 xl:p-10">
              <div className="w-full flex items-center flex-col p-4">
                <div className="flex justify-start w-full items-center">
                  <span
                    className="material-symbols-outlined text-white color-white ml-4"
                    style={{ fontSize: 90 }}
                  >
                    contact_mail
                  </span>
                  <p className="font-bold text-xl text-white ml-4">
                    {howToApply[0].title}
                  </p>
                </div>
                <div>
                  <p className="text-white xl:w-6/12 mx-6">
                    {howToApply[0].message}
                  </p>
                </div>
              </div>
              <div className="w-full flex items-center flex-col p-4">
                <div className="flex justify-start w-full items-center">
                  <span
                    className="material-symbols-outlined text-white color-white ml-4"
                    style={{ fontSize: 100 }}
                  >
                    fact_check
                  </span>
                  <p className="font-bold text-xl text-white ml-4">
                    {howToApply[1].title}
                  </p>
                </div>
                <div>
                  <p className="text-white xl:w-6/12 mx-6">
                    {howToApply[1].message}
                  </p>
                </div>
              </div>
              <div className="w-full flex xl:hidden items-center flex-col p-4">
                <div className="flex justify-start w-full items-center">
                  <span
                    className="material-symbols-outlined text-white color-white ml-4"
                    style={{ fontSize: 90 }}
                  >
                    handshake
                  </span>
                  <p className="font-bold text-xl text-white ml-4">
                    {howToApply[2].title}
                  </p>
                </div>
                <div>
                  <p className="text-white xl:w-6/12 mx-6">
                    {howToApply[2].message}
                  </p>
                </div>
                <div className="w-full pt-10 flex justify-center xl:justify-start z-10">
                  <a href="/business-financing-application">
                    <ButtonComponent size="lg" color="white">
                      Lets Get Started
                    </ButtonComponent>
                  </a>
                </div>
              </div>
            </CardComponent>
          </div>

          <div className="col-span-2 xl:col-span-1 justify-center items-center flex-col hidden xl:flex">
            <CardComponent className="bg-teal-400/80 p-10 h-full">
              <div className="w-full flex items-center flex-col " style={{ marginLeft: "7rem" }}>
                <div className="flex justify-start w-full items-center">
                  <span
                    className="material-symbols-outlined text-white color-white ml-4"
                    style={{ fontSize: 90 }}
                  >
                    handshake
                  </span>
                  <p className="font-bold text-xl text-white ml-4">
                    {howToApply[2].title}
                  </p>
                </div>
                <div>
                  <p className="text-white xl:mr-40">{howToApply[2].message}</p>
                </div>
                <div className="w-full pt-10 flex justify-center xl:justify-start  z-10">
                  <a href="/business-financing-application">
                    <ButtonComponent size="lg" color="white">
                      Lets Get Started
                    </ButtonComponent>
                  </a>
                </div>
              </div>
            </CardComponent>
          </div>
        </div>
      </FadeInWhenVisibleLeft>
    </div>
  );
};

export default HowItWorks;
