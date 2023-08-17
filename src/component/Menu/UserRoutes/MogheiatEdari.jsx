import React from "react";
import MenuItem from "../../../UI/MenuItem/MenuItem";
import {SideMenuSVG} from "../../../dummy"

const MogheiatEdari = ({menuHandler,menuButton}) => {
  return (
    <div className={menuButton?" w-full  h-[385px]  flex flex-col":" w-full  h-screen  flex flex-col"} style={{backgroundColor: " #F3F5FC"}}>
      <div className="flex items-center justify-center h-[36px] " onClick={menuHandler}>
       {SideMenuSVG}
      </div>
      <div className="flex flex-col mx-[16px] mt-[32px]">
        <MenuItem name=" آپارتمان(موقعیت اداری)"/>
        <MenuItem name=" خانه و کلنگی(موقعیت اداری)"/>
        <MenuItem name=" ویلا(موقعیت اداری)"/>
        <MenuItem name=" مستغلات(موقعیت اداری)"/>
        <MenuItem name=" برج(موقعیت اداری)"/>
      
      </div>
    </div>
  );
};

export default MogheiatEdari;
