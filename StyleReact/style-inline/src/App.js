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
    const btn_off = {
      border: '4px solid yellow',
      padding: '10px 20px',
      fontFamily: 'arial',
      fontSize: 30,
      dispaly: 'block',
      margin: '20px auto',
      backgroundColor: 'white'
    }

    const btn_on ={
      border: '4px solid yellow',
      padding: '10px 20px',
      fontFamily: 'arial',
      fontSize: 30,
      dispaly: 'block',
      margin: '20px auto',
      backgroundColor: 'red',
      color: 'white'
    }
    return ( 
      <div>
        <button style={this.state.active? btn_on : btn_off} onClick={this.handleClick}>{this.state.active ? 'Wyłacz' : 'Włacz'}</button>
      </div>
    );
  }
}
 
export default App;
