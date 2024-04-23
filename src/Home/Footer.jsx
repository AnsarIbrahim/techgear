import React from "react";
import { FaInstagram, FaTwitter } from "react-icons/fa";

import footerLink from "../components/footerLink";

const Footer = () => {
  return (
    <div className="bg-custom-blue text-white pb-20 pt-5 px-10 text-left">
      <div className="md:flex items-center md:w-[60%] justify-between font-space-grotesk text-sm flex-col md:flex-row">
        {Object.keys(footerLink).map((key) => (
          <div
            key={key}
            className="flex-col mb-10 md:mb-0
          "
          >
            <h3 className="mb-2 text-white text-sm">{key}</h3>
            {footerLink[key].links.map((link, index) => (
              <div className="flex-col mb-1 text-xs text-custom-text">
                <a key={index} href={link.href}>
                  {link.link}
                </a>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="mt-10 flex items-center justify-between flex-col md:flex-row">
        <div className="">
          <p className="font-space-grotesk text-sm text-slate-200">
            © 2024 TechGear. All rights reserved.
          </p>
        </div>
        <div className="flex md:pr-20 gap-5 text-sm text-slate-200 mt-2 md:mt-0">
          <FaInstagram />
          <FaTwitter />
        </div>
      </div>
    </div>
  );
};

export default Footer;
