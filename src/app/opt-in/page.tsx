import { Metadata } from "next";
import TrustPilot from "@/components/trust-pilot";
import OptInForm from "@/components/jot-form/opt-in-form";
export const metadata: Metadata = {
  title: "SMS Opt in",
  description:
    "SMS Opt in",
};

export default function SbaLoansApplication() {
  return (
    <>
      <OptInForm></OptInForm>
      <TrustPilot />
    </>
  );
}
