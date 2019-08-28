import React, {Component} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About'
import News from './components/News'

import './App.css';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <Router>
        <Route exact path='/' component={Home}></Route>
        <Route  path='/about' component={About}></Route>
        <Route path='/news' component={News}></Route>
      </Router>
     );
  }
}
 
export default App;