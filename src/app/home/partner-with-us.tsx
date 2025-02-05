import { FadeIn } from "@/components/motion/fade-in";
import { FadeInWhenVisibleLeft } from "@/components/motion/fade-in-when-visible";
import Image from "next/image";

const PartnerWithUs = () => {
  const bgStyle = {
    backgroundImage: "url(/bg-office-blur.png)",
  };

  return (
    <div style={bgStyle} className="p-6 2xl:p-40 pt-20 pb-20">
      <div className="grid grid-cols-2 gap-10">
        <div className="col-span-2 xl:col-span-1 xl:h-full">
          <div
            className="h-96  xl:h-full w-full"
            style={{ width: "100%", position: "relative" }}
          >
            <FadeIn>
              <Image
                className="h-96 xl:h-full w-full"
                style={{ objectFit: "contain" }}
                src="/freelance-woman-working-with-laptop-coffee-shop.png"
                fill
                alt=""
              />
            </FadeIn>
          </div>
        </div>
        <div className="col-span-2 xl:col-span-1">
          <FadeInWhenVisibleLeft>
            <div className=" flex flex-col">
              <span className="text-4xl font-semibold mt-10" style={{ color: "#1F2937" }}>
                Partner With Us
              </span>
              <span className="text-2xl font-bold mt-12" style={{ color: "#1F2937" }}>
                Empower your clients with top quality business financing
              </span>
              <span className="text-normal mt-6">
                Choose Fundela for tailored financial solutions designed to
                drive your business forward. Our dedicated team of industry
                experts brings years of experience supporting businesses at
                every growth stage. We guide you through each step of the
                funding process, ensuring clarity and confidence as we secure
                the best financing options available. Let us empower your
                business to reach its full potential with funding that fits your
                unique needs.
              </span>
              <div className="grid grid-cols-2 mt-16">
                <div className="flex items-center">
                  <span className="text-6xl text-teal-300 pr-3">01</span>
                  <span>
                    Have your client fill out the online application through
                    your unique link.
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-6xl text-teal-300 pr-3">02</span>
                  <span>
                    Sit Back. Relax. Let one of our senior account managers
                    handle the funding process.
                  </span>
                </div>
                <div className="mt-16 col-span-2 flex items-center justify-center">
                  <span className="text-6xl text-teal-300 pr-3">03</span>
                  <span className="w-6/12">
                    Receive a commission upon successful funding and completion
                    of transactions.
                  </span>
                </div>
              </div>
            </div>
          </FadeInWhenVisibleLeft>
        </div>
      </div>
    </div>
  );
};

export default PartnerWithUs;
