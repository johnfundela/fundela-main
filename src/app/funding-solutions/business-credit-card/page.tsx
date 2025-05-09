import { Metadata } from "next";
import TrustPilot from "@/components/trust-pilot";
import CommonHero from "@/components/commons/common-hero";
import SolutionMadeSimple from "@/components/commons/solution-made-simple";
import HowToApply from "@/components/commons/how-to-apply";
import ExploreMoreSolution from "@/components/commons/explore-more-solution";
import CommonQuestion from "@/components/commons/common-question";
import MinimumRequirement from "@/components/commons/minimum-requirement";
export const metadata: Metadata = {
  title: "Business Credit Card",
  description:
    "offers a revolving line of credit to cover your everyday expenses, manage cash flow, and take advantage of exclusive rewards and incentives. Whether it's purchasing inventory, paying for travel, or covering unexpected costs, a business credit card provides the flexibility and control your business needs to thrive.",
};

export default function TermLoans() {
  const solutions = [
    {
      title: "Credit Limit",
      message: "Up to $500,000 (based on creditworthiness)",
    },
    {
      title: "Rates",
      message: "APRs range from 12% - 25% (0% for the first 18 months)",
    },
    {
      title: "Term",
      message: "Revolving (payment cycles typically 30 days)",
    },
    {
      title: "Special Incentives",
      message: "Interest-free if paid within the billing cycle.",
    },
  ];

  const upper = {
    title: "How a Business Credit Card Can Elevate Your Business",
    list: [
      "Improve cash flow with a revolving credit line. ",
      "Earn cashback or rewards on everyday business expenses.",
      "Earn rewards on purchases, maximizing value",
      "Build your business credit score for future financing opportunities. ",
      "Access exclusive travel, dining, and purchasing benefits.",
      "Separate personal and business expenses for better financial management.",
    ],
  };

  const lower = {
    title: "Minimum Requirements",
    list: [
      "Annual Revenue: $100,000+ ",
      "Credit Score: 700+",
      "Time in Business: 6 Months+",
    ],
  };

  const faq = [
    {
      question: "Are business credit cards secured or unsecured? ",
      answer:
        "Business credit cards are typically unsecured, requiring no collateral. ",
    },
    {
      question:
        "Will using a business credit card aƯect my personal credit score?",
      answer:
        "If the card is tied to a personal guarantee, it can impact your credit if payments are missed",
    },
    {
      question: "What kind of rewards can I earn? ",
      answer:
        "Rewards vary but often include cashback, travel points, and discounts on business services.",
    },
    {
      question: "Are there fees for exceeding the credit limit? ",
      answer:
        "Yes, exceeding your credit limit may incur fees, but these can vary by card issuer. ",
    },
    {
      question: "How long does it take to get approved? ",
      answer:
        "Approval usually takes 1–2 business days, with immediate access upon confirmation. ",
    },
  ];

  const howToApply = [
    {
      title: "Apply Online",
      message: "Complete a 5-Minute Online Application",
      image: "/fillup-frame.png",
    },
    {
      title: "Financial information",
      message: "Share your basic business details and financial information. ",
      image: "/confirmed-frame.png",
    },
    {
      title: "Account Manager",
      message: "Review Your Approval with an Account Manager",
      image: "/add-income-frame.png",
    },
    {
      title: "Card Options",
      message: "Receive a credit limit and tailored card options.",
      image: "/add-income-frame.png",
    },
    {
      title: "Use Your Card",
      message: "Start Using Your Card",
      image: "/add-income-frame.png",
    },
    {
      title: "Access To Funds",
      message: "Gain immediate access to funds upon approval. ",
      image: "/add-income-frame.png",
    },
  ];

  return (
    <>
      <CommonHero
        background="show-credit-card.jfif"
        title="Business Credit Card"
        message="Fuel Your Business Growth with Unmatched Flexibility"
        sub="Empower your business with a credit card tailored to meet your operational and growth needs. 
Apply today and unlock financial freedom to manage your expenses smartly."
      />
      <SolutionMadeSimple
        solutions={solutions}
        title="Business Credit Cards Made Simple"
        solution="Business Credit Cards"
        headerMessage="offers a revolving line of credit to cover your everyday expenses, manage cash flow, and take advantage of exclusive rewards and incentives. Whether it's purchasing inventory, paying for travel, or covering unexpected costs, a business credit card provides the flexibility and control your business needs to thrive. "
      />
      <HowToApply
        title="How to Apply for a Business Credit Card?"
        howToApply={howToApply}
      />
      <MinimumRequirement content={{ upper, lower }} />
      <ExploreMoreSolution
        mainTitle="Don’t Think a Business Credit Cards is Right for You?"
        subMessage="Explore our vast portfolio of funding options designed to meet your business's unique needs."
        hidden={[6, 7, 8, 9]}
      />
      <CommonQuestion
        mainTitle="Common Questions About Business Credit Cards "
        mainMessage="Have questions? Our FAQ section is here to provide quick and clear
            answers to all your inquiries about our Business Credit Cards."
        fewQuestions={faq}
      ></CommonQuestion>
      <TrustPilot />
    </>
  );
}
