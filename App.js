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
          <ItemList name = {this.state.items1} example= {2+2} />
          <ItemList name = {this.state.items2} />
          <ItemList name = {this.state.items3} />
     
        </ul>

      </div>
    )
  }
}

const ItemList = (props) => {
  return(
    <li>{props.name},- {props.example}</li>
  )
}

ReactDOM.render(<ShoopingList />, document.getElementById('root'))