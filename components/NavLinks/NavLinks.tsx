"use client";
import { Link } from "react-scroll";

interface Props {
  text: string;
  link: string;
  mobile?: boolean;
  setShowNavLinks?: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavLinks = ({ text, link, mobile, setShowNavLinks }: Props) => {
  return (
    <>
      {mobile ? (
        <li className="w-full">
          <Link
            to={link}
            duration={1000}
            smooth
            className="text-white cursor-pointer py-2 px-5 hover:text-[#53db78] transition duration-200 select-none
            font-semibold w-full block text-center"
            onClick={() => {
              if (setShowNavLinks) {
                setShowNavLinks(false);
              }
            }}
          >
            {text}
          </Link>
        </li>
      ) : (
        <li className="flex">
          <Link
            to={link}
            duration={1000}
            smooth
            className="text-white cursor-pointer py-2 px-5 hover:text-[#53db78] transition duration-200 select-none
            font-semibold"
          >
            {text}
          </Link>
        </li>
      )}
    </>
  );
};

export default NavLinks;
