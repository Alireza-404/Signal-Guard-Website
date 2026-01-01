"use client";

interface PricingModeType {
  monthlyBtn: boolean;
  yearlyBtn: boolean;
}

interface Props {
  pricingMode: PricingModeType;
  setPricingMode: React.Dispatch<React.SetStateAction<PricingModeType>>;
}

const PricingModeButtons = ({ pricingMode, setPricingMode }: Props) => {
  return (
    <div className="border border-[#242424] rounded-md p-1 w-fit">
      <button
        type="button"
        className={`font-medium rounded cursor-pointer px-5 py-2 transition duration-200 text-white ${
          pricingMode.monthlyBtn ? "bg-[#242424]" : " bg-transparent"
        }`}
        onClick={() => setPricingMode({ monthlyBtn: true, yearlyBtn: false })}
      >
        Monthly
      </button>

      <button
        type="button"
        className={`font-medium rounded cursor-pointer px-5 py-2 transition duration-200 text-white ${
          pricingMode.yearlyBtn ? "bg-[#242424]" : "bg-transparent"
        }`}
        onClick={() => setPricingMode({ monthlyBtn: false, yearlyBtn: true })}
      >
        Yearly
      </button>
    </div>
  );
};

export default PricingModeButtons;
