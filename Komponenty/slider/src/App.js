import React,  {Component} from 'react';
import './App.css';

import SliderOne from './components/SliderOne'
import SliderTwo from './components/SliderTwo'
import CaruselImages from "./components/CaruselImages"

class App extends Component {
  state = { 

   }
  render() { 
    return ( 
      <div className="App">
        <div className="slider-one"><SliderOne/></div>
        <div className="sliter-two"><SliderTwo/></div>
        <div className="carusel-images"><CaruselImages/></div>
      </div>
     );
  }
}
 
export default App;