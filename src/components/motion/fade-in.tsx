"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

type FadeInProp = {
  children: ReactNode;
  x?: number;
  y?: number;
  delay?: number;
};

function FadeIn({ children, x = 0, y = 0, delay = 0 }: FadeInProp) {
  return (
    <motion.div
      initial="hidden"
      transition={{ delay: delay, duration: 0.7 }}
      animate={{ x: 0, y: 0, opacity: 1 }}
      variants={{
        hidden: { x, y, opacity: 0 },
      }}
    >
      {children}
    </motion.div>
  );
}

const timing = 100;
const delay = 0.3;

const FadeInLeft = ({ children }: FadeInProp) => {
  return (
    <FadeIn x={-timing}>
      {children}
    </FadeIn>
  );
};

const FadeInRight = ({ children }: FadeInProp) => {
  return (
    <FadeIn x={timing} delay={delay}>
      {children}
    </FadeIn>
  );
};

const FadeInTop = ({ children }: FadeInProp) => {
  return (
    <FadeIn y={-timing} delay={delay}>
      {children}
    </FadeIn>
  );
};


const FadeInBottom = ({ children }: FadeInProp) => {
  return (
    <FadeIn y={timing} delay={delay}>
      {children}
    </FadeIn>
  );
};
export { FadeInLeft, FadeInRight, FadeInTop, FadeIn, FadeInBottom };
