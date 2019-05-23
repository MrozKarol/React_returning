class ShoopingList extends React.Component {

  state = {
    items1: 'pomidory',
    items2: 'sok',
    items3: 'kawka'
  }


  render() {
    return (
      <div>
        <h1>Lista zakupow</h1>
        <ul>
          <li>{this.state.items1}</li>
          <li>{this.state.items2}</li>
          <li>{this.state.items3}</li>
        </ul>

      </div>
    )
  }


}

ReactDOM.render(<ShoopingList />, document.getElementById('root'))