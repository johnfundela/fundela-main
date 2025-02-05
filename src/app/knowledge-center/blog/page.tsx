import { Metadata } from "next";
import NewsLetter from "../../home/news-letter";
import CommonHero from "@/components/commons/common-hero";
import LatestPost from "@/app/home/latest-post";
export const metadata: Metadata = {
  title: "Credit",
  description:
    "Asset-Based Loans allow you to leverage your business assets, like real estate, to secure capital. This loan offers flexible repayment options, letting you pay the principal over time or in full at maturity, along with potential interest forgiveness on early repayment.",
};

export default function TermLoans() {
  return (
    <>
      <CommonHero
        background="man-looking-at-credit-card-and-coffee.jpg"
        title="Blog"
        message=""
        showRedirect={false}
      />
      <LatestPost></LatestPost>
      <NewsLetter></NewsLetter>
    </>
  );
}
