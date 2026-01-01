"use client";

import { useState } from "react";
import PricingModeButtons from "../PricingModeButtons/PricingModeButtons";
import PricingBoxes from "../PricingBoxes/PricingBoxes";
import { MonthlyData, YearlyData } from "@/data/PricingData";

interface PricingModeType {
  monthlyBtn: boolean;
  yearlyBtn: boolean;
}

const PricingWrapper = () => {
  const [pricingMode, setPricingMode] = useState<PricingModeType>({
    monthlyBtn: true,
    yearlyBtn: false,
  });

  return (
    <div>
      <PricingModeButtons
        pricingMode={pricingMode}
        setPricingMode={setPricingMode}
      />
      <PricingBoxes
        pricingData={pricingMode.monthlyBtn ? MonthlyData : YearlyData}
        mode={pricingMode.monthlyBtn ? "Monthly" : "Yearly"}
      />
    </div>
  );
};

export default PricingWrapper;
