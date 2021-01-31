const ValidationMessage = (props) => <p>{props.txt}</p>;

// const PositiveMessage = () => <p>Możesz obejrzeć film zapraszamy</p>;
// const NegativeMessage = () => <p>ożesz obejrzeć film zapraszamy/p>;

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
        return <ValidationMessage txt="możesz obejrzeć film zapraszamy" />;
      } else if (!this.state.isConfirmed) {
        return (
          <ValidationMessage txt="nie możesz obejrzeć folmu nie masz 16 lat" />
        );
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
          <br />
          <button>Kup bilet</button>
        </form>
        {this.dispalyMesage()}
      </>
    );
  }
}

ReactDOM.render(<CheckboxAgeConfirmation />, document.getElementById("root"));
