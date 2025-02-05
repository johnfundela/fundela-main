"use client";

import { FadeInWhenVisible } from "./motion/fade-in-when-visible";
import TrustPilotSigleSlider from "./commons/trust-pilot-single-slider";
import TrustPilotReviewCount from "./commons/trust-pilot-review-count";
// eslint-disable-next-line @typescript-eslint/no-explicit-any

const TrustPilot = () => {
  return (
    <div className="p-2 p-10 xl:pb-20">
      <div className="flex items-center justify-center mt-10 xl:mt-20 ">
        <span className="text-3xl font-semibold  text-center mb-12" style={{ color: "#1F2937" }}>
          See why businesses trust
          <span className="text-teal-500"> Fundela</span> for their financing
          needs!
        </span>
      </div>
      <FadeInWhenVisible delay={0.1}>
        <div className="flex items-center grid grid-cols-5 gap-4">
          <div className="col-span-5 xl:col-span-1">
            <TrustPilotReviewCount></TrustPilotReviewCount>
          </div>
          <div className="col-span-5 xl:col-span-4">
            <TrustPilotSigleSlider canClick={true}></TrustPilotSigleSlider>
          </div>
        </div>
      </FadeInWhenVisible>
    </div>
  );
};

export default TrustPilot;
