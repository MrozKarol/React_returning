// Projekt koszyk struktura i działanie aplikacji
class App extends React.Component {
  state = {
    availableProducts: 6,
    shoppingCart: 0,
  };
  handleRemoveFromCard = () =>
    this.setState({ shoppingCart: this.state.shoppingCart - 1 });
  handleAddFromCard = () =>
    this.setState({ shoppingCart: this.state.shoppingCart + 1 });
  render() {
    return (
      <div>
        <button
          disabled={this.state.shoppingCart ? false : true}
          onClick={this.handleRemoveFromCard}
        >
          -
        </button>
        <span> {this.state.shoppingCart} </span>
        <button
          disabled={
            this.state.shoppingCart === this.state.availableProducts
              ? true
              : false
          }
          onClick={this.handleAddFromCard}
        >
          {" "}
          +
        </button>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
