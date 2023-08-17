import React, { useState, useContext } from "react";
import Crad from "../UI/Card/Card";
import Backdrop from "../UI/Backdraw/Backdrop";
import Menu from "../component/Menu/Menu";
import SwitchComponent from "../UI/SwitchComponet/SwitchComponent";
import { Context } from "../Context/context";
import { Link } from "react-router-dom";
import { Frame387, back, icon, map, vector } from "../dummy"
import Owner from "../component/Menu/Owner/Owner";
import DealType from "../component/Menu/DealType/DealType";



const SabtFile = () => {
  const [exchange, setExchange] = useState(false);
  const [compo, setcompo] = useState(false);
  const [menuHeight, setmenuHeight] = useState("");
  const [nmalek, setnmalek] = useState("");
  const containerContext = useContext(Context);

  const toggleSearchHandler = () => {
    containerContext.close();
    setnmalek(0)
    
  };

  const exchangeHandler = () => {
    setExchange(!exchange);
  };
  return (

    <>
      <div
        className={
          containerContext.Open ? "absolute left-2 top-0 w-screen z-30 duration-1000" : "hidden "} onClick={toggleSearchHandler}>
        <Backdrop />
      </div>
      <div
        className={containerContext.Open ? "left-0 right-0 fixed bottom-[0px] px-0 w-full  z-30 " : "hidden"}>
        {/* <Owner /> */}
        <Menu compo={compo} dh={menuHeight} setdh={setmenuHeight} nmalek={nmalek} setnmalek={setnmalek} />
      </div>


      <div className="absolute top-0  left-0 pt-2 w-full  " style={{ backgroundColor: "#F3F5FC" }}>
        <div className="flex flex-col">
          <div className="rounded-xl  h-[42px] flex ">
            <div className="flex justify-center items-center ">
              {back}
            </div>
            <div className="text-[20px] flex justify-center items-center  font-normal mx-[16px]  leading-[42px]">
              ثبت فایل
            </div>

          </div>
          <Link to={"/Dashboard/0/DashboardLeftFilingSide/FilingSide"} style={{ textDecoration: "none", color: "black" }}>
            <div onClick={() => { toggleSearchHandler(); setcompo("Owner");setmenuHeight("254") }} className="mb-[16px] rounded-lg bg-white  p-1  hover:bg-blue-200">
              <Crad
                title="نام و شماره مالک"
                content="احمد احمدی-0912456879"
                logo={Frame387}
              />
            </div>
          </Link>

          <div className="flex flex-col rounded-lg bg-white  p-1">
            <Link to={"/Dashboard/0/DashboardLeftFilingSide/Dashboardmoamele"} style={{ textDecoration: "none", paddingLeft: "0px", color: "black", paddingRight: "0px" }}>
              <div onClick={() => { toggleSearchHandler(); setcompo("DealType");setmenuHeight("354") }}>
                <Crad title="نوع معامله " content="فروش" logo={icon} />
              </div>
            </Link>
            <div onClick={() => { toggleSearchHandler(); setcompo("UserType") ;setmenuHeight("490") }}>
              <Crad title="نوع کاربری" content="مسکونی" logo={icon} />
            </div>
            <div className="">
              <Crad
                title="نام و شماره مالک"
                content="آپارتمان(مسکونی)"
                logo={icon}
              />
            </div>
            <div
              className="mb-[24px]  rounded-xl  h-[42px] flex justify-end flex-row-reverse items-center  px-[8px] "
              onClick={exchangeHandler}
            >
              <div className="text-[14px] text-gray-400 flex justify-center items-center  font-normal mx-[8px] h-[25px] leading-[24.8px]">
                درخواست معاوضه دارم
              </div>
              <SwitchComponent exchange={exchange} />

            </div>
          </div>

          <div className="mt-[16px] rounded-lg bg-white  p-1">
            <Crad title="محله" content="احمد احمدی-0912456879" logo={map} />
          </div>

          <div className="mt-[16px] mb-[24px] rounded-lg bg-white  p-1">
            <Crad
              title="شرایط هماهنگی برای بازدید"
              content="احمد احمدی-0912456879"
              logo={vector}
            />
          </div>
          <div
            className=" text-white flex justify-center items-center rounded-lg h-[48px] mb-[16px]"
            style={{ backgroundColor: "#2F5FE3" }}
          >
            <button>ثبت ملک</button>
          </div>
        </div>
      </div>



    </>
  );
};

export default SabtFile;
