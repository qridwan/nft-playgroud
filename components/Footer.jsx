import React from "react";
import Img from "./atoms/Img";
import fb from "../assets/icons/facebook.svg";
import twitter from "../assets/icons/twitter.svg";
import linkedin from "../assets/icons/linkedin.svg";
import { classNames } from "../helper/classNames";
import Button from "./atoms/Button";

const markets = [
  "All NFTs",
  "New",
  "Art",
  "Sports",
  "Utility",
  "Music",
  "Domain Name",
];
const account = ["Profile", "Favourite", "My Collections", "Settings"];
const Footer = () => {
  return (
    <main className="mx-10 md:max-w-8xl md:mx-20 md:px-4 grid md:grid-cols-6 gap-3 gap-y-8 py-10 md:py-16">
      {/* about nfters */}
      <div className="col-span-2">
        <h3 className="font-bold font-caps md:text-h4 text-dark">NFTERS</h3>
        <p className="text-p text-gray py-4 md:py-6 md:w-5/6">
          The world’s first and largest digital marketplace for crypto
          collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
          exclusive digital items.
        </p>
        <div className="grid grid-cols-12 gap-3">
          <Img
            height={40}
            width={40}
            className="rounded-full cursor-pointer"
            src={fb}
          />
          <Img
            height={40}
            width={40}
            className="rounded-full cursor-pointer"
            src={twitter}
          />
          <Img
            height={40}
            width={40}
            className="rounded-full cursor-pointer"
            src={linkedin}
          />
        </div>
      </div>
      {/* marketplace */}
      <div className="col-span-1 ">
        <h3 className="font-bold text-p md:text-h4 text-dark mb-4">
          Market Place
        </h3>
        {markets.map((pd) => (
          <p
            key={pd}
            className="py-0 md:py-1 md:text-base text-md cursor-pointer"
          >
            {pd}
          </p>
        ))}
      </div>
      {/* My account */}
      <div className="col-span-1 ">
        <h3 className="font-bold text-p md:text-h4 text-dark mb-2 md:mb-4">
          My Account
        </h3>
        {account.map((pd) => (
          <p
            key={pd}
            className="py-0 md:py-1 md:text-base text-md cursor-pointer"
          >
            {pd}
          </p>
        ))}
      </div>
      {/* stay on loop */}
      <div className="col-span-2">
        <h3 className="font-bold text-p md:text-h4 text-dark mb-4">
          Stay in the loop
        </h3>
        <p className="text-p text-gray py-4 md:py-6 md:w-5/6">
          Join our mailing list to stay in the loop with our newest feature
          releases, NFT drops, and tips and tricks for navigating NFTs.
        </p>
        <div className="relative w-full md:w-[350px] lg:w-[360px] hidden md:block">
          <input
            type="search"
            name="subscribe"
            placeholder="Enter your email address.."
            className={classNames(
              "pr-10 md:pr-16  block w-full p-4 md:p-4 pl-6 md:pl-6 bg-white border border-light rounded-4xl text-sm shadow-sm md:text-sm focus:outline-none  focus:ring-0 disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-200 disabled:shadow-none "
            )}
          />
          <div className="absolute inset-y-0 right-0 pr-2 md:pr-2 py-0 flex items-center pointer-events-none">
            <Button text="Subscribe Now" className="p-1 md:-1 z-50" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Footer;
