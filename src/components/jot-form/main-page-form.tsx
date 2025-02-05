"use client";
import { useEffect } from "react";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const window: any;

export default function MainPageForm() {
  useEffect(() => {
    if (window && window.jotformEmbedHandler) {
      window.jotformEmbedHandler(
        "iframe[id='JotFormIFrame-250124394741049']",
        "https://forms.fundela.com/"
      );
    }
  }, []);

  return (
    <>
      <iframe
        id="JotFormIFrame-250124394741049"
        title="Main page Form"
        allow="geolocation; microphone; camera; fullscreen"
        src="https://forms.fundela.com/250124394741049"
        style={{
          position: "relative",
          overflow: "hidden",
          minWidth: "100%",
          maxWidth: "100%",
          border: "none",
        }}
      ></iframe>
    </>
  );
}
