import { Metadata } from "next";
import TrustPilot from "@/components/trust-pilot";
import CommonHero from "@/components/commons/common-hero";
import SolutionMadeSimple from "@/components/commons/solution-made-simple";
import HowToApply from "@/components/commons/how-to-apply";
import MinimumRequirement from "@/components/commons/minimum-requirement";
import ExploreMoreSolution from "@/components/commons/explore-more-solution";
import CommonQuestion from "@/components/commons/common-question";
export const metadata: Metadata = {
  title: "Consolidation Loans",
  description:
    "Simplify your debt by consolidating multiple high-interest obligations into one manageable payment..",
};

export default function TermLoans() {
  const solutions = [
    {
      title: "Funded Amount",
      message: "Max Approval – Up to $2 Million",
    },
    {
      title: "Rate",
      message: "APRs range from 6% - 18%",
    },
    {
      title: "Term",
      message: "Up to 7 Years",
    },
    {
      title: "Time to Funding",
      message:
        "No prepayment penalties, allowing you to save on interest by paying down early",
    },
  ];

  const upper = {
    title: "How Consolidation Loans Can Elevate Your Business",
    list: [
      "Lowermonthly payments and reduce interest",
      "Free up cash flow to concentrate on what matters for your business",
      "Simplify finances with one easy to manage payment",
      "Flexible financing option to help your business maintain future cash flow",
      "Remove the stress of managing multiple monthly payments",
      "Stretch out current debt into manageable payment chunks",
    ],
  };

  const lower = {
    title: "Minimum Requirements for Eligibility",
    list: [
      "Annual Revenue: $150,000",
      "Credit Score: 680+",
      "Time in Business: 1 Year",
    ],
  };

  const faq = [
    {
      question: "What types of debt can be consolidated?",
      answer:
        "Most types of business debt can be consolidated. This includes loans, credit cards, and merchant cash advances",
    },
    {
      question: " Will consolidation hurt my credit score?",
      answer:
        "No. If anything, consolidation can improve your credit score by reducing your debt-to-income ratio.",
    },
    {
      question: "Will I have to pay any additional fees for a consolidation loan?",
      answer:
        "Usualy a 1-2% flat origination fee is associated with our consolidation loans. These fees are similar to those banks charge.",
    },
    {
      question: "Can startups qualify for consolidation loans?",
      answer:
        "Typically, consolidation loans are designed for established businesses with existing debts, but we offer alternative solutions for startups.",
    },
    {
      question: "How long does it take to process a consolidation loan?",
      answer:
        "Consolidation loans can take time to process. Once all supplemental materials are submitted, it will take around w4 hours to generate an approval",
    },
    {
      question: "Can I consolidate both secured and unsecured debts?",
      answer:
        "Yes, both secured and unsecured business debts can be consolidated, depending on your financial situation and lender requirements.",
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
        background="hand-writing.jfif"
        title="Consolidation Loans"
        message="Refinance your debt and get some extra capital on top in one payment at a
 flexible term"
      />
      <SolutionMadeSimple
        solutions={solutions}
        title="Consolidation Loans"
        solution="Consolidation Loans"
        headerMessage="Streamline your cash flow and consolidate your debt with our business debt consolidation
 programs. Our clients take advantage of these loans to simplify their debt repayment schedule,
 converting multiple loans into one payment. These loans help reduce interest and extend the
 term for business owners"
      />
      <HowToApply
        howToApply={howToApply}
        title="How to Apply for a Consolidation Loan"
      />
      <MinimumRequirement content={{ upper, lower }} />
      <ExploreMoreSolution
        subMessage=" Don’t think a consolidation is right for your business? Check out our vast portfolio of
 funding options"
        hidden={[5, 7, 8, 9]}
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
