import React,  {Component} from 'react';
import './App.css';

import SliderOne from './components/SliderOne'
import SliderTwo from './components/SliderTwo'

class App extends Component {
  state = { 

   }
  render() { 
    return ( 
      <div className="App">
        <div className="slider-one"><SliderOne/></div>
        <div className="sliter-two"><SliderTwo></SliderTwo></div>
      </div>
     );
  }
}
 
export default App;