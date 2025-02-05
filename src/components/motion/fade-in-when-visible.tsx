"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

type FadeInWhenVisibleProp = {
  children: ReactNode;
  x?: number;
  y?: number;
  delay?: number;
};

function FadeInWhenVisible({
  children,
  x = 0,
  y = 0,
  delay = 0,
}: FadeInWhenVisibleProp) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: delay, duration: 0.7 }}
      variants={{
        visible: { x: 0, y: 0, opacity: 1 },
        hidden: { x, y, opacity: 0 },
      }}
    >
      {children}
    </motion.div>
  );
}

const timing = 100;
const delay = 0.3;

const FadeInWhenVisibleLeft = ({ children }: FadeInWhenVisibleProp) => {
  return (
    <FadeInWhenVisible x={-timing} delay={delay}>
      {children}
    </FadeInWhenVisible>
  );
};

const FadeInWhenVisibleRight = ({ children }: FadeInWhenVisibleProp) => {
  return (
    <FadeInWhenVisible x={timing} delay={delay}>
      {children}
    </FadeInWhenVisible>
  );
};

const FadeInWhenVisibleTop = ({ children }: FadeInWhenVisibleProp) => {
  return (
    <FadeInWhenVisible y={-timing} delay={delay}>
      {children}
    </FadeInWhenVisible>
  );
};

export {
  FadeInWhenVisibleLeft,
  FadeInWhenVisibleRight,
  FadeInWhenVisibleTop,
  FadeInWhenVisible,
};
