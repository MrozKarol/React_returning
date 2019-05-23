//Przycisk po kliknieciu dodawana jest ltera do tekstu "cyfra"
//Nowy komponent
//losowanie liczby
//wyswietlanie nazwy przycisku z obiektu props, ze zmiennej bezposrednio lub z obiektu statw


class App extends React.Component{

  state = {
    text: ''
  }

  handleClick = () => {
    
    const number = Math.floor(Math.random() * 10)
    this.setState({
      text: this.state.text + number
    })
  }

  render(){
    const btnName = "stwórz liczbe"
    return(
      <>
      <button onClick={this.handleClick} >{btnName}</button>
      <PanelResult text={this.state.text}/>
      </>
    )
  }
}

const PanelResult = (props) => {
  return(
    <h1>{props.text}</h1>
  )
}



ReactDOM.render(<App btnTitle='dodaj cyfre'/>, document.getElementById('root'))

