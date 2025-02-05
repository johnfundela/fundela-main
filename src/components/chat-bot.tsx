"use client";

import { useState } from "react";

export default function ChatBot() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="zapier-div w-min fixed bottom-2 right-2 2xl:bottom-[30px] 2xl:right-[30px] ">
        <div className="flex flex-col items-end">
          <iframe
            className="transform scale-[0.8] translate-x-7 translate-y-[50px]"
            src="https://interfaces.zapier.com/embed/chatbot/cm5vf8wbb00138z99pta9abi9"
            height="600px"
            width="400px"
            allow="clipboard-write *"
            style={{ border: "none", display: open ? "" : "none" }}
          ></iframe>
          <div className="bg-white rounded-full px-2 pt-2 cursor-pointer w-min border-2 shadow shadow-black">
            <span
              onClick={() => {
                setOpen(!open);
              }}
              className="material-symbols-outlined text-teal-700"
              style={{
                fontSize: 30,
              }}
            >
              forum
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
