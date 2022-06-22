import { Box } from '@mui/system';
// import {useState, useEffect} from 'react';
// import axios from 'axios';
import teamList from './TeamList.json';

export default function AllTeams(props) {
  //***for fetching Teams Data fron the API
  // const options = {
  //   method: 'GET',
  //   url: 'https://api-football-beta.p.rapidapi.com/teams',
  //   params: {league: '39', season: '2021'},
  //   headers: {
  //     'X-RapidAPI-Key': '5473db0d60msh3267219b34229f4p147815jsna12728464b94',
  //     'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com'
  //   }
  // };
  
  // useEffect(()=> {
    // const fetchData = async () => {
    //   const result = await axios.request(options)
    //   console.log(result.data.response);
    //   SetTeamList(result.data.response);
    // };
    // fetchData();
  //   console.log(TeamList);
  // },[])
// ***

  return (
    <div>
      <Box sx={{pt:2}}>
        <h1>Select Your Team!</h1>
      </Box>
      
      <div className='teams-container'>
        {teamList.map((team,ind) => {
          return(
              <div className='team-card' key={ind} onClick={()=>props.setUserTeam(team.team.name)}>
                <img src={team.team.logo} alt={team.team.name}/>
                <p>{team.team.name}</p>
              </div>
              )
            }
            )}
      </div>

    </div>
  )
}


