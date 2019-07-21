import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    username: '',
    email: '',
    pass: '',
    accept: false
  }

  handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name
    const checked = e.target.checked
    this.setState({
      //w nawiasie odwołaie do zmiennej
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.loge("działa")
  }


  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit} noValidate>
          <label htmlFor="user">Twoje imię:
            <input type="text" id="user" name="username" value={this.state.username} onChange={this.handleChange} />
          </label>
          <label htmlFor="email">Twoje adres email:
            <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} />
          </label>
          <label htmlFor="password">Twoje hasło:
            <input type="password" id="user" name="pass" value={this.state.pass} onChange={this.handleChange} />
          </label>
          <label htmlFor="accept">
            <input type="checkbox" id="accept" name="accept" checked={this.state.accept}/> Wyrażam zgodę 
          </label>
          <button>Zapisz się</button>
        </form>
      </div>);
  }
}

export default App;