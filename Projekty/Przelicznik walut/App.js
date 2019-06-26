const Dollars = () =>(
    <div>Wartość w dolarach:</div>
)

const Euros = () => (
    <div>Wartość w euro:</div>
)

class ExchangeCounter extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div className="app">
                <label >
                    <input type="number"/>
                </label>
                <Dollars/>
                <Euros/>
            </div>
         )
    }
}
 
ReactDOM.render(<ExchangeCounter/>, document.getElementById('root'))