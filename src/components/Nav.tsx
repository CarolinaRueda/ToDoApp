import { FC } from "react";
import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";
import Logo from "/Logo.png";

const Nav: FC<NavProps> = ({ dark, setDark }) => {
  return (
    <nav className="relative top-0 left-0 w-screen flex justify-between py-4 px-8 items-center">
      <img src={Logo} alt="Prioritune" className="md:h-11 h-8" />
      <h1 className="font-comfortaa font-bold md:text-2xl text-xl text-[#51087E] dark:text-[#D7A1F9]">
        Time to be productive!
      </h1>
      <button onClick={setDark} className="text-2xl">
        {dark ? (
          <BsSunFill className="z-50 text-yellow-300" />
        ) : (
          <BsMoonStarsFill className="text-indigo-950" />
        )}
      </button>
    </nav>
  );
};

export default Nav;
