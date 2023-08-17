import React from 'react'

const InputItem = ({placeholder,exchange}) => {
 
  
  return (
   <>
   <input
              className="w-full flex text-right bg-white h-[48px] mt-[8px] px-[16px] text-[12px] col-span-1 dis"
              placeholder={placeholder}
              disabled={exchange? true : false}
              
            />
   </>
  )
}

export default InputItem