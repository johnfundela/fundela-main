import CardComponent from "../card-component";
import { ImageComponent } from "./image-component";

const BenefitOurPartners = () => {
  const benifits = [
    {
      icon: "book-open-round.png",
      title: "Consultations",
      subtitle:
        "Discuss with one of our specialists, the crucial details, &nbsp;your business credit profile, and design a strategy that is aligned with your goals.",
    },
    {
      icon: "handshake-round.png",
      title: "Business Setup Assistance",
      subtitle:
        "We help you through the steps of establishing an LLC and filing the necessary forms to ensure your business has the right foundation.",
    },
    {
      icon: "creditcard-round.png",
      title: "Credit Access Support",
      subtitle:
        "Get assistance from us to get specific credit needed for your sector; whether it is from traditional lenders or alternative options.",
    },
  ];

  // man-and-woman-handshake.png
  return (
    <CardComponent className="bg-[#DADFEB]">
      <div className="grid grid-cols-6  text-black">
        <div
          className="col-span-6 md:h-96 rounded-2xl relative"
          style={{
            backgroundImage: `url(/outdoor-highrise-building.jpg),  linear-gradient(#c2c0c0, #000000a6)`,
            backgroundBlendMode: "overlay",
            backgroundColor: "#00000047",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPositionY: "30%",
          }}
        >
          <div className="grid grid-cols-2 p-2 text-black md:absolute bottom-4">
            <span className="font-bold text-2xl md:text-3xl 2xl:text-4xl col-span-2 xl:col-span-1   text-white left-4">
              Building Business Credit
            </span>
            <span className="text-lg md:text-xl col-span-2 xl:col-span-1 text-white">
              Your business credit profile is just as important as your personal
              credit—especially if you want to separate your business finances
              from your personal ones. Fundela’s Business Credit Building
              Program is designed to strengthen your company’s financial
              foundation, giving you access to funding, better vendor terms, and
              the ability to grow without limits.
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
