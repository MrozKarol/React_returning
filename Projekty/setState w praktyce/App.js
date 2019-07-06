class Counter extends React.Component {
    state = {
        number1: 0,
        number2: 0,
        number3:0
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
        // console.log(this.state.number2 + " w metodzie handleClick2");
    };

    handleClick3 =()=>{
        this.setState((state)=>({
            number3: this.state.number3 + 1
        })),
        this.setState((state)=>({
            number3: this.state.number3 + 1
        })),
        this.setState((state)=>{
           
            return{
                number3: this.state.number3 + 1
            }
            
        }),

        console.log(this.state.number3 + " w metodzie handleClick3")
    }

    render() {
        // console.log(this.state.number2 + "w render handleClick2");
        // console.log(this.state.number3 + "w render handleClick3");
        return (
            <div className="app">
                <button onClick={this.handleClick1}>Podaj o 1</button>
                <h2>{this.state.number1}</h2>
                <button onClick={this.handleClick2}>Podaj o 3</button>
                <h2>{this.state.number2}</h2>
                <button onClick={this.handleClick3}>Dodaj o 3</button>
                <h2>{this.state.number3}</h2>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById("root"));
