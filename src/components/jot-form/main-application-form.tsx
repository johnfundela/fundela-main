"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const window: any;

const FORM_ID = "242129138516051";
const BASE_FORM_URL = `https://forms.fundela.com/${FORM_ID}`;
const EMBED_HANDLER_URL = "https://forms.fundela.com/";

export default function MainApplicationForm() {
  const searchParams = useSearchParams();
  const [formSrc, setFormSrc] = useState(BASE_FORM_URL);

  // Update the form source URL based on query parameters
  useEffect(() => {
    const agentEmail = searchParams.get("agentEmail");
    let url = BASE_FORM_URL;
    if (agentEmail) {
      url += `?agentEmail=${encodeURIComponent(agentEmail)}`;
    }
    setFormSrc(url);
  }, [searchParams]);

  // Run the Jotform embed handler logic (similar to the existing component)
  useEffect(() => {
    const iframeId = `JotFormIFrame-${FORM_ID}`;
    const iframeSelector = `iframe[id='${iframeId}']`;

    // Function to initialize the handler
    const initHandler = () => {
      if (window && window.jotformEmbedHandler && document.getElementById(iframeId)) {
        console.log(`Initializing Jotform handler for ${iframeId}`);
        window.jotformEmbedHandler(iframeSelector, EMBED_HANDLER_URL);
        return true; // Handler initialized
      }
      return false; // Handler not ready or iframe not found
    };

    // Try initializing immediately
    if (initHandler()) {
      return; // Stop if initialized
    }

    // If not initialized immediately, set up an interval to check
    const checkInterval = setInterval(() => {
      if (initHandler()) {
        clearInterval(checkInterval); // Stop checking once initialized
      }
    }, 200); // Check every 200ms

    // Cleanup interval on component unmount
    return () => clearInterval(checkInterval);

  }, []); // Run only once on mount

  return (
    <>
      <div>
        <iframe
          className="min-h-[800px] w-full" // Use Tailwind for basic styling
          id={`JotFormIFrame-${FORM_ID}`}
          title="Main Application Form" // Updated title
          allow="geolocation; microphone; camera; fullscreen"
          src={formSrc} // Use dynamic src state
          scrolling="no"
          style={{
            position: "relative", // Keep inline styles from original if needed
            overflow: "hidden",
            border: "none",
          }}
        ></iframe>
      </div>
    </>
  );
}

