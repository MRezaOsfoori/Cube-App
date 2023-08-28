import React, { useState, useContext } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock"  ;
import Crad from "../../../../UI/Card/Card";
import Backdrop from "../../../../UI/Backdraw/Backdrop";
import Menu from "../../../../component/Menu/Menu";

import { Context } from "../../../../Context/context";
import { Link } from "react-router-dom";
import { Frame387, back, icon, map, vector } from "../../../../dummy";
import MenuItem from "../../../../UI/MenuItem/MenuItem";




const Branchs = () => {
   const propertylist =[
    {
      link:"branchs",
      tailwind:"mt-[16px] rounded-t-xl bg-white  p-1   ",
      menuHeight:"700 ",
      copoName:"urbanWater",
      cardName:"آب شهری",
      borderC:"#ccd0dc"
            
    },
    {
      link:"branchs",
      tailwind:"mb-[16px] rounded-b-xl bg-white  p-1",
      menuHeight:"490 ",
      copoName:"wellWater",
      cardName:"آب چاه",
      borderC:"white"
            
    },
    {
      link:"branchs",
      tailwind:" rounded-t-xl bg-white  p-1   ",
      menuHeight:"490 ",
      copoName:"sharedElectricity",
      cardName:"برق مشترک ",
      borderC:"#ccd0dc"
            
    },
    {
      link:"branchs",
      tailwind:"mb-[16px] rounded-b-xl bg-white  p-1",
      menuHeight:"490 ",
      copoName:"dedicatedElectricity",
      cardName:" برق اختصاصی",
      borderC:"white"
            
    },
    {
      link:"branchs",
      tailwind:" rounded-t-xl bg-white  p-1   ",
      menuHeight:"490 ",
      copoName:"sharedGas",
      cardName:"گاز مشترک ",
      borderC:"#ccd0dc"
            
    },
    {
      link:"branchs",
      tailwind:"mb-[16px] rounded-b-xl bg-white  p-1",
      menuHeight:"490 ",
      copoName:"DedicatedGas",
      cardName:" گاز اختصاصی",
      borderC:"white"
            
    },

    {
      link:"branchs",
      tailwind:"mt-[16px] rounded-xl bg-white  p-1   ",
      menuHeight:"490 ",
      copoName:"phone",
      cardName:" تلفن ",
      borderC:"#ccd0dc"
            
    },
    
  
    
  ];
  
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
        className="absolute top-0 left-0 pt-2 w-full h-full   "
        style={{ backgroundColor: "#F3F5FC"}}
        
      >
        <div className=" flex flex-col  py-[70px] px-[16px] ">
          <div className="rounded-xl h-[42px] flex ">
            <div className="flex justify-center items-center ">{back}</div>
            <div className="text-[20px] flex justify-center items-center  font-normal mx-[16px]  leading-[42px]">
              انشعابات 
            </div>
          </div>

         
        
          
          {propertylist.map((item)=>{
            return(
            
              <>
              <Link
            to={`/Dashboard/0/DashboardLeftFilingSide/Dashboardproperties/${item.link}`}
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
              <MenuItem
                name={item.cardName}
                borderC={item.borderC}
              
              />
            </div>
          </Link>
              </>
             
            )
          })}

         
          
        </div>
      </div>
    </>
  );
};

export default Branchs;
