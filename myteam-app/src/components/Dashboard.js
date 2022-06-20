import React, { Component } from 'react'
import Sidebar from './Sidebar';
import jwt_decode from 'jwt-decode';

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Sidebar/>
      </div>
    )
  }
}
