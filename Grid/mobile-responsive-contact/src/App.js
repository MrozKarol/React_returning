import React, {Component} from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import { Animated } from "react-animated-css";

class App extends Component {
  state = {  }


handleSubmit = (e) =>{
  e.preventDefault()
}
  
  render() { 
    return ( 
      <div className="container">
      <h1 className="brand"><span>Web Desing</span></h1>
      <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true} animationInDuration={2000}>
        <div className="wrapper">
          <div className="company-info">
            <h3>Web Desing</h3>
            <ul>
              <li><i className="fa fa-road"></i> Gdańsk 80-200</li>
              <li><i className="fa fa-phone"></i>600-601-602</li>
              <li><i className="fa fa-envelope"></i>Justyna@gmail.com</li>
            </ul>
          </div>
          <div className="contact">
            <h3>Email Us</h3>
            <form onSubmit={this.handleSubmit} noValidate>
              <p>
                <label htmlFor="">Name</label>
                <input type="text" name="name" id="" />
              </p>
              <p>
                <label htmlFor="">Company</label>
                <input type="text" name="company" id="" />
              </p>
              <p>
                <label htmlFor="">Email</label>
                <input type="email" name="email" id="" />
              </p>
              <p>
                <label htmlFor="">Phone Number</label>
                <input type="number" name="phone" id="" />
              </p>
              <p className="full">
                <label htmlFor="">Mesage</label>
                <textarea type="text" name="mesage" rows="5" id=""></textarea>
              </p>
              <p className="full">
                <button>Submit</button>
              </p>
            </form>
          </div>
        </div>
      </Animated>
    </div>
     );
  }
} 
export default App;
