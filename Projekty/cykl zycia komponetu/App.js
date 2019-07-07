class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            number:0
        }
        console.log("Wywołać metode constructor")
    }

    // metoda wycofana od wersji 17
    //metoda która wywołuje sie sama przez react
    componentWillMount() {
        console.log("Wywołaś componentWillMount")
    }

    //metoda króra wywołuje sie jako ostatnia po metodzie render
    componentDidMount() {
        console.log("Wywołaś componentDidMount")
        this.setState({
            number: 1
        })
    }

    componentDidUpdate() {
        console.log("Wywołaś componentDidUpdate")
    }

    render() {
        console.log("Wywołana metoda render")
        return (
            <React.Fragment  >
                <p>montowanie komponentu</p>
                <Child/>
            </React.Fragment>
        )
    }
}

class Child extends React.Component {
    componentDidMount(){
        console.log(`
        ---------------------------------------------
        Wywołać componentDidMOunt w komponecie Child
        ---------------------------------------------`)
        // this.setState({
        //     number: 1
        // })
    }
    render(){
        console.log("Wywołana metoda render w Child")
        return(
            <p>dziecko</p>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))