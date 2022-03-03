import React from "react";
import FastIcon from "../assets/icons/fast-transition.svg";
import GrowthIcon from "../assets/icons/growth.svg";
import Img from "./atoms/Img";

const About = () => {
  const abouts = [
    {
      title: "Fast Transaction",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet.",
      icon: FastIcon,
    },
    {
      title: "Growth Transaction",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus",
      icon: GrowthIcon,
    },
  ];
  return (
    <main className="md:max-w-8xl px-10  md:px-20 py-10 md:py-20 grid grid-cols-1  md:grid-cols-4 md:gap-4 my-10  bg-light/30">
      <section className="md:col-span-2 text-h4 my-2 md:text-h3 font-caps md:w-3/4 lg:w-3/5 uppercase">
        The amazing NFT art of the world here
      </section>
      {abouts.map((obj) => (
        <section key={obj.title} className="col-span-1 md:space-x-3 my-4 md:my-0">
          <div className="flex items-start space-x-2 md:space-x-4">
            <div className="w-[55px] mt-1">
              <Img
                className="inline-block"
                src={obj.icon}
                height={30}
                width={30}
              />
            </div>
            <div className="">
              <h2 className="text-h4 font-medium">{obj.title}</h2>
              <p className="text-p">{obj.desc}</p>
            </div>
          </div>
        </section>
      ))}
    </main>
  );
};

export default About;
