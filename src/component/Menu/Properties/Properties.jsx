import React, { useState, useContext } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock"  ;
import Crad from "../../../UI/Card/Card";
import Backdrop from "../../../UI/Backdraw/Backdrop";
import Menu from "../../../component/Menu/Menu";
import SwitchComponent from "../../../UI/SwitchComponet/SwitchComponent";
import { Context } from "../../../Context/context";
import { Link } from "react-router-dom";
import { Frame387, back, icon, map, vector } from "../../../dummy";
import { sabtFileList} from "../../../dummy";



const Properties = () => {

   
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


   const propertylist =[
    {
      link:"branchs",
      tailwind:"mt-[16px] mb-[16px] rounded-lg bg-white  p-1",
      menuHeight:"490 ",
      copoName:"",
      cardLogo:Frame387,
      cardName:"انشعابات",
      cardContent: "امتیاز:5از5 ",
      OpenMenu:false,
    },
    {
      link:"engineering",
      tailwind:" mb-[16px] rounded-lg bg-white  p-1",
      menuHeight:"250 ",
      copoName:"engineering",
      cardLogo:Frame387,
      cardName:"مهندسی",
      cardContent: "امتیاز:5از5 ",
      OpenMenu:true,
    },
    {
      link:"DashboardBuildingAge",
      tailwind:" rounded-t-lg bg-white  p-1",
      menuHeight:"490 ",
      copoName:"",
      cardLogo:Frame387,
      cardName:"امکانات رفاهی واحد",
      cardContent: "امتیاز:5از5 ",
      OpenMenu:true,
    },
    
    {
      link:"DashboardBuildingAge",
      tailwind:" mb-[16px] rounded-b-lg bg-white p-1",
      menuHeight:"490 ",
      copoName:"",
      cardLogo:Frame387,
      cardName:"امکانات رفاهی ساختمان",
      cardContent: "امتیاز:5از5 ",
    },
    {
      link:"DashboardBuildingAge",
      tailwind:" rounded-t-lg bg-white  p-1",
      menuHeight:"490 ",
      copoName:"",
      cardLogo:Frame387,
      cardName:"امکانات واحد در مشاعات",
      cardContent: "امتیاز:5از5 ",
    },
    
    {
      link:"DashboardBuildingAge",
      tailwind:" mb-[16px] rounded-b-lg bg-white p-1",
      menuHeight:"490 ",
      copoName:"",
      cardLogo:Frame387,
      cardName:"امکانات مشاعی در ساختمان",
      cardContent: "امتیاز:5از5 ",
    },
    {
      link:"DashboardBuildingAge",
      tailwind:" mb-[16px] rounded-lg bg-white  p-1",
      menuHeight:"490 ",
      copoName:"",
      cardLogo:Frame387,
      cardName:"وضعیت محلی",
      cardContent: "امتیاز:5از5 ",
    },{
      link:"DashboardBuildingAge",
      tailwind:" mb-[16px] rounded-lg bg-white  p-1",
      menuHeight:"490 ",
      copoName:"",
      cardLogo:Frame387,
      cardName:"امکانات محلی",
      cardContent: "امتیاز:5از5 ",
    },
    {
      link:"DashboardBuildingAge",
      tailwind:" mb-[16px] rounded-lg bg-white  p-1",
      menuHeight:"490 ",
      copoName:"",
      cardLogo:Frame387,
      cardName:" جزئیات و توضیحات عرصه و اعیان",
      cardContent: "امتیاز:5از5 ",
    },
    {
      link:"DashboardBuildingAge",
      tailwind:" mb-[16px] rounded-lg bg-white  p-1",
      menuHeight:"490 ",
      copoName:"",
      cardLogo:Frame387,
      cardName:" جزئیات پلاک های مجاور",
      cardContent: "امتیاز:5از5 ",
    },
    {
      link:"DashboardBuildingAge",
      tailwind:"mb-[16px] rounded-lg bg-white  p-1",
      menuHeight:"490 ",
      copoName:"",
      cardLogo:Frame387,
      cardName:" جزئیات زراعی و فضای سبز  ",
      cardContent: "امتیاز:5از5 ",
    },
    {
      link:"DashboardBuildingAge",
      tailwind:" mb-[16px] rounded-lg bg-white  p-1",
      menuHeight:"490 ",
      copoName:"",
      cardLogo:Frame387,
      cardName:"جزئیات امکانات صنعتی",
      cardContent: "امتیاز:5از5 "
    },

    
    
    
  ];
 
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
        <div className=" flex flex-col  py-[70px] px-[16px] ">
          <div className="rounded-xl h-[42px] flex ">
            <div className="flex justify-center items-center ">{back}</div>
            <div className="text-[20px] flex justify-center items-center  font-normal mx-[16px]  leading-[42px]">
              امکانات 
            </div>
          </div>

         
        
          
          {propertylist.map((item)=>{
            return(
            
              <>
              <Link
            to={`/Dashboard/0/DashboardLeftFilingSide/Dashboardproperties/${item.link}`}
            className="LinkStyle "
            onClick={()=>{
              setcompo(item.copoName);
                setmenuHeight(item.menuHeight);
            }

            }
          >
            <div
              className={`${item.tailwind}`}
              onClick={() => {
                item.OpenMenu?toggleSearchHandler():
               
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

export default Properties;
