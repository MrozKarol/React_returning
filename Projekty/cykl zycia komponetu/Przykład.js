class Przykład extends React.Component {
    state = {
        status: true,
        numberUpdate: 0
    };
    componentDidMount() {
        console.log("Aplikacja zamontowana")


    }

    componentDidUpdate() {
        console.log("Aplikacja zaktualizowna")
    }
    render() {
        console.log("renderowanie aplikacji")
        return (
            <React.Fragment>
                <button
                    onClick={() => this.setState({ status: !this.state.status }, this.setState({ numberUpdate: this.state.numberUpdate + 1 }))}
                    style={this.state.status ? { color: "green" } : { color: "red" }}
                >Przełącz
                </button>
                <p>Liczba aktualizacji: {this.state.numberUpdate}</p>
                <Child status={this.state.status}/>
            </React.Fragment>
        );
    }
}

class Child extends React.Component {
    componentDidMount() {
        console.log("Child zamontowany")
    }

    componentDidUpdate() {
        console.log("Chaild zaktualizowany")
    }
    render(){
        console.log("renderowanie Child1")
        return(
            <div style={this.props.status ? { color: "green" } : { color: "red" }}>{String(this.props.status).toLocaleUpperCase()}</div>
        )
    }
}



ReactDOM.render(<Przykład />, document.getElementById("root"));
