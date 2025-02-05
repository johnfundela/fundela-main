"use client";

import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

type AccordionProp = {
  question: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  answer: any;
};

type Props = {
  data: AccordionProp[];
  titleClassName?: string;
  subtitleClassName?: string;
};

export function AccordionComponent({
  data = [],
  titleClassName,
  subtitleClassName,
}: Props) {
  const [open, setOpen] = React.useState<boolean[]>([]);

  const handleOpen = (value: number) => {
    const cloneArr: boolean[] = [...open];
    cloneArr[value] = !cloneArr[value];
    setOpen(cloneArr);
  };

  function icon(id: number, open: boolean) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`${open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    );
  }

  return (
    <>
      {data.map((item, index) => (
        <Accordion
          open={open[index]}
          icon={icon(index, open[index])}
          key={`accordion_${index}`}
        >
          <AccordionHeader
            className={titleClassName}
            onClick={() => handleOpen(index)}
          >
            <span>{item.question}</span>
          </AccordionHeader>
          <AccordionBody className={subtitleClassName}>
            {item.answer}
          </AccordionBody>
        </Accordion>
      ))}
    </>
  );
}
