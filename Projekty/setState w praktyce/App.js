class Counter extends React.Component {
    state = {
        number1: 0,
        number2: 0
    };

    handleClick1 = () => {
        this.setState({
            number1: this.state.number1 + 1
        });
        // console.log(this.state.number1 + "w metodzie handleClick1")
    };

    handleClick2 = () => {
        this.setState({
            number2: this.state.number2 + 1
        });
        this.setState({
            number2: this.state.number2 + 1
        });
        this.setState({
            number2: this.state.number2 + 1
        });
        console.log(this.state.number2 + " w metodzie handleClick2");
    };

    render() {
        console.log(this.state.number2 + "w render");
        return (
            <div className="app">
                <button onClick={this.handleClick1}>Podaj o 1</button>
                <h2>{this.state.number1}</h2>
                <button onClick={this.handleClick2}>Podaj o 3</button>
                <h2>{this.state.number2}</h2>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById("root"));
