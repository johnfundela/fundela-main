import Image from "next/image";
import { FadeInWhenVisibleLeft } from "../motion/fade-in-when-visible";
import CardComponent from "../card-component";
import { ImageComponent } from "./image-component";

const WhyWorkAtFundela = () => {
  const opportunities = [
    {
      title: "Collaborative Work Environment",
      image: "ph_handshake-light.png",
    },
    {
      title: "Comprehensive Training Programs",
      image: "healthicons_i-training-class.png",
    },
    {
      title: "Career Growth Opportunities",
      image: "fluent_arrow-growth-20-filled.png",
    },
    {
      title: "Competitive Compensation and Benifits",
      image: "ph_money.png",
    },
  ];

  return (
    <div className="bg-[#161C2D] grid grid-cols-2 text-white px-6  2xl:px-40 py-10">
      <div className="col-span-2 xl:col-span-1 ">
        <FadeInWhenVisibleLeft>
          <p className="text-4xl font-semibold my-12 text-center 2xl:text-start">
            Why Work at Fundela
          </p>
          <ul>
            {opportunities.map((item, index) => (
              <li
                className="text-xl mt-10 2xl:w-9/12"
                key={`oportunities_${index}`}
              >
                <CardComponent>
                  <div className="flex p-1 pl-4 items-center">
                    <ImageComponent
                      divClassName="h-8 w-[30px] h-[30px]"
                      src={item.image}
                    />
                    <span className="ml-4 font-semibold"> {item.title}</span>
                  </div>
                </CardComponent>
              </li>
            ))}
          </ul>
          <p className="text-lg my-8">
            At Fundela, we’re more than just a workplace—we’re a community
            dedicated to growth, innovation, and making a difference. Here, your
            talents drive meaningful impact as we help individuals and
            businesses achieve brighter financial futures. Join us and turn your
            career aspirations into achievements!
          </p>
        </FadeInWhenVisibleLeft>
      </div>
      <div className=" h-[300px] md:h-[500px] xl:h-full relative col-span-2 xl:col-span-1">
        <Image
          src="/group-image-and-co-workers.png"
          fill
          alt="gentleman wearing suit"
          className="object-contain"
        ></Image>
      </div>
    </div>
  );
};

export default WhyWorkAtFundela;
