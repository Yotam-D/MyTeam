import { useState } from 'react';
import React from 'react'
import sideElements from './SidebarElements';


export default function Sidebar() {
  const [checked, setChecked] = useState("League");

  const handleSideClick = (clickedTitle) => {
    setChecked(clickedTitle)
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
