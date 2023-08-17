import React from 'react'

const MalekItem = ({num}) => {
  return (
    <>
    <div
          className="flex flex-col mx-[16px] px-[16px] mt-[32px]  mb-[24px] rounded-xl"
          style={{ backgroundColor: "#F3F5FC" }}
        >
          <div className=" flex flex-col  my-[16px] text-[14px] leading-[25px]">
            <p> مالک {num}</p>
            <input
              className="w-full flex text-right bg-white h-[48px] mt-[8px] px-[16px] text-[12px]"
              placeholder="نام مالک"
            />
            <input
              className="w-full flex text-right bg-white h-[48px] mt-[8px] px-[16px] text-[12px]"
              placeholder="شماره مالک"
            />
          </div>
          <div className=" flex flex-col  my-[16px] text-[14px] leading-[25px]">
            <p> دیدگاه خود را وارد کنید</p>
            <input
              className="w-full flex text-right bg-white h-[48px] mt-[8px] px-[16px] text-[12px]"
              placeholder=" عنوان دیدگاه"
            />
            <input
              style={{ verticalAlign: "start" }}
              className="w-full  text-right inline-block text-top  h-[120px] mt-[8px] px-[16px] text-[12px]  "
              placeholder="متن دیدگاه "
            />
          </div>
        </div>
    </>
  )
}

export default MalekItem