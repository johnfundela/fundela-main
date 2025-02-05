import { Metadata } from "next";
import TrustPilot from "@/components/trust-pilot";
import CommonHero from "@/components/commons/common-hero";
import SolutionMadeSimple from "@/components/commons/solution-made-simple";
import HowToApply from "@/components/commons/how-to-apply";
import MinimumRequirement from "@/components/commons/minimum-requirement";
import ExploreMoreSolution from "@/components/commons/explore-more-solution";
import CommonQuestion from "@/components/commons/common-question";
export const metadata: Metadata = {
  title: "Equipment Financing",
  description:
    "Equipment financing is a form of asset based financing that is used to finance equipment purchases without depleting a business's cash reserves. This type of financing is often backed by the equipment being purchased. Whether you’re looking to finance heavy equipment, invest into a new trailer or buy new computers to make your business more efficient- an equipment financing option exists to meet that expense.",
};

export default function TermLoans() {
  const solutions = [
    {
      title: "Funded Amount",
      message: "Up to $5 Million",
    },
    {
      title: "Rate",
      message: "APRs range from 7% - 20%",
    },
    {
      title: "Term",
      message: "Up to 7 Years",
    },
    {
      title: "Time to Funding",
      message:
        "Interest forgiveness on the remaining balance if paid off within the first 18 months",
    },
  ];

  const upper = {
    title: "How equipment financing can elevate your business",
    list: [
      "Access new cutting edge technology with little to no upfront cost",
      "Retain your cash reserves for other business expenses",
      "Stay competitive with new equipment",
      "Flexible financing option to help your business maintain future cash flow",
      "Benefit from your purchase before spending a dime",
      "Scale your operation hassle free",
    ],
  };

  const lower = {
    title: "Minimum Requirements for Eligibility",
    list: [
      "Annual Revenue: $150,000",
      "Credit Score: 650+",
      "Time in Business: 6 Months",
    ],
  };

  const faq = [
    {
      question: "How long does it take to get approved?",
      answer: "Typically, an approval takes around 24 hours to process",
    },
    {
      question: "Can I finance used equipment?",
      answer: "Yes, we offer financing for both new and used equipment",
    },
    {
      question: "Are there prepayment penalties?",
      answer:
        "No. There are no hidden fees or pre payment penalties associated with the products we offer",
    },
    {
      question: "What types of equipment can I finance? ",
      answer:
        "You can finance a wide range of equipment, including heavy machinery, vehicles, office equipment, and specialized tools. ",
    },
    {
      question: "Do I need a down payment?",
      answer:
        "In most cases, no down payment is required. However, a down payment can reduce the overall monthly costs as well as reduce the total interest paid upon maturity of the loan",
    },
    {
      question: "Can startups qualify for equipment financing? ",
      answer:
        "Yes, However the start up owner must have a very strong credit profile along with a well thought out business plan in order to qualify.",
    },
  ];

  const howToApply = [
    {
      title: "Apply Online",
      message: "Take 5 minutes to submit a quick and easy application online",
      image: "/fillup-frame.png",
    },
    {
      title: "Get Approved",
      message:
        "Review your options with one of our experienced and trusted account managers",
      image: "/confirmed-frame.png",
    },
    {
      title: "Receive Funds",
      message: "Secure Funding",
      image: "/add-income-frame.png",
    },
  ];

  return (
    <>
      <CommonHero
        background="checking-equipment.jfif"
        title="Equipment Financing"
        message="Upgrade your business and its machinery with an easy and flexible
 financing solution."
      />
      <SolutionMadeSimple
        solutions={solutions}
        title="Equipment Financing"
        headerMessage="Equipment Financing allows you to acquire or lease essential machinery, technology, or tools for your business. Spread out the cost over time, and take advantage of interest forgiveness if paid off early."
      />
      <HowToApply
        howToApply={howToApply}
        title="How to Apply for a Equipment Financing"
      />
      <MinimumRequirement content={{ upper, lower }} />
      <ExploreMoreSolution
        subMessage="Don’t think equipment financing is right for your business? Check out our vast portfolio
 of funding options"
        hidden={[6, 7, 8, 9]}
      />
      <CommonQuestion
        mainTitle="Common Questions About Equipment financing Loans"
        mainMessage="Have questions? Our FAQ section is here to provide quick and clear
            answers to all your inquiries about our Equipment financing Loans."
        fewQuestions={faq}
      ></CommonQuestion>
      <TrustPilot />
    </>
  );
}
