import { Metadata } from "next";
import TrustPilot from "@/components/trust-pilot";
import CommonHero from "@/components/commons/common-hero";
import ExploreMoreSolution from "@/components/commons/explore-more-solution";
import LatestPost from "../home/latest-post";
export const metadata: Metadata = {
  title: "Funding Solutions",
  description:
    "At Fundela, we understand that the business landscape is ever changing. We recognize that each business faces distinct challenges and has specific requirements. That is why we developed an extensive portfolio of products as we strive to tailor our solutions to your needs.",
};

export default function SbaLoans() {
  return (
    <>
      <CommonHero
        background="group-meeting-agree.jpg"
        title="Funding Solutions"
        message="At Fundela, we understand that the business landscape is ever changing. We recognize that each business faces distinct challenges and has specific requirements. That is why we developed an extensive portfolio of products as we strive to tailor our solutions to your needs."
        redirect="/funding-solutions/sba-loans/application"
        showRedirect={false}
      />
      <ExploreMoreSolution showDetails={true} mainTitle="Explore Our Solutions" subMessage="" theme="dark"/>
      <LatestPost></LatestPost>
      <TrustPilot />
    </>
  );
}
