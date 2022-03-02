import React from "react";
import Button from "./atoms/Button";
import Img from "./atoms/Img";
import featurePic from "../assets/img/CreateNSell.png";

const CreatNSell = () => {
  return (
    <div className="md:max-w-8xl mx-10 md:mx-20 md:px-4 md:grid md:grid-cols-2 gap-3">
      <div className="hidden md:block">
        <Img src={featurePic} width={600} height={500} />
      </div>
      <div>
        <div>
          <div className="mt-4 md:mt-10">
            <div className="text-h4 md:text-h2 font-caps font-bold text-dark md:w-3/5 uppercase">
              Create and sell your NFTs
            </div>
            <div className=" leading-5 md:leading-0  mt-0 md:mt-8 mb-2 md:mb-4 text-dark/90 md:w-4/6 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi
              ac phasellus placerat a pellentesque tellus sed egestas. Et
              tristique dictum sit tristique sed non. Lacinia lorem id
              consectetur pretium diam ut. Pellentesque eu sit blandit fringilla
              risus faucibus.
            </div>
          </div>
        </div>
        <div className="flex items-center my-8 md:my-16">
          <div className="w-2/4 md:w-1/3">
            <Button text="Sign Up Now" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatNSell;
