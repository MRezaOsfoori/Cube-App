import React, { useState, useContext } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock"  ;
import Crad from "../UI/Card/Card";
import Backdrop from "../UI/Backdraw/Backdrop";
import Menu from "../component/Menu/Menu";
import SwitchComponent from "../UI/SwitchComponet/SwitchComponent";
import { Context } from "../Context/context";
import { Link } from "react-router-dom";
import { Frame387, back, icon, map, vector } from "../dummy";
import {sabtFileList} from "../dummy"

const SabtFile = () => {
  const [exchange, setExchange] = useState(false);
  const [compo, setcompo] = useState(false);
  const [menuHeight, setmenuHeight] = useState(0);
  const [menubg, setmenubg] = useState(false);
  const [numOfOwner, setNumOfOwner] = useState(0);
 
  const containerContext = useContext(Context);

  const toggleSearchHandler = () => {
    containerContext.close();
    if(containerContext.Open){
      enableBodyScroll(document);}
  else{
    disableBodyScroll(document)
  }
    
  };

  const exchangeHandler = () => {
    setExchange(!exchange);
  };
  return (
    <>
      <div
        className={
          containerContext.Open
            ? " absolute left-2 top-0 w-screen z-30 duration-1000 "
            : "hidden "
        }
        onClick={()=>{toggleSearchHandler()}}
        
      >
        <Backdrop />
      </div>

      <div
        className={
          containerContext.Open
            ? " left-0 fixed bottom-[0px] px-0 w-full  z-30 "
            : "hidden"
        }
      >
        <Menu
          compo={compo}
          menuHeight={menuHeight}
          setmenuHeight={setmenuHeight}
          menubg={menubg}
          numOfOwner={numOfOwner}
          setNumOfOwner={setNumOfOwner}
        />
      </div>

      <div
        className="absolute top-0 left-0 pt-2 w-full   "
        style={{ backgroundColor: "#F3F5FC"}}
        
      >
        <div className=" flex flex-col ">
          <div className="rounded-xl h-[42px] flex ">
            <div className="flex justify-center items-center ">{back}</div>
            <div className="text-[20px] flex justify-center items-center  font-normal mx-[16px]  leading-[42px]">
              ثبت فایل
            </div>
          </div>

          <Link
            to={"/Dashboard/0/DashboardLeftFilingSide/FilingSide"}
            className="LinkStyle"
          >
            <div
              onClick={() => {
                toggleSearchHandler();
                setcompo("Owner");
                setmenuHeight("254");
                setmenubg(false);
                setNumOfOwner(0)
              }}
              className="mb-[16px] rounded-lg bg-white  p-1  hover:bg-blue-200"
            >
              <Crad
                title="نام و شماره مالک"
                content="احمد احمدی-0912456879"
                logo={Frame387}
              />
            </div>
          </Link>

          <div className="flex flex-col rounded-lg bg-white  p-1">
            <Link
              to={"/Dashboard/0/DashboardLeftFilingSide/Dashboardmoamele"}
              className="LinkStyle "
            >
              <div
                onClick={() => {
                  toggleSearchHandler();
                  setcompo("DealType");
                  setmenubg(true);
                  setmenuHeight("354");
                }}
              >
                <Crad title="نوع معامله " content="فروش" logo={icon} />
              </div>
            </Link>

            <Link
              to={"/Dashboard/0/DashboardLeftFilingSide/Dashboardkarbari"}
              className="LinkStyle "
            >
              <div
                onClick={() => {
                  console.log("LandUse")
                  toggleSearchHandler();
                  setcompo("LandUse");
                  setmenubg(true);
                  setmenuHeight("490");
                }}
              >
                <Crad title="نوع کاربری" content="مسکونی" logo={icon} />
              </div>
            </Link>

            <Link
              to={"/Dashboard/0/DashboardLeftFilingSide/Dashboardlandtype"}
              className="LinkStyle "
            >
              <div
                onClick={() => {
                  toggleSearchHandler();
                  setcompo("LandType");
                  setmenuHeight("490");
                }}
              >
                <Crad title="نوع ملک" content="آپارتمان(مسکونی)" logo={icon} />
              </div>
            </Link>

            
              <div
                className="mb-[24px]  rounded-xl  h-[42px] flex justify-end flex-row-reverse items-center  px-[8px]  mx-[8px] "
                onClick={() => {
                  toggleSearchHandler();
                  setcompo("exchange");
                  setmenuHeight("490");
                  setmenubg(false);
                }}
              >
                <div className="text-[14px] text-gray-400 flex justify-center items-center  font-normal mx-[8px] h-[25px] leading-[24.8px] ">
                  درخواست معاوضه دارم
                </div>
               <div onClick={exchangeHandler}>
               <Link
              to={"/Dashboard/0/DashboardLeftFilingSide/DashboardExchange"}
              className="LinkStyle "
             
            >
                <SwitchComponent
                  exchange={exchange}
                  
                /></Link>
               </div>
              </div>
            
          </div>

          <Link
            to={"/Dashboard/0/DashboardLeftFilingSide/DashboardNeighborhood"}
            className="LinkStyle "
          >
            <div
              className="mt-[16px] rounded-lg bg-white  p-1"
              onClick={() => {
                toggleSearchHandler();
                setcompo("Neighborhood");
                setmenuHeight("490");
              }}
            >
              <Crad title="محله" content="احمد احمدی-0912456879" logo={map} />
            </div>
          </Link>

          <Link
            to={"/Dashboard/0/DashboardLeftFilingSide/DashboardvisitTime"}
            className="LinkStyle "
          >
            <div
              className="mt-[16px] mb-[24px] rounded-lg bg-white  p-1"
              onClick={() => {
                toggleSearchHandler();
                setcompo("VisitTime");
                setmenuHeight("490");
              }}
            >
              <Crad
                title="شرایط هماهنگی برای بازدید"
                content="احمد احمدی-0912456879"
                logo={vector}
              />
            </div>
          </Link>

          <Link
            to={"/Dashboard/0/DashboardLeftFilingSide/DashboardownerLand"}
            className="LinkStyle "
          >
            <div
              className="mt-[16px] mb-[24px] rounded-lg bg-white  p-1"
              onClick={() => {
                toggleSearchHandler();
                setcompo("Constructors");
                setmenuHeight("490");
              }}
            >
              <Crad
                title="نام و شماره سازنده ملک"
                content="احمد احمدی-0912456879"
                logo={vector}
              />
            </div>
          </Link>
 
          <Link
            to={"/Dashboard/0/DashboardLeftFilingSide/DashboardArea"}
            className="LinkStyle "
          >
            <div
              className="mt-[16px] mb-[24px] rounded-lg bg-white  p-1"
              onClick={() => {
                toggleSearchHandler();
                setcompo("Area");
                setmenuHeight("490");
              }}
            >
              <Crad
                title=" مساحت   "
                content="250 مترمربع"
                logo={vector}
              />
            </div>
          </Link>
        
          
          {sabtFileList.map((item)=>{
            return(
              <>
              <Link
            to={`/Dashboard/0/DashboardLeftFilingSide/${item.link}`}
            className="LinkStyle "
          >
            <div
              className={`${item.tailwind}`}
              onClick={() => {
                toggleSearchHandler();
                setcompo(item.copoName);
                setmenuHeight(item.menuHeight);
              }}
            >
              <Crad
                title={item.cardName}
                content={item.cardContent}
                logo={item.cardLogo}
              />
            </div>
          </Link>
              </>
            )
          })}

          
<Link
            to={"/Dashboard/0/DashboardLeftFilingSide/Dashboardproperties"}
           
          >
            <div
              className="mt-[16px] mb-[24px] rounded-lg bg-white  p-1"
              onClick={() => {
                
                setmenuHeight("490");
              }}
            >
              <Crad
                title=" امکانات   "
                content="250 مترمربع"
                logo={vector}
              />
            </div>
          </Link>
 
 

         
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
