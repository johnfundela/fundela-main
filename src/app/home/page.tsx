import TrustPilot from "@/components/trust-pilot";
import WhyFundela from "./why-fundela";
import PartnerWithUs from "./partner-with-us";
import LatestPost from "./latest-post";
import { Metadata } from "next";
import { FadeIn, FadeInLeft } from "@/components/motion/fade-in";
import HowItWorks from "./how-it-works";
import ExploreMoreSolution from "@/components/commons/explore-more-solution";
import MainPageForm from "@/components/jot-form/main-page-form";
import { ImageComponent } from "@/components/commons/image-component";

export const metadata: Metadata = {
  title: "Fundela",
  description:
    "See How Much Capital Your Business Can Qualify For Let’s get the ball rolling!",
};

export default function Home() {
  const mainPageBg = {
    backgroundImage: "url(/fundela-main-bg.png)",
    backgroundSize: "contain",
    backgroundPositionY: "center",
    backgroundPositionX: "50%",
  };

  return (
    <>
      <FadeIn>
        <div style={mainPageBg} className="grid grid-cols-2 gap-4 p-4  w-full">
          <div className="pl-0 lg:pl-10 col-span-2 lg:col-span-1 text-white flex flex-col justify-center items-center h-full">
            <FadeInLeft>
              <div className="flex flex-col justify-center h-full">
                <span className="text-xl font-semibold text-center xl:text-start">
                  FUNDING THE AMERICAN DREAM
                </span>
                <span className="text-4xl 2xl:text-6xl font-semibold mt-6 text-center xl:text-start">
                  See How Much
                </span>
                <span className="text-4xl 2xl:text-6xl font-semibold text-center xl:text-start mt-4">
                  Capital Your Business
                </span>
                <span className="text-4xl 2xl:text-6xl font-semibold text-center xl:text-start mt-4">
                  Can Qualify For
                </span>
                <div className="text-xl mt-10 text-center xl:text-start flex-col md:flex-row  flex items-center">
                  <span>Let’s get the ball rolling!</span>
                  <div>
                    <ImageComponent
                      divClassName="h-20 w-20 ml-2 md:ml-6"
                      src="closeup-golden-usd-coins-dropping-dark-background-dollar-is-main-currency-exchange-payment-world-by-3d-render.png"
                    />
                  </div>
                </div>
              </div>
            </FadeInLeft>
          </div>
          
          <div className="col-span-2 lg:col-span-1">
            <FadeIn delay={1}>
              <MainPageForm></MainPageForm>
            </FadeIn>
          </div>
        </div>
      </FadeIn>

      <FadeInLeft>
        <TrustPilot />
      </FadeInLeft>
      <ExploreMoreSolution
        mainTitle="Explore Our Business Financing Programs"
        subMessage=""
        cardClass="bg-teal-400"
        hidden={[6, 7, 8, 9]}
      />
      <HowItWorks title={"How It Works"}></HowItWorks>
      <WhyFundela />
      <PartnerWithUs />
      <LatestPost />
    </>
  );
}
