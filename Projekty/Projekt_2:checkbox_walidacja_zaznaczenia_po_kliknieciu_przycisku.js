const ValidationMessage = (props) => <p>{props.txt}</p>
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
    dispalyMesage = () => {
        if (this.state.isFormSubmitted) {
            if (this.state.isConfirmed) {
                return <ValidationMessage txt='Możesz obejrzeć film zaoraszamy' />
            } else {
                !this.state.isConfirmed
                return <ValidationMessage txt='Nie mozesz obejrześć filmu jeśli masz mniej niz 16 lat' />
            }
        }else{return null}
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
        // console.log(this.state.isConfirmed)
        return (
            <>
                <h1>Kup mi bilet na DeadPool</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="checkbox"
                        id="age"
                        onChange={this.handleCheckboxChange}
                        checked={this.state.isConfirmed} />
                    <label htmlFor="age">Mam co najmniej 16 lat</label>
                    <br />
                    <button>Kup bilet</button>
                    {this.dispalyMesage()}
                </form>
            </>
        )
    }
}
ReactDOM.render(<TicketShop />, document.getElementById('root'))