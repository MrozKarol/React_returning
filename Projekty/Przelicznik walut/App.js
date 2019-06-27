// Przelicznik v 0.1.0

const Cash = props => (
  <div>
    {props.title}
    {props.cash <= 0 ? "" : (props.cash / props.ratio).toFixed(2)}
  </div>
);

class ExchangeCounter extends React.Component {
  state = {
    amount: "",
    product: "electricity"
  };

  currencies = [
    {
      id: 1,
      name: "dollar",
      ratio: 3.6,
      title: "Wartość w dolarach:"
    },
    {
      id: 2,
      name: "euro",
      ratio: 4.1,
      title: "Wartość w deuro:"
    },
    {
      id: 3,
      name: "pound",
      ratio: 5.1,
      title: "Wartość w funtach:"
    }
  ];

  handleChange = e => {
    this.setState({
      amount: e.target.value
    });
  };

  handleSelect = e => {
    this.setState({
      product: e.target.value
    });
  };

  insertSuffix = (select) => {
    if (select === "electricity") {
      return <em>kWh</em>;
    } else if (select === "gas") {
      return <em>litrów</em>;
    } else if (select === "apple") {
      return <em>kilogramów</em>;
    } else {
      return null
    }
  }

  render() {
    const { amount, product } = this.state;

    const calculators = this.currencies.map(currency => (
      <Cash
        key={currency.id}
        ratio={currency.ratio}
        title={currency.title}
        cash={amount}
      />
    ));

    return (
      <div className="app">
        <label>
          Wybierz produkt:
          <select value={product} onChange={this.handleSelect}>
            <option value="electricity">prąd</option>
            <option value="gas">bęzyna</option>
            <option value="apple">jabłka</option>
          </select>
        </label>
        <br />
        <label>
          Wpisz kwotę:
          <input
            type="number"
            value={this.state.amount}
            onChange={this.handleChange}
          />
          {this.insertSuffix(this.state.product)}
        </label>
        {calculators}
      </div>
    );
  }
}

ReactDOM.render(<ExchangeCounter />, document.getElementById("root"));
