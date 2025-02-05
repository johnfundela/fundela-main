import { Metadata } from "next";
import TrustPilot from "@/components/trust-pilot";
import BusinessFinancingApplicationForm from "@/components/jot-form/business-financing-application-form";
export const metadata: Metadata = {
  title: "Business financing form",
  description:
    "Leverage government-backed SBA loans to secure long-term, low-interest financing for your business.",
};

export default function SbaLoansApplication() {
  return (
    <>
      <BusinessFinancingApplicationForm></BusinessFinancingApplicationForm>
      <TrustPilot />
    </>
  );
}
