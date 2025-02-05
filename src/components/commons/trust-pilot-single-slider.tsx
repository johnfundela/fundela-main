"use client";

import { useEffect, useRef, useState } from "react";
import { FadeInWhenVisible } from "@/components/motion/fade-in-when-visible";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const window: any;

type Props = {
  canClick?: boolean;
  height?: string | number;
};

const TrustPilotSigleSlider = ({
  canClick = true,
  height = "240px",
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState<boolean>();
  useEffect(() => {
    setMounted(true);
    const aScript = document.createElement("script");
    aScript.type = "text/javascript";
    aScript.src =
      "//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js";
    aScript.async = true;
    document.head.appendChild(aScript);
    aScript.onload = function () {
      const trustbox = ref.current;
      if (trustbox) {
        window.Trustpilot.loadFromElement(trustbox);
      }
    };
  }, []);

  return (
    <FadeInWhenVisible delay={0.5}>
      {mounted && typeof window !== "undefined" ? (
        <div
          ref={ref}
          className="trustpilot-widget"
          data-locale="en-US"
          data-template-id="54ad5defc6454f065c28af8b"
          data-businessunit-id="66945f734bade719bbb0c39b"
          data-style-height={height}
          data-style-width="100%"
          data-stars="5"
          data-review-languages="en"
        >
          {canClick && (
            <a
              href="https://www.trustpilot.com/review/www.fundela.com"
              target="_blank"
              rel="noopener"
            >
              Trustpilot
            </a>
          )}
        </div>
      ) : (
        <div></div>
      )}
    </FadeInWhenVisible>
  );
};

export default TrustPilotSigleSlider;
