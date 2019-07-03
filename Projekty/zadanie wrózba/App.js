// Jeden komponent
// zobacz wróżbę, losuje jedną z trzech wróżb

class Omen extends React.Component {

    state = {
     options:['1', '2', '3'],
     option:null,
     omen1: "bez pracy nie ma...",
     omen2: "czym za młodu...",
     omen3: "pokaż dup ..."
    }

    
    handleShowOmen = () => {
        const index = Math.floor(Math.random()*this.state.options.length)
        this.setState({
            option: this.state.options[index]
        });
        
    }
    showOmen = () => {
        const index = Math.floor(Math.random()*this.state.options.length)
        if( index === "1"){
            this.state.omen1
        }
    }
        
    
    render(){
        return(
            <React.Fragment  >
               <button onClick={this.handleShowOmen}>Zobacz wróżbę</button>
             {this.state.option ? <h1>{this.state.option}</h1> : null}
             {this.showOmen}
            </React.Fragment>
        )
    }
}

ReactDOM.render(<Omen />, document.getElementById('root'))