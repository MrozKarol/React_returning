//wpisywanie textu w input i wyświetlanie w h1

class App extends React.Component {

  state = {}

  handleInputChange(e){
    console.log(e.target.value);
  }




  render() {
    return (
      <>
      <input onChange={this.handleInputChange} type="text" />
      <button>Reset</button>
      <h1 className="title"></h1>
      </>
    )

  }

}

ReactDOM.render(<App/>, document.getElementById('root'))