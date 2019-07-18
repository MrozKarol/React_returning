import React from 'react';
import './UsersList.css'

const UsersList = (props) => {
    // console.log(props.users)
    const users = props.users.map(user =>(
        <div key={user.login.uuid}>
            <img src={user.picture.large} alt="k" 
            style={{border: '1px solid red'}} />
            <h2>{`${user.name.title} ${user.name.first } ${user.name.last }`}</h2>
            <p>Age: {user.dob.age}</p>
            <a href={user.email}>{user.email}</a>
        </div>
    ))
    return (
        <div className="users">
          {users}
        </div>
    );
}

export default UsersList;