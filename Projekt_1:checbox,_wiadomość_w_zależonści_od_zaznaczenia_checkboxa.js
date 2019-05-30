const PositiveMessage = () => <p>Możesz obejrzeć film zaoraszamy</p>;

const NegativeMessage = () => <p>Nie mozesz obejrześć filmu</p>;



  

class CheckboxAgeConfirmation extends React.Component {

    state = {
        isSonfirmed: false,
    }

    
    
    handleCheckboxChange = () => {
        this.setState({
            isSonfirmed: !this.state.isSonfirmed
        })
    }

    dispalyMesage = () => {
        if(this.state.isSonfirmed){
            return <PositiveMessage/>
        }else if (!this.state.isSonfirmed){
            return <NegativeMessage/>
        }
        
        
    }
    render(){
        console.log(this.state.isSonfirmed)
        return ( 
            <>
                <h1>Kup mi bilet na DeadPool</h1>
                <input type="checkbox"  id="age" onChange={this.handleCheckboxChange} checked= {this.state.isSonfirmed} />
                <label htmlFor="age">Mam co najmniej 16 lat</label>
                {this.dispalyMesage()}
            </>
        )
    }





}

ReactDOM.render(<CheckboxAgeConfirmation/>, document.getElementById('root'))