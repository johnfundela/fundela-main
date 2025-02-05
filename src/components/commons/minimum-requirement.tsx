import Image from "next/image";
import { FadeInWhenVisibleLeft } from "../motion/fade-in-when-visible";

type Content = {
  title: string;
  list: string[];
};

type Prop = {
  content: UpperLower;
};

type UpperLower = {
  upper: Content;
  lower: Content;
};

const MinimumRequirement = ({ content }: Prop) => {
  const { upper, lower } = content;
  return (
    <div className="p-4 xl:p-20 " style={{ background: "#161C2D" }}>
      <FadeInWhenVisibleLeft>
        <div className="grid grid-cols-2 gap-4">
          <div
            className="col-span-2 lg:col-span-1 h-52 lg:h-full"
            style={{ width: "100%", position: "relative" }}
          >
            <Image
              style={{ objectFit: "contain" }}
              src="/men-agree-handshake.png"
              fill
              alt=""
            />
          </div>
          <div className="col-span-2 lg:col-span-1 flex items-center flex-col mb-2 lg:mb-20 mt-2 lg:mt-20">
            <span className="text-center text-3xl text-white font-semibold">
              {upper.title}
            </span>
            <ul className="list-outside list-disc ml-10 text-white">
              {upper.list.map((item, index) => (
                <li key={`upper_${index}`} className="mt-4">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex lg:grid grid-cols-2 gap-10 flex-wrap-reverse">
          <div className="w-full col-span-2 lg:col-span-1 items-center flex flex-col mb-2 lg:mb-20 mt-2 lg:mt-20 ml-2">
            <span className="text-3xl text-white font-semibold">
              {lower.title}
            </span>
            <ul className="list-outside list-disc text-white">
              {lower.list.map((item, index) => (
                <li key={`lowwer_${index}`} className="mt-4">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div
            className="col-span-1 h-52 lg:h-full"
            style={{ width: "100%", position: "relative" }}
          >
            <Image
              style={{ objectFit: "contain" }}
              src="/hand-checking.png"
              fill
              alt=""
            />
          </div>
        </div>
      </FadeInWhenVisibleLeft>
    </div>
  );
};

export default MinimumRequirement;
