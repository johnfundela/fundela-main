import { Metadata } from "next";
import CommonHero from "@/components/commons/common-hero";
import { ImageComponent } from "@/components/commons/image-component";
import { AccordionComponent } from "@/components/accordion-component";
import CardComponent from "@/components/card-component";
import CommonQuestion from "@/components/commons/common-question";
import Image from "next/image";
export const metadata: Metadata = {
  title: "FAQS",
  description:
    "Do you have questions or concerns about financing and want to learn more about your options? Don’t worry—we’ve got you covered! Take a look at our detailed FAQs below, where you’ll find clear answers and helpful insights to address all your financing-related inquiries.",
};

export default function TermLoans() {
  const creditFaq = [
    {
      question:
        "What is a credit score, and why is it important for business funding?",
      answer:
        "A credit score represents your financial history and creditworthiness. Lenders use it to assess risk and determine eligibility for funding solutions.",
    },
    {
      question: "What is considered a good credit score for business loans?",
      answer:
        "A score of 650 or higher is generally favorable for most financing options. Some solutions may have specific requirements.",
    },
    {
      question: "Will applying for business funding impact my credit score?",
      answer:
        "Yes, some applications may involve a hard credit inquiry, which can temporarily lower your score. Fundela minimizes unnecessary inquiries by pre-qualifying applicants first.",
    },
    {
      question: "Can I get funding with a low credit score?",
      answer:
        "Yes. We offer flexible solutions for businesses with various credit profiles. Options like invoice factoring or asset-based loans focus less on credit and more on cash flow or collateral.",
    },
    {
      question: "How does credit utilization affect funding eligibility?",
      answer:
        "High credit utilization can indicate over-leveraging, which might reduce funding approval chances. Keeping your utilization below 30% is ideal.",
    },
    {
      question:
        "Are there funding solutions for startups with no credit history?",
      answer:
        "Absolutely. Startups can explore solutions like equipment financing or specific SBA loans, which may prioritize business potential and collateral over credit history.",
    },
    {
      question:
        "How can I improve my credit score to access better funding options?",
      answer:
        "Timely payments, reducing outstanding debt, and avoiding frequent hard inquiries can help boost your credit score over time.",
    },
    {
      question: "Does Fundela report loans to credit bureaus?",
      answer:
        "Yes. Responsible repayment of our solutions can positively impact your credit profile.",
    },
    {
      question: "Can personal credit be used for business funding?",
      answer:
        "Yes, especially for sole proprietors or small businesses. However, it’s advisable to maintain a separation between personal and business finances when possible.",
    },
    {
      question:
        "What documents are required for credit-based loan applications?",
      answer:
        "Required documents may include bank statements, credit reports, business tax returns, and proof of revenue.",
    },
  ];

  const genFaq = [
    {
      question: "What financing solutions does Fundela offer?",
      answer: (
        <div>
          We provide a wide range of financial products, including
          <ul>
            <li>• SBA Loans</li>
            <li>• Business Line</li>
            <li>• Business Term Loan</li>
            <li>• Business Bridge Loan</li>
            <li>• SBA Loans</li>
            <li>• Business Advance</li>
            <li>• Consolidation Program</li>
            <li>• Invoice Factoring</li>
            <li>• Asset-Based Loang</li>
            <li>• Equipment Financing</li>
            <li>• Business Credit Card</li>
          </ul>
        </div>
      ),
    },
    {
      question: "How long does it take to get approved?",
      answer:
        "Most solutions offer approvals within 24 to 48 hours once all necessary documents are submitted.",
    },
    {
      question: "Are there prepayment penalties?",
      answer:
        "Most of our products do not have prepayment penalties. For specific product details, please refer to the respective FAQ sections.",
    },
    {
      question: "Can startups qualify for funding?",
      answer:
        "Yes! While some programs require established business metrics, others, like certain equipment financing options, are accessible to startups with strong credit profiles and a solid business plan.",
    },
    {
      question: "What is the application process?",
      answer: (
        <div>
          Applying for funding is simple:
          <ul>
            <li>1. Fill out a 5-minute online application.</li>
            <li>
              2. Review your approval with one of our trusted account managers
            </li>
            <li>3. Secure funding to grow your business.</li>
          </ul>
        </div>
      ),
    },
  ];

  const eqpFinancing = [
    {
      question: "Can I finance used equipment?",
      answer: "Yes, both new and used equipment are eligible for financing",
    },
    {
      question: "What types of equipment can I finance?",
      answer:
        "This includes heavy machinery, vehicles, office equipment, and more.",
    },
    {
      question: "Do I need a down payment?",
      answer:
        "Most cases don’t require one, but a down payment can reduce costs and interest.",
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
  ];

  const consdLoan = [
    {
      question: "Can I consolidate secured and unsecured debt?",
      answer:
        "Yes, both types can be consolidated, depending on your financial situation.",
    },
    {
      question: "Will consolidation hurt my credit score?",
      answer:
        "No. In fact, consolidating debt can improve your credit score by lowering your debt-to-income ratio.",
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

  const sbaLoan = [
    {
      question: "What businesses are eligible for SBA loans?",
      answer:
        "SBA loans cater to a wide range of industries but require specific criteria like business revenue and credit score. Speak to an account manager for details.",
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

  const invoiceFactoring = [
    {
      question: "Do I need good credit for invoice factoring?",
      answer:
        "No. The strength of your invoices, not your credit, determines eligibility.",
    },
    {
      question: "How quickly can I receive funds?",
      answer: "Typically within 1-3 business days after invoice verification.",
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

  return (
    <>
      <CommonHero
        background=""
        title="Welcome to Fundela's General FAQ"
        message="At Fundela, we provide tailored financing solutions to empower small business owners. Whether you're looking for working capital, equipment upgrades, or a way to consolidate debt, we have options designed with your business needs in mind."
        showRedirect={false}
        height="auto"
        rightSection={
          <div className="p-10">
            <div className="relative w-full h-[506px] rounded-3xl">
              <Image
                src={`/professional-man-and-woman-talking.jpg`}
                fill
                objectFit="cover"
                alt="professional-man-and-woman-talking"
                className="object-contain  rounded-3xl"
              ></Image>
            </div>
          </div>
        }
      />
      <div className="flex  justify-center items-center flex-wrap">
        <div className="w-full p-2 lg:w-6/12">
          <ImageComponent
            divClassName="h-[400px] w-full"
            src="man-faq.png"
          ></ImageComponent>
        </div>
        <div className="w-full lg:w-6/12">
          <p className="text-3xl font-bold text-center py-6">
            Common Questions Financing Solutions
          </p>
          <CardComponent className="bg-[#161C2D] p-10 mx-1 xl:mr-10">
            <AccordionComponent
              titleClassName="text-white hover:text-gray"
              subtitleClassName="text-white"
              data={genFaq}
            />
          </CardComponent>
        </div>
      </div>
      <div className="flex pt-6 justify-center items-center flex-wrap">
        <CommonQuestion
          mainTitle={"Common Questions About Credit"}
          mainMessage="Have questions? Our FAQ section is here to provide quick and clear
            answers to all your inquiries about Common Questions About Credit"
          fewQuestions={creditFaq}
        ></CommonQuestion>
      </div>
      <div className="flex  justify-center items-center flex-wrap">
        <CommonQuestion
          mainTitle={"Equipment Financing"}
          mainMessage=""
          fewQuestions={eqpFinancing}
        ></CommonQuestion>
      </div>
      <div className="flex  justify-center items-center flex-wrap">
        <CommonQuestion
          mainTitle={"Consolidation Loans"}
          mainMessage=""
          fewQuestions={consdLoan}
        ></CommonQuestion>
      </div>
      <div className="flex  justify-center items-center flex-wrap">
        <CommonQuestion
          mainTitle={"SBA Loans"}
          mainMessage=""
          fewQuestions={sbaLoan}
        ></CommonQuestion>
      </div>
      <div className="flex  justify-center items-center flex-wrap">
        <CommonQuestion
          mainTitle={"Invoice Factoring"}
          mainMessage=""
          fewQuestions={invoiceFactoring}
        ></CommonQuestion>
      </div>
      <div className="flex  justify-center items-center flex-wrap">
        <CommonQuestion
          mainTitle={"Minimum Requirements for Funding"}
          mainMessage=""
          fewQuestions={[
            {
              question:
                "For most products, these are the basic qualifications:",
              answer: (
                <ul>
                  <li>• Annual Revenue: $150,000+</li>
                  <li>• Credit Score: 550+ (may vary by product)</li>
                  <li>• Time in Business: 6 months to 1 year</li>
                </ul>
              ),
            },
          ]}
        ></CommonQuestion>
      </div>
      <div className="flex  justify-center items-center flex-wrap">
        <CommonQuestion
          mainTitle={"Why Choose Fundela?"}
          mainMessage=""
          fewQuestions={[
            {
              question: "Fundela stands out by offering",
              answer: (
                <ul>
                  <li>• Fast approvals and funding</li>
                  <li>• Tailored solutions for diverse business needs.</li>
                  <li>• Competitive rates and flexible terms.</li>
                  <li>• No hidden fees or prepayment penalties.</li>
                </ul>
              ),
            },
          ]}
        ></CommonQuestion>
      </div>

      <div className="text-teal-400 text-center font-bold text-3xl p-20">
        Still have questions? Contact our team or start your application today!
      </div>
    </>
  );
}
