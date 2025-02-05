"use client";
import HowItWorks from "../../home/how-it-works";
import LatestPost from "../../home/latest-post";
import NewsLetter from "../../home/news-letter";
import { useEffect, useState } from "react";
import ButtonComponent from "@/components/button-component";
import { NumericFormat } from "react-number-format";

export default function Calculator() {
  const timeInBusiness = [
    {
      text: "3 - 6 Months",
      value: -0.3,
    },
    {
      text: "6 - 12 Months",
      value: -0.15,
    },
    {
      text: "1 - 3 Years",
      value: 0,
    },
    {
      text: "3 - 5 Years",
      value: 0.15,
    },
    {
      text: "5+ years",
      value: 0.3,
    },
  ];

  const creditScore = [
    {
      text: "< 550",
      value: -0.3,
    },
    {
      text: "550 - 630",
      value: -0.15,
    },
    {
      text: "630 - 680",
      value: 0,
    },
    {
      text: "680 - 140",
      value: 0.15,
    },
    {
      text: "740+",
      value: 0.3,
    },
  ];
  const [time, setTime] = useState(timeInBusiness[0].value); //var T
  const [credit, setCredit] = useState(creditScore[0].value); //var C
  const [grossAnnual, setGrossAnnual] = useState<number>(); //var X
  const [estimateFunding, setEstimateFunding] = useState(0);
  const [estimateMonthly, setEstimateMonthly] = useState(0);
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    //minimumFractionDigits: 0, // This suffices for whole numbers, but will
    // print 2500.10 as $2,500.1
    //maximumFractionDigits: 0, // Causes 2500.99 to be printed as $2,501
  });

  useEffect(() => {
    if (grossAnnual) {
      // (1+T+C)X/8
      const y = 1 + time + credit;
      // Funding Amount FA = Y * X / 8
      const estFundingVal = (y * Number(grossAnnual)) / 8;
      // Monthly Amount MA = FA * (1.3- Y/4) / (24 + 20*Y
      const estMonthly = (estFundingVal * (1.3 - y / 4)) / (24 + 20 * y);
      setEstimateFunding(Number(estFundingVal.toFixed(2)));
      setEstimateMonthly(Number(estMonthly.toFixed(2)));
    }
  }, [credit, grossAnnual, time]);

  return (
    <>
      <div
        className="grid grid-cols-2 gap-4 p-2 lg:px-40 lg:py-10 text-white"
        style={{
          background: "#1F2937",
        }}
      >
        <div className="col-span-2 flex flex-col">
          <p className="text-2xl  m-2">Funding Calculator for your business</p>
          <p className="text-4xl font-bold  m-2">
            See how much you can qualify for
          </p>
          <p className="text-lg ml-2 mt-2">
            This calculator is meant to give you a rough estimate of what you
            can
          </p>
          <p className="text-lg ml-2">secure your business</p>
        </div>
        <div className="col-span-2 lg:col-span-1 flex flex-col ">
          <div className="col-span-2 mt-10 flex justify-center items-center lg:items-start flex-col ">
            <p className="text-xl font-bold m-2">Gross annual revenue</p>
            <div className="bg-white flex justify-center items-center relative rounded-lg border-solid border-blue border-1  m-2">
              <span
                className=" material-symbols-outlined absolute left-1"
                style={{
                  color: "rgb(176 190 197 / var(--tw-border-opacity, 1))",
                }}
              >
                attach_money
              </span>
              <NumericFormat
                style={{
                  color: "black",
                }}
                className="text-xl p-2 rounded ml-6 focus:outline-none"
                thousandSeparator=","
                onChange={(e) => {
                  console.log(e.target.value);
                  setGrossAnnual(
                    Number(
                      e.target.value
                        .toString()
                        .replaceAll("$", "")
                        .replaceAll(",", "")
                    )
                  );
                }}
              />
            </div>
          </div>
          <div className="mt-10 flex justify-center items-center lg:items-start flex-col">
            <p className="text-xl font-bold m-2">Time in Business</p>
            <div className="flex lg:block justify-center items-center lg:items-start flex-wrap">
              {timeInBusiness.map((item, index) => (
                <ButtonComponent
                  size="lg"
                  className="rounded-none"
                  key={`timeb_${index}`}
                  onClick={() => setTime(item.value)}
                  color={time === item.value ? "teal" : "white"}
                >
                  {item.text}
                </ButtonComponent>
              ))}
            </div>
          </div>

          <div className="mt-10 flex justify-center flex-col">
            <p className="text-xl font-bold m-2">Credit Score</p>
            <div className="flex lg:block justify-center items-center lg:items-start flex-wrap">
              {creditScore.map((item, index) => (
                <ButtonComponent
                  size="lg"
                  className="rounded-none"
                  key={`timeb_${index}`}
                  onClick={() => setCredit(item.value)}
                  color={credit === item.value ? "teal" : "white"}
                >
                  {item.text}
                </ButtonComponent>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-2 lg:col-span-1 p-10 col-span-1 mt-10 flex justify-start items-center flex-col border-t-4 lg:border-t-0	 lg:border-l-4	border-left-width: 4px border-teal-700">
          <p className="text-xl font-semi m-2">Estimated Funding Amount</p>
          <div className="flex ">
            <p className="text-6xl  font-bold">
              {formatter.format(estimateFunding)}
            </p>
          </div>
          <p className="text-xl font-semi m-2 mt-10">
            Estimated Monthly Amount
          </p>
          <div className="flex ">
            <p className="text-6xl  font-bold">
              {formatter.format(estimateMonthly)}
            </p>
          </div>
        </div>
      </div>
      <HowItWorks title={"How It Works"}></HowItWorks>
      <LatestPost></LatestPost>
      <NewsLetter></NewsLetter>
    </>
  );
}
