"use client";
import { useEffect } from "react";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const window: any;

export default function SbaLoanApplicationForm() {
  useEffect(() => {
    if (window && window.jotformEmbedHandler) {
      window.jotformEmbedHandler(
        "iframe[id='JotFormIFrame-242816618347968']",
        "https://forms.fundela.com/"
      );
    }
  }, []);

  return (
    <>
      <div>
        <iframe
          id="JotFormIFrame-242816618347968"
          title="SBA Loan Application"
          allow="geolocation; microphone; camera; fullscreen"
          src="https://forms.fundela.com/242816618347968"
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
