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

  handleBuy = () => {
    this.setState({
      availableProducts: this.state.availableProducts - this.state.shoppingCart,
      shoppingCart: (this.state.shoppingCart = 0),
    });
  };

  render() {
    return (<
            div >
      <
            button disabled={this.state.shoppingCart ? false : true}
        onClick={this.handleRemoveFromCard} > - < /button>{" "} <
            span style={
            this.state.shoppingCart === 0 ? { opacity: 0.3 } : { opacity: 1 }
          } > {" "} {this.state.shoppingCart} {" "} < /span>{" "} <
            button disabled={
              this.state.shoppingCart === this.state.availableProducts ?
                true : false
            }
            onClick={this.handleAddFromCard} > {" "} + < /button>{" "}  {
              this.state.shoppingCart > 0 ? (< button disabled={this.state.shoppingCart ? false : true}
                onClick={this.handleBuy} > Kup { " "} < /button>
                ) : null
            } { " "} <
            /div>
        );
    }
}
ReactDOM.render( < App /> , document.getElementById("root"));