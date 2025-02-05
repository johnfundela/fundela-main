import { Metadata } from "next";
import TrustPilot from "@/components/trust-pilot";
import CommonHero from "@/components/commons/common-hero";
import SolutionMadeSimple from "@/components/commons/solution-made-simple";
import HowToApply from "@/components/commons/how-to-apply";
import MinimumRequirement from "@/components/commons/minimum-requirement";
import ExploreMoreSolution from "@/components/commons/explore-more-solution";
import CommonQuestion from "@/components/commons/common-question";
export const metadata: Metadata = {
  title: "Business Bridge Loan",
  description:
    "Business bridge loans are short-term financing solutions designed to cover gaps in cash flow or provide immediate capital for time-sensitive opportunities. Whether you’re looking to cover operational expenses, purchase inventory, or manage seasonal fluctuations, a business bridge loan ensures you have the funding you need to keep moving forward.",
};

export default function BridgeLoans() {
  const solutions = [
    {
      title: "Max Approval",
      message: "Up to $500,000",
    },
    {
      title: "Rate",
      message: "APRs from 8% - 25%",
    },
    {
      title: "Term",
      message: "6 - 18 Months",
    },
    {
      title: "Early Payment Incentives",
      message: "Discounts on interest for early repayment.",
    },
  ];

  const upper = {
    title: "How Business Bridge Loans Can Elevate Your Business ",
    list: [
      "Quickly address cash flow shortages without disrupting operations. ",
      "Take advantage of unexpected growth opportunities or time-sensitive deals. ",
      "Cover urgent expenses like payroll, inventory, or utilities.",
      "Maintain business continuity during seasonal revenue fluctuations.",
      "Access funds fast to reduce stress and focus on growth.",
    ],
  };

  const lower = {
    title: "Minimum Requirements",
    list: [
      "Annual Revenue: $120,000 ",
      "Credit Score: 600+",
      "Time in Business: 6 Months ",
    ],
  };

  const faq = [
    {
      question: "How long does it take to get funding? ",
      answer: "Funds can typically be secured within 24-48 hours of approval. ",
    },
    {
      question: "Are bridge loans secured or unsecured?",
      answer:
        "Both options are available depending on the loan amount and your business profile.",
    },
    {
      question: "What are the repayment terms like? ",
      answer:
        "Repayment terms are short and flexible, ranging from 6 to 18 months",
    },
    {
      question: "Are there any prepayment penalties? ",
      answer:
        "No, early repayment is encouraged, often with incentives like reduced interest. ",
    },
    {
      question: "Can startups qualify for a bridge loan? ",
      answer:
        "Yes, but they must demonstrate strong revenue projections and meet the minimum credit requirements.",
    },
    {
      question: "What can I use a business bridge loan for? ",
      answer:
        "These loans can be used for various purposes, including payroll, inventory purchase, marketing campaigns, and unexpected expenses. ",
    },
  ];

  const howToApply = [
    {
      title: "Apply Online",
      message: "Fill out a 5-minute online application ",
      image: "/fillup-frame.png",
    },
    {
      title: "Get Approved",
      message: "Review your approval with one of our trusted Account Managers ",
      image: "/confirmed-frame.png",
    },
    {
      title: "Receive Funds",
      message: "Secure funding within 24-48 hours",
      image: "/add-income-frame.png",
    },
  ];

  return (
    <>
      <CommonHero
        background="modern-bridge.jfif"
        title="Business Bridge Loan "
        message="Bridge your funding gaps quickly and seamlessly with a flexible short-term solution 
tailored for small businesses. "
      />
      <SolutionMadeSimple
        solutions={solutions}
        title="Business Bridge Loans Made Simple"
        solution="Business Bridge Loans"
        headerMessage="are short-term financing solutions designed to cover gaps in cash flow or 
provide immediate capital for time-sensitive opportunities. Whether you’re looking to cover 
operational expenses, purchase inventory, or manage seasonal fluctuations, a business bridge loan 
ensures you have the funding you need to keep moving forward"
      />
      <HowToApply
        howToApply={howToApply}
        title="How to Apply for a Business Bridge Loan?"
      />
      <MinimumRequirement content={{ upper, lower }} />
      <ExploreMoreSolution
        mainTitle="Don’t Think a Business Bridge Loan is Right for You?"
        subMessage="Explore our vast portfolio of funding options designed to meet your business's unique needs. "
        hidden={[3, 7, 8, 9]}
      />
      <CommonQuestion
        mainTitle="Common Questions About Business Bridge Loans"
        mainMessage="Have questions? Our FAQ section is here to provide quick and clear
            answers to all your inquiries about our Business Bridge Loans."
        fewQuestions={faq}
      ></CommonQuestion>
      <TrustPilot />
    </>
  );
}
