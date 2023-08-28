import React, { useState } from "react";

const RadioBtn = ({ name }) => {
  const [radioBtnColor, setradioBtnColor] = useState(false);
  return (
    <>
      <div className="col-span-1 flex flex-row p-[10px]">
        <div onTouchStart={() => setradioBtnColor(!radioBtnColor)}>
          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.5 10C18.5 14.4183 14.9183 18 10.5 18C6.08172 18 2.5 14.4183 2.5 10C2.5 5.58172 6.08172 2 10.5 2C14.9183 2 18.5 5.58172 18.5 10ZM20.5 10C20.5 15.5228 16.0228 20 10.5 20C4.97715 20 0.5 15.5228 0.5 10C0.5 4.47715 4.97715 0 10.5 0C16.0228 0 20.5 4.47715 20.5 10ZM10.5 15C13.2614 15 15.5 12.7614 15.5 10C15.5 7.23858 13.2614 5 10.5 5C7.73858 5 5.5 7.23858 5.5 10C5.5 12.7614 7.73858 15 10.5 15Z"
              fill={radioBtnColor ?  "#2F5FE3": "#858D9D"}
            />
          </svg>
        </div>
        <div className="mr-1">{name} </div>
      </div>
    </>
  );
};

export default RadioBtn;
