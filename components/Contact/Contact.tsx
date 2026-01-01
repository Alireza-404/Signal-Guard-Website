import { BiCheck } from "react-icons/bi";
import ContactAccordion from "../ContactAccordion/ContactAccordion";
import ContactForm from "../ContactForm/ContactForm";

const Contact = () => {
  return (
    <div className="flex flex-col gap-y-10 md:flex-row gap-x-7.5 md:gap-x-12 lg:gap-x-18">
      <div className="flex flex-col gap-y-10 w-full md:w-1/3 lg:w-1/2">
        <div className="flex flex-wrap items-center gap-3.5">
          <div className="border-1 border-[#53db78] rounded-full px-2.5 py-1.5 flex items-center gap-x-2.5 w-fit">
            <span className="px-px py-px rounded-full border border-[#53db78]">
              <BiCheck className="text-lg font-bold text-[#53db78]" />
            </span>
            <span className="text-white text-sm">SOC 2 Ready</span>
          </div>

          <div className="border-1 border-[#53db78] rounded-full px-2.5 py-1.5 flex items-center gap-x-2.5 w-fit">
            <span className="px-px py-px rounded-full border border-[#53db78]">
              <BiCheck className="text-lg font-bold text-[#53db78]" />
            </span>
            <span className="text-white text-sm">No credit card needed</span>
          </div>

          <div className="border-1 border-[#53db78] rounded-full px-2.5 py-1.5 flex items-center gap-x-2.5 w-fit">
            <span className="px-px py-px rounded-full border border-[#53db78]">
              <BiCheck className="text-lg font-bold text-[#53db78]" />
            </span>
            <span className="text-white text-sm">EU-hosted</span>
          </div>

          <div className="border-1 border-[#53db78] rounded-full px-2.5 py-1.5 flex items-center gap-x-2.5 w-fit">
            <span className="px-px py-px rounded-full border border-[#53db78]">
              <BiCheck className="text-lg font-bold text-[#53db78]" />
            </span>
            <span className="text-white text-sm">Cancel anytime</span>
          </div>

          <div className="border-1 border-[#53db78] rounded-full px-2.5 py-1.5 flex items-center gap-x-2.5 w-fit">
            <span className="px-px py-px rounded-full border border-[#53db78]">
              <BiCheck className="text-lg font-bold text-[#53db78]" />
            </span>
            <span className="text-white text-sm">GDPR Compliant</span>
          </div>

          <div className="border-1 border-[#53db78] rounded-full px-2.5 py-1.5 flex items-center gap-x-2.5 w-fit">
            <span className="px-px py-px rounded-full border border-[#53db78]">
              <BiCheck className="text-lg font-bold text-[#53db78]" />
            </span>
            <span className="text-white text-sm">Setup in minutes</span>
          </div>
        </div>

        <ContactAccordion />
      </div>

      <div className="grow lg:w-1/2">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
