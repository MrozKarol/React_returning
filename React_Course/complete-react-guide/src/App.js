import React,{Component} from 'react';
import './App.css';
import Person from './Person/Peron'

class App extends Component {
  render() { 
    return ( 
      <div className="App">
        <h1>Hi</h1>
        <Person name='Ada' age='20'/>
        <Person name='Stefan' age='24'>My Hobbies: React</Person>
        <Person name='Janek' age='20'/>
  
      </div>
     );
  }
}
 
export default App;

