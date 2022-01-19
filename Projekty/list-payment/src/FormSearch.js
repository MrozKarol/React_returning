import React from 'react';



const FormSearch = (props) => {

    const handleSubmit = (e) =>{

        e.preventDefault()
        // console.log(props.users.users)
        let users = props.users.users
        users = users.filter((user)=>user.firstName === 'John')
        console.log(users)
       
    }

const showSearUsers = () => {
  <div>Jan</div>
}

    return (  
    <div>
        <form  onSubmit={handleSubmit}>
            <label htmlFor="user">Name:
              <input type="text" id='searchFirstName' name="searchFirstName" value={props.searchFirstName} onChange={props.onChange}  />
            </label>
            <button >Szukaj</button>
          </form>
        {this.showSearUsers}
        </div> );
}
 
export default FormSearch;