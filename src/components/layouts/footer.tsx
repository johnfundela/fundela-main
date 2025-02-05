import Image from "next/image";
import ButtonComponent from "../button-component";
import { knowlegeCenter, ourCompany, solutionPath } from "../commons/constant";

const Footer = () => {
  return (
    <>
      <div className="border-2"></div>
      <div className="px-4 w-full pt-10 pb-4 text-white bg-[#161C2D]">
        <div className="grid grid-cols-5">
          <div className="col-span-5 xl:col-span-1 xl:row-span-5">
            <div className="2xl:mx-20 flex items-start flex-col items-center xl:items-start">
              <Image
                src="/logo.png"
                height={150}
                width={200}
                alt="logo"
              ></Image>
              <p className="mt-6 text-sm font-semibold ">
                Where Opportunities Meet Funding
              </p>
              <a href="/business-financing-application">
                <ButtonComponent className="mt-6">Get Started</ButtonComponent>
              </a>
              <div className="mt-6">
                <span className="font-bold ">Email:</span>
                <span> info@fundela.com</span>
              </div>
              <div>
                <span className="font-bold ">Phone:</span>
                <span> 833 333 0020</span>
              </div>
            </div>
          </div>
          <div className="col-span-5 xl:col-span-4">
            <div>
              <p className="text-lg font-bold text-teal-400 mt-5">
                Funding Solution
              </p>
              <div className="border-2"></div>
              <div className="flex justify-start mt-1 flex-wrap">
                {(solutionPath || []).map((item, index) => (
                  <span
                    key={`footer_path_${index}`}
                    className="text-sm pr-6 mt-2 "
                  >
                    <a href={`/funding-solutions/${item.path}`}>{item.name}</a>
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-6">
              <p className="text-lg font-bold text-teal-400 mt-5">
                Knowledge Center
              </p>
              <div className="border-2"></div>
              <div className="flex justify-start mt-1 flex-wrap">
                {(knowlegeCenter || []).map((item, index) => (
                  <span
                    key={`footer_path_knowledge_center_${index}`}
                    className="text-sm  pr-6 mt-2 "
                  >
                    <a href={`/knowledge-center/${item.path}`}>{item.name}</a>
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-6">
              <p className="text-lg font-bold text-teal-400 mt-5">Our Company</p>
              <div className="border-2"></div>
              <div className="flex justify-start mt-1 flex-wrap">
                {ourCompany.map((item, index) => (
                  <a
                    key={"our_company" + index}
                    className="text-sm  pr-6  py-1 "
                    href={`/our-company/${item.path}`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-10 grid grid-cols-3 gap-4 flex items-center">
          <div className="ml-2 md:ml-10">
            <p className="text-sm">
              <span className="text-teal-500 font-bold ">© Fundela 2025.</span>
            </p>
            <p className="text-sm ">All Rights Reserved. </p>
          </div>
          <div className="flex px-4 justify-end col-span-2">
            <a href="/terms-of-use">
              <span className="mr-6 text-xs ">Terms of Use</span>
            </a>
            <a href="/privacy-policy">
              <span className="mr-6 text-xs ">Privacy Policy</span>
            </a>
            <a href="/cookie-policy">
              <span className="mr-6 text-xs ">Cookie Policy</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
