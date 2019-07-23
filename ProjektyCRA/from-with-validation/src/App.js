import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    username: '',
    email: '',
    pass: '',
    accept: false,

    errors: {
      username: false,
      email: false,
      pass: false,
      accept: false,
    }
  }

  messages = {
    username_incorrect: 'Nazwa musi być dłuższa niż 10 zanków i nie może zawierać spacji',
    email_incorrect: 'brak @ w emailu',
    password_incorrect: 'hasło musi mieć 8 znaków',
    accept_incorrect: 'niepotwiedzona zgoda'
  }

  handleChange = (e) => {

    const name = e.target.name;
    const type = e.target.type;

    if (type === "text" || type === "password" || type === "email") {
      const value = e.target.value;
      this.setState({
        //w nawiasie odwołaie do zmiennej
        [name]: value
      })
    } else if (type === "checkbox") {
      const checked = e.target.checked
      this.setState({

        [name]: checked
      })

    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log("działa")
  }


  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit} noValidate>
          <label htmlFor="user">Twoje imię:
            <input type="text" id="user" name="username" value={this.state.username} onChange={this.handleChange} />
            {this.state.errors.username && <span>{this.messages.username_incorrect}</span>}
          </label>
          <label htmlFor="email">Twoje adres email:
            <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} />
            {this.state.errors.email && <span>{this.messages.email_incorrect}</span>}
          </label>
          <label htmlFor="password">Twoje hasło:
            <input type="password" id="user" name="pass" value={this.state.pass} onChange={this.handleChange} />
            {this.state.errors.pass && <span>{this.messages.password_incorrect}</span>}
          </label>
          <label htmlFor="accept">
            <input type="checkbox" id="accept" name="accept" checked={this.state.accept} onChange={this.handleChange} /> Wyrażam zgodę
            {this.state.errors.accept && <span>{this.messages.accept_incorrect}</span>}

          </label>
          <button>Zapisz się</button>
        </form>
      </div>);
  }
}

export default App;