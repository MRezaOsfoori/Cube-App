import React, { useState } from "react";
import MenuItem from "../../../UI/MenuItem/MenuItem";
import SwitchComponet from "../../../UI/SwitchComponet/SwitchComponent";
import { SideMenuSVG } from "../../../dummy";
import "../Owner/Owner.css";

const ExchangePage = ({ menuButton, menuHandler }) => {
  const [exchange, setExchange] = useState(false);

  const exchangeHandler = () => {
    setExchange(!exchange);
  };

  return (
    <div
      className={
        menuButton
          ? " w-full h-screen  flex flex-col overflow-scroll relative "
          : "w-full h-[500px]   overflow-scroll relative"
      }
      style={{ backgroundColor: " #F3F5FC" }}
    >
      <div className="absolute flex flex-col top-0 w-full">
        <div
          className="flex items-center justify-center h-[36px] fixedd top-0 "
          onClick={menuHandler}
        >
          {SideMenuSVG}
        </div>
        <div
          className="flex flex-col mx-[16px] px-[16px] mt-[32px] "
          style={{ backgroundColor: "#F3F5FC" }}
        >
          <div className=" flex flex-col  my-[16px] text-[14px] leading-[25px] ">
            <p> تعداد درخواست </p>
            <input
              className="w-full flex text-right bg-white h-[48px] mt-[8px] px-[16px] text-[12px]"
              placeholder="2 "
            />
          </div>
        </div>

        <div
          className="flex flex-col mx-[16px] px-[16px] mt-[32px] "
          style={{ backgroundColor: "#F3F5FC" }}
        >
          <div className=" flex flex-col my-[16px] text-[14px] leading-[25px]">
            <p> درخواست 1</p>
            <input
              className="w-full flex text-right bg-white h-[48px] mt-[8px] px-[16px] text-[12px]"
              placeholder="نام مالک"
            />
            <input
              className="w-full flex text-right bg-white h-[48px] mt-[8px] px-[16px] text-[12px]"
              placeholder="شماره مالک"
            />
            <input
              className="w-full flex text-right bg-white h-[48px] mt-[8px] px-[16px] text-[12px]"
              placeholder="مساحت "
            />
            <input
              className="w-full flex text-right bg-white h-[48px] mt-[8px] px-[16px] text-[12px]"
              placeholder="بازه سنی "
            />
          </div>
          <MenuItem name=" محله" />
          <MenuItem name="امکانات " />

          <div
            className="mb-[24px]  rounded-xl  h-[42px] flex justify-end flex-row-reverse items-center  px-[8px] "
            onClick={exchangeHandler}
          >
            <div className="text-[14px] text-gray-400 flex justify-center items-center  font-normal mx-[8px] h-[25px] leading-[24.8px]">
              امکان پرداخت ما به التفاوت را دارم معادل:
            </div>
            <SwitchComponet exchange={exchange} />
            </div>
            
          </div>

          
              <input
                className="w-full flex text-right bg-white h-[48px] mt-[8px] px-[16px] text-[12px]"
                placeholder="60.000.000 میلیون تومان "
              />
            
        
      </div>
    </div>
  );
};

export default ExchangePage;
