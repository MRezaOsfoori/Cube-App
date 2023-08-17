import React, { useContext, useState } from "react";
import Header from "../../component/Header/Header";
import List from "../../component/List/List";
import Menu from "../../component/Menu/Menu";
import Backdrop from "../../UI/Backdraw/Backdrop";

import { Context } from "../../Context/context";


const Page = () => {
  const containerContext = useContext(Context);



  const toggleSearchHandler = () => {
    containerContext.close();
  };
  console.log(containerContext.Open)



  return (
    <>
      <div
        className={
          containerContext.Open ? " absolute top-0 w-screen z-30 duration-1000" : "hidden "} onClick={toggleSearchHandler}>
        <Backdrop />
      </div>

      <div
        className={containerContext.Open ? " fixed bottom-[0px]  w-full  z-30 " : "hidden"}>
        <Menu />
      </div>

      <div className="  b absolute top-0 px-[16px]  w-full  " style={{ backgroundColor: "#F3F5FC" }} >


        <Header />

        <List />

      </div>
    </>
  );
};

export default Page;
