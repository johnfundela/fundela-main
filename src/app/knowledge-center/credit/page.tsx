import { Metadata } from "next";
import Image from "next/image";
import NewsLetter from "../../home/news-letter";
import BuildingBusinessCredit from "@/components/commons/building-buisiness-credit";
import ReparingBothPersonal from "@/components/commons/reparing-both-personal";
import Tradelines from "@/components/commons/tradelines";
import WhyChooseFundela1 from "@/components/commons/why-choose-fundela1";
import TakeTheFirstStepToday from "@/components/commons/take-the-first-step-today";
import CommonHero from "@/components/commons/common-hero";
export const metadata: Metadata = {
  title: "Credit",
  description:
    "Asset-Based Loans allow you to leverage your business assets, like real estate, to secure capital. This loan offers flexible repayment options, letting you pay the principal over time or in full at maturity, along with potential interest forgiveness on early repayment.",
};

export default function TermLoans() {
  return (
    <>
      <CommonHero
        background="man-looking-at-credit-card-and-coffee.jpg"
        title="Build Your Credit"
        message=""
        showRedirect={false}
      />
      <div className="grid grid-cols-2 bg-[#1F2937] xl:px-40 xl:pt-10">
        <div className="col-span-2 xl:col-span-1">
          <div className="w-full h-[500px] relative">
            <Image
              src="/group-person.png"
              fill
              alt="group of people"
              className="object-contain"
            ></Image>
          </div>
        </div>
        <div className="flex flex-col justify-center no-wrap block col-span-2 xl:col-span-1 mx-4 text-white">
          <span className="text-2xl">
            At <span className="font-bold text-teal-400">Fundela</span>, we
            understand how important credit is for achieving financial
            success—whether it’s for you personally or for your business. That’s
            why we specialize in repairing, boosting, and improving personal
            credit while also building strong, sustainable business credit. With
            tailored strategies and a team that genuinely cares, we’re here to
            help you unlock new opportunities and thrive.
          </span>
        </div>
        <div className=" xl:grid grid-cols-2 col-span-2">
          <div className="flex flex-col no-wrap block col-span-2 xl:col-span-1 mb-6">
            <span className="text-3xl font-bold my-4 mx-4 text-white">
              Why Credit Matters
            </span>
            <span className="text-2xl mx-4 text-white">
              Good credit isn’t just a number—it’s a powerful tool that can open
              doors. Whether you’re trying to qualify for better financing
              options or grow your business, a strong credit profile is
              essential. At Fundela, we make the process of fixing, boosting,
              and building credit simple and effective, so you can focus on what
              matters most.
            </span>
          </div>
          <div className="col-span-2 xl:col-span-1">
            <div className="w-full h-[500px] relative">
              <Image
                src="/gentleman-wearing-suit.png"
                fill
                alt="gentleman wearing suit"
                className="object-contain"
              ></Image>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5 xl:px-20 xl:py-10 pt-4">
        <div className="col-span-3 xl:col-span-1">
          <span className="text-2xl font-bold mx-4">
            Personal Credit Repair
          </span>
          <p className="text-xl py-6 mx-4">
            If your personal credit is holding you back, we’ve got you covered.
            Fundela offers expert services to repair and improve your credit
            score, giving you access to better financial opportunities.
          </p>
        </div>
        <div className="col-span-3 xl:col-span-1 w-full h-[500px] relative">
          <Image
            src="/person-discuss.png"
            fill
            alt="gentleman wearing suit"
            className="object-contain"
          ></Image>
        </div>
        <div className="col-span-3 xl:col-span-1 mx-4 flex flex-col">
          <span className="text-2xl font-bold mb-4">
            Our Personal Credit Services:
          </span>
          <span className="font-bold text-2xl text-teal mb-4 text-teal-500">
            Fix Your Credit
          </span>
          <span className="text-xl">
            Good credit isn’t just a number—it’s a powerful tool that can open
            doors. Whether you’re trying to qualify for better financing options
            or grow your business, a strong credit profile is essential. At
            Fundela, we make the process of fixing, boosting, and building
            credit simple and effective, so you can focus on what matters most.
          </span>
          <span className="font-bold text-2xl text-teal mb-4 text-teal-500 mt-10">
            Boost Your Score
          </span>
          <span className="text-xl">
            Quickly improve your credit score by addressing key problem areas.
          </span>
          <span className="font-bold text-2xl text-teal mb-4 text-teal-500 mt-10">
            Protect Your Future
          </span>
          <span className="text-xl">
            Get guidance on maintaining your score and staying on track
            long-term.
          </span>
        </div>
        <div className="col-span-3 text-center mt-4">
          We’ll create a customized plan based on your credit profile and goals,
          helping you regain control of your financial future.
        </div>
      </div>
      <div className="p-6">
        <BuildingBusinessCredit />
      </div>
      <ReparingBothPersonal />
      <Tradelines />
      <WhyChooseFundela1 />
      <TakeTheFirstStepToday />
      <NewsLetter></NewsLetter>
    </>
  );
}
