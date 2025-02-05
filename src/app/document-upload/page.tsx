import { Metadata } from "next";
import TrustPilot from "@/components/trust-pilot";
import DocumentUploadForm from "@/components/jot-form/document-upload-form";
export const metadata: Metadata = {
  title: "Document Upload Form",
  description:
    "Leverage government-backed SBA loans to secure long-term, low-interest financing for your business.",
};

export default function SbaLoansApplication() {
  return (
    <>
      <DocumentUploadForm></DocumentUploadForm>
      <TrustPilot />
    </>
  );
}
