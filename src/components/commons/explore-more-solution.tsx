import ButtonComponent from "@/components/button-component";
import { FadeInWhenVisible } from "../motion/fade-in-when-visible";
import Image from "next/image";

type Props = {
  hidden?: number[];
  mainTitle?: string;
  subMessage?: string;
  theme?: "light" | "dark";
  cardClass?: string;
  showDetails?: boolean;
};

const ExploreMoreSolution = ({
  hidden,
  mainTitle = "Explore More Solution",
  subMessage = "Don’t think SBA Loans are the right fit? Explore our other funding options below",
  theme = "light",
  cardClass = "",
  showDetails = false,
}: Props) => {
  const moreSolutions = [
    {
      icon: "sba-loan-icon-white.png",
      subject: "SBA Loans",
      path: "/sba-loans",
      message: showDetails
        ? "Leverage government-backed SBA loans to secure long-term, low-interest financing for your business. This is the cheapest capital you can find for your business. However, it is a tedious process to secure an approval."
        : "Government-backed financing options designed to help small businesses succeed. With flexible terms, low interest rates, and higher borrowing limits, SBA loans can support a wide variety of business needs, from expansion to equipment purchases. These loans provide the stability and aAordability small businesses need to thrive.",
      details: [
        "Max Approval: Up to $5 Million",
        "Terms: Up to 25 Years",
        "Rates: APRs range from 5.5%- 9.75%",
        "Early Payment Incentives: No prepayment penalties, allowing you to save on interest by paying off the loan early",
      ],
    },
    {
      icon: "bxs_credit-card.png",
      path: "/lines-of-credit",
      subject: "Business Line of Credit",
      message: showDetails
        ? "Access a flexible credit line that offers convenience, rewards, and control over expenses. A business credit card gives you immediate purchasing power for smaller, recurring expenses and helps build your business’s credit profile over time"
        : "Provides ongoing access to funds that you can use as needed, similar to a credit card but with the benefits of lower rates and higher limits. It’s a revolving credit line designed to give business owners the flexibility to manage expenses, seize growth opportunities, or address unexpected challenges. Draw funds only when necessary and pay interest solely on what you use",
      details: [
        "Max Approval: Up to $1 Million",
        "Terms: Up to 24 Years",
        " Rates: 0.7- 2% Monthly. APRs range from 8.5%- 24%",
        "Early Payment Incentives: None. Interest charges stop once you clear your balance",
      ],
    },
    {
      icon: "lets-icons_calendar-fill.png",
      subject: "Business Term Loan",
      path: "/business-term-loans",
      message: showDetails
        ? "Obtain a lump sum of capital for your expansion projects. Term loans typically offer the highest funding amounts compared to all our other products"
        : "Provides a straightforward financing option to help you achieve your goals. Whether you’re looking to expand your business, purchase inventory, or invest in new projects, term loans oƯer a fixed repayment schedule and reliable terms, ensuring peace of mind and financial stability.",
      details: [
        "Max Approval: Up to $15 Million",
        "Terms: Up to 5 Years",
        "Rates: APRs range from 10%- 28%.",
        "Early Payment Incentives: Anywhere from 100% interest forgiveness after the first year to 50% discount on remaining interest",
      ],
    },
    {
      icon: "mdi_bridge.png",
      subject: "Business Bridge Loan",
      path: "/bridge-loans",
      message: showDetails
        ? "Access quick funds to bridge the gap between immediate cash needs and longer-term financing solutions. This product is perfect for businesses looking for a quick fix to their short term cash flow needs."
        : "Short-term financing solutions designed to cover gaps in cash flow or provide immediate capital for time-sensitive opportunities. Whether you’re looking to cover operational expenses, purchase inventory, or manage seasonal fluctuations, a business bridge loan ensures you have the funding you need to keep moving forward",
      details: [
        "Max Approval: Up to $500,000",
        "Terms: Up to 6 Months",
        " Rates: 4- 15% in simple interest",
        " Early Payment Incentives: None. Bridge loans are meant to be paid off early",
      ],
    },
    {
      icon: "solar_money-bag-bold.png",
      path: "/business-advances",
      subject: "Business Advance",
      message: showDetails
        ? "Access quick and easy capital within hours. This product has the easiest approval process in our portfolio. On the other hand, MCAs are typically the least affordable option we have available."
        : "Provide fast funding with a simple approval process, though typically at a higher cost. Perfect for businesses needing immediate capital, this option has flexible terms and potential early payment incentives based on individual cases.",
      details: [
        "Max Approval: Up to $1 Million",
        "Terms: Up to 12 Months",
        "Rates: 16%- 48% in simple interest",
        "Early Payment Incentives: Interest forgiveness is calculated case by case.",
      ],
    },
    {
      icon: "icon-park-solid_update-rotation.png",
      path: "/consolidation-loans",
      subject: "Consolidation Program",
      message: showDetails
        ? "Simplify your debt with a consolidation loan that combines multiple high-interest obligations into a single, manageable payment. This option is perfect for businesses looking to streamline their finances and reduce monthly payments, with flexible terms designed to ease your cash flow."
        : "Help streamline finances and reduce monthly payments, providing an effective solution for businesses looking to improve cash flow with flexible terms and no prepayment penalties.",
      details: [
        "Max Approval: Up to $2 Million",
        "Terms: Up to 7 Months",
        "Rates: APRs range from 6%- 18%",
        "Early Payment Incentives: No prepayment penalties, allowing you to save on interest by paying down early",
      ],
    },
    {
      icon: "fa6-solid_file-invoice-dollar.png",
      subject: "Invoice Factoring",
      path: "/invoice-factoring",
      message: showDetails
        ? "Convert your outstanding invoices into immediate cash flow to maintain smooth operations. Invoice factoring allows you to leverage unpaid invoices for quick capital, so you don’t have to wait for customers to settle their accounts. Ideal for businesses with long payment cycles or high accounts receivable."
        : "Enables businesses to convert unpaid invoices into working capital. This financial solution ensures that your operations remain uninterrupted, providing immediate cash flow by leveraging your accounts receivable. Ideal for businesses waiting on customer payments, invoice factoring helps cover payroll, operational costs, or expansion needs.",
      details: [
        "Max Approval: Up to 95% of invoice value",
        "Terms: Based on invoice cycle (typically 30-90 days)",
        "Rates: 1-5% factoring fee",
        "Early Payment Incentives: N/A; capital is provided based on receivables, with no additional fees.",
      ],
    },
    {
      icon: "mingcute_safe-lock-fill.png",
      path: "/asset-based-loans",
      subject: "Asset Based Loan",
      message: showDetails
        ? "Unlock capital by leveraging your assets (typically real estate). These Loans have very flexible payoff options. You can choose to pay the principle along with the interest throughout the duration of the loan or you can repay the entirety of the principle when the loan matures."
        : "Provide businesses with access to capital by leveraging their assets as collateral. These loans are ideal for businesses needing quick, flexible funding to manage growth, cash flow, or unexpected opportunities. Assets such as accounts receivable, inventory, and real estate can serve as security, enabling you to secure funding eAiciently without sacrificing equity.",
      details: [
        "Max Approval: Up to $10 Million",
        "Terms: 3- 5 Years",
        "Rates: APRs range from 9%- 14%",
        "Early Payment Incentives: Interest forgiveness is calculated case by case",
      ],
    },
    {
      icon: "bi_gear-fill.png",
      subject: "Equipment Financing",
      path: "/equipment-financing",
      message: showDetails
        ? "Invest in essential equipment without straining your cash flow. Our equipment financing allows you to acquire or lease the machinery, technology, or tools you need to keep your business growing, while spreading out the cost over time."
        : "Allows you to acquire or lease essential machinery, technology, or tools for your business. Spread out the cost over time, and take advantage of interest forgiveness if paid off early.",
      details: [
        "Max Approval: Up to $5 Million",
        "Terms: Up to 7 Years",
        "Rates: APRs range from 7%- 20%",
        "Early Payment Incentives: Interest forgiveness on the remaining balance if paid off within the first 18 months",
      ],
    },
    {
      icon: "si_credit-card-fill.png",
      path: "/business-credit-card",
      subject: "Business Credit Card",
      message: showDetails ?
        "Access quick funds to bridge the gap between immediate cash needs and longer-term financing solutions. This product is perfect for businesses looking for a quick fix to their short term cash flow needs." 
        : "Offers a revolving line of credit to cover your everyday expenses, manage cash flow, and take advantage of exclusive rewards and incentives. Whether it's purchasing inventory, paying for travel, or covering unexpected costs, a business credit card provides the flexibility and control your business needs to thrive.",
      details: [
        "Credit Limit: Up to $500,000 (based on creditworthiness)",
        "Terms: Revolving (payment cycles typically 30 days)",
        "Rates: APRs range from 12%- 25% (0% for the first 18 months",
        "Early Payment Incentives: Interest-free if paid within the billing cycle",
      ],
    },
  ];

  return (
    <div
    style={{backgroundImage: "linear-gradient(to bottom, #ffffff, #fbfbfb, #f6f6f6, #f2f2f2, #eeeeee)"}}
      className={`bg-gray-200 p-2 lg:p-40 pt-6 lg:pt-20 pb-2 lg:pb-20 ${
        theme == "dark" ? "bg-gray-900" : ""
      }`}
    >
      <div
        className={`flex items-center justify-center flex-col ${
          theme == "dark" ? "text-white" : "text-gray"
        }`}
      >
        <span className={`text-4xl font-semibold`} >{mainTitle}</span>
        <span className="text-normal text-gray mt-5">{subMessage}</span>
      </div>
      <div className="mt-10 w-full flex justify-around flex-wrap">
        {moreSolutions.map((item, index) => {
          return (
            !hidden?.includes(index) && (
              <div
                className=" p-2  w-12/12 md:w-6/12 2xl:w-4/12"
                key={index + "_programs"}
              >
                <div
                  className={`p-4 rounded-xl h-full ${
                    theme === "light" ? "bg-teal-400" : "bg-teal-400"
                  }  ${cardClass}`}
                >
                  <FadeInWhenVisible>
                    <div className="h-full flex flex-col flex space-between flex-col ">
                      <div
                        className={`text-center 2xl:text-start ${
                          theme === "light" ? "#a1dae9" : "#b3cff5"
                        }`}
                      >
                        <div className="flex justify-center 2xl:justify-start">
                          <div
                            style={{ height: 50, width: 50 }}
                            className="relative"
                          >
                            <Image
                              src={`/${item.icon}`}
                              fill
                              alt="icon"
                              style={{
                                fill:
                                  theme === "light"
                                    ? "#0054bb"
                                    : "#1F2937",
                              }}
                              className="relative object-contain "
                            ></Image>
                          </div>
                        </div>
                        <p className="mt-4 text-lg 2xl:text-xl font-semibold" style={{color: "#eeeeee"}}>
                          {item.subject}
                        </p>
                        <p className="mt-4 mb-2 font-normal" style={{color: "#eeeeee"}}>{item.message}</p>
                        {showDetails && (
                          <ul className="list-disc ml-5 mt-4" style={{color: "#eeeeee"}}>
                            {(item.details || []).map((detail, index) => (
                              <li
                                className="text-start"
                                key={item.subject + index}
                              >
                                {detail}
                              </li>
                            ))}
                          </ul>
                        )}
                        <div className="mt-6">
                          <a
                            href={`/funding-solutions${item.path}`}
                            className="text-xm underline mt-12 text-[#eee]"
                          >
                            Learn More
                          </a>
                        </div>
                      </div>
                    </div>
                  </FadeInWhenVisible>
                </div>
              </div>
            )
          );
        })}
      </div>

      <div className="col-span-4 lg:col-span-3 flex justify-center">
        {hidden?.length && (
          <a href="/funding-solutions">
            <ButtonComponent>Explore More Options</ButtonComponent>
          </a>
        )}
      </div>
    </div>
  );
};

export default ExploreMoreSolution;
