import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { AppContext } from '../App';
import AllTeams from './AllTeams';
import Dashboard from './Dashboard';

export default function UserSession() {
    const [userID,setUserID] = useState('')
    const [email,setEmail] = useState('')
    const [team,setTeam] = useState('')
    const navigate = useNavigate();
    const {accessToken} = useContext(AppContext);
  
    useEffect(()=>{
        try {
            const decode = jwt_decode(accessToken.accessToken);
            console.log(decode);
            setUserID(decode.userID);
            setEmail(decode.email);
            setTeam(decode.team ? decode.team : 'none');
            const expire = decode.exp;
            console.log(expire*1000)
            if(expire * 1000 < new Date().getTime())
                {
                navigate('/login')
            }
        } catch (error) {
            console.log(error);
            navigate('/login')
        }
      },[])
  return (
    <>
        <div>UserSession Team: {team}, ID: {userID}, Email: {email}</div>
        {
            team =='none' ? 
                <AllTeams setUserTeam = {setTeam}/> : <Dashboard team ={team} />
        }
    </>

  )
}


