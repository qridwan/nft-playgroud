import React from "react";
import Img from "./atoms/Img";
import ethereumIcon from "../assets/icons/ethereum.svg";
import ethereumGreenIcon from "../assets/icons/ethereum_green.svg";
import FullImage from "../assets/img/image4.png";
import avatar from "../assets/img/user1.png";
import user1 from "../assets/img/user2.png";
import user2 from "../assets/img/user1.png";
import user3 from "../assets/img/verifieduser.png";
import img1 from "../assets/img/image2.png";
import img2 from "../assets/img/image4.png";
import img3 from "../assets/img/image1.png";
import Button from "./atoms/Button";
import { classNames } from "../helper/classNames";

const cardList = [
  {
    title: "The Futr Abstr",
    eth: "0.35 ETH",
    src: img1,
  },
  {
    title: "The Futr Abstr",
    eth: "0.35 ETH",
    src: img2,
  },
  {
    title: "The Futr Abstr",
    eth: "0.35 ETH",
    src: img3,
  },
];

const topcollections = [
  {
    id: 1,
    user: user3,
    title: "CryptoFunks",
    count: 19234.23,
    percentage: 23.3,
  },
  {
    id: 2,
    user: user2,
    title: "Cryptix",
    count: 16234.23,
    percentage: 20.3,
  },
  {
    id: 3,
    user: user1,
    title: "Frensware",
    count: 10234.23,
    percentage: 10,
  },
  {
    id: 4,
    user: user3,
    title: "CryptoFunks",
    count: 19234.23,
    percentage: 3.3,
  },
  {
    id: 5,
    user: user1,
    title: "CryptoFunks",
    count: 19234.23,
    percentage: 2.3,
  },
];
const NftStates = () => {
  return (
    <main className="md:max-w-8xl mx-10 md:mx-20 md:px-4 my-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-y-0">
        {/* full card */}
        <section className="md:w-4/5">
          <Img className="" src={FullImage} height={300} width={350} />
          <div className="flex my-2 space-x-3">
            <div className="">
              <Img
                height={50}
                width={50}
                className="rounded-full"
                src={avatar}
              />
            </div>

            <div className="flex grow md:justify-between space-x-20">
              <div>
                <h3 className="font-[600]">The Futr Abstr</h3>
                <p className="text-sm text-gray">10 in the stock</p>
              </div>
              <div className="">
                <p className="text-sm ">Highest Bid</p>
                <div className="flex space-x-2 items-center">
                  {" "}
                  <Img src={ethereumIcon} height={15} />
                  <span className="mx-2 text-base">0.25 ETH</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* card list */}
        <section className="">
          {cardList.map((obj) => (
            <div className="mb-5" key={obj.title}>
              <div className="flex ">
                <Img className="" src={obj.src} height={100} width={100} />
                <div className="ml-2">
                  <h3>{obj.title}</h3>
                  <div className="flex items-center justify-between space-x-2 mt-2">
                    <Img
                      height={30}
                      width={30}
                      className="rounded-full"
                      src={avatar}
                    />
                    <button className="flex items-center text-lemon font-medium border border-lemon rounded-md p-1 text-sm cursor-text">
                      <Img src={ethereumGreenIcon} height={18} />
                      <span className="ml-1">{obj.eth}</span>
                    </button>
                    <span className="ml-2 text-xs text-gray">1 of 8</span>
                  </div>
                  <Button
                    text="Place a bid"
                    className="px-2 py-1 text-sm mt-4 hover:bg-indigo active:bg-indigo/90 hover:text-white active:text-white"
                    tranparent
                  />
                </div>
              </div>
            </div>
          ))}
        </section>
        {/* top cards */}
        <section className="md:-ml-20">
          <h2 className="text-h4 md:text-h3 font-caps text-dark">Top Collections over </h2>
          <h4 className="text-h5 text-indigo font-medium">Last 7 days </h4>
          <div className="mt-2">
            {topcollections.map((obj, i) => (
              <div
                key={i}
                className="relative w-[300px] md:w-[360px] border border-white hover:border hover:border-gray/20 my-0 p-2 hover:shadow-md rounded-lg cursor-pointer"
              >
                <div className="flex items-center space-x-4 ">
                  <h3 className="font-bold text-h4 mr-6">{obj.id}</h3>
                  <Img
                    height={50}
                    width={50}
                    className="rounded-full"
                    src={obj.user}
                  />
                  <div>
                    <h3 className="text-h5 font-medium"> {obj.title}</h3>
                    <div className="flex items-center">
                      <Img src={ethereumIcon} height={18} />
                      <span className="ml-1 text-dark/80 font-medium">
                        {obj.count}
                      </span>
                    </div>
                  </div>
                  <div className="absolute right-0  md:pr-8">
                    <h2
                      className={classNames(
                        i == 0 || i == 2 ? "text-lemon" : "text-red",
                        " font-bold text-p md:text-h4"
                      )}
                    >
                      +{obj.percentage}%
                    </h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default NftStates;
