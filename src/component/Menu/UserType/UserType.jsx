import React from "react";
import MenuItem from "../../../UI/MenuItem/MenuItem";
import {SideMenuSVG} from "../../../dummy"

import { usertypetitles } from "../../../dummy";

const UserType = ({menuHandler,menuButton}) => {
  return (
    <div className=" w-full  h-full  pt-[60px] flex flex-col" style={{backgroundColor:"#F3F5FC"}}>
      
      <div className="flex flex-col mx-[16px] mt-[32px] rounded-2xl p-[8px] bg-white">
      {usertypetitles.map((item)=>{
        return(
          <div onc className="px-[8px] border-b border-gray-200"> <MenuItem name={item}/></div>
        )
      })}
  
      </div>
    </div>
  );
};

export default UserType;
