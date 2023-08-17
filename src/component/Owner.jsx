import React from "react";
import { SideMenuSVG } from "../dummy";
import "../Owner.css";

const Owner = ({ menuButton, menuHandler }) => {
  return (
    <div
      className={
        menuButton
          ? " w-full h-screen   flex flex-col overflow-scroll relative "
          : "w-full h-[500px]  flex flex-col overflow-scroll relative"
      }
      style={{ backgroundColor: " #F3F5FC" }}
    >
      <div className="absolute top-0 w-full">
        <div
          className="flex items-center justify-center h-[36px] "
          onClick={menuHandler}
        >
          {" "}
          {SideMenuSVG}
        </div>
        <div
          className="flex flex-col mx-[16px] px-[16px] mt-[32px] "
          style={{ backgroundColor: "#F3F5FC" }}
        >
          <div className=" flex flex-col  my-[16px] text-[14px] leading-[25px] ">
            <p> :تعداد مالکین </p>
            <input
              className="w-full flex text-right bg-white h-[48px] mt-[8px] px-[16px] text-[12px]"
              placeholder="نام مالک"
            />
          </div>
        </div>

        <div
          className="flex flex-col mx-[16px] px-[16px] mt-[32px] "
          style={{ backgroundColor: "#F3F5FC" }}
        >
          <div className=" flex flex-col  my-[16px] text-[14px] leading-[25px]">
            <p> مالک 1</p>
            <input
              className="w-full flex text-right bg-white h-[48px] mt-[8px] px-[16px] text-[12px]"
              placeholder="نام مالک"
            />
            <input
              className="w-full flex text-right bg-white h-[48px] mt-[8px] px-[16px] text-[12px]"
              placeholder="شماره مالک"
            />
          </div>
          <div className=" flex flex-col  my-[16px] text-[14px] leading-[25px]">
            <p> دیدگاه خود را وارد کنید</p>
            <input
              className="w-full flex text-right bg-white h-[48px] mt-[8px] px-[16px] text-[12px]"
              placeholder=" عنوان دیدگاه"
            />
            <input
              style={{ verticalAlign: "start" }}
              className="w-full   text-right inline-block text-top  h-[120px] mt-[8px] px-[16px] text-[12px]  "
              placeholder="متن دیدگاه "
            />
          </div>
        </div>

        <div
          className="flex flex-col mx-[16px] px-[16px] mt-[32px] "
          style={{ backgroundColor: "#F3F5FC" }}
        >
          <div className=" flex flex-col  my-[16px] text-[14px] leading-[25px]">
            <p> مالک 2</p>
            <input
              className="w-full flex text-right bg-white h-[48px] mt-[8px] px-[16px] text-[12px]"
              placeholder="نام مالک"
            />
            <input
              className="w-full flex text-right bg-white h-[48px] mt-[8px] px-[16px] text-[12px]"
              placeholder="شماره مالک"
            />
          </div>
          <div className=" flex flex-col  my-[16px] text-[14px] leading-[25px]">
            <p> دیدگاه خود را وارد کنید</p>
            <input
              className="w-full flex text-right bg-white h-[48px] mt-[8px] px-[16px] text-[12px]"
              placeholder=" عنوان دیدگاه"
            />
            <input
              style={{ verticalAlign: "start" }}
              className="w-full  text-right inline-block text-top  h-[120px] mt-[8px] px-[16px] text-[12px]  "
              placeholder="متن دیدگاه "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Owner;
