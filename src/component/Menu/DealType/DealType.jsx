import React,{useState} from "react";
import MenuItem from "../../../UI/MenuItem/MenuItem";
import {SideMenuSVG} from "../../../dummy"

const DealType = ({menuHandler,menuButton}) => {
 const [dealtype, setdealtype] = useState("")
 console.log(dealtype)
  return (
    <div className="w-full   h-full  flex flex-col pt-[60px]" style={{ backgroundColor: "#F3F5FC" }}>
      
      <div className="flex flex-col mx-[16px] mt-[32px]  rounded-2xl p-[8px] bg-white ">
        <div onClick={()=>{setdealtype("فروش")}}  className="px-[8px]   border-b border-gray-200" >          <MenuItem  name=" فروش"/>   </div>
        <div onClick={()=>{setdealtype(" رهن و اجاره")}} className="px-[8px]   border-b border-gray-200">  <MenuItem name=" رهن و اجاره"/></div>
        <div onClick={()=>{setdealtype(" مشارکت")}} className="px-[8px]   border-b border-gray-200" >       <MenuItem name=" مشارکت"/> </div>
        <div onClick={()=>{setdealtype(" پیش فروش")}} className="px-[8px]"                           >     <MenuItem name=" پیش فروش"/> </div>
        
    
      </div>
    </div>
  );
};

export default DealType;
