import React, { useState } from "react";
import SaveBtn from "../../../UI/SaveBtn.jsx/SaveBtn";
import StarRatingComponent from "react-star-rating-component";
import { radioButton } from "../../../dummy";
import RadioBtn from "../../../UI/RadioBtn/RadioBtn";

const PriceSale = () => {
  const [rating, setrating] = useState(2);

  return (
    <div className="w-full  flex flex-col pt-[60px] h-full overflow-aut p-0 m-0 ">
      <div className=" flex flex-col w-full   relative  ">
        <div className="flex flex-col  rounded-xl mt-[36px]  ">
          <div
            className="flex flex-col mx-[16px]  px-[16px] mt-[32px]  mb-[24px] rounded-xl"
            style={{ backgroundColor: "#F3F5FC" }}
          >
            <div className=" flex flex-col  my-[16px] text-[14px] leading-[25px]">
              <p> قیمت فروش متری را وارد کنید:</p>
              <input
                className="w-full flex text-right bg-white h-[48px] mt-[8px] px-[16px] text-[12px]"
                placeholder="57.000.000 میلیون تومان "
              />
            </div>

            <div>
              <div className="text-size-[16px] text-[#000C51] mb-2">
                ارزیابی خود را از این قیمت گذاری تعیین کنید:
              </div>
              <div className="grid grid-cols-2 mb-3 ">
                <RadioBtn name="خیلی زیر قیمت" />
                <RadioBtn name=" زیر قیمت" />
                <RadioBtn name=" قیمت بازار" />
                <RadioBtn name="بالاتر از قیمت" />
                <RadioBtn name="خیلی بالاتر از  قیمت" />
              </div>
              <StarRatingComponent name="rate1" starCount={10} value={rating} />
            </div>

            <div className=" flex flex-col  my-[16px] text-[14px] leading-[25px]">
              <p> توضیحات و نظرات</p>

              <input
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

export default PriceSale;
