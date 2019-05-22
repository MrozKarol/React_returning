//komponent funkcyjny, bezstanowy

const App = () => {
  return (
    <h1>Pierwszy komponenet</h1> 
  )
}




//komponenet klasowy, stanowy

class App2 extends React.Component {
  state = {
    number: 0,
  }
  render() {
    return (
      <section>
        <h2>KOmponent klaswoy {this.state.number}</h2>
      </section>
    )
  }
}


ReactDOM.render(<App2/>, document.getElementById('root'))