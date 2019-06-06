// Projekt_2:checkbox_walidacja_zaznaczenia_po_kliknieciu_przycisku.jsconst PositiveMessage = () => <p>Możesz obejrzeć film zaoraszamy</p>;

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

const ValidationMessage = (props) => {
    const {txt} = props
    return (
        <p>{txt}</p>
    )
} 

const OrderForm =(props) => (
    <form onSubmit={props.handleSubmit}>
    <input type="checkbox"
        id="age"
        onChange={props.handleCheckboxChange}
        checked={props.isConfirmed} />
    <label htmlFor="age">Mam co najmniej 16 lat</label>
    <br />
    <button>Kup bilet</button>
</form>
)
class TicketShop extends React.Component {

    state = {
        isConfirmed: false,
        isFormSubmitted: false
    }
    handleCheckboxChange = () => {
        this.setState({
            isConfirmed: !this.state.isConfirmed,
            isFormSubmitted: false
        })
    }
    

    handleSubmit = (e) =>
    {
        e.preventDefault();
        if(!this.state.isFormSubmitted)
        {
            this.setState({
                isFormSubmitted: true
             })
        }
    }
   dispalyMesage = (isConfirmed, isFormSubmitted) => {
        if (isFormSubmitted) {
            if (isConfirmed) {
                return <ValidationMessage txt='Możesz obejrzeć film zaoraszamy' />
            } else {
                
                return <ValidationMessage txt='Nie mozesz obejrześć filmu jeśli masz mniej niz 16 lat' />
            }
        }else{return null}
    }
    render() {
        const {isConfirmed, isFormSubmitted} = this.state
        return (
            <>
                <h1>Kup mi bilet na DeadPool</h1>
                    <OrderForm 
                    onChange ={this.handleCheckboxChange}
                    onSubmit ={this.handleSubmit}
                    checked ={isConfirmed}
                     />
                    {this.dispalyMesage()}
            </>
        )
    }
}
ReactDOM.render(<TicketShop />, document.getElementById('root'))