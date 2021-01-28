const PositiveMessage = () => <p>Możesz obejrzeć film zapraszamy</p>;

const NegativeMessage = () => <p>Nie mozesz obejrześć filmu</p>;

class CheckboxAgeConfirmation extends React.Component {
  state = {
    isConfirmed: false,
    isFormSubmited: false,
  };

  handleCheckboxChange = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed,
      isFormSubmited: false,
    });
  };

  dispalyMesage = () => {
    if (this.state.isFormSubmited) {
      if (this.state.isConfirmed) {
        return <PositiveMessage />;
      } else if (!this.state.isConfirmed) {
        return <NegativeMessage />;
      }
    }
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    // console.log("click")
    if (!this.state.isFormSubmited) {
      this.setState({
        isFormSubmited: true,
      });
    }
  };
  render() {
    // console.log(this.state.isConfirmed);
    return (
      <>
        <h1>Kup mi bilet na DeadPool</h1>
        <form onSubmit={this.handleFormSubmit}>
          <input
            type="checkbox"
            id="age"
            onChange={this.handleCheckboxChange}
            checked={this.state.isConfirmed}
          />
          <label htmlFor="age">Mam co najmniej 16 lat</label>
          {this.dispalyMesage()}
          <br />
          <button>Kup bilet</button>
        </form>
      </>
    );
  }
}

ReactDOM.render(<CheckboxAgeConfirmation />, document.getElementById("root"));
