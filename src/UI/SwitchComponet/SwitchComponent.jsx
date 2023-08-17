import React from 'react'

const SwitchComponent = ({exchange}) => {
  return (
    <>
    <div className="flex justify-center items-center ">
              <svg
             style={exchange?{backgroundColor:"white"}:{backgroundColor:"#CDDAFF"}}
                
                className=" rounded-xl "
                width="36"
                height="25"
                viewBox="0 0 36 25"
                fill={exchange ? "none" : "none"}
                xmlns="http://www.w3.org/2000/svg"
              >
                {exchange ? (
                  <circle cx="12" cy="12.5" r="8" fill="#858D9D" />
                ) : (
                  <circle
                    className="z-20"
                    cx="24"
                    cy="12.5"
                    r="8"
                    fill="#2F5FE3"
                  />
                )}
                <path
                  d="M1 12.5C1 6.42487 5.92487 1.5 12 1.5H24C30.0751 1.5 35 6.42487 35 12.5C35 18.5751 30.0751 23.5 24 23.5H12C5.92487 23.5 1 18.5751 1 12.5Z"
                  stroke={exchange ? "#858D9D" : "#2F5FE3"}
                  stroke-width="2"
                />
              </svg>
            </div>
    </>
  )
}

export default SwitchComponent