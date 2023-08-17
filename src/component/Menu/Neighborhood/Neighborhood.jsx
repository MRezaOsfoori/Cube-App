import React, { useState } from "react";

import { SideMenuSVG } from "../../../dummy";

import InputItem from "../../../UI/InputItem/InputItem";

const Neighborhood = ({ menuButton, menuHandler }) => {
 
  return (
    <div
      className={
        menuButton
          ? " w-full h-screen px-[16px] flex flex-col overflow-scroll relative "
          : "w-full h-[500px] px-[16px]  overflow-scroll relative"
      }
      style={{ backgroundColor: " #F3F5FC" }}
    >
      <div className="absolute left-0 flex flex-col top-0 w-full">
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
          <p> آدرس خود را وارد کنید(یا از روی نقشه پیدا کنید): </p>
         <div className="grid grid-cols-2 gap-[8px]">
          <InputItem placeholder={"شهر"}/>
          <InputItem placeholder={"محله"}/>
          <InputItem placeholder={"خیابان"}/>
          <InputItem placeholder={"پلاک"}/>
          <InputItem placeholder={"طبقه"}/>
          <InputItem placeholder={"واحد"}/>
          <InputItem placeholder={"جهت ملک"}/>
         </div>
   
          </div>
        </div>

        
        
      </div>
    </div>
  );
};

export default Neighborhood;
