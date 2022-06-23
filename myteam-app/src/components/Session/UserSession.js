import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { AppContext } from '../../App';
import AllTeams from './AllTeams';
import Dashboard from './Dashboard';

export default function UserSession() {
    const [userID,setUserID] = useState('')
    const [email,setEmail] = useState('')
    const [name,setName] = useState('')
    const [team,setTeam] = useState('')
    const navigate = useNavigate();
    const {accessToken} = useContext(AppContext);
  
    useEffect(()=>{
        try {
            const decode = jwt_decode(accessToken.accessToken);
            setUserID(decode.userID);
            setEmail(decode.email);
            setName(decode.name)
            setTeam(decode.team ? decode.team : '');
            const expire = decode.exp;
            if(expire * 1000 < new Date().getTime())
                {
                navigate('/login')
            }
        } catch (error) {
            console.log(error);
            navigate('/login')
        }
      },[accessToken.accessToken, navigate])
  return (
    <>
        {
            team === '' ? 
            <AllTeams setUserTeam = {setTeam} /> : <Dashboard team ={team} setUserTeam = {setTeam} name = {name} />
        }
    </>

  )
}


