import React, { useState } from "react";
import SaveBtn from "../../../UI/SaveBtn.jsx/SaveBtn";
import StarRatingComponent from "react-star-rating-component";
import { radioButton } from "../../../dummy";
import RadioBtn from "../../../UI/RadioBtn/RadioBtn";

const TotalPrice = () => {
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
              <div className="text-sixe-[16px] mb-[16px]"> قیمت کل ملک</div>
              <div className="text-sixe-[16px] text-[#536FB5] ">
                14.250.000.000 میلیون تومان
              </div>
            </div>

            <div>
              <StarRatingComponent name="rate1" starCount={10} value={rating} />
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

export default TotalPrice;
