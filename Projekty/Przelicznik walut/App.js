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