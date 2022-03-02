import Image from "next/image";
import React from "react";
import { classNames } from "../../helper/classNames";

const Img = ({ src, width, height, className }) => {
  return (
      <Image
        src={src}
        className={classNames(className)}
        alt="nfter image"
        width={width}
        height={height}
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
  );
};

export default Img;
