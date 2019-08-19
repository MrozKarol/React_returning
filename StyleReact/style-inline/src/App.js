import React, {Component} from 'react';
import './App.css';

class App extends Component {
  state = { 
    active: false
   }

   handleClick = () =>{
     this.setState({
       active: !this.state.active
     })
   }

  render() { 
    return ( 
      <div>
        <button onClick={this.handleClick}>{this.state.active ? 'Wyłacz' : 'Włacz'}</button>
      </div>
    );
  }
}
 
export default App;
