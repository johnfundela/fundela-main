import { Metadata } from "next";
import TrustPilot from "@/components/trust-pilot";
import { FadeInWhenVisible } from "@/components/motion/fade-in-when-visible";
import CommonHero from "@/components/commons/common-hero";
import BenefitOurPartners from "@/components/commons/benefit-our-partners";
import ExploreMoreSolution from "@/components/commons/explore-more-solution";
import LatestPost from "../home/latest-post";
import BecomeAPartnerToday from "@/components/jot-form/become-a-parner-today";
import girlHoldingLapTop from "../../../public/woman-holding-laptop.png";
import Image from "next/image";
export const metadata: Metadata = {
  title: "Partner With Us",
  description:
    "Leverage our network of lenders and partners to help your clients access premium business financing solutions!",
};
export default function PartnerWithUs() {
  const aboutFundela = [
    {
      text: "Have your client fill out the online application through your unique link.",
      image:
        "young-asian-woman-digital-nomad-working-remotely-from-cafe-drinking-coffee-using-laptop-smilin.png",
    },
    {
      text: "Sit back, relax and let our team of experts handle the funding process.",
      image: "cheerful-businesspeople-working-as-team.png",
    },
    {
      text: "Receive commission upon funding.",
      image: "couple-home-reading-mail.png",
    },
  ];

  return (
    <>
      <CommonHero
        background={"man-suite-closeup-handshake.jpg"}
        title={"Our Partner Program"}
        message={
          "Leverage our network of lenders and partners to help your clients access premium business financing solutions!"
        }
        showRedirect={false}
        bgStyle={{
          backgroundPositionY: "60%",
        }}
        rightSection={<BecomeAPartnerToday></BecomeAPartnerToday>}
        height="auto"
      ></CommonHero>
      <FadeInWhenVisible>
        <div
          className="grid grid-cols-6 gap-5 pt-20 text-white"
          style={{
            backgroundImage: `url(/fundela-bg.png)`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <p className=" px-6 2xl:px-1 font-bold text-center col-span-6 text-2xl md:text-4xl">
            Empower Your Clients With Best-In-Class Business Financing
          </p>
          <div className="m-6 2xl:ml-10 col-span-6 2xl:col-span-2  flex flex-col justify-center text-start pr-0 ">
            <span className="px-6 2xl:px-1 text-lg md:text-2xl text-3xl mt-4">
              At Fundela we work hard to create a fruitful and synergistic
              relationship with our clients. Our dedicated team of industry
              experts brings years of experience supporting businesses at every
              growth stage. We will guide your clients through each step of the
              funding process as we work hard to secure the financing they need
              to prosper.
            </span>
            <p className="px-6 2xl:px-1 text-lg  md:text-2xl text-3xl mt-4">
              Our team will make the funding experience seamless and transparent
              for your clients, making you look great in the process!
            </p>
          </div>
          <div className="col-span-6 md:col-span-3 2xl:col-span-2 mr-2 ">
            <Image
              className="bottom-0"
              src={girlHoldingLapTop}
              alt="office lady holding a laptop"
            ></Image>
          </div>
          <div className="p-10 md:p1 col-span-6 md:col-span-3 2xl:col-span-2 flex flex-col justify-center ">
            {aboutFundela.map((item, index) => (
              <li
                key={`how-to-apply-steps_${index}`}
                className={`mt-4 mr-1 md:mt-10 flex relative after:content-['']  after:w-0.5 after:h-full   after:inline-block after:absolute after:-bottom-8 2xl:after:-bottom-10 after:left-4 lg:after:left-5 ${
                  index + 1 === aboutFundela.length ? "" : "after:bg-teal-600"
                }`}
              >
                <span className="w-8 h-8 aspect-square bg-teal-600 border-2 border-transparent rounded-full flex justify-center items-center mr-3 text-sm text-white lg:w-10 lg:h-10">
                  {index + 1}
                </span>

                <div className="w-full block">
                  <div className="ml-1 md:ml-10 mb-2">
                    <p className="font-bold text-sm md:text-xl">{item.text}</p>
                  </div>
                </div>
              </li>
            ))}
          </div>
          {/* {aboutFundela.map((item, index) => (
            <div
              style={{
                backgroundImage: `url(/${item.image}),  linear-gradient(#ffffff,#000000)`,
                backgroundBlendMode: "overlay",
                backgroundColor: "#00000047",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
              className="mt-4 col-span-6 md:col-span-2 2xl:col-span-2 justify-center flex h-[300px] relative rounded-2xl"
              key={"empower_" + index}
            >
              <span className="text-white font-bold absolute bottom-2 w-8/12 text-center">
                {item.text}
              </span>
            </div>
          ))} */}
        </div>
      </FadeInWhenVisible>
      <BenefitOurPartners />
      <ExploreMoreSolution theme="dark" />
      <LatestPost></LatestPost>
      <TrustPilot />
    </>
  );
}
