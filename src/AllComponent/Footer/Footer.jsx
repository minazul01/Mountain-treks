import React from "react";

// react icons
import { CgFacebook } from "react-icons/cg";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";

import { SlArrowUp } from "react-icons/sl";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white shadow-md rounded-xl w-full p-3 md:p-4 relative">
      <div className="w-full flex items-center justify-center pt-[30px] flex-col gap-[20px] pb-[130px]">
        <h3 className="text-4xl font-bold text-[#3B9DF8]">Mountain-Treks</h3>

        <p className="w-2/4 text-[1rem] sm:text-start text-gray-600">
          Mountain treks offer thrilling adventures through rugged landscapes,
          combining physical challenge with breathtaking views of nature’s
          highest peaks.
        </p>

        <Link to="/contact">
          <button className="py-3 px-6 rounded-full bg-[#3B9DF8] text-white">
            Contact Us
          </button>
        </Link>

        <div className="flex gap-[15px] text-black mt-4">
          <a
            className="text-[1.3rem] p-1.5 cursor-pointer rounded-full bg-white text-[#424242] shadow-md"
            href="https://www.facebook.com/minazul.islam.38795"
            target="_blank"
          >
            <CgFacebook />
          </a>
          <a
            className="text-[1.2rem] p-1.5 cursor-pointer rounded-full bg-white text-[#424242] shadow-md"
            href="https://x.com/Minazul01"
            target="_blank"
          >
            <BsTwitter />
          </a>
          <a
            className="text-[1.2rem] p-1.5 cursor-pointer rounded-full bg-white text-[#424242] shadow-md"
            href="https://www.youtube.com/"
            target="_blank"
          >
            <FaYoutube />
          </a>
          <a
            className="text-[1.2rem] p-1.5 cursor-pointer rounded-full bg-white text-[#424242] shadow-md"
            href="https://www.linkedin.com/in/minazul-islam-2371972b5/"
            target="_blank"
          >
            <BsLinkedin />
          </a>
        </div>
      </div>

      <div className="z-30 absolute bottom-3 left-0 right-0 px-3 flex items-center justify-between w-full">
        <p className="text-[0.9rem] text-gray-300">
          © 2021 All Rights Reserved
        </p>

        <SlArrowUp className="p-2 rounded-full border border-gray-300 cursor-pointer text-[2rem] text-gray-300" />
      </div>

      <img
        src="https://i.ibb.co/zNk7XT4/Rectangle-97.png"
        alt="background/image"
        className="absolute bottom-[20px] sm:bottom-0 left-0 right-0 z-10 rounded-b-xl"
      />
      <img
        src="https://i.ibb.co/0mp2FwS/Rectangle-95.png"
        alt="background/image"
        className="absolute bottom-0 left-0 right-0 z-10 rounded-b-xl"
      />
    </footer>
  );
};

export default Footer;
