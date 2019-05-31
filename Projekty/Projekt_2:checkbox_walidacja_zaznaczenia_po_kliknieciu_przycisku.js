const PositiveMessage = () => <p>Możesz obejrzeć film zaoraszamy</p>;

const NegativeMessage = () => <p>Nie mozesz obejrześć filmu</p>;
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
                return <PositiveMessage />
            } else {
                !this.state.isConfirmed
                return <NegativeMessage />
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