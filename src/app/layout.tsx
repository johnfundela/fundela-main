import localFont from "next/font/local";
import "./globals.css";
import "material-symbols";
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";
import "keen-slider/keen-slider.min.css";
import ChatBot from "@/components/chat-bot";

const geistSans = localFont({
  src: "./fonts/Jost-VariableFont_wght.ttf",
  variable: "--font-jost",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <script
          async
          type="module"
          src="https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js"
        ></script> */}
        {/* <zapier-interfaces-chatbot-embed
          is-popup="true"
          chatbot-id="cm5vf8wbb00138z99pta9abi9"
        ></zapier-interfaces-chatbot-embed> */}
        <script async src="node_modules/keen-slider/keen-slider.js"></script>
        <script
          type="text/javascript"
          src="/js/trustpilot.min.js"
          async
        ></script>
        <script
          type="text/javascript"
          async
          src="/js/for-form-embed-handler.js"
        ></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${geistSans.variable}  antialiased`}>
        <Header></Header>
        <div className="bg-[#F4F7FA]">{children}</div>
        <Footer />
        <div className="zapier-div w-min fixed bottom-2 right-2 2xl:bottom-[30px] 2xl:right-[30px]">
          <ChatBot />
        </div>
      </body>
    </html>
  );
}
