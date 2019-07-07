class App extends React.Component {

    constructor(props){
        super(props)
        this.state={}
        console.log("Wywołać metode constructor")
    }

    // metoda wycofana od wersji 17
    //metoda która wywołuje sie sama przez react
    componentWillMount(){
        console.log("Wywołaś componentWillMount")
    }

    render(){
        console.log("Wywołana metoda render")
        return(
            <React.Fragment  >
               <p>montowanie komponentu</p>
            </React.Fragment>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))