import { useState } from 'react';
import React from 'react'
import sideElements from './SidebarElements';


export default function Sidebar(props) {
  const [checked, setChecked] = useState(props.currPage);

  const handleSideClick = (clickedTitle) => {
    setChecked(clickedTitle)
    props.switchPageHandler(clickedTitle)
  }

  return (
    <div className='sidebar'>
        <ul className = 'sideList'>
            {sideElements.map((item,index)=> {
                return(
                        <li className = {item.title === checked ? 'checkedItem' : 'uncheckedItem'} key = {index} onClick ={()=> handleSideClick(item.title)}>
                            <div className='sideIcon'>{item.icon}</div>
                            <div className='sideTitle'>{item.title}</div>
                        </li>
                )})
            }
        </ul>
    </div>
  )
}
