//komponent funkcyjny, bezstanowy

const Header = () => {
  return (
    <h1>Pierwszy komponenet</h1> 
  )
}




//komponenet klasowy, stanowy

class Blog extends React.Component {
  state = {
    number: 0,
  }
  render() {
    return (
      <section>
        <h2>Blog numet:  {this.state.number}</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero veritatis veniam eligendi dicta explicabo, minima reprehenderit provident atque aspernatur.</p>
      </section>
    )
  }
}

const App = () =>{
  return(
    <div>
      <Header/>
      <Blog/>
    </div>
  )
}


ReactDOM.render(<App/>, document.getElementById('root'))