import React, { Component } from 'react';
import './App.css';
import UsersList from './UsersList'
import ButtonFetchUsers from './ButtonFetchUsers'

class App extends Component {
  state = {}
  render() {
    return (
      <div>
        <ButtonFetchUsers />
        <UsersList />
      </div>
    );
  }
}

export default App;
