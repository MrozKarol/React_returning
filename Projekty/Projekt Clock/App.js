class Clock extends React.Component {

  state = {
    time: this.getTime()
  }
  getTime(){
    const currentTime = new Date()
    // console.log(currentTime)
    return({
      // getHours() metoda wbudowana w Date, pobiera informacje z instacji Date
      hours: currentTime.getHours(),
      minutes: currentTime.getMinutes(),
      seconds: currentTime.getSeconds()
    })
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
