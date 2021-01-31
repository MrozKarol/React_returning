const ValidationMessage = (props) => <p>{props.txt}</p>;

// const PositiveMessage = () => <p>Możesz obejrzeć film zapraszamy</p>;
// const NegativeMessage = () => <p>ożesz obejrzeć film zapraszamy/p>;

const dispalyMesage = (isConfirmed, isFormSubmited) => {
  if (isFormSubmited) {
    if (isConfirmed) {
      return <ValidationMessage txt="możesz obejrzeć film zapraszamy" />;
    } else if (!isConfirmed) {
      return (
        <ValidationMessage txt="nie możesz obejrzeć folmu nie masz 16 lat" />
      );
    }
  }
};

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
    const { isConfirmed, isFormSubmited } = this.state;
    return (
      <>
        <h1>Kup mi bilet na DeadPool</h1>
        <form onSubmit={this.handleFormSubmit}>
          <input
            type="checkbox"
            id="age"
            onChange={this.handleCheckboxChange}
            checked={isConfirmed}
          />
          <label htmlFor="age">Mam co najmniej 16 lat</label>
          <br />
          <button>Kup bilet</button>
        </form>
        {dispalyMesage(isConfirmed, isFormSubmited)}
      </>
    );
  }
}

ReactDOM.render(<CheckboxAgeConfirmation />, document.getElementById("root"));
