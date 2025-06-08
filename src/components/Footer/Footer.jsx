import React from "react";
import { HiOutlineSparkles } from "react-icons/hi";
const Footer = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-8 md:px-12 flex flex-col md:flex-row items-start md:justify-between gap-10 md:gap-0">
      <div id="left" className="w-full md:w-[30%] mb-8 md:mb-0">
        <h1 className="flex items-center text-2xl font-semibold">
          <HiOutlineSparkles />
          <span className="ml-2">TextCraft</span>
        </h1>
        <p className="my-4 text-sm text-gray-600">
          A collaborative workspace for freelancers, entrepreneurs, and small businesses.
        </p>
      </div>
      <div id="right" className="w-full md:w-[65%] flex flex-col sm:flex-row justify-between gap-8">
        <ul>
          <p className="text-xl font-semibold mb-4">Useful Links</p>
          <li className="font-thin text-sm mb-2">Home</li>
          <li className="font-thin text-sm mb-2">Features</li>
          <li className="font-thin text-sm mb-2">Quiz</li>
          <li className="font-thin text-sm mb-2">Notes</li>
        </ul>

        <ul>
          <p className="text-xl font-semibold mb-4">Resources</p>
          <li className="font-thin text-sm mb-2">About</li>
          <li className="font-thin text-sm mb-2">Contact</li>
          <li className="font-thin text-sm mb-2">Privacy Policy</li>
          <li className="font-thin text-sm mb-2">Terms of Service</li>
        </ul>

        <div className="w-full sm:w-[40%]">
          <p className="text-xl font-semibold mb-4">Location</p>
          <p className="text-sm font-thin my-2">
            <span className="font-semibold">Address: </span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi maiores saepe
          </p>
          <p className="text-sm font-thin my-2">
            <span className="font-semibold">Phone: </span> (000)123 456 89
          </p>
          <p className="text-sm font-thin my-2">
            <span className="font-semibold">Email: </span> pinaki.bpd2001@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;