import React from "react";
import MenuItem from "../../../../UI/MenuItem/MenuItem";
import { SideMenuSVG } from "../../../../dummy";
import { Link } from "react-router-dom";
import { Context } from "../../../../Context/context";
import { useContext } from "react";

import Backdrop from "../../../../UI/Backdraw/Backdrop";

const Engineering = ({ menuHandler, menuButton }) => {
  const containerContext = useContext(Context);

  const toggleSearchHandler = () => {
    containerContext.close();
  };
  return (
   
     <div className="w-full   h-full  flex flex-col pt-[60px]" style={{ backgroundColor: "#F3F5FC" }}>
      
      <div className="flex flex-col mx-[16px] mt-[32px]  rounded-2xl p-[8px] bg-white ">
       <Link to={"engineering/architechtureMaterial"} >  <div onClick={toggleSearchHandler}  className="px-[8px]   border-b border-gray-200" >  <MenuItem  name=" معماری و مصالح مصرفی"/>   </div></Link>
        <div onClick={toggleSearchHandler}  className="px-[8px]   border-b border-gray-200">  <MenuItem name=" تجهیزات سرمایشی و گرمایشی   "/></div>
       
    
      </div>
    </div>
  );
};

export default Engineering;
