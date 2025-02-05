import { FadeInWhenVisibleLeft } from "@/components/motion/fade-in-when-visible";
import Image from "next/image";

const WhyFundela = () => {
  const whyUs = [
    {
      icon: "extension",
      subject: "Industry Experties",
      message:
        "Our seasoned experts have years of experience supporting businesses at every growth stage.",
    },
    {
      icon: "handshake",
      subject: "Customize Solution",
      message:
        "We secure the best financing options to meet your specific needs.",
    },
    {
      icon: "route",
      subject: "Clear Guidance",
      message: "Enjoy a smooth and transparent process from start to finish.",
    },
  ];

  return (
    <div
      className="p-2 xl:p-40 pt-6 xl:pt-20 pb-6 xl:pb-20"
      style={{ background: "#1F2937" }}
    >
      <FadeInWhenVisibleLeft>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col col-span-2 xl:col-span-1 mb-10">
            <span className="text-3xl text-teal-500 font-semibold text-center xl:text-start">
              Why Fundela?
            </span>
            <span className="text-2xl xl:text-4xl font-bold mx-6 2xl:mx-1 mt-6 text-white text-center xl:text-start">
              Choose Fundela for tailored financial solutions designed to propel
              your business forward.
            </span>
            <p className="text-xl text-white pt-6 text-center 2xl:text-start mt-10">
              Why Partner With Us?
            </p>
            {whyUs.map((item, index) => (
              <div
                className="flex mt-6 mx-6 lg:mx-40 xl:mx-1 items-center justify-start"
                key={index + "_why-us"}
              >
                <span
                  className="material-symbols-outlined text-teal-500 mr-6"
                  style={{ fontSize: 70 }}
                >
                  {item.icon}
                </span>
                <div>
                  <p className="text-white font-bold"> {item.subject}</p>
                  <p className="text-white xl:pr-40">{item.message}</p>
                </div>
              </div>
            ))}
          </div>
          <div
            className="col-span-2 xl:col-span-1 h-96 xl:h-full"
            style={{ width: "100%", position: "relative" }}
          >
            <Image
              style={{ objectFit: "contain" }}
              src="/male-female-business-people-working-tablet-office.png"
              fill
              alt=""
            />
          </div>
        </div>
      </FadeInWhenVisibleLeft>
    </div>
  );
};

export default WhyFundela;
