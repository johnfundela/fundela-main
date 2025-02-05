import { Metadata } from "next";
import TrustPilot from "@/components/trust-pilot";
import CommonHero from "@/components/commons/common-hero";
import SolutionMadeSimple from "@/components/commons/solution-made-simple";
import HowToApply from "@/components/commons/how-to-apply";
import MinimumRequirement from "@/components/commons/minimum-requirement";
import ExploreMoreSolution from "@/components/commons/explore-more-solution";
import CommonQuestion from "@/components/commons/common-question";
export const metadata: Metadata = {
  title: "SBA Loans",
  description:
    "SBA (Small Business Administration) loans are government-backed financing options designed to help small businesses succeed. With flexible terms, low interest rates, and higher borrowing limits, SBA loans can support a wide variety of business needs, from expansion to equipment purchases. These loans provide the stability and aAordability small businesses need to thrive.",
};

export default function SbaLoans() {
  const solutions = [
    {
      title: "Max Approval",
      message: "Up to $5 Million",
    },
    {
      title: "Rate",
      message: "Starting at 6% APR",
    },
    {
      title: "Term",
      message: "Up to 25 Years ",
    },
    {
      title: "Early Payment Incentives",
      message: " Save on interest by paying off early with no penalties",
    },
  ];

  const upper = {
    title: " How SBA Loans Can Elevate Your Business",
    list: [
      "Access affordable financing with competitive rates.",
      "Enjoy long repayment terms for manageable payments.",
      "Unlock larger loan amounts to support big business goals.",
      "Gain peace of mind with government-backed assurance.",
      "Preserve cash flow while making strategic investments. ",
    ],
  };

  const lower = {
    title: "Minimum Requirements ",
    list: [
      "Annual Revenue: $200,000",
      "Credit Score: 680+",
      "Time in Business: 2 Years",
    ],
  };

  const faq = [
    {
      question: "How long does it take to get approved for an SBA loan?",
      answer:
        "The approval process can take 2-4 weeks, depending on the complexity of the loan.",
    },
    {
      question: "Are there any fees associated with SBA loans? ",
      answer:
        "Yes, SBA loans typically have a guarantee fee of 0.5%-3.5%, depending on the loan size.",
    },
    {
      question: "Can I use an SBA loan to refinance existing debt? ",
      answer:
        "Yes, SBA loans can be used to refinance high-interest business debt.",
    },
    {
      question: "What industries qualify for SBA loans?  ",
      answer:
        "Most industries are eligible, but certain businesses (e.g., gambling-related) may face restrictions. ",
    },
    {
      question: "Are SBA loans suitable for startups? ",
      answer:
        "Startups may qualify if the owner has strong credit and provides a solid business plan.",
    },
  ];

  const howToApply = [
    {
      title: "Apply Online",
      message: "Fill out a 5-minute online application.",
      image: "/fillup-frame.png",
    },
    {
      title: "Get Approved",
      message: "Review your approval with one of our trusted account managers.",
      image: "/confirmed-frame.png",
    },
    {
      title: "Receive Funds",
      message: "Secure funding tailored to your business needs.",
      image: "/add-income-frame.png",
    },
  ];

  return (
    <>
      <CommonHero
        background="paperworks.png"
        title="SBA Loans"
        message="Secure affordable, long-term financing to grow your business."
        redirect="/funding-solutions/sba-loans/application"
      />
      <SolutionMadeSimple
        solutions={solutions}
        title="SBA Loans Made Simple"
        solution="SBA (Small Business Administration) loans"
        headerMessage="are government-backed financing options designed to 
help small businesses succeed. With flexible terms, low interest rates, and higher borrowing limits, 
SBA loans can support a wide variety of business needs, from expansion to equipment purchases. 
These loans provide the stability and aAordability small businesses need to thrive."
      />
      <HowToApply
        howToApply={howToApply}
        title="How to Apply for an SBA Loan"
      />
      <MinimumRequirement content={{ upper, lower }} />
      <ExploreMoreSolution
        mainTitle="Don’t think an SBA Loan is right for your business?"
        subMessage="Explore our wide range of funding options, including equipment financing, business credit cards, and more."
        hidden={[0, 7, 8, 9]}
      />
      <CommonQuestion
        mainTitle="Common Questions About SBA Loans"
        mainMessage="Have questions? Our FAQ section is here to provide quick and clear
            answers to all your inquiries about our SBA Loans"
        fewQuestions={faq}
      ></CommonQuestion>
      <TrustPilot />
    </>
  );
}
