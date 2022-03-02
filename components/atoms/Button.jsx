import React from "react";
import { classNames } from "../../helper/classNames";

const Button = ({ text, className, tranparent, indigo }) => {
  return (
    <button
      className={classNames(
        className,
        `${
          tranparent
            ? "bg-white text-indigo border border-indigo active:bg-light/20"
            : "bg-indigo text-white border border-white active:bg-indigo/80 "
        } px-4 py-[8px] rounded-full whitespace-nowrap	`
      )}
    >
      {text}
    </button>
  );
};

export default Button;
