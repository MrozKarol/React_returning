import React from 'react';
import './App.css'
import { BrowserRouter, Link, Route } from 'react-router-dom'

const Home = () => <h1>Strona startowa</h1>
const News = () => <h1>Aktualności</h1>
const Contact = () => <h1>Kontakt do nas</h1>


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
              <li><Link to="/contact">kontakt</Link></li>
            </ul>
          </nav>
        </header>
        <section>
         <Route path="/" component={Home}/>
         <Route path="/news" component={News}/>
         <Route path="/contact" component={Contact}/>
        </section>
      </div>
    </BrowserRouter>

  );
}

export default App;
