import React from 'react'
import Person from '../../UI/Person/Person'
import person from "../../assets/Rectangle 27 (2).png"
import rec71 from "../../assets/Rectangle 71.png"
import rec72 from "../../assets/Rectangle 72.png"

function Header() {
  return (
    <div className="w-full   flex justify-start rounded-lg   relative h-[139px] z-0 bg-red-200 " style={{backgroundColor: " #2F5FE3"}}>
      <div className='  absolute z-10   top-0 left-[57px] rounded-lg'><img src={rec71}  alt="" /></div>
      <div className=' absolute z-10 left-0'><img  className="rounded-2xl" src={rec72} alt="" /></div> 
      
      <div className='w-[138px] h-[56px]  m-[28px] z-10'>
      <Person  name="حمید حمیدی"  number="09123456789" personImg={person}/>
      </div>
    </div>
  )
}

export default Header