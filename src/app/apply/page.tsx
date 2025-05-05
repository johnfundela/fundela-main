import { Metadata } from "next";
import { Suspense } from 'react'; // Import Suspense
import MainApplicationForm from "@/components/jot-form/main-application-form";

export const metadata: Metadata = {
  title: "Apply for Financing", // Updated title
  description:
    "Complete our application form to get started with Fundela's financing solutions.", // Updated description
};

// Wrap the component needing useSearchParams in Suspense
function ApplyPageContent() {
  return <MainApplicationForm />;
}

export default function ApplyPage() {
  return (
    <>
      {/* Wrap the component using useSearchParams in Suspense */}
      <Suspense fallback={<div>Loading form...</div>}>
        <ApplyPageContent />
      </Suspense>
      {/* You can include other components like TrustPilot if needed */}
      {/* <TrustPilot /> */}
    </>
  );
}

