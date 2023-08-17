import React,{useState} from 'react'
import SwitchComponent from '../SwitchComponet/SwitchComponent'
import InputItem from '../InputItem/InputItem'


const VisitItem = ({num}) => {
    const [exchange, setExchange] = useState(false);

    const exchangeHandler = () => {
      setExchange(!exchange);
    };
  

  return (
    <>
    <div
          className="grid grid-cols-2  rounded-xl"
          style={{ backgroundColor: "#F3F5FC" }}
        >
           <div className='col-span-1 flex flex-row-reverse items-center justify-end gap-[8px] '>
           <div>{num}</div>
          <div onClick={exchangeHandler} className='flex b'> <SwitchComponent exchange={exchange} /></div>
                       
           </div>
           <div className='col-span-1'>
          
          <InputItem exchange={exchange} placeholder={"10تا 12 صبح "}/>
          
           </div>
           
        </div>
    </>
  )
}

export default VisitItem