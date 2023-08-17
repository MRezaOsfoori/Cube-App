import React from "react";
import MenuItem from "../../../UI/MenuItem/MenuItem";
import {SideMenuSVG} from "../../../dummy"

const Edari = ({menuHandler,menuButton}) => {
  return (
    <div className={menuButton?" w-full  h-[385px]  flex flex-col":" w-full  h-screen  flex flex-col"} style={{backgroundColor: " #F3F5FC"}}>
      <div className="flex items-center justify-center h-[36px] " onClick={menuHandler}>
       {SideMenuSVG}
      </div>
      <div className="flex flex-col mx-[16px] mt-[32px]">
        <MenuItem name=" آپارتمان(اداری)"/>
        <MenuItem name=" خانه و کلنگی(اداری)"/>
        <MenuItem name=" ویلا(اداری)"/>
        <MenuItem name=" مستغلات(اداری)"/>
        <MenuItem name=" برج(اداری)"/>
      
      </div>
    </div>
  );
};

export default Edari;
