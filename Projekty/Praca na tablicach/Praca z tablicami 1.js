class ListItem extends React.Component {
    state ={
        items: ["jabłko", "śliwka", "gruszka"]
    }
   render(){
       return(
           <ul>
              {this.state.items.map((item)=> <li key={item}> {`owoc ${item}`}</li>)}
           </ul> 
       )
   }
}

ReactDOM.render(<ListItem /> , document.getElementById('root'))