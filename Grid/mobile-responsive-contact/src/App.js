import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1 className="brand">Web Desing</h1>
      <div className="wrapper">
        <div className="company-info">
        <h3>Web Desing</h3>
        <ul>
          <li>Gdańsk 80-200</li>
          <li>600-601-602</li>
          <li>test@gmail.com</li>
        </ul>
        </div>
        <dic className="contact">
          <h3>Email Us</h3>
          <form action="">
            <p>
              <label htmlFor="">Name</label>
              <input type="text" name="name" id=""/>
            </p>
            <p>
              <label htmlFor="">Company</label>
              <input type="text" name="company" id=""/>
            </p>
            <p>
              <label htmlFor="">Name</label>
              <input type="text" name="name" id=""/>
            </p>
            <p>
              <label htmlFor="">Email</label>
              <input type="email" name="email" id=""/>
            </p>
            <p>
              <label htmlFor="">Phone Number</label>
              <input type="number" name="phone" id=""/>
            </p>
            <p>
              <label htmlFor="">Mesage</label>
              <textarea type="text" name="mesage" rows="5" id=""></textarea>
            </p>
            <p>
              <button>Submit</button>
            </p>
          </form>

        </dic>
      </div>
     
    </div>
  );
}

export default App;
