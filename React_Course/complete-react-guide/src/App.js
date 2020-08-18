import React, { Component } from 'react';
import './App.css';
import Person from './Person/Peron'

class App extends Component {

  state = {
    persons: [
      { name: 'Janek', age: 30 },
      { name: 'Marek', age: 20 },
      { name: 'Malina', age: 33 },
    ]
  }

  switchNameHandler = () => {
    // console.log('work')
    this.setState({
      persons: [
        { name: 'Janusz', age: 30 },
        { name: 'Marek', age: 20 },
        { name: 'Malina', age: 22 },
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Hi</h1>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}  />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: React</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
        <button onClick={this.switchNameHandler}>Swith Name</button>

      </div>
    );
  }
}

export default App;

