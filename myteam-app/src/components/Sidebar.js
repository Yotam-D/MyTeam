import React from 'react'
import Elements from './SidebarElements';


export default function Sidebar() {
    console.log(Elements);
  return (
    <div className='sidebar'>
        <ul className = 'sideList'>
            {Elements.map((item,index)=> {
                return(
                        <li className = 'sideItem' key = {index} onClick ={()=> {console.log('clicked'+item.title)}}>
                            <div>{item.icon}</div>
                            <div>{item.title}</div>
                        </li>
                )})
            }
        </ul>
    </div>
  )
}
