import React,  {Component} from 'react';
import './App.css';

import SliderOne from './components/SliderOne'

class App extends Component {
  state = { 

   }
  render() { 
    return ( 
      <div className="App">
        <div className="slider-one"><SliderOne/></div>
      </div>
     );
  }
}
 
export default App;