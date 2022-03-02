import React from "react";
import Button from "./atoms/Button";
import Image from "next/image";
import bannerPic from "../assets/img/banner.png";
import { classNames } from "../helper/classNames";
import Img from "./atoms/Img";
const Banner = () => {
  return (
    <div className="md:max-w-8xl mx-10 md:mx-20 md:px-4 md:grid md:grid-cols-2 gap-3">
      <div>
        <div>
          <div className="mt-4 md:mt-10">
            <div className="text-h3 md:text-h1 font-caps font-bold text-dark md:w-4/5 uppercase">
              Discover, and collect Digital Art NFTs
            </div>
            <div className=" leading-5 md:leading-0  mt-0 md:mt-8 mb-2 md:mb-4 text-dark/90 md:w-3/5 text-base">
              Digital marketplace for crypto collectibles and non-fungible
              tokens (NFTs). Buy, Sell, and discover exclusive digital assets.
            </div>
          </div>
        </div>
        <div className="flex items-center my-8 md:my-16">
          <div className="w-2/4 md:w-1/3">
            <Button text="Explore now" />
          </div>
        </div>
        <div className="my-6 md:my-14 flex  flex-wrap md:flex-nowrap items-center space-x-1 md:space-x-14 text-gray/90 ">
          <div>
            <div className="text-h3 md:text-h3 font-caps font-bold text-dark md:w-4/5">
              98K+
            </div>
            <div className="text-base md:text-base text-gray -mt-2">
              Artwork
            </div>
          </div>
          <div>
            <div className="text-h3 md:text-h3 font-caps font-bold text-dark md:w-4/5">
              98K+
            </div>
            <div className="text-base md:text-base text-gray -mt-2">
              Auction
            </div>
          </div>
          <div>
            <div className="text-h3 md:text-h3 font-caps font-bold text-dark md:w-4/5">
              98K+
            </div>{" "}
            <div className="text-base md:text-base text-gray -mt-2">Artist</div>
          </div>
        </div>
        <div></div>
      </div>
      <div className="hidden md:block">
        <Img src={bannerPic} width={600} height={500} />
      </div>
    </div>
  );
};

export default Banner;
