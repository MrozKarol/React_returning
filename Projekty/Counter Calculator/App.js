class Counter extends React.Component {
  state = {
    result: 1,
    ratio: 2
  };

  handleMultiplication = () => {
    this.setState({
      result: this.state.result * this.state.ratio
    });
  };
  render() {
    console.log("renderowanie Child1");
    return (
      <div>
        <p>
          Kalkulator mnozy przez dwa, jeśli suma jest mniejsza niz 1000.Po
          przekroczeniu 1000 Kalkulator mnozy przez 0.5 az ościagnie sumę
          mniejszą niż jeden. Wtedy ponownie zaczyna mnożyć przez dwa.
        </p>
        <button onClick={this.handleMultiplication}>{`Pomnóż przez ${
          this.state.ratio
        }`}</button>
        <h1>Wynik:{this.state.result}</h1>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("root"));
