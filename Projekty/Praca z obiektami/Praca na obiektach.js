const data ={
    users:[
        {
            id: 1,
            age:29,
            name: "Sylweter",
            sex: "male"
        },
        {
            id: 2,
            age:49,
            name: "Janusz",
            sex: "male"
        },
        {
            id: 3,
            age:19,
            name: "Tadeusz",
            sex: "male"
        },
        {
            id: 4,
            age:20,
            name: "Joanna",
            sex: "female"
        },
        {
            id: 5,
            age:19,
            name: "Zuzanna",
            sex: "female"
        },
        {
            id: 6,
            age:30,
            name: "Karol",
            sex: "male"
        },
    ]
}
const Item = ({user}) => (
    <div className="userInfo">
        <h2>{user.name}</h2>
        <p>Informacje o uzytkowniku</p>
        <p>Wiek użytkownika <strong>{user.age}</strong></p>
        <p>Płeć użytkownika <strong>{user.sex}</strong></p>
    </div>
)

class ListItem extends React.Component {
    // state ={
    //     items: ["jabłko", "śliwka", "gruszka"]
    // }
   render(){

    let users = this.props.data.users
    users = users.filter((user)=>user.sex === "male")
    const Items = users.map(user => <Item key={user.id} user={user} />)

       return(
           <ul>
              {Items}
           </ul> 
       )
   }
}

ReactDOM.render(<ListItem data={data} /> , document.getElementById('root'))