import React, { Component } from 'react';
import './App.css';
import SwitchButton from './SwitchButton'
 
class App extends Component {
  state = { 
    time:0,
    active:false,
   }
  render() { 
    return ( 
      <div>
        <p>{this.state.time}</p>
        <SwitchButton/>
      </div>
     );
  }
}
 
export default App;