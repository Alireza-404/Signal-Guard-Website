import { TestimonialsData } from "@/data/TestimonialsData";
import GlowBox from "../GlowBox/GlowBox";
import MotionElements from "../MotionElements/MotionElements";
import { FaStar } from "react-icons/fa";

const TestimonialsBoxes = () => {
  return (
    <div className="relative overflow-hidden">
      <div
        className="w-1/5 lg:w-2/12 bg-gradient-to-r from-[#000d0189] to-[#000d01]
                absolute z-10 -top-5 h-[200%] -right-5 blur-lg lg:blur-xl lg:-right-10"
      ></div>

      <MotionElements
        elem="div"
        className="flex items-center w-[calc(504px*10+28px*10)] md:w-[calc(560px*10+40px*10)]"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
      >
        {[...TestimonialsData, ...TestimonialsData].map((item, index) => (
          <GlowBox key={index} className="mr-7 md:mr-10">
            <div className="p-8 flex flex-col justify-between gap-y-2.5 md:gap-y-3.5 w-126 md:w-140 h-58">
              <div className="flex flex-col gap-y-5">
                <div className="flex items-center gap-x-2.5">
                  <FaStar className="text-[#53db78] text-lg" />
                  <FaStar className="text-[#53db78] text-lg" />
                  <FaStar className="text-[#53db78] text-lg" />
                  <FaStar className="text-[#53db78] text-lg" />
                  <FaStar className="text-[#53db78] text-lg" />
                </div>

                <div className="flex justify-between items-center gap-x-5">
                  <div className="flex items-center gap-x-2.5 md:gap-x-3.5">
                    <img
                      src={item.profile}
                      alt={`Profile-${item.id}`}
                      className="w-12 h-12 rounded-full"
                    />

                    <div className="flex flex-col">
                      <span className="text-white font-semibold">
                        {item.fullName}
                      </span>
                      <span className="text-white">{item.role}</span>
                    </div>
                  </div>

                  <img
                    src={item.brandSvg}
                    alt={`Brand-Icon-${item.id}`}
                    className="w-36"
                  />
                </div>
              </div>

              <p className="text-[#aaa]">{item.description}</p>
            </div>
          </GlowBox>
        ))}
      </MotionElements>

      <MotionElements
        elem="div"
        className="flex items-center w-[calc(504px*10+28px*10)] md:w-[calc(560px*10+40px*10)] mt-10"
        animate={{ x: ["-50%", "0%"] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
      >
        {[...TestimonialsData.reverse(), ...TestimonialsData.reverse()].map(
          (item, index) => (
            <GlowBox key={index} className="ml-7 md:ml-10">
              <div className="p-8 flex flex-col justify-between gap-y-2.5 md:gap-y-3.5 w-126 md:w-140 h-58">
                <div className="flex flex-col gap-y-5">
                  <div className="flex items-center gap-x-2.5">
                    <FaStar className="text-[#53db78] text-lg" />
                    <FaStar className="text-[#53db78] text-lg" />
                    <FaStar className="text-[#53db78] text-lg" />
                    <FaStar className="text-[#53db78] text-lg" />
                    <FaStar className="text-[#53db78] text-lg" />
                  </div>

                  <div className="flex justify-between items-center gap-x-5">
                    <div className="flex items-center gap-x-2.5 md:gap-x-3.5">
                      <img
                        src={item.profile}
                        alt={`Profile-${item.id}`}
                        className="w-12 h-12 rounded-full"
                      />

                      <div className="flex flex-col">
                        <span className="text-white font-semibold">
                          {item.fullName}
                        </span>
                        <span className="text-white">{item.role}</span>
                      </div>
                    </div>

                    <img
                      src={item.brandSvg}
                      alt={`Brand-Icon-${item.id}`}
                      className="w-36"
                    />
                  </div>
                </div>

                <p className="text-[#aaa]">{item.description}</p>
              </div>
            </GlowBox>
          )
        )}
      </MotionElements>

      <div
        className="w-1/5 lg:w-2/12 bg-gradient-to-l from-[#000d0189] to-[#000d01]
                absolute z-10 -top-5 h-[200%] -left-5 blur-lg lg:blur-xl lg:-left-10"
      ></div>
    </div>
  );
};

export default TestimonialsBoxes;
