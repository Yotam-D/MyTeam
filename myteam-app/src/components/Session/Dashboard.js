import React, { Component } from 'react'
import Sidebar from './Sidebar';
import LeagueTable from './LeagueTable';
import Club from './Club';
import Stats from './Stats';

export default class Dashboard extends Component {
  constructor(props){
    // Inherits the team selected and user info from the UserSession Component.
    super(props);
    // Initiate CurrentPage value sets the default screen on the dashboard (Club/League/Stats)
    this.state = {
      CurrentPage : 'Club',
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
        return (<LeagueTable currTeam = {this.props.team}/>);
      case 'Club':
        return (<Club currTeam = {this.props.team} setTeam = {this.props.setUserTeam}/>);
      case 'Stats':
        return (<Stats currTeam = {this.props.team}/>);
      default:
        return (<LeagueTable/>);
    }
  }
   
  render() {
    return (
      <div className='dashboard-container'>
          <Sidebar currPage={this.state.CurrentPage} switchPageHandler={this.switchPageHandler} team={this.props.team} name = {this.props.name}/>
          {this.renderSwitch(this.state.CurrentPage)}
      </div>
    )
  }
}
