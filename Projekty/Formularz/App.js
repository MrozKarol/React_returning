class Form extends React.Component {

    state ={
        city:"Gdańsk",

    }


    

    render(){
        return(
            <div>
                <label>
                    Podaj misato:
                    <input value={this.state.city} onChange={this.handleCityChange} type="text"/>
                </label>
            </div>
        )
}
}
ReactDOM.render(<Form /> , document.getElementById('root'))