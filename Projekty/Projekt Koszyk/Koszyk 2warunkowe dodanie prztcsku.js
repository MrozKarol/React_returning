// Watunkowe dodanie przcisku i obsługa stanu magazynu 
// wszarzenie liczny 0 -CSS
// destrukteryzacja

class App extends React.Component {


    state = {
        availableProducts: 7,
        shoppingCard: 0
    }

    handleRamoveFromCard = () => (
        this.setState({ shoppingCard: this.state.shoppingCard - 1 })

    )
    handleAddToCard = () => {
        this.setState({ shoppingCard: this.state.shoppingCard + 1 })
    }

    handleBuy = () => {
        this.setState({
            availableProducts: this.state.availableProducts - this.state.shoppingCard,
            shoppingCard: this.state.shoppingCard = 0
        })
    }

    render() {
        const {shoppingCard, availableProducts} = this.state
       const grayStyle = shoppingCard === 0 ? {opacity : 0.3 } : {opacity: 1}
        return (
            <>
                <button disabled={shoppingCard ? false : true} onClick={this.handleRamoveFromCard} >-1 </button>
                <span style={grayStyle}> {shoppingCard} </span>
                <button disabled={shoppingCard === availableProducts ? true : false} onClick={this.handleAddToCard}>+1</button>
                {shoppingCard > 0 && <button onClick={this.handleBuy}>Kup</button>}
            </>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))