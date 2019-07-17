import React, { Component } from 'react';
import './App.css';
import UsersList from './UsersList'
import ButtonFetchUsers from './ButtonFetchUsers'

const API = "http://randomuser.me/api/?results=5"

class App extends Component {
  state = {
    users:null
  }
  handleDataFetch = () =>{
    console.log("click")
  }
  render() {
    const users = this.state.users
    return (
      <div>
        <ButtonFetchUsers click={this.handleDataFetch} />
        {users ? <UsersList users={users} /> : users}
      </div>
    );
  }
}

export default App;
