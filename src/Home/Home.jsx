import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import homeLink from "../components/homeLink";
import Button from "../components/Button";

const Home = () => {
  return (
    <>
      <Header />
      <div className="bg-custom-blue text-white md:pt-20">
        <div className="text-left p-10">
          <div className="">
            <p className="font-margarine text-2xl md:text-4xl">
              Surf the Wave of Cutting-Edge Gadgets
            </p>
          </div>
          <div className="mt-8 md:w-[60%] mb-5">
            <p className="font-space-grotesk text-sm md:w-[60%] text-custom-text">
              Sea of gadgets set amidst the grandeur of technology awaits your
              exploration. Break-free the geek within you and set on an
              adventurous expedition.
            </p>
          </div>
          <div className="flex justify-between md:items-center md:w-[50%] mt-5 flex-col md:flex-row">
            {Object.keys(homeLink)
              .sort((a, b) => b - a)
              .map((key) => (
                <div key={key} className="mb-5 md:mb-0">
                  <p className="font-margarine text-xl">{key}</p>
                  <p className="font-space-grotesk text-xs font-bold">
                    {homeLink[key].title}
                  </p>
                </div>
              ))}
          </div>
        </div>
        <div className="md:mt-20 md:pb-20">
          <p className="font-margarine text-2xl md:text-4xl mb-6">Shop Now</p>

          <p className="font-space-grotesk text-sm text-custom-text text-center w-80 mx-auto">
            Embark on your journey in the exhilarating world of tech. Click that
            button and let the saga of intriguing innovation begin!
          </p>

          <div className="mt-5 flex items-center justify-center gap-5 pb-5">
            <Button
              bgColor="#00594C"
              textColor="white"
              className="font-space-grotesk text-xs font-bold p-2 rounded-lg border border-custom-green"
            >
              Gear Up
            </Button>
            <Button
              bgColor="white"
              textColor="black"
              className="font-space-grotesk text-xs font-bold p-2 rounded-lg border border-black"
            >
              Dive In
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
