import React from 'react';
import Teams from './TeamList.json';

// shows the team information on the "Club" Tab on the Dashboard
export default function Club(props) {
  const teamInfo = Teams.find(element => element.team.name === props.currTeam);
  return (
    <div className='card-container'>
      <div className='club-card'>
        <div>
          <img src={teamInfo.team.logo} alt={teamInfo.team.name} />
          <h2>{props.currTeam}</h2>
          <h5>Founded in {teamInfo.team.founded}, {teamInfo.team.country}</h5>
        </div>
      </div>
      <div className='stadium-card'>
        <div>
          <h2>Stadium</h2>
          <img src={teamInfo.venue.image} alt={teamInfo.venue.name} />
          <h2>{teamInfo.venue.name}</h2>
          <h5>{teamInfo.venue.address}, {teamInfo.venue.city}</h5>
          <h5>Surface: {teamInfo.venue.surface}</h5>

        </div>
      </div>
      {/* the ability the switch team inherited from Dashboard component  */}
        <button className='ChangeTeam' onClick={()=>props.setTeam('')}>Switch Team</button>
    </div>
  )
}
