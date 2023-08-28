import React, { useEffect, useState,useContext } from "react";

import Owner from "./Owner/Owner";
import Search from "./Search/Search"
import DealType from "./DealType/DealType"
import LandUse from "./LandUse/LandUse"

import ExchangePage from "./Exchange/ExchangePage"
import Neighborhood from "./Neighborhood/Neighborhood"
import VisitTime from "./VistTime/VisitTime"
import Constructors from "./Constructors/Constructors"
import Area from "./Area/Area"
import BuildingAge from "./BuildingAge/BuildingAge"
import PriceSale from "./PriceSale/PriceSale"
import TotalPrice from "./TotalPrice/TotalPrice";
import NumberOfStories from "./NumberOfStories/NumberOfStories";
import TotalUnits from "./TotalUnits/TotalUnits";
import StoriesUnits from "./StoriesUnits/StoriesUnits";
import RoomNumbers from "./RoomNumbers/RoomNumbers";




import { SideMenuSVG } from "../../dummy";
import LandType from "./UserRoutes/LandType";
import Properties from "./Properties/Properties";
import UrbanWater from "./Properties/Branchs/UrbanWater/UrbanWater"
import WellWater from "./Properties/Branchs/WellWater/WellWater"
import SharedElectricity from "./Properties/Branchs/SharedElectricity/SharedElectricity"
import DedicatedElectricity from "./Properties/Branchs/DedicatedElectricity/DedicatedElectricity"
import SharedGas from "./Properties/Branchs/SharedGas/SharedGas"
import DedicatedGas from "./Properties/Branchs/DedicatedGas/DedicatedGas"
import Phone from "./Properties/Branchs/Phone/Phone";
import Engineering from "./Properties/Engineering/Engineering";



const Menu = ({ compo,menuHeight,setmenuHeight,menubg,numOfOwner,setNumOfOwner }) => {
 
  const [menuButton, setMenuButton] = useState(false)
  const [menuComponent, setmenuComponent] = useState(false)
  const [menutype, setmenutype] = useState(false)
  const [landuse, setLanduse] = useState()
  
 
  const menuButtonHandler = () => {
    
     setMenuButton(!menuButton)
  }

  const move = (e) => {
   
    setmenuHeight(window.innerHeight - e.touches[0].clientY);
  };

  


useEffect(() => {
  switch (compo) {
    case "Owner":
      setmenuComponent(<Owner menuButton={menuButton} menuHandler={menuButtonHandler} menuHeight={menuHeight} setmenuHeight={setmenuHeight} numOfOwner={numOfOwner} setNumOfOwner={setNumOfOwner} />)
      break;

      case "DealType":
        setmenuComponent(<DealType  />)
        break;

        case "LandUse":
          setmenuComponent(<LandUse landuse={landuse} setLanduse={setLanduse}/>)
          break;

          case "LandType":
            
            setmenuComponent(<LandType landuse={landuse} setLanduse={setLanduse}/>)
             
            break;
            case "exchange":
            
            setmenuComponent(<ExchangePage menuButton={menuButton} menuHandler={menuButtonHandler} menuHeight={menuHeight} setmenuHeight={setmenuHeight} numOfOwner={numOfOwner} setNumOfOwner={setNumOfOwner}/>)
             
            break;

            case "Neighborhood":
            
            setmenuComponent(<Neighborhood menuButton={menuButton} menuHandler={menuButtonHandler} menuHeight={menuHeight} setmenuHeight={setmenuHeight} numOfOwner={numOfOwner} setNumOfOwner={setNumOfOwner}/>)
             
            break;
  
  

        case "VisitTime":
          setmenuComponent(<VisitTime menuButton={menuButton} menuHandler={menuButtonHandler} menuHeight={menuHeight} setmenuHeight={setmenuHeight}  />)
          break;

          case "Constructors":
          setmenuComponent(<Constructors menuButton={menuButton} menuHandler={menuButtonHandler} menuHeight={menuHeight} setmenuHeight={setmenuHeight} numOfOwner={numOfOwner} setNumOfOwner={setNumOfOwner}  />)
          break;

          case "Area":
            setmenuComponent(<Area menuButton={menuButton} menuHandler={menuButtonHandler} menuHeight={menuHeight} setmenuHeight={setmenuHeight} numOfOwner={numOfOwner} setNumOfOwner={setNumOfOwner}  />)
            break;
          case "buildingAge":
            setmenuComponent(<BuildingAge menuButton={menuButton} menuHandler={menuButtonHandler} menuHeight={menuHeight} setmenuHeight={setmenuHeight} numOfOwner={numOfOwner} setNumOfOwner={setNumOfOwner}  />)
            break;
            case "priceSale":
              setmenuComponent(<PriceSale menuButton={menuButton} menuHandler={menuButtonHandler} menuHeight={menuHeight} setmenuHeight={setmenuHeight} numOfOwner={numOfOwner} setNumOfOwner={setNumOfOwner}  />)
              break;
            case "totalPrice":
              setmenuComponent(<TotalPrice menuButton={menuButton} menuHandler={menuButtonHandler} menuHeight={menuHeight} setmenuHeight={setmenuHeight} numOfOwner={numOfOwner} setNumOfOwner={setNumOfOwner}  />)
              break;
            case "numberOfStories":
              setmenuComponent(<NumberOfStories menuButton={menuButton} menuHandler={menuButtonHandler} menuHeight={menuHeight} setmenuHeight={setmenuHeight} numOfOwner={numOfOwner} setNumOfOwner={setNumOfOwner}  />)
              break;
            case "totalUnits":
              setmenuComponent(<TotalUnits menuButton={menuButton} menuHandler={menuButtonHandler} menuHeight={menuHeight} setmenuHeight={setmenuHeight} numOfOwner={numOfOwner} setNumOfOwner={setNumOfOwner}  />)
              break;
            case "storiesUnits":
              setmenuComponent(<StoriesUnits menuButton={menuButton} menuHandler={menuButtonHandler} menuHeight={menuHeight} setmenuHeight={setmenuHeight} numOfOwner={numOfOwner} setNumOfOwner={setNumOfOwner}  />)
              break;
            case "roomNumbers":
              setmenuComponent(<RoomNumbers menuButton={menuButton} menuHandler={menuButtonHandler} menuHeight={menuHeight} setmenuHeight={setmenuHeight} numOfOwner={numOfOwner} setNumOfOwner={setNumOfOwner}  />)
              break;
            case "landDirection":
              setmenuComponent(<RoomNumbers menuButton={menuButton} menuHandler={menuButtonHandler} menuHeight={menuHeight} setmenuHeight={setmenuHeight} numOfOwner={numOfOwner} setNumOfOwner={setNumOfOwner}  />)
              break;



           
            case "urbanWater":
              setmenuComponent(<UrbanWater menuButton={menuButton} menuHandler={menuButtonHandler} menuHeight={menuHeight} setmenuHeight={setmenuHeight} numOfOwner={numOfOwner} setNumOfOwner={setNumOfOwner}  />)
              break;
            case "wellWater":
              setmenuComponent(<WellWater menuButton={menuButton} menuHandler={menuButtonHandler} menuHeight={menuHeight} setmenuHeight={setmenuHeight} numOfOwner={numOfOwner} setNumOfOwner={setNumOfOwner}  />)
              break;
            case "sharedElectricity":
              setmenuComponent(<SharedElectricity menuButton={menuButton} menuHandler={menuButtonHandler} menuHeight={menuHeight} setmenuHeight={setmenuHeight} numOfOwner={numOfOwner} setNumOfOwner={setNumOfOwner}  />)
              break;
            case "dedicatedElectricity":
              setmenuComponent(<DedicatedElectricity menuButton={menuButton} menuHandler={menuButtonHandler} menuHeight={menuHeight} setmenuHeight={setmenuHeight} numOfOwner={numOfOwner} setNumOfOwner={setNumOfOwner}  />)
              break;
            case "sharedGas":
              setmenuComponent(<SharedGas menuButton={menuButton} menuHandler={menuButtonHandler} menuHeight={menuHeight} setmenuHeight={setmenuHeight} numOfOwner={numOfOwner} setNumOfOwner={setNumOfOwner}  />)
              break;
            case "DedicatedGas":
              setmenuComponent(<DedicatedGas menuButton={menuButton} menuHandler={menuButtonHandler} menuHeight={menuHeight} setmenuHeight={setmenuHeight} numOfOwner={numOfOwner} setNumOfOwner={setNumOfOwner}  />)
              break;
           
            case "phone":
              setmenuComponent(<Phone menuButton={menuButton} menuHandler={menuButtonHandler} menuHeight={menuHeight} setmenuHeight={setmenuHeight} numOfOwner={numOfOwner} setNumOfOwner={setNumOfOwner}  />)
              break;

           
            case "engineering":
              setmenuComponent(<Engineering menuButton={menuButton} menuHandler={menuButtonHandler} menuHeight={menuHeight} setmenuHeight={setmenuHeight} numOfOwner={numOfOwner} setNumOfOwner={setNumOfOwner}  />)
              break;
           
  
    default:
      break;
  }
},[compo,menuHeight,numOfOwner,landuse])


  
  return (
    <>
    <h1>{menuHeight}</h1>
    <div className="relative min-h-[314px] max-h-[90vh] bg-white  " style={{ height: `${menuHeight}px`} } >
     <div
            className=" z-[90]  flex items-center justify-center h-[36px]    absolute top-0 bg-gray5  left-3 right-3"
            style={menubg?{backgroundColor:"#f3f5fc"}:{backgroundColor:"white"}}
            
            ontouch={menuButtonHandler}
            onTouchMove={(e) => {
              move(e);
            }}
            
          >
            {SideMenuSVG}
          </div>
      
    <div className=" h-full   ">
    {menuComponent}
    </div>
     
    </div>
    



    </>
  );
};

export default Menu;
