import { Metadata } from "next";
import TrustPilot from "@/components/trust-pilot";
import CommonHero from "@/components/commons/common-hero";
import SolutionMadeSimple from "@/components/commons/solution-made-simple";
import HowToApply from "@/components/commons/how-to-apply";
import ExploreMoreSolution from "@/components/commons/explore-more-solution";
import CommonQuestion from "@/components/commons/common-question";
import MinimumRequirement from "@/components/commons/minimum-requirement";
export const metadata: Metadata = {
  title: "Asset-Based Loan",
  description:
    "Asset-based loans provide businesses with access to capital by leveraging their assets as collateral. These loans are ideal for businesses needing quick, flexible funding to manage growth, cash flow, or unexpected opportunities. Assets such as accounts receivable, inventory, and real estate can serve as security, enabling you to secure funding eAiciently without sacrificing equity.",
};

export default function TermLoans() {
  const solutions = [
    {
      title: "Max Approval",
      message: "Up to $10 Million",
    },
    {
      title: "Rate",
      message: "APRs range from 5% - 15% ",
    },
    {
      title: "Term",
      message: "Up to 5 Years",
    },
    {
      title: "Early Payment Incentives",
      message: "Reduce overall interest with early repayment options. ",
    },
  ];

  const upper = {
    title: "How Asset-Based Loans Can Elevate Your Business",
    list: [
      "Access working capital without compromising ownership.",
      "Leverage the value of your business’s assets to fuel growth.",
      "Ensure smooth cash flow during peak or seasonal demands. ",
      "Strengthen your financial flexibility with tailored repayment terms.",
      "Reduce financial stress with fast, reliable funding.",
    ],
  };

  const lower = {
    title: "Minimum Requirements ",
    list: [
      "Annual Revenue: $250,000+",
      "Credit Score: 650+ ",
      "Time in Business: 1 Year",
    ],
  };

  const faq = [
    {
      question: "What types of assets can be used as collateral?",
      answer:
        "Commonly accepted assets include accounts receivable, inventory, equipment, and real estate. Specific asset eligibility will depend on the lender's criteria. ",
    },
    {
      question: "How quickly can I access funds? ",
      answer:
        "Approval typically takes 48-72 hours, with funding available shortly after. ",
    },
    {
      question: "Will I retain control of my assets?",
      answer:
        "Yes. You retain operational control of your assets; they are simply used as collateral.",
    },
    {
      question: "Are there any prepayment penalties? ",
      answer: "No, we offer flexible terms without prepayment penalties.",
    },
    {
      question: "What if my asset values fluctuate?",
      answer:
        "Loan amounts are recalibrated based on periodic evaluations of the pledged assets, ensuring a fair and transparent process. ",
    },
  ];

  const howToApply = [
    {
      title: "Apply Online",
      message: "Fill out a 5-minute online application. ",
      image: "/fillup-frame.png",
    },
    {
      title: "Get Approved",
      message: "Review your approval with one of our trusted Account Managers.",
      image: "/confirmed-frame.png",
    },
    {
      title: "Receive Funds",
      message: "Secure funding.",
      image: "/add-income-frame.png",
    },
  ];

  return (
    <>
      <CommonHero
        background="real-estate-agent-3people.jfif"
        title="Asset Based Loans"
        message="Unlock capital by leveraging your assets, with flexible payoff options and large funding amounts."
      />
      <SolutionMadeSimple
        solutions={solutions}
        title="Asset-Based Loans Made Simple "
        solution="Asset-Based Loans"
        headerMessage="provide businesses with access to capital by leveraging their assets as 
collateral. These loans are ideal for businesses needing quick, flexible funding to manage growth, 
cash flow, or unexpected opportunities. Assets such as accounts receivable, inventory, and real 
estate can serve as security, enabling you to secure funding eAiciently without sacrificing equity."
      />
      <HowToApply
        howToApply={howToApply}
        title="How to Apply for a Asset-Based Loan"
      />
      <MinimumRequirement content={{ upper, lower }} />
      <ExploreMoreSolution
        mainTitle="Don’t think an asset-based loan is right for your business? "
        subMessage="Explore our comprehensive portfolio of funding solutions, tailored to meet your unique business needs."
        hidden={[6, 7, 8, 9]}
      />
      <CommonQuestion
        mainTitle="Common Questions About Asset-Based Loans"
        mainMessage="Have questions? Our FAQ section is here to provide quick and clear
            answers to all your inquiries about our Asset-Based Loans."
        fewQuestions={faq}
      ></CommonQuestion>
      <TrustPilot />
    </>
  );
}
