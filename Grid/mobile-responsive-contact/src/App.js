import React, { Component } from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import { Animated } from "react-animated-css";

class App extends Component {
  state = {
    username: '',
    company: '',
    email: '',
    phone: '',
    message: '',

    errors: {
      username: false,
      email: false,
      pass: false,
      accept: false,
    }

  }
  messages = {
    username_incorrect: 'Nazwa musi być dłuższa niż 2 znaki i nie może zawierać spacji',
    email_incorect: 'brak @ w emailu',
    phone_incorect: 'numer musi zawierać 9 cyfr'
  }

  handleChange = (e) => {
    const name = e.target.name;
    const type = e.target.type;
    if (type === "text" || type === "number" || type === "email" || type === "textarea") {
      const value = e.target.value
      this.setState({
        [name]: value
      })
    }

  }

  handleSubmit = (e) => {
    e.preventDefault();
    const validation = this.formValidation()
    if (validation.correct) {
      this.setState({
        username: '',
        email: '',
        phone: '',

        errors: {
          username: false,
          email: false,
          phone: false,
        }
      })
    } else {
      this.setState({
        errors: {
          username: !validation.username,
          email: !validation.email,
          phone: !validation.phone,
        }
      })
    }
  }

  formValidation = () => {
    let username = false;
    let correct = false;
    let email = false
    let phone = false
    if (this.state.username.length > 2 && this.state.username.indexOf(' ') === -1) {
      username = true
    }
    if (this.state.email.indexOf('@') !== -1) {
      email = true;
    }
    if (this.state.phone.length === 9) {
      phone = true
    }
    return ({
      correct,
      email,
      username,
      phone,
    })
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
                  {this.state.errors.username && <span className="warning">{this.messages.username_incorrect}</span>}
                </p>
                <p>
                  <label htmlFor="company">Company</label>
                  <input type="text" name="company" id="company" value={this.state.company} onChange={this.handleChange} />
                </p>
                <p>
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" id="email" value={this.state.email} onChange={this.handleChange} />
                  {this.state.errors.email && <span className="warning">{this.messages.email_incorect}</span>}
                </p>
                <p>
                  <label htmlFor="phone">Phone Number</label>
                  <input type="number" name="phone" id="phone" value={this.state.phone} onChange={this.handleChange} />
                  {this.state.errors.phone && <span className="warning">{this.messages.phone_incorect}</span>}
                </p>
                <p className="full">
                  <label htmlFor="message">Message</label>
                  <textarea type="textarea" name="message" rows={5} id="message" value={this.state.message} onChange={this.handleChange}></textarea>
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
