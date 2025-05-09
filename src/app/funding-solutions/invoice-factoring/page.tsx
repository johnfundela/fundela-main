import { Metadata } from "next";
import TrustPilot from "@/components/trust-pilot";
import CommonHero from "@/components/commons/common-hero";
import SolutionMadeSimple from "@/components/commons/solution-made-simple";
import HowToApply from "@/components/commons/how-to-apply";
import MinimumRequirement from "@/components/commons/minimum-requirement";
import ExploreMoreSolution from "@/components/commons/explore-more-solution";
import CommonQuestion from "@/components/commons/common-question";
export const metadata: Metadata = {
  title: "Invoice Factoring",
  description:
    "Invoice factoring enables businesses to convert unpaid invoices into working capital. This financial solution ensures that your operations remain uninterrupted, providing immediate cash flow by leveraging your accounts receivable. Ideal for businesses waiting on customer payments, invoice factoring helps cover payroll, operational costs, or expansion needs.",
};

export default function TermLoans() {
  const solutions = [
    {
      title: "Max Approval",
      message: "Up to 95% of invoice value",
    },
    {
      title: "Rate",
      message: "1-5% factoring fee",
    },
    {
      title: "Term",
      message: "Based on invoice cycle (typically 30-90 days)",
    },
    {
      title: "Early Payment Incentives",
      message: "N/A; capital is provided based on receivables, with no additional fees",
    },
  ];

  const upper = {
    title: "How Invoice Factoring Can Elevate Your Business ",
    list: [
      "Maintain consistent cash flow even during client payment delays. ",
      "Free up resources to focus on growth and operational eAiciency.",
      "Avoid accumulating debt, as factoring isn’t a loan.",
      "Improve financial flexibility with quick access to capital.",
      "Eliminate the stress of managing unpaid invoices.",
    ],
  };

  const lower = {
    title: "Minimum Requirements ",
    list: [
      "Annual Revenue: $100,000 ",
      "Credit Score: 600+ (focuses more on customer reliability than business credit) ",
      "Time in Business: 6 months",
    ],
  };

  const faq = [
    {
      question: "What types of invoices qualify for factoring?",
      answer:
        "Any invoice issued to creditworthy customers in the B2B sector is eligible for factoring. ",
    },
    {
      question: "How soon can I get funded after submitting an invoice?",
      answer:
        "Typically, businesses receive funding within 24–48 hours after invoice submission",
    },
    {
      question: "Is invoice factoring considered a loan?",
      answer:
        "No, invoice factoring is not a loan. It's a sale of your receivables for immediate cash.",
    },
    {
      question: "Will my customers know I’m using invoice factoring? ",
      answer:
        "Yes, as the factoring company will handle collections on your behalf",
    },
    {
      question: "Are there limits on the number of invoices I can factor?",
      answer:
        "No, you can factor as many invoices as your business needs, as long as they meet the eligibility criteria.",
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
      message: "Secure funding within 24–48 hours.",
      image: "/add-income-frame.png",
    },
  ];

  return (
    <>
      <CommonHero
        background="meeting-with-business-partner.jfif"
        title="Invoice Factoring"
        message="Convert your outstanding invoices into immediate cash flow to maintain smooth operations."
      />
      <SolutionMadeSimple
        solutions={solutions}
        title="Invoice Factoring Made Simple"
        solution="Invoice factoring"
        headerMessage="enables businesses to convert unpaid invoices into working capital. This financial 
solution ensures that your operations remain uninterrupted, providing immediate cash flow by 
leveraging your accounts receivable. Ideal for businesses waiting on customer payments, invoice 
factoring helps cover payroll, operational costs, or expansion needs. "
      />
      <HowToApply
        howToApply={howToApply}
        title="How to Apply for Invoice Factoring "
      />
      <MinimumRequirement content={{ upper, lower }} />
      <ExploreMoreSolution
        mainTitle="Don’t Think Invoice Factoring Is Right for Your Business?"
        subMessage="Check out our wide range of funding options, including SBA Loans, Business Line of Credit, and more. "
        hidden={[6, 7, 8, 9]}
      />
      <CommonQuestion
        mainTitle="Common Questions About Invoice Factoring"
        mainMessage="Have questions? Our FAQ section is here to provide quick and clear
            answers to all your inquiries about our Invoice Factoring."
        fewQuestions={faq}
      ></CommonQuestion>
      <TrustPilot />
    </>
  );
}
