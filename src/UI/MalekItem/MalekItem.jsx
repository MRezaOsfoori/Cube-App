import React,{useState,useEffect} from 'react'
import {useForm} from "react-hook-form"

const MalekItem = ({num }) => {
  
const {register,handleSubmit}=useForm()

let owner={}

 const onSubmit=(d)=>{

  owner=JSON.stringify(d)
  console.log(owner)
 }

  return (

    <>
    
    <div
          className="flex flex-col mx-[16px] px-[16px] mt-[32px]  mb-[24px] rounded-xl"
          style={{ backgroundColor: "#F3F5FC" }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className=" flex flex-col  my-[16px] text-[14px] leading-[25px]">
            <p> مالک {num}</p>
            <input
              className="w-full flex text-right bg-white h-[48px] mt-[8px] px-[16px] text-[12px]"
              placeholder="نام مالک"
              {...register("ownername")}
              
            />
            <input
              className="w-full flex text-right bg-white h-[48px] mt-[8px] px-[16px] text-[12px]"
              placeholder="شماره مالک"
              {...register("phonenumber")}
              
              
            />
          </div>
          <div className=" flex flex-col  my-[16px] text-[14px] leading-[25px]">
            <p> دیدگاه خود را وارد کنید</p>
            <input
              className="w-full flex text-right bg-white h-[48px] mt-[8px] px-[16px] text-[12px]"
              placeholder=" عنوان دیدگاه"
              {...register("descriptiontitle")}
              
              
            />
            <input
              style={{ verticalAlign: "start" }}
              className="w-full  text-right inline-block text-top  h-[120px] mt-[8px] px-[16px] text-[12px]  "
              placeholder="متن دیدگاه "
              {...register("description")}
              
            />
            <input type='submit' value='submit' />
          </div>
        </div>
    </>
  )
}

export default MalekItem