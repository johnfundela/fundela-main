"use client";

import { ReactNode } from "react";
import ButtonComponent from "../button-component";
import { FadeIn, FadeInLeft } from "../motion/fade-in";
type Prop = {
  background: string;
  title: string;
  message: string;
  sub?: string;
  redirect?: string;
  showRedirect?: boolean;
  bgStyle?: object;
  height?: string;
  rightSection?: ReactNode;
};

const CommonHero = ({
  background,
  title,
  message,
  sub = "",
  redirect,
  showRedirect = true,
  bgStyle = {},
  height = "50vh",
  rightSection,
}: Prop) => {
  const styles = background
    ? {
        backgroundImage: `url(/${background})`,
        backgroundBlendMode: "overlay",
        backgroundColor: "#0000008c",
        backgroundSize: "cover",
        backgroundPositionY: "35%",
      }
    : { background: "#1F2937" };

  return (
    <FadeIn>
      <div
        style={{ ...styles, ...bgStyle, height }}
        className="grid grid-cols-2 gap-4 px-2 xl:px-40"
      >
        <div className="flex flex-col justify-center col-span-2 xl:col-span-1">
          <FadeInLeft>
            <div className={`flex flex-col justify-center text-white`}>
              <span className="text-3xl md:text-5xl  font-semibold mt-6 text-center xl:text-start">
                {title}
              </span>
              <span className=" font-semibold text-xl mt-6 xl:pr-12 text-center xl:text-start ">
                {message}
              </span>
              <span className=" font-semibold text-xl xl:mt-6 xl:pr-12 text-center xl:text-start ">
                {sub}
              </span>
              {showRedirect && (
                <a href={redirect}>
                  <div className="flex mt-6 justify-center xl:justify-start">
                    <ButtonComponent className="h-12 w-4/12">
                      Apply Now
                    </ButtonComponent>
                  </div>
                </a>
              )}
            </div>
          </FadeInLeft>
        </div>

        {rightSection && (
          <div className="col-span-2 xl:col-span-1 p-2">{rightSection}</div>
        )}
      </div>
    </FadeIn>
  );
};

export default CommonHero;
