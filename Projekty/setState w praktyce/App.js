
class Counter extends React.Component {
    state = {
        number1: 0,
    };

    handleClick1 = () => {
        this.setState({
            number1: this.state.number1 + 1
        })
        console.log(this.state.number1)
    }
    render() {
        console.log(this.state.number1)
        return (
            <div className="app">
                <button onClick={this.handleClick1}>Podaj o 1</button>
                <h2>{this.state.number1}</h2>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById("root"));
