"use client";
import { motion, MotionProps } from "framer-motion";

interface Props extends MotionProps {
  elem: "p" | "div" | "button";
  text?: string;
  isViewportTrue?: boolean;
  className?: string;
  buttonType?: "button" | "reset" | "submit";
  children?: React.ReactNode;
}

const MotionElements = ({
  elem,
  children,
  text,
  className,
  ...props
}: Props) => {
  const MotionTag = { p: motion.p, div: motion.div, button: motion.button }[
    elem
  ];

  return (
    <MotionTag className={className} {...props}>
      {text || children}
    </MotionTag>
  );
};

export default MotionElements;
