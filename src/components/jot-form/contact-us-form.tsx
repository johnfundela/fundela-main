"use client";
import { useEffect } from "react";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const window: any;

export default function ContactUsForm() {
  useEffect(() => {
    if (window && window.jotformEmbedHandler) {
      window.jotformEmbedHandler(
        "iframe[id='JotFormIFrame-243474366461057']",
        "https://forms.fundela.com/"
      );
    }
  }, []);

  return (
    <>
      <div>
        <iframe
          id="JotFormIFrame-243474366461057"
          title="Contact information"
          allow="geolocation; microphone; camera; fullscreen"
          src="https://forms.fundela.com/243474366461057"
          style={{
            position: "relative",
            overflow: "hidden",
            width: "100%",
            border: "none",
          }}
          scrolling="no"
        ></iframe>
      </div>
    </>
  );
}
