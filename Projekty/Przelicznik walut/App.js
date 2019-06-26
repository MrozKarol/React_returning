const Dollars = () =>(
    <div>Wartość w dolarach:</div>
)

const Euros = () => (
    <div>Wartość w euro:</div>
)

class ExchangeCounter extends React.Component {
    state = { 
        amount: "",
        ratioDollar: 3.6,
        rarioEuro: 4.2
     }

    handleChange = (e) =>{
        this.setState({
            amount: e.target.value
        })
    } 
    render() { 
        const {amount, rarioEuro, ratioDollar} = this.state
        return ( 
            <div className="app">
                <label >Wpisz kwotę:
                    <input type="number" value={this.state.amount} onChange={this.handleChange}/>
                </label>
                <Dollars cash={amount} ratio ={ratioDollar}/>
                <Euros cash={amount} ratio ={rarioEuro}/>
            </div>
         )
    }
}
 
ReactDOM.render(<ExchangeCounter/>, document.getElementById('root'))