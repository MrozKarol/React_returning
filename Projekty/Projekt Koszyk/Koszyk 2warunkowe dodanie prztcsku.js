// Watunkowe dodanie przcisku i obsługa stanu magazynu 
// wszarzenie liczny 0 -CSS
// destrukteryzacja

class App extends React.Component {
    
    
    state = {
        availableProducts: 7,
        shoppingCard: 0
    }

    handleRamoveFromCard = () =>(
        this.setState({shoppingCard: this.state.shoppingCard -1})
    
    )
    handleAddToCard = () =>{
        this.setState({shoppingCard: this.state.shoppingCard +1})
    }

    handleBuy = () => {
        this.setState({
            availableProducts: this.state.availableProducts - this.state.shoppingCard,
            shoppingCard: this.state.shoppingCard = 0
        })
    }

    render (){
        return (
            <>
            <button disabled={this.state.shoppingCard ? false : true} onClick={this.handleRamoveFromCard} >-1 </button>
            <span> {this.state.shoppingCard} </span>
            <button disabled={this.state.shoppingCard === this.state.availableProducts ? true : false} onClick={this.handleAddToCard}>+1</button>
            {this.state.shoppingCard > 0 && <button onClick={this.handleBuy}>Kup</button>}
            </>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))