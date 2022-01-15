import React, { Component } from 'react';
import './App.css';

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
          <table>
        
          {this.state.users.map(user=> <tr key={user.id}><td>{user.id}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.department}</td>
            <td>{user.salary} {user.currency}</td>
          </tr>)} 

          </table>
        </div>
    );
  }
}
 
export default App;