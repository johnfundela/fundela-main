import CardComponent from "@/components/card-component";
import { FadeInLeft } from "../motion/fade-in";
import Image from "next/image";
import TrustPilotSigleSlider from "./trust-pilot-single-slider";
type Item = {
  message: string;
  title: string;
};

type Props = {
  solutions: Item[];
  headerMessage: string;
  title: string;
  solution?: string;
};

const SolutionMadeSimple = ({
  solutions,
  headerMessage,
  title = "Solution Made Simple",
  solution,
}: Props) => {
  const mainPageBg = {
    backgroundImage: `url(/diagonal-bg-gray-white.png)`,
    backgroundColor: "#0000008c",
    backgroundSize: "cover",
    backgroundPositionY: "center",
  };

  const icons = ["money-bag.png", "graph.png", "clock.png", "hour-glass.png"];

  return (
    <FadeInLeft>
      <div style={mainPageBg}>
        <div className="p-6 py-12 2xl:py-20">
          <div className="flex xl:grid grid-cols-2 gap-4 flex-col-reverse">
            <div className="relative m-2 mt-10 xl:mt-2 xl:m-10 col-span-2 xl:col-span-1 justify-center items-center flex-col-reverse flex">
              <div
                className="p-2 2xl:p-40 rounded-xl"
                style={{ height: "50vh", width: "90%", position: "relative" }}
              >
                <Image
                  priority
                  style={{ objectFit: "cover" }}
                  src="/young-woman.jfif"
                  className="rounded-3xl"
                  fill
                  unoptimized={true}
                  alt=""
                />
                <div
                  className="rounded-xl"
                  style={{
                    position: "absolute",
                    zIndex: 1,
                    justifySelf: "end",
                    top: "-24px",
                    right: "-11px",
                  }}
                >
                  <Image
                    src="/total-income.png"
                    className="rounded-3xl"
                    height={100}
                    width={150}
                    alt=""
                  />
                </div>
                <div
                  className="hidden xl:block"
                  style={{
                    position: "absolute",
                    bottom: "-10%",
                    left: "-10%",
                  }}
                >
                  <CardComponent>
                    <TrustPilotSigleSlider height={140}></TrustPilotSigleSlider>
                  </CardComponent>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center flex-col col-span-2 xl:col-span-1">
              <div className="flex items-center justify-center flex-col">
                <span className="text-3xl font-semibold text-center">
                  {title}
                </span>
                <span className="text-lg font-semibold  my-10">
                  <span className="text-lg font-bold text-teal-700">
                    {solution}{" "}
                  </span>
                  {headerMessage}
                </span>
              </div>
              <div className="grid grid-cols-2 w-12/12 gap-10">
                {solutions.map((item, index) => (
                  <CardComponent
                    key={`sol-${index}`}
                    className="rounded-3xl col-span-2 md:col-span-1 xl:col-span-1"
                  >
                    <div className="flex justify-start items-center p-2">
                      <div
                        style={{ height: 100, width: 100 }}
                        className="relative m-4"
                      >
                        <Image
                          src={`/${icons[index]}`}
                          fill
                          alt="icon"
                          className="relative object-contain"
                        ></Image>
                      </div>
                      <div>
                        <p className="text-lg font-bold text-black">
                          {item.title}
                        </p>
                        <p className="text-normal text-black ">
                          {item.message}
                        </p>
                      </div>
                    </div>
                  </CardComponent>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeInLeft>
  );
};

export default SolutionMadeSimple;
