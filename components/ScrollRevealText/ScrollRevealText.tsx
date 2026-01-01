"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface Props {
  text: string;
  className?: string;
}

const ScrollRevealText = ({ text, className }: Props) => {
  const ref = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "start 0.1"],
  });

  const words = text.split(" ");

  return (
    <p
      ref={ref}
      className={`flex items-center gap-x-2 md:gap-x-4 flex-wrap justify-center xl:container xl:mx-auto
      xl:px-20 ${className}`}
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;

        const color = useTransform(
          scrollYProgress,
          [start, end],
          ["#6b7280", "#ffffff"]
        );
        const opacity = useTransform(scrollYProgress, [start, end], [0.3, 1]);

        return (
          <motion.span
            key={i}
            style={{ color, opacity }}
            className="transition-colors md:py-2"
          >
            {word}
          </motion.span>
        );
      })}
    </p>
  );
};

export default ScrollRevealText;
