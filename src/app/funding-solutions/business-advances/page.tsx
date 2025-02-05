import { Metadata } from "next";
import TrustPilot from "@/components/trust-pilot";
import CommonHero from "@/components/commons/common-hero";
import SolutionMadeSimple from "@/components/commons/solution-made-simple";
import HowToApply from "@/components/commons/how-to-apply";
import MinimumRequirement from "@/components/commons/minimum-requirement";
import ExploreMoreSolution from "@/components/commons/explore-more-solution";
import CommonQuestion from "@/components/commons/common-question";
export const metadata: Metadata = {
  title: "Business Advances",
  description:
    "Access quick and easy capital within hours with the easiest approval process in our portfolio.",
};

export default function TermLoans() {
  const solutions = [
    {
      title: "Funded Amount",
      message: "Up to $1 Million",
    },
    {
      title: "Rate",
      message: "Simple interest from 16% - 48%",
    },
    {
      title: "Term",
      message: "Up to 12 Months",
    },
    {
      title: "Time to Funding",
      message: "Funds available within hours after approval",
    },
  ];

  const upper = {
    title: "How Bridge Loans Can Elevate Your Business",
    list: [
      "Rapid funding to address urgent financial needs",
      "Straightforward approval process for fast access",
      "Flexible payment terms, with potential interest forgiveness on early payments (case by case)",
      "Supports businesses with varied cash flow needs",
      "Ideal for short-term capital needs",
    ],
  };

  const lower = {
    title: "Minimum Requirements for Eligibility",
    list: [
      "Annual Revenue: Varies based on loan amount",
      "Credit Score: Typically 550 or higher",
      "Time in Business: At least 6 months",
    ],
  };

  const faq = [
    {
      question: "How does repayment work for a Business Advance?",
      answer:
        "Repayments are tied to your business's revenue, ensuring flexibility during slower periods. ",
    },
    {
      question: "Can I apply if I have bad credit? ",
      answer:
        "Yes, our approval process focuses more on your business’s revenue than your credit score.",
    },
    {
      question: "How fast can I receive funding?",
      answer: "Once approved, you can access funds in as little as 24 hours. ",
    },
    {
      question: "What can I use a Business Advance for? ",
      answer:
        "It can be used for a variety of purposes, including inventory, marketing, payroll, or other operational needs.",
    },
    {
      question: "Are there prepayment penalties? ",
      answer:
        "No, there are no prepayment penalties, allowing you to save on fees if you pay oA early.",
    },
  ];
  return (
    <>
      <CommonHero
        background="people-closeup-handshake.jfif"
        title="Business Advances"
        message="Access quick and easy capital within hours with the easiest approval process in our portfolio."
        redirect="/funding-solutions/business-advances/application"
      />
      <SolutionMadeSimple
        solutions={solutions}
        title="Business Advances"
        solution="Business Advances"
        headerMessage="provide fast funding with a simple approval process, though typically at a higher cost. Perfect for businesses needing immediate capital, this option has flexible terms and potential early payment incentives based on individual cases."
      />
      <HowToApply title="How to Apply for a Businness Advance" />
      <MinimumRequirement content={{ upper, lower }} />
      <ExploreMoreSolution hidden={[4, 7, 8, 9]} />
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
