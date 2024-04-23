import React from "react";

import { img1, img2, img3, img4 } from "../assests/Gadgets";
import Navlink from "./NavLinks/Navlink";

const Header = () => {
  return (
    <div className="bg-custom-green text-custom-yellow md:pt-12 pt-5 pb-10 md:pb-0">
      <Navlink />
      <div className="flex items-center justify-center mt-5 md:mt-0">
        <div className="border border-custom-yellow rounded-3xl">
          <p className="header-text md:text-9xl font-margarine text-center px-10 py-2 text-5xl">
            TECHGEAR
          </p>
        </div>
      </div>
      <div className="text-white grid grid-cols-2 gap-4 p-4 w-[70%] items-center justify-center mx-auto mt-5 pb-5 md:pb-20">
        <img
          src={img1}
          alt="Description 1"
          className="w-full h-32 object-cover rounded-tl-full md:h-64 grayscale hover:grayscale-0 transition-all duration-500"
        />
        <img
          src={img2}
          alt="Description 2"
          className="w-full h-32 object-cover rounded-tr-full md:h-64 grayscale hover:grayscale-0 transition-all duration-500"
        />
        <img
          src={img3}
          alt="Description 3"
          className="w-full h-32 object-cover rounded-bl-full md:h-64 grayscale hover:grayscale-0 transition-all duration-500"
        />
        <img
          src={img4}
          alt="Description 4"
          className="w-full h-32 object-cover rounded-br-full md:h-64 grayscale hover:grayscale-0 transition-all duration-500"
        />
      </div>
    </div>
  );
};

export default Header;
