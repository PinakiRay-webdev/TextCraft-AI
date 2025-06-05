import React from "react";
import { HiOutlineSparkles } from "react-icons/hi";
import { navItems } from "../../../../../utils/utils";
const Navbar = () => {
  return (
    <nav className="px-8 py-2 flex justify-between items-center">
      <h1 className="flex items-center text-2xl font-semibold">
        <HiOutlineSparkles />
        TextCraft
      </h1>

      <div className="flex gap-9" >
        {navItems.map((items , id) => (
          <p key={id} className="font-semibold cursor-pointer">{items}</p>
        ))}
      </div>

      <div className="flex gap-1 items-center">
        <button className="border-2 border-pink-400 px-6 py-1 rounded">
          Login
        </button>
        <button className="border-2 border-pink-400 rounded bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-1 text-white cursor-pointer font-semibold">
          Get started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
