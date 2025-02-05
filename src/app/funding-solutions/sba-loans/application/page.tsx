import { Metadata } from "next";
import TrustPilot from "@/components/trust-pilot";
import SbaLoanApplicationForm from "@/components/jot-form/sba-loan-application-form";
export const metadata: Metadata = {
  title: "SBA Loans application",
  description:
    "Leverage government-backed SBA loans to secure long-term, low-interest financing for your business.",
};

export default function SbaLoansApplication() {
  return (
    <>
      <SbaLoanApplicationForm></SbaLoanApplicationForm>
      <TrustPilot />
    </>
  );
}
