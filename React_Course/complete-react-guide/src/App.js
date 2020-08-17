import React,{Component} from 'react';
import './App.css';
import Person from './Person/Peron'

class App extends Component {
  render() { 
    return ( 
      <div className="App">
        <h1>Hi</h1>
        <Person/>
        <Person/>
        <Person/>
      </div>
     );
  }
}
 
export default App;

