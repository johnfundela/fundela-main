import { Metadata } from "next";
import TrustPilot from "@/components/trust-pilot";
import CommonHero from "@/components/commons/common-hero";
import SolutionMadeSimple from "@/components/commons/solution-made-simple";
import HowToApply from "@/components/commons/how-to-apply";
import MinimumRequirement from "@/components/commons/minimum-requirement";
import ExploreMoreSolution from "@/components/commons/explore-more-solution";
import CommonQuestion from "@/components/commons/common-question";
export const metadata: Metadata = {
  title: "Business Line of Credit",
  description:
    "A business line of credit provides ongoing access to funds that you can use as needed, similar to a credit card but with the benefits of lower rates and higher limits. It’s a revolving credit line designed to give business owners the flexibility to manage expenses, seize growth opportunities, or address unexpected challenges. Draw funds only when necessary and pay interest solely on what you use. ",
};

export default function LineOfCredit() {
  const solutions = [
    {
      title: "Max Approval:",
      message: "Up to $1 Million",
    },
    {
      title: "Rate",
      message: "Starting as low as 6% APR",
    },
    {
      title: "Term",
      message: "Revolving",
    },
    {
      title: "Time to Funding",
      message: "As fast as 24 hours",
    },
  ];

  const upper = {
    title: "How a Business Line of Credit Can Elevate Your Business",
    list: [
      "Gain quick access to working capital without applying for a loan each time. ",
      "Cover seasonal expenses or bridge cash flow gaps eƯortlessly",
      "Seize new opportunities when they arise, such as inventory purchases or new projects.",
      "Only pay interest on the funds you use, saving you money.",
    ],
  };

  const lower = {
    title: "Minimum Requirements",
    list: [
      "Annual Revenue: $150,000",
      "Credit Score: 650+",
      "Time in Business: 6 months",
    ],
  };

  const faq = [
    {
      question: "What can I use a business line of credit for? ",
      answer:
        "It can be used for a wide variety of purposes, including payroll, purchasing inventory, managing seasonal expenses, and funding unexpected costs. ",
    },
    {
      question: "How is a business line of credit different from a term loan?",
      answer:
        "Unlike a term loan, which provides a lump sum upfront, a line of credit allows you to draw funds as needed, offering greater flexibility.",
    },
    {
      question: "Are there penalties for not using my line of credit? ",
      answer:
        "No, there are no penalties for unused funds. You only pay interest on the funds you draw.",
    },
    {
      question: "How often can I access the funds?",
      answer:
        " You can draw funds as often as needed, up to your approved credit limit.",
    },
    {
      question: "How is the repayment structured? ",
      answer:
        "Repayments are typically made monthly based on the amount drawn and the interest accrued.",
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
      message: "Secure funding and access your line of credit. ",
      image: "/add-income-frame.png",
    },
  ];

  return (
    <>
      <CommonHero
        background="buildings.jfif"
        title="Business Line of Credit "
        message="Flexible access to capital for your business whenever you need it."
      />
      <SolutionMadeSimple
        solutions={solutions}
        title="Business Line of Credit Made Simple"
        solution="Business Line of Credit"
        headerMessage="provides ongoing access to funds that you can use as needed, similar to a
credit card but with the benefits of lower rates and higher limits. It’s a revolving credit line designed
to give business owners the flexibility to manage expenses, seize growth opportunities, or address
unexpected challenges. Draw funds only when necessary and pay interest solely on what you use"
      />
      <HowToApply
        howToApply={howToApply}
        title="How to Apply for a Business Line of Credit"
      />
      <MinimumRequirement content={{ upper, lower }} />
      <ExploreMoreSolution
        mainTitle="Don’t Think a Business Line of Credit Is Right for Your Business?"
        subMessage="Check out our vast portfolio of funding options, including:
SBA Loans, Business Term Loans, Equipment Financing, and more."
        hidden={[1, 7, 8, 9]}
      />
      <CommonQuestion
        mainTitle="Common Questions About Business Lines of Credit"
        mainMessage="Have questions? Our FAQ section is here to provide quick and clear
            answers to all your inquiries about our Business Lines of Credit."
        fewQuestions={faq}
      ></CommonQuestion>
      <TrustPilot />
    </>
  );
}
