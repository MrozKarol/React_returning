import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Peron";
import UserInput from "./UserInput/UserInput"

class App extends Component {
  state = {
    persons: [
      { name: "Janek", age: 30 },
      { name: "Marek", age: 20 },
      { name: "Malina", age: 33 },
    ],
  };

  switchNameHandler = (newName) => {
    // console.log('work')
    this.setState({
      persons: [
        { name: newName, age: 30 },
        { name: "Marek", age: 20 },
        { name: "Malina", age: 22 },
      ],
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Stefan", age: 30 },
        { name: event.target.value, age: 20 },
        { name: "Malina", age: 26 },
      ],
    });
  };
  render() {
    return (
      <div className="App">
        <h1>Hi</h1>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Patryk")}
          changed={this.nameChangedHandler}
        >My Hobbies: React
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
        <button onClick={this.switchNameHandler.bind(this, "Paulina")}>
          Swith Name
        </button>

        <div className="exercse">
          <UserInput/>
        </div>
      </div>
    );
  }
}

export default App;
