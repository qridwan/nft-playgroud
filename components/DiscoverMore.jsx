import React from "react";
import Button from "./atoms/Button";
import Img from "./atoms/Img";
import filterIcon from "../assets/icons/filter.svg";
import image1 from "../assets/img/image1.png";
import image2 from "../assets/img/image2.png";
import image3 from "../assets/img/image3.png";
import image4 from "../assets/img/image4.png";
import user1 from "../assets/img/user1.png";
import user2 from "../assets/img/user2.png";
import user3 from "../assets/img/user1.png";
import user4 from "../assets/img/user1.png";
import ethereumGreenIcon from "../assets/icons/ethereum_green.svg";

const navs = [
  "All Categories",
  "Art",
  "Celebrities",
  "Sports",
  "Gaming",
  "Crypto",
];

const cardItems = [
  {
    title: "ArtCrypto",
    eth: 0.25,
    time: "3h 50m 2s left",
    img: image1,
  },
  {
    title: "ArtCrypto",
    eth: 0.25,
    time: "3h 50m 2s left",
    img: image2,
  },
  {
    title: "ArtCrypto",
    eth: 0.25,
    time: "3h 50m 2s left",
    img: image3,
  },
  {
    title: "ArtCrypto",
    eth: 0.25,
    time: "3h 50m 2s left",
    img: image4,
  },
  {
    title: "ArtCrypto",
    eth: 0.25,
    time: "3h 50m 2s left",
    img: image2,
  },
  {
    title: "ArtCrypto",
    eth: 0.25,
    time: "3h 50m 2s left",
    img: image1,
  },
  {
    title: "ArtCrypto",
    eth: 0.25,
    time: "3h 50m 2s left",
    img: image2,
  },
  {
    title: "ArtCrypto",
    eth: 0.25,
    time: "3h 50m 2s left",
    img: image3,
  },
  {
    title: "ArtCrypto",
    eth: 0.25,
    time: "3h 50m 2s left",
    img: image4,
  },
  {
    title: "ArtCrypto",
    eth: 0.25,
    time: "3h 50m 2s left",
    img: image2,
  },
  {
    title: "ArtCrypto",
    eth: 0.25,
    time: "3h 50m 2s left",
    img: image1,
  },
  {
    title: "ArtCrypto",
    eth: 0.25,
    time: "3h 50m 2s left",
    img: image3,
  },
];
const DiscoverMore = () => {
  return (
    <main className="md:max-w-8xl px-10  md:px-20 py-10 md:py-20 my-10  bg-light/30">
      <h3 className="text-h3 font-caps text-dark">Discover more NFTs</h3>

      <nav className="flex justify-between items-center mt-10">
        <div className="flex flex-wrap space-x-3 space-y-3">
          {navs.map((nav, i) => (
            <Button
              key={nav}
              text={nav}
              tranparent={i === 0 ? false : true}
              className={
                i === 0
                  ? "bg-indigo text-white active:bg-indigo/80 py-0"
                  : "bg-inherit text-dark border-0 py-0"
              }
            />
          ))}
        </div>
        <div>
          <button className="text-indigo bg-light/40 px-4 py-2 rounded-full active:bg-light/60">
            <div className="flex space-x-3 items-center">
              <Img height={20} width={20} src={filterIcon} />
              <span>All Filters</span>
            </div>
          </button>
        </div>
      </nav>

      <section
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 gap-y-8
       mt-8"
      >
        {cardItems.map((obj, i) => (
          <div
            className="bg-white w-[260px] lg:w-[280px] mx-auto p-4 rounded-xl"
            key={i}
          >
            <div className="mx-auto w-full">
              <Img src={obj.img} width={250} className="" />
            </div>
            <div className="">
              <div className="flex -space-x-2 overflow-hidden -mt-4 ml-4">
                <div className="h-[32px] w-[32px]">
                  <Img
                    className="inline-block  rounded-full ring-2 ring-white"
                    src={user1}
                    height={30}
                    width={30}
                    alt=""
                  />
                </div>
                <div className="">
                  <Img
                    className="inline-block  rounded-full ring-2 ring-white"
                    src={user3}
                    height={30}
                    width={30}
                    alt=""
                  />
                </div>

                <div>
                  <Img
                    className="inline-block  rounded-full ring-2 ring-white"
                    src={user4}
                    alt=""
                    height={30}
                    width={30}
                  />
                </div>
                <div>
                  <Img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                    src={user2}
                    height={30}
                    width={30}
                  />
                </div>
              </div>
            </div>
            <h3 className="text-h4 font-[600] mx-2">{obj.title}</h3>
            <div className="flex items-center justify-between space-x-2">
              <button className="flex items-center text-lemon font-medium  rounded-md p-1 text-sm cursor-text">
                <Img src={ethereumGreenIcon} height={22} width={20} />
                <span className="ml-2 text-base font-bold">{obj.eth} ETH</span>
              </button>
              <span className="ml-2 text-base text-gray">1 of 327</span>
            </div>
            <hr className="text-light my-4" />
            <div className="flex justify-between items-center">
              <button className="bg-light/30 text-indigo font-medium text-sm md:text-p p-2 md:px-2 rounded-full">
                {obj.time}
              </button>
              <h3 className="text-sm md:text-p text-indigo font-medium cursor-pointer">
                Place a bid
              </h3>
            </div>
          </div>
        ))}
      </section>
      <div className="text-center mt-6">
        <Button className="bg-inherit" text="More NFTs" tranparent />
      </div>
    </main>
  );
};

export default DiscoverMore;
