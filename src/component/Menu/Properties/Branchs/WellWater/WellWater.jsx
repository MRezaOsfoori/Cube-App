import React, { useState } from "react";
import SaveBtn from "../../../../../UI/SaveBtn.jsx/SaveBtn";
import StarRatingComponent from "react-star-rating-component";
import { radioButton } from "../../../../../dummy";
import RadioBtn from "../../../../../UI/RadioBtn/RadioBtn";
import StarRating from "../../../../../UI/StarRating/StarRating";

const UrbanWater = () => {
  const [rating, setrating] = useState(2);

  return (
    <div className="w-full  flex flex-col pt-[60px] h-full overflow-aut p-0 m-0 ">
      <div className=" flex flex-col w-full   relative  ">
        <div className="flex flex-col  rounded-xl mt-[36px]  ">
          <div
            className="flex flex-col mx-[16px]  px-[16px] mt-[32px]  mb-[16px] rounded-xl"
            style={{ backgroundColor: "#F3F5FC" }}
          >
            <div className="text-[16px] my-[16px] font-medium">
              {" "}
              آب مشترک چاه:
            </div>
            <div className=" flex flex-col    ">
              <div className="text-[16px]"> کنتور:</div>
              <input
                className="w-full flex text-right bg-white h-[48px] mt-[8px] px-[16px] text-[12px]"
                placeholder="2"
              />
            </div>
            <div className=" flex flex-col  my-[16px] text-[14px] ">
              <div className="text-[16px]"> آمپراژ:</div>
              <input
                className="w-full flex text-right bg-white h-[48px] mt-[8px] px-[16px] text-[12px]"
                placeholder="0   "
              />
            </div>
            <div className="h-[40px] my-[16px] flex items-center justify-center">
            <StarRating rating={rating}/>
            </div>
            
          </div>
          <div
            className="flex flex-col mx-[16px]  px-[16px] mb-[16px]  rounded-xl"
            style={{ backgroundColor: "#F3F5FC" }}
          >
            <div className="text-[16px] my-[16px] font-medium">
              {" "}
              آب اختصاصی چاه:
            </div>
            <div className=" flex flex-col    ">
              <div className="text-[16px]"> کنتور:</div>
              <input
                className="w-full flex text-right bg-white h-[48px] mt-[8px] px-[16px] text-[12px]"
                placeholder="2"
              />
            </div>
            <div className=" flex flex-col  my-[16px] text-[14px] ">
              <div className="text-[16px]"> آمپراژ:</div>
              <input
                className="w-full flex text-right bg-white h-[48px] mt-[8px] px-[16px] text-[12px]"
                placeholder="0   "
              />
            </div>
            <div className="h-[40px] my-[16px] flex items-center justify-center">
            <StarRating rating={rating}/>
            </div>
          </div>
          <div
            className="flex flex-col mx-[16px]  px-[16px]   mb-[16px] rounded-xl"
            style={{ backgroundColor: "#F3F5FC" }}
          >
            <div className=" flex flex-col  my-[16px] text-[14px] leading-[25px]">
              <p> توضیحات و نظرات</p>

              <textarea
                style={{ verticalAlign: "start" }}
                className="w-full  text-right inline-block text-top  h-[120px] mt-[8px] px-[16px] text-[12px]  "
                placeholder="متن  "
              />
            </div>
          </div>

          <div className="h-full">
            <SaveBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrbanWater;
