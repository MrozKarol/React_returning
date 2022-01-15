import React from 'react';

const UserLList = (props) => {
const users = props.users
    return ( 
        <div>
        <table>
        <tbody>
        {users.map(user => 
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.firstName}</td>
          <td>{user.lastName}</td>
          <td>{user.department}</td>
          <td>{user.salary} {user.currency}</td>
        </tr>)}
        </tbody>
      </table>
        </div>
     );
}
 
export default UserLList;