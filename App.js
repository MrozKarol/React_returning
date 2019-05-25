//wpisywanie textu w input i wyświetlanie w h1

class App extends React.Component {

  state = {
    value : ""
  }

  handleInputChange = (e) => {

    
    console.log(e.target.value);
    this.setState({value: e.target.value})
    
  }

  handleRestClick = () =>{
    return(
      this.setState({value: ""})
    )
  }

  render() {
    return (
      <>
      <input value={this.state.value} placeholder="wpisz coś..." onChange={this.handleInputChange} type="text" />
      <button onClick={this.handleRestClick}>Reset</button>
      <h1 className="title">{this.state.value.toLocaleUpperCase()}</h1>
      </>
    )

  }

}

ReactDOM.render(<App/>, document.getElementById('root'))