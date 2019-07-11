class App extends React.Component {
  state={
    active: true
  }
  handleClick = ()=>{
    this.setState(state=> ({
      active: !state.active
    }))
  }
  render(){
    return(
      <div>
        <SwietchButton active={this.state.active} onClick={this.handleClick}/>
        {this.state.active ? <Clock/> : null }
      </div>
    )
  }
}
const SwietchButton = (props)=>(
  <button style={props.active ? { color: "red" } : { color: "green" }} 
          onClick={props.onClick} >{props.active ? "Wyłacz": "Włącz"}
  </button>
)

class Clock extends React.Component {

  state = {
    time: this.getTime()
  }
  getTime() {
    const currentTime = new Date()
    // console.log(currentTime)
    return ({
      // getHours() metoda wbudowana w Date, pobiera informacje z instacji Date
      hours: currentTime.getHours(),
      minutes: currentTime.getMinutes(),
      seconds: currentTime.getSeconds()
    })
  }
  setTime = () => {
    const time = this.getTime()
    this.setState({
      time: time
    })
  }
  componentDidMount() {
    setInterval(this.setTime, 1000)
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

ReactDOM.render(<App />, document.getElementById("root"));
