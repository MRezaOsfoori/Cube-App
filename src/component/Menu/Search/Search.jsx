import React from "react";
import MenuItem from "../../../UI/MenuItem/MenuItem";
import { SideMenuSVG } from "../../../dummy"
import { Link } from "react-router-dom";
import { Context } from "../../../Context/context";
import { useContext } from "react";
import Backdrop from "../../../UI/Backdraw/Backdrop"

const Search = ({ menuHandler, menuButton }) => {
  const containerContext = useContext(Context);

  const toggleSearchHandler = () => {
    containerContext.close();
  };
  return (
    <>
      <div
        className={
          containerContext.Open ? " left-0  absolute top-0 w-screen w-full duration-1000" : "hidden "} onClick={toggleSearchHandler}>
        <Backdrop />
      </div>
      <div className={
          containerContext.Open ? "" : "hidden "}>
        <div className={menuButton ? " w-full  h-[214px]  flex flex-col" : " w-full  h-1/4 left-0  flex  flex-col"} style={{ backgroundColor: " #F3F5FC", position: "fixed", bottom: "0px" }}>
          <div className="flex items-center justify-center h-[36px]  " >
            {SideMenuSVG}
          </div>
          <div className="flex flex-col mx-[16px] mt-[32px] rounded-lg bg-white p-2 z-20 bg-blue  ">

            <Link to={"/Dashboard/0/DashboardLeftFilingSide"} style={{ textDecoration: "none", color: "black" }} onClick={toggleSearchHandler}>
              <MenuItem name="ثبت فایل" />
            </Link>
            <MenuItem name="جستجوی فایل" />

          </div></div>
      </div></>
  );
};

export default Search;
