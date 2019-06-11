const data ={
    users:[
        {
            id: 1,
            age:29,
            name: "Sylweter",
        },
        {
            id: 2,
            age:49,
            name: "Janusz",
        },
        {
            id: 3,
            age:19,
            name: "Tadeusz",
        },

    ]
}
const Item = (props) => <li>{`owoc ${props.content}`}</li>

class ListItem extends React.Component {
    // state ={
    //     items: ["jabłko", "śliwka", "gruszka"]
    // }
   render(){

    const Items = this.state.items.map(item => <Item key={item} content={item} />)

       return(
           <ul>
              {Items}
           </ul> 
       )
   }
}

ReactDOM.render(<ListItem data={data} /> , document.getElementById('root'))