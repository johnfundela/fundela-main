import ButtonComponent from "../button-component";

const TakeTheFirstStepToday = () => {
  const bgLaptopHand = {
    backgroundImage: "url(/hand-laptop.png)",
    backgroundBlendMode: "overlay",
    backgroundSize: "cover",
    backgroundPositionY: "center",
  };

  return (
    <div
      style={bgLaptopHand}
      className="py-4 h-full xl:h-[100vh] flex justify-center flex-col text-center text-white"
    >
      <p className="font-bold text-5xl py-10">Take the First Step Today</p>
      <div className="w-6/12 self-center text-xl">
        Take the First Step Today Your personal and business credit are keys to
        achieving your dreams, and we’re here to help you unlock their full
        potential. Whether you’re repairing, boosting, or building your credit,
        Fundela provides the expertise and support you need to succeed. Ready to
        Take Action? Contact us today for a free consultation, and let’s start
        building the future you deserve.
      </div>
      <div className="p-10">
        <ButtonComponent size="lg" className="bg-teal-800">
          Ready To Take Action?
        </ButtonComponent>
      </div>
      <div className="w-6/12 self-center text-xl">
        Contact us today for a free consultation, and let’s start building the
        future you deserve.
      </div>
    </div>
  );
};

export default TakeTheFirstStepToday;
