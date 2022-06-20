import React, { Component } from 'react'
import Sidebar from './Sidebar';
import jwt_decode from 'jwt-decode';
import LeagueTable from './LeagueTable';

export default class Dashboard extends Component {
  constructor(props){
    super(props);
    this.State = {
      CurrentTeam : '',
    }
  }
  
  render() {
    return (
      <div className='dashboard-container'>
          <Sidebar/>
          <LeagueTable/>
      </div>
    )
  }
}
