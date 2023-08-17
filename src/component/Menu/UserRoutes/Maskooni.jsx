import React from "react";
import MenuItem from "../../../UI/MenuItem/MenuItem";
import {SideMenuSVG} from "../../../dummy"

const Maskooni = ({menuHandler,menuButton}) => {
  return (
    <div className={menuButton?" w-full  h-[442px]  flex flex-col":" w-full  h-screen  flex flex-col"} style={{backgroundColor: " #F3F5FC"}}>
      <div className="flex items-center justify-center h-[36px] " onClick={menuHandler}>
       {SideMenuSVG}
      </div>
      <div className="flex flex-col mx-[16px] mt-[32px]">
        <MenuItem name=" آپارتمان(مسکونی)"/>
        <MenuItem name=" خانه و کلنگی(مسکونی)"/>
        <MenuItem name=" ویلا(مسکونی)"/>
        <MenuItem name=" مستغلات(مسکونی)"/>
        <MenuItem name=" برج(مسکونی)"/>
        <MenuItem name=" شهرک یا مجتمع(مسکونی)"/>
       
      
      </div>
    </div>
  );
};

export default Maskooni;
