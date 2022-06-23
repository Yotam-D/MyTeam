import { useState } from 'react';
import React from 'react';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import sideElements from './SidebarElements';
import Teams from './TeamList.json';


export default function Sidebar(props) {
  const teamInfo = Teams.find(element => element.team.name === props.team);
  console.log(teamInfo)
  const [checked, setChecked] = useState(props.currPage);

  const handleSideClick = (clickedTitle) => {
    setChecked(clickedTitle)
    props.switchPageHandler(clickedTitle)
  }



  return (
    <div className='sidebar'>
          <div className='user-sideInfo'>
            <div>
              <Avatar
                sx={{ bgcolor: '#9298be' }}
                alt="Remy Sharp"
                src='/'>
                {props.name[0]}
              </Avatar>
            </div>
              <p>{props.name}'s Dashboard</p>
              <div className='avatar-club'>
                <Avatar
                  sx={{ bgcolor: '#262b49' }}
                  alt="Remy Sharp"
                  src={teamInfo.team.logo}>
                  B
                </Avatar>
              </div>
          </div>
          <Divider variant="middle" />
          
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
