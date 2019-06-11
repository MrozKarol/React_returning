const Item = (props) => <li>{`owoc ${props.content}`}</li>

class ListItem extends React.Component {
    state ={
        items: ["jabłko", "śliwka", "gruszka"]
    }
   render(){
       return(
           <ul>
              {this.state.items.map(item => <Item content={item} />)}
           </ul> 
       )
   }
}

ReactDOM.render(<ListItem /> , document.getElementById('root'))