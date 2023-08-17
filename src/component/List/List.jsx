import React, { useContext } from 'react'
import ListItem from '../../UI/ListItem/ListItem'
import { PanelTitleList } from '../../dummy'
import { Context } from "../../Context/context";
import Frame from '../../UI/Frame';




const List = () => {
  const containerContext = useContext(Context)
  const toggleSearchHandler = () => {
    containerContext.close()

  }


  return (
    <div className='grid grid-cols-2  gap-[4px] my-[24px] '>
      {PanelTitleList.map((item, index) => {
        return (
          <div onClick={toggleSearchHandler} className='col-span-1 flex w-full justify-center'>
            <Frame title={item} id={index} />
          </div>

        )
      })}

    </div>
  )
}

export default List