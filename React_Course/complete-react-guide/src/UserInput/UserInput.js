import React, { Component } from "react";
import UserOutput from "../UserOutput/UserOutput"

class UserInput extends Component {
  state = {
    persons: [
        { name: "Karol", id: 1 },
        { name: "Adrianna", id: 2 },
      ],
  };

  nameChangedHandler = (event) =>{
      console.log(UserOutput)
    this.setState({
        persons:[
            {name: event.target.value},
            {name: event.target.value},

        ]
        
    })
}
  render() {
   
    return (
      <div className="UserName">
          <h3>Component UserInputs</h3>
        <UserOutput age={this.state.persons[0].age} changed={this.nameChangedHandler} name={this.state.persons[0].name}/>
    
        <UserOutput age={this.state.persons[0].age} changed={this.nameChangedHandler} name={this.state.persons[1].name} />
      </div>
    );
  }
}

export default UserInput;
