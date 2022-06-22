import React, { Component } from 'react'
import Sidebar from './Sidebar';
import LeagueTable from './LeagueTable';
import Club from './Club';
import Stats from './Stats';

export default class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      CurrentTeam : props.team,
      CurrentPage : 'League',
    }
    this.switchPageHandler = this.switchPageHandler.bind(this);
  }

  switchPageHandler(pageName){
    this.setState({
      CurrentPage: pageName
    })
  };

  renderSwitch(showPage) {
    switch(showPage) {
      case 'League':
        return (<LeagueTable currTeam = {this.state.CurrentTeam}/>);
      case 'Club':
        return (<Club currTeam = {this.state.CurrentTeam}/>);
      case 'Stats':
        return (<Stats currTeam = {this.state.CurrentTeam}/>);
      default:
        return (<LeagueTable/>);
    }
  }

  
  
  render() {
    return (
      <div className='dashboard-container'>
          <Sidebar currPage={this.state.CurrentPage} switchPageHandler={this.switchPageHandler}/>
          {this.renderSwitch(this.state.CurrentPage)}
          {/* <LeagueTable/> */}
      </div>
    )
  }
}
