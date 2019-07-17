import React from 'react';

const UsersList = (props) => {
    // console.log(props.users)
    const users = props.users.map(user =>(
        <div key={user.login.uuid}>
            <img src={user.picture.thumbnail} alt=""/>
            <h2>{`${user.name.title} ${user.name.first } ${user.name.last }`}</h2>
            <p>Age: {user.dob.age}</p>
            <a href={user.email}>{user.email}</a>
        </div>
    ))
    return (
        <ul>
          {users}
        </ul>
    );
}

export default UsersList;