import React from 'react'

const MenuItem = ({name,borderC}) => {
  return (
   <>
   <div className='flex flex-col px-2 '>
    <div>
    <button className="flex w-full  justify-center  items-center flex-row-reverse  h-[57px]  rounded-lg p-2 "   >
          
          <div className="h-[24px] w-[24px] flex items-center justify-center">
            <svg
              width="8"
              height="13"
              viewBox="0 0 8 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.64599 12.8422L1.36499 7.5612C1.08199 7.2782 0.925995 6.9012 0.925995 6.5002C0.925995 6.0992 1.08199 5.7232 1.36499 5.4392L6.64599 0.158203L7.35299 0.865203L2.07199 6.1462C1.97799 6.2412 1.92599 6.3662 1.92599 6.5002C1.92599 6.6342 1.97799 6.7592 2.07199 6.8542L7.35299 12.1352L6.64599 12.8422Z"
                fill="#C2C6CE"
              />
            </svg>
          </div>
          <div className="flex flex-1 items-center text-[16px] leading-[24.8px]  ">{name} </div>
         
        </button>
    </div>
    <div className='h-[1px]'>  <hr  className=' m-0 w-[99%] mx-auto '  style={{color:"#ccd0dc",height:'1px',backgroundColor:"#ccd0dc"}}/> </div>
   </div>
   
   </>
  )
}

export default MenuItem