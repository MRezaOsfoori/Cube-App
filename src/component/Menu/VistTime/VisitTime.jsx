import React,{useState} from "react";

import { SideMenuSVG } from "../../../dummy";
import VisitItem from "../../../UI/VistItem/VisitItem";
import SwitchComponent from '../../../UI/SwitchComponet/SwitchComponent'
import SaveBtn from "../../../UI/SaveBtn.jsx/SaveBtn";

const VisitTime = ({ menuButton, menuHandler }) => {
  const [exchange, setExchange] = useState(true);

  const exchangeHandler = () => {
    setExchange(!exchange);
  };

 
  return (
    <div className="w-full  flex flex-col pt-[60px] h-full overflow-aut p-0 m-0 ">
    
      <div className=" flex flex-col w-full   relative  ">
       
        <div
          className="flex flex-col  rounded-xl mt-[36px]  "
         
        >
          <div className=" flex flex-col mx-[16px] p-[16px] rounded-xl "  style={{ backgroundColor: "#F3F5FC" }}>
          <p className="text-[16px] leading-[24.8px] mb-2"> روز و ساعت بازدید را مشخص کنید </p>
         <div className="grid grid-cols-1 gap-[8px]">
          <VisitItem num={"شنبه"}/>
          <VisitItem num={"یکشنبه"}/>
          <VisitItem num={"دوشنبه"}/>
          <VisitItem num={"سه شنبه"}/>
          <VisitItem num={"چهارشنبه"}/>
          <VisitItem num={"پنج شنبه"}/>
          <VisitItem num={"جمعه"}/>
         </div>
         
         </div>

         <div
          className="flex flex-col mx-[16px]  px-[16px] mt-[32px]  mb-[24px] rounded-xl"
          style={{ backgroundColor: "#F3F5FC" }}
        >
          <div className=" flex flex-col  my-[16px] text-[14px] leading-[25px]">
            <p> مشخصات نگهبان یا سرایدار را وارد کنید:</p>
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
            <p> توضیحات و نظرات</p>
           
            <input
              style={{ verticalAlign: "start" }}
              className="w-full  text-right inline-block text-top  h-[120px] mt-[8px] px-[16px] text-[12px]  "
              placeholder="متن  "
            />
          </div>
        </div>

        <div
          className="flex flex-col mx-[16px] px-[16px] mt-[32px]  mb-[0px] rounded-xl "
          style={{ backgroundColor: "#F3F5FC" }}
        >
          <div className=" flex flex-col  my-[16px] text-[14px] leading-[25px]">
            <p> مشخصات فرد جهت هماهنگی وارد کنید:</p>
            <input
              className="w-full flex text-right bg-white h-[48px] mt-[8px] px-[16px] text-[12px]"
              placeholder="نام فرد"
            />
            <input
              className="w-full flex text-right bg-white h-[48px] mt-[8px] px-[16px] text-[12px]"
              placeholder="شماره فرد"
            />
          </div>
          <div onClick={exchangeHandler} className='flex flex-row-reverse justify-end my-[24px]  items-center h-[48px] '>
            <div className="text-[14px] leading-[25px] mx-2 ">خودم</div>
             <SwitchComponent exchange={exchange} /></div>
          <div className=" flex flex-col   my-[16px] text-[14px] leading-[25px]">
            <div> توضیحات و نظرات</div>
           
            <input
              style={{ verticalAlign: "start" }}
              className="w-full  text-right inline-block text-top  h-[120px] mt-[8px] px-[16px] text-[12px]  "
              placeholder="متن  "
            />
          </div>
        </div>
         <div className="h-full">
          <SaveBtn/>
         </div>

        </div>

        
        
      </div>
    </div>
  );
};

export default VisitTime;
