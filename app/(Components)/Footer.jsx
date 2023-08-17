import React from "react";
import { FaHeart } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full p-4 pt-8 mt-6 bg-slate-900">
      <h1 className="text-xl text-center text-slate-200 ">
        Your friendly neighborhood note app!
      </h1>
      <center>
        <hr className="w-[50px] border-b-2 rounded-full my-4" />
      </center>
      <div className="flex justify-center gap-1 text-slate-200">
        Made with <FaHeart className="text-red-400" />
      </div>
    </div>
  );
};

export default Footer;
