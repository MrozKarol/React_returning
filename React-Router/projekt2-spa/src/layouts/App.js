import React, { Component } from 'react';
import '../styles/App.css';
import { BrowserRouter as Router } from 'react-router-dom'

class App extends Component {
  state = {}
  render() {
    return (
      <Router>
        <div className="App">
          Działa
        </div>
      </Router>

    );
  }
}

export default App;
