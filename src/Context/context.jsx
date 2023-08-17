import React, { useState } from "react";

export const Context = React.createContext({
  
  ScreenType:"",
  Open: false,
  close: () => {},
  ScreenWidthChange: () => {},
});
const ContextProvider = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScreenType, setIsScreenType] = useState("");

  const closeHandler = () => {
    setIsOpen(!isOpen);
    
  };
 
  const ScreenWidthChangeHandler = (windowWidth) => {
    setIsScreenType(windowWidth);
  };


  return (
    <Context.Provider
      value={{
        Open: isOpen,
        close: closeHandler,
        ScreenWidthChange: ScreenWidthChangeHandler,
        ScreenType:isScreenType
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
