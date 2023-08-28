import React,{useState} from "react";
import MenuItem from "../../../UI/MenuItem/MenuItem";

import { usertypetitles } from "../../../dummy";


const LandUse = ({landuse,setLanduse}) => {
  
  return (
    <div className=" w-full  h-full  pt-[60px] flex flex-col" style={{backgroundColor:"#F3F5FC"}}>
      
      <div className="flex flex-col mx-[16px] mt-[32px] rounded-2xl p-[8px] bg-white">
      {usertypetitles.map((item)=>{
        return(
          <div onClick={()=>{ setLanduse(item.id)}}   className="px-[8px] border-b border-gray-200"> <MenuItem name={item.name}/></div>
        )
      })}
  
      </div>
    </div>
  );
};

export default LandUse;
