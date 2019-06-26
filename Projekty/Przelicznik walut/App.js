const Dollars = (props) =>(
    <div>Wartość w dolarach:{(props.cash / props.ratio).toFixed(2)}</div>
)

const Euros = (props) => (
    <div>Wartość w euro:{(props.cash / props.ratio).toFixed(2)}</div>
)

class ExchangeCounter extends React.Component {
    state = { 
        amount: "",
        ratioDollar: 3.6,
        ratioEuro: 4.2
     }

    handleChange = (e) =>{
        this.setState({
            amount: e.target.value
        })
    } 
    render() { 
        const {amount, ratioEuro, ratioDollar} = this.state
        return ( 
            <div className="app">
                <label >Wpisz kwotę:
                    <input type="number" value={this.state.amount} onChange={this.handleChange}/>
                </label>
                <Dollars cash={amount} ratio ={ratioDollar}/>
                <Euros cash={amount} ratio ={ratioEuro}/>
            </div>
         )
    }
}
 
ReactDOM.render(<ExchangeCounter/>, document.getElementById('root'))