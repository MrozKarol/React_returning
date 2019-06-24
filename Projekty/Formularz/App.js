class Form extends React.Component {

    state ={
        city:"Gdańsk",
        text:"",

    }

    handleCityChange = (e) =>{
        this.setState({
            city: e.target.value
        })
    }

    handleTextChange = (e) =>{
        this.setState({
            text: e.target.value
        })
    }


    render(){
        return(
            <div>
                <label>
                    Podaj misato:
                    <input value={this.state.city} onChange={this.handleCityChange} type="text"/>
                </label>
                <br/>
                <label>Napisz coś o tym mieście
                    <textarea value={this.state.text} onChange={this.handleTextChange} ></textarea>
                </label>
            </div>
        )
}
}
ReactDOM.render(<Form /> , document.getElementById('root'))