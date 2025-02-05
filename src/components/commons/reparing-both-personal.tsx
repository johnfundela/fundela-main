import CardComponent from "../card-component";

const ReparingBothPersonal = () => {
  return (
    <div className="bg-gray-200 p-10">
      <p className="font-bold text-4xl text-center text-[#1F2937]">
        Repairing Both Personal and Business Credit
      </p>
      <p className="mt-6 text-center">
        If you’ve faced financial setbacks, we’re here to help you recover.
        Whether it’s your personal credit, your business credit,
      </p>
      <p className="text-center">
        or both, Fundela offers effective repair services to clean up your
        profile and give you a fresh start.
      </p>
      <div className="grid grid-cols-2 xl:p-10 gap-5">
        <div className="xl:pl-40 m-4 col-span-2 xl:col-span-1">
          <CardComponent>
            <div className="m-4 text-[#1F2937]">
              <p className="mb-4 text-2xl font-bold">
                Personal Credit Repair Services
              </p>
              <ul className="list-disc ml-10">
                <li className="mt-4">
                  Remove hard inquiries, late payments, and collections.
                </li>
                <li className="mt-4">
                  Resolve charge-offs, repossessions, bankruptcies, and
                  foreclosures.
                </li>
                <li className="mt-4">
                  Improve payment history to boost your credit score.
                </li>
              </ul>
            </div>
          </CardComponent>
        </div>
        <div className="xl:pr-40 m-4 col-span-2 xl:col-span-1">
          <CardComponent className="bg-[#1F2937]">
            <div className="m-4 text-[#eee]">
              <p className="mb-4 text-2xl font-bold">
                Business Credit Repair Services
              </p>
              <ul className="list-disc ml-10 text-[#eee]">
                <li className="mt-4">
                  Address issues with vendor accounts, business loans, and
                  payment records.
                </li>
                <li className="mt-4">
                  Remove errors or negative items holding back your PAYDEX
                  score.
                </li>
                <li className="mt-4">
                  Build credibility with creditors and suppliers to secure
                  better terms.
                </li>
              </ul>
            </div>
          </CardComponent>
        </div>
        <div className="col-span-2 text-center font-bold text-xl m-6 text-[#1F2937]">
          We handle the heavy lifting while you focus on achieving your
          financial goals.
        </div>
      </div>
    </div>
  );
};

export default ReparingBothPersonal;
