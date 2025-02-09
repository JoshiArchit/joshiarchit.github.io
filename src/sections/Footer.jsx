import React from "react";

const Footer = () => {
  return (
    <div className="text-white text-xs sm:text-base flex flex-col mb-[5%]">
      <div className="horizontal-line h-[2px] bg-black-300 mb-[2%]"></div>
      <div className="footer-text text-center">
        Website developed using React, Tailwind and may have lingering hints of
        ThreeJS because it started as a 3D project with guidance from -
        <a
          href="https://www.youtube.com/watch?v=kt0FrkQgw8w&t=6505s&pp=ygUNM2pzIHBvcnRmb2xpbw%3D%3D"
          target="_blank"
          rel="noreferrer"
          className="underline text-blue-400 hover:text-blue-300 ml-1"
        >
          JavaScript Mastery
        </a>
        .
        <br />
        All icons attributed in the README.md file in the GitHub repository.
      </div>
    </div>
  );
};

export default Footer;
