type QuestionList = {
  question: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  answer: any;
};

type Props = {
  mainTitle: string;
  mainMessage: string;
  fewQuestions: QuestionList[];
};

import { AccordionComponent } from "../accordion-component";
import { FadeInWhenVisibleLeft } from "../motion/fade-in-when-visible";

const CommonQuestion = ({ mainTitle, mainMessage, fewQuestions }: Props) => {
  return (
    <div className="w-full">
      <FadeInWhenVisibleLeft>
        <div className="bg-gray-200 p-2 md:px-10 2xl:px-40 lg:py-6 w-full">
          <div className="grid grid-cols-2 gap-4 w-full">
            <div className="flex flex-col col-span-2 lg:col-span-1 w-full">
              <span className="text-3xl font-semibold pt-6 2xl:pt-1">{mainTitle}</span>
              <p className="text-lg mt-10">{mainMessage}</p>
            </div>
            <div className="flex flex-col col-span-2 lg:col-span-1 w-full">
              <AccordionComponent data={fewQuestions} />
            </div>
          </div>
        </div>
      </FadeInWhenVisibleLeft>
    </div>
  );
};

export default CommonQuestion;
