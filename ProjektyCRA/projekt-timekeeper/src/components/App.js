import React, { Component } from 'react';
import './App.css';
import SwitchButton from './SwitchButton'
import ResetButton from './ResetButton'

class App extends Component {
  state = {
    time: 0,
    active: false,
  }


  handleClick = () => {
    if (this.state.active) {
      clearInterval(this.idInterval)
    } else {
      this.idInterval = setInterval(() => this.addSecond(), 1000)
    }
    this.setState({
      active: !this.state.active
    })
  }
  addSecond = () => {
    this.setState({
      time: this.state.time + 1
    })
  }

  handleResetButoon = () => {
    const temp = this.state.time;

    this.setState({
      time: this.state.time - temp,

    })
  }

  render() {
    return (
      <div>
        <p>{this.state.time}</p>
        <SwitchButton onClick={this.handleClick} active={this.state.active} />
        <ResetButton onClick={this.handleResetButoon} active={this.state.active} />
      </div>
    );
  }
}

export default App;