import { AutomateProtectionData } from "@/data/AutomateProtectionData";
import GlowBox from "../GlowBox/GlowBox";

const CapabilitiesBoxes = () => {
  return (
    <div className="lg:grid hidden grid-cols-2 gap-8 overflow-hidden">
      <div className="flex flex-col gap-y-8">
        {AutomateProtectionData.slice(0, 2).map((item) => (
          <GlowBox
            key={item.id}
            aos={item.id % 2 === 0 ? "fade-left" : "fade-right"}
          >
            <div className="relative z-30">
              <div
                className={`flex flex-col items-center relative z-30
                  gap-0`}
              >
                {item.iconSrc && (
                  <div
                    className={`${
                      item.id === 1 ? "md:w-2/3" : "flex items-center pr-5"
                    }`}
                  >
                    <img
                      loading="lazy"
                      src={item.iconSrc}
                      alt={`icon-${item.id}`}
                      className={
                        item.id === 2 ? "w-3/5 scale-135 xl:scale-100" : "block"
                      }
                    />

                    <div
                      className={`${
                        item.id === 2
                          ? "md:flex flex-col gap-y-3.5 grow-0 py-6"
                          : "hidden"
                      }`}
                    >
                      <span className="text-[#53db78] text-xs font-medium">
                        {item.xsText && item.xsText}
                      </span>

                      <span
                        className={`text-white font-medium ${
                          item.id === 3 || item.id === 4
                            ? "text-base md:text-2xl"
                            : "text-2xl md:text-3xl"
                        }`}
                      >
                        {item.title && item.title}
                      </span>

                      <p className="text-[#aaa]">
                        {item.description && item.description}
                      </p>
                    </div>
                  </div>
                )}

                <div
                  className={`w-full p-6 gap-y-3.5 ${
                    item.id === 2 ? "md:hidden" : "flex flex-col"
                  }`}
                >
                  <span className="text-[#53db78] text-xs font-medium">
                    {item.xsText && item.xsText}
                  </span>

                  <span
                    className={`text-white font-medium ${
                      item.id === 3 || item.id === 4
                        ? "text-base md:text-2xl"
                        : "text-2xl md:text-3xl"
                    }`}
                  >
                    {item.title && item.title}
                  </span>

                  <p className="text-[#aaa]">
                    {item.description && item.description}
                  </p>
                </div>
              </div>
            </div>
          </GlowBox>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-8">
        {AutomateProtectionData.slice(2, 5).map((item) => (
          <GlowBox
            key={item.id}
            aos={item.id % 2 === 0 ? "fade-left" : "fade-right"}
            className={item.id === 5 ? "col-span-2" : "col-span-1"}
          >
            <div className="relative z-30">
              <div
                className={`flex flex-col items-center relative z-30 ${
                  item.svg ? "gap-y-2 py-6" : "gap-0"
                }`}
              >
                {item.iconSrc && (
                  <div className="w-60 scale-250 mt-20">
                    <img
                      loading="lazy"
                      src={item.iconSrc}
                      alt={`icon-${item.id}`}
                    />
                  </div>
                )}

                {item.svg && (
                  <div className="flex justify-start w-full px-6">
                    <div
                      className="w-21 h-21 rounded-full border border-[#53db78] flex items-center justify-center
                           bg-gradient-to-bl from-[#53db7778] to-[#001102]"
                    >
                      <span className="text-[#53db78] w-12 h-12">
                        {item.svg}
                      </span>
                    </div>
                  </div>
                )}

                <div
                  className={`w-full flex flex-col gap-y-3.5 ${
                    item.svg ? "px-6" : "p-6"
                  }`}
                >
                  <span className="text-[#53db78] text-xs font-medium">
                    {item.xsText && item.xsText}
                  </span>

                  <span
                    className={`text-white font-medium ${
                      item.id === 3 || item.id === 4 ? "text-2xl" : "text-3xl"
                    }`}
                  >
                    {item.title && item.title}
                  </span>

                  <p className="text-[#aaa]">
                    {item.description && item.description}
                  </p>
                </div>
              </div>
            </div>
          </GlowBox>
        ))}
      </div>
    </div>
  );
};

export default CapabilitiesBoxes;
