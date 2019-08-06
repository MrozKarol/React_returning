import React from 'react';
import './App.css'
import { BrowserRouter, Link } from 'react-router-dom'

function App() {
  return (
    // BrowserRouter może posiadać tlyko jedno dziecko 
    <BrowserRouter>
      <div>
        <header>
          <nav>
            <ul>
              <li><Link to="/">Start</Link></li>
              <li><Link to="/news">aktualności</Link></li>
              <li><Link to="/concat">kontakt</Link></li>
            </ul>
          </nav>
        </header>
        <section>
          Siemanko :)
      </section>
      </div>
    </BrowserRouter>

  );
}

export default App;
