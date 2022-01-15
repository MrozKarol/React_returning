import React, { Component } from 'react';
import './App.css';
import UserList from './UserList';

class App extends Component {
  state = {
      firstName: '',
      lastName : '',
      department : '',
      salary : null,
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


  handleChange = (e)=> {
    console.log(e.target.type)
    console.log(e.target.name)
    const name = e.target.name
    const value = e.target.value
    this.setState({
      [name] : value,
      
    })
    console.log(this.state)
  }

  handleSubmit = (e) =>{
    e.preventDefault()
    const users = [...this.state.users]
    const name  = this.state.firstName
    const lastName = this.state.lastName
    const department = this.state.department
    const salary = this.state.salary
    const id = users.length+1
    console.log(id)
    users.push({id:id,firstName: name, lastName: lastName,department:department,salary:salary})
   this.setState({
     users}
   )

  }
  render() {
    return (
      <div className="App">
      <UserList users={this.state.users}></UserList>
      <form onSubmit={this.handleSubmit}>
          <label htmlFor="user">Name:
            <input type="text" id='firstName' name="firstName" value={this.state.firstName} onChange={this.handleChange} />
          </label>
          <label htmlFor="user">Last Name:
            <input type="text" id='lastName'  name="lastName" value={this.state.lastName} onChange={this.handleChange} />
          </label>
          <label htmlFor="user">Departament:
            <input type="text" id='department'  name="department" value={this.state.department} onChange={this.handleChange} />
          </label>
          <label htmlFor="user">Salary:
            <input type="number" id='salary'  name="salary" value={this.state.salary} onChange={this.handleChange} />
          </label>
          
          <button >Dodaj</button>
        </form>
      </div>
    );
  }
}

export default App;