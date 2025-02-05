"use client";
import { useEffect } from "react";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const window: any;

export default function BusinessFinancingApplicationForm() {
  useEffect(() => {
    if (window && window.jotformEmbedHandler) {
      window.jotformEmbedHandler(
        "iframe[id='JotFormIFrame-242129138516051']",
        "https://forms.fundela.com/"
      );
    }
  }, []);

  return (
    <>
      <div>
        <iframe
          className="h-[100vh]"
          id="JotFormIFrame-242129138516051"
          title="Business Financing Application"
          allow="geolocation; microphone; camera; fullscreen"
          src="https://forms.fundela.com/242129138516051"
          scrolling="no"
          style={{
            position: "relative",
            overflow: "hidden",
            width: "100%",
            border: "none",
          }}
        ></iframe>
      </div>
    </>
  );
}
