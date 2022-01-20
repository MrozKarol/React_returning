import React from 'react';


const UserLList = (props) => {
  const users = props.users
  console.log(users.length)
  // console.log(users)
  const usersSalary = users.map(sumanar => sumanar.salary).map(Number)
  let itemSum =0
  
  usersSalary.forEach(item => itemSum +=item)
  let counter = users.length / users.length
  // console.log(usersSalary, itemSum)
  
  return (
    <div>
      <table>
        {users.length>0 ? <tbody>
          {users.map(user =>
            <tr key={user.id}>
              <td>{counter++}</td>
              <td style={user.firstName ? {background:'greenyellow'}:{background:'red'}}>{user.firstName}</td>
              <td style={user.lastName? {background:'greenyellow'}:{background:'red'}}>{user.lastName}</td>
              <td style={user.department? {background:'greenyellow'}:{background:'red'}}>{user.department}</td>
              <td style={user.salary ? {background:'greenyellow'}:{background:'red'}}>{user.salary} {user.currency}</td>
            </tr>)}
        </tbody>: 'brak danych' }
        {itemSum ?  <tfoot>
          <tr>
            <td colSpan="3"></td>
            <td>Summary</td>
            <td>{itemSum ? itemSum : null}</td>
            </tr>
        </tfoot> : null}
       
      </table>
    </div>
  );
}

export default UserLList;