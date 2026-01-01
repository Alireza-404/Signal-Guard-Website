"use client";

import Link from "next/link";
import { Link as ReactScrollLink } from "react-scroll";

const FooterReactScrollLinks = () => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:gap-x-30 gap-y-10">
      <ul className="flex flex-col gap-y-3.5">
        <li className="text-[#666]">Navigation</li>

        <li>
          <ReactScrollLink
            to="Features"
            duration={1000}
            smooth
            className="text-white hover:text-[#53db78] transition duration-200 cursor-pointer select-none"
          >
            Features
          </ReactScrollLink>
        </li>

        <li>
          <ReactScrollLink
            to="Capabilities"
            duration={1000}
            smooth
            className="text-white hover:text-[#53db78] transition duration-200 cursor-pointer select-none"
          >
            Capabilities
          </ReactScrollLink>
        </li>

        <li>
          <ReactScrollLink
            to="HowItWorks"
            duration={1000}
            smooth
            className="text-white hover:text-[#53db78] transition duration-200 cursor-pointer select-none"
          >
            How it works
          </ReactScrollLink>
        </li>

        <li>
          <ReactScrollLink
            to="Pricing"
            duration={1000}
            smooth
            className="text-white hover:text-[#53db78] transition duration-200 cursor-pointer select-none"
          >
            Pricing
          </ReactScrollLink>
        </li>
      </ul>

      <ul className="flex flex-col gap-y-3.5">
        <li className="text-[#666]">Follow us</li>

        <li>
          <Link
            href="https://github.com/Alireza-404"
            target="_blank"
            className="text-white hover:text-[#53db78] transition duration-200 cursor-pointer select-none"
          >
            Github
          </Link>
        </li>

        <li className="text-white hover:text-[#53db78] transition duration-200 cursor-pointer select-none">
          Twitter
        </li>

        <li className="text-white hover:text-[#53db78] transition duration-200 cursor-pointer select-none">
          Instagram
        </li>

        <li className="text-white hover:text-[#53db78] transition duration-200 cursor-pointer select-none">
          Linkedin
        </li>
      </ul>

      <ul className="flex flex-col gap-y-3.5">
        <li className="text-[#666]">Navigation</li>

        <li className="text-white md:w-45">
          Protex Security GmbH Musterstraße 42 10115 Berlin, Germany
        </li>
      </ul>
    </div>
  );
};

export default FooterReactScrollLinks;
