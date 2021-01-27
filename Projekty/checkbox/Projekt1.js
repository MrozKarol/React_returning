const PositiveMessage = () => <p>Możesz obejrzeć film zaoraszamy</p>;

const NegativeMessage = () => <p>Nie mozesz obejrześć filmu</p>;

class CheckboxAgeConfirmation extends React.Component {
  state = {
    isConfirmed: false,
  };

  handleCheckboxChange = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed,
    });
  };

  dispalyMesage = () => {
    if (this.state.isConfirmed) {
      return <PositiveMessage />;
    } else if (!this.state.isConfirmed) {
      return <NegativeMessage />;
    }
  };
  render() {
    console.log(this.state.isConfirmed);
    return (
      <>
        <h1>Kup mi bilet na DeadPool</h1>
        <input
          type="checkbox"
          id="age"
          onChange={this.handleCheckboxChange}
          checked={this.state.isConfirmed}
        />
        <label htmlFor="age">Mam co najmniej 16 lat</label>
        {this.dispalyMesage()}
      </>
    );
  }
}

ReactDOM.render(<CheckboxAgeConfirmation />, document.getElementById("root"));
