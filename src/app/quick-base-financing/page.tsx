import { Metadata } from "next";
import TrustPilot from "@/components/trust-pilot";
import QuickBaseFinancingForm from "@/components/jot-form/quick-base-financing-form";
export const metadata: Metadata = {
  title: "Quick Base Financing Application",
  description:
    "Leverage government-backed SBA loans to secure long-term, low-interest financing for your business.",
};

export default function SbaLoansApplication() {
  return (
    <>
      <QuickBaseFinancingForm></QuickBaseFinancingForm>
      <TrustPilot />
    </>
  );
}
