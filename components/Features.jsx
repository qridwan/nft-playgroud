import React from "react";
import Button from "./atoms/Button";
import Img from "./atoms/Img";
import AVATAR from "../assets/img/user1.png";
import image1 from "../assets/img/collection1.png";
import image2 from "../assets/img/collection2.png";
import image3 from "../assets/img/collection3.png";
const feats = [
  {
    title: "Amazing Collection",
    user: AVATAR,
    src: image1,
  },
  {
    title: "Amazing Collection",
    user: AVATAR,
    src: image2,
  },
  {
    title: "Amazing Collection",
    user: AVATAR,
    src: image3,
  },
];
const Features = () => {
  return (
    <div className="bg-light/30 my-20 py-8 md:py-20">
      <div className="md:max-w-8xl mx-10 md:mx-20 md:px-4 ">
        <div className="text-h5 md:text-h4 font-caps font-bold text-dark  uppercase pb-10">
        Collection Featured NFTs
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8  m-auto md:m-0">
          {feats.map((obj) => (
            <div key={obj.title} className="w-350 md:w-[400px] my-4 md:my-0">
              <Img height={300} width={350} className="" src={obj.src} />
              <h4 className="text-p font-bold my-2">{obj.title}</h4>
              <div className="flex justify-between">
                <div className="flex items-center">
                  <Img
                    height={30}
                    width={30}
                    className="rounded-full"
                    src={obj.user}
                  />
                  <span className="ml-2">by Arkhan</span>
                </div>
                <Button
                  text="Total 54 Items"
                  tranparent={true}
                  className="bg-light/10 py-1 md:mr-10"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
