import React, { useState } from "react";

const Navlink = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-5 bg-custom-green text-custom-yellow font-space-grotesk md:px-28 md:py-10">
      <div className="text-sm font-bold">TechGear — The Future Beckons</div>
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6 text-custom-yellow"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
      <div
        className={`fixed top-0 right-0 w-full z-10 h-full bg-custom-green text-center transform transition-transform duration-200 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:relative md:translate-x-0 md:flex md:items-center md:w-auto`}
      >
        <button
          className="absolute top-0 right-0 m-5 text-custom-yellow md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="mt-20 md:mt-0 md:flex-grow"></div>
        <div>
          <a
            href="/"
            className="block mt-4 md:inline-block md:mt-0 text-sm font-semibold md:mr-4"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="/about"
            className="block mt-4 md:inline-block md:mt-0 text-sm font-semibold md:mr-4"
            onClick={() => setIsOpen(false)}
          >
            Products
          </a>
          <a
            href="/contact"
            className="block mt-4 md:inline-block md:mt-0 text-sm font-semibold"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navlink;
