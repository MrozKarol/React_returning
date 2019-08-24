import React, {Component} from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import { Animated } from "react-animated-css";

class App extends Component {
  state = { 
    username: '',
    company:'',
    email: '',
    phone: '',
    message: '',
   }

handleChange =(e)=>{
  const name = e.target.name;
  const type = e.target.type;
  if(type ==="text" || type ==="number" || type ==="email" || type==="textarea"){
    const value = e.target.value
    this.setState({
      [name]:value
    })
  }

}  

handleSubmit = (e) =>{
  e.preventDefault()
}
  
  render() { 
    return ( 
      <div className="container">
      <h1 className="brand"><span>Web Desing</span></h1>
      <div animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true} animationInDuration={2000}>
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
                <label htmlFor="user">Name</label>
                <input type="text" name="username" id="user" value={this.state.username} onChange={this.handleChange} />
              </p>
              <p>
                <label htmlFor="company">Company</label>
                <input type="text" name="company" id="company" value={this.state.company} onChange={this.handleChange} />
              </p>
              <p>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" value={this.state.email} onChange={this.handleChange} />
              </p>
              <p>
                <label htmlFor="phone">Phone Number</label>
                <input type="number" name="phone" id="phone" value={this.state.phone} onChange={this.handleChange} />
              </p>
              <p className="full">
                <label htmlFor="message">Message</label>
                <textarea type="textarea" name="message" rows={5}  id="message" value={this.state.message} onChange={this.handleChange}></textarea>
              </p>
              <p className="full">
                <button>Submit</button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
     );
  }
} 
export default App;
