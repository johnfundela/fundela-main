import { Metadata } from "next";
import TrustPilot from "@/components/trust-pilot";
import CommonHero from "@/components/commons/common-hero";
import SolutionMadeSimple from "@/components/commons/solution-made-simple";
import HowToApply from "@/components/commons/how-to-apply";
import MinimumRequirement from "@/components/commons/minimum-requirement";
import ExploreMoreSolution from "@/components/commons/explore-more-solution";
import CommonQuestion from "@/components/commons/common-question";
export const metadata: Metadata = {
  title: "Business Term Loan",
  description:
    "A business term loan provides a straightforward financing option to help you achieve your goals. Whether you’re looking to expand your business, purchase inventory, or invest in new projects, term loans oƯer a fixed repayment schedule and reliable terms, ensuring peace of mind and financial stability",
};

export default function TermLoans() {
  const solutions = [
    {
      title: "Max Approval",
      message: "Up to $5 Million",
    },
    {
      title: "Rate",
      message: "Competitive fixed rates starting at 6%",
    },
    {
      title: "Term",
      message: "Up to 10 Years ",
    },
    {
      title: "Time to Funding",
      message:
        "Approvals in as little as 24 hours, with funding shortly thereafter",
    },
  ];

  const upper = {
    title: "How Business Term Loans Can Elevate Your Business",
    list: [
      "Predictable Payments: Plan your budget with consistent monthly repayments.",
      "Long-Term Growth: Invest in major projects or expansions with ease. ",
      "Flexible Terms: Customize repayment periods to suit your cash flow. ",
      "Affordable Financing: Enjoy competitive interest rates tailored to your needs.",
    ],
  };

  const lower = {
    title: "Minimum Requirements",
    list: [
      "Annual Revenue: $200,000",
      "Credit Score: 680+",
      "Time in Business: 2 Years ",
    ],
  };

  const faq = [
    {
      question: "What can I use a business term loan for?  ",
      answer:
        "Business term loans can be used for various purposes, including expansion, inventory purchases, equipment acquisition, or marketing campaigns.",
    },
    {
      question: "Are there prepayment penalties?",
      answer:
        " No, you can pay oƯ your loan early without penalties, saving on interest costs.",
    },
    {
      question: "How long does it take to get approved?",
      answer:
        "Approvals are typically processed within 24 hours, with funding following shortly after approval. ",
    },
    {
      question: "Can I qualify if I have a lower credit score?",
      answer:
        "While higher credit scores are preferred, we evaluate your application holistically, considering revenue and business stability",
    },
    {
      question: "Are there any fees associated with the loan?",
      answer:
        "A standard origination fee of 1-3% applies, disclosed upfront during the approval process.",
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
      message: "Review your approval with one of our trusted Account Managers",
      image: "/confirmed-frame.png",
    },
    {
      title: "Receive Funds",
      message: "Secure funding quickly and efficiently.",
      image: "/add-income-frame.png",
    },
  ];

  return (
    <>
      <CommonHero
        background="girl-smiling-kitchen.jfif"
        title="Business Term Loan"
        message="Secure the capital you need to grow, with predictable payments and competitive rates."
      />
      <SolutionMadeSimple
        solutions={solutions}
        title="Business Term Loans Made Simple"
        solution="Business term loan"
        headerMessage="provides a straightforward financing option to help you achieve your goals.
Whether you’re looking to expand your business, purchase inventory, or invest in new projects, term
loans oƯer a fixed repayment schedule and reliable terms, ensuring peace of mind and financial
stability. 
"
      />
      <HowToApply
        howToApply={howToApply}
        title="How to Apply Business Term loans?"
      />
      <MinimumRequirement content={{ upper, lower }} />
      <ExploreMoreSolution
        mainTitle="Don’t Thinkt Business Term Loans Is Right for You?"
        subMessage="Check out our wide range of funding options, including SBA Loans, Business Line of Credit, and more. "
        hidden={[2, 7, 8, 9]}
      />
      <CommonQuestion
        mainTitle="Common Questions About Business Term Loans"
        mainMessage="Have questions? Our FAQ section is here to provide quick and clear
            answers to all your inquiries about our Business Term Loans."
        fewQuestions={faq}
      ></CommonQuestion>
      <TrustPilot />
    </>
  );
}
