"use client";
import { useEffect } from "react";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const window: any;

export default function QuickBaseFinancingForm() {
  useEffect(() => {
    if (window && window.jotformEmbedHandler) {
      window.jotformEmbedHandler(
        "iframe[id='JotFormIFrame-242886869287986']",
        "https://forms.fundela.com/"
      );
    }
  }, []);

  return (
    <>
      <div>
        <iframe
          className="h-full"
          id="JotFormIFrame-242886869287986"
          title="Quickbase Business Financing Application"
          allow="geolocation; microphone; camera; fullscreen"
          src="https://forms.fundela.com/242886869287986"
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
