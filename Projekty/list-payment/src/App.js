import React, { Component } from 'react';
import './App.css';
import UserList from './UserList';

class App extends Component {
  state = {
    users: [
      {
        id: 1,
        firstName: "John",
        lastName: "Smith",
        department: "IT",
        salary: 3000,
        currency: "usd"
      },
      {
        id: 2,
        firstName: "Jane",
        lastName: "Doe",
        department: "IT",
        salary: 3000.5,
        currency: "usd"
      },
      {
        id: 3,
        firstName: "Bob",
        lastName: "Colman",
        department: "Sales",
        salary: 9000,
        currency: "usd"
      },
      {
        id: 4,
        firstName: "Barbara",
        lastName: "O'Conor",
        department: "Sales",
        salary: 4000,
        currency: "usd"
      },
      {
        id: 5,
        firstName: "Adam",
        lastName: "Murphy",
        department: "Administration",
        salary: 2000,
        currency: "usd"
      },

    ]


  }
  render() {
    return (
      <div className="App">
      <UserList users={this.state.users}></UserList>
      </div>
    );
  }
}

export default App;