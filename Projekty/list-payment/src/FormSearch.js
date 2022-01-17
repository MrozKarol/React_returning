import React from 'react';



const FormSearch = (props) => {

    const handleSubmit = (e) =>{

        e.preventDefault()
        // console.log(props.users.users)
        let users = props.users.users
        users = users.filter((user)=>user.firstName === 'John')
        console.log(users)
       
    }



    
}
 
export default FormSearch;