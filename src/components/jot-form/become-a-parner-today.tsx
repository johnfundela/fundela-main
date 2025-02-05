"use client";
import { useEffect } from "react";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const window: any;

export default function BecomeAPartnerToday() {
  useEffect(() => {
    if (window && window.jotformEmbedHandler) {
      window.jotformEmbedHandler(
        "iframe[id='JotFormIFrame-243641978923873']",
        "https://forms.fundela.com/"
      );
    }
  }, []);

  return (
    <>
      <iframe
        id="JotFormIFrame-243641978923873"
        title="Become A Partner Today"
        allow="geolocation; microphone; camera; fullscreen"
        src="https://forms.fundela.com/243641978923873"
        scrolling="no"
        style={{
          minWidth: "100%",
          maxWidth: "100%",
          height: 500,
          border: "none",
        }}
      ></iframe>
    </>
  );
}
