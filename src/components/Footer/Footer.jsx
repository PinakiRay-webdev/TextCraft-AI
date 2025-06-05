import React from "react";
import { HiOutlineSparkles } from "react-icons/hi";
const Footer = () => {
  return (
    <div className="bg-gray-100 py-22 px-12 flex items-start justify-between">
      <div id="left" className="w-[30%]">
        <h1 className="flex items-center text-2xl font-semibold">
          <HiOutlineSparkles />
          TextCraft
        </h1>
        <p className="my-4">
          A collaborative workspace for freelancers , entrepreneurs ,
          freelancers and small businesses.
        </p>
      </div>
      <div id="right" className="w-[50%] flex justify-around">
        <ul>
          <p className="text-xl font-semibold mb-4">Usefull Links</p>
          <li className="font-thin text-sm">Home</li>
          <li className="font-thin text-sm">Home</li>
          <li className="font-thin text-sm">Home</li>
          <li className="font-thin text-sm">Home</li>
        </ul>

        <ul>
          <p className="text-xl font-semibold mb-4">Usefull Links</p>
          <li className="font-thin text-sm">Home</li>
          <li className="font-thin text-sm">Home</li>
          <li className="font-thin text-sm">Home</li>
          <li className="font-thin text-sm">Home</li>
        </ul>

        <div className="w-[30%]" >
          <p className="text-xl font-semibold mb-4">Location</p>

          <p className="text-sm font-thin my-2">
            <span className="font-semibold">Address: </span> Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Eligendi maiores saepe
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
