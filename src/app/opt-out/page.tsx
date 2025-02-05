import { Metadata } from "next";
import TrustPilot from "@/components/trust-pilot";
import OptOutForm from "@/components/jot-form/opt-out-form";
export const metadata: Metadata = {
  title: "SMS Opt out",
  description: "SMS Opt out",
};

export default function SbaLoansApplication() {
  return (
    <>
      <OptOutForm></OptOutForm>
      <TrustPilot />
    </>
  );
}
