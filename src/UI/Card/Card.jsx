import React from "react";
import { arrow } from "../../dummy";

const Card = ({ title, content, logo }) => {
  return (
    <div className="  p-[8px]  rounded-xl  flex items-center h-[83px] ">
      <div className=" p-[8px] flex  rounded bg-white w-full">
        <div className="w-[48px]  flex justify-center items-center">{logo}</div>
        <div className="flex flex-col  h-[51px] justify-center ">
          <div className="  font-normal  leading-[25px] mb-1 text-[16px]">
            {title}
          </div>
          <div className="  text-gray-400 font-normal  leading-[22px] text-[14px] text-[#536FB5]  ">
            {content}
          </div>
        </div>

        <div className="w-[24px] flex justify-end pl-2 items-center flex-1">
          {arrow}
        </div>
      </div>
    </div>
  );
};

export default Card;
