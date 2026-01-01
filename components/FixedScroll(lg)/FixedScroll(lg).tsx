"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { HowItWorkData } from "@/data/HowItWorkData";
import GlowBox from "../GlowBox/GlowBox";
import { useEffect, useRef, useState } from "react";

const FixedScroll = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const firstBoxY = useTransform(scrollYProgress, [0, 0.3], [650, 0]);
  const secondBoxY = useTransform(scrollYProgress, [0.3, 0.6], [650, 0]);
  const thirdBoxY = useTransform(scrollYProgress, [0.6, 0.95], [650, 0]);

  return (
    <div ref={ref} className="lg:block hidden h-[300vh] relative">
      <motion.div className="sticky h-screen pt-60 top-0 w-full flex justify-between gap-x-10">
        <div className="flex flex-col gap-y-5 w-2/5">
          <div className="flex flex-col gap-y-2.5">
            <span
              className="text-[#53db78] font-bold font-mono text-sm
                  border border-[#53db78] rounded-md px-3.5 py-1.5 w-fit"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              How it works
            </span>

            <p
              className="text-white font-semibold text-[2rem] md:text-5xl md:leading-14 leading-9"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              How we keep your company secured
            </p>
          </div>

          <p
            className="text-[#aaa] text-xl"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            No complexity. Just clean, effective protection in three simple
            steps.
          </p>

          <div data-aos="fade-up" data-aos-duration="600">
            <PrimaryButton
              text="Request demo"
              className="w-full xs:w-auto px-6 py-3"
            />
          </div>
        </div>

        <div className="relative grow flex justify-end">
          {HowItWorkData.map((item) => {
            const yTransform =
              item.id === 1
                ? firstBoxY
                : item.id === 2
                ? secondBoxY
                : thirdBoxY;

            return (
              <motion.div
                key={item.id}
                className={`absolute ${
                  item.id === 1 ? "z-20" : item.id === 2 ? "z-40" : "z-60"
                }`}
                style={{ y: yTransform }}
              >
                <GlowBox>
                  <div className="relative z-30 flex flex-col justify-between gap-y-10 p-6 h-110 w-142">
                    <div className="flex flex-col gap-y-2.5">
                      <p className="text-white font-medium text-base md:text-[22px]">
                        {item.title}
                      </p>

                      <p className="text-[#aaa]">{item.description}</p>
                    </div>

                    <img
                      loading="lazy"
                      src={item.iconSrc}
                      alt={`icon-${item.id}`}
                      className="block mx-auto w-3/4"
                    />
                  </div>
                </GlowBox>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default FixedScroll;
