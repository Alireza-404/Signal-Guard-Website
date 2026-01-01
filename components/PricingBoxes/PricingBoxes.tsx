"use client";

import { PricingType } from "@/types/PricingType";
import { AnimatePresence, motion } from "framer-motion";
import SecondaryButton from "../SecondaryButton/SecondaryButton";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { BiCheck } from "react-icons/bi";

interface Props {
  pricingData: PricingType[];
  mode: "Monthly" | "Yearly";
}

const PricingBoxes = ({ pricingData, mode }: Props) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={mode}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-8 mt-7.5 md:mt-12 lg:mt-18"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {pricingData.map((item, index) => (
          <div
            key={index}
            className={`p-8 rounded-md border flex flex-col gap-y-6.25 ${
              item.id === 2
                ? "border-[#53db78] bg-[#001503]"
                : "border-[#242424] bg-[#001102]"
            }`}
          >
            <div className="flex flex-col gap-y-1.5">
              <p className="text-white font-semibold">{item.title}</p>
              <p className="text-[#aaa]">{item.description}</p>
            </div>

            <div>
              <p className="text-white text-[28px] font-semibold">
                {item.price}{" "}
                <span className="text-[#666] text-xl">
                  /{mode === "Monthly" ? "month" : "year"}
                </span>
              </p>

              {item.discount && (
                <span className="text-[#53db78]">(save {item.discount})</span>
              )}
            </div>

            {item.id === 2 ? (
              <PrimaryButton className="w-full px-6 py-3" text="Get started" />
            ) : (
              <SecondaryButton
                className="w-full px-6 py-3"
                text="Get started"
              />
            )}

            <div className="flex flex-col gap-y-5">
              {item.descriptionOfLimitation && (
                <p className="text-white text-sm">
                  {item.descriptionOfLimitation}
                </p>
              )}

              {item.limitations.map((limitation, index) => (
                <p key={index} className="flex items-center gap-x-5 text-white">
                  <BiCheck className="text-2xl text-[#53db78]" />
                  {limitation}
                </p>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default PricingBoxes;
