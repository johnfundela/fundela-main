"use client";
import { useEffect } from "react";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const window: any;

export default function OptOutForm() {
  useEffect(() => {
    if (window && window.jotformEmbedHandler) {
      window.jotformEmbedHandler(
        "iframe[id='JotFormIFrame-250134855543961']",
        "https://forms.fundela.com/"
      );
    }
  }, []);

  return (
    <>
      <div>
        <iframe
          className="h-[100vh]"
          id="JotFormIFrame-250134855543961"
          title="SMS opt out"
          allow="geolocation; microphone; camera; fullscreen"
          src="https://forms.fundela.com/250134855543961"
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
