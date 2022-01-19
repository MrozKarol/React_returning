import React from 'react';


const UserLList = (props) => {
  const users = props.users
  // console.log(users)
  const usersSalary = users.map(sumanar => sumanar.salary).map(Number)
  let itemSum =0
  usersSalary.forEach(item => itemSum +=item)
  let counter = users.length / users.length
  // console.log(usersSalary, itemSum)
  return (
    <div>
      <table>
        <tbody>
          {users.map(user =>
            <tr key={user.id}>
              <td>{counter++}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.department}</td>
              <td>{user.salary} {user.currency}</td>
            </tr>)}
        </tbody>
        {itemSum ?  <tfoot>
          <tr>
            <td colspan="3"></td>
            <td>Summary</td>
            <td>{itemSum ? itemSum : null}</td>
            </tr>
        </tfoot> : null}
       
      </table>
    </div>
  );
}

export default UserLList;