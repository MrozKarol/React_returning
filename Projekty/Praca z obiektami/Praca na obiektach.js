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
const Item = ({user}) => (
    <div>
        <p>Użytkownik {user.name}</p>
        <p>Ma {user.age} lat</p>
    </div>
)

class ListItem extends React.Component {
    // state ={
    //     items: ["jabłko", "śliwka", "gruszka"]
    // }
   render(){

    const users = this.props.data.users 
    const Items = users.map(user => <Item key={user.id} user={user} />)

       return(
           <ul>
              {Items}
           </ul> 
       )
   }
}

ReactDOM.render(<ListItem data={data} /> , document.getElementById('root'))