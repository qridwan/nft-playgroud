import Image from "next/image";
import React from "react";

const Img = ({ src, width, height, className }) => {
  return (
    <Image
      src={src}
      className={className}
      alt="nfter image"
      width={width}
      height={height}
      // blurDataURL="data:..." automatically provided
      // placeholder="blur" // Optional blur-up while loading
    />
  );
};

export default Img;
