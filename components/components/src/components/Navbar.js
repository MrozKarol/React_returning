import React, { Component } from 'react';
import './Navbar.css'



class App extends Component {
  state = {

  }
  render() {
    return (
    <div>
      <nav>
          <div className="hamburger">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
          </div>
          <ul className="nav-links">
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Projects</a></li>
          </ul>
      </nav>
    </div>
    );
  }
}

export default App;