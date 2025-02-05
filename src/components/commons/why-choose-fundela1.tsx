import Image from "next/image";

const WhyChooseFundela1 = () => {
  return (
    <div className="bg-[#292929] grid grid-cols-2 text-white px-4 xl:px-60 py-10">
      <div className="col-span-2 xl:col-span-1 ">
        <p className="text-6xl font-bold my-12">Why Choose Fundela?</p>
        <span className="text-xl">
          We’re not just another credit service. Fundela is your partner in
          <p></p>
          building a stronger financial foundation for both your personal life
          and your business.
        </span>
        <p className="text-3xl font-bold my-10 text-teal-400">
          Customized Solutions
        </p>
        <span className="text-xl">
          No cookie-cutter plans here. We tailor strategies to fit your unique
          needs and goals.
        </span>
        <p className="text-3xl font-bold my-10 text-teal-400">
          Real-Time Tracking
        </p>
        <span className="text-xl">
          Stay updated on your progress with regular updates and real-time
          credit monitoring.
        </span>
        <p className="text-3xl font-bold my-10 text-teal-400">
          Expert Guidance
        </p>
        <span className="text-xl">
          Learn from our team of experts and gain the knowledge to maintain your
          credit for years to come.
        </span>
      </div>
      <div className=" h-[200px] xl:h-full relative col-span-2 xl:col-span-1">
        <Image
          src="/mobile-2-group.png"
          fill
          alt="gentleman wearing suit"
          className="object-contain"
        ></Image>
      </div>
    </div>
  );
};

export default WhyChooseFundela1;
