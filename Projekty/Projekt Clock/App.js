class Clock extends React.Component {

  state = {
    time: {
      hours: 12,
      minutes: 15,
      seconds: 30
    }
  }
  render() {
    const { hours, minutes, seconds } = this.state.time
    return (
      <div>
        {hours} : {minutes} : {seconds}
      </div>
    );
  }
}

ReactDOM.render(<Clock />, document.getElementById("root"));
