import React, { useEffect, useState, useCallback } from "react";

import MalekItem from "../../../UI/MalekItem/MalekItem";
import "../Owner/Owner.css";
import SaveBtn from "../../../UI/SaveBtn.jsx/SaveBtn";

const OwnerLand = ({ dh, setdh, nmalek, setnmalek }) => {
  
  const arraymalek = [];
  for (let i = 1; i <= nmalek; i++) {
    arraymalek.push(i);
  }

 

  const handleSubmit = (event) => {
    event.preventDefault();
    setdh(850 * nmalek);
    
  };

  return (
    <>
      <div className="w-full  flex flex-col pt-[60px] h-full overflow-aut p-2 " >
        <div className=" w-full relative " style={{ height: "100%" }}>
          <div
            className="flex flex-col mx-[16px] px-[16px] mt-[32px] rounded-xl  "
            style={{ backgroundColor: "#F3F5FC" }}
          >
            <div className=" flex flex-col  my-[16px] text-[14px] leading-[25px] ">
              <p> تعداد سازنده های ملک را وارد کنید:</p>

              <form onSubmit={handleSubmit}>
                
                  <input
                    className="w-full flex text-right bg-white h-[48px] mt-[8px] px-[16px] text-[12px]"
                    placeholder="1"
                    type="text"
                    value={nmalek}
                    onChange={(e) => setnmalek(e.target.value)}
                  />
                
              </form>
            </div>
          </div>

          {arraymalek.map((item) => {
            return <MalekItem num={item} />;
          })}

              <div className="h-full">
          <SaveBtn/>
         </div>
        </div>
      </div>
    </>
  );
};

export default OwnerLand;
