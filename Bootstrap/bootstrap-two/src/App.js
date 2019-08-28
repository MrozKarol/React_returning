import React, {Component} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About'
import News from './components/News'
import Navbar from './components/NavbarCustom'

import './App.css';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <Router>
        
        <Navbar/>
        <Route exact path='/' component={Home}></Route>
        <Route  path='/about' component={About}></Route>
        <Route path='/news' component={News}></Route>
      
        
      </Router>
      </div>
      
     );
  }
}
 
export default App;