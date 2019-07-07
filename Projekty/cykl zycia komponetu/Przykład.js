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
                <Child status={this.state.status} />
                {this.state.status ? <Child2 /> : null}
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
    render() {
        console.log("renderowanie Child1")
        return (
            <div style={this.props.status ? { color: "green" } : { color: "red" }}>{String(this.props.status).toLocaleUpperCase()}</div>
        )
    }
}

class Child2 extends React.Component {
    componentDidMount() {
        console.log("Chil2 zamontowany")
    }

    componentDidUpdate() {
        console.log("Chail2 zaktualizowany")
    }
    componentWillUnmount() {
        console.log("Komponent Child2 odmontowany")
    }
    render() {
        return (
            <div>Komponent Child2 zamonowany</div>
        )
    }
}
ReactDOM.render(<Przykład />, document.getElementById("root"));
