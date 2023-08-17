import React, { useContext } from "react";
import Nav from "../components/Nav/Nav";
import Header from "../components/Header/Header";
import List from "../components/List/List";


const Panel = () => {
 
  return (
    <>
          
      <div className="  absolute top-0 px-[16px]  w-full  " style={{ backgroundColor: "#F3F5FC" }} >
        <Nav />
        <Header />
        <List />

      </div>
    </>
  );
};

export default Panel;
