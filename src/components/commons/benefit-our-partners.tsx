import CardComponent from "../card-component";
import { ImageComponent } from "./image-component";

const BenefitOurPartners = () => {
  const benifits = [
    {
      icon: "coin-round.png",
      title: "Large Network of Lenders",
      subtitle:
        "We have a large network of funders, specializing in different products and business profiles.",
    },
    {
      icon: "book-round.png",
      title: "Extensive Portfolio of Products",
      subtitle:
        " We are always expanding our panel of products as we strive to have a solution to satisfy the needs of every client that applies with us.",
    },
    {
      icon: "key-round.png",
      title: "Turnkey and Transparent Process",
      subtitle:
        "We will guide your clients at every step of the way, from the application to the final funding call. Sit back and relax as we handle the rest!",
    },
    {
      icon: "paper-round.png",
      title: "Custom Tailored Solutions",
      subtitle:
        "Every business is unique. At Fundela, we recognize the need for personalized financing. That is why we will work hand in hand with your clients to craft a solution that works well for them.",
    },
    {
      icon: "people-round.png",
      title: "Dedicated Success Team",
      subtitle:
        "Every Client you bring in will have their own dedicated senior account executive that will work tirelessly to meet their needs, all while keeping you in the loop every step of the way.",
    },
  ];

  // man-and-woman-handshake.png
  return (
    <CardComponent className="bg-[#DADFEB]">
      <div className="grid grid-cols-6 p-4  text-black">
        <div
          className="col-span-6 h-56 rounded-2xl relative"
          style={{
            backgroundImage: `url(/man-and-woman-handshake.png),  linear-gradient(#ffffff,#00000020)`,
            backgroundBlendMode: "overlay",
            backgroundColor: "#00000047",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="grid grid-cols-2 p-2  text-black absolute bottom-4">
            <span className="font-bold text-2xl md:text-3xl 2xl:text-4xl col-span-2 xl:col-span-1   text-white left-4">
              Benefits our Partners Enjoy!
            </span>
            <span className="text-lg md:text-xl col-span-2 xl:col-span-1 text-white">
              We strive to create the most exceptional funding experience for
              our partners and their clients. Our partners enjoy working with us
              for many reasons
            </span>
          </div>
        </div>
      </div>
      <div className="justify-center w-full flex justify-center flex-wrap">
        {benifits.map((item, index) => (
          <div
            key={`benifits-${index}`}
            className="w-full md:w-6/12 2xl:w-4/12 p-4"
          >
            <div className="p-4 w-full h-[100%] bg-white rounded-2xl">
              <ImageComponent
                src={item.icon}
                divClassName="h-[80px] w-[80px]"
              ></ImageComponent>
              <p className="mt-6 font-bold text-2xl">{item.title}</p>
              <p className="mt-6 text-xl">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </CardComponent>
  );
};

export default BenefitOurPartners;
