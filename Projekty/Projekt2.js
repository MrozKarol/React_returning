// Projekt_2:checkbox_walidacja_zaznaczenia_po_kliknieciu_przycisku.js

const ValidationMessage = (props) => {
    const {txt} = props
    return (
        <p>{txt}</p>
    )
} 

const dispalyMesage = (isConfirmed, isFormSubmitted) => {
    if (isFormSubmitted) {
        if (isConfirmed) {
            return <ValidationMessage txt='Możesz obejrzeć film zaoraszamy' />
        } else {
            
            return <ValidationMessage txt='Nie mozesz obejrześć filmu jeśli masz mniej niz 16 lat' />
        }
    }else{return null}
}
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
    render() {
        const {isConfirmed, isFormSubmitted} = this.state
        return (
            <>
                <h1>Kup mi bilet na DeadPool</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="checkbox"
                        id="age"
                        onChange={this.handleCheckboxChange}
                        checked={isConfirmed} />
                    <label htmlFor="age">Mam co najmniej 16 lat</label>
                    <br />
                    <button>Kup bilet</button>
                    {dispalyMesage(isConfirmed, isFormSubmitted)}
                </form>
            </>
        )
    }
}
ReactDOM.render(<TicketShop />, document.getElementById('root'))