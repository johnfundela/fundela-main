"use client";

import { useEffect, useRef, useState } from "react";
import { FadeInWhenVisible } from "@/components/motion/fade-in-when-visible";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const window: any;

type Props = {
  canClick?: boolean;
  height?: string | number;
};

const TrustPilotCarousel = ({ canClick = true }: Props) => {
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
          className="trustpilot-widget"
          data-locale="en-US"
          data-template-id="53aa8912dec7e10d38f59f36"
          data-businessunit-id="66945f734bade719bbb0c39b"
          data-style-height="140px"
          data-style-width="100%"
          data-stars="1,2,3,4,5"
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

export default TrustPilotCarousel;
