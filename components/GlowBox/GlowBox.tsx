"use client";

import { useState } from "react";
import { motion, useMotionTemplate } from "framer-motion";

const GlowBox = ({
  children,
  aos,
  className,
}: {
  children: React.ReactNode;
  aos?: string;
  className?: string;
}) => {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [showGlow, setShowGlow] = useState<boolean>(false);

  const handleMouseMove = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    setMousePosition({ x, y });
  };

  return (
    <div
      className={`group relative w-full p-px overflow-hidden bg-[#242424] rounded-lg ${
        className || ""
      }`}
      data-aos={aos}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setShowGlow(true)}
      onMouseLeave={() => setShowGlow(false)}
    >
      <motion.div
        className="absolute z-10 inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in"
        style={{
          background: useMotionTemplate`
            radial-gradient(
                circle at ${mousePosition.x}px ${mousePosition.y}px,
                #00ffb4cc,
                transparent 65%
            )
            `,
        }}
      ></motion.div>

      <div className="relative z-20 w-full h-full bg-[#001102] rounded-lg">
        <div
          className={`absolute rounded-full transition-opacity duration-300 ease-in ${
            showGlow ? "opacity-100" : "opacity-0"
          }`}
          style={{
            left: mousePosition.x - 250 / 2,
            top: mousePosition.y - 250 / 2,
            width: 250,
            height: 250,
            background: "radial-gradient(circle, #0b6322e7, #167930e7)",
            filter: "blur(250px)",
          }}
        ></div>

        {children}
      </div>
    </div>
  );
};

export default GlowBox;
