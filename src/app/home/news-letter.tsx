"use client";

import { useEffect } from "react";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const window: any;

const NewsLetter = () => {
  useEffect(() => {
    if (window && window.jotformEmbedHandler) {
      window.jotformEmbedHandler(
        "iframe[id='JotFormIFrame-243300962638861']",
        "https://forms.fundela.com/"
      );
    }
  }, []);

  return (
    <div className="bg-teal-600/70">
      <div className="p-6 lg:p-10 flex justify-center">
        <div className="grid grid-cols-2">
          <div className="col-span-2 lg:col-span-1 lg:p-20">
            <p className="text-5xl font-bold text-white text-center lg:text-start">
              Stay updated
            </p>
            <p className="text-5xl font-bold text-white text-center lg:text-start">
              With our Newsletter
            </p>
            <p className="text-normal text-white mt-10 lg:pr-40">
              Join our community and be the first to know about the latest
              updates, exclusive offers, industry insights, and helpful tips.
              Subscribe now to have curated content and special deals delivered
              straight to your inbox—never miss out on what matters most!
            </p>
          </div>
          <div className="flex justify-center items-center flex-col col-span-2 lg:col-span-1 mt-6 lg:mt-0 bg-teal-600/70">
            <div
              id="content"
              className="bg-teal-600/70"
              style={{
                position: "relative",
                overflow: "hidden",
                width: "100%",
              }}
            >
              <iframe
                id="JotFormIFrame-243300962638861"
                title="Subscribe to our newsletter"
                allow="geolocation; microphone; camera; fullscreen"
                src="https://forms.fundela.com/243300962638861"
                className="bg-teal-600/70"
                style={{
                  minWidth: "100%",
                  maxWidth: "100%",
                  height: 539,
                  border: "none",
                }}
                scrolling="no"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
