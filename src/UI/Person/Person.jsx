import React from 'react'


const Person = ({personImg,name,number}) => {
  return (
   <div className='w-full h-full  flex   items-center justify-center '>
    <div className='w-[56px] h-[56px]  flex items-center  '> <img className='' src={personImg} alt="personImg" /> </div>
    <div className=' flex flex-col justify-center items-center mx-[8px] w-[74px] h-[47px]  '>
        <div className=' w-full  text-white text-[14px] font-normal  leading-[24.8px]'>{name}</div>
        <div className=' w-full  text-white text-[12px] font-normal leading-[21.7px] '>{number}</div>
    </div>
   </div>
  )
}

export default Person