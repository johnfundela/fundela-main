import Image from "next/image";
import CardComponent from "../card-component";

const Tradelines = () => {
  return (
    <div className="grid grid-cols-5 p-2 xl:p-10 gap-6 ">
      <div className="col-span-5 xl:col-span-3">
        <CardComponent className="bg-[#161C2D] mb-0 p-0 2xl:min-h-[400px]">
          <div className="pt-4 xl:pt-20 pl-20 pr-10 text-black flex flex-col 2xl:flex-row 2xl:h-[400px]">
            <div className="w-10/12">
              <span className="text-4xl font-bold text-white">
                Boost your Credit score
              </span>
              <p className="text-2xl mt-6 text-white">
                For both personal and business credit, a strong score gives you
                the leverage to grow. Fundela offers
                <span className="font-bold text-white">
                  credit enhancement services
                </span>{" "}
                to help you quickly improve your credit profile.
              </p>
            </div>
            <div className="xl:w-full h-56 2xl:h-full relative">
              <Image
                src="/happy-smiling-businessman-office-looking-laptop-sreen.png"
                fill
                alt="gentleman wearing suit"
                className="object-contain"
              ></Image>
            </div>
          </div>
        </CardComponent>
      </div>
      <div className="col-span-5 xl:col-span-2">
        <CardComponent className="bg-[#161C2D] min-h-[400px]">
          <div className="text-black flex flex-col ">
            <div className="w-full h-[150px] relative">
              <Image
                src="/smiling-business-leader-greeting-partner_1262-3306.png"
                fill
                alt="gentleman wearing suit"
                className="object-cover"
              ></Image>
            </div>
            <div className="p-10">
              <p className="mb-4 text-4xl font-bold text-white">
                Why Choose Fundela for Tradelines?
              </p>
              <ul className="list-disc ml-10 text-white">
                <li className="mt-4">
                  Insured and bonded tradelines ensure security and peace of
                  mind.
                </li>
                <li className="mt-4 text-white">
                  Guaranteed results—if we can’t deliver, we’ll replace it with
                  equal value.
                </li>
              </ul>
            </div>
          </div>
        </CardComponent>
      </div>
      <div className="col-span-5 xl:col-span-2 min-h-[400px]">
        <CardComponent className="bg-[#161C2D]">
          <div className="py-10 px-10 text-black flex flex-col 2xl:flex-row">
            <div className="w-10/12">
              <span className="text-3xl font-bold text-white">What are Tradelines?</span>
              <p className="text-2xl m-2 text-white">
                Tradelines are accounts that appear on your credit report, such
                as credit cards or loans. Adding high-quality tradelines can
                significantly improve your creditworthiness.
              </p>
            </div>
            <div className="w-full h-[300] relative">
              <Image
                src="/cropped-view-manager-making-online-payment 1.png"
                fill
                alt="gentleman wearing suit"
                className="object-contain"
              ></Image>
            </div>
          </div>
        </CardComponent>
      </div>
      <div className="col-span-5 xl:col-span-3">
        <CardComponent className="bg-[#161C2D] min-h-[400px] pb-0 mb-0">
          <div className="pt-10 px-10 text-black items-center flex flex-col-reverse 2xl:flex-row 2xl:h-[400px]">
            <div className="w-full h-[300px] 2xl:h-full relative">
              <Image
                src="/business-finance-employment-female-successful-entrepreneurs-concept-confident-goodlooking-busine.png"
                fill
                alt="gentleman wearing suit"
                className="object-contain 2xl:object-cover"
              ></Image>
            </div>
            <div className="flex justify-center items-center text-center h-full">
              <p className="text-2xl mt-6 font-bold text-center text-white">
                Whether you’re boosting personal credit to secure better
                financing or enhancing business credit to unlock new
                opportunities, Fundela has the tools to get you there.
              </p>
            </div>
          </div>
        </CardComponent>
      </div>
    </div>
  );
};

export default Tradelines;
